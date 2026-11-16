import { Navigate, useParams } from 'react-router-dom'

import { formatDate, getPost } from '@/lib/blog'

export function BlogPostPage() {
  const post = getPost(useParams().slug)

  // Unknown slug → the bare 404 page, which lives outside the layout.
  if (!post) return <Navigate to="/404" replace />

  return (
    <article className="flex flex-col gap-section">
      <header className="flex flex-col gap-stack">
        <h1 className="font-display text-4xl leading-tight">{post.title}</h1>
        {/* The rule takes the rest of the row and sits on the date's midline. */}
        <div className="flex items-center gap-stack">
          <time
            dateTime={post.date}
            className="font-mono text-sm text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
          <span aria-hidden className="h-px flex-1 bg-muted-foreground/10" />
        </div>
      </header>

      {/* Markdown comes from this repo's own `src/content/blog/`, not user input. */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
