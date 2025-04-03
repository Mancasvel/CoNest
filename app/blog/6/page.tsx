'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost6Page() {
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
                  Noticias
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">5 de agosto de 2024 · 4 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                CoNest se expande: Nuevas ciudades universitarias en nuestro horizonte
              </h1>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src="/images/team/ceo.png"
                    alt="José María de Cossío"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-conest-darkGray">José María de Cossío</p>
                  <p className="text-sm text-conest-darkGray/60">CEO y Fundador</p>
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
                src="/images/blog/blog-expansion.jpg"
                alt="Mapa de expansión de CoNest"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                Nos complace anunciar que CoNest ampliará su presencia a nuevas ciudades universitarias de España para 
                el próximo curso académico 2024-2025, llevando nuestra innovadora solución de vivienda compartida 
                intergeneracional a más estudiantes y personas mayores.
              </p>
              
              <h2>Un crecimiento impulsado por el éxito</h2>
              <p>
                Tras un año de operaciones en Madrid y Barcelona, donde hemos facilitado más de 200 emparejamientos 
                exitosos entre personas mayores y estudiantes, CoNest ha demostrado el potencial transformador de su modelo. 
                Nuestros índices de satisfacción superan el 92% entre ambos colectivos, lo que nos ha animado a dar el siguiente paso en nuestra misión.
              </p>
              <p>
                "Lo que comenzó como una idea para resolver dos problemas sociales —la soledad de los mayores y la falta 
                de alojamiento asequible para estudiantes— se ha convertido en un movimiento que está cambiando la forma en que 
                concebimos la convivencia intergeneracional en España", explica José María de Cossío, CEO y fundador de CoNest.
              </p>
              
              <h2>Nuevas ciudades que se unen a la red CoNest</h2>
              <p>
                A partir de septiembre de 2024, CoNest estará operativo en seis nuevas ciudades universitarias:
              </p>
              
              <ul>
                <li><strong>Valencia</strong>: Con más de 100.000 estudiantes universitarios y una significativa población de adultos mayores, especialmente en el centro histórico.</li>
                <li><strong>Sevilla</strong>: Una ciudad con gran tradición universitaria donde los precios del alquiler han experimentado un incremento del 35% en los últimos tres años.</li>
                <li><strong>Granada</strong>: Ciudad universitaria por excelencia, con una alta demanda de alojamiento estudiantil y barrios tradicionales con población envejecida.</li>
                <li><strong>Salamanca</strong>: Con una de las universidades más antiguas de Europa, acoge a miles de estudiantes cada año en una ciudad de tamaño medio.</li>
                <li><strong>Santiago de Compostela</strong>: Ciudad histórica con fuerte presencia universitaria y una población mayor muy arraigada al centro histórico.</li>
                <li><strong>Bilbao</strong>: Importante polo educativo del norte con una creciente presión en el mercado inmobiliario para estudiantes.</li>
              </ul>
              
              <p>
                "Hemos seleccionado estas ciudades tras un exhaustivo estudio de mercado, considerando factores como 
                la población universitaria, la presencia de adultos mayores viviendo solos, la tensión en el mercado 
                de alquiler y el interés mostrado por las instituciones locales", señala Manuel Castillejo, Director de Expansión de CoNest.
              </p>
              
              <div className="bg-conest-blue/5 p-6 rounded-xl border-l-4 border-conest-blue my-8">
                <p className="italic text-xl font-medium mb-2">"Expandir CoNest a nuevas ciudades no es solo un crecimiento empresarial, sino la oportunidad de llevar nuestra visión de una sociedad más conectada e intergeneracional a más rincones de España."</p>
                <p className="text-right text-conest-blue">— José María de Cossío, CEO y Fundador</p>
              </div>
              
              <h2>Colaboraciones institucionales que hacen posible la expansión</h2>
              <p>
                Este crecimiento ha sido posible gracias a acuerdos estratégicos con:
              </p>
              
              <ul>
                <li><strong>Universidades</strong>: Convenios con las principales universidades de cada ciudad para facilitar la difusión entre estudiantes.</li>
                <li><strong>Ayuntamientos</strong>: Colaboraciones con las áreas de servicios sociales y vivienda para identificar y conectar con personas mayores que podrían beneficiarse del programa.</li>
                <li><strong>Asociaciones de mayores</strong>: Alianzas con organizaciones locales que nos ayudarán a crear confianza en la comunidad de adultos mayores.</li>
                <li><strong>Entidades financieras</strong>: Apoyo para la creación de programas específicos que faciliten la adaptación de viviendas cuando sea necesario.</li>
              </ul>
              
              <p>
                "La implicación de las instituciones locales ha sido fundamental. En cada ciudad hemos encontrado 
                un entusiasmo compartido por esta solución que aborda simultáneamente la soledad no deseada y la 
                accesibilidad a la vivienda", destaca Ana Martínez, Directora de Impacto Social.
              </p>
              
              <h2>Nuestro impacto proyectado para el curso 2024-2025</h2>
              <p>
                Con esta expansión, nuestros objetivos para el próximo curso académico son ambiciosos:
              </p>
              
              <ul>
                <li>Facilitar más de 500 nuevos emparejamientos en las seis nuevas ciudades</li>
                <li>Reducir la soledad no deseada de al menos 500 personas mayores</li>
                <li>Proporcionar alojamiento asequible a 500 estudiantes, con un ahorro medio estimado del 40% respecto a los precios de mercado</li>
                <li>Generar un impacto económico directo de más de 2 millones de euros en ingresos adicionales para personas mayores</li>
                <li>Crear al menos 20 nuevos puestos de trabajo directos para la gestión local del programa</li>
              </ul>
              
              <h2>Mejoras en nuestra plataforma y servicios</h2>
              <p>
                Coincidiendo con esta expansión geográfica, CoNest también anuncia importantes mejoras en su plataforma y servicios:
              </p>
              
              <ul>
                <li><strong>Nueva aplicación móvil</strong>: Lanzaremos aplicaciones nativas para iOS y Android que facilitarán la comunicación entre usuarios y el acceso a todos los servicios.</li>
                <li><strong>Sistema mejorado de emparejamiento</strong>: Hemos refinado nuestro algoritmo para lograr una mayor precisión en la compatibilidad entre mayores y estudiantes.</li>
                <li><strong>Programa de actividades comunitarias</strong>: En cada ciudad organizaremos eventos mensuales para toda la comunidad CoNest, fortaleciendo los lazos entre participantes.</li>
                <li><strong>Verificación avanzada</strong>: Implementamos un proceso de verificación aún más exhaustivo para garantizar la máxima seguridad y confianza.</li>
              </ul>
              
              <h2>Testimonios que avalan nuestro modelo</h2>
              <p>
                El éxito de CoNest se refleja en los testimonios de quienes ya forman parte de nuestra comunidad:
              </p>
              
              <p>
                <strong>Carmen, 75 años (Madrid)</strong>: "Al principio tenía mis dudas sobre compartir mi casa con un desconocido. 
                Hoy, después de ocho meses con Lucía, no solo tengo una inquilina, sino alguien que ha devuelto la alegría a mi hogar. 
                Me alegra saber que más personas mayores podrán vivir esta experiencia en otras ciudades."
              </p>
              
              <p>
                <strong>Miguel, estudiante de Ingeniería (Barcelona)</strong>: "Gracias a CoNest, no solo he encontrado un alojamiento 
                que puedo pagar sin arruinar a mis padres, sino un verdadero hogar con Antonio, mi anfitrión. He aprendido 
                tanto de él... es una relación que va mucho más allá del simple alquiler."
              </p>
              
              <h2>El futuro: una visión a largo plazo</h2>
              <p>
                Esta expansión representa solo el principio de un ambicioso plan de crecimiento. Para 2026, 
                CoNest aspira a estar presente en todas las ciudades universitarias principales de España y comenzar 
                su internacionalización en países como Portugal, Francia e Italia, que enfrentan desafíos similares.
              </p>
              
              <p>
                "Nuestra visión a largo plazo es transformar la manera en que entendemos la vivienda y la convivencia 
                intergeneracional en Europa. Creemos firmemente que este modelo puede contribuir significativamente a 
                construir sociedades más cohesionadas, sostenibles y solidarias", concluye José María de Cossío.
              </p>
              
              <h2>Únete a nosotros en esta nueva etapa</h2>
              <p>
                Si eres una persona mayor con espacio disponible en tu hogar o un estudiante buscando alojamiento 
                en alguna de nuestras ciudades, te invitamos a registrarte en nuestra plataforma. También buscamos 
                colaboradores locales en cada nueva ciudad que quieran sumarse a esta iniciativa transformadora.
              </p>
              
              <p>
                En CoNest no solo estamos expandiendo una empresa, sino una nueva forma de entender la convivencia, 
                el apoyo mutuo y la conexión entre generaciones. Porque creemos que los mejores hogares son aquellos 
                donde se comparte más que espacio: se comparte vida.
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
                href="/blog/5" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Artículo anterior</span>
              </Link>
              <Link 
                href="/blog/7" 
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
                      alt="Beneficios de la convivencia intergeneracional"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      5 beneficios de la convivencia intergeneracional que quizás no conocías
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Un análisis de los efectos positivos para mayores y jóvenes.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/4" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-guide.jpg"
                      alt="Guía práctica"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      Guía práctica: Preparando tu hogar para recibir a un estudiante
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Consejos útiles para personas mayores que se preparan para compartir su hogar.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/5" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-economic.jpg"
                      alt="Impacto económico"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      El impacto económico de la vivienda compartida intergeneracional
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Análisis del ahorro real y el impacto en la economía local.
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