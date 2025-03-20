"use client";

import Image from 'next/image';
import { Card, Button, CardBody, CardHeader, CardFooter, Link } from '@heroui/react';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import Navbar from "@/app/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interfaz para el tipo de datos que se espera de la API
interface ApiData {
  // Añadir las propiedades específicas aquí cuando sepamos qué devuelve la API
  [key: string]: any;
}

// Cliente-only component for particles to avoid hydration errors
const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    width: number;
    height: number;
    left: string;
    top: string;
    yOffset: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate particle data once to avoid regenerating on each render
    const particleData = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: Math.random() * 15 + 5,
      height: Math.random() * 15 + 5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      yOffset: Math.random() * 100,
      duration: Math.random() * 10 + 15
    }));
    setParticles(particleData);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-teal-500"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            opacity: 0.5,
            transition: `transform ${particle.duration}s ease-in-out, opacity ${particle.duration}s ease-in-out`,
            animation: `float-${particle.id % 5} ${particle.duration}s infinite alternate`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-0 { 
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        @keyframes float-1 { 
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        @keyframes float-2 { 
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-25px) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        @keyframes float-3 { 
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-15px) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        @keyframes float-4 { 
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-22px) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const testimonials = [
    { id: 1, name: "María López", text: "Gracias a CoNest encontré un hogar acogedor y económico." },
    { id: 2, name: "Carlos Ruiz", text: "Una experiencia increíble ayudando a personas mayores." },
    { id: 3, name: "Laura Gómez", text: "Recomiendo CoNest a todos los estudiantes que buscan alojamiento." },
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/data"); // Reemplaza con tu API real
      const result = await response.json();
      setData(result);
    }
    fetchData();
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-teal-950 to-black">
        {/* Partículas y formas geométricas de fondo */}
        <BackgroundParticles />

        {/* Malla geométrica futurista */}
        <div className="absolute inset-0 z-0">
          <svg 
            width="100%" 
            height="100%" 
            className="opacity-10"
          >
            <pattern 
              id="grid" 
              width="40" 
              height="40" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(20, 184, 166, 0.5)" 
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Formas abstractas */}
        <div 
          className="absolute right-0 top-20 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400/30 to-yellow-600/10 blur-3xl abstract-shape shape1"
        />
        <div 
          className="absolute left-10 bottom-20 w-80 h-80 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-600/10 blur-3xl abstract-shape shape2"
        />

        {/* Efecto de glassmorphism y gradiente futurista */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40 z-10"></div>
        
        {/* Imagen con efecto 3D */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            className="h-full w-full perspective-1000 transform-gpu image-parallax"
          >
            <Image 
              src="/images/main.jpg"
              alt="Modern living space"
              width={1200}
              height={800}
              className="w-full h-full object-cover brightness-75 contrast-125 saturate-120"
              priority
            />
          </div>
        </div>

        {/* Líneas animadas diagonales - Cliente only para evitar errores de hidratación */}
        <ClientLines />

        {/* Contenido Principal con animación 3D */}
        <div className="absolute left-0 top-1/3 p-12 z-20 max-w-2xl">
          <div
            className="opacity-0 fade-in-slide"
          >
            <div
              className="perspective-1000 transform-gpu card-hover"
            >
              <Card className="bg-white/10 backdrop-blur-lg p-8 shadow-2xl border-l-4 border-yellow-500 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-900/20"></div>
                <CardBody className="relative z-10">
                  <div
                    className="opacity-0 fade-in-up"
                  >
                    <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
                      Una <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">mejor</span> manera de <span className="text-yellow-400">alojarte</span>
                    </h1>
                  </div>
                  <div
                    className="opacity-0 fade-in-delay"
                  >
                    <p className="text-xl text-gray-200 mb-6">Encuentra alojamiento ayudando a la comunidad y al mejor precio.</p>
                    <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full mt-2"></div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Carrusel de Testimonios con diseño futurista */}
        <div className="absolute top-1/4 right-10 z-20 flex justify-end">
          <div
            className="w-full max-w-md opacity-0 fade-in-right"
          >
            <Card className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border-t border-r border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-800/20"></div>
              <CardBody className="relative z-10">
                <Slider {...settings}>
                  {testimonials.map(({ id, name, text }) => (
                    <div key={id} className="text-center px-2">
                      <div className="mb-4 text-yellow-400">
                        <span 
                          className="text-4xl quote-animation"
                        >
                          "
                        </span>
                      </div>
                      <p className="text-xl font-medium text-white mb-6">{text}</p>
                      <div className="mt-4 flex items-center justify-center">
                        <div className="h-px w-8 bg-gradient-to-r from-teal-500 to-transparent mr-2"></div>
                        <span className="block text-teal-300 font-medium">{name}</span>
                        <div className="h-px w-8 bg-gradient-to-l from-teal-500 to-transparent ml-2"></div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Estrellas y clasificación con diseño futurista */}
        <div className="absolute top-[calc(25%+300px)] right-10 z-20">
          <div
            className="w-full max-w-xs opacity-0 fade-in-up-delay"
          >
            <Card className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border-b border-l border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-800/20"></div>
              <CardBody className="relative z-10 text-center">
                <div className="mb-4 flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div 
                      key={star}
                      className="relative star-animation"
                      style={{ animationDelay: `${0.1 * star}s` }}
                    >
                      <span className="text-2xl text-yellow-400 filter drop-shadow-lg">⭐</span>
                      <div 
                        className="absolute inset-0 text-2xl text-yellow-400 filter blur-sm star-pulse"
                      >
                        ⭐
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xl text-white font-medium mb-3">4.8/5 basado en 120 opiniones</p>
                <div className="mt-2">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-teal-500/20 to-transparent backdrop-blur-md text-teal-300 rounded-full text-sm font-medium border border-teal-500/30">
                    Proyecto para la comunidad
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Central Button con diseño futurista */}
      <div className="relative -mt-24 z-30 flex justify-center">
        <div
          className="opacity-0 scale-button"
        >
          <Button 
            size="lg"
            as="a"
            href="/sign-in"
            color="warning"
            className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-7 px-12 rounded-full text-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl overflow-hidden group"
          >
            <span className="relative z-10">Haz match con una mejor vida</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-shift"
            />
            <div 
              className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-yellow-400/50 to-amber-600/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <main className="mt-36 max-w-6xl mx-auto px-6">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Encuentra tu espacio ideal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Alojamiento Asequible', 'Compañía para Personas Mayores', 'Comunidad de Confianza'].map((feature, index) => (
              <div
                key={feature}
                className="feature-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="shadow-md h-full">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={`/images/${feature.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={`${feature} Image`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">
                      {feature === 'Alojamiento Asequible' && 'Estudiantes pueden encontrar alojamiento más económico.'}
                      {feature === 'Compañía para Personas Mayores' && 'Estudiantes ofrecen compañía a personas mayores.'}
                      {feature === 'Comunidad de Confianza' && 'Plataforma segura y confiable.'}
                    </p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Cómo Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                CoNest conecta a estudiantes con opciones de alojamiento asequible mientras brinda compañía a personas mayores.
              </p>
              <Link href="/about" className="bg-teal-700 text-white px-4 py-2 rounded-md">
                Más Información
              </Link>
            </div>
            <div className="relative bg-gray-200 rounded-lg h-80 overflow-hidden">
              <Image
                src="/images/how-it-works.jpg" // Asegúrate de que la ruta sea correcta
                alt="Cómo Funciona"
                layout="fill"  // Ocupa todo el contenedor
                objectFit="cover"  // Recorta y ajusta la imagen
                className="transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </section>


        {/* Testimonios Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Lo que opinan nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'María González', 
                role: 'Propietaria', 
                text: 'CoNest ha sido una bendición para mí. No solo obtengo ayuda con las tareas diarias sino que me encanta la compañía de mi estudiante.', 
                image: 'https://i.pravatar.cc/150?img=32'
              },
              { 
                name: 'Carlos Rodríguez', 
                role: 'Estudiante', 
                text: 'Gracias a CoNest pude encontrar alojamiento asequible mientras estudio, y me encanta ayudar a mi anfitriona con sus tareas diarias.', 
                image: 'https://i.pravatar.cc/150?img=68'
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="shadow-md h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </section>
        
      </main>

      <style jsx global>{`
        /* Animaciones para las formas abstractas */
        .abstract-shape {
          animation-duration: 15s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .shape1 {
          animation-name: pulse1;
        }
        .shape2 {
          animation-name: pulse2;
        }
        @keyframes pulse1 {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(10deg); }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(-5deg); }
        }

        /* Imagen con efecto 3D */
        .image-parallax {
          animation: image3D 25s infinite alternate ease-in-out;
        }
        @keyframes image3D {
          0%, 100% { transform: scale(1.1) translateY(0) rotateX(0) rotateY(0); }
          50% { transform: scale(1.05) translateY(-10px) rotateX(2deg) rotateY(-2deg); }
        }

        /* Animaciones para el contenido principal */
        .fade-in-slide {
          animation: fadeInSlide 1s forwards;
          animation-delay: 0.3s;
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .card-hover:hover {
          transform: rotateY(5deg) rotateX(-5deg) scale(1.02);
          transition: transform 0.3s ease;
        }

        .fade-in-up {
          animation: fadeInUp 0.7s forwards;
          animation-delay: 0.7s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-delay {
          animation: fadeIn 0.7s forwards;
          animation-delay: 1s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Testimoniales */
        .fade-in-right {
          animation: fadeInRight 0.8s forwards;
          animation-delay: 0.5s;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quote-animation {
          display: inline-block;
          opacity: 0;
          animation: fadeInQuote 0.5s forwards;
          animation-delay: 0.2s;
        }
        @keyframes fadeInQuote {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Estrellas */
        .fade-in-up-delay {
          animation: fadeInUpDelay 0.8s forwards;
          animation-delay: 0.8s;
        }
        @keyframes fadeInUpDelay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .star-animation {
          opacity: 0;
          transform: scale(0.5);
          animation: scaleStar 0.3s forwards;
        }
        @keyframes scaleStar {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        .star-pulse {
          animation: pulseStar 2s infinite;
        }
        @keyframes pulseStar {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Botón central */
        .scale-button {
          animation: scaleButton 0.5s forwards;
          animation-delay: 1.2s;
        }
        @keyframes scaleButton {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientPosition 5s infinite linear;
        }
        @keyframes gradientPosition {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Cards de características */
        .feature-card {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        /* Testimonios en la sección inferior */
        .testimonial-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
      `}</style>
    </>
  );
}

// Client-only component for animated lines to avoid hydration errors
const ClientLines = () => {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<Array<{
    id: number;
    top: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate line data once
    const lineData = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: `${i * 25}%`,
      delay: i * 0.8
    }));
    setLines(lineData);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden opacity-20">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent w-full"
          style={{ 
            top: line.top,
            animation: `moveX 8s ${line.delay}s infinite linear`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes moveX {
          0% { 
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
