"use client"
import Link from "next/link"
import { Button } from "@heroui/react"

export default function ContactInfo() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-white shadow-soft rounded-2xl p-8 mb-6 flex-grow">
        <h3 className="text-xl font-bold mb-6 text-conest-darkGray">Información de Contacto</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-conest-darkGray mb-1">Email</h4>
              <p className="text-conest-darkGray/80">conesthome@gmail.com</p>
              <p className="text-conest-darkGray/60 text-sm">Respondemos en 24-48 horas</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-conest-blue/10 flex items-center justify-center text-conest-blue shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-conest-darkGray mb-1">Dirección</h4>
              <p className="text-conest-darkGray/80">Av. República Argentina, 25, planta 9</p>
              <p className="text-conest-darkGray/80">41011 Sevilla</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-semibold text-conest-darkGray mb-4">Síguenos en redes sociales</h4>
          <div className="flex gap-3">
            <Link href="https://instagram.com/conest_home" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/itsconest/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-conest-blue/10 rounded-full flex items-center justify-center text-conest-blue hover:bg-conest-blue hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
        style={{ animation: "fadeIn 0.8s ease-out 0.5s both" }}
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
  )
}

