import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

/* Just the number, in the pixel face, centred on a bare screen (routed
   outside RootLayout, so no header or footer), with one way back. */
export function NotFoundPage() {
  return (
    <Container className="flex min-h-dvh flex-col items-center justify-center gap-block pb-optical">
      <h1 className="font-pixel-circle text-8xl sm:text-9xl">
        404
        <span className="sr-only"> page not found</span>
      </h1>
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">
          <ArrowLeft aria-hidden />
          Back to home
        </Link>
      </Button>
    </Container>
  )
}
