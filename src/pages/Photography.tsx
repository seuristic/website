import { Link } from 'react-router-dom'

const Photography = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display mb-8 text-center text-4xl font-bold">
          Photography Portfolio
        </h1>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Capturing moments and telling stories through the lens. Here's a
          collection of my favorite photographs from various travels and
          experiences.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">Mountain Landscape</span>
            </div>
            <div className="p-4">
              <h3 className="font-display mb-2 font-semibold">
                Mountain Vista
              </h3>
              <p className="text-muted-foreground text-sm">
                A breathtaking view from the summit during golden hour.
              </p>
            </div>
          </div>

          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">Urban Architecture</span>
            </div>
            <div className="p-4">
              <h3 className="font-display mb-2 font-semibold">City Lights</h3>
              <p className="text-muted-foreground text-sm">
                The vibrant energy of the city captured at night.
              </p>
            </div>
          </div>

          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">
                Portrait Photography
              </span>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-serif font-semibold">Human Stories</h3>
              <p className="text-muted-foreground text-sm">
                Intimate portraits that capture the essence of human emotion.
              </p>
            </div>
          </div>

          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">Nature Close-up</span>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-serif font-semibold">Natural Details</h3>
              <p className="text-muted-foreground text-sm">
                Macro photography revealing the beauty in small things.
              </p>
            </div>
          </div>

          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">Street Photography</span>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-serif font-semibold">Street Life</h3>
              <p className="text-muted-foreground text-sm">
                Candid moments from daily life in the city.
              </p>
            </div>
          </div>

          <div className="bg-card border-border overflow-hidden rounded-lg border">
            <div className="bg-muted flex h-64 items-center justify-center">
              <span className="text-muted-foreground">Travel Photography</span>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-serif font-semibold">Wanderlust</h3>
              <p className="text-muted-foreground text-sm">
                Memories from travels around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in working together or purchasing prints?
          </p>
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Photography
