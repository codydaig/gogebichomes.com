"use client"

export function Listings() {
  return (
    <section id="listings" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">Available Properties</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse our current listings and find your perfect home in the Upper Peninsula
          </p>
        </div>

        {/* Embed container for property listings */}
        <div className="bg-card rounded-lg border border-border p-8 min-h-[600px]">
          <div className="text-center text-muted-foreground">
            <p className="mb-4">Paste your property listing embed code below:</p>
            <div className="bg-muted/50 rounded-md p-8 border-2 border-dashed border-border">
              <p className="text-sm font-mono">{`<!-- Your property listing embed code goes here -->`}</p>
              <p className="text-xs mt-4 text-muted-foreground">
                Replace this placeholder with your actual listing embed code
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Add a CTA below listings */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Don't see what you're looking for?</p>
          <a href="#contact" className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4">
            Contact us about upcoming properties
          </a>
        </div>
      </div>
    </section>
  )
}
