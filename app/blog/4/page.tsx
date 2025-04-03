'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost4Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-b from-conest-blue/20 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-b from-conest-blue/10 to-white"></div>
          <div className="relative h-full w-full max-w-6xl mx-auto px-4">
            <div className="absolute bottom-0 left-4 md:left-10 right-4 md:right-10 bg-white rounded-t-2xl shadow-medium p-6 md:p-10">
              <div className="mb-4">
                <span className="px-3 py-1 bg-conest-blue text-white text-xs font-medium rounded-full">
                  Consejos
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">10 de julio de 2024 · 7 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                Guía práctica: Preparando tu hogar para recibir a un estudiante
              </h1>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src="/images/team/coo.png"
                    alt="Natalia Olmo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-conest-darkGray">Natalia Olmo</p>
                  <p className="text-sm text-conest-darkGray/60">Directora de Operaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] w-full mb-10 rounded-xl overflow-hidden">
              <Image
                src="/images/blog/blog-guide.jpg"
                alt="Guía práctica para preparar tu hogar"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                Ser estudiante universitario en España se ha convertido en un desafío económico creciente,
                especialmente cuando se trata de encontrar alojamiento asequible en las grandes ciudades.
                Descubre cómo la convivencia intergeneracional puede ser la solución que estabas buscando.
              </p>
              
              <h2>La crisis del alojamiento estudiantil en España</h2>
              <p>
                Los datos son contundentes: el precio medio de una habitación en un piso compartido en
                ciudades como Madrid o Barcelona ha aumentado más de un 40% en los últimos cinco años.
                Un estudiante destina, de media, entre el 50% y el 70% de su presupuesto mensual solo
                al alojamiento, lo que deja muy poco margen para otros gastos esenciales como alimentación,
                transporte o material académico.
              </p>
              <p>
                Además, la competencia por encontrar una habitación decente es feroz, especialmente al
                inicio del curso académico. Muchos estudiantes se ven obligados a aceptar condiciones
                precarias: habitaciones minúsculas, pisos mal acondicionados o ubicaciones lejanas de
                sus centros de estudio, con el consecuente gasto en transporte y tiempo de desplazamiento.
              </p>
              
              <h2>La alternativa intergeneracional: ventajas económicas</h2>
              <p>
                La convivencia intergeneracional, como la que facilitamos en CoNest, ofrece una alternativa
                que aporta beneficios económicos significativos para los estudiantes:
              </p>
              
              <h3>1. Ahorro directo en el coste del alquiler</h3>
              <p>
                En CoNest, los estudiantes pagan entre un 30% y un 50% menos que el precio de mercado por
                una habitación en un piso compartido tradicional. Este ahorro se traduce en cientos de euros
                mensuales que pueden destinarse a otros gastos o simplemente reducir la carga económica sobre
                las familias que financian los estudios.
              </p>
              <p>
                "Antes pagaba 450€ por una habitación minúscula en un piso compartido con otros cinco estudiantes.
                Ahora pago 275€ por una habitación amplia, luminosa y con baño propio en casa de Carmen, una jubilada
                encantadora", nos cuenta Alejandro, estudiante de Derecho en la Universidad Complutense.
              </p>
              
              <h3>2. Gastos incluidos y transparencia</h3>
              <p>
                Una ventaja adicional es que muchos de nuestros alojamientos incluyen gastos como agua,
                electricidad, gas e internet en el precio acordado. Esto no solo supone un ahorro adicional,
                sino que aporta previsibilidad al presupuesto mensual, evitando sorpresas desagradables
                cuando llegan las facturas.
              </p>
              <p>
                "En mi anterior piso, además del alquiler, pagábamos los suministros aparte. Cada mes era
                una incógnita y una fuente de conflictos entre compañeros. Ahora tengo un precio cerrado y
                sé exactamente con qué dinero cuento cada mes", explica Laura, estudiante de Arquitectura.
              </p>
              
              <h3>3. Reducción de gastos en comida</h3>
              <p>
                Muchos de nuestros anfitriones mayores disfrutan cocinando y compartiendo comidas con sus
                estudiantes. Esto no solo crea momentos de conexión valiosos, sino que supone un ahorro
                significativo en el presupuesto alimentario.
              </p>
              <p>
                "Antonio es un cocinero espectacular y le encanta que comamos juntos al menos tres veces
                por semana. He descubierto la cocina tradicional española y ahorro unos 100€ mensuales en
                comida", comenta Ricardo, estudiante internacional de Portugal.
              </p>
              
              <h2>Más allá del ahorro: beneficios adicionales para estudiantes</h2>
              <p>
                El aspecto económico es un factor decisivo, pero la convivencia intergeneracional ofrece
                ventajas que van mucho más allá del ahorro directo:
              </p>
              
              <h3>1. Entorno ideal para el estudio</h3>
              <p>
                A diferencia de los pisos compartidos tradicionales donde el ruido y las distracciones son
                constantes, los hogares de personas mayores suelen ofrecer un ambiente tranquilo y propicio
                para el estudio. Esta tranquilidad se traduce en mejor rendimiento académico y mayor bienestar.
              </p>
              <p>
                "Mis calificaciones han mejorado notablemente desde que vivo con Pilar. Tengo silencio cuando
                lo necesito y un espacio dedicado para estudiar. En mi anterior piso era imposible concentrarse
                con las fiestas y el trasiego constante", asegura Marta, estudiante de Medicina.
              </p>
              
              <h3>2. Ubicaciones privilegiadas</h3>
              <p>
                Muchas personas mayores viven en barrios céntricos, bien comunicados y cerca de
                universidades, pero en viviendas adquiridas hace décadas. Esto permite a los estudiantes
                acceder a ubicaciones que serían inaccesibles económicamente en el mercado de alquiler actual.
              </p>
              <p>
                "Vivo a 10 minutos andando de mi facultad, en un barrio precioso y seguro al que nunca
                hubiera podido acceder con mi presupuesto. Ahorro en transporte y gano calidad de vida",
                explica Javier, estudiante de Ingeniería.
              </p>
              
              <h3>3. Red de apoyo y conocimiento local</h3>
              <p>
                Especialmente valioso para estudiantes que vienen de otras ciudades o países, contar con
                el conocimiento y la red de contactos local de una persona que ha vivido toda su vida en
                la ciudad supone una ventaja inestimable.
              </p>
              <p>
                "Cuando llegué a Madrid no conocía a nadie. Gracias a Mercedes, mi anfitriona, encontré médico
                de cabecera, conocí los mejores lugares para comprar a buen precio, e incluso conseguí prácticas
                en una empresa a través de un antiguo colega suyo", cuenta Elena, estudiante de Comunicación.
              </p>
              
              <h2>El proceso de CoNest: seguridad y compatibilidad</h2>
              <p>
                En CoNest entendemos que la convivencia intergeneracional solo funciona cuando hay una
                buena compatibilidad entre las personas. Por eso, nuestro proceso está diseñado para
                garantizar tanto la seguridad como la adecuación de los emparejamientos:
              </p>
              <ol>
                <li>
                  <strong>Verificación exhaustiva:</strong> Todos los participantes, tanto mayores como
                  estudiantes, pasan por un proceso de verificación que incluye documentación, antecedentes
                  y entrevistas personales.
                </li>
                <li>
                  <strong>Análisis de compatibilidad:</strong> Mediante cuestionarios detallados y entrevistas,
                  identificamos factores clave como hábitos, horarios, intereses y expectativas.
                </li>
                <li>
                  <strong>Visitas iniciales sin compromiso:</strong> Antes de cualquier acuerdo, facilitamos
                  encuentros presenciales para que ambas partes puedan conocerse y valorar si hay una buena conexión.
                </li>
                <li>
                  <strong>Acuerdos claros:</strong> Establecemos contratos claros que detallan
                  condiciones, responsabilidades y expectativas por ambas partes.
                </li>
                <li>
                  <strong>Seguimiento continuo:</strong> No abandonamos a las parejas una vez establecidas;
                  realizamos seguimiento regular para asegurar que la convivencia funciona positivamente.
                </li>
              </ol>
              
              <h2>Testimonios que demuestran el éxito del modelo</h2>
              <p>
                Las experiencias de nuestros estudiantes hablan por sí solas:
              </p>
              <div className="bg-conest-blue/5 p-6 rounded-xl border-l-4 border-conest-blue my-8">
                <p className="italic text-xl font-medium mb-2">"Vivir con Teresa no solo ha supuesto un ahorro económico enorme, sino que me ha proporcionado un verdadero hogar en Madrid. Su apoyo durante los exámenes, sus consejos y hasta sus tuppers cuando vuelvo a casa tarde de la biblioteca... no tiene precio."</p>
                <p className="text-right text-conest-blue">— Sara, estudiante de Psicología</p>
              </div>
              <div className="bg-conest-blue/5 p-6 rounded-xl border-l-4 border-conest-blue my-8">
                <p className="italic text-xl font-medium mb-2">"Al principio mis padres estaban preocupados por la idea de que viviera con un 'anciano', pero después de conocer a Ramón y ver su casa, están encantados. De hecho, cuando vienen a visitarme, siempre traen algo especial para él."</p>
                <p className="text-right text-conest-blue">— Miguel, estudiante de Bellas Artes</p>
              </div>
              
              <h2>Conclusión: una elección inteligente</h2>
              <p>
                En un contexto de precios desorbitados y escasez de alojamiento de calidad para estudiantes,
                la convivencia intergeneracional emerge como una solución innovadora que combina ventajas
                económicas con una experiencia vital enriquecedora.
              </p>
              <p>
                CoNest está comprometido con crear conexiones significativas que beneficien tanto a estudiantes
                como a personas mayores, abordando simultáneamente dos desafíos sociales: el acceso a vivienda
                asequible para jóvenes y la soledad no deseada en los mayores.
              </p>
              <p>
                Si eres estudiante y buscas una alternativa de alojamiento más económica, tranquila y
                enriquecedora, te invitamos a considerar la convivencia intergeneracional. Podría ser
                no solo la opción más inteligente económicamente, sino también una experiencia
                transformadora durante tus años universitarios.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-conest-darkGray">¿Te interesa nuestro proyecto?</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/elder/sign-up">
                  <Button color="primary" className="bg-conest-blue hover:bg-conest-mediumBlue text-white rounded-full">
                    Regístrate como Mayor
                  </Button>
                </Link>
                <Link href="/student/sign-up">
                  <Button color="primary" variant="bordered" className="text-conest-blue border-conest-blue">
                    Busca alojamiento como Estudiante
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Article Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between">
              <Link 
                href="/blog/3" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Artículo anterior</span>
              </Link>
              <Link 
                href="/blog/5" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <span>Artículo siguiente</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-conest-darkGray text-center">
              <span className="text-conest-blue">Artículos relacionados</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/2" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-benefits.jpg"
                      alt="Beneficios de la convivencia"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      5 beneficios de la convivencia intergeneracional
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Un análisis de los efectos positivos, respaldados por estudios.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/3" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-success.jpg"
                      alt="Historias de éxito"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      Historias de éxito: María y Carlos
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Conoce cómo la vida de María y Carlos cambió radicalmente tras un año compartiendo hogar.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/6" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-expansion.jpg"
                      alt="Expansión de CoNest"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      CoNest se expande: Nuevas ciudades en nuestro horizonte
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Anunciamos la expansión a nuevas ciudades universitarias en España.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-conest-blue font-medium border border-conest-blue/30 transition-all duration-300 hover:bg-conest-blue hover:text-white hover:shadow-medium"
              >
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 