'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import { ScrollDownArrow } from '@/components/ScrollDown';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Componente de animación para secciones optimizado
const AnimatedSection = React.memo(({ 
  children, 
  delay = 0, 
  threshold = 0.1,
  y = 50, // Cantidad de desplazamiento vertical para la animación
  once = true // Si la animación debe ocurrir solo una vez o repetirse al salir/entrar del viewport
}: { 
  children: React.ReactNode; 
  delay?: number; 
  threshold?: number;
  y?: number;
  once?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
    rootMargin: '50px', // Pre-cargar elementos ligeramente antes de que aparezcan
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1], // Curva de animación suave
      }}
      style={{
        willChange: 'opacity, transform', // Indicar al navegador que se preparé para animar estas propiedades
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
});

// Definición de tipos para TeamMember
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

// Datos del equipo
const teamMembers: TeamMemberProps[] = [
  {
    name: "José María de Cossío",
    role: "CEO y Fundador",
    description: "Visionario y creador de CoNest. Especialista en innovación social con años de experiencia en el sector.",
    image: "/images/team/ceo.png"
  },
  {
    name: "Natalia Olmo",
    role: "COO",
    description: "Responsable de gestión y operaciones. Experta en desarrollo de negocios con enfoque en impacto social positivo.",
    image: "/images/team/coo.png"
  },
  {
    name: "Manuel Castillejo",
    role: "Co-CTO",
    description: "Responsable de la estrategia tecnológica y desarrollo de plataformas digitales. Experto en tecnologías emergentes e inteligencia artificial.",
    image: "/images/team/cto1.png"
  },
  {
    name: "Luis Mellado",
    role: "Co-CTO",
    description: "Lidera junto a Manuel el área tecnológica. Especialista en desarrollo de sistemas innovadores y arquitectura de software.",
    image: "/images/team/cto2.png"
  },
];

// Componente TeamMember para la sección del equipo
const TeamMember = ({ name, role, image, description }: TeamMemberProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-56 w-full">
      <Image 
        src={image} 
        alt={name} 
        className="object-cover" 
        fill
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmUyZTIiLz48L3N2Zz4="
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <p className="text-green-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Componente para los separadores entre secciones optimizado
const SectionDivider = ({ title, description }: { title: string; description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '100px',
  });

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6" ref={ref}>
        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="bg-[#B9FF66] rounded-md px-4 py-3 inline-block">
            <span className="text-3xl md:text-5xl font-bold">{title}</span>
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            ease: "easeOut", 
          }}
          style={{ willChange: 'opacity, transform' }}
          className="text-sm md:text-lg text-black max-w-[580px] font-chillax"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto flex flex-col items-stretch space-y-70">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row w-full lg:space-x-[206px]">
            {/* Left Content */}
            <AnimatedSection delay={0.2}>
              <div className="w-full lg:w-1/2 flex flex-col space-y-35">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                  Encuentra el alojamiento que cambie tu vida
                </h1>
                <hr className="my-6 border-gray-300" />
                
                <p className="text-base md:text-lg font-chillax text-black max-w-[498px]">
                  En CoNest creemos en el cambio.
                </p>
                <p className="text-base md:text-lg font-chillax text-black max-w-[498px]">
                  Construyamos un futuro sostenible gracias a la colaboración entre generaciones
                </p>
                <div className="my-6" />
                
                <div className="flex flex-col sm:flex-row gap-6 w-full">
                  <Link href="/student" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#191A23] text-white rounded-xl py-[20px] px-[35px] font-medium shadow transition-all hover:shadow-md">
                      Busco alojamiento
                    </button>
                  </Link>
                  
                  <Link href="/elder" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto border border-[#191A23] text-black rounded-xl py-[20px] px-[35px] font-medium hover:bg-gray-50 transition-all">
                      Ofrezco alojamiento
                    </button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Right Content - Illustration */}
            <AnimatedSection delay={0.4}>
              <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
                <div className="relative w-full h-full">
                  {/* Main illustrations */}
                  <div className="relative">
                    {/* House illustration */}
                    <div className="mx-auto relative">  
                    <Image 
                                src="/images/hero_image.png"
                                alt="Perfil de persona mayor" 
                                className="w-full h-full object-cover" 
                                width={580}
                                height={475}
                              />
                    
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
        <ScrollDownArrow />
        <div className="my-80" />
      </section>

      {/* Separador después del Hero */}
      
      <SectionDivider 
        title="Tu nuevo hogar" 
        description="CoNest facilita la conexión entre estudiantes que buscan alojamiento asequible y personas mayores que ofrecen espacios en sus hogares"
      />

      {/* Services Block */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto flex flex-col space-y-10 md:space-y-40">
          {/* First Row */}
          <AnimatedSection threshold={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Card 1 - Light background */}
              <div className="relative bg-[#F3F3F3] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-[#B9FF66] rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Estudiantes</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-[#B9FF66] rounded-md px-3 py-2 w-fit">
                      Encuentra alojamiento asequible
                    </h3>
                    <p className="bg-[#B9FF66] rounded-md px-3 py-2 w-fit max-w-[200px]">
                      Soluciones habitacionales para estudiantes
                    </p>
                    <Link href="/student/housing" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-[#191A23] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="#B9FF66" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-black group-hover:underline">Ver opciones</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_cabin_7fei.svg"
                      alt="Alojamiento asequible" 
                      width={210} 
                      height={166} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 - Green background */}
              <div className="relative bg-[#B9FF66] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-white rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Convivencia</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-white rounded-md px-3 py-2 w-fit">
                      Compañía para personas mayores
                    </h3>
                    <p className="bg-white rounded-md px-3 py-2 w-fit max-w-[200px]">
                      Combate la soledad
                    </p>
                    <Link href="/about" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-[#191A23] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="#B9FF66" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-black group-hover:underline">Conoce más</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_neighbors_z879.svg"
                      alt="Compañía para personas mayores" 
                      width={210} 
                      height={148} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Second Row */}
          <AnimatedSection threshold={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Card 3 - Dark background */}
              <div className="relative bg-[#191A23] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-[#B9FF66] rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Proceso</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-white rounded-md px-3 py-2 w-fit">
                      Registro sencillo
                    </h3>
                    <p className="bg-white rounded-md px-3 py-2 w-fit max-w-[200px]">
                      Fácil y rápido
                    </p>
                    <Link href="/como-funciona" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-white flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="black" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-white group-hover:underline">Cómo funciona</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_how_it_works_re_q2c3.svg" 
                      alt="Cómo funciona" 
                      width={210} 
                      height={210} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4 - Light background */}
              <div className="relative bg-[#F3F3F3] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-[#B9FF66] rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Seguridad</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-[#B9FF66] rounded-md px-3 py-2 w-fit">
                      Verificación completa
                    </h3>
                    <p className="bg-[#B9FF66] rounded-md px-3 py-2 w-fit max-w-[200px]">
                      De cada usuario
                    </p>
                    <Link href="/sobre-nosotros" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-[#191A23] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="#B9FF66" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-black group-hover:underline">Saber más</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_community_re_cyrm.svg" 
                      alt="Comunidad de confianza" 
                      width={210} 
                      height={170} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Third Row */}
          <AnimatedSection threshold={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Card 5 - Green background */}
              <div className="relative bg-[#B9FF66] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-white rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Soporte</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-white rounded-md px-3 py-2 w-fit">
                      Asistencia continua
                    </h3>
                    <p className="bg-white rounded-md px-3 py-2 w-fit max-w-[200px]">
                      24/7 para ti
                    </p>
                    <Link href="/contacto" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-[#191A23] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="#B9FF66" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-black group-hover:underline">Contáctanos</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_support_re_g44p.svg" 
                      alt="Asistencia y soporte" 
                      width={210} 
                      height={196} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Card 6 - Dark background */}
              <div className="relative bg-[#191A23] border border-[#191A23] rounded-[45px] p-12 shadow-[0_5px_0_0_rgba(25,26,35,1)]">
                <div className="flex flex-col lg:flex-row justify-between items-start h-full">
                  <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
                    <div className="bg-[#B9FF66] rounded-md px-3 py-2 inline-block w-fit">
                      <span className="font-medium text-black">Estadísticas</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-zodiak-bold bg-white rounded-md px-3 py-2 w-fit">
                      Resultados visibles
                    </h3>
                    <p className="bg-white rounded-md px-3 py-2 w-fit max-w-[200px]">
                      Impacto real
                    </p>
                    <Link href="/blog" className="flex items-center mt-8 group">
                      <div className="w-[41px] h-[41px] rounded-full bg-white flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 17.5L17.5 10L10 2.5" stroke="black" strokeWidth="3"/>
                        </svg>
                      </div>
                      <span className="ml-4 font-medium text-white group-hover:underline">Ver resultados</span>
                    </Link>
                  </div>
                  <div className="lg:ml-12">
                    <Image 
                      src="/vectors/undraw_analytics_re_w50k.svg" 
                      alt="Resultados y estadísticas" 
                      width={210} 
                      height={170} 
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Separador después de Services */}
      <SectionDivider 
        title="Intercambio" 
        description="Fomentamos un intercambio único donde los estudiantes obtienen alojamiento económico mientras proporcionan compañía a personas mayores"
      />

      {/* CTA Block */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto relative">
          {/* CTA Card */}
          <AnimatedSection threshold={0.3}>
            <div className="relative bg-[#F3F3F3] rounded-[45px] overflow-hidden">
              <div className="flex flex-col lg:flex-row justify-between">
                {/* Text & Button */}
                <div className="p-8 md:p-16 flex flex-col space-y-6 max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-zodiak-bold text-black">
                    Hagamos que suceda
                  </h3>
                  <p className="text-base md:text-lg font-zodiak text-black">
                    Contáctanos hoy para saber más sobre cómo nuestros servicios de cohabitación pueden ayudarte a encontrar el alojamiento ideal o la compañía que estás buscando.
                  </p>
                  <div className="pt-6">
                    <Link href="/contacto">
                      <button className="bg-[#191A23] text-white px-8 py-5 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                        Hablemos de tu situación
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Illustration */}
                <div className="relative h-[300px] lg:h-auto w-full lg:w-[40%]">
                  {/* Ellipses */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* Círculos horizontales */}
                    <div className="w-[338px] h-[71px] border border-black rounded-full transform -rotate-[15deg] absolute top-[20px]"></div>
                    <div className="w-[338px] h-[71px] border border-black rounded-full transform -rotate-[15deg] absolute top-[45px]"></div>
                    <div className="w-[338px] h-[71px] border border-black rounded-full transform -rotate-[15deg] absolute top-[70px]"></div>
                    
                    {/* Estrella */}
                    <div className="absolute top-[-100px] right-[150px]">
                      <svg width="209" height="209" viewBox="0 0 209 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M104.5 0L115.291 82.0491L182.346 26.6542L127.951 93.7088L209 104.5L127.951 115.291L182.346 182.346L115.291 127.951L104.5 209L93.7088 127.951L26.6542 182.346L82.0491 115.291L0 104.5L82.0491 93.7088L26.6542 26.6542L93.7088 82.0491L104.5 0Z" stroke="black" />
                      </svg>
                    </div>
                    
                    {/* Estrella rellena */}
                    <div className="absolute top-[70px] right-[100px]">
                      <svg width="164" height="164" viewBox="0 0 164 164" fill="#D9D9D9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82 0L90.4376 64.3624L144.25 20.7496L101.637 74.5624L164 82L101.637 89.4376L144.25 144.25L90.4376 101.637L82 164L73.5624 101.637L19.7496 144.25L62.3624 89.4376L0 82L62.3624 73.5624L19.7496 19.7496L73.5624 62.3624L82 0Z" />
                      </svg>
                    </div>
                    
                    {/* Cuadrado verde rotado */}
                    <div className="absolute bottom-[30px] left-[70px]">
                      <svg width="92" height="92" viewBox="0 0 92 92" fill="#B9FF66" xmlns="http://www.w3.org/2000/svg">
                        <rect width="65" height="65" transform="matrix(0.707107 0.707107 -0.707107 0.707107 46 0)" />
                      </svg>
                    </div>
                    
                    {/* Cara sonriente */}
                    <div className="absolute left-[90px] top-[30px]">
                      <div className="relative">
                        <div className="w-[125px] h-[125px] bg-black rounded-full"></div>
                        <div className="w-[20px] h-[40px] bg-white rounded-full absolute top-[30px] left-[32px]"></div>
                        <div className="w-[20px] h-[40px] bg-white rounded-full absolute top-[30px] left-[72px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Separador después de CTA */}
      <SectionDivider 
        title="Compromiso" 
        description="CoNest se asegura de que ambas partes lleguen al mejor acuerdo y fomentar la colaboración intergeneracional"
      />

      {/* FAQ Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection threshold={0.15}>
            <h2 className="text-3xl md:text-4xl font-zodiak-bold text-center mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="flex flex-col space-y-8">
              <FAQAccordion faqs={[
                {
                  id: '01',
                  question: '¿Cómo funciona CoNest?',
                  answer: 'CoNest conecta estudiantes que buscan alojamiento asequible con personas mayores que tienen espacios disponibles en sus hogares. Durante nuestra entrevista inicial, entendemos tus necesidades y preferencias para encontrar la mejor compatibilidad. Te guiamos a través de todo el proceso, desde el registro hasta la firma del acuerdo de convivencia.',
                  defaultOpen: true
                },
                {
                  id: '02',
                  question: '¿Cómo se garantiza la seguridad?',
                  answer: 'Verificamos la identidad de todos los usuarios mediante un riguroso proceso que incluye documentación oficial, verificación de antecedentes y múltiples entrevistas. Nuestro equipo evalúa cuidadosamente cada perfil para garantizar un entorno seguro y confiable para ambas partes.'
                },
                {
                  id: '03',
                  question: '¿Cuánto cuesta el servicio?',
                  answer: 'El costo del servicio varía según las necesidades específicas. Los estudiantes pagan una tarifa reducida comparada con alquileres tradicionales, mientras que las personas mayores reciben un ingreso extra. CoNest cobra una comisión única por la conexión exitosa, sin costos mensuales adicionales.'
                },
                {
                  id: '04',
                  question: '¿Puedo cancelar en cualquier momento?',
                  answer: 'Sí, entendemos que las circunstancias pueden cambiar. Los acuerdos tienen períodos mínimos (generalmente de 3 meses) pero incluyen cláusulas de cancelación flexibles. Nuestro equipo te asesorará para encontrar la mejor solución en caso de necesitar finalizar el acuerdo anticipadamente.'
                },
                {
                  id: '05',
                  question: '¿Cómo se gestiona la convivencia?',
                  answer: 'Facilitamos un acuerdo de convivencia detallado que establece normas claras sobre espacios compartidos, horarios, responsabilidades y expectativas. Además, proporcionamos seguimiento continuo y mediación si surgen problemas, asegurando una experiencia positiva para ambas partes.'
                },
                {
                  id: '06',
                  question: '¿Está disponible en toda España?',
                  answer: 'Actualmente operamos en las principales ciudades universitarias de España, incluyendo Madrid, Barcelona, Valencia, Sevilla y Salamanca. Estamos expandiendo constantemente nuestra cobertura para llegar a más comunidades. Consulta nuestra página de ubicaciones para ver la disponibilidad actualizada.'
                }
              ]} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Separador después de FAQ */}
      <SectionDivider 
        title="Transparencia" 
        description="Creemos en la comunicación clara y resolvemos todas tus dudas antes de comenzar el proceso"
      />

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member: TeamMemberProps, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "50px" }}
                style={{ willChange: 'opacity, transform' }}
              >
                <TeamMember
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  description={member.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador después de Team */}
      <SectionDivider 
        title="Experiencia" 
        description="Nuestro equipo combina conocimientos en vivienda, atención social y tecnología para brindarte el mejor servicio"
      />

      {/* Contact Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection threshold={0.2}>
            <div className="bg-[#F3F3F3] rounded-[45px] overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Form Side */}
                <div className="w-full lg:w-1/2 p-8 md:p-16">
                  <h2 className="text-3xl md:text-4xl font-zodiak-bold text-black mb-8">Contáctanos</h2>
                  <ContactForm />
                </div>
                
                {/* Illustration Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-full min-h-[400px] lg:min-h-0 bg-white/5">
                    {/* Background Shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Main black shape */}
                      <div className="absolute top-[10%] right-[-30%] w-[120%] h-[120%] bg-[#191A23] rounded-[45px] transform rotate-[-10deg]"></div>
                      
                      {/* Green square rotated */}
                      <div className="absolute bottom-[20%] right-[20%] z-10">
                        <div className="w-[100px] h-[100px] bg-[#B9FF66] transform rotate-45"></div>
                      </div>
                      
                      {/* Black square rotated */}
                      <div className="absolute top-[20%] right-[30%] z-10">
                        <div className="w-[180px] h-[180px] bg-[#191A23] transform rotate-45"></div>
                      </div>
                      
                      {/* Design elements */}
                      <div className="absolute bottom-[10%] right-[5%] w-[70%] border-t border-dashed border-white"></div>
                      <div className="absolute bottom-[20%] right-[5%] w-[60%] border-t border-dashed border-white"></div>
                      <div className="absolute bottom-[30%] right-[5%] w-[50%] border-t border-dashed border-white"></div>
                      
                      {/* Vector image */}
                      <div className="absolute top-[20%] left-[5%] z-10">
                        <Image 
                          src="/vectors/undraw_message-sent_785q.svg"
                          alt="Contacto" 
                          width={240} 
                          height={240}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
