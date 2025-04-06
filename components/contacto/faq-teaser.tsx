"use client"
import Link from "next/link"
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa"

export default function FaqTeaser() {
  return (
    <section className="relative overflow-hidden px-6 py-12 md:py-16 bg-gradient-to-br from-conest-blue to-conest-mediumBlue text-white rounded-2xl">
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px"
        }}
      />
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <FaQuestionCircle className="text-3xl text-white/90 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">¿Necesitas más información?</h2>
            </div>
            <p className="text-white/90 mb-8 md:pr-10 leading-relaxed">
              Visita nuestra sección de Preguntas Frecuentes donde encontrarás respuestas detalladas sobre 
              el proceso de CoNest, la verificación de perfiles, pagos, seguridad y mucho más.
            </p>
            <Link 
              href="/preguntas-frecuentes" 
              className="inline-flex items-center px-6 py-3.5 bg-white text-conest-blue font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              Ver Preguntas Frecuentes
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="flex-shrink-0 relative h-44 w-44 md:h-64 md:w-64">
            <div className="absolute inset-4 border-4 border-white/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-full h-full text-white/90" 
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
                <text x="50" y="50" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="50" fontWeight="bold">?</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

