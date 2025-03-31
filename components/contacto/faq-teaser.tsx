"use client"
import Link from "next/link"
import { Button } from "@heroui/react"

export default function FaqTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-conest-lightBlue/30 to-white relative z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <div className="w-80 h-80 rounded-full bg-conest-blue/30 blur-3xl"></div>
        </div>
        <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
          <div className="w-80 h-80 rounded-full bg-conest-blue/30 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
            <span className="text-conest-blue">¿Tienes más preguntas?</span>
          </h2>
          <p className="text-conest-darkGray/80 max-w-2xl mx-auto">
            Visita nuestra sección de preguntas frecuentes para encontrar respuestas a las consultas más comunes sobre
            nuestro servicio.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/como-funciona#faq">
            <Button
              className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-3 px-6 rounded-xl shadow-soft transition-transform hover:scale-[1.02] duration-200"
              size="lg"
            >
              Ver Preguntas Frecuentes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

