import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/custom/navbar'
import ErrorBoundary from '@/components/custom/ErrorBoundary'
import PageNotFound from '@/components/custom/PageNotFound'
import ScrollToTop from '@/components/custom/ScrollToTop'
import LoadingFallback from '@/components/custom/LoadingFallback'

const Home = lazy(() => import('@/pages/Home'))
const Photography = lazy(() => import('@/pages/Photography'))
const Bookshelf = lazy(() => import('@/pages/Bookshelf'))

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
