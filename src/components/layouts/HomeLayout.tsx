import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type HomeLayoutProps = {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default HomeLayout
