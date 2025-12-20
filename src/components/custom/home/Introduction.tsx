import Anchor from '@/components/custom/Anchor'
import { LineDivider } from '@/components/custom/Dividers'

const Introduction = () => {
  return (
    <>
      <div className="bg-background col-span-1 row-span-3 p-1">
        <span className="text-tertiary-foreground top-[calc(5rem+4px)] flex font-mono text-xs sm:sticky lg:justify-end">
          intro
        </span>
      </div>

      <LineDivider className="lg:hidden" />

      <div className="bg-background col-span-1 p-1 lg:col-span-2">
        <p className="text-muted-foreground text-justify">
          I'm a Software Engineer who builds thoughtful, reliable products
          across frontend, backend, and AI-driven systems. I work with modern
          web stacks, cloud infrastructure, and applied AI workflows to turn
          ideas into scalable solutions. I enjoy collaborating on high-impact
          products, mentoring engineers, and iterating quickly based on real
          user feedback.
          <br />
          <br />
          Currently, I work as a UI Engineer (AI) at{' '}
          <Anchor
            href="https://nexla.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Nexla
          </Anchor>
          , where I design and develop user interfaces for{' '}
          <Anchor
            href="https://express.dev"
            className="text-primary underline-offset-4 hover:underline"
          >
            Express
          </Anchor>
          , an AI-powered platform for building and managing data flows and
          pipelines. I work closely with product, backend, and platform teams to
          bridge complex systems with clean, intuitive interfaces, ensuring
          reliability, scalability, and a strong user experience across the
          product.
          <br />
          <br />
          Previously, I worked at{' '}
          <Anchor
            href="https://www.bosscoderacademy.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            Bosscoder Academy
          </Anchor>{' '}
          as a Lead Software Engineer, where I helped build a large-scale
          learning platform from scratch. My work spanned delivering features
          such as AI-driven mentorship, an in-house doubt support chat system, a
          code execution platform, and an HLS/DASH-based video player. Alongside
          hands-on engineering, I took ownership of architectural decisions,
          explored cloud infrastructure, and led a technical team to ship
          robust, production-ready systems.
        </p>
      </div>
    </>
  )
}

export default Introduction
