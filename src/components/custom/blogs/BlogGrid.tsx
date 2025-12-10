import { Fragment } from 'react'
import BlogCard from './BlogCard'
import type { BlogPost } from '@/lib/blogs'
import { LineDivider } from '@/components/custom/Dividers'
import { cn } from '@/lib/utils'

type BlogGridProps = {
  blogs: BlogPost[]
}

const BlogGrid = ({ blogs }: BlogGridProps) => {
  if (blogs.length === 0) {
    return (
      <div className="col-span-full p-4">
        <div className="border-muted text-muted-foreground rounded-md border p-6 text-center">
          No blog posts available yet.
        </div>
      </div>
    )
  }

  return (
    <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-full grid grid-cols-1 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <Fragment key={blog.id}>
          <LineDivider
            className={cn(
              index > 0 &&
                (index % 3 !== 0 || index === blogs.length - 1) &&
                'lg:hidden'
            )}
          />
          <div className={cn('col-span-1 p-1')}>
            <BlogCard blog={blog} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default BlogGrid
