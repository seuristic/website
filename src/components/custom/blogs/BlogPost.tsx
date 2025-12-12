import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import type { BlogPost as BlogPostType } from '@/lib/blogs'
import 'highlight.js/styles/github.css'
import { LineDivider } from '../Dividers'
import Anchor from '../Anchor'

type BlogPostProps = {
  blog: BlogPostType
}

const BlogPost = ({ blog }: BlogPostProps) => {
  return (
    <>
      <div className="bg-background col-span-1 p-1 lg:col-span-2 lg:col-start-2">
        <h1 className="text-foreground font-serif text-4xl leading-tight font-medium md:text-5xl">
          {blog.title}
        </h1>
      </div>
      <LineDivider />
      <div className="col-span-1 p-1">
        <div className="flex items-center lg:justify-end">
          {blog.date && (
            <time
              dateTime={blog.date}
              className="text-muted-foreground font-mono text-sm"
            >
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      </div>
      <div className="bg-background col-span-2 hidden lg:block" />
      <LineDivider />
      <div className="col-span-1 hidden lg:block" />
      <article className="bg-background col-span-1 col-start-1 lg:col-span-2">
        <div className="markdown-content p-1">
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
                <p className="text-muted-foreground mb-4 leading-7">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="text-muted-foreground mb-4 ml-6 list-decimal space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-muted-foreground leading-7">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-muted-foreground/30 text-muted-foreground border-l-4 pl-4 italic">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <Anchor
                  href={href}
                  className="text-primary underline-offset-4 hover:underline"
                  target={
                    href && href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    href && href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {children}
                </Anchor>
              ),
              code(props) {
                const { node, inline, className, children, ...rest } =
                  props as {
                    node?: unknown
                    inline?: boolean
                    className?: string
                    children?: ReactNode
                  }
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <pre className="bg-muted mb-4 overflow-x-auto rounded-md">
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
    </>
  )
}

export default BlogPost
