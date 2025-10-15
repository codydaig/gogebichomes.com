import { Button } from "@/components/ui/button"
import { Home, MapPin, Trees } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/upper-peninsula-michigan-forest-lake-landscape-aut.jpg"
          alt="Upper Peninsula Michigan landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-8 w-8 text-primary-foreground" />
            <span className="text-2xl font-bold text-primary-foreground font-serif">Gogebic Homes</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-primary-foreground">
            <a href="#listings" className="hover:text-accent transition-colors">
              Listings
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-5 w-5 text-accent" />
          <p className="text-primary-foreground/90 text-lg">Upper Peninsula, Michigan</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-serif text-balance">
          Find Your Home in the Heart of the UP
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
          Discover exceptional properties nestled among pristine forests, crystal-clear lakes, and the natural beauty
          that makes Michigan's Upper Peninsula truly special.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8" asChild>
            <a href="#listings">View Available Homes</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Feature badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Trees className="h-8 w-8 text-accent mb-3 mx-auto" />
            <h3 className="text-primary-foreground font-semibold mb-2">Natural Beauty</h3>
            <p className="text-primary-foreground/80 text-sm">Surrounded by forests and lakes</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Home className="h-8 w-8 text-accent mb-3 mx-auto" />
            <h3 className="text-primary-foreground font-semibold mb-2">Quality Homes</h3>
            <p className="text-primary-foreground/80 text-sm">Carefully selected properties</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <MapPin className="h-8 w-8 text-accent mb-3 mx-auto" />
            <h3 className="text-primary-foreground font-semibold mb-2">Local Expertise</h3>
            <p className="text-primary-foreground/80 text-sm">Deep knowledge of the UP</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
