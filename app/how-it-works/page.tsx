'use client';

import React from "react";
import { Card, CardBody, CardHeader, Divider, Button, Tabs, Tab } from "@heroui/react";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Cómo Funciona CoNest</h1>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Conectamos estudiantes que buscan alojamiento asequible con personas mayores 
          que tienen espacio extra en sus hogares. Conoce el proceso para cada tipo de usuario:
        </p>
        
        <Tabs 
          aria-label="Opciones"
          color="primary"
          variant="bordered"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-teal-700",
            tab: "max-w-fit px-2 h-12",
            tabContent: "group-data-[selected=true]:text-white"
          }}
          className="mb-12"
        >
          <Tab
            key="hosts"
            title={
              <div className="flex items-center space-x-2">
                <span className="[selected=true]:text-white">Para Anfitriones</span>
              </div>
            }
          >
            <div className="py-6">
              <h2 className="text-2xl font-semibold mb-8 text-teal-700">Para Anfitriones (Personas Mayores)</h2>
              
              <div className="space-y-8">
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Registro y Verificación</h3>
                        <p>
                          Crea tu cuenta de anfitrión con información básica sobre ti y tu hogar.
                          Nuestro equipo verificará tu identidad y propiedad para garantizar la seguridad.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Crea tu Perfil</h3>
                        <p>
                          Completa tu perfil con fotos de tu hogar, habitaciones disponibles, 
                          comodidades, tus intereses y lo que buscas en un compañero de vivienda.
                          Cuanta más información, más probabilidades de encontrar una buena compatibilidad.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Establece tus Condiciones</h3>
                        <p>
                          Define la duración de la estancia, el alquiler (si aplica), reglas de la casa 
                          y cualquier ayuda que necesites (como tareas del hogar, compras, etc.). 
                          Nuestro sistema te guiará para establecer expectativas claras.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Conoce Posibles Compañeros</h3>
                        <p>
                          Recibe perfiles de estudiantes compatibles. 
                          Revisa sus perfiles y haz videollamadas para conocerlos mejor.
                          Tú decides quién es adecuado para compartir tu hogar.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Acuerdo y Bienvenida</h3>
                        <p>
                          Una vez seleccionado un estudiante, firmarán un acuerdo a través de 
                          nuestra plataforma. Te ayudaremos a prepararte para su llegada y te 
                          daremos consejos para una convivencia exitosa.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  color="primary" 
                  size="lg"
                  className="bg-teal-700 text-white"
                  as="a" 
                  href="/sign-up/elder"
                >
                  Regístrate como Anfitrión
                </Button>
              </div>
            </div>
          </Tab>
          
          <Tab
            key="students"
            title={
              <div className="flex items-center space-x-2">
                <span className="text-lg">Para Estudiantes</span>
              </div>
            }
          >
            <div className="py-6">
              <h2 className="text-2xl font-semibold mb-8 text-yellow-600">Para Estudiantes</h2>
              
              <div className="space-y-8">
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Registro y Verificación</h3>
                        <p>
                          Crea tu cuenta de estudiante proporcionando información básica.
                          Verifica tu identidad y estatus de estudiante para acceder a todas las funciones.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Completa tu Perfil</h3>
                        <p>
                          Añade información sobre ti, tus estudios, intereses, horarios habituales, 
                          y lo que buscas en un alojamiento. Esta información nos ayudará a 
                          encontrar anfitriones compatibles.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Define tus Preferencias</h3>
                        <p>
                          Especifica la ubicación deseada, tu presupuesto, duración de la estancia, 
                          y qué tipo de ayuda estás dispuesto a ofrecer a cambio del alojamiento 
                          (compañía, tareas del hogar, enseñanza de tecnología, etc.).
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Explora Opciones</h3>
                        <p>
                          Revisa los perfiles de anfitriones compatibles con tus criterios.
                          Contacta a los que te interesen a través de nuestra plataforma 
                          y programa videollamadas para conocerlos mejor.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="border-none shadow">
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Acuerdo y Mudanza</h3>
                        <p>
                          Cuando encuentres el anfitrión ideal, firmarán un acuerdo a través de 
                          nuestra plataforma. Te proporcionaremos orientación para la mudanza 
                          y consejos para una convivencia respetuosa y enriquecedora.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  color="warning" 
                  size="lg"
                  className="bg-yellow-500 text-white"
                  as="a" 
                  href="/sign-up/student"
                >
                  Regístrate como Estudiante
                </Button>
              </div>
            </div>
          </Tab>
        </Tabs>
        
        <Divider className="my-12" />
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-6">
            <Accordion title="¿Cómo se garantiza la seguridad?">
              <p>
                Todos los usuarios pasan por un proceso de verificación de identidad. 
                Para los anfitriones, verificamos la propiedad de la vivienda y realizamos 
                comprobaciones de antecedentes. Además, nuestra plataforma cuenta con 
                un sistema de evaluaciones y referencias para construir confianza.
              </p>
            </Accordion>
            
            <Accordion title="¿Qué tipo de acuerdos se establecen?">
              <p>
                Los acuerdos varían según las necesidades de ambas partes. Pueden incluir:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Alquiler reducido a cambio de compañía y ayuda con tareas</li>
                <li>Alojamiento gratuito por un número específico de horas de ayuda semanal</li>
                <li>Combinaciones de pago y servicios</li>
              </ul>
              <p className="mt-2">
                Nuestra plataforma proporciona plantillas de acuerdos que pueden personalizarse.
              </p>
            </Accordion>
            
            <Accordion title="¿Qué pasa si la convivencia no funciona?">
              <p>
                Entendemos que no todas las combinaciones funcionan perfectamente. Por eso:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Recomendamos comenzar con un período de prueba de 2-4 semanas</li>
                <li>Ofrecemos mediación en caso de conflictos</li>
                <li>Los acuerdos incluyen términos claros para la finalización anticipada</li>
                <li>Nuestro equipo de soporte está disponible para ayudar en transiciones</li>
              </ul>
            </Accordion>
            
            <Accordion title="¿Hay algún costo por usar CoNest?">
              <p>
                El registro y la búsqueda son gratuitos. Cobramos una pequeña tarifa de servicio 
                solo cuando se establece un acuerdo exitoso entre un estudiante y un anfitrión. 
                Esta tarifa nos permite mantener la plataforma y proporcionar servicios de 
                verificación y soporte.
              </p>
            </Accordion>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">¿Listo para comenzar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y descubre una nueva forma de vivir, 
            compartir y crecer junto a personas de diferentes generaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              color="primary" 
              size="lg"
              className="bg-teal-700 text-white"
              as="a" 
              href="/sign-up/elder"
            >
              Ofrezco Alojamiento
            </Button>
            <Button 
              color="warning" 
              size="lg"
              className="bg-yellow-500 text-white"
              as="a" 
              href="/sign-up/student"
            >
              Busco Alojamiento
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="border-none shadow">
      <CardHeader 
        className="cursor-pointer p-4" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-medium">{title}</h3>
          <span className="text-xl">{isOpen ? '−' : '+'}</span>
        </div>
      </CardHeader>
      {isOpen && (
        <CardBody className="px-4 pb-4 pt-0">
          {children}
        </CardBody>
      )}
    </Card>
  );
}