import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import ErrorBoundary from '@/components/ErrorBoundary'
import PageNotFound from '@/components/PageNotFound'

const Home = lazy(() => import('@/pages/Home'))
const Photography = lazy(() => import('@/pages/Photography'))

const LoadingFallback = () => (
  <div className="bg-background text-foreground flex min-h-[calc(100vh-69px)] items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="border-primary size-8 animate-spin rounded-full border-2 border-t-transparent" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
)

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
