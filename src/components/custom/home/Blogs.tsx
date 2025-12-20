import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ContentLineDivider, LineDivider } from '@/components/custom/Dividers'
import { getBlogPosts } from '@/lib/blogs'
import { ArrowUpRightIcon } from 'lucide-react'
import BlogCard from '../blogs/BlogCard'
import { cn } from '@/lib/utils'

const Blogs = () => {
  const blogs = useMemo(() => getBlogPosts(), [])

  return (
    <>
      <div className="bg-background col-span-1 p-1">
        <span className="text-tertiary-foreground top-[calc(5rem+4px)] flex font-mono text-xs sm:sticky lg:justify-end">
          writings
        </span>
      </div>
      <div className="gap-x-gutter-sm lg:gap-x-gutter col-span-1 grid grid-cols-1 lg:col-span-2 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <Fragment key={blog.id}>
            <ContentLineDivider
              className={cn(
                'hidden lg:block',
                index > 0 && index % 2 === 0 ? 'col-span-full' : 'lg:hidden'
              )}
            />
            <LineDivider className="lg:hidden" />
            <div className={cn('group col-span-1 p-1')}>
              <BlogCard blog={blog} />
            </div>
          </Fragment>
        ))}
        <ContentLineDivider
          className={cn(
            'hidden lg:block',
            blogs && blogs.length % 2 === 0 ? 'col-span-full' : 'lg:hidden'
          )}
        />
        <LineDivider className="lg:hidden" />
        <div className="flex min-h-20 items-center justify-center p-1 lg:min-h-50">
          <Link
            to="/blogs"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
          >
            Read more
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Blogs
