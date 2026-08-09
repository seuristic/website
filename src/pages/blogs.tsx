import { Link } from "react-router-dom"

import { formatDate, posts } from "@/lib/blog"

export function BlogsPage() {
  return (
    <section className="flex flex-col gap-section">
      <h1 className="font-display text-4xl leading-tight">Blogs</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Nothing published yet.</p>
      ) : (
        <ul className="flex flex-col gap-block">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-col gap-stack">
              <Link
                to={`/blogs/${post.slug}`}
                className="font-display text-2xl leading-snug underline-offset-4 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <time
                dateTime={post.date}
                className="font-mono text-xs text-muted-foreground"
              >
                {formatDate(post.date)}
              </time>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
