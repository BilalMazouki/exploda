"use client"
import { Check } from "lucide-react"

interface Package {
  id: number
  name: string
  price: string
  image: string
  description: string
  features: string[]
}

interface PackagePreviewProps {
  package: Package
}

export function PackagePreview({ package: pkg }: PackagePreviewProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{pkg.description}</p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {pkg.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price & Button */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">${pkg.price}</span>
            <span className="text-muted-foreground text-sm">per person</span>
          </div>
          <button className="w-full px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
