import { Link } from 'react-router-dom'

const FontTest = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display mb-8 text-center text-4xl font-bold">
          Font Feature Settings Test
        </h1>

        <div className="mb-8 text-center">
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>

        {/* Inter Font Tests */}
        <section className="mb-12">
          <h2 className="font-display mb-6 text-2xl font-bold">
            Inter (font-sans) Features
          </h2>

          <div className="space-y-4">
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">
                Contextual Alternates (calt)
              </h3>
              <p className="font-base text-lg">
                The word "fi" should have a ligature: fi fl ff ffi ffl
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">
                Discretionary Ligatures (dlig)
              </h3>
              <p className="font-base text-lg">Special ligatures: ct st Th</p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Tabular Numbers (tnum)</h3>
              <p className="font-base text-lg">
                Numbers with consistent width: 0123456789
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Character Variants</h3>
              <p className="font-base text-lg">
                Different 'a' shapes: a a a a (should show variations)
              </p>
            </div>
          </div>
        </section>

        {/* Fraunces Font Tests */}
        <section className="mb-12">
          <h2 className="font-display mb-6 text-2xl font-bold">
            Fraunces (font-serif) Features
          </h2>

          <div className="space-y-4">
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Soft Features</h3>
              <p className="font-display text-lg">
                This text should have softer, more rounded characteristics
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Wonky Features</h3>
              <p className="font-display text-lg">
                This text should have more playful, irregular characteristics
              </p>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Large Display Text</h3>
              <p className="font-display text-4xl">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>

        {/* JetBrains Mono Font Tests */}
        <section className="mb-12">
          <h2 className="font-display mb-6 text-2xl font-bold">
            JetBrains Mono (font-mono) Features
          </h2>

          <div className="space-y-4">
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Programming Ligatures</h3>
              <div className="font-code text-lg">
                <div>=== !== &lt;= &gt;= =&gt; -&gt; &lt;-</div>
                <div>&amp;&amp; || ++ -- ** // \\</div>
                <div>!= == &lt;= &gt;= :: .. ...</div>
                <div>-&gt; =&gt; &lt;- &lt;= :: .. ...</div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="mb-3 font-semibold">Code Example</h3>
              <div className="bg-muted font-code rounded p-4 text-sm">
                <div>function calculateTotal(items) {`{`}</div>
                <div> return items.reduce((sum, item) =&gt; {`{`}</div>
                <div> return sum + item.price;</div>
                <div> {`}`}, 0);</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Font Loading Check */}
        <section className="mb-12">
          <h2 className="font-display mb-6 text-2xl font-bold">
            Font Loading Status
          </h2>

          <div className="bg-card border-border rounded-lg border p-6">
            <div className="space-y-2">
              <div className="font-base">
                <strong>InterVariable:</strong>{' '}
                <span id="inter-status">Checking...</span>
              </div>
              <div className="font-display">
                <strong>Fraunces:</strong>{' '}
                <span id="fraunces-status">Checking...</span>
              </div>
              <div className="font-code">
                <strong>JetBrains Mono:</strong>{' '}
                <span id="jetbrains-status">Checking...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FontTest
