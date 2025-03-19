'use client';

import React from "react";
import { Card, CardBody, CardHeader, Divider, Image, Button } from "@nextui-org/react";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Sobre CoNest</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-teal-700">Nuestra Misión</h2>
            <p className="text-lg mb-6">
              En CoNest, creemos en el poder de las conexiones intergeneracionales para 
              transformar vidas. Nuestra misión es crear soluciones de alojamiento que 
              beneficien tanto a estudiantes como a personas mayores, fomentando la 
              convivencia, el aprendizaje mutuo y el apoyo comunitario.
            </p>
            <p className="text-lg">
              Buscamos abordar dos desafíos sociales importantes: la soledad en la 
              tercera edad y la crisis de vivienda asequible para estudiantes, a través 
              de una plataforma segura y confiable que une generaciones.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Personas mayores y jóvenes compartiendo tiempo juntos"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <Divider className="my-12" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-teal-700">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 h-full">
              <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className="text-xl font-semibold text-teal-700">Compañía</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Combatimos la soledad de las personas mayores mediante 
                  conexiones significativas con estudiantes, creando hogares 
                  llenos de conversación, risas y apoyo mutuo.
                </p>
              </CardBody>
            </Card>
            
            <Card className="p-4 h-full">
              <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className="text-xl font-semibold text-yellow-600">Asequibilidad</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Ofrecemos a los estudiantes opciones de vivienda asequibles, 
                  mientras que los anfitriones mayores obtienen ingresos 
                  adicionales y ayuda en las tareas cotidianas.
                </p>
              </CardBody>
            </Card>
            
            <Card className="p-4 h-full">
              <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className="text-xl font-semibold text-teal-700">Aprendizaje Mutuo</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Fomentamos el intercambio de conocimientos y experiencias 
                  entre generaciones, enriqueciendo la vida de ambas partes 
                  a través de perspectivas únicas.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <Divider className="my-12" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-teal-700">Nuestra Historia</h2>
          <Card className="p-8 bg-gray-50">
            <CardBody>
              <p className="text-lg mb-4">
                CoNest nació en 2023 como respuesta a dos crecientes problemas sociales: 
                la soledad entre las personas mayores y la dificultad de los estudiantes 
                para encontrar alojamiento asequible en las grandes ciudades.
              </p>
              <p className="text-lg mb-4">
                Inspirados por programas exitosos de convivencia intergeneracional en 
                varios países europeos, un equipo de emprendedores sociales decidió 
                crear una plataforma digital que facilitara estas conexiones en España.
              </p>
              <p className="text-lg">
                Desde entonces, hemos ayudado a crear cientos de "nidos compartidos" 
                donde florecen relaciones significativas mientras se abordan necesidades 
                prácticas de vivienda y compañía.
              </p>
            </CardBody>
          </Card>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-teal-700">Únete a Nuestra Comunidad</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ya sea que estés buscando un hogar acogedor como estudiante o 
            quieras compartir tu espacio como anfitrión, hay un lugar para ti en CoNest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              color="primary" 
              size="lg"
              className="bg-teal-700 text-white"
              as="a" 
              href="/sign-up/elder"
            >
              Regístrate como Anfitrión
            </Button>
            <Button 
              color="warning" 
              size="lg"
              className="bg-yellow-500 text-white"
              as="a" 
              href="/sign-up/student"
            >
              Regístrate como Estudiante
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 