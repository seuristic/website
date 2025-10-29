import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'

const Home = lazy(() => import('@/pages/Home'))
const Photography = lazy(() => import('@/pages/Photography'))

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <div className="bg-background text-foreground flex min-h-[calc(100vh-69px)] items-center justify-center text-sm">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
