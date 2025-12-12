type AnchorProps = {
  href?: string
  className?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

const Anchor = ({ href, className, target, rel, children }: AnchorProps) => {
  return (
    <a href={href} className={className} target={target} rel={rel} title={href}>
      {children}
    </a>
  )
}

export default Anchor
