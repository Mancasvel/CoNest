'use client';
import { Card, CardBody, Input, Textarea, Button, Chip } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      {/* Main Title Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-conest-lightBlue/20 to-white -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10" aria-hidden="true">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #007B9E 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-block rounded-full bg-conest-blue/10 px-4 py-1.5 text-sm font-medium text-conest-blue mb-4 shadow-sm"
              style={{ animation: 'fadeIn 0.8s ease-out' }}
            >
              Estamos Aquí Para Ti
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-conest-darkGray tracking-tight"
              style={{ animation: 'fadeIn 0.8s ease-out 0.1s both' }}
            >
              Contacta Con <span className="text-conest-blue">CoNest</span>
            </h1>
            <p 
              className="text-xl text-conest-darkGray/80 max-w-3xl mx-auto leading-relaxed"
              style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}
            >
              Si tienes preguntas sobre nuestro servicio o necesitas ayuda, estamos aquí para escucharte. Nuestro equipo estará encantado de asistirte.
            </p>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-16 text-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Form Column */}
              <div className="w-full lg:w-7/12">
                <div 
                  className="bg-white shadow-medium rounded-2xl overflow-hidden transition-all"
                  style={{ animation: 'fadeIn 0.8s ease-out 0.3s both' }}
                >
                  <div className="p-1 bg-gradient-to-r from-conest-blue via-conest-mediumBlue to-conest-lightBlue rounded-2xl">
                    <div className="bg-white p-8 sm:p-10 rounded-2xl h-full">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-conest-darkGray">Envíanos un mensaje</h2>
                      <p className="text-conest-darkGray/80 mb-8">
                        Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
                      </p>
                      
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Input
                              type="text"
                              label="Nombre"
                              placeholder="Tu nombre"
                              classNames={{
                                inputWrapper: "bg-conest-lightBlue/10 border-2 border-transparent focus-within:border-conest-blue/30 data-[hover=true]:border-conest-blue/20 shadow-none",
                                input: "text-conest-darkGray",
                                label: "text-conest-darkGray/80 font-medium"
                              }}
                            />
                          </div>
                          <div>
                            <Input
                              type="email"
                              label="Email"
                              placeholder="Tu email"
                              classNames={{
                                inputWrapper: "bg-conest-lightBlue/10 border-2 border-transparent focus-within:border-conest-blue/30 data-[hover=true]:border-conest-blue/20 shadow-none",
                                input: "text-conest-darkGray",
                                label: "text-conest-darkGray/80 font-medium"
                              }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Input
                            type="text"
                            label="Asunto"
                            placeholder="Asunto de tu mensaje"
                            classNames={{
                              inputWrapper: "bg-conest-lightBlue/10 border-2 border-transparent focus-within:border-conest-blue/30 data-[hover=true]:border-conest-blue/20 shadow-none",
                              input: "text-conest-darkGray",
                              label: "text-conest-darkGray/80 font-medium"
                            }}
                          />
                        </div>
                        
                        <div>
                          <Textarea
                            label="Mensaje"
                            placeholder="Escribe tu mensaje aquí..."
                            minRows={4}
                            classNames={{
                              inputWrapper: "bg-conest-lightBlue/10 border-2 border-transparent focus-within:border-conest-blue/30 data-[hover=true]:border-conest-blue/20 shadow-none",
                              input: "text-conest-darkGray",
                              label: "text-conest-darkGray/80 font-medium"
                            }}
                          />
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-6 rounded-xl shadow-soft transition-transform hover:scale-[1.02] duration-200"
                            size="lg"
                          >
                            Enviar Mensaje
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Info Column */}
              <div 
                className="w-full lg:w-5/12"
                style={{ animation: 'fadeIn 0.8s ease-out 0.4s both' }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-white shadow-soft rounded-2xl p-8 mb-6 flex-grow">
                    <h3 className="text-xl font-bold mb-6 text-conest-darkGray">Información de Contacto</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-conest-darkGray mb-1">Teléfono</h4>
                          <p className="text-conest-darkGray/80">+34 91 123 45 67</p>
                          <p className="text-conest-darkGray/60 text-sm">Lunes a Viernes, 9:00 - 18:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-conest-darkGray mb-1">Email</h4>
                          <p className="text-conest-darkGray/80">info@conest.es</p>
                          <p className="text-conest-darkGray/60 text-sm">Respondemos en 24-48 horas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-conest-darkGray mb-1">Dirección</h4>
                          <p className="text-conest-darkGray/80">Calle Innovación, 123</p>
                          <p className="text-conest-darkGray/80">28001 Madrid, España</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <h4 className="font-semibold text-conest-darkGray mb-4">Síguenos en redes sociales</h4>
                      <div className="flex gap-3">
                        <Link href="https://twitter.com/conest" target="_blank" rel="noopener noreferrer">
                          <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </div>
                        </Link>
                        <Link href="https://facebook.com/conest" target="_blank" rel="noopener noreferrer">
                          <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </div>
                        </Link>
                        <Link href="https://instagram.com/conest" target="_blank" rel="noopener noreferrer">
                          <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </div>
                        </Link>
                        <Link href="https://linkedin.com/company/conest" target="_blank" rel="noopener noreferrer">
                          <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="bg-gradient-to-br from-conest-blue to-conest-mediumBlue rounded-2xl p-6 text-white"
                    style={{ animation: 'fadeIn 0.8s ease-out 0.5s both' }}
                  >
                    <h3 className="text-xl font-bold mb-3">Atención Prioritaria</h3>
                    <p className="mb-4 opacity-90">
                      Si eres miembro registrado de CoNest, contáctanos a través de la plataforma para recibir atención prioritaria.
                    </p>
                    <Link href="/login">
                      <Button 
                        className="bg-white text-conest-blue font-medium hover:bg-gray-100 transition-transform hover:scale-[1.02] duration-200"
                        size="md"
                        radius="full"
                      >
                        Acceder a mi cuenta
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-2xl shadow-soft overflow-hidden relative"
              style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}
            >
              <div className="w-full h-[400px] relative">
                <Image 
                  src="/images/map.jpg" 
                  alt="Ubicación de CoNest" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-medium p-5 max-w-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-conest-blue flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-conest-darkGray">Oficinas Centrales</h4>
                    <p className="text-conest-darkGray/80 text-sm">Calle Innovación, 123, 28001 Madrid</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Chip color="primary" variant="flat" size="sm">Metro: Innovación (L3)</Chip>
                  <Chip color="primary" variant="flat" size="sm">Bus: 45, 62</Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Teaser Section */}
      <section className="py-20 bg-gradient-to-br from-conest-lightBlue/30 to-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
            <div className="w-80 h-80 rounded-full bg-conest-blue/30 blur-3xl"></div>
          </div>
          <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
            <div className="w-80 h-80 rounded-full bg-conest-blue/30 blur-3xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-conest-darkGray">
              <span className="text-conest-blue">
                ¿Tienes más preguntas?
              </span>
            </h2>
            <p className="text-conest-darkGray/80 max-w-2xl mx-auto">
              Visita nuestra sección de preguntas frecuentes para encontrar respuestas a las consultas más comunes sobre nuestro servicio.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/como-funciona#faq">
              <Button 
                className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-3 px-6 rounded-xl shadow-soft transition-transform hover:scale-[1.02] duration-200"
                size="lg"
              >
                Ver Preguntas Frecuentes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      

    </div>
  );
}