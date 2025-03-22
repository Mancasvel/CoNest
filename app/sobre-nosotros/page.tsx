'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import HeroSection from '../../components/HeroSection_1';

export default function SobreNosotrosPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      role: "CEO & Co-Fundador",
      bio: "Trabajó en el sector de la vivienda social durante 10 años antes de fundar CoNest para abordar el desafío de la vivienda asequible.",
      image: "/images/team/carlos.jpg"
    },
    {
      name: "Elena Martínez",
      role: "COO & Co-Fundadora",
      bio: "Experta en gerontología social con amplia experiencia en programas de acompañamiento a personas mayores.",
      image: "/images/team/elena.jpg"
    },
    {
      name: "Javier López",
      role: "CTO",
      bio: "Ingeniero informático especializado en plataformas digitales que conectan servicios sociales con usuarios finales.",
      image: "/images/team/javier.jpg"
    },
    {
      name: "Marta Sánchez",
      role: "Directora de Operaciones",
      bio: "Socióloga especializada en economía colaborativa y creación de comunidades intergeneracionales.",
      image: "/images/team/marta.jpg"
    }
  ];

  // Partners data
  const partners = [
    { name: "Universidad Complutense", logo: "/images/partners/ucm.jpg" },
    { name: "Ayuntamiento de Madrid", logo: "/images/partners/madrid.jpg" },
    { name: "Fundación La Caixa", logo: "/images/partners/lacaixa.jpg" },
    { name: "IMSERSO", logo: "/images/partners/imserso.jpg" },
    { name: "ONCE", logo: "/images/partners/once.jpg" },
    { name: "Comunidad de Madrid", logo: "/images/partners/comunidad.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Nuestra misión es conectar generaciones"
        subtitle="Conoce quiénes somos"
        description="CoNest nació con una visión clara: transformar el modo en que entendemos la vivienda y la conexión intergeneracional, creando comunidades más inclusivas y solidarias."
        primaryButtonText="Únete a nosotros"
        primaryButtonUrl="/sign-up/options"
        secondaryButtonText="Contáctanos"
        secondaryButtonUrl="/contacto"
        imageSrc="/images/about-hero.jpg"
        imageAlt="Equipo de CoNest"
        badge="Sobre Nosotros"
      />
      
      {/* Our Story Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2" style={{ animation: 'fadeInLeft 1s ease-out 0.1s both' }}>
                <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
                  <span className="text-conest-blue">Nuestra Historia</span>
                </h2>
                <div className="space-y-4 text-conest-darkGray/80">
                  <p>
                    CoNest fue fundado en 2022 por Carlos Rodríguez y Elena Martínez tras observar dos 
                    realidades paralelas: el aumento de precios de alquiler que afectaba a los estudiantes 
                    y la soledad no deseada que experimentaban muchas personas mayores con espacio 
                    disponible en sus hogares.
                  </p>
                  <p>
                    Inspirados por modelos internacionales exitosos de convivencia intergeneracional, 
                    creamos una plataforma adaptada a la realidad española, con énfasis en la seguridad, 
                    compatibilidad y creación de relaciones significativas entre generaciones.
                  </p>
                  <p>
                    En menos de dos años, hemos facilitado más de 500 conexiones exitosas en 12 ciudades 
                    españolas, transformando vidas y construyendo puentes entre generaciones. 
                    Nuestro equipo multidisciplinar sigue creciendo, siempre guiado por valores 
                    de respeto, empatía e innovación social.
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative" style={{ animation: 'fadeInRight 1s ease-out 0.3s both' }}>
                <div className="p-2 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue shadow-medium">
                  <div className="bg-white p-3 rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="/images/our-story.jpg"
                        alt="Historia de CoNest"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-conest-blue/5 rounded-full z-[-1]"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-conest-blue/5 rounded-full z-[-1]"></div>
                <div className="absolute -bottom-12 right-10 bg-white rounded-xl shadow-medium p-4 max-w-xs border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-conest-blue flex items-center justify-center text-white text-sm font-bold">
                      <span>2022</span>
                    </div>
                    <p className="font-medium text-conest-darkGray">Año de fundación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-conest-lightBlue/20 to-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                Nuestros Valores
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Estos principios guían cada decisión que tomamos y cada conexión que facilitamos.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Conexión auténtica</h3>
                    <p className="text-conest-darkGray/80">
                      Creemos en el valor de las relaciones humanas significativas que trascienden 
                      las barreras generacionales y enriquecen la vida de todos los participantes.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 2 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                        <path d="M6 12h12"/>
                        <path d="M21 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Innovación social</h3>
                    <p className="text-conest-darkGray/80">
                      Abordamos desafíos sociales mediante soluciones creativas que generan 
                      beneficio mutuo y contribuyen a crear comunidades más inclusivas y solidarias.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 3 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Confianza y seguridad</h3>
                    <p className="text-conest-darkGray/80">
                      Ponemos el máximo cuidado en crear un entorno seguro mediante procesos 
                      rigurosos de verificación y seguimiento continuo de las convivencias.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 4 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Compromiso a largo plazo</h3>
                    <p className="text-conest-darkGray/80">
                      No solo conectamos personas, sino que ofrecemos acompañamiento continuo 
                      para asegurar relaciones duraderas y mutuamente beneficiosas.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 5 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
                        <path d="M8 17v1a4 4 0 0 0 8 0v-1"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Escucha activa</h3>
                    <p className="text-conest-darkGray/80">
                      Valoramos profundamente las experiencias y opiniones de nuestra comunidad, 
                      que son fundamentales para mejorar constantemente nuestro servicio.
                    </p>
                  </CardBody>
                </Card>
              </div>
              
              {/* Value 6 */}
              <div className="group" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
                <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                  <CardBody className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-2xl mb-6 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Transparencia</h3>
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
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                Nuestro Equipo
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Un grupo multidisciplinar de profesionales comprometidos con la innovación social.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group" 
                  style={{ animation: `fadeInUp 0.8s ease-out ${0.1 + index * 0.1}s both` }}
                >
                  <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                    <CardBody className="p-0">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1 text-conest-darkGray">{member.name}</h3>
                        <p className="text-conest-blue font-medium mb-3">{member.role}</p>
                        <p className="text-conest-darkGray/80">{member.bio}</p>
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
      <section className="py-20 bg-gradient-to-br from-conest-lightBlue/10 to-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                Colaboradores y Alianzas
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Trabajamos con instituciones líderes para ampliar nuestro impacto social.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-soft flex items-center justify-center h-32"
                  style={{ animation: `fadeIn 1s ease-out ${0.1 + index * 0.1}s both` }}
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
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
                  <Link href="/sign-up/options">
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
      
      {/* Define keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}