'use client';
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";
import NavbarTerracota from "@/app/components/Navbar";

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
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavbarTerracota />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">        
        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-800">
              Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Funciona</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre el proceso para formar parte de CoNest, ya sea como anfitrión o como estudiante 
              en busca de alojamiento.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full mt-2 mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                El Proceso
              </span>
            </h2>
            <p className="text-gray-600">
              En CoNest nos encargamos de facilitar todo el proceso para que la experiencia 
              sea segura y satisfactoria para ambas partes.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Proceso para Anfitriones */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-lg mr-3">
                    <span>👵</span>
                  </div>
                  Para Anfitriones
                </h3>
                
                <div className="space-y-8">
                  <Card className="bg-white shadow-md border border-gray-100 process-card">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold mr-4 shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Registro</h4>
                          <p className="text-gray-600">
                            Crea tu perfil en nuestra plataforma, describe tu hogar, las habitaciones 
                            disponibles y tus preferencias para la convivencia.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.2s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold mr-4 shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Verificación</h4>
                          <p className="text-gray-600">
                            Nuestro equipo verifica tu información y programa una visita a tu hogar 
                            para asegurar que cumpla con nuestros estándares.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.4s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold mr-4 shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Conexión</h4>
                          <p className="text-gray-600">
                            Te presentamos perfiles de estudiantes compatibles y facilita
                            mos reuniones virtuales para que os conozcáis antes de tomar decisiones.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.6s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold mr-4 shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Acuerdo</h4>
                          <p className="text-gray-600">
                            Una vez encontrada la persona adecuada, te ayudamos con el proceso de 
                            acuerdo y documentación necesaria para iniciar la convivencia.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
              
              {/* Proceso para Estudiantes */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-lg mr-3">
                    <span>👨‍🎓</span>
                  </div>
                  Para Estudiantes
                </h3>
                
                <div className="space-y-8">
                  <Card className="bg-white shadow-md border border-gray-100 process-card">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold mr-4 shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Aplicación</h4>
                          <p className="text-gray-600">
                            Completa tu perfil con información sobre tus estudios, intereses y 
                            preferencias para la convivencia intergeneracional.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.2s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold mr-4 shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Verificación</h4>
                          <p className="text-gray-600">
                            Verificamos tu identidad, estado como estudiante y referencias para 
                            garantizar la seguridad de nuestros anfitriones.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.4s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold mr-4 shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Exploración</h4>
                          <p className="text-gray-600">
                            Accede a perfiles de anfitriones compatibles con tus necesidades y 
                            preferencias, y solicita conectar con ellos.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="bg-white shadow-md border border-gray-100 process-card" style={{ animationDelay: "0.6s" }}>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold mr-4 shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">Mudanza</h4>
                          <p className="text-gray-600">
                            Una vez aceptada tu solicitud y acordados los términos, te proporcionamos 
                            guías para facilitar una transición agradable a tu nuevo hogar.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                Preguntas Frecuentes
              </span>
            </h2>
            <p className="text-gray-600">
              Resolvemos tus dudas sobre el proceso de convivencia intergeneracional.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion variant="splitted">
              <AccordionItem 
                key="1" 
                title="¿Cómo se determina el precio del alojamiento?" 
                subtitle="Información sobre tarifas"
                className="bg-white shadow-sm mb-4 rounded-lg faq-item"
                classNames={{
                  title: "text-gray-800 font-semibold",
                  subtitle: "text-gray-600",
                  content: "text-gray-600"
                }}
              >
                <div className="px-2 py-1">
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
                className="bg-white shadow-sm mb-4 rounded-lg faq-item"
                classNames={{
                  title: "text-gray-800 font-semibold",
                  subtitle: "text-gray-600",
                  content: "text-gray-600"
                }}
              >
                <div className="px-2 py-1">
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
                className="bg-white shadow-sm mb-4 rounded-lg faq-item"
                classNames={{
                  title: "text-gray-800 font-semibold",
                  subtitle: "text-gray-600",
                  content: "text-gray-600"
                }}
              >
                <div className="px-2 py-1">
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
                className="bg-white shadow-sm mb-4 rounded-lg faq-item"
                classNames={{
                  title: "text-gray-800 font-semibold",
                  subtitle: "text-gray-600",
                  content: "text-gray-600"
                }}
              >
                <div className="px-2 py-1">
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
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  ¿Listo para unirte a la comunidad CoNest?
                </h2>
                <p className="text-gray-600 mb-8">
                  Tanto si buscas compartir tu hogar como si necesitas alojamiento mientras estudias, 
                  estamos aquí para acompañarte en todo el proceso.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/20"
                  >
                    Soy Anfitrión
                  </Button>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-bold py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20"
                  >
                    Soy Estudiante
                  </Button>
                  
                </div>
              </div>
              <div className="hidden md:block">
                <Image 
                  src="/images/cta-image.jpg" 
                  width={400} 
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Animaciones para el contenido */
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Animaciones para las tarjetas de proceso */
        .process-card {
          opacity: 0;
          animation: fadeInRight 0.5s forwards;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Animaciones para FAQ */
        .faq-item {
          opacity: 0;
          animation: fadeInUp 0.5s forwards;
          animation-delay: calc(0.1s * var(--index, 0));
        }
        .faq-item:nth-child(1) { --index: 1; }
        .faq-item:nth-child(2) { --index: 2; }
        .faq-item:nth-child(3) { --index: 3; }
        .faq-item:nth-child(4) { --index: 4; }
      `}</style>
    </div>
  );
} 