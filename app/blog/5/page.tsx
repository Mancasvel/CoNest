'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost5Page() {
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
                  Economía
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">22 de julio de 2024 · 6 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                El impacto económico de la vivienda compartida intergeneracional
              </h1>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src="/images/conest_logo.png"
                    alt="Equipo CoNest"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-conest-darkGray">Equipo CoNest</p>
                  <p className="text-sm text-conest-darkGray/60"></p>
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
                src="/images/blog/blog-economic.jpg"
                alt="Análisis económico de la vivienda compartida"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                Más allá del beneficio social y personal, la vivienda compartida intergeneracional tiene un 
                impacto económico significativo tanto a nivel individual como colectivo. Un análisis detallado 
                de las cifras revela una solución económicamente sostenible y beneficiosa.
              </p>
              
              <h2>El contexto económico actual</h2>
              <p>
                España enfrenta simultáneamente varios desafíos económicos relacionados con la vivienda y el 
                envejecimiento de la población:
              </p>
              <ul>
                <li>El precio del alquiler ha aumentado un 50% en las principales ciudades universitarias en la última década</li>
                <li>Más de 2 millones de personas mayores de 65 años viven solas, muchas con pensiones por debajo de los 1.000€ mensuales</li>
                <li>El coste medio de una residencia privada para mayores oscila entre 1.800€ y 2.500€ mensuales</li>
                <li>Un estudiante universitario gasta de media entre 600€ y 900€ al mes solo en alojamiento en ciudades como Madrid o Barcelona</li>
              </ul>
              <p>
                Este escenario crea una presión económica tanto en los jóvenes como en los mayores, limitando 
                sus posibilidades y calidad de vida. Sin embargo, también presenta una oportunidad para soluciones 
                innovadoras como la que propone CoNest.
              </p>
              
              <h2>Beneficio económico para las personas mayores</h2>
              <p>
                Para entender el impacto real en la economía de los mayores, hemos analizado los datos de 
                nuestros primeros 150 emparejamientos:
              </p>
              
              <h3>Ingresos adicionales</h3>
              <p>
                Los propietarios mayores que participan en nuestro programa reciben un ingreso medio mensual 
                de 350€, lo que supone un incremento significativo para muchos jubilados:
              </p>
              <ul>
                <li>Para una persona con pensión mínima (unos 720€), estos 350€ adicionales representan un aumento del 48% en sus ingresos mensuales</li>
                <li>Para una persona con pensión media (unos 1.100€), supone un incremento del 32%</li>
                <li>Este ingreso extra anual de 4.200€ permite a muchos mayores mejorar significativamente su calidad de vida</li>
              </ul>
              <p>
                Como señala Antonio, uno de nuestros anfitriones mayores: "Con mi pensión apenas llegaba a 
                fin de mes. Ahora puedo permitirme pequeños caprichos, mantener mi casa en mejores condiciones 
                y hasta ahorrar un poco para imprevistos médicos".
              </p>
              
              <h3>Reducción de costes</h3>
              <p>
                Además del ingreso directo, los mayores experimentan una reducción de costes a través de:
              </p>
              <ul>
                <li>Compartir gastos fijos como suministros (ahorro medio de 50-80€ mensuales)</li>
                <li>Ayuda en tareas domésticas que de otro modo requeriría contratar servicios externos</li>
                <li>En algunos casos, la posibilidad de evitar o retrasar el traslado a residencias mucho más costosas</li>
              </ul>
              <p>
                "Mi hijo insistía en que me fuera a una residencia porque le preocupaba que viviera sola. 
                Eso hubiera supuesto gastar toda mi pensión y vender mi piso. Gracias a CoNest, puedo seguir 
                en mi hogar con compañía y seguridad", explica María, de 78 años.
              </p>
              
              <h2>Ahorro para los estudiantes</h2>
              <p>
                Del lado de los estudiantes, el impacto económico es igualmente significativo:
              </p>
              
              <h3>Reducción en el coste del alojamiento</h3>
              <p>
                Nuestros datos muestran que los estudiantes en CoNest pagan, de media, un 40% menos que el 
                precio de mercado por alojamiento comparable:
              </p>
              <ul>
                <li>En Madrid, frente a un coste medio de 550€ por habitación en piso compartido, nuestros estudiantes pagan una media de 330€</li>
                <li>En Barcelona, la diferencia es aún mayor: 600€ en el mercado tradicional frente a 350€ en CoNest</li>
                <li>Este ahorro mensual de 220-250€ supone más de 2.500€ anuales</li>
              </ul>
              <p>
                "Con lo que ahorro viviendo con Pilar, puedo permitirme comprar los libros que necesito 
                para la carrera y hasta he empezado un pequeño fondo de ahorro para cuando termine los estudios", 
                comenta Carlos, estudiante de Medicina.
              </p>
              
              <h3>Ventajas económicas indirectas</h3>
              <p>
                Más allá del ahorro directo en el alquiler, los estudiantes se benefician de:
              </p>
              <ul>
                <li>Comidas compartidas, reduciendo el gasto en alimentación (ahorro estimado: 80-120€ mensuales)</li>
                <li>Ubicaciones generalmente más cercanas a los centros de estudio, con el consiguiente ahorro en transporte</li>
                <li>Acceso a electrodomésticos y equipamiento del hogar completamente equipado</li>
                <li>Mayor estabilidad en el alojamiento, evitando los costosos cambios frecuentes de vivienda</li>
              </ul>
              <p>
                Un estudio realizado entre nuestros usuarios revela que el ahorro total (directo e indirecto) 
                para un estudiante puede alcanzar los 3.600€ anuales, una cifra nada despreciable en el 
                presupuesto de un universitario.
              </p>
              
              <h2>Impacto en la economía local y nacional</h2>
              <p>
                El beneficio económico va más allá de lo individual. A escala más amplia, este modelo genera:
              </p>
              
              <h3>Optimización de recursos habitacionales existentes</h3>
              <p>
                En lugar de construir nuevas residencias o pisos de estudiantes, aprovechamos viviendas ya existentes:
              </p>
              <ul>
                <li>Reducción de la presión sobre la construcción de nuevas viviendas estudiantiles</li>
                <li>Mejor aprovechamiento del parque inmobiliario, con viviendas que pasan de estar infrautilizadas a tener un uso óptimo</li>
                <li>Menor impacto ambiental al utilizar recursos ya existentes</li>
              </ul>
              <p>
                Según nuestras estimaciones, cada habitación aprovechada en una vivienda ya existente supone 
                un ahorro social de aproximadamente 45.000€ en comparación con la construcción de una nueva plaza en una residencia estudiantil.
              </p>
              
              <h3>Reducción de costes sociales</h3>
              <p>
                La convivencia intergeneracional también reduce diversos costes sociales:
              </p>
              <ul>
                <li>Menor necesidad de servicios de atención domiciliaria para mayores (ahorro estimado de 5.000-8.000€ anuales por persona)</li>
                <li>Reducción en la demanda de plazas en residencias públicas, que tienen un coste para el Estado de entre 20.000€ y 30.000€ anuales por residente</li>
                <li>Disminución de la presión asistencial en servicios sanitarios gracias a la mejora en el bienestar de los mayores</li>
              </ul>
              <p>
                Un estudio reciente estimó que cada persona mayor que permanece en su hogar con adecuada 
                compañía y apoyo supone un ahorro para el sistema público de entre 7.000€ y 12.000€ anuales 
                en servicios sanitarios y sociales.
              </p>
              
              <h3>Dinamización económica local</h3>
              <p>
                El modelo también genera beneficios económicos indirectos en las comunidades:
              </p>
              <ul>
                <li>Mayor poder adquisitivo tanto para mayores como para estudiantes, que se traduce en consumo local</li>
                <li>Revitalización de barrios tradicionalmente envejecidos con la presencia de jóvenes</li>
                <li>Creación de empleos en el sector de los servicios de acompañamiento, verificación y gestión</li>
              </ul>
              <p>
                En CoNest hemos creado 25 puestos de trabajo directos y estimamos que cada 100 emparejamientos 
                generan aproximadamente 5-8 empleos indirectos en servicios auxiliares.
              </p>
              
              <h2>Análisis coste-beneficio: una solución económicamente sostenible</h2>
              <p>
                Al realizar un análisis coste-beneficio completo, considerando tanto los aspectos económicos 
                directos como los indirectos, llegamos a conclusiones reveladoras:
              </p>
              <ol>
                <li>
                  <strong>Rentabilidad para los mayores:</strong> Considerando el ingreso adicional, la ayuda 
                  en tareas domésticas y la compañía (que de otra forma tendría un coste), el beneficio neto 
                  para una persona mayor oscila entre 6.000€ y 9.000€ anuales.
                </li>
                <li>
                  <strong>Beneficio para los estudiantes:</strong> El ahorro directo en alojamiento sumado a 
                  las ventajas indirectas (comidas, transporte, etc.) supone entre 3.500€ y 5.000€ anuales.
                </li>
                <li>
                  <strong>Ahorro para las familias:</strong> Tanto las familias de los estudiantes como las de 
                  los mayores experimentan una reducción en la carga económica y de cuidados.
                </li>
                <li>
                  <strong>Beneficio social:</strong> Cada emparejamiento exitoso genera un ahorro estimado para 
                  el sistema público de entre 10.000€ y 15.000€ anuales en servicios sociales, sanitarios y de 
                  construcción de nuevas infraestructuras.
                </li>
              </ol>
              
              <h2>El futuro: escalabilidad y potencial económico</h2>
              <p>
                El potencial de crecimiento del modelo es significativo:
              </p>
              <ul>
                <li>España cuenta con más de 2 millones de personas mayores que viven solas, muchas en viviendas con habitaciones disponibles</li>
                <li>Hay aproximadamente 1,5 millones de estudiantes universitarios, de los cuales unos 600.000 necesitan alojamiento fuera de su domicilio familiar</li>
                <li>Si solo el 5% de estos potenciales usuarios participara en programas como CoNest, generaríamos un impacto económico directo de más de 500 millones de euros anuales</li>
              </ul>
              <p>
                Nuestro objetivo para los próximos cinco años es alcanzar los 5.000 emparejamientos activos, 
                lo que supondría un ahorro total de más de 25 millones de euros anuales para nuestros usuarios 
                y un ahorro social estimado de 50-75 millones.
              </p>
              
              <h2>Conclusión: una solución económicamente inteligente</h2>
              <p>
                El modelo de vivienda compartida intergeneracional de CoNest demuestra ser no solo una 
                solución a problemas sociales como la soledad de los mayores y la falta de alojamiento 
                asequible para estudiantes, sino también una alternativa económicamente eficiente y sostenible.
              </p>
              <p>
                Los beneficios económicos son palpables a nivel individual, familiar y social, creando un 
                ecosistema donde todos los participantes ganan. Optimizamos recursos ya existentes, generamos 
                nuevos ingresos, reducimos gastos y aliviamos la presión sobre los sistemas públicos.
              </p>
              <p>
                En un contexto de crecientes desafíos económicos relacionados con la vivienda y el envejecimiento 
                de la población, CoNest ofrece una propuesta que demuestra que las soluciones más innovadoras 
                pueden ser también las más sensatas desde el punto de vista económico.
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
                href="/blog/4" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Artículo anterior</span>
              </Link>
              <Link 
                href="/blog/6" 
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