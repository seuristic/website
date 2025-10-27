type AnchorProps = {
  href: string
  className?: string
  children: React.ReactNode
}

const Anchor = ({ href, className, children }: AnchorProps) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Anchor
