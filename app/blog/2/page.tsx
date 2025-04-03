'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost2Page() {
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
                  Bienestar
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">2 de junio de 2024 · 8 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                5 beneficios de la convivencia intergeneracional que quizás no conocías
              </h1>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src="/images/team/cto1.png"
                    alt="Manuel Castillejo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-conest-darkGray">Manuel Castillejo</p>
                  <p className="text-sm text-conest-darkGray/60">CTO</p>
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
                src="/images/blog/blog-benefits.jpg"
                alt="Beneficios de la convivencia intergeneracional"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                La decisión de compartir tu hogar con un estudiante puede parecer arriesgada al principio, pero los beneficios
                que aporta esta experiencia van mucho más allá de lo económico. Descubre cómo esta decisión puede transformar
                positivamente tu vida después de los 65.
              </p>
              
              <h2>1. Compañía significativa y reducción de la soledad</h2>
              <p>
                La soledad no deseada es uno de los mayores desafíos que enfrentan las personas mayores en España. Según
                estudios recientes, más del 40% de las personas mayores de 65 años que viven solas experimentan sentimientos
                de soledad y aislamiento social, lo que impacta negativamente en su bienestar psicológico y físico.
              </p>
              <p>
                Compartir tu hogar con un estudiante proporciona compañía diaria y significativa. Las interacciones cotidianas,
                desde compartir una comida hasta mantener una simple conversación sobre el día a día, reducen significativamente
                los sentimientos de soledad. Como nos comenta Teresa, de 70 años: "Desde que Marta vive conmigo, me levanto
                con otra ilusión. Saber que habrá alguien con quien hablar al final del día ha cambiado completamente mi estado
                de ánimo".
              </p>
              
              <h2>2. Mejora de la salud física y mental</h2>
              <p>
                Numerosos estudios científicos han demostrado que la interacción social regular tiene efectos positivos
                directos sobre la salud. Compartir vivienda puede contribuir a:
              </p>
              <ul>
                <li>Reducir el riesgo de deterioro cognitivo y demencia</li>
                <li>Disminuir los niveles de estrés y ansiedad</li>
                <li>Mejorar la calidad del sueño</li>
                <li>Aumentar la motivación para mantener hábitos saludables</li>
                <li>Reducir el riesgo de depresión</li>
              </ul>
              <p>
                "He notado que desde que comparto mi casa con Carlos, me mantengo más activa. Salgo más, cocino mejor
                y hasta me animo a hacer ejercicio con más frecuencia", nos cuenta Pilar, de 68 años, que lleva ya un
                año compartiendo su hogar con un estudiante de ingeniería.
              </p>
              
              <h2>3. Ingresos adicionales y seguridad económica</h2>
              <p>
                El aspecto económico es, sin duda, una ventaja significativa. Con el aumento del coste de la vida y
                las pensiones que a menudo resultan insuficientes, el ingreso adicional que proporciona alquilar una
                habitación puede marcar una diferencia sustancial en la calidad de vida.
              </p>
              <p>
                En CoNest, los mayores reciben un ingreso mensual acorde al mercado pero con valores justos para
                ambas partes. Este dinero extra permite a muchos de nuestros anfitriones mayores:
              </p>
              <ul>
                <li>Hacer frente con mayor holgura a los gastos básicos del hogar</li>
                <li>Mantener mejor su vivienda</li>
                <li>Permitirse pequeños lujos o aficiones</li>
                <li>Reducir la preocupación por imprevistos económicos</li>
              </ul>
              <p>
                "La pensión apenas me llegaba para cubrir gastos. Ahora, con lo que me aporta Lucía por la habitación,
                puedo permitirme arreglar cosas de la casa que antes posponía por falta de presupuesto, e incluso
                ahorrar un poco", explica Antonio, jubilado de 73 años.
              </p>
              
              <h2>4. Ayuda práctica en el día a día</h2>
              <p>
                Los estudiantes que conviven con personas mayores no solo pagan por el alojamiento, sino que a menudo
                establecen acuerdos de colaboración en tareas cotidianas que pueden resultar cada vez más desafiantes
                con la edad.
              </p>
              <p>
                En CoNest facilitamos acuerdos claros y justos para ambas partes, donde los estudiantes pueden
                proporcionar apoyo en:
              </p>
              <ul>
                <li>Tareas que requieren esfuerzo físico (como cambiar bombillas, mover muebles)</li>
                <li>Compras pesadas y recados</li>
                <li>Uso de tecnología y dispositivos electrónicos</li>
                <li>Pequeñas reparaciones domésticas</li>
                <li>Acompañamiento ocasional a citas médicas o gestiones</li>
              </ul>
              <p>
                "Mi estudiante, Pablo, me enseñó a usar bien el smartphone y ahora puedo hacer videollamadas con
                mis nietos que viven en el extranjero. Algo que antes me parecía imposible, ahora es parte de mi
                rutina semanal", comenta emocionada Carmen, de 75 años.
              </p>
              
              <h2>5. Intercambio cultural e intergeneracional</h2>
              <p>
                Quizás uno de los beneficios más enriquecedores y menos evidentes es el intercambio cultural e
                intergeneracional que se produce. Las personas mayores tienen una rica experiencia de vida y sabiduría
                que compartir, mientras que los jóvenes aportan nuevas perspectivas, energía y conocimientos actualizados.
              </p>
              <p>
                Este intercambio mutuo fomenta:
              </p>
              <ul>
                <li>Mayor comprensión entre generaciones</li>
                <li>Ruptura de estereotipos y prejuicios</li>
                <li>Aprendizaje continuo y estimulación intelectual</li>
                <li>Sentimiento de utilidad y propósito</li>
                <li>Exposición a nuevas ideas, tecnologías y tendencias</li>
              </ul>
              <p>
                "Jamás pensé que a mis 69 años estaría aprendiendo sobre música actual, aplicaciones de móvil y
                hasta me he animado a usar redes sociales gracias a Ana, mi estudiante. Ella dice que yo le enseño
                historia viva, y ella me enseña a mantenerme joven de espíritu", reflexiona José, profesor jubilado
                que participa en nuestro programa desde hace dos años.
              </p>
              
              <h2>Conclusión: Una experiencia transformadora</h2>
              <p>
                Compartir tu hogar con un estudiante después de los 65 años no es simplemente una transacción de
                alojamiento, sino una oportunidad para transformar tu vida en múltiples aspectos. La compañía, el
                apoyo mutuo, los beneficios económicos y el enriquecimiento personal hacen de esta experiencia una
                opción cada vez más atractiva para muchas personas mayores en España.
              </p>
              <p>
                En CoNest trabajamos para facilitar estas conexiones de manera segura, cuidada y personalizada,
                asegurándonos de que tanto las personas mayores como los estudiantes obtengan una experiencia
                positiva y enriquecedora.
              </p>
              <p>
                Si tienes más de 65 años, una habitación disponible y ganas de transformar tu vida cotidiana,
                la convivencia intergeneracional puede ser una opción a considerar seriamente.
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
                href="/blog/1" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Artículo anterior</span>
              </Link>
              <Link 
                href="/blog/3" 
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
              <Link href="/blog/1" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 group-hover:shadow-medium group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/blog/blog-housing.jpg"
                      alt="Concepto de vivienda compartida"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-conest-darkGray mb-2 group-hover:text-conest-blue transition-colors">
                      Cómo CoNest está transformando el concepto de vivienda compartida
                    </h3>
                    <p className="text-sm text-conest-darkGray/70">
                      Una nueva forma de entender la convivencia intergeneracional.
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