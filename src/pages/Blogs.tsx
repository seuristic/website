import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import BlogLayout from '@/components/layouts/BlogLayout'
import { LineDivider, SectionDivider } from '@/components/custom/Dividers'
import { SEO } from '@/components/custom/SEO'
import PageHeader from '@/components/custom/PageHeader'
import BlogGrid from '@/components/custom/blogs/BlogGrid'
import BlogPost from '@/components/custom/blogs/BlogPost'
import { getBlogPosts, getBlogPost } from '@/lib/blogs'

const Blogs = () => {
  const { slug } = useParams<{ slug?: string }>()
  const blogs = useMemo(() => getBlogPosts(), [])

  // If slug is provided, show individual blog post
  if (slug) {
    const blog = getBlogPost(slug)
    if (!blog) {
      return <Navigate to="/blogs" replace />
    }
    return (
      <>
        <SEO
          title={blog.title}
          description={blog.excerpt || `Read ${blog.title} on my blog`}
          url={`/blogs/${blog.slug}`}
        />
        <BlogLayout>
          <BlogPost blog={blog} />
          <SectionDivider />
        </BlogLayout>
      </>
    )
  }

  // Otherwise, show blog list
  return (
    <>
      <SEO
        title="Blogs"
        description="Thoughts, tutorials, and insights on software development and more."
        url="/blogs"
      />
      <BlogLayout>
        <PageHeader
          title="Blogs"
          description="Thoughts, tutorials, and insights"
        />
        <LineDivider />
        <BlogGrid blogs={blogs} />
        <SectionDivider />
      </BlogLayout>
    </>
  )
}

export default Blogs
