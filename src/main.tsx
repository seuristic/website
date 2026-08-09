import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "@/App"
import { siteConfig } from "@/config/site"
import "@/index.css"

const root = document.documentElement
root.classList.toggle("mono-ligatures-off", !siteConfig.monoLigatures)
root.classList.toggle("sans-alternates-off", !siteConfig.sansAlternates)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
