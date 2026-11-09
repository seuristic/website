import { readFileSync } from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* Production builds swap a draft post's markdown for bare frontmatter and its
   images for empty URLs, so none of it reaches the bundle; src/lib/blog.ts
   then drops the post from the list. */
const dropDrafts = (): Plugin => ({
  name: 'drop-draft-posts',
  apply: 'build',
  enforce: 'pre',
  load(id) {
    const file = id.split('?')[0]
    const post = file.match(/^(.*\/src\/content\/blog\/[^/]+)\//)?.[1]
    if (!post) return
    const frontmatter = readFileSync(`${post}/index.md`, 'utf8').match(
      /^---\r?\n([\s\S]*?)\r?\n---/,
    )
    if (!/^draft:\s*['"]?true['"]?\s*$/m.test(frontmatter?.[1] ?? '')) return
    const stub = file.endsWith('.md') ? '---\ndraft: true\n---\n' : ''
    return `export default ${JSON.stringify(stub)}`
  },
})

export default defineConfig({
  plugins: [dropDrafts(), react(), tailwindcss()],
  server: { port: 3000 },
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
})
