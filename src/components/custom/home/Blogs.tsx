import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ContentLineDivider, LineDivider } from '@/components/custom/Dividers'
import { getBlogPosts } from '@/lib/blogs'
import { ArrowUpRight } from 'lucide-react'
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
        <div className="p-1 lg:min-h-50">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="h-full w-full cursor-pointer rounded-md border"
            >
              Read more
              <ArrowUpRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Blogs
