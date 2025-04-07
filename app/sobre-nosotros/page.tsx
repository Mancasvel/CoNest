'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import HeroSection from '../../components/HeroSection_1';

export default function SobreNosotrosPage() {
  // Team members data
  const teamMembers = [
    {
      name: "José María de Cossío",
      role: "CEO y Fundador",
      bio: "Visionario y creador de CoNest. Especialista en innovación social con años de experiencia en el sector.",
      image: "/images/team/ceo.png"
    },
    {
      name: "Natalia Olmo",
      role: "COO",
      bio: "Responsable de gestión y operaciones. Experta en desarrollo de negocios con enfoque en impacto social positivo.",
      image: "/images/team/coo.png"
    },
    {
      name: "Manuel Castillejo",
      role: "Co-CTO",
      bio: "Responsable de la estrategia tecnológica y desarrollo de plataformas digitales. Experto en tecnologías emergentes e inteligencia artificial.",
      image: "/images/team/cto1.png"
    },
    {
      name: "Luis Mellado",
      role: "Co-CTO",
      bio: "Lidera junto a Manuel el área tecnológica. Especialista en desarrollo de sistemas innovadores y arquitectura de software.",
      image: "/images/team/cto2.png"
    },
    {
      name: "María Toscano",
      role: "CMO",
      bio: "Lidera la estrategia de marketing y comunicación. Especializada en narrativas de marca con propósito y comunicación impactante.",
      image: "/images/team/cmo.png"
    }
  ];

  // Partners data
  const partners = [
    { name: "Universidad de Sevilla", logo: "/images/partners/us.png" },
    { name: "Espacio Res", logo: "/images/partners/espacio_res.png" },

  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Nuestra misión es conectar generaciones"
        subtitle="Conoce quiénes somos"
        description="CoNest nació con una visión clara: transformar el modo en que entendemos la vivienda y la conexión intergeneracional, creando comunidades más inclusivas y solidarias."
        primaryButtonText="Únete a nosotros"
        primaryButtonUrl="/sign-up"
        secondaryButtonText="Contáctanos"
        secondaryButtonUrl="/contacto"
        imageSrc="/images/compañía-para-personas-mayores.jpg"
        imageAlt="Equipo de CoNest"
        badge="Sobre Nosotros"
      />
      
      {/* Our Story Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-conest-lightBlue/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-conest-blue/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <h2 className="text-4xl font-bold mb-6 text-conest-darkGray relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-conest-blue to-conest-mediumBlue">Nuestra Historia</span>
                  <div className="absolute -bottom-3 left-0 w-20 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full"></div>
                </h2>
                <div className="space-y-5 text-conest-darkGray/80 leading-relaxed">
                  <p className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    CoNest surge como una idea revolucionaria en 2024, desarrollada por un grupo de estudiantes 
                    innovadores de la Universidad de Sevilla que identificaron dos realidades sociales urgentes: 
                    la dificultad de acceso a vivienda asequible para estudiantes y la soledad no deseada 
                    que experimentan muchas personas mayores.
                  </p>
                  <p className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    Lo que comenzó como un proyecto académico ambicioso pronto capturó la atención de 
                    inversores y colaboradores que vieron su enorme potencial. En 2025, CoNest dejó de ser 
                    sólo una idea para convertirse en realidad, lanzando su plataforma oficialmente y 
                    comenzando a crear sus primeras conexiones intergeneracionales.
                  </p>
                  <p className="animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                    Nuestro equipo multidisciplinar, formado por jóvenes talentos comprometidos con la innovación 
                    social, trabaja incansablemente para expandir esta iniciativa por toda España, con la misión 
                    de construir puentes entre generaciones y transformar positivamente la vida de miles de personas.
                  </p>
                  
                  <div className="pt-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <Button 
                      className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-blue-lg hover:scale-105"
                    >
                      Conoce más sobre nuestra trayectoria
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative animate-fadeIn" style={{animationDelay: '0.4s'}}>
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-conest-blue/30 via-conest-mediumBlue/20 to-conest-lightBlue/10 transform rotate-12 rounded-3xl blur-md"></div>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue shadow-blue-lg animate-float">
                  <div className="bg-white p-3 rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-inner">
                      <Image
                        src="/images/comunidad-de-confianza.jpg"
                        alt="Historia de CoNest"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-conest-blue/10 to-conest-lightBlue/5 rounded-full z-[-1] animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-conest-blue/10 to-conest-lightBlue/5 rounded-full z-[-1] animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="absolute -bottom-12 right-10 bg-white rounded-xl shadow-blue-md p-5 max-w-xs border border-conest-lightBlue/20 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue flex items-center justify-center text-white text-sm font-bold shadow-blue-sm">
                      <span>2024</span>
                    </div>
                    <div>
                      <p className="font-semibold text-conest-darkGray">Año de fundación</p>
                      <p className="text-sm text-conest-darkGray/70">Sevilla, España</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-12 left-10 bg-white rounded-xl shadow-blue-md p-4 max-w-[160px] border border-conest-lightBlue/20 animate-fadeInUp" style={{animationDelay: '0.7s'}}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-conest-blue to-conest-mediumBlue bg-clip-text text-transparent">100+</div>
                    <p className="text-sm text-conest-darkGray/70">Conexiones esperadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for animations */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
          .shadow-blue-sm {
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
          }
          .shadow-blue-md {
            box-shadow: 0 6px 12px -2px rgba(59, 130, 246, 0.15), 0 3px 7px -3px rgba(59, 130, 246, 0.1);
          }
          .shadow-blue-lg {
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
          }
          .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-conest-lightBlue/20 via-white to-conest-blue/5 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-conest-blue/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-conest-lightBlue/30 rounded-full blur-3xl z-0 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="inline-block mb-3 px-4 py-1 bg-conest-blue/10 rounded-full">
              <span className="text-conest-blue font-medium text-sm">Los pilares de nuestra organización</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
                Nuestros Valores
              </span>
            </h2>
            <p className="text-conest-darkGray/80 text-lg max-w-2xl mx-auto">
              Estos principios guían cada decisión que tomamos y cada conexión que facilitamos en nuestra misión de transformar las relaciones intergeneracionales.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-conest-blue/5 to-conest-lightBlue/5 rounded-3xl transform -rotate-1 scale-105 z-0 blur-sm"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {/* Value 1 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Conexión auténtica</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      Creemos en el valor de las relaciones humanas significativas que trascienden 
                      las barreras generacionales y enriquecen la vida de todos los participantes.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 2 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                        <path d="M6 12h12"/>
                        <path d="M21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Innovación social</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      Abordamos desafíos sociales mediante soluciones creativas que generan 
                      beneficio mutuo y contribuyen a crear comunidades más inclusivas y solidarias.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 3 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Confianza y seguridad</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      Ponemos el máximo cuidado en crear un entorno seguro mediante procesos 
                      rigurosos de verificación y seguimiento continuo de las convivencias.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 4 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Compromiso a largo plazo</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      No solo conectamos personas, sino que ofrecemos acompañamiento continuo 
                      para asegurar relaciones duraderas y mutuamente beneficiosas.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 5 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.7s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
                        <path d="M8 17v1a4 4 0 0 0 8 0v-1"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Escucha activa</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      Valoramos profundamente las experiencias y opiniones de nuestra comunidad, 
                      que son fundamentales para mejorar constantemente nuestro servicio.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 6 */}
              <div className="group animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <Card className="bg-white shadow-soft backdrop-blur-sm bg-white/80 border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/80 to-conest-mediumBlue opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  <CardBody className="p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-conest-lightBlue/30 to-conest-lightBlue/5 flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-blue-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">Transparencia</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-conest-darkGray/80">
                      Operamos con total claridad en nuestros procesos, condiciones y expectativas, 
                      construyendo una relación de confianza con todos nuestros usuarios.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-tl from-white via-conest-blue/5 to-white">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-conest-lightBlue/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-conest-blue/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="inline-block mb-3 px-4 py-1 bg-conest-blue/10 rounded-full">
              <span className="text-conest-blue font-medium text-sm">Las personas detrás de CoNest</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
                Nuestro Equipo
              </span>
            </h2>
            <p className="text-conest-darkGray/80 text-lg max-w-2xl mx-auto">
              Un grupo multidisciplinar de profesionales comprometidos con la innovación social y el impacto positivo en la sociedad.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group animate-fadeInUp" 
                  style={{animationDelay: `${0.3 + index * 0.1}s`}}
                >
                  <Card className="bg-white/90 backdrop-blur-sm shadow-soft border-none h-full transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-conest-blue via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardBody className="p-0 flex flex-col h-full">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/20 to-conest-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-conest-blue transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-conest-blue transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-1 text-conest-darkGray group-hover:text-conest-blue transition-colors">{member.name}</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-full mb-3 group-hover:w-24 transition-all duration-500"></div>
                        <p className="text-conest-blue font-semibold mb-4 text-sm">{member.role}</p>
                        <p className="text-conest-darkGray/70 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-br from-conest-lightBlue/10 via-white to-conest-blue/5 relative z-10 overflow-hidden">
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-conest-blue/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-conest-blue/10 rounded-full blur-xl z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-conest-lightBlue/10 rounded-full blur-xl z-0 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="inline-block mb-3 px-4 py-1 bg-conest-blue/10 rounded-full">
              <span className="text-conest-blue font-medium text-sm">Juntos somos más fuertes</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-conest-darkGray">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
                Colaboradores y Alianzas
              </span>
            </h2>
            <p className="text-conest-darkGray/80 text-lg max-w-2xl mx-auto">
              Trabajamos con instituciones líderes para ampliar nuestro impacto social y construir un ecosistema intergeneracional más fuerte.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-conest-blue/5 to-conest-lightBlue/5 rounded-3xl transform -rotate-1 scale-105 z-0 blur-sm"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center relative z-10">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-soft border border-conest-blue/5 flex items-center justify-center h-40 transition-all duration-500 hover:shadow-blue-lg hover:-translate-y-2 animate-fadeInUp"
                  style={{animationDelay: `${0.3 + index * 0.1}s`}}
                >
                  <div className="relative w-full h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              
              <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center mt-6 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <Button 
                  className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white font-semibold py-3 px-8 rounded-xl transition-all hover:shadow-blue-lg hover:scale-105"
                >
                  Conviértete en colaborador
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-conest-blue to-conest-mediumBlue rounded-2xl overflow-hidden shadow-medium">
            <div className="p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Forma parte del cambio
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  En CoNest estamos transformando el modo en que entendemos la vivienda y 
                  las relaciones intergeneracionales, creando un futuro más conectado e inclusivo.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/sign-up">
                    <Button 
                      className="bg-white text-conest-blue font-bold py-3 px-6 rounded-xl transition-transform hover:scale-105 duration-200"
                      size="lg"
                    >
                      Únete a la comunidad
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button 
                      className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-xl transition-transform hover:scale-105 duration-200"
                      size="lg"
                    >
                      Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}