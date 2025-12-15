import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import FlagsmithClientProvider from '@/providers/FlagsmithProvider'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <FlagsmithClientProvider>
        <App />
        <SpeedInsights />
        <Analytics />
      </FlagsmithClientProvider>
    </HelmetProvider>
  </StrictMode>
)
