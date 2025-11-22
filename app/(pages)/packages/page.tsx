"use client"

import Link from "next/link"
import { PackageCard } from "@/components/package-card"
import { ArrowLeft } from "lucide-react"

const ALL_PACKAGES = [
  {
    id: 1,
    name: "First Wave Escape",
    price: "330",
    period: "4 Days / 3 Nights",
    category: "Surf Packages",
    image: "/hero4.jpg",
    idealFor: "Perfect for beginners & quick surf getaways",
    description:
      "A short but unforgettable surf escape. Perfect for beginners or anyone wanting a quick break under the Moroccan sun.",
    features: [
      "3 nights accommodation",
      "Daily meals (breakfast, lunch, dinner)",
      "2 surf lessons with certified instructors",
      "Daily transport to surf spots",
      "Agadir airport/bus station transfers",
      "Beginner, Intermediate, and Advanced coaching",
    ],
    extraFeatures: [
      "Free surfboard & wetsuit",
      "Welcome tea at check-in",
      "Community dinner night",
    ],
  },
  {
    id: 2,
    name: "Longboard Living",
    price: "520",
    period: "6 Days / 5 Nights",
    category: "Surf Packages",
    image: "/hero.jpg",
    idealFor: "Travelers wanting a full week of surf & community",
    description:
      "Our most popular surf & stay option. A full week of surf, food, community, and ocean life.",
    features: [
      "5 nights in shared room",
      "Daily meals (breakfast, lunch, dinner)",
      "4 days surf lessons with certified instructors",
      "Unlimited surf equipment",
      "1 yoga class",
      "Surf photos",
      "Agadir airport/bus station transfers",
      "Beginner, Intermediate, and Advanced coaching",
    ],
    extraFeatures: [
      "Daily surf spot scouting",
      "Sunset chill night",
      "Free digital surf album",
    ],
  },
  {
    id: 3,
    name: "Mersawi Flow Week",
    price: "590",
    period: "7 Days / 6 Nights",
    category: "Surf Packages",
    image: "/hero1.jpg",
    idealFor: "Adventurers looking for surf + culture + nature",
    description:
      "The complete Moroccan surf journey—surfing, yoga, adventure, and full immersion into Mersawi culture.",
    features: [
      "6 nights accommodation",
      "Daily meals (breakfast, lunch, dinner)",
      "5 surf lessons with certified instructors",
      "Unlimited surf equipment",
      "Paradise Valley trip",
      "2 yoga classes",
      "Agadir airport/bus station transfers",
      "Beginner, Intermediate, and Advanced coaching",
    ],
    extraFeatures: [
      "Mersawi culture walk",
      "Campfire storytelling night",
      "Free eco water bottle",
    ],
  },
  {
    id: 4,
    name: "Endless Lines Quest",
    price: "690",
    period: "7 Days / 6 Nights",
    category: "Surf Packages",
    image: "/hero3.jpg",
    idealFor: "Surfers seeking a full premium surf adventure",
    description:
      "Our most complete surf adventure with daily coaching, yoga, and a full trip to Imsouane.",
    features: [
      "6 nights accommodation",
      "Daily meals (breakfast, lunch, dinner)",
      "5 days surf lessons with certified instructors",
      "Unlimited surf equipment",
      "Imsouane day trip",
      "2 yoga classes",
      "Agadir airport/bus station transfers",
      "Beginner, Intermediate, and Advanced coaching",
    ],
    extraFeatures: [
      "Exclusive Imsouane guide",
      "Advanced wave analysis",
      "Camp BBQ Night",
    ],
  },
]



export default function PackagesPage() {
  const categories = Array.from(new Set(ALL_PACKAGES.map((p) => p.category)))

  return (
    <main className="min-h-screen bg-accent">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      {/* Title Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-Secondary-Color mb-4 tracking-tight">Our Surf Packages</h1>
          <p className="text-xl text-Primary max-w-2xl mx-auto leading-relaxed ">
            From your first wave to secret breaks, we've crafted experiences that match every level of stoke.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ALL_PACKAGES.filter((p) => p.category === category).map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
