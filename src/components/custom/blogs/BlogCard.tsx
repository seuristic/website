import { Link } from 'react-router-dom'
import type { BlogPost } from '@/lib/blogs'
import { cn } from '@/lib/utils'

type BlogCardProps = {
  blog: BlogPost
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group block h-full transition-opacity hover:opacity-80"
    >
      <article className="border-border flex h-full flex-col border p-6">
        <h2 className="text-foreground font-serif text-xl font-semibold group-hover:underline">
          {blog.title}
        </h2>
        {blog.date && (
          <time
            dateTime={blog.date}
            className="text-muted-foreground mt-2 text-sm"
          >
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
        {blog.excerpt && (
          <p className="text-muted-foreground mt-4 line-clamp-3 text-sm">
            {blog.excerpt}
          </p>
        )}
      </article>
    </Link>
  )
}

export default BlogCard
