import { Link } from 'react-router-dom'
import type { BlogPost } from '@/lib/blogs'
import { Calendar } from 'lucide-react'

type BlogCardProps = {
  blog: BlogPost
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="group block h-full min-h-50">
      <article className="text-accent-foreground hover:bg-accent/50 dark:hover:bg-accent/50 flex h-full flex-col gap-2 rounded-md border p-6 transition-colors">
        <h2 className="text-foreground group-hover:text-secondary-foreground font-serif text-xl font-semibold">
          {blog.title}
        </h2>
        {blog.excerpt && (
          <p className="text-muted-foreground line-clamp-3 text-ellipsis">
            {blog.excerpt}
          </p>
        )}
        {blog.date && (
          <time
            dateTime={blog.date}
            className="text-muted-foreground mt-auto inline-flex items-center gap-2 font-mono text-sm"
          >
            <Calendar className="size-4" />
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </article>
    </Link>
  )
}

export default BlogCard
