"use client";

import Image from 'next/image';
import { Card, Button, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NavbarTerracota from "@/app/components/Navbar";

// Interfaz para el tipo de datos que se espera de la API
interface ApiData {
  // Añadir las propiedades específicas aquí cuando sepamos qué devuelve la API
  [key: string]: any;
}

export default function Home() {
  const [data, setData] = useState<ApiData | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  return (
    <>
      {/* Header */}
      <NavbarTerracota />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0">
        <Image 
          src="/images/main.jpg"
          alt="Modern living space"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
        </div>
        
        <div className="absolute left-0 top-1/3 p-12 z-20 max-w-xl">
          <Card className="bg-white/85 backdrop-blur-sm p-8 shadow-xl">
            <CardBody>
              <h1 className="text-5xl font-bold text-teal-800 mb-6">Una mejor manera de alojarte</h1>
              <p className="text-lg text-gray-800 mb-2">Encuentra alojamiento ayudando a la comunidad y al mejor precio.</p>
              <p className="text-lg text-gray-800 mb-6">Forma parte de este camino.</p>
            </CardBody>
          </Card>
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
                    <div className="h-48 bg-gray-200 w-full"></div>
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
              <Button color="primary" className="bg-teal-700">
                Más Información
              </Button>
            </div>
            <div className="bg-gray-200 rounded-lg h-64"></div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-800 mb-10 text-center">Lo que dicen nuestros usuarios</h2>
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