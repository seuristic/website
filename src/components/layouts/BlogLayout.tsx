import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type BlogLayoutProps = {
  children: ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default BlogLayout
