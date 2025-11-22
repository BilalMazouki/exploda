"use client"
import { Check } from "lucide-react"

interface Package {
  id: number
  name: string
  price: string | null
  period: string
  image: string
  description: string
  features: string[]
}

interface PackageCardProps {
  package: Package
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pkg.description}</p>

        {/* Features */}
        <div className="space-y-2 mb-8 flex-1">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
         
        </div>

        {/* Price & Button */}
        <div className="space-y-4 border-t border-border pt-6">
          <div>
            {pkg.price ? (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                <span className="text-muted-foreground text-sm">{pkg.period}</span>
              </div>
            ) : (
              <p className="text-primary font-semibold">{pkg.period}</p>
            )}
          </div>
          <button className="w-full px-6 py-3 bg-Primary font-bold text-accent rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Get Package
          </button>
        </div>
      </div>
    </div>
  )
}
