"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { signUpAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardHeader, CardBody, CardFooter, Input, Divider, Chip } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

function SignupForm() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);
  const [role, setRole] = useState("student");

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

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-conest-lightBlue/20 via-white to-white p-4 sm:p-6">
        
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
              <h1 className="text-2xl font-bold text-white">Crea tu cuenta</h1>
              <p className="text-white/80 text-sm">Únete a la comunidad CoNest</p>
            </CardHeader>
            
            <CardBody className="p-8">
              <form className="flex flex-col space-y-5" action={signUpAction}>
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
                    className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                    startContent={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    }
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-conest-darkGray">
                    Tipo de cuenta
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button 
                      type="button"
                      onClick={() => setRole("student")}
                      className={`p-4 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-200 ${
                        role === 'student' 
                          ? 'border-conest-blue bg-conest-lightBlue/30 text-conest-blue shadow-soft' 
                          : 'border-gray-200 bg-gray-50 text-conest-darkGray/70 hover:bg-gray-100'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                      <span className="font-medium">Estudiante</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setRole("elder")}
                      className={`p-4 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-200 ${
                        role === 'elder' 
                          ? 'border-conest-blue bg-conest-lightBlue/30 text-conest-blue shadow-soft' 
                          : 'border-gray-200 bg-gray-50 text-conest-darkGray/70 hover:bg-gray-100'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      <span className="font-medium">Adulto mayor</span>
                    </button>
                  </div>
                  <input type="hidden" name="role" value={role} />
                </div>
                
                {/* Campos para estudiantes */}
                {role === "student" && (
                  <div className="space-y-4 border-t border-gray-100 pt-4 mt-2">
                    <div className="space-y-2">
                      <label htmlFor="university" className="text-sm font-medium text-conest-darkGray">
                        Universidad
                      </label>
                      <Input 
                        id="university"
                        name="university" 
                        placeholder="Tu universidad" 
                        required 
                        className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                          </svg>
                        }
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-medium text-conest-darkGray">
                        Curso actual
                      </label>
                      <select 
                        id="course"
                        name="course" 
                        required
                        className="w-full rounded-xl border border-gray-200 p-3 text-conest-darkGray bg-white focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20"
                      >
                        <option value="1">1° Año</option>
                        <option value="2">2° Año</option>
                        <option value="3">3° Año</option>
                        <option value="4">4° Año</option>
                      </select>
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
                        className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Campos para adultos mayores */}
                {role === "elder" && (
                  <div className="space-y-4 border-t border-gray-100 pt-4 mt-2">
                    <div className="space-y-2">
                      <label htmlFor="birth_date" className="text-sm font-medium text-conest-darkGray">
                        Fecha de nacimiento
                      </label>
                      <Input 
                        id="birth_date"
                        type="date" 
                        name="birth_date" 
                        required 
                        className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                        }
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
                        className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        }
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
                        className="w-full rounded-xl border border-gray-200 focus:border-conest-blue focus:ring-2 focus:ring-conest-blue/20 p-3 text-conest-darkGray"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-mediumBlue/60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <SubmitButton 
                    formAction={signUpAction}
                    pendingText="Registrando..." 
                    className="w-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue hover:from-conest-mediumBlue hover:to-conest-darkBlue text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-medium"
                  >
                    Registrarse
                  </SubmitButton>
                </div>
              </form>
            </CardBody>
            
            <Divider className="opacity-50" />
            
            <CardFooter className="flex justify-center p-6 bg-gray-50/30">
              <p className="text-sm text-conest-darkGray">
                ¿Ya tienes una cuenta?{" "}
                <Link className="text-conest-blue font-medium hover:underline transition-all duration-200" href="/sign-in">
                  Iniciar sesión
                </Link>
              </p>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-conest-darkGray/60">
              Al registrarte, aceptas nuestros{" "}
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

