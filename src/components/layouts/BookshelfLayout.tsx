import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type BookshelfLayoutProps = {
  children: ReactNode
}

const BookshelfLayout = ({ children }: BookshelfLayoutProps) => {
  return <BaseLayout borderColumns={2}>{children}</BaseLayout>
}

export default BookshelfLayout
