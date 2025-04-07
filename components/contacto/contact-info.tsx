"use client"
import React from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdPersonPin } from "react-icons/md"
import Link from "next/link"
import { useState } from "react"

export default function ContactInfo() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  
  const contactItems = [
    {
      id: "phone",
      icon: <FaPhoneAlt className="text-conest-blue" />,
      title: "Teléfono",
      content: "+34 91 123 45 67",
      link: "tel:+34911234567"
    },
    {
      id: "email",
      icon: <FaEnvelope className="text-conest-blue" />,
      title: "Email",
      content: "conesthome@gmail.com",
      link: "mailto:conesthome@gmail.com"
    },
    {
      id: "address",
      icon: <FaMapMarkerAlt className="text-conest-blue" />,
      title: "Dirección",
      content: "Av. República Argentina, 25, planta 9, 41011 Sevilla",
      link: "https://maps.google.com/?q=Av.+República+Argentina,+25,+planta+9,+41011+Sevilla"
    }
  ]
  
  const socialLinks = [
    {
      id: "instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://instagram.com/conest_home",
      label: "Instagram",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: "linkedin",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: "https://www.linkedin.com/company/itsconest/",
      label: "LinkedIn",
      color: "bg-blue-600"
    }
  ]

  return (
    <div className="h-full">
      <div className="rounded-2xl bg-white/80 shadow-xl backdrop-blur-sm p-8 md:p-10 h-full flex flex-col">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-conest-darkGray mb-2">Información de contacto</h3>
          <p className="text-conest-darkGray/70">
            Encuentra toda la información para contactarnos
          </p>
        </div>
        
        <div className="space-y-8 mb-10 flex-grow">
          {contactItems.map((item) => (
            <a 
              key={item.id}
              href={item.link}
              className="flex items-start group"
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 mr-5 ${
                hoveredIcon === item.id 
                  ? "bg-conest-blue text-white scale-110 shadow-lg" 
                  : "bg-conest-blue/10 text-conest-blue"
              }`}>
                <div className={`transition-all duration-300 ${hoveredIcon === item.id ? "text-white" : "text-conest-blue"}`}>
                  {item.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-conest-darkGray mb-1">{item.title}</h4>
                <p className="text-conest-darkGray/70 group-hover:text-conest-blue transition-colors">{item.content}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h4 className="font-medium text-conest-darkGray mb-4">Síguenos en redes sociales</h4>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-conest-blue/10 to-conest-lightBlue/10 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <MdPersonPin className="w-6 h-6 text-conest-blue mr-2" />
              <h4 className="font-medium text-conest-darkGray">Asistencia prioritaria</h4>
            </div>
            <p className="text-sm text-conest-darkGray/70 mb-4">
              ¿Ya eres miembro? Inicia sesión para acceder a nuestra asistencia prioritaria y personalizada.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white font-medium text-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              Acceder a mi cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

