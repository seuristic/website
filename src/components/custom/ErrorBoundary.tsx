import { Component, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircleIcon } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    // In production, you could log to an error reporting service
    // Example: logErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex min-h-[calc(100vh-69px)] flex-col items-center justify-center gap-4 p-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <AlertCircleIcon className="text-destructive size-12" />
            <div className="space-y-2">
              <h1 className="font-serif text-2xl font-medium">
                Something went wrong
              </h1>
              <p className="text-muted-foreground max-w-md text-sm">
                {this.state.error?.message ||
                  'An unexpected error occurred. Please try refreshing the page.'}
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={this.handleReset} variant="outline">
                Try again
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="default"
              >
                Refresh page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
