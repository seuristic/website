import type { ReactNode } from 'react'
import BaseLayout from './BaseLayout'

type PhotographyLayoutProps = {
  children: ReactNode
}

const PhotographyLayout = ({ children }: PhotographyLayoutProps) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default PhotographyLayout
