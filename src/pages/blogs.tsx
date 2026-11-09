import { Link } from "react-router-dom"

import { posts, type Post } from "@/lib/blog"

const yearOf = (post: Post) => post.date.slice(0, 4) || "Undated"

/* Posts are already newest first, so years come out newest first too. */
const years = [...new Set(posts.map(yearOf))]

export function BlogsPage() {
  return (
    <section className="flex flex-col gap-section">
      <h1 className="font-display text-4xl leading-tight">Blogs</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Nothing published yet.</p>
      ) : (
        <div className="flex flex-col gap-section">
          {years.map((year) => (
            <section key={year} className="flex flex-col gap-block">
              {/* Year tag, ruled like the date on a post page. */}
              <div className="flex items-center gap-stack">
                <h2 className="font-mono text-xs text-muted-foreground">
                  {year}
                </h2>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-muted-foreground/10"
                />
              </div>

              <ul className="flex flex-col gap-block">
                {posts
                  .filter((post) => yearOf(post) === year)
                  .map((post) => (
                    <li key={post.slug}>
                      {/* The whole entry is the link. Padding bleeds the
                          hover surface outward via a matching negative
                          margin, so the text keeps the page's left edge and
                          vertical rhythm. */}
                      <Link
                        to={`/blogs/${post.slug}`}
                        className="-m-stack block rounded-md p-stack hover:bg-accent"
                      >
                        <h3 className="font-display text-2xl leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
