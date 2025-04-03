'use client';

import React, { useState } from 'react';
import { Card, CardBody } from "@heroui/react";
import HeroSection from '../../components/HeroSection_1';
import Link from 'next/link';

export default function PreguntasFrecuentesPage() {
  const [openCategory, setOpenCategory] = useState('general');
  
  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      faqs: [
        {
          question: "¿Qué es CoNest?",
          answer: "CoNest es una plataforma que conecta a personas mayores que tienen espacio disponible en sus hogares con estudiantes que buscan alojamiento asequible. Facilitamos convivencias intergeneracionales que benefician a ambas partes: los mayores obtienen compañía y un ingreso adicional, mientras que los estudiantes acceden a alojamiento económico en un ambiente familiar."
        },
        {
          question: "¿Cómo funciona CoNest?",
          answer: "Nuestro proceso es simple: los mayores registran sus viviendas con habitaciones disponibles, los estudiantes se inscriben y buscan opciones, facilitamos la conexión entre ambos a través de nuestro sistema de matchmaking, y proporcionamos apoyo continuo durante toda la convivencia para asegurar una experiencia positiva para ambas partes."
        },
        {
          question: "¿Dónde opera CoNest?",
          answer: "Actualmente, CoNest opera en varias ciudades de España, con especial foco en zonas universitarias como Madrid, Barcelona, Sevilla, Valencia y Málaga. Estamos en continua expansión, por lo que te invitamos a consultar nuestra cobertura actual en la plataforma."
        }
      ]
    },
    {
      id: 'mayores',
      name: 'Para Mayores',
      faqs: [
        {
          question: "¿Qué requisitos debo cumplir para registrar mi vivienda?",
          answer: "Para registrar tu vivienda, debes tener al menos 60 años, ser propietario o tener autorización para subarrendar, disponer de una habitación privada para el estudiante, y pasar nuestro proceso de verificación que incluye documentación y entrevista personal."
        },
        {
          question: "¿Cuánto puedo ganar por alquilar una habitación?",
          answer: "Los ingresos varían según la ubicación, características de la vivienda y servicios ofrecidos. Nuestro equipo te ayudará a establecer un precio justo y competitivo que refleje el valor de tu oferta mientras se mantiene asequible para estudiantes."
        },
        {
          question: "¿Qué tipo de apoyo ofrece CoNest durante la convivencia?",
          answer: "CoNest proporciona apoyo continuo que incluye: asesoramiento inicial, mediación en caso de conflictos, visitas periódicas de seguimiento, línea de atención prioritaria, y evaluaciones regulares para asegurar que la experiencia sea positiva para ambas partes."
        }
      ]
    },
    {
      id: 'estudiantes',
      name: 'Para Estudiantes',
      faqs: [
        {
          question: "¿Qué requisitos debo cumplir como estudiante?",
          answer: "Para aplicar, debes ser estudiante universitario o de formación superior, tener referencias académicas o personales verificables, pasar nuestro proceso de selección que incluye entrevista personal, y estar dispuesto a respetar las normas de convivencia acordadas."
        },
        {
          question: "¿Cómo es el proceso de selección?",
          answer: "Nuestro proceso de selección incluye: registro en la plataforma con verificación de identidad y estatus de estudiante, entrevista personal para evaluar compatibilidad y expectativas, y la posibilidad de conocer a potenciales anfitriones antes de tomar una decisión final."
        },
        {
          question: "¿Cuánto cuesta el alojamiento a través de CoNest?",
          answer: "Los precios son significativamente más bajos que el mercado convencional, generalmente entre un 30-50% menos. El coste exacto depende de la ubicación, características de la vivienda y acuerdos específicos de convivencia, pero garantizamos opciones asequibles en todas nuestras localizaciones."
        }
      ]
    },
    {
      id: 'proceso',
      name: 'Proceso y Seguridad',
      faqs: [
        {
          question: "¿Cómo garantiza CoNest la seguridad de las convivencias?",
          answer: "Implementamos múltiples medidas de seguridad, incluyendo: verificación exhaustiva de identidad para todos los participantes, revisión de antecedentes, entrevistas personales, acuerdos claros de convivencia, sistema de evaluaciones mutuas, y seguimiento continuo con canales de comunicación directa para resolver cualquier incidencia."
        },
        {
          question: "¿Cómo funciona el proceso de matchmaking?",
          answer: "Nuestro sistema de matchmaking considera múltiples factores: ubicación y preferencias de vivienda, intereses compartidos, hábitos y rutinas compatibles, expectativas de convivencia, y necesidades específicas de ambas partes. Facilitamos encuentros iniciales para confirmar la compatibilidad antes del compromiso final."
        },
        {
          question: "¿Qué ocurre si la convivencia no funciona?",
          answer: "Si surgen problemas, nuestro equipo de mediación interviene para intentar resolverlos. Si la convivencia debe terminarse, facilitamos el proceso de transición: ayudamos al estudiante a encontrar alojamiento alternativo y al mayor a conectar con otro estudiante si lo desea, todo ello respetando los términos acordados inicialmente."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber"
        description="Encuentra respuestas a las dudas más comunes sobre CoNest, nuestros servicios y cómo funciona nuestro proceso de conexión intergeneracional."
        primaryButtonText="Contacta con nosotros"
        primaryButtonUrl="/contacto"
        secondaryButtonText="Regístrate ahora"
        secondaryButtonUrl="/sign-up"
        imageSrc="/images/questions.jpg"
        imageAlt="Preguntas frecuentes sobre CoNest"
        badge="FAQ"
      />
      
      {/* FAQ Content Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setOpenCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      openCategory === category.id
                        ? 'bg-conest-blue text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {faqCategories.find(cat => cat.id === openCategory)?.faqs.map((faq, index) => (
                <div key={index} className="group">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer bg-white shadow-soft border border-gray-100 p-4 rounded-xl transition-all duration-300 group-hover:shadow-medium group-hover:border-conest-blue/20">
                      <h3 className="text-lg text-conest-darkGray">{faq.question}</h3>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="text-conest-darkGray/80 mt-3 group-open:animate-fadeIn px-4 pb-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-conest-darkGray/80 mb-6">
                ¿No has encontrado la respuesta que buscabas?
              </p>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-conest-blue text-white font-medium transition-all duration-300 hover:bg-conest-mediumBlue shadow-soft hover:shadow-medium"
              >
                Contacta con nuestro equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-conest-darkGray">
              <span className="text-conest-blue">Recursos adicionales</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-conest-darkGray">Blog CoNest</h3>
                  <p className="text-conest-darkGray/80 mb-4">
                    Descubre artículos, historias de éxito y consejos sobre convivencia intergeneracional.
                  </p>
                  <Link 
                    href="/blog" 
                    className="text-conest-blue font-medium hover:text-conest-mediumBlue mt-auto"
                  >
                    Leer artículos
                  </Link>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-conest-darkGray">Guías y tutoriales</h3>
                  <p className="text-conest-darkGray/80 mb-4">
                    Consulta nuestras guías paso a paso para sacar el máximo partido a CoNest.
                  </p>
                  <Link 
                    href="/sobre-nosotros" 
                    className="text-conest-blue font-medium hover:text-conest-mediumBlue mt-auto"
                  >
                    Ver guías
                  </Link>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-conest-darkGray">Asistencia personalizada</h3>
                  <p className="text-conest-darkGray/80 mb-4">
                    Contacta con nuestro equipo para recibir atención personalizada a tus consultas.
                  </p>
                  <Link 
                    href="/contacto" 
                    className="text-conest-blue font-medium hover:text-conest-mediumBlue mt-auto"
                  >
                    Contactar
                  </Link>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 