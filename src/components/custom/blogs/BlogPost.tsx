import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import type { BlogPost as BlogPostType } from '@/lib/blogs'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'highlight.js/styles/github.css'

type BlogPostProps = {
  blog: BlogPostType
}

const BlogPost = ({ blog }: BlogPostProps) => {
  return (
    <article className="col-span-full">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/blogs">
            <ArrowLeft className="mr-2 size-4" />
            Back to Blogs
          </Link>
        </Button>
        <h1 className="text-foreground font-serif text-3xl font-bold md:text-4xl">
          {blog.title}
        </h1>
        {blog.date && (
          <time
            dateTime={blog.date}
            className="text-muted-foreground mt-2 block text-sm"
          >
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </div>
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-foreground mt-8 mb-4 font-serif text-3xl font-bold first:mt-0">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-foreground mt-6 mb-3 font-serif text-2xl font-semibold">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-foreground mt-4 mb-2 font-serif text-xl font-semibold">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-foreground mb-4 leading-7">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="text-foreground mb-4 ml-6 list-disc space-y-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="text-foreground mb-4 ml-6 list-decimal space-y-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-foreground leading-7">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-muted-foreground/30 text-muted-foreground border-l-4 pl-4 italic">
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:text-primary/80 underline"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={
                  href?.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                {children}
              </a>
            ),
            code(props) {
              const { node, inline, className, children, ...rest } = props as {
                node?: unknown
                inline?: boolean
                className?: string
                children?: ReactNode
              }
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <pre className="bg-muted mb-4 overflow-x-auto rounded-md p-4">
                  <code className={className} {...rest}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code
                  className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm"
                  {...rest}
                >
                  {children}
                </code>
              )
            },
            hr: () => <hr className="border-border my-8" />,
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className="border-border my-4 rounded-md border"
              />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default BlogPost
