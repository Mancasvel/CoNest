"use client"
import { FaMapMarkerAlt, FaClock, FaBusAlt, FaSubway } from "react-icons/fa"

export default function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-conest-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-conest-lightBlue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-conest-darkGray mb-4">
            Nuestra Oficina Central
          </h2>
          <p className="text-conest-darkGray/70 leading-relaxed">
            Visítanos en nuestra oficina principal para conocer a nuestro equipo y saber más sobre cómo 
            CoNest está transformando la experiencia de alojamiento intergeneracional.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 h-[400px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2299797905354!2d-5.99104842378188!3d37.38648603555752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114b3e10d%3A0x4f2c44de93075ec!2sAv.%20de%20la%20Rep%C3%BAblica%20Argentina%2C%2025%2C%2041011%20Sevilla!5e0!3m2!1ses!2ses!4v1669988894955!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la oficina de CoNest"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <div className="md:col-span-2 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-conest-darkGray flex items-center">
                    <FaMapMarkerAlt className="text-conest-blue mr-2" /> Dirección
                  </h3>
                  <p className="mt-2 ml-7 text-conest-darkGray/80 leading-relaxed">
                    Av. República Argentina, 25<br />
                    Planta 9<br />
                    41011 Sevilla, España
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-conest-darkGray flex items-center">
                    <FaClock className="text-conest-blue mr-2" /> Horario
                  </h3>
                  <ul className="mt-2 ml-7 space-y-1 text-conest-darkGray/80">
                    <li className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado:</span>
                      <span>10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Cerrado</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-conest-darkGray flex items-center">
                    <FaBusAlt className="text-conest-blue mr-2" /> Transporte
                  </h3>
                  <ul className="mt-2 ml-7 space-y-1 text-conest-darkGray/80">
                    <li className="flex items-center">
                      <FaBusAlt className="text-conest-blue/70 mr-2 text-sm" />
                      <span>Líneas de autobús: C1, C2, 5, 6</span>
                    </li>
                    <li className="flex items-center">
                      <FaSubway className="text-conest-blue/70 mr-2 text-sm" />
                      <span>Metro: L1 (República Argentina)</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Av+República+Argentina+25+Sevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaMapMarkerAlt className="mr-2" /> Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

