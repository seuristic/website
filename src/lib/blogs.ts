// Automatically import all markdown files using import.meta.glob
// Using eager loading with ?raw query parameter
const blogModules = import.meta.glob<string>('../blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  slug: string
}

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): {
  frontmatter: Record<string, string>
  body: string
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, body: content }
  }

  const frontmatterText = match[1]
  const body = match[2]

  const frontmatter: Record<string, string> = {}
  const lines = frontmatterText.split('\n')

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    const value = line
      .slice(colonIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
    frontmatter[key] = value
  }

  return { frontmatter, body }
}

// Convert file path to slug
function pathToSlug(path: string): string {
  const filename = path.split('/').pop() || ''
  return filename.replace(/\.md$/, '')
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  return Object.entries(blogModules)
    .map(([path, content]) => {
      const contentStr = typeof content === 'string' ? content : String(content)
      const { frontmatter, body } = parseFrontmatter(contentStr)
      const slug = pathToSlug(path)

      return {
        id: slug,
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        excerpt: frontmatter.excerpt || '',
        content: body,
      }
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find(post => post.slug === slug)
}
