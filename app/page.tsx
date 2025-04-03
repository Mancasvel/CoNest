"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { useState, useEffect } from 'react';

// Interfaz para el tipo de datos que se espera de la API
interface ApiData {
  [key: string]: any;
}

export default function Home() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
    
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

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray">
      {/* Enhanced Hero Section with gradient overlay */}
      <section className="relative py-0 lg:py-0 overflow-hidden">
        {/* Hero background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/us.jpg"
            alt="CoNest Background"
            fill
            quality={90}
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-conest-blue/80 via-conest-blue/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[90vh] flex items-center">
            <div className="w-full lg:w-7/12 py-20 lg:py-32">
              {/* Enhanced badge with animation */}
              <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 text-conest-blue text-sm font-semibold mb-8 shadow-soft animate-fadeIn">
                Transformando la Vivienda Intergeneracional en España
              </div>

              {/* Hero title with improved typography and contrast */}
              <h1 className="font-bold leading-tight mb-8 text-white">
                <span className="text-5xl md:text-6xl lg:text-7xl block mb-3">
                  Conectando
                </span>
                <span className="text-5xl md:text-6xl lg:text-7xl block mb-3">
                  Generaciones a
                </span>
                <span className="text-5xl md:text-6xl lg:text-7xl block gradient-text bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                  Través del Hogar
                </span>
              </h1>

              {/* Hero description with improved readability */}
              <p className="text-xl text-white/90 mb-10 max-w-xl leading-relaxed backdrop-blur-sm bg-conest-blue/10 p-4 rounded-lg border-l-4 border-amber-300">
                CoNest crea conexiones significativas entre estudiantes y personas mayores, 
                ofreciendo <span className="font-semibold text-amber-300">alojamiento asequible</span> a jóvenes y 
                <span className="font-semibold text-amber-300"> compañía valiosa</span> a mayores.
              </p>

              {/* CTA Buttons with improved styling */}
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link href="/sign-up">
                  <Button className="bg-white hover:bg-amber-300 text-conest-blue font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center focus:outline-none hover:scale-105">
                    Encuentra tu Match
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center focus:outline-none hover:scale-105">
                    Cómo Funciona
                  </Button>
                </Link>
              </div>

              {/* Stats with improved visual presentation */}
              <div className="grid grid-cols-3 gap-6 max-w-xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-3xl font-bold text-amber-300">200+</p>
                  <p className="text-sm text-white">Conexiones Activas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-3xl font-bold text-amber-300">97%</p>
                  <p className="text-sm text-white">Satisfacción</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-3xl font-bold text-amber-300">6+</p>
                  <p className="text-sm text-white">Ciudades objetivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-conest-darkGray/60 text-sm uppercase font-medium mb-6">Respaldado por</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src="/images/partners/espacio_res.png" 
                alt="Espacio Res" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src="/images/partners/us.png" 
                alt="Universidad de Sevilla" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              Una <span className="text-conest-blue">solución innovadora</span> para dos desafíos sociales
            </h2>
            <p className="text-xl text-conest-darkGray/80">
              Combinamos tecnología y conexión humana para crear relaciones significativas que benefician a todos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
                <Image
                  src="/images/alojamiento-asequible.jpg"
                  alt="Alojamiento asequible para estudiantes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-conest-blue/80 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Para Estudiantes</h3>
                    <p className="text-white/90">Alojamiento asequible y experiencia intergeneracional enriquecedora</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
                <Image
                  src="/images/compañía-para-personas-mayores.jpg"
                  alt="Compañía para personas mayores"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-conest-blue/80 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Para Mayores</h3>
                    <p className="text-white/90">Compañía valiosa, ingresos extra y apoyo en el día a día</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">¿Cómo Funciona?</span>
            </h2>
            <p className="text-xl text-conest-darkGray/80">
              Un proceso sencillo y seguro para crear conexiones significativas
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-conest-blue/30 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-medium p-6 relative">
                <div className="w-16 h-16 rounded-full bg-conest-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white relative z-10">1</div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray text-center">Regístrate</h3>
                <p className="text-conest-darkGray/80 text-center">
                  Crea tu perfil personalizado especificando tus preferencias, intereses y necesidades.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-medium p-6 relative mt-10 md:mt-0">
                <div className="w-16 h-16 rounded-full bg-conest-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white relative z-10">2</div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray text-center">Encuentra tu Match</h3>
                <p className="text-conest-darkGray/80 text-center">
                  Nuestro algoritmo te conecta con potenciales compañeros basándose en compatibilidad y preferencias.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-medium p-6 relative mt-10 md:mt-0">
                <div className="w-16 h-16 rounded-full bg-conest-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white relative z-10">3</div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray text-center">Comienza la Convivencia</h3>
                <p className="text-conest-darkGray/80 text-center">
                  Establece acuerdos claros y comienza una experiencia de convivencia enriquecedora con nuestro apoyo.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/como-funciona">
              <Button className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-medium py-3 px-8 rounded-full shadow-soft transition-all duration-300">
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - New */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              Testimonios que <span className="text-conest-blue">Inspiran</span>
            </h2>
            <p className="text-xl text-conest-darkGray/80">
              Historias reales de conexiones significativas a través de CoNest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-soft p-8 relative">
              <div className="absolute top-0 left-10 transform -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/hero.jpg" 
                  alt="Testimonial 1"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="pt-8">
                <p className="italic text-conest-darkGray/80 mb-6">
                  "Gracias a CoNest no solo he encontrado un alojamiento que puedo pagar sin arruinar a mis padres, 
                  sino un verdadero hogar. La experiencia ha sido más enriquecedora de lo que imaginé."
                </p>
                <div>
                  <p className="font-bold text-conest-darkGray">Miguel González</p>
                  <p className="text-sm text-conest-darkGray/60">Estudiante de Ingeniería</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-soft p-8 relative">
              <div className="absolute top-0 left-10 transform -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/old-woman.jpg" 
                  alt="Testimonial 2"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="pt-8">
                <p className="italic text-conest-darkGray/80 mb-6">
                  "Al principio tenía mis dudas, pero hoy no puedo imaginar mi casa sin la alegría que ha traído mi estudiante. 
                  Ha devuelto la vida a mi hogar y me siento útil nuevamente."
                </p>
                <div>
                  <p className="font-bold text-conest-darkGray">Carmen Ruiz</p>
                  <p className="text-sm text-conest-darkGray/60">Profesora jubilada, 75 años</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 relative bg-cover bg-center">
        {/* Background overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-image.jpg"
            alt="Join CoNest"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-conest-blue/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Únete a Nuestra Comunidad Intergeneracional
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Forma parte de una revolución en la vivienda compartida que está creando 
              conexiones significativas y resolviendo desafíos sociales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/sign-up">
                <Button className="bg-amber-400 hover:bg-amber-300 text-conest-blue font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center hover:scale-105">
                  Regístrate como Mayor
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-white hover:bg-gray-100 text-conest-blue font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center hover:scale-105">
                  Busca Alojamiento como Estudiante
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom stylesheet for animations and gradients */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .shadow-soft {
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
        }
        
        .shadow-medium {
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05);
        }
        
        .shadow-lg {
          box-shadow: 0 20px 45px -5px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1);
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
