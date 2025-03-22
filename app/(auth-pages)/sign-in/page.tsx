import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Divider } from "@heroui/react";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <Card className="w-full shadow-medium overflow-hidden">
        <CardHeader className="flex flex-col items-center space-y-2 bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6">
          <div className="h-2 w-16 relative mb-2">
          </div>
          <h1 className="text-2xl font-bold text-white">Bienvenido de nuevo</h1>
          <p className="text-white/80 text-sm">Inicia sesión en tu cuenta CoNest</p>
        </CardHeader>
        
        <CardBody className="p-6">
          <form className="flex flex-col space-y-4" action={signInAction}>
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
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-conest-darkGray">
                  Contraseña
                </label>
                <Link
                  className="text-xs text-conest-blue hover:text-conest-mediumBlue font-medium"
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
                className="w-full rounded-lg border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
              />
            </div>
            
            <SubmitButton 
              pendingText="Iniciando sesión..." 
              className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-soft"
            >
              Iniciar sesión
            </SubmitButton>
            
            <FormMessage message={searchParams} />
          </form>
        </CardBody>
        
        <Divider />
        
        <CardFooter className="flex justify-center p-4 bg-gray-50">
          <p className="text-sm text-conest-darkGray">
            ¿No tienes una cuenta?{" "}
            <Link className="text-conest-blue font-medium hover:underline" href="/sign-up">
              Regístrate
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}