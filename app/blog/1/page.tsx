'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost1Page() {
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
                  Innovación Social
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">15 de mayo de 2024 · 6 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                Cómo CoNest está transformando el concepto de vivienda compartida en España
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
                src="/images/blog/blog-housing.jpg"
                alt="Vivienda compartida intergeneracional"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                En un contexto de creciente soledad entre los mayores y difícil acceso a la vivienda para los jóvenes, 
                CoNest surge como una solución innovadora que está revolucionando el concepto de convivencia intergeneracional en España.
              </p>
              
              <h2>La crisis dual que enfrentamos</h2>
              <p>
                España se enfrenta actualmente a dos crisis paralelas que afectan a dos generaciones distintas: por un lado, 
                un creciente número de personas mayores viven solas, con la consecuente soledad no deseada y sus efectos negativos 
                en la salud física y mental. Por otro, los jóvenes estudiantes se enfrentan a un mercado inmobiliario con 
                precios cada vez más inaccesibles, especialmente en las grandes ciudades universitarias.
              </p>
              <p>
                Las estadísticas son reveladoras: más de 2 millones de personas mayores de 65 años viven solas en España, 
                y el 40% de ellas experimentan sentimientos de soledad no deseada. Al mismo tiempo, un estudiante 
                universitario destina, de media, hasta el 60% de su presupuesto mensual al alojamiento.
              </p>
              
              <h2>Una solución con beneficios mutuos</h2>
              <p>
                CoNest nació precisamente como respuesta a estas dos problemáticas, creando una solución que beneficia 
                a ambas generaciones. Nuestra plataforma facilita la conexión entre personas mayores con espacio 
                disponible en sus hogares y estudiantes en busca de alojamiento asequible.
              </p>
              <p>
                El concepto es simple pero transformador: los mayores obtienen compañía, un ingreso extra y ayuda en 
                tareas cotidianas, mientras que los estudiantes consiguen alojamiento a un precio considerablemente 
                inferior al del mercado, en un ambiente familiar y enriquecedor.
              </p>
              
              <h2>Tecnología al servicio de la conexión humana</h2>
              <p>
                Lo que distingue a CoNest es su enfoque centrado en la compatibilidad y la seguridad. Utilizamos 
                algoritmos avanzados para emparejar a los participantes según intereses, estilos de vida y expectativas, 
                maximizando así las posibilidades de una convivencia armoniosa y enriquecedora.
              </p>
              <p>
                Además, implementamos rigurosos procesos de verificación que incluyen revisión de antecedentes, 
                entrevistas personales y visitas a los hogares. La tecnología nos permite ofrecer un servicio eficiente 
                y personalizado, pero siempre con el factor humano como prioridad absoluta.
              </p>
              
              <h2>Impacto social y económico</h2>
              <p>
                El impacto de CoNest va mucho más allá de proporcionar vivienda. Estamos creando puentes entre 
                generaciones, fomentando el intercambio de experiencias y conocimientos, y contribuyendo a resolver 
                problemas sociales como la soledad y la falta de acceso a vivienda asequible.
              </p>
              <p>
                También hay un impacto económico significativo: optimizamos el uso de viviendas ya existentes, 
                generamos ingresos adicionales para los mayores que complementan sus pensiones, y reducimos 
                la carga económica de los estudiantes, permitiéndoles centrarse en sus estudios sin la presión 
                financiera de un alquiler elevado.
              </p>
              
              <h2>Casos de éxito que inspiran</h2>
              <p>
                En nuestros primeros meses de operación, ya hemos facilitado más de 100 conexiones exitosas. 
                Como la de María, una profesora jubilada de 72 años que ahora comparte su amplio piso en Madrid 
                con Carlos, un estudiante de medicina de 22 años. "Ha sido como recuperar la ilusión de tener familia 
                en casa", comenta María. "Carlos me ayuda con el móvil y yo le preparo sus platos favoritos. Es un 
                intercambio perfecto".
              </p>
              <p>
                O la experiencia de Antonio, un jubilado de 68 años que vive con Laura, estudiante de arquitectura: 
                "Mi pensión apenas me alcanzaba, y ahora no solo tengo un ingreso extra, sino compañía y la sensación 
                de ser útil ayudando a una joven a cumplir sus sueños".
              </p>
              
              <h2>El futuro de la convivencia intergeneracional</h2>
              <p>
                Nuestra visión para CoNest es ambiciosa: queremos expandirnos a todas las ciudades universitarias 
                de España y, posteriormente, a otros países europeos con desafíos similares. Estamos desarrollando 
                nuevas funcionalidades en nuestra plataforma, como sistemas de valoración mejorados, opciones de 
                convivencia temporal para estudiantes internacionales, y programas específicos en colaboración con 
                universidades y administraciones públicas.
              </p>
              <p>
                En un mundo cada vez más individualista y fragmentado, CoNest apuesta por recuperar los valores de 
                la convivencia, el apoyo mutuo y la solidaridad intergeneracional. No solo estamos transformando 
                el concepto de vivienda compartida en España; estamos contribuyendo a crear una sociedad más 
                cohesionada e inclusiva.
              </p>
              
              <h2>Únete a nuestra comunidad</h2>
              <p>
                Si eres una persona mayor con espacio disponible en tu hogar, o un estudiante en busca de alojamiento 
                asequible, te invitamos a formar parte de CoNest. Más que una plataforma de alojamiento, somos una 
                comunidad que está redefiniendo lo que significa compartir hogar y vida.
              </p>
              <p>
                Porque creemos firmemente que la solución a muchos de nuestros problemas sociales actuales está 
                en recuperar la conexión entre generaciones. Un hogar compartido puede ser el principio de un 
                cambio social mucho más amplio y profundo.
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
              <span></span>
              <Link 
                href="/blog/2" 
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
                      Guía práctica: Preparando tu hogar
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Consejos útiles para preparar tu hogar para compartirlo.
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