import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center font-serif text-4xl font-bold">
          My Blog
        </h1>

        <div className="space-y-8">
          <article className="bg-card border-border rounded-lg border p-6">
            <h2 className="mb-3 font-serif text-2xl font-semibold">
              Getting Started with React and TypeScript
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on January 15, 2024
            </p>
            <p className="text-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-4">
              <Link
                to="/blogs/react-typescript-guide"
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>

          <article className="bg-card border-border rounded-lg border p-6">
            <h2 className="mb-3 font-serif text-2xl font-semibold">
              Building Modern Web Applications with Vite
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on January 10, 2024
            </p>
            <p className="text-foreground leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="mt-4">
              <Link
                to="/blogs/vite-modern-apps"
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>

          <article className="bg-card border-border rounded-lg border p-6">
            <h2 className="mb-3 font-serif text-2xl font-semibold">
              The Future of Web Development
            </h2>
            <p className="text-muted-foreground mb-4">
              Published on January 5, 2024
            </p>
            <p className="text-foreground leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <div className="mt-4">
              <Link
                to="/blogs/future-web-dev"
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blogs
