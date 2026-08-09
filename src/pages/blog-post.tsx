import { Link, useParams } from "react-router-dom"

import { formatDate, getPost } from "@/lib/blog"

export function BlogPostPage() {
  const post = getPost(useParams().slug)

  if (!post) {
    return (
      <section className="flex flex-col gap-block">
        <h1 className="font-display text-4xl leading-tight">Not found</h1>
        <Link to="/blogs" className="underline underline-offset-4">
          Back to blogs
        </Link>
      </section>
    )
  }

  return (
    <article className="flex flex-col gap-section">
      <header className="flex flex-col gap-stack">
        <h1 className="font-display text-4xl leading-tight">{post.title}</h1>
        <time
          dateTime={post.date}
          className="font-mono text-xs text-muted-foreground"
        >
          {formatDate(post.date)}
        </time>
      </header>

      {/* Markdown comes from this repo's own `src/content/blog/`, not user input. */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
