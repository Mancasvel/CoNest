"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Estudiante con familia anfitriona"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Encuentra tu Alojamiento Estudiantil Perfecto
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Conecta con familias anfitrionas locales para una experiencia única y enriquecedora de alojamiento estudiantil en España.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Encuentra tu Match
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Crea tu Perfil
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-gray-300">Estudiantes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-gray-300">Familias Anfitrionas</div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/testimonials/student-1.jpg"
                    alt="María García"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">María García</div>
                  <div className="text-sm text-gray-300">Estudiante Internacional</div>
                </div>
              </div>
              <p className="text-gray-200">
                "Mi experiencia con CoNest ha sido increíble. Encontré la familia anfitriona perfecta que me hizo sentir como en casa desde el primer día."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 