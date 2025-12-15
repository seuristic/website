type ComingSoonProps = {
  title?: string
  description?: string
}

const ComingSoon = ({
  title = 'Coming Soon',
  description = 'This page will be live shortly.',
}: ComingSoonProps) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-foreground font-serif text-4xl font-semibold sm:text-5xl">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-lg text-lg">{description}</p>
    </div>
  )
}

export default ComingSoon
