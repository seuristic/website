import { marked } from 'marked'

/**
 * Each post is a folder in `src/content/blog/`: `<slug>/index.md` with `title`,
 * `date` and `excerpt` frontmatter, plus any images beside it, referenced
 * relatively (`![alt](./diagram.png)`). The folder name becomes the slug.
 * `draft: true` keeps a post to `npm run dev`; it is left out of production
 * builds (but the files are still public in the repo).
 */
export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  draft: boolean
  html: string
}

const files = import.meta.glob('../content/blog/*/index.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/* Vite copies these into the build with hashed names; this maps each source
   path to its final URL. */
const images = import.meta.glob(
  '../content/blog/*/**/*.{png,jpg,jpeg,gif,webp,avif,svg}',
  { query: '?url', import: 'default', eager: true },
) as Record<string, string>

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function parse(raw: string) {
  const match = raw.match(FRONTMATTER)
  const meta: Record<string, string> = {}

  for (const line of match?.[1].split('\n') ?? []) {
    const sep = line.indexOf(':')
    if (sep < 1) continue
    meta[line.slice(0, sep).trim()] = line
      .slice(sep + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')
  }

  return { meta, body: match ? raw.slice(match[0].length) : raw }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    const dir = path.replace(/index\.md$/, '')
    return {
      slug: dir.split('/').at(-2)!,
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '',
      excerpt: meta.excerpt ?? '',
      draft: meta.draft === 'true',
      html: marked.parse(body, {
        async: false,
        // Relative image paths resolve against the post's folder. Absolute
        // and remote URLs pass through untouched.
        walkTokens: (token) => {
          if (token.type !== 'image') return
          const local = images[dir + token.href.replace(/^\.\//, '')]
          if (local) token.href = local
        },
      }),
    }
  })
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug)

/** Frontmatter dates are plain YYYY-MM-DD, so format in UTC — local time would
 *  shift them a day back for anyone west of Greenwich. */
export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
