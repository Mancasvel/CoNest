'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab, Accordion, AccordionItem } from "@heroui/react";

export default function ComoFuncionaPage() {
  const [activeTab, setActiveTab] = useState("hosts");

  const steps = {
    hosts: [
      { 
        title: "Registro y Perfil", 
        description: "Crea tu perfil de anfitrión con tus datos, preferencias e información sobre tu espacio disponible." 
      },
      { 
        title: "Verificación", 
        description: "Completamos una verificación de antecedentes para garantizar la seguridad de todos los usuarios." 
      },
      { 
        title: "Configuración del Alojamiento", 
        description: "Establece tus condiciones y expectativas para la convivencia y la ayuda que esperas recibir." 
      },
      { 
        title: "Conexión con Estudiantes", 
        description: "Revisa perfiles de estudiantes interesados y selecciona a quienes consideres compatibles." 
      },
      { 
        title: "Acuerdo y Bienvenida", 
        description: "Firma un acuerdo formal y prepárate para dar la bienvenida a tu nuevo compañero de hogar." 
      }
    ],
    students: [
      { 
        title: "Registro y Perfil", 
        description: "Crea tu perfil de estudiante con tus datos, preferencias y tipo de alojamiento que buscas." 
      },
      { 
        title: "Verificación Académica", 
        description: "Verificamos tu estatus como estudiante para garantizar la confianza en la plataforma." 
      },
      { 
        title: "Búsqueda de Anfitriones", 
        description: "Explora los perfiles de anfitriones disponibles en tu área de interés." 
      },
      { 
        title: "Solicitud y Entrevista", 
        description: "Envía solicitudes a los anfitriones que te interesen y participa en entrevistas virtuales o presenciales." 
      },
      { 
        title: "Acuerdo y Mudanza", 
        description: "Firma un acuerdo formal que detalla condiciones, expectativas y responsabilidades mutuas." 
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
      {/* Main Title Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-conest-lightBlue/20 to-white -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10" aria-hidden="true">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #007B9E 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-block rounded-full bg-conest-blue/10 px-4 py-1.5 text-sm font-medium text-conest-blue mb-4 shadow-sm"
              style={{ animation: 'fadeIn 0.8s ease-out' }}
            >
              Guía Detallada
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-conest-darkGray tracking-tight"
              style={{ animation: 'fadeIn 0.8s ease-out 0.1s both' }}
            >
              Cómo Funciona <span className="text-conest-blue">CoNest</span>
            </h1>
            <p 
              className="text-xl text-conest-darkGray/80 max-w-3xl mx-auto leading-relaxed"
              style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}
            >
              Descubre el proceso para formar parte de nuestra comunidad, ya sea como anfitrión que ofrece una habitación o como estudiante en busca de alojamiento.
            </p>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-16 text-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                El Proceso
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              En CoNest nos encargamos de facilitar todo el proceso para que la experiencia 
              sea segura y satisfactoria para ambas partes.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-soft rounded-xl p-4 mb-12">
              <Tabs 
                aria-label="Opciones" 
                color="primary" 
                variant="underlined"
                classNames={{
                  tabList: "bg-conest-lightBlue/20 rounded-xl p-2 gap-6",
                  cursor: "bg-conest-blue rounded-xl",
                  tab: "px-4 py-3 text-md font-medium data-[selected=true]:text-conest-blue",
                  panel: "pt-6"
                }}
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
              >
                <Tab 
                  key="hosts" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue">👵</span>
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
                        <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                          <CardBody className="p-6">
                            <div className="flex items-start">
                              <div className="w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold mr-4 shrink-0 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">{step.title}</h4>
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
                      <span className="w-8 h-8 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue">👨‍🎓</span>
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
                        <Card className="bg-white shadow-soft border border-gray-100 h-full transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 hover:-translate-y-1">
                          <CardBody className="p-6">
                            <div className="flex items-start">
                              <div className="w-12 h-12 rounded-full bg-conest-lightBlue flex items-center justify-center text-conest-blue text-xl font-bold mr-4 shrink-0 group-hover:bg-conest-blue group-hover:text-white transition-colors duration-300">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">{step.title}</h4>
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
      
      {/* Process Visualization */}
      <section className="py-16 bg-gradient-to-br from-white via-conest-lightBlue/5 to-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="w-full md:w-1/2">
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
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <p className="text-conest-darkGray/90 font-medium">Proceso seguro garantizado</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <p className="text-conest-darkGray/90 font-medium">Soporte personalizado en cada etapa</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <p className="text-conest-darkGray/90 font-medium">Herramientas digitales intuitivas</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue">
                    <div className="p-6 bg-white rounded-xl">
                      <Image 
                        src="/images/how-it-works.jpg" 
                        alt="Proceso de CoNest" 
                        width={400} 
                        height={300}
                        className="rounded-lg shadow-soft w-full h-auto"
                      />
                      
                      <div className="mt-6 p-4 bg-conest-lightBlue/20 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2 text-conest-darkGray">
                          Tiempo estimado del proceso
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-conest-darkGray/80">Registro y verificación</span>
                            <span className="text-conest-blue font-medium">1-2 días</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-conest-blue rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-conest-darkGray/80">Encuentro de match ideal</span>
                            <span className="text-conest-blue font-medium">1-3 semanas</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-conest-blue rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-conest-darkGray/80">Formalización y mudanza</span>
                            <span className="text-conest-blue font-medium">3-7 días</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-conest-blue rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-conest-blue/5 rounded-full z-[-1]"></div>
                  <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-conest-blue/5 rounded-full z-[-1]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                Preguntas Frecuentes
              </span>
            </h2>
            <p className="text-conest-darkGray/80">
              Resolvemos tus dudas sobre el proceso de convivencia intergeneracional.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion 
              variant="splitted"
              className="gap-4"
            >
              <AccordionItem 
                key="1" 
                title="¿Cómo se determina el precio del alojamiento?" 
                subtitle="Información sobre tarifas"
                className="bg-white shadow-soft rounded-xl group data-[hover=true]:border-conest-blue/40 transition-all duration-300"
                classNames={{
                  title: "text-conest-darkGray font-semibold group-data-[hover=true]:text-conest-blue",
                  subtitle: "text-conest-darkGray/70",
                  content: "text-conest-darkGray/80"
                }}
                indicator={({ isOpen }) => (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 
                    ${isOpen ? 'bg-conest-blue text-white' : 'bg-conest-blue/10 text-conest-blue'}`}>
                    {isOpen ? '-' : '+'}
                  </div>
                )}
              >
                <div className="px-2 py-3">
                  <p className="mb-2">
                    Los precios son establecidos por los anfitriones, pero desde CoNest proporcionamos guías 
                    de precios recomendados basados en la ubicación, características de la vivienda y servicios incluidos.
                  </p>
                  <p>
                    Generalmente, los alojamientos en CoNest son significativamente más económicos que el 
                    mercado tradicional, ya que se tiene en cuenta la compañía y potencial ayuda que el 
                    estudiante proporcionará al anfitrión.
                  </p>
                </div>
              </AccordionItem>
              
              <AccordionItem 
                key="2" 
                title="¿Qué tipo de verificaciones realizáis?" 
                subtitle="Medidas de seguridad y confianza"
                className="bg-white shadow-soft rounded-xl group data-[hover=true]:border-conest-blue/40 transition-all duration-300"
                classNames={{
                  title: "text-conest-darkGray font-semibold group-data-[hover=true]:text-conest-blue",
                  subtitle: "text-conest-darkGray/70",
                  content: "text-conest-darkGray/80"
                }}
                indicator={({ isOpen }) => (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 
                    ${isOpen ? 'bg-conest-blue text-white' : 'bg-conest-blue/10 text-conest-blue'}`}>
                    {isOpen ? '-' : '+'}
                  </div>
                )}
              >
                <div className="px-2 py-3">
                  <p className="mb-2">
                    Para los anfitriones, verificamos su identidad, titularidad de la vivienda, y realizamos
                    una visita para asegurar que cumple con nuestros estándares de habitabilidad.
                  </p>
                  <p>
                    Para los estudiantes, verificamos su identidad, matrícula universitaria activa, 
                    antecedentes y, cuando es posible, referencias de convivencias anteriores o académicas.
                  </p>
                </div>
              </AccordionItem>
              
              <AccordionItem 
                key="3" 
                title="¿Qué obligaciones tienen los estudiantes además del alquiler?" 
                subtitle="Expectativas de convivencia"
                className="bg-white shadow-soft rounded-xl group data-[hover=true]:border-conest-blue/40 transition-all duration-300"
                classNames={{
                  title: "text-conest-darkGray font-semibold group-data-[hover=true]:text-conest-blue",
                  subtitle: "text-conest-darkGray/70",
                  content: "text-conest-darkGray/80"
                }}
                indicator={({ isOpen }) => (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 
                    ${isOpen ? 'bg-conest-blue text-white' : 'bg-conest-blue/10 text-conest-blue'}`}>
                    {isOpen ? '-' : '+'}
                  </div>
                )}
              >
                <div className="px-2 py-3">
                  <p className="mb-2">
                    Además del pago del alquiler, los estudiantes acuerdan dedicar un tiempo a la compañía 
                    y potencialmente a pequeñas ayudas domésticas, según lo acordado en el convenio de convivencia.
                  </p>
                  <p>
                    Esto puede incluir compartir algunas comidas a la semana, ayudar con compras o 
                    simplemente mantener conversaciones regulares. Cada acuerdo es personalizado según 
                    las necesidades y disponibilidades de ambas partes.
                  </p>
                </div>
              </AccordionItem>
              
              <AccordionItem 
                key="4" 
                title="¿Qué sucede si surge algún problema durante la convivencia?" 
                subtitle="Resolución de conflictos"
                className="bg-white shadow-soft rounded-xl group data-[hover=true]:border-conest-blue/40 transition-all duration-300"
                classNames={{
                  title: "text-conest-darkGray font-semibold group-data-[hover=true]:text-conest-blue",
                  subtitle: "text-conest-darkGray/70",
                  content: "text-conest-darkGray/80"
                }}
                indicator={({ isOpen }) => (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 
                    ${isOpen ? 'bg-conest-blue text-white' : 'bg-conest-blue/10 text-conest-blue'}`}>
                    {isOpen ? '-' : '+'}
                  </div>
                )}
              >
                <div className="px-2 py-3">
                  <p className="mb-2">
                    Contamos con un equipo de mediación que interviene para resolver cualquier conflicto 
                    que pueda surgir durante la convivencia, facilitando el diálogo y buscando soluciones.
                  </p>
                  <p>
                    Si la situación no puede resolverse, nuestros acuerdos incluyen cláusulas de terminación 
                    anticipada justas para ambas partes, y podemos ayudar a encontrar alternativas de alojamiento.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
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
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-medium overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
                  ¿Listo para unirte a la comunidad CoNest?
                </h2>
                <p className="text-conest-darkGray/80 mb-8">
                  Tanto si buscas compartir tu hogar como si necesitas alojamiento mientras estudias, 
                  estamos aquí para acompañarte en todo el proceso.
                </p>
                <div className="space-y-4">
                  <Link href="/sign-up" className="block">
                    <Button 
                      className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-4 rounded-xl shadow-soft transition-transform hover:scale-105 duration-200"
                      size="lg"
                    >
                      Soy Anfitrión
                    </Button>
                  </Link>
                  <Link href="/sign-up" className="block">
                    <Button 
                      className="w-full bg-white border-2 border-conest-blue text-conest-blue hover:bg-conest-lightBlue/20 font-bold py-4 rounded-xl transition-transform hover:scale-105 duration-200"
                      size="lg"
                    >
                      Soy Estudiante
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <Image 
                  src="/images/cta-image.jpg" 
                  alt="CoNest comunidad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-conest-blue/30 to-transparent mix-blend-multiply"></div>
                
                <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-soft max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-conest-blue flex items-center justify-center text-white text-sm font-bold">
                      <span>★</span>
                    </div>
                    <p className="font-medium text-conest-darkGray">Experiencia transformadora</p>
                  </div>
                  <p className="text-sm text-conest-darkGray/80">
                    "Vivir con mi anfitriona ha sido una de las mejores decisiones que he tomado. Es mucho más que un alojamiento asequible."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  
    </div>
  );
} 