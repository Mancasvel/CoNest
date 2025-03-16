"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro proceso simple hace que sea fácil encontrar tu alojamiento estudiantil perfecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-primary font-semibold mb-2">Paso 1</div>
            <h3 className="text-xl font-bold mb-4">Crea tu Perfil</h3>
            <p className="text-gray-600 mb-6">
              Regístrate y completa tu perfil con tus preferencias, intereses y requisitos.
            </p>
            <Button variant="ghost" className="btn-ghost" asChild>
              <Link href="/register">
                Comenzar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-primary font-semibold mb-2">Paso 2</div>
            <h3 className="text-xl font-bold mb-4">Encuentra tu Match</h3>
            <p className="text-gray-600 mb-6">
              Explora perfiles de anfitriones verificados y encuentra el match perfecto usando nuestro sistema de compatibilidad.
            </p>
            <Button variant="ghost" className="btn-ghost" asChild>
              <Link href="/matching">
                Empezar Matching <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 