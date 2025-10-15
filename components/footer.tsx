import { Home } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold font-serif">Gogebic Homes</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Gogebic Homes. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">Proudly serving Michigan's Upper Peninsula</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
