'use client';

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection_1';

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Política de Cookies"
        subtitle="Transparencia y control"
        description="Conoce cómo CoNest utiliza cookies y tecnologías similares para mejorar tu experiencia en nuestra plataforma."
        primaryButtonText="Ajustar preferencias"
        primaryButtonUrl="#cookie-preferences"
        secondaryButtonText="Política de privacidad"
        secondaryButtonUrl="/politica-de-privacidad"
        imageSrc="/images/cookies.jpg"
        imageAlt="Política de cookies de CoNest"
        badge="Legal"
      />
      
      {/* Content Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-medium rounded-2xl p-8 mb-12">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <p className="text-conest-darkGray/70 mb-1">Última actualización:</p>
                <p className="font-medium">1 de julio de 2024</p>
              </div>
              
              <div className="prose prose-lg max-w-none text-conest-darkGray/90">
                <h2 className="text-2xl font-bold mb-4 text-conest-darkGray">¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, teléfono 
                  móvil o tablet) cuando visitas páginas web. Se utilizan ampliamente para hacer que los sitios web 
                  funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                </p>
                <p>
                  Las cookies permiten reconocer tu dispositivo y recordar información sobre tu visita, como tus 
                  preferencias de idioma, configuración de visualización y otras opciones. Esto hace que tu experiencia 
                  sea más fácil y personalizada cuando regresas a nuestra plataforma.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">Tipos de cookies que utilizamos</h2>
                <p>
                  En CoNest utilizamos diferentes tipos de cookies para distintos propósitos:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">1. Cookies necesarias o esenciales</h3>
                <p>
                  Estas cookies son imprescindibles para el funcionamiento de nuestra plataforma. Te permiten navegar 
                  por el sitio y utilizar funciones esenciales como áreas seguras, carrito de compras o facturación 
                  electrónica. Sin estas cookies, muchos de nuestros servicios no estarían disponibles.
                </p>
                <table className="w-full border-collapse mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left">Nombre</th>
                      <th className="border border-gray-200 p-2 text-left">Propósito</th>
                      <th className="border border-gray-200 p-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2">session_id</td>
                      <td className="border border-gray-200 p-2">Mantiene tu sesión activa mientras utilizas la plataforma</td>
                      <td className="border border-gray-200 p-2">Sesión</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">auth_token</td>
                      <td className="border border-gray-200 p-2">Gestiona tu autenticación en el sistema</td>
                      <td className="border border-gray-200 p-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">csrf_token</td>
                      <td className="border border-gray-200 p-2">Protege contra ataques de falsificación de solicitudes entre sitios</td>
                      <td className="border border-gray-200 p-2">Sesión</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">2. Cookies de preferencias</h3>
                <p>
                  Estas cookies permiten que nuestro sitio web recuerde información que cambia la forma en que se 
                  comporta o se ve la página, como tu idioma preferido o la región en la que te encuentras.
                </p>
                <table className="w-full border-collapse mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left">Nombre</th>
                      <th className="border border-gray-200 p-2 text-left">Propósito</th>
                      <th className="border border-gray-200 p-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2">language</td>
                      <td className="border border-gray-200 p-2">Guarda tu preferencia de idioma</td>
                      <td className="border border-gray-200 p-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">region</td>
                      <td className="border border-gray-200 p-2">Recuerda tu ubicación para mostrar contenido relevante</td>
                      <td className="border border-gray-200 p-2">6 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">theme</td>
                      <td className="border border-gray-200 p-2">Almacena tu preferencia de tema (claro/oscuro)</td>
                      <td className="border border-gray-200 p-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">3. Cookies estadísticas o analíticas</h3>
                <p>
                  Estas cookies nos ayudan a comprender cómo los visitantes interactúan con nuestra plataforma, recopilando 
                  y reportando información de forma anónima. Nos permiten mejorar la forma en que funciona nuestro sitio.
                </p>
                <table className="w-full border-collapse mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left">Nombre</th>
                      <th className="border border-gray-200 p-2 text-left">Propósito</th>
                      <th className="border border-gray-200 p-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2">_ga</td>
                      <td className="border border-gray-200 p-2">Registra un ID único utilizado para generar datos estadísticos sobre el uso del sitio (Google Analytics)</td>
                      <td className="border border-gray-200 p-2">2 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">_gid</td>
                      <td className="border border-gray-200 p-2">Registra un ID único utilizado para generar datos estadísticos sobre el uso del sitio (Google Analytics)</td>
                      <td className="border border-gray-200 p-2">24 horas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">_gat</td>
                      <td className="border border-gray-200 p-2">Limita la frecuencia de las solicitudes a Google Analytics</td>
                      <td className="border border-gray-200 p-2">1 minuto</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4. Cookies de marketing</h3>
                <p>
                  Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar 
                  anuncios que sean relevantes y atractivos para el usuario individual, y por lo tanto más valiosos 
                  para los editores y anunciantes externos.
                </p>
                <table className="w-full border-collapse mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-2 text-left">Nombre</th>
                      <th className="border border-gray-200 p-2 text-left">Propósito</th>
                      <th className="border border-gray-200 p-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2">_fbp</td>
                      <td className="border border-gray-200 p-2">Utilizado por Facebook para ofrecer una serie de productos publicitarios</td>
                      <td className="border border-gray-200 p-2">3 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">_gcl_au</td>
                      <td className="border border-gray-200 p-2">Utilizado por Google AdSense para experimentar con la eficiencia publicitaria</td>
                      <td className="border border-gray-200 p-2">3 meses</td>
                    </tr>
                  </tbody>
                </table>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">Cookies de terceros</h2>
                <p>
                  Además de nuestras propias cookies, también permitimos a terceros colocar cookies en tu dispositivo 
                  cuando visitas nuestra plataforma. Estos terceros incluyen:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Proveedores de análisis:</strong> Como Google Analytics, que nos ayudan a entender cómo se utiliza nuestro sitio.</li>
                  <li><strong>Redes sociales:</strong> Como Facebook, Twitter o LinkedIn, que permiten compartir contenido o usar sus funciones de inicio de sesión.</li>
                  <li><strong>Proveedores de publicidad:</strong> Que pueden utilizar cookies para mostrarte anuncios relevantes en otros sitios que visites.</li>
                </ul>
                <p>
                  Estos terceros tienen sus propias políticas de privacidad y pueden usar las cookies para sus propios fines.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray" id="cookie-preferences">Gestión de tus preferencias de cookies</h2>
                <p>
                  Puedes gestionar tus preferencias de cookies de varias maneras:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">A través de nuestro banner de cookies</h3>
                <p>
                  Cuando visitas nuestra plataforma por primera vez, verás un banner de cookies que te permite aceptar 
                  o rechazar diferentes categorías de cookies. Puedes cambiar tus preferencias en cualquier momento 
                  haciendo clic en el enlace "Preferencias de cookies" en el pie de página de nuestro sitio.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">A través de la configuración de tu navegador</h3>
                <p>
                  La mayoría de los navegadores te permiten ver y borrar las cookies almacenadas, así como rechazar nuevas cookies:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos del sitio web</li>
                  <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
                <p>
                  Ten en cuenta que la desactivación de las cookies puede afectar a la funcionalidad de nuestro sitio 
                  y limitar tu capacidad para utilizar ciertas características.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">Cambios en nuestra política de cookies</h2>
                <p>
                  Podemos actualizar esta política de cookies periódicamente para reflejar cambios en nuestras prácticas o 
                  por razones operativas, legales o regulatorias. Te recomendamos revisar esta política regularmente para 
                  estar informado sobre cómo utilizamos las cookies.
                </p>
                <p>
                  Cuando realicemos cambios importantes en esta política, te notificaremos a través de un aviso prominente 
                  en nuestra plataforma o mediante un correo electrónico.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">Contacto</h2>
                <p>
                  Si tienes preguntas o comentarios sobre nuestra política de cookies, puedes contactarnos a través de:
                </p>
                <ul className="list-none pl-0 mb-4">
                  <li><strong>Correo electrónico:</strong> conesthome@gmail.com</li>
                  <li><strong>Dirección postal:</strong> Av. República Argentina, 25, planta 9, 41011, Sevilla, España</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <Link 
                href="/terminos-de-servicio" 
                className="text-conest-blue font-medium hover:text-conest-mediumBlue"
              >
                Términos de Servicio
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/politica-de-privacidad" 
                className="text-conest-blue font-medium hover:text-conest-mediumBlue"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 