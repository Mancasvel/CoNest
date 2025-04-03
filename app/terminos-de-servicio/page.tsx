'use client';

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection_1';

export default function TerminosDeServicioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Términos de Servicio"
        subtitle="Condiciones legales de uso"
        description="Lea atentamente los términos y condiciones que rigen el uso de la plataforma CoNest y todos sus servicios asociados."
        primaryButtonText="Contactar con soporte"
        primaryButtonUrl="/contacto"
        secondaryButtonText="Políticas de privacidad"
        secondaryButtonUrl="/politica-de-privacidad"
        imageSrc="/images/terminos_servicio.jpg"
        imageAlt="Términos de servicio de CoNest"
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
                <h2 className="text-2xl font-bold mb-4 text-conest-darkGray">1. Introducción</h2>
                <p>
                  Bienvenido a CoNest. Estos Términos de Servicio ("Términos") rigen su acceso y uso de la plataforma CoNest, 
                  incluido nuestro sitio web, aplicaciones móviles, y servicios relacionados (colectivamente, "Servicios"), 
                  así como cualquier información, texto, gráficos, fotos u otros materiales cargados, descargados o que 
                  aparezcan en los Servicios (colectivamente, "Contenido").
                </p>
                <p>
                  Al acceder o utilizar nuestros Servicios, usted acepta estar sujeto a estos Términos. Si no está de 
                  acuerdo con estos Términos, no debe acceder ni utilizar nuestros Servicios.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">2. Servicios Ofrecidos</h2>
                <p>
                  CoNest es una plataforma que conecta a personas mayores que disponen de espacio en sus hogares 
                  (en adelante, "Anfitriones") con estudiantes que buscan alojamiento (en adelante, "Huéspedes"). 
                  Nuestros Servicios incluyen, pero no se limitan a:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Facilitar la creación de perfiles para Anfitriones y Huéspedes.</li>
                  <li>Permitir que los Anfitriones publiquen listados de habitaciones disponibles.</li>
                  <li>Permitir que los Huéspedes busquen y soliciten alojamiento.</li>
                  <li>Facilitar la comunicación entre Anfitriones y Huéspedes.</li>
                  <li>Ofrecer servicios de verificación y mediación.</li>
                  <li>Proporcionar herramientas para gestionar los procesos de convivencia.</li>
                </ul>
                <p>
                  CoNest actúa únicamente como intermediario y no es parte en ningún acuerdo entre Anfitriones y Huéspedes, 
                  ni es una agencia inmobiliaria o corredor de bienes raíces.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">3. Elegibilidad y Registro</h2>
                <p>
                  Para utilizar nuestros Servicios, usted debe:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Tener al menos 18 años de edad.</li>
                  <li>Ser capaz de celebrar contratos legalmente vinculantes.</li>
                  <li>Cumplir con los requisitos específicos para Anfitriones (tener al menos 60 años) o Huéspedes (ser estudiante universitario o de formación superior).</li>
                  <li>Completar el proceso de verificación requerido.</li>
                </ul>
                <p>
                  Al registrarse, acepta proporcionar información precisa, actual y completa y mantener esta información 
                  actualizada. Usted es responsable de mantener la confidencialidad de su contraseña y cuenta, y 
                  es plenamente responsable de todas las actividades que ocurran bajo su cuenta.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">4. Responsabilidades del Usuario</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.1 Responsabilidades Generales</h3>
                <p>
                  Todos los usuarios se comprometen a:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Proporcionar información veraz y completa durante el registro y en todas las comunicaciones.</li>
                  <li>Actuar con respeto y cortesía hacia otros usuarios.</li>
                  <li>Respetar la privacidad de otros usuarios.</li>
                  <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
                  <li>No utilizar la plataforma para actividades ilegales o fraudulentas.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.2 Responsabilidades de los Anfitriones</h3>
                <p>
                  Los Anfitriones se comprometen a:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Proporcionar información precisa y completa sobre su vivienda y las condiciones ofrecidas.</li>
                  <li>Asegurar que su vivienda cumple con todas las leyes y regulaciones de seguridad e higiene.</li>
                  <li>Respetar las condiciones acordadas con los Huéspedes.</li>
                  <li>Mantener un ambiente respetuoso y seguro dentro de la vivienda.</li>
                  <li>Notificar cualquier incidencia a CoNest de manera oportuna.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.3 Responsabilidades de los Huéspedes</h3>
                <p>
                  Los Huéspedes se comprometen a:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Proporcionar información precisa sobre sí mismos y su situación académica.</li>
                  <li>Respetar las normas de convivencia establecidas por el Anfitrión.</li>
                  <li>Cuidar adecuadamente el espacio y las instalaciones proporcionadas.</li>
                  <li>Realizar los pagos acordados en tiempo y forma.</li>
                  <li>Mantener un comportamiento respetuoso hacia el Anfitrión y otros residentes.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">5. Política de Pagos y Tarifas</h2>
                <p>
                  CoNest cobra una tarifa de servicio por facilitar la conexión entre Anfitriones y Huéspedes. Esta tarifa 
                  se calcula como un porcentaje del monto acordado entre las partes y se detalla claramente antes 
                  de formalizar cualquier acuerdo.
                </p>
                <p>
                  Los pagos entre Anfitriones y Huéspedes se realizan a través de nuestra plataforma, que utiliza 
                  métodos de pago seguros. Los usuarios aceptan no realizar acuerdos de pago fuera de la plataforma, 
                  ya que esto compromete la seguridad de la transacción y la capacidad de CoNest para mediar en caso de conflicto.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">6. Política de Cancelación</h2>
                <p>
                  Las políticas de cancelación varían según el tipo de acuerdo y se especifican claramente antes de confirmar 
                  cualquier reserva. En general, se establecen períodos de antelación mínima para las cancelaciones y 
                  posibles penalizaciones, dependiendo del momento en que se realice la cancelación.
                </p>
                <p>
                  En caso de circunstancias excepcionales (emergencias médicas, cambios en la situación académica, etc.), 
                  CoNest evaluará cada caso individualmente para determinar las condiciones de cancelación aplicables.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">7. Limitación de Responsabilidad</h2>
                <p>
                  CoNest facilita la conexión entre Anfitriones y Huéspedes, pero no es parte en los acuerdos establecidos 
                  entre ellos. CoNest no garantiza la exactitud de los perfiles de usuario, la calidad de las viviendas 
                  o el comportamiento de los usuarios.
                </p>
                <p>
                  Si bien CoNest implementa medidas de verificación, no podemos garantizar completamente la veracidad de 
                  la información proporcionada por los usuarios. Los usuarios utilizan los Servicios bajo su propio riesgo.
                </p>
                <p>
                  En la medida máxima permitida por la ley, CoNest no será responsable por ningún daño indirecto, 
                  incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">8. Modificaciones a los Términos</h2>
                <p>
                  CoNest puede modificar estos Términos en cualquier momento publicando los términos modificados en nuestra plataforma. 
                  Los cambios entrarán en vigor inmediatamente después de su publicación, o en la fecha posterior especificada 
                  en los términos modificados.
                </p>
                <p>
                  El uso continuado de nuestros Servicios después de la publicación de los términos modificados constituye 
                  la aceptación de dichos cambios. Es responsabilidad del usuario revisar periódicamente estos Términos.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">9. Ley Aplicable y Jurisdicción</h2>
                <p>
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin dar efecto a cualquier 
                  principio de conflicto de leyes. Cualquier disputa relacionada con estos Términos será sometida a la 
                  jurisdicción exclusiva de los tribunales de Madrid, España.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">10. Contacto</h2>
                <p>
                  Si tiene alguna pregunta sobre estos Términos, puede contactarnos a través de:
                </p>
                <ul className="list-none pl-0 mb-4">
                  <li><strong>Correo electrónico:</strong> conesthome@gmail.com</li>
                  <li><strong>Dirección postal:</strong> Av. República Argentina, 25, planta 9, 41011, Sevilla, España</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <Link 
                href="/politica-de-privacidad" 
                className="text-conest-blue font-medium hover:text-conest-mediumBlue"
              >
                Política de Privacidad
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/cookies" 
                className="text-conest-blue font-medium hover:text-conest-mediumBlue"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 