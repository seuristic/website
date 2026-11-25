import { Link } from 'react-router-dom'

import { posts, type Post } from '@/lib/blog'

const yearOf = (post: Post) => post.date.slice(0, 4) || 'Undated'

/* Posts are already newest first, so years come out newest first too. */
const years = [...new Set(posts.map(yearOf))]

export function BlogsPage() {
  return (
    <section className="flex flex-col">
      <h1 className="font-display text-4xl leading-tight">Blogs</h1>

      {posts.length === 0 ? (
        <>
          <div aria-hidden className="band my-block" />
          <p className="text-muted-foreground">Nothing published yet.</p>
        </>
      ) : (
        /* A hatched band opens the list and separates each year. Under it,
           the year row and its posts stack flush, divided only by 1px rules
           that run rail to rail. */
        <div className="mt-block flex flex-col">
          {years.map((year) => (
            <section key={year} className="flex flex-col">
              {/* -mt-px lays the band's top rule over the previous row's. */}
              <div aria-hidden className="band -mt-px" />
              <h2 className="-mx-inset border-b border-grid px-inset py-stack font-mono text-xs text-muted-foreground">
                {year}
              </h2>

              <ul className="flex flex-col">
                {posts
                  .filter((post) => yearOf(post) === year)
                  .map((post) => (
                    <li
                      key={post.slug}
                      className="-mx-inset border-b border-grid"
                    >
                      {/* The whole row is the link; its hover shading runs
                          rail to rail while the text keeps the column edge. */}
                      <Link
                        to={`/blogs/${post.slug}`}
                        className="block px-inset py-block hover:bg-accent"
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
