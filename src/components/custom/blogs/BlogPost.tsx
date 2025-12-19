import { type ReactNode, isValidElement, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import type { BlogPost as BlogPostType } from '@/lib/blogs'
import { LineDivider } from '../Dividers'
import Anchor from '../Anchor'

type BlogPostProps = {
  blog: BlogPostType
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const isExternalLink = (href?: string) =>
  Boolean(href && href.startsWith('http'))

const getCodeText = (node: ReactNode): string => {
  if (node == null || typeof node === 'boolean') {
    return ''
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(getCodeText).join('')
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getCodeText(node.props.children)
  }

  return ''
}

const markdownComponents = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-foreground mt-8 mb-4 font-serif text-3xl font-bold first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-foreground mt-6 mb-3 font-serif text-2xl font-semibold">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-foreground mt-4 mb-2 font-serif text-xl font-semibold">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-muted-foreground mb-2 leading-7">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="text-muted-foreground mb-4 ml-6 list-disc [&_ol]:mb-0 [&_ul]:mb-0">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="text-muted-foreground mb-4 ml-6 list-decimal [&_ol]:mb-0 [&_ul]:mb-0">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="text-muted-foreground leading-7">{children}</li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-muted-foreground/30 text-muted-foreground border-l-4 pl-4 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <Anchor
      href={href}
      className="text-primary underline-offset-4 hover:underline"
      target={isExternalLink(href) ? '_blank' : undefined}
      rel={isExternalLink(href) ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Anchor>
  ),
  code(props: {
    node?: unknown
    inline?: boolean
    className?: string
    children?: ReactNode
  }) {
    const { inline, className, children, ...rest } = props
    const match = /language-(\w+)/.exec(className || '')
    const [copied, setCopied] = useState(false)
    const codeText = getCodeText(children)

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(codeText)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1500)
      } catch {
        setCopied(false)
      }
    }

    if (!inline && match) {
      return (
        <div className="relative mb-4">
          <button
            type="button"
            onClick={handleCopy}
            className="bg-background text-muted-foreground hover:text-foreground absolute top-2 right-2 rounded border px-2 py-1 text-xs"
            aria-label="Copy code"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
          <pre className="overflow-x-auto rounded-md border">
            <code className={className} {...rest}>
              {children}
            </code>
          </pre>
        </div>
      )
    }

    return (
      <code className="bg-muted rounded font-mono text-sm" {...rest}>
        {children}
      </code>
    )
  },
  hr: () => <hr className="border-border my-8" />,
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt} className="my-4 rounded-md border" />
  ),
}

const BlogPost = ({ blog }: BlogPostProps) => {
  const formattedDate = blog.date ? formatDate(blog.date) : null

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
          {formattedDate && (
            <time
              dateTime={blog.date}
              className="text-tertiary-foreground font-mono text-sm"
            >
              {formattedDate}
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
            components={markdownComponents}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  )
}

export default BlogPost
