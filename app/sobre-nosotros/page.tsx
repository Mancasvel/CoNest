'use client';

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Divider, Button } from "@nextui-org/react";
import NavbarTerracota from "@/app/components/Navbar";

export default function SobreNosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavbarTerracota />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-800">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Nosotros</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conoce quiénes somos, nuestra misión y cómo estamos transformando el concepto de vivienda 
              compartida entre generaciones.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full mt-2 mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 relative z-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="fade-in-right">
                <Image 
                  src="/images/us.jpg" 
                  alt="Nuestra misión" 
                  width={500} 
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto transform hover:scale-102 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="fade-in-left">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                    Nuestra Misión
                  </span>
                </h2>
                <p className="text-gray-600 mb-4">
                  En <strong>CoNest</strong>, nuestra misión es crear puentes entre generaciones, 
                  facilitando hogares compartidos que beneficien tanto a personas mayores como a 
                  estudiantes. Creemos en el poder de la convivencia intergeneracional para 
                  enriquecer vidas y crear comunidades más fuertes.
                </p>
                <p className="text-gray-600 mb-4">
                  Trabajamos para combatir la soledad de los mayores mientras ofrecemos opciones de 
                  vivienda asequible a los estudiantes. Cada conexión que facilitamos representa una 
                  oportunidad de aprendizaje mutuo, compañerismo y crecimiento personal.
                </p>
                <div className="flex items-center mt-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl mr-4">
                    <span>🤝</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Más de <span className="text-teal-600 font-bold">500 hogares</span> conectados desde 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                Nuestros Valores
              </span>
            </h2>
            <p className="text-gray-600">
              Estos son los principios que guían nuestro trabajo y nos inspiran a crear un impacto 
              positivo en la sociedad a través de la convivencia intergeneracional.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.1s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Conexión Humana</h3>
                  <p className="text-gray-600">
                    Creemos que las relaciones significativas entre personas de diferentes generaciones 
                    enriquecen vidas y crean sociedades más unidas.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.2s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">Sostenibilidad</h3>
                  <p className="text-gray-600">
                    Optimizamos recursos existentes y promovemos un estilo de vida colaborativo que 
                    reduce nuestra huella ecológica y social.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.3s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Confianza</h3>
                  <p className="text-gray-600">
                    Trabajamos para crear relaciones basadas en la confianza mutua, la transparencia 
                    y el respeto entre todos los participantes.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.4s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>🌈</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">Inclusión</h3>
                  <p className="text-gray-600">
                    Valoramos la diversidad y nos esforzamos por crear oportunidades de convivencia 
                    accesibles para personas de diferentes orígenes y circunstancias.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.5s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Innovación</h3>
                  <p className="text-gray-600">
                    Buscamos constantemente formas creativas de mejorar nuestra plataforma y 
                    expandir el impacto de nuestro modelo de convivencia.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-white shadow-md border border-gray-100 value-card" style={{ animationDelay: "0.6s" }}>
                <CardBody className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-2xl mb-4">
                    <span>🤲</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">Compromiso Social</h3>
                  <p className="text-gray-600">
                    Nos comprometemos a generar un impacto social positivo, abordando desafíos 
                    como la soledad, la escasez de vivienda y la desconexión intergeneracional.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                Nuestra Historia
              </span>
            </h2>
            <p className="text-gray-600">
              El camino que nos ha llevado hasta donde estamos hoy y nuestra visión para el futuro.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-teal-500 ml-6">
              <div className="relative pl-10 pb-10 fade-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="absolute -left-8 top-0 w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl">
                  <span>2020</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Nuestros inicios</h3>
                <p className="text-gray-600 mb-4">
                  CoNest nace como una startup con la visión de conectar a personas mayores con 
                  habitaciones disponibles en sus hogares con estudiantes que buscan alojamiento 
                  asequible. Comenzamos con un pequeño piloto en Madrid.
                </p>
              </div>
              
              <div className="relative pl-10 pb-10 fade-in-left" style={{ animationDelay: "0.3s" }}>
                <div className="absolute -left-8 top-0 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-xl">
                  <span>2021</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Primeros éxitos</h3>
                <p className="text-gray-600 mb-4">
                  Tras resultados positivos, expandimos nuestras operaciones a Barcelona y Valencia.
                  Recibimos nuestro primer reconocimiento como empresa social innovadora.
                </p>
              </div>
              
              <div className="relative pl-10 pb-10 fade-in-left" style={{ animationDelay: "0.5s" }}>
                <div className="absolute -left-8 top-0 w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl">
                  <span>2022</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Crecimiento y mejoras</h3>
                <p className="text-gray-600 mb-4">
                  Lanzamos nuestra plataforma digital mejorada, facilitando conexiones más rápidas y 
                  seguras. Cerramos alianzas con universidades y administraciones locales.
                </p>
              </div>
              
              <div className="relative pl-10 fade-in-left" style={{ animationDelay: "0.7s" }}>
                <div className="absolute -left-8 top-0 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-xl">
                  <span>2023</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Presente y futuro</h3>
                <p className="text-gray-600 mb-4">
                  Actualmente, estamos presentes en 10 ciudades españolas y preparando nuestra 
                  expansión a otros países europeos. Hemos facilitado más de 500 convivencias 
                  exitosas y seguimos creciendo.
                </p>
                <p className="text-gray-600">
                  Nuestro objetivo para los próximos años es consolidarnos como la plataforma de 
                  referencia en convivencia intergeneracional en Europa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden fade-in-up-delay">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              ¿Listo para comenzar tu experiencia en <span className="text-yellow-600">CoNest</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Únete a nuestra comunidad y descubre una nueva forma de convivencia que beneficia a todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                as="a"
                href="/sign-up/elder"
                className="relative bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/20 hover:shadow-xl overflow-hidden group cta-button"
              >
                <span className="relative z-10">Regístrate como Anfitrión</span>
                <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-teal-400/50 to-teal-600/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg"
                as="a"
                href="/sign-up/student"
                className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-xl overflow-hidden group cta-button-delayed"
              >
                <span className="relative z-10">Regístrate como Estudiante</span>
                <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-yellow-400/50 to-amber-600/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        /* Animaciones para el contenido */
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-up-delay {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
          animation-delay: 0.3s;
        }

        /* Animaciones para las tarjetas de valores */
        .value-card {
          opacity: 0;
          animation: fadeInUp 0.7s forwards;
        }

        /* Animaciones para botones CTA */
        .cta-button {
          opacity: 0;
          animation: scaleButton 0.5s forwards;
          animation-delay: 0.5s;
        }
        .cta-button-delayed {
          opacity: 0;
          animation: scaleButton 0.5s forwards;
          animation-delay: 0.7s;
        }
        @keyframes scaleButton {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.7s forwards;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .fade-in-left {
          opacity: 0;
          animation: fadeInLeft 0.7s forwards;
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}