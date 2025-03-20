'use client';

import React, { useState, useEffect } from "react";
import { Input, Button, Textarea, Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import NavbarTerracota from "../components/Navbar";

interface FormData {
  name: string;
  email: string;
  userType: string;
  subject: string;
  message: string;
}

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    userType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado con éxito");
    console.log(formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavbarTerracota />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-800">
              Contacta con <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">CoNest</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Estamos aquí para resolver tus dudas y ayudarte con cualquier consulta sobre 
              nuestro programa de convivencia intergeneracional.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full mt-2 mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden fade-in-up-delay">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">
                Envíanos un mensaje
              </span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-field fade-in-right" style={{ animationDelay: "0.1s" }}>
                  <Input
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    classNames={{
                      input: "bg-white text-gray-800",
                      inputWrapper: "bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-all",
                      label: "text-gray-700"
                    }}
                  />
                </div>
                <div className="form-field fade-in-right" style={{ animationDelay: "0.2s" }}>
                  <Input
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    fullWidth
                    classNames={{
                      input: "bg-white text-gray-800",
                      inputWrapper: "bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-all",
                      label: "text-gray-700"
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-field fade-in-right" style={{ animationDelay: "0.3s" }}>
                  <Select
                    label="¿Eres anfitrión o estudiante?"
                    name="userType"
                    onChange={(e) => setFormData({...formData, userType: e.target.value})}
                    fullWidth
                    classNames={{
                      trigger: "bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-all",
                      label: "text-gray-700",
                      listbox: "bg-white text-gray-800 border border-gray-200"
                    }}
                  >
                    <SelectItem key="host" value="host">Anfitrión</SelectItem>
                    <SelectItem key="student" value="student">Estudiante</SelectItem>
                    <SelectItem key="other" value="other">Otro</SelectItem>
                  </Select>
                </div>
                <div className="form-field fade-in-right" style={{ animationDelay: "0.4s" }}>
                  <Input
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                    classNames={{
                      input: "bg-white text-gray-800",
                      inputWrapper: "bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-all",
                      label: "text-gray-700"
                    }}
                  />
                </div>
              </div>
              <div className="mb-6 form-field fade-in-right" style={{ animationDelay: "0.5s" }}>
                <Textarea
                  label="Mensaje"
                  placeholder="Escribe tu mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  fullWidth
                  classNames={{
                    input: "bg-white text-gray-800",
                    inputWrapper: "bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-all",
                    label: "text-gray-700"
                  }}
                />
              </div>
              <div className="text-center fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Button 
                  type="submit" 
                  size="lg"
                  className="relative bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/20 hover:shadow-xl overflow-hidden group"
                >
                  <span className="relative z-10">Enviar Mensaje</span>
                  <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-teal-400/50 to-teal-600/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border border-gray-100 info-card">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  <span>📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Teléfono</h3>
                <p className="text-gray-600">+34 91 123 45 67</p>
                <p className="text-gray-600">Lun-Vie: 9:00 - 18:00</p>
              </CardBody>
            </Card>
            
            <Card className="bg-white shadow-md border border-gray-100 info-card" style={{ animationDelay: "0.2s" }}>
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  <span>✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">Email</h3>
                <p className="text-gray-600">info@conest.es</p>
                <p className="text-gray-600">soporte@conest.es</p>
              </CardBody>
            </Card>
            
            <Card className="bg-white shadow-md border border-gray-100 info-card" style={{ animationDelay: "0.4s" }}>
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                  <span>🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Dirección</h3>
                <p className="text-gray-600">Calle Innovación, 42</p>
                <p className="text-gray-600">28001 Madrid, España</p>
              </CardBody>
            </Card>
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

        .fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.5s forwards;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Animaciones para las tarjetas de información */
        .info-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
      `}</style>
    </div>
  );
} 