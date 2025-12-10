import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type BlogLayoutProps = {
  children: ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <BaseLayout borderColumns={2}>{children}</BaseLayout>
}

export default BlogLayout
