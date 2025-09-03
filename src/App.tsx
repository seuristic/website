import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import Blogs from '@/pages/Blogs'
import Photography from '@/pages/Photography'
import Home from '@/pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  )
}

export default App
