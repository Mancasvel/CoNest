"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
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
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        {/* Background bubbles decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Larger bubbles */}
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-conest-lightBlue/30 blur-xl"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-conest-lightBlue/20 blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] rounded-full bg-conest-lightBlue/10 blur-lg"></div>
          
          {/* Smaller bubbles */}
          <div className="absolute top-[5%] left-[15%] w-[15%] h-[15%] rounded-full bg-conest-lightBlue/15 blur-md"></div>
          <div className="absolute bottom-[30%] right-[10%] w-[10%] h-[10%] rounded-full bg-conest-lightBlue/10 blur-md"></div>
          <div className="absolute top-[60%] left-[30%] w-[5%] h-[5%] rounded-full bg-conest-lightBlue/20 blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="order-2 lg:order-1 pt-10 lg:pt-0">
              {/* Small pill badge */}
              <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 text-amber-800 text-sm font-medium mb-6">
                Una Revolución en la Convivencia Intergeneracional
              </div>

              {/* Hero title with color variations */}
              <h1 className="font-bold leading-tight mb-6">
                <span className="text-4xl md:text-5xl lg:text-6xl text-conest-blue block mb-3">
                  Conectando<br />
                  Generaciones
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-700 block">
                  A Través del <span className="text-amber-500">Hogar</span>
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl text-amber-500 block">
                  Compartido
                </span>
              </h1>

              {/* Hero description */}
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                CoNest une a estudiantes con personas mayores en Sevilla 
                creando una comunidad donde todos ganan: <span className="text-conest-blue font-medium">alojamiento asequible</span> para jóvenes y <span className="text-amber-500 font-medium">compañía valiosa</span> para mayores.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/sign-up">
                  <Button className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-medium py-3 px-6 rounded-md shadow-soft transition-all duration-200 flex items-center focus:outline-none active:bg-opacity-80 touch-none">
                    Encuentra tu Match
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button className="bg-white border border-conest-blue text-conest-blue hover:bg-conest-lightBlue/10 font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center focus:outline-none active:bg-white touch-none">
                    Cómo Funciona
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </Link>
              </div>



              {/* Stats */}
              <div className="flex flex-wrap gap-12 mt-8 border-t border-gray-100 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-conest-blue">200+</p>
                  <p className="text-sm text-gray-500">Matches Exitosos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-conest-blue">97%</p>
                  <p className="text-sm text-gray-500">Satisfacción</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-conest-blue">15+</p>
                  <p className="text-sm text-gray-500">Ciudades</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-medium">
                {/* Main image */}
                <div className="relative aspect-video md:aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="Estudiante y persona mayor compartiendo experiencias en la cocina"
                    fill
                    style={{objectFit: "cover"}}
                    priority
                    className="rounded-lg"
                  />
                </div>

                {/* Satisfaction badge */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-soft py-2 px-3 flex items-center space-x-2">
                  <Image 
                    src="/images/logo-icon.png" 
                    width={20} 
                    height={20} 
                    alt="CoNest"
                    className="rounded"
                  />
                  <div>
                    <div className="text-xs font-medium text-gray-800">97% satisfacción</div>
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                
              </div>

              
            </div>
          </div>

          {/* More info link */}

        </div>
      </section>

      {/* Rest of homepage components - keep Features, How It Works, Testimonials and CTA sections */}
      {/* Features Section */}
      <section className="py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                Beneficios de CoNest
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Nuestra plataforma ofrece ventajas para ambas partes, creando una relación 
              de beneficio mutuo que va más allá del simple alojamiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-soft border border-gray-100 rounded-lg">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-3xl mb-6">
                  <span>💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray">Ahorro Económico</h3>
                <p className="text-conest-darkGray/80">
                  Los estudiantes acceden a alojamiento a precios muy inferiores al mercado, 
                  mientras que los anfitriones obtienen ingresos extra o ayuda en el hogar.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-soft border border-gray-100 rounded-lg">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-3xl mb-6">
                  <span>🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray">Compañía y Apoyo</h3>
                <p className="text-conest-darkGray/80">
                  Los anfitriones mayores disfrutan de compañía y ayuda en su día a día, 
                  reduciendo la soledad y mejorando su calidad de vida.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-soft border border-gray-100 rounded-lg">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-3xl mb-6">
                  <span>🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-conest-darkGray">Seguridad Garantizada</h3>
                <p className="text-conest-darkGray/80">
                  Verificamos la identidad y antecedentes de todos los participantes, 
                  facilitando acuerdos claros y seguros para ambas partes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                ¿Cómo Funciona?
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Un proceso sencillo que conecta a estudiantes y anfitriones para crear 
              experiencias de convivencia enriquecedoras.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Para Estudiantes */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-conest-blue flex items-center justify-center text-white text-xl font-bold mr-4">
                    <span>👨‍🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-conest-darkGray">Para Estudiantes</h3>
                </div>
                
                <div className="space-y-6 relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-conest-lightBlue"></div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      1
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Regístrate y completa tu perfil</h4>
                      <p className="text-conest-darkGray/80">
                        Crea tu cuenta, verifica tu identidad como estudiante y completa 
                        tu perfil con tus preferencias y necesidades.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      2
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Explora opciones disponibles</h4>
                      <p className="text-conest-darkGray/80">
                        Navega por los perfiles de anfitriones en tu zona de interés y 
                        solicita conectar con aquellos que te interesen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      3
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Conoce a tus posibles anfitriones</h4>
                      <p className="text-conest-darkGray/80">
                        Realiza videollamadas o reuniones presenciales para asegurar 
                        que hay buena compatibilidad antes de decidir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      4
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Formaliza el acuerdo y múdate</h4>
                      <p className="text-conest-darkGray/80">
                        Una vez encontrado el anfitrión ideal, firmad el acuerdo de 
                        convivencia y comienza tu nueva experiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Para Anfitriones */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-conest-blue flex items-center justify-center text-white text-xl font-bold mr-4">
                    <span>👵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-conest-darkGray">Para Anfitriones</h3>
                </div>
                
                <div className="space-y-6 relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-conest-lightBlue"></div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      1
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Regístrate como anfitrión</h4>
                      <p className="text-conest-darkGray/80">
                        Crea tu cuenta, verifica tu identidad y describe tu hogar, 
                        la habitación disponible y tus expectativas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      2
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Recibe solicitudes de estudiantes</h4>
                      <p className="text-conest-darkGray/80">
                        Revisa los perfiles de estudiantes interesados y selecciona 
                        aquellos que consideres más compatibles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      3
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Conoce a los candidatos</h4>
                      <p className="text-conest-darkGray/80">
                        Mantén entrevistas virtuales o presenciales para elegir al 
                        estudiante que mejor se adapte a tus necesidades.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold">
                      4
                    </div>
                    <div className="bg-white shadow-soft p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">Da la bienvenida a tu nuevo compañero</h4>
                      <p className="text-conest-darkGray/80">
                        Firma el acuerdo de convivencia y prepárate para recibir al 
                        estudiante en tu hogar con todas las garantías.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/como-funciona">
              <Button className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-3 px-8 rounded-xl shadow-soft focus:outline-none active:bg-opacity-80 touch-none">
                Más información sobre el proceso
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
                  ¿Listo para comenzar?
                </h2>
                <p className="text-conest-darkGray/80 mb-8">
                  Únete a nuestra comunidad y descubre una nueva forma de convivencia 
                  que beneficia a todos los implicados.
                </p>
                <div className="space-y-4">
                  <Link href="/sign-up/student" className="block">
                    <Button 
                      className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-4 rounded-xl shadow-soft focus:outline-none active:bg-opacity-80 touch-none"
                    >
                      Soy Estudiante
                    </Button>
                  </Link>
                  <Link href="/sign-up/elder" className="block">
                    <Button 
                      className="w-full bg-white border border-conest-blue text-conest-blue hover:bg-conest-lightBlue/50 font-bold py-4 rounded-xl focus:outline-none active:bg-white touch-none"
                    >
                      Soy Anfitrión
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image 
                  src="/images/cta-image.jpg" 
                  width={500} 
                  height={500}
                  alt="Anfitrión y estudiante compartiendo un momento"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
