import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/custom/navbar'
import ErrorBoundary from '@/components/custom/ErrorBoundary'
import PageNotFound from '@/components/custom/PageNotFound'
import ScrollToTop from '@/components/custom/ScrollToTop'
import LoadingFallback from '@/components/custom/LoadingFallback'
import ComingSoon from '@/components/custom/ComingSoon'
import useFeatureFlag, { BLOGS_FLAG_KEY } from '@/hooks/useFeatureFlag'

const Home = lazy(() => import('@/pages/Home'))
const Photography = lazy(() => import('@/pages/Photography'))
const Bookshelf = lazy(() => import('@/pages/Bookshelf'))
const Blogs = lazy(() => import('@/pages/Blogs'))

const App = () => {
  const blogsEnabled = useFeatureFlag(BLOGS_FLAG_KEY, true)

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
            {blogsEnabled ? (
              <>
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<Blogs />} />
              </>
            ) : (
              <Route
                path="/blogs/*"
                element={
                  <ComingSoon
                    title="Blogs coming soon"
                    description="Stay tuned."
                  />
                }
              />
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
