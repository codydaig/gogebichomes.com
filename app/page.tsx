import { Hero } from "@/components/hero"
import { Listings } from "@/components/listings"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Listings />
      <Contact />
      <Footer />
    </main>
  )
}
