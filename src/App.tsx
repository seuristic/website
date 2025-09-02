import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import Blogs from '@/pages/Blogs'
import Photography from '@/pages/Photography'
import FontTest from '@/pages/FontTest'

function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-center font-serif text-4xl font-bold">
        Welcome to Mohammad Shahanwaz's Website
      </h1>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center">
        I'm a passionate developer and photographer. Explore my blog posts and
        photography portfolio to learn more about my work and interests.
      </p>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/font-test" element={<FontTest />} />
      </Routes>
    </Router>
  )
}

export default App
