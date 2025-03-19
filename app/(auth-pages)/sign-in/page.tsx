'use client';

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Card, Button, Input, CardBody, CardHeader } from '@nextui-org/react';
import Link from "next/link";
import { useState } from "react";

export default function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = props.searchParams;
  const [role, setRole] = useState<'elder' | 'student' | null>(null);
  const roleParam = typeof searchParams === 'object' && searchParams !== null && 
    !('success' in searchParams) && 'role' in searchParams ? 
    searchParams.role as string : null;

  // Si no hay rol especificado, mostrar pantalla de selección de rol
  if (!roleParam) {
    return <RoleSelectionScreen />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 bg-white min-h-screen">
      <div className="w-full max-w-md px-4 mx-auto">
        <Card className="w-full shadow-lg">
          <CardHeader className="pb-0 pt-6 px-6 flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold text-center text-teal-800">Iniciar sesión</h1>
            <p className="text-gray-600 text-sm text-center mb-4">
              ¿No tienes una cuenta? {" "}
              <Link className="text-teal-700 font-medium" href="/sign-up">
                Regístrate
              </Link>
            </p>

            {/* Selección de rol usando botones de radio */}
            <div className="flex justify-center space-x-4 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="elder"
                  checked={roleParam === "elder"}
                  className="text-teal-600"
                  onChange={() => setRole('elder')}
                  disabled
                />
                <span>Anfitrión</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={roleParam === "student"}
                  className="text-yellow-600"
                  onChange={() => setRole('student')}
                  disabled
                />
                <span>Estudiante</span>
              </label>
            </div>
          </CardHeader>
        </Card>
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-xl font-bold mb-8 text-teal-800 text-center">¿Nuevo en CoNest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-teal-500 w-full max-w-md">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-teal-700">
                <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ofrezco alojamiento</h3>
            <p className="text-gray-600 mb-6">Dispongo de espacio en mi hogar y busco compañía o ayuda.</p>
            <Button 
              as={Link} 
              href="/sign-up?role=host" 
              color="primary" 
              className="bg-teal-700 text-white font-medium"
            >
              Registrarme como anfitrión
            </Button>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-yellow-500 w-full max-w-md">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-yellow-700">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Busco alojamiento</h3>
            <p className="text-gray-600 mb-6">Soy estudiante y busco un alojamiento asequible donde pueda ayudar.</p>
            <Button 
              as={Link} 
              href="/sign-up?role=student" 
              color="warning" 
              className="bg-yellow-500 text-white font-medium"
            >
              Registrarme como estudiante
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function RoleSelectionScreen() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-10 bg-white min-h-screen">
      <div className="w-full max-w-4xl px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-800 mb-12">¿Cómo quieres iniciar sesión en CoNest?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 justify-items-center">
          <Card className="p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-teal-500 w-full max-w-md">
            <CardBody className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-teal-700">
                  <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Soy un anfitrión</h2>
              <p className="text-gray-600 mb-8">Ofrezco alojamiento y busco a alguien que me ayude con compañía y tareas del hogar.</p>
              <Button 
                as={Link} 
                href="/sign-in/elder" 
                color="primary" 
                size="lg"
                className="bg-teal-700 text-white font-medium w-full max-w-xs"
              >
                Continuar como anfitrión
              </Button>
            </CardBody>
          </Card>
          
          <Card className="p-8 hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-yellow-500 w-full max-w-md">
            <CardBody className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yellow-700">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Soy un estudiante</h2>
              <p className="text-gray-600 mb-8">Busco alojamiento asequible y puedo ofrecer mi ayuda y compañía a cambio.</p>
              <Button 
                as={Link} 
                href="/sign-in/student" 
                color="warning" 
                size="lg"
                className="bg-yellow-500 text-white font-medium w-full max-w-xs"
              >
                Continuar como estudiante
              </Button>
            </CardBody>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">¿No tienes una cuenta todavía?</p>
          <Button 
            as={Link} 
            href="/sign-up" 
            variant="flat" 
            color="primary"
            className="text-teal-700"
          >
            Regístrate aquí
          </Button>
        </div>

      </div>
    </div>
  );
}
