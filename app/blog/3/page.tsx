'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function BlogPost3Page() {
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
                  Historias
                </span>
                <span className="text-conest-darkGray/60 text-sm ml-3">29 de junio de 2024 · 5 min de lectura</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
                Historias de éxito: María y Carlos, un año de convivencia que cambió sus vidas
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
                src="/images/blog/blog-success.jpg"
                alt="María y Carlos compartiendo tiempo juntos"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-conest-darkGray/90">
              <p className="text-xl font-medium lead mb-6">
                Cuando María, una profesora jubilada de 72 años, y Carlos, un estudiante de medicina de 22, decidieron
                compartir vivienda a través de CoNest, ninguno imaginaba cómo esta decisión transformaría sus vidas.
                Un año después, su historia es uno de nuestros casos de éxito más inspiradores.
              </p>
              
              <h2>El principio: incertidumbres y expectativas</h2>
              <p>
                María llevaba tres años viviendo sola en su amplio piso de tres habitaciones en el barrio de Salamanca,
                en Madrid, desde que su marido falleció. "Mi hija vive en Barcelona con su familia y, aunque hablamos
                por teléfono casi a diario, la casa se sentía cada vez más vacía y silenciosa", nos cuenta María mientras
                prepara café en su luminosa cocina.
              </p>
              <p>
                Por su parte, Carlos, natural de Badajoz, estaba a punto de comenzar su tercer año de medicina en la
                Universidad Complutense. "Los precios de los alquileres en Madrid son desorbitados. Mis padres hacían
                un gran esfuerzo para pagarme una habitación en un piso compartido con otros cuatro estudiantes, pero
                era complicado estudiar allí con tanto ruido", explica Carlos.
              </p>
              <p>
                Fue la hija de María quien le habló sobre CoNest. "Al principio estaba reticente, la idea de compartir
                mi casa con un desconocido me daba cierto reparo. Pero mi hija insistió en que sería bueno para mí
                tener compañía y un ingreso extra", recuerda María.
              </p>
              
              <div className="bg-conest-blue/5 p-6 rounded-xl border-l-4 border-conest-blue my-8">
                <p className="italic text-xl font-medium mb-2">"Cuando vi por primera vez a María, con su sonrisa amable y su casa impecable, sentí que había encontrado un hogar de verdad en Madrid."</p>
                <p className="text-right text-conest-blue">— Carlos, estudiante de medicina</p>
              </div>
              
              <h2>El proceso de emparejamiento: más allá de compartir espacio</h2>
              <p>
                En CoNest no dejamos nada al azar. Nuestro proceso de emparejamiento analiza no solo las necesidades
                prácticas (ubicación, espacio, accesibilidad), sino también la compatibilidad en términos de personalidad,
                hábitos cotidianos, intereses y expectativas de la convivencia.
              </p>
              <p>
                "Me llamó la atención que me preguntaran sobre mis aficiones, mis rutinas, incluso si prefería madrugar
                o trasnochar", comenta María. "Eso me dio confianza, porque entendí que no se trataba solo de alquilar
                una habitación, sino de encontrar a alguien con quien pudiera convivir cómodamente".
              </p>
              <p>
                Carlos y María resultaron ser altamente compatibles según nuestro algoritmo: ambos son ordenados,
                disfrutan de la tranquilidad en casa, tienen interés por la salud y el bienestar, y valoran el respeto
                por los espacios personales.
              </p>
              
              <h2>La adaptación: construyendo una relación intergeneracional</h2>
              <p>
                Los primeros días de convivencia estuvieron marcados por la cortesía y cierta timidez por ambas partes.
                "Al principio nos cruzábamos en los pasillos con sonrisas educadas. Yo intentaba no molestar y casi
                me escondía en mi habitación para estudiar", recuerda Carlos.
              </p>
              <p>
                El punto de inflexión llegó una noche en que Carlos regresó tarde de la biblioteca y encontró a María
                luchando con su nuevo móvil. "No entendía cómo configurar las videollamadas para hablar con mi nieta.
                Carlos se sentó conmigo y, con una paciencia infinita, no solo me enseñó a usar la aplicación, sino
                que me explicó otros trucos útiles", cuenta María con una sonrisa.
              </p>
              <p>
                Ese pequeño gesto inició una dinámica de intercambio que ha definido su relación. Carlos ayuda a María
                con la tecnología y pequeñas tareas que requieren esfuerzo físico, mientras que ella le ofrece comidas
                caseras, consejos basados en su experiencia de vida y, sobre todo, un entorno tranquilo y acogedor
                para sus estudios.
              </p>
              
              <div className="bg-conest-blue/5 p-6 rounded-xl border-l-4 border-conest-blue my-8">
                <p className="italic text-xl font-medium mb-2">"Carlos me ha devuelto la ilusión de tener familia en casa. Es como el nieto que vive lejos. Cuando le explico algo de mi época o le enseño a cocinar mis recetas, siento que mi experiencia sigue siendo valiosa."</p>
                <p className="text-right text-conest-blue">— María, profesora jubilada</p>
              </div>
              
              <h2>Beneficios mutuos: más allá de lo económico</h2>
              <p>
                Para María, la presencia de Carlos ha supuesto un cambio significativo en su calidad de vida. "Ya no
                temo a esos largos silencios que antes llenaban la casa. Saber que Carlos llegará por la tarde, poder
                preguntarle cómo le ha ido el día... esas pequeñas cosas han reducido enormemente mi sensación de soledad".
              </p>
              <p>
                Además, el ingreso adicional que recibe le permite disfrutar de pequeños lujos que antes se negaba:
                "Ahora puedo permitirme ir a la peluquería cada mes, comprar libros sin remordimiento y hasta estoy
                ahorrando para un viaje a Italia que siempre soñé hacer".
              </p>
              <p>
                Carlos, por su parte, ha encontrado mucho más que un lugar tranquilo para estudiar. "Las condiciones
                son incomparables: una habitación amplia, un piso silencioso, una zona bien comunicada... pero lo mejor
                es la tranquilidad emocional. Saber que vuelvo a un hogar de verdad, no simplemente a un piso compartido
                con desconocidos que van y vienen".
              </p>
              <p>
                El aspecto económico también ha sido crucial para Carlos. "Pago aproximadamente un 40% menos de lo que
                pagaba antes, y en condiciones infinitamente mejores. Eso ha permitido a mis padres respirar un poco
                económicamente y a mí centrarme más en mis estudios sin la presión constante".
              </p>
              
              <h2>Superando desafíos: la comunicación como clave</h2>
              <p>
                No todo ha sido un camino de rosas. Como en cualquier convivencia, han surgido pequeños desafíos. "Al
                principio me resultaba difícil invitar a compañeros a estudiar, porque no quería incomodar a María",
                explica Carlos.
              </p>
              <p>
                La solución llegó a través de una conversación franca. "Establecimos algunas reglas básicas: Carlos
                puede invitar a amigos para estudiar en el salón con previo aviso, y yo me aseguro de respetar su
                privacidad. La comunicación honesta ha sido fundamental", asegura María.
              </p>
              <p>
                Desde CoNest, facilitamos estas conversaciones a través de nuestra guía de convivencia y el seguimiento
                regular que realizamos. "Nos contactan periódicamente para ver cómo va todo, y eso ayuda a abordar
                cualquier problema antes de que se convierta en algo mayor", afirma Carlos.
              </p>
              
              <h2>Un año después: un balance transformador</h2>
              <p>
                Tras un año de convivencia, tanto María como Carlos han renovado su acuerdo a través de CoNest.
                "No me imagino ahora viviendo de otra manera", confiesa María. "La casa vuelve a estar llena de vida,
                tengo seguridad económica y he ganado no solo un compañero de piso, sino alguien que se ha convertido
                en parte de mi familia".
              </p>
              <p>
                Carlos, que obtuvo excelentes calificaciones este curso, atribuye parte de su éxito académico a su
                situación habitacional. "Tener un entorno estable, tranquilo y positivo ha sido fundamental. Además,
                María es una gran motivadora. Cuando tengo exámenes, me prepara mi comida favorita y me da ánimos.
                Es como tener una abuela en Madrid".
              </p>
              <p>
                En palabras de ambos, la experiencia ha sido transformadora no solo en términos prácticos, sino también
                a nivel personal. "He aprendido a valorar la sabiduría que viene con la edad. María me ha enseñado a
                ver la vida con otra perspectiva", reflexiona Carlos.
              </p>
              <p>
                Por su parte, María concluye: "Carlos me ha demostrado que nunca es tarde para adaptarse a nuevas
                situaciones. A mi edad, he aprendido a usar aplicaciones, a escuchar música actual, y sobre todo,
                he comprobado que las diferentes generaciones tenemos mucho que ofrecernos mutuamente".
              </p>
              
              <h2>¿Te inspira esta historia?</h2>
              <p>
                La historia de María y Carlos es solo una de las muchas experiencias de éxito que hemos facilitado en
                CoNest. Si eres una persona mayor con espacio disponible en tu hogar, o un estudiante en busca de un
                alojamiento más que un simple techo, te invitamos a formar parte de nuestra comunidad.
              </p>
              <p>
                Porque compartir hogar es mucho más que compartir espacio: es crear conexiones humanas significativas
                que enriquecen la vida de todas las partes implicadas.
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
                href="/blog/2" 
                className="flex items-center text-conest-blue hover:text-conest-mediumBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>Artículo anterior</span>
              </Link>
              <Link 
                href="/blog/4" 
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
                      alt="Vivienda compartida intergeneracional"
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