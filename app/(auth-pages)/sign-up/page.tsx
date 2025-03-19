'use client';

import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const RoleSelectionScreen = () => {
  return (
    <div className="bg-white py-16 min-h-[calc(100vh-160px)] flex items-center justify-center">
      <div className="max-w-5xl w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          ¿Cómo quieres unirte a CoNest?
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Elige una opción para continuar con tu registro. Tu experiencia se adaptará según tu rol.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-md transition-all duration-300 hover:shadow-lg">
            <CardBody className="p-6">
              <h2 className="text-2xl font-semibold text-teal-700 mb-3">Soy Anfitrión</h2>
              <p className="text-gray-600 mb-8">
                Ofrece alojamiento a estudiantes, obtén compañía e ingresos adicionales.
                Ideal para personas mayores que tienen espacio adicional en su hogar.
              </p>
              <div className="flex justify-center">
                <Button 
                  as={Link} 
                  href="/sign-up/elder" 
                  color="primary" 
                  size="lg"
                  className="bg-teal-700 text-white font-medium"
                >
                  Continuar como Anfitrión
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="shadow-md transition-all duration-300 hover:shadow-lg">
            <CardBody className="p-6">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-3">Soy Estudiante</h2>
              <p className="text-gray-600 mb-8">
                Encuentra alojamiento asequible a cambio de ofrecer algunas horas de compañía
                semanal y ayuda ocasional a tus anfitriones.
              </p>
              <div className="flex justify-center">
                <Button 
                  as={Link} 
                  href="/sign-up/student" 
                  color="warning" 
                  size="lg"
                  className="bg-yellow-500 text-white font-medium"
                >
                  Continuar como Estudiante
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta? <Link href="/sign-in" className="text-blue-600 hover:underline">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      <RoleSelectionScreen />
      <Footer />
    </div>
  );
}