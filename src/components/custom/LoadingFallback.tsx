const LoadingFallback = () => (
  <div className="bg-background text-foreground flex min-h-[calc(100vh-69px)] items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="border-primary size-8 animate-spin rounded-full border-2 border-t-transparent" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
)

export default LoadingFallback
