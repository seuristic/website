import { Fragment } from 'react'
import BlogCard from './BlogCard'
import type { BlogPost } from '@/lib/blogs'
import { LineDivider } from '@/components/custom/Dividers'
import { cn } from '@/lib/utils'

type BlogGridProps = {
  blogs: BlogPost[]
  containerClassName?: string
}

const BlogGrid = ({ blogs, containerClassName }: BlogGridProps) => {
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
    <div
      className={cn(
        'gap-x-gutter-sm lg:gap-x-gutter grid grid-cols-1 lg:grid-cols-3',
        containerClassName || 'col-span-full'
      )}
    >
      {Array.from({
        length: containerClassName ? blogs.length : Math.max(9, blogs.length),
      }).map((_, index) => {
        const blog = index < blogs.length ? blogs[index] : null
        return (
          <Fragment key={index}>
            <LineDivider
              className={cn(
                index > Math.max(3, blogs.length) && 'hidden lg:block',
                index > 0 &&
                  (index % 3 !== 0 || index === blogs.length - 1) &&
                  'lg:hidden'
              )}
            />
            {blog ? (
              <div className={cn('col-span-1 p-1')}>
                <BlogCard blog={blog} />
              </div>
            ) : (
              <div
                className={cn(
                  'col-span-1 min-h-50 p-1',
                  index > 3 && 'hidden lg:block'
                )}
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default BlogGrid
