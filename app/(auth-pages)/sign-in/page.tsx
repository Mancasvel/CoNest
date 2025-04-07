"use client";

import { use } from "react";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Divider } from "@heroui/react";
import Image from "next/image";

export default function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = use(props.searchParams);

  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image 
              src="/images/conest_logo.png" 
              alt="CoNest Logo" 
              width={150} 
              height={40} 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <Card className="w-full shadow-medium border-none overflow-hidden rounded-2xl bg-white backdrop-blur-sm bg-opacity-95">
          <CardHeader className="flex flex-col items-center space-y-2 bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-8 rounded-t-xl">
            <div className="h-1 w-16 bg-white/30 rounded-full mb-2"></div>
            <h1 className="text-2xl font-bold text-white">Bienvenido de nuevo</h1>
            <p className="text-white/80 text-sm">Inicia sesión en tu cuenta CoNest</p>
          </CardHeader>

          <CardBody className="p-8">
            <form className="flex flex-col space-y-5" action={signInAction}>
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
                  className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-medium text-conest-darkGray">
                    Contraseña
                  </label>
                  <Link
                    className="text-xs text-conest-blue hover:text-conest-mediumBlue font-medium transition-colors duration-200"
                    href="/forgot-password"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Tu contraseña"
                  required
                  className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  }
                />
              </div>

              <div className="pt-2">
                <SubmitButton 
                  pendingText="Iniciando sesión..." 
                  className="w-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue hover:from-conest-mediumBlue hover:to-conest-darkBlue text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-medium"
                >
                  Iniciar sesión
                </SubmitButton>
              </div>

              <FormMessage message={searchParams} />
            </form>
          </CardBody>

          <Divider className="opacity-50" />

          <CardFooter className="flex justify-center p-6 bg-gray-50/30">
            <p className="text-sm text-conest-darkGray">
              ¿No tienes una cuenta?{" "}
              <Link className="text-conest-blue font-medium hover:underline transition-all duration-200" href="/sign-up">
                Regístrate
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-conest-darkGray/60">
            Al iniciar sesión, aceptas nuestros{" "}
            <Link href="/terminos" className="text-conest-blue/80 hover:text-conest-blue transition-colors">
              Términos y Condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacy" className="text-conest-blue/80 hover:text-conest-blue transition-colors">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
