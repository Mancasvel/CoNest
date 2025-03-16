"use client"

import { Home, Users, Heart, Shield } from "lucide-react"

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Beneficios de CoNest</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué elegir CoNest para tu alojamiento estudiantil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experiencia Auténtica */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiencia Auténtica</h3>
            <p className="text-gray-600">
              Vive con una familia local y sumérgete completamente en la cultura española
            </p>
          </div>

          {/* Comunidad Global */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Comunidad Global</h3>
            <p className="text-gray-600">
              Conecta con estudiantes internacionales y expande tu red global
            </p>
          </div>

          {/* Apoyo Personalizado */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Apoyo Personalizado</h3>
            <p className="text-gray-600">
              Recibe atención individualizada y apoyo durante toda tu estancia
            </p>
          </div>

          {/* Seguridad Garantizada */}
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seguridad Garantizada</h3>
            <p className="text-gray-600">
              Todas las familias anfitrionas son verificadas y certificadas por nuestro equipo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 