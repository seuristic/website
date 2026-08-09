import { BrowserRouter, Route, Routes } from "react-router-dom"

import { RootLayout } from "@/components/layout/root-layout"
import { BlogPostPage } from "@/pages/blog-post"
import { BlogsPage } from "@/pages/blogs"
import { HomePage } from "@/pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
