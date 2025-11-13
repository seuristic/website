import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type PhotographyLayoutProps = {
  children: ReactNode
}

const PhotographyLayout = ({ children }: PhotographyLayoutProps) => {
  return <BaseLayout borderColumns={2}>{children}</BaseLayout>
}

export default PhotographyLayout
