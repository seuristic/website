import { marked } from "marked"

/**
 * Posts are markdown files in `src/content/blog/`, with `title`, `date` and
 * `excerpt` frontmatter. Drop a new `.md` in there and it shows up — the
 * filename becomes the slug.
 */
export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  html: string
}

const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function parse(raw: string) {
  const match = raw.match(FRONTMATTER)
  const meta: Record<string, string> = {}

  for (const line of match?.[1].split("\n") ?? []) {
    const sep = line.indexOf(":")
    if (sep < 1) continue
    meta[line.slice(0, sep).trim()] = line
      .slice(sep + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "")
  }

  return { meta, body: match ? raw.slice(match[0].length) : raw }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    return {
      slug: path.split("/").pop()!.replace(/\.md$/, ""),
      title: meta.title ?? "Untitled",
      date: meta.date ?? "",
      excerpt: meta.excerpt ?? "",
      html: marked.parse(body, { async: false }),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug)

/** Frontmatter dates are plain YYYY-MM-DD, so format in UTC — local time would
 *  shift them a day back for anyone west of Greenwich. */
export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
