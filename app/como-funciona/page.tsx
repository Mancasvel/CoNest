'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab, Accordion, AccordionItem } from "@heroui/react";

export default function ComoFuncionaPage() {
  const [activeTab, setActiveTab] = useState("hosts");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = {
    hosts: [
      { 
        title: "Registro y Perfil", 
        description: "Crea tu perfil de anfitrión con tus datos, preferencias e información sobre tu espacio disponible.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      },
      { 
        title: "Verificación", 
        description: "Completamos una verificación de antecedentes para garantizar la seguridad de todos los usuarios.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      },
      { 
        title: "Configuración del Alojamiento", 
        description: "Establece tus condiciones y expectativas para la convivencia y la ayuda que esperas recibir.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      },
      { 
        title: "Conexión con Estudiantes", 
        description: "Revisa perfiles de estudiantes interesados y selecciona a quienes consideres compatibles.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      },
      { 
        title: "Acuerdo y Bienvenida", 
        description: "Firma un acuerdo formal y prepárate para dar la bienvenida a tu nuevo compañero de hogar.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      }
    ],
    students: [
      { 
        title: "Registro y Perfil", 
        description: "Crea tu perfil de estudiante con tus datos, preferencias y tipo de alojamiento que buscas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      },
      { 
        title: "Verificación Académica", 
        description: "Verificamos tu estatus como estudiante para garantizar la confianza en la plataforma.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      },
      { 
        title: "Búsqueda de Anfitriones", 
        description: "Explora los perfiles de anfitriones disponibles en tu área de interés.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      },
      { 
        title: "Solicitud y Entrevista", 
        description: "Envía solicitudes a los anfitriones que te interesen y participa en entrevistas virtuales o presenciales.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      },
      { 
        title: "Acuerdo y Mudanza", 
        description: "Firma un acuerdo formal que detalla condiciones, expectativas y responsabilidades mutuas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      }
    ]
  };

  const faqs = [
    {
      question: "¿Es seguro vivir con una persona que no conozco?",
      answer: "En CoNest, la seguridad es nuestra prioridad. Todos los usuarios pasan por un proceso de verificación riguroso que incluye revisión de antecedentes, validación de identidad y referencias. Además, facilitamos reuniones previas para asegurar que ambas partes se sientan cómodas."
    },
    {
      question: "¿Qué tipo de acuerdo se firma entre anfitrión y estudiante?",
      answer: "El acuerdo de CoNest detalla las condiciones de la convivencia, incluyendo duración, espacio compartido, tareas de apoyo esperadas, normas de convivencia y procedimientos para resolver conflictos. Este documento no es solo legal sino que ayuda a establecer expectativas claras."
    },
    {
      question: "¿Cuánto cuesta usar CoNest?",
      answer: "Para los estudiantes, el costo de alojamiento es significativamente menor que las opciones tradicionales, ya que se espera que brinden compañía y ayuda con tareas cotidianas. Los anfitriones mayores pueden elegir entre varios modelos, desde alojamiento gratuito a cambio de más ayuda, hasta un alquiler reducido con menos responsabilidades."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      {/* Community Call to Action Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-conest-blue to-conest-mediumBlue">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3">
              <div className="w-[600px] h-[600px] rounded-full bg-amber-300/20 blur-3xl"></div>
            </div>
            <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3">
              <div className="w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-center">
            {/* Left column - CTA content */}
            <div className="lg:w-1/2 xl:pl-12">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full inline-block mb-6">
                <div className="bg-white rounded-full px-6 py-2 text-conest-blue font-medium">
                  Guía Completa del Proceso
                </div>
              </div>
              
              <h1 className="font-bold leading-tight mb-8 text-white">
                <span className="text-5xl md:text-6xl lg:text-7xl block mb-3">
                  Cómo Funciona
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl block gradient-text bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                  La Experiencia CoNest
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Descubre paso a paso cómo funciona nuestro innovador sistema de convivencia intergeneracional, 
                desde el registro hasta el comienzo de una experiencia transformadora
                para anfitriones y estudiantes.
              </p>
              
              <div className="space-y-4 md:space-y-0 md:space-x-4 mb-12 flex flex-col md:flex-row">
                <Link href="#proceso">
                  <Button 
                    className="bg-amber-400 hover:bg-amber-300 text-conest-blue font-semibold py-4 px-8 rounded-xl shadow-xl transition-transform hover:scale-105 duration-200 w-full md:w-auto"
                    size="lg"
                    startContent={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                      </svg>
                    }
                  >
                    Ver el Proceso
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button 
                    className="bg-white hover:bg-gray-100 text-conest-blue font-semibold py-4 px-8 rounded-xl shadow-xl transition-transform hover:scale-105 duration-200 w-full md:w-auto"
                    size="lg"
                    startContent={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    }
                  >
                    Registrarme Ahora
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-white text-sm">Proceso seguro</span>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-white text-sm">Rápido y sencillo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-white text-sm">Soporte continuo</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Testimonials */}
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Main testimonial card */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-20 transform transition-transform hover:-translate-y-1 hover:shadow-3xl duration-300">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                          src="/images/old-woman.jpg" 
                          alt="Testimonial"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-amber-400 text-conest-blue w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-conest-darkGray">Carmen Ruiz</h4>
                      <p className="text-conest-darkGray/60 text-sm">Anfitriona desde 2024</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-conest-darkGray/80 italic">
                      "Al principio tenía mis dudas, pero hoy no puedo imaginar mi casa sin la alegría que ha traído mi estudiante. Ha devuelto la vida a mi hogar y me siento útil nuevamente. El proceso con CoNest fue sencillo y seguro."
                    </blockquote>
                  </div>
                  
                </div>
                
                {/* Background testimonial cards */}
                <div className="absolute top-10 -right-4 w-[80%] h-[70%] bg-conest-lightBlue/30 rounded-2xl z-10 transform rotate-6"></div>
                <div className="absolute top-5 -left-4 w-[80%] h-[70%] bg-amber-300/30 rounded-2xl z-10 transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced wave divider */}

      </section>
      
      {/* Benefits Section - New! */}
      <section className="py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-conest-blue/10 text-conest-blue text-sm font-medium mb-3">
              Nuestros Beneficios
            </span>
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              Una Plataforma Segura, <span className="text-conest-blue">Simple y Transparente</span>
            </h2>
            <p className="text-lg text-conest-darkGray/80">
              CoNest simplifica el proceso de encontrar la convivencia intergeneracional ideal,
              garantizando seguridad y confianza en cada paso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-conest-lightBlue/30 flex items-center justify-center text-conest-blue mb-6 mx-auto group-hover:bg-conest-blue group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-conest-darkGray text-center">Verificaciones Rigurosas</h3>
              <p className="text-conest-darkGray/80 text-center">
                Realizamos verificaciones de identidad, académicas y de antecedentes para garantizar un entorno seguro para todos.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-conest-lightBlue/30 flex items-center justify-center text-conest-blue mb-6 mx-auto group-hover:bg-conest-blue group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-conest-darkGray text-center">Soporte Personalizado</h3>
              <p className="text-conest-darkGray/80 text-center">
                Nuestro equipo te acompaña durante todo el proceso, ofreciendo asistencia y mediación cuando sea necesario.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-conest-lightBlue/30 flex items-center justify-center text-conest-blue mb-6 mx-auto group-hover:bg-conest-blue group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-conest-darkGray text-center">Proceso Eficiente</h3>
              <p className="text-conest-darkGray/80 text-center">
                Optimizamos cada etapa para encontrar compatibilidades rápidamente y facilitar acuerdos claros y justos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Process Section with ID anchor */}
      <section id="proceso" className="py-20 relative z-10 bg-gradient-to-br from-conest-lightBlue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-conest-blue/10 text-conest-blue text-sm font-medium mb-3">
              Paso a Paso
            </span>
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              El <span className="text-conest-blue">Proceso</span> CoNest
            </h2>
            <p className="text-lg text-conest-darkGray/80">
              En CoNest nos encargamos de facilitar todo el proceso para que la experiencia 
              sea segura y satisfactoria para ambas partes.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-medium rounded-2xl p-6 mb-12 border border-conest-blue/10">
              <Tabs 
                aria-label="Opciones" 
                color="primary" 
                variant="underlined"
                classNames={{
                  tabList: "bg-conest-lightBlue/20 rounded-xl p-3 gap-6",
                  cursor: "bg-conest-blue rounded-xl",
                  tab: "px-4 py-3 text-md font-medium data-[selected=true]:text-conest-blue",
                  panel: "pt-8"
                }}
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
              >
                <Tab 
                  key="hosts" 
                  title={
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span>Para Anfitriones</span>
                    </div>
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {steps.hosts.map((step, index) => (
                      <div 
                        key={index} 
                        className="group" 
                        style={{ animation: `fadeIn 0.5s ease-out ${0.1 + index * 0.1}s both` }}
                      >
                        <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-conest-blue/20 hover:-translate-y-1 overflow-hidden">
                          <CardBody className="p-6">
                            <div className="flex items-start">
                              <div className="w-14 h-14 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold mr-4 shrink-0 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                                {step.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="w-6 h-6 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue text-xs font-bold">
                                    {index + 1}
                                  </span>
                                  <h4 className="text-lg font-semibold text-conest-darkGray">{step.title}</h4>
                                </div>
                                <p className="text-conest-darkGray/80">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Tab>
                
                <Tab 
                  key="students" 
                  title={
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <span>Para Estudiantes</span>
                    </div>
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {steps.students.map((step, index) => (
                      <div 
                        key={index} 
                        className="group" 
                        style={{ animation: activeTab === "students" ? `fadeIn 0.5s ease-out ${0.1 + index * 0.1}s both` : "none" }}
                      >
                        <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-conest-blue/20 hover:-translate-y-1 overflow-hidden">
                          <CardBody className="p-6">
                            <div className="flex items-start">
                              <div className="w-14 h-14 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold mr-4 shrink-0 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                                {step.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="w-6 h-6 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue text-xs font-bold">
                                    {index + 1}
                                  </span>
                                  <h4 className="text-lg font-semibold text-conest-darkGray">{step.title}</h4>
                                </div>
                                <p className="text-conest-darkGray/80">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Visualization - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-white via-conest-lightBlue/5 to-white relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-conest-lightBlue/10 to-transparent"></div>
        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 w-96 h-96 rounded-full bg-conest-blue/5 filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-medium border border-conest-blue/10">
                  <span className="inline-block py-1 px-3 rounded-full bg-conest-blue/10 text-conest-blue text-sm font-medium mb-3">
                    Experiencia Simplificada
                  </span>
                  <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
                    <span className="text-conest-blue">
                      Un recorrido sin complicaciones
                    </span>
                  </h2>
                  <p className="text-conest-darkGray/80 mb-8">
                    En CoNest nos preocupamos por hacer que todo el proceso sea lo más sencillo y 
                    transparente posible. Te acompañamos en cada paso, desde el registro hasta 
                    la mudanza o bienvenida.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 bg-conest-lightBlue/10 hover:bg-conest-lightBlue/20 border border-conest-blue/5 hover:border-conest-blue/20">
                      <div className="w-12 h-12 rounded-full bg-conest-blue/20 flex items-center justify-center text-conest-blue shrink-0 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-conest-darkGray text-lg mb-1">Proceso seguro garantizado</h4>
                        <p className="text-conest-darkGray/80 text-sm">Verificamos a todos los usuarios para crear un entorno confiable y seguro.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 bg-conest-lightBlue/10 hover:bg-conest-lightBlue/20 border border-conest-blue/5 hover:border-conest-blue/20">
                      <div className="w-12 h-12 rounded-full bg-conest-blue/20 flex items-center justify-center text-conest-blue shrink-0 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-conest-darkGray text-lg mb-1">Soporte personalizado</h4>
                        <p className="text-conest-darkGray/80 text-sm">Nuestro equipo está disponible para asistirte durante toda tu experiencia.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 bg-conest-lightBlue/10 hover:bg-conest-lightBlue/20 border border-conest-blue/5 hover:border-conest-blue/20">
                      <div className="w-12 h-12 rounded-full bg-conest-blue/20 flex items-center justify-center text-conest-blue shrink-0 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="3" y1="9" x2="21" y2="9"></line>
                          <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-conest-darkGray text-lg mb-1">Herramientas intuitivas</h4>
                        <p className="text-conest-darkGray/80 text-sm">Plataforma fácil de usar con todos los recursos que necesitas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue shadow-xl">
                    <div className="p-6 bg-white rounded-xl">
                      <div className="rounded-lg overflow-hidden shadow-soft mb-6">
                        <Image 
                          src="/images/how-it-works.jpg" 
                          alt="Proceso de CoNest" 
                          width={400} 
                          height={300}
                          className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="p-5 bg-conest-lightBlue/10 rounded-xl border border-conest-blue/10">
                        <h4 className="text-lg font-semibold mb-4 text-conest-darkGray flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-conest-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Tiempo estimado del proceso
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-conest-darkGray/80 font-medium">Registro y verificación</span>
                              <span className="text-conest-blue font-semibold px-3 py-1 rounded-full bg-conest-blue/10 text-sm">1-2 días</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-conest-darkGray/80 font-medium">Encuentro de match ideal</span>
                              <span className="text-conest-blue font-semibold px-3 py-1 rounded-full bg-conest-blue/10 text-sm">1-3 semanas</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-conest-darkGray/80 font-medium">Formalización y mudanza</span>
                              <span className="text-conest-blue font-semibold px-3 py-1 rounded-full bg-conest-blue/10 text-sm">3-7 días</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-5 -right-5 w-24 h-24 bg-amber-300/10 rounded-full z-[-1]"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-conest-blue/10 rounded-full z-[-1]"></div>
                  <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-16 h-16 bg-conest-blue/5 rounded-full z-[-1]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Call to Action */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-conest-blue/10 px-4 py-1.5 text-sm font-medium text-conest-blue mb-4 shadow-sm">
              ¿Listo para Comenzar?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-conest-darkGray">
              Únete a nuestra comunidad y sé parte del cambio
            </h2>
            <p className="text-xl text-conest-darkGray/80 mb-10">
              Da el primer paso hacia una experiencia de convivencia que transforma vidas y crea conexiones significativas entre generaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/elder/sign-up">
                <Button 
                  className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Soy Anfitrión
                </Button>
              </Link>
              <Link href="/student/sign-up">
                <Button 
                  className="bg-white border-2 border-conest-blue text-conest-blue hover:bg-conest-lightBlue/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Soy Estudiante
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom CSS for animations and effects */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .shadow-soft {
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
        }
        
        .shadow-medium {
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05);
        }
        
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
        
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
} 