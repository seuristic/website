import { Navigate, useParams } from 'react-router-dom'

import { formatDate, getPost, timeAgo } from '@/lib/blog'

export function BlogPostPage() {
  const post = getPost(useParams().slug)

  // Unknown slug → the bare 404 page, which lives outside the layout.
  if (!post) return <Navigate to="/404" replace />

  return (
    <article className="flex flex-col">
      <header className="flex flex-col gap-stack">
        <h1 className="font-display text-4xl leading-tight">{post.title}</h1>
        <p className="font-mono text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updated && (
            <span className="text-muted-foreground/70">
              {' '}
              (updated{' '}
              <time dateTime={post.updated} title={formatDate(post.updated)}>
                {timeAgo(post.updated)}
              </time>
              )
            </span>
          )}
        </p>
      </header>

      <div aria-hidden className="band my-block" />

      {/* Markdown comes from this repo's own `src/content/blog/`, not user input. */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
