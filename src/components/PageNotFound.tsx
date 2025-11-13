import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

const PageNotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-69px)] flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-serif text-6xl font-medium">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">Page not found</h2>
          <p className="text-muted-foreground max-w-md text-sm">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 size-4" />
              Go home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 size-4" />
            Go back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound

