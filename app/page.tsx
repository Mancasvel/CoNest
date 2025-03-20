"use client";

import Image from 'next/image';
import { Card, Button, CardBody, CardHeader, CardFooter, Link } from '@heroui/react';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NavbarTerracota from "@/app/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interfaz para el tipo de datos que se espera de la API
interface ApiData {
  // Añadir las propiedades específicas aquí cuando sepamos qué devuelve la API
  [key: string]: any;
}

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
      {/* Header */}
      <NavbarTerracota />

      {/* Hero Section */}

<section className="relative h-screen">
  {/* Efecto de gradiente y desenfoque */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-teal-700/50 to-transparent z-10"></div>
  
  {/* Imagen con efecto Parallax */}
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src="/images/main.jpg"
      alt="Modern living space"
      width={1200}
      height={800}
      className="w-full h-full object-cover transform scale-110 transition-transform duration-1000 ease-in-out"
    />
  </div>

  {/* Contenido Principal */}
  <div className="absolute left-0 top-1/3 p-12 z-20 max-w-xl">
    <Card className="bg-white/85 backdrop-blur-sm p-8 shadow-xl">
      <CardBody>
        <h1 className="text-5xl font-bold text-teal-800 mb-6">Una mejor manera de alojarte</h1>
        <p className="text-lg text-gray-800 mb-2">Encuentra alojamiento ayudando a la comunidad y al mejor precio.</p>
      </CardBody>
    </Card>
  </div>

  {/* Carrusel de Testimonios */}
  <div className="absolute top-1/4 right-10 z-20 flex justify-end">
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-sm w-full">
      <Slider {...settings}>
        {testimonials.map(({ id, name, text }) => (
          <div key={id} className="text-center">
            <p className="text-lg font-semibold text-teal-900">"{text}"</p>
            <span className="block mt-2 text-gray-700 font-medium">- {name}</span>
          </div>
        ))}
      </Slider>
    </div>
  </div>

  {/* Estrellas y clasificación - Más cerca de las reviews */}
  <div className="absolute top-[calc(25%+240px)] right-10 z-20 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs w-full text-center">
    <div className="mb-4">
      <span className="text-xl text-yellow-500">
        ⭐⭐⭐⭐⭐
      </span>
      <p className="text-lg text-gray-700 font-medium">4.8/5 basado en 120 opiniones</p>
    </div>
    <p className="text-sm text-gray-500">Clasificado como un proyecto para la comunidad</p>
  </div>
</section>


      {/* Central Button */}
      <div className="relative -mt-24 z-30 flex justify-center">
        <Button 
          size="lg"
          as="a"
          href="/sign-in"
          color="warning"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-6 px-10 rounded-full text-xl shadow-lg transform transition hover:scale-105"
        >
          Haz match con una mejor vida
        </Button>
      </div>

      {/* Features Section */}
      <main className="mt-36 max-w-6xl mx-auto px-6">
      <section className="mb-20">
  <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Encuentra tu espacio ideal</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {['Alojamiento Asequible', 'Compañía para Personas Mayores', 'Comunidad de Confianza'].map((feature, index) => (
      <motion.div
        key={feature}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <Card className="shadow-md h-full">
          <CardHeader className="p-0">
            {/* Contenedor con el tamaño y recorte igual para todas las imágenes */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={`/images/${feature.toLowerCase().replace(/\s+/g, '-')}.jpg`} // Asumiendo que las imágenes tengan nombres relacionados con el texto
                alt={`${feature} Image`}
                layout="fill" // Esto asegura que la imagen ocupe el espacio del contenedor
                objectFit="cover" // Asegura que la imagen se recorte y se ajuste correctamente
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
      </motion.div>
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
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
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
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="mb-6 w-full md:w-auto">
              <h3 className="text-xl font-bold text-teal-800 mb-4">CoNest</h3>
              <p className="text-gray-600 max-w-xs">Conectando personas, creando hogares.</p>
            </div>
            
            <div className="mb-6 w-full md:w-auto">
              <h4 className="font-semibold mb-3">Enlaces</h4>
              <ul className="space-y-2">
                {['Sobre Nosotros', 'Preguntas Frecuentes', 'Contacto', 'Blog'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-teal-800">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6 w-full md:w-auto">
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                {['Términos de Servicio', 'Política de Privacidad', 'Cookies'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-teal-800">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6 w-full md:w-auto">
              <h4 className="font-semibold mb-3">Síguenos</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map(social => (
                  <a key={social} href="#" className="text-gray-600 hover:text-teal-800">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-8 pt-6 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} CoNest. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}