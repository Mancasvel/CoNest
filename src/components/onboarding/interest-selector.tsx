"use client"

import { useState } from "react"

const AVAILABLE_INTERESTS = [
  "Tecnología",
  "Deportes",
  "Arte",
  "Música",
  "Cine",
  "Literatura",
  "Viajes",
  "Gastronomía",
  "Fotografía",
  "Naturaleza",
  "Gaming",
  "Fitness",
  "Moda",
  "Ciencia",
  "Emprendimiento",
] as const

interface InterestSelectorProps {
  selectedInterests: string[]
  onChange: (interests: string[]) => void
  maxSelections?: number
}

export function InterestSelector({
  selectedInterests,
  onChange,
  maxSelections = 5,
}: InterestSelectorProps) {
  const [error, setError] = useState<string | null>(null)

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      onChange(selectedInterests.filter((i) => i !== interest))
      setError(null)
    } else {
      if (selectedInterests.length >= maxSelections) {
        setError(`Puedes seleccionar máximo ${maxSelections} intereses`)
        return
      }
      onChange([...selectedInterests, interest])
      setError(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {AVAILABLE_INTERESTS.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`p-3 text-sm rounded-lg transition-colors ${
              selectedInterests.includes(interest)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            }`}
            type="button"
          >
            {interest}
          </button>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="text-sm text-muted-foreground">
        Seleccionados: {selectedInterests.length} de {maxSelections}
      </p>
    </div>
  )
} 