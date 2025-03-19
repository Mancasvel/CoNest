'use client';

import React, { useState } from "react";
import { Card, CardBody, Input, Textarea, Button, Select, SelectItem } from "@nextui-org/react";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      userType: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor completa todos los campos obligatorios");
      setIsSubmitting(false);
      return;
    }

    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Formulario enviado:", formData);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-700">Estamos aquí para ayudarte</h2>
            <p className="mb-8 text-lg">
              ¿Tienes alguna pregunta sobre CoNest o necesitas ayuda? No dudes en contactarnos. 
              Nuestro equipo estará encantado de asistirte en tu camino hacia una experiencia 
              de convivencia intergeneracional enriquecedora.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-teal-700">Dirección</h3>
                <p>Calle Innovación 28</p>
                <p>28001 Madrid, España</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-teal-700">Email</h3>
                <p>info@conest.es</p>
                <p>soporte@conest.es</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-teal-700">Teléfono</h3>
                <p>+34 911 234 567</p>
                <p>Lunes a Viernes, 9:00 - 18:00</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-teal-700">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-teal-700 hover:text-teal-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-teal-700 hover:text-teal-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-teal-700 hover:text-teal-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-teal-700 hover:text-teal-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div>
            <Card className="p-4">
              <CardBody>
                {submitted ? (
                  <div className="text-center py-8">
                    <svg className="w-16 h-16 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">¡Gracias por contactarnos!</h3>
                    <p className="text-gray-600 mb-6">Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
                    <Button 
                      color="primary" 
                      className="bg-teal-700 text-white"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          userType: "",
                          subject: "",
                          message: ""
                        });
                      }}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-6 text-teal-700">Envíanos un mensaje</h2>
                    
                    {error && (
                      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          label="Nombre completo"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="bordered"
                          color="primary"
                          isRequired
                          className="w-full"
                          classNames={{
                            input: "bg-white",
                            inputWrapper: "bg-white"
                          }}
                        />
                      </div>
                      
                      <div>
                        <Input
                          type="email"
                          label="Correo electrónico"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="bordered"
                          color="primary"
                          isRequired
                          className="w-full"
                          classNames={{
                            input: "bg-white",
                            inputWrapper: "bg-white"
                          }}
                        />
                      </div>
                      
                      <div>
                        <Select
                          label="¿Eres...?"
                          name="userType"
                          selectedKeys={formData.userType ? [formData.userType] : []}
                          onChange={(e) => handleSelectChange(e.target.value)}
                          variant="bordered"
                          color="primary"
                          className="w-full"
                          classNames={{
                            trigger: "bg-white",
                            value: "bg-white"
                          }}
                        >
                          <SelectItem key="elder" value="elder">Anfitrión (persona mayor)</SelectItem>
                          <SelectItem key="student" value="student">Estudiante</SelectItem>
                          <SelectItem key="other" value="other">Otro</SelectItem>
                        </Select>
                      </div>
                      
                      <div>
                        <Input
                          type="text"
                          label="Asunto"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="bordered"
                          color="primary"
                          className="w-full"
                          classNames={{
                            input: "bg-white",
                            inputWrapper: "bg-white"
                          }}
                        />
                      </div>
                      
                      <div>
                        <Textarea
                          label="Mensaje"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="bordered"
                          color="primary"
                          isRequired
                          minRows={4}
                          className="w-full"
                          classNames={{
                            input: "bg-white",
                            inputWrapper: "bg-white"
                          }}
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          color="primary" 
                          className="w-full bg-teal-700 text-white"
                          isLoading={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
        
        {/* Sección de mapa */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-teal-700">Encuéntranos</h2>
          <div className="border rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.985149471393!2d-3.7096573302246036!3d40.420867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df15%3A0x5671981542e6c76a!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1648126283465!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Sección final CTA */}
        <div className="bg-gray-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-teal-700">¿Buscando más formas de conectar?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Además de nuestro formulario de contacto, ofrecemos sesiones informativas 
            semanales donde puedes obtener más información sobre cómo funciona CoNest 
            y hacer preguntas en tiempo real.
          </p>
          <Button 
            color="primary" 
            className="bg-teal-700 text-white"
            size="lg"
            as="a" 
            href="#"
          >
            Inscríbete a una sesión informativa
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 