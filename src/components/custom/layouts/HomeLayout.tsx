import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type HomeLayoutProps = {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <BaseLayout borderColumns={1}>{children}</BaseLayout>
}

export default HomeLayout
