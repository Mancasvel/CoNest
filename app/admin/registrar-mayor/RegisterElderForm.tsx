"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { registerElderAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardHeader, CardBody, CardFooter, Input, Divider } from "@heroui/react";

function SignupForm() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const msg = searchParams.get("message");
    if (msg) {
      setMessage(msg);
    }
  }, [searchParams]);

  return (
    <>
      {message && (
        <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
          <FormMessage message={{ message }} />
        </div>
      )}

      <div className="w-full max-w-md mx-auto px-4 py-12">
        <Card className="w-full shadow-medium overflow-hidden">
          <CardHeader className="flex flex-col items-center space-y-2 bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6">
            <div className="h-2 w-16 relative mb-2"></div>
            <h1 className="text-2xl font-bold text-white">Un nuevo Mayor!</h1>
            <p className="text-white/80 text-sm">Únete a la comunidad CoNest</p>
          </CardHeader>
          
          <CardBody className="p-6">
            <form className="flex flex-col space-y-4" action={registerElderAction}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-conest-darkGray">
                  Correo electrónico
                </label>
                <Input 
                  id="email"
                  name="email" 
                  placeholder="tucorreo@ejemplo.com" 
                  required 
                  type="email"
                  className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-conest-darkGray">
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Tu contraseña (mínimo 6 caracteres)"
                  minLength={6}
                  required
                  className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="birth_date" className="text-sm font-medium text-conest-darkGray">
                  Fecha de nacimiento
                </label>
                <Input 
                  id="birth_date"
                  type="date" 
                  name="birth_date" 
                  required 
                  className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="apartment_address" className="text-sm font-medium text-conest-darkGray">
                  Dirección del apartamento
                </label>
                <Input 
                  id="apartment_address"
                  name="apartment_address" 
                  placeholder="Tu dirección completa" 
                  required 
                  className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="monthly_rent" className="text-sm font-medium text-conest-darkGray">
                  Precio de renta mensual (€)
                </label>
                <Input 
                  id="monthly_rent"
                  type="number" 
                  name="monthly_rent" 
                  placeholder="Ej. 350" 
                  required 
                  className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                />
              </div>

              <SubmitButton 
                formAction={registerElderAction}
                pendingText="Registrando..." 
                className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-soft"
              >
                Crear Cuenta
              </SubmitButton>
            </form>
          </CardBody>
          
          <Divider />
          
          
        </Card>
      </div>
    </>
  );
}

export default function Signup() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 border-t-2 border-b-2 border-conest-blue rounded-full animate-spin"></div>
          <p className="mt-4 text-conest-darkGray">Cargando...</p>
        </div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
