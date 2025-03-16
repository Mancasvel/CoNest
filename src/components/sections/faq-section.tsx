"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo funciona el proceso de matching?",
    answer:
      "Nuestro sistema de matching utiliza un algoritmo avanzado que tiene en cuenta tus preferencias, intereses y requisitos para encontrar la familia anfitriona perfecta. El proceso incluye una entrevista personal y verificación de antecedentes para garantizar la mejor experiencia posible.",
  },
  {
    question: "¿Cuáles son los requisitos para ser anfitrión?",
    answer:
      "Para ser anfitrión, debes tener una habitación privada disponible, vivir en una ubicación accesible para estudiantes, y estar dispuesto a compartir tu cultura y estilo de vida. También realizamos una verificación de antecedentes y una entrevista en persona.",
  },
  {
    question: "¿Qué incluye el alojamiento?",
    answer:
      "El alojamiento incluye una habitación privada, acceso a las áreas comunes de la casa, lavandería, y en algunos casos, comidas. Los detalles específicos se acuerdan entre el estudiante y la familia anfitriona antes de la llegada.",
  },
  {
    question: "¿Cómo se manejan los pagos?",
    answer:
      "Los pagos se procesan de manera segura a través de nuestra plataforma. Los estudiantes pagan mensualmente, y los anfitriones reciben sus pagos de manera puntual. Todos los pagos están protegidos y asegurados.",
  },
  {
    question: "¿Qué tipo de apoyo ofrecen?",
    answer:
      "Ofrecemos apoyo continuo durante toda la estancia, incluyendo asistencia con la adaptación cultural, resolución de problemas y emergencias. Nuestro equipo está disponible 24/7 para cualquier consulta o problema.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre CoNest
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 