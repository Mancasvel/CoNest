'use client';

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection_1';

export default function PoliticaPrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Política de Privacidad"
        subtitle="Compromiso con tu privacidad"
        description="Conoce cómo CoNest protege y gestiona tus datos personales, respetando tu privacidad y cumpliendo con la legislación vigente."
        primaryButtonText="Contactar con DPO"
        primaryButtonUrl="/contacto"
        secondaryButtonText="Términos de servicio"
        secondaryButtonUrl="/terminos-de-servicio"
        imageSrc="/images/privacy.jpg"
        imageAlt="Política de privacidad de CoNest"
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
                  En CoNest nos tomamos muy en serio la protección de tus datos personales. Esta Política de Privacidad 
                  explica cómo recopilamos, utilizamos, compartimos y protegemos la información que nos proporcionas 
                  al utilizar nuestra plataforma y servicios.
                </p>
                <p>
                  Al acceder o utilizar CoNest, aceptas las prácticas descritas en esta Política de Privacidad. 
                  Si no estás de acuerdo con esta política, te rogamos que no utilices nuestros servicios.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">2. Información que Recopilamos</h2>
                <p>
                  Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">2.1 Información que nos proporcionas directamente</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Información de registro:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono, fecha de nacimiento.</li>
                  <li><strong>Información de perfil:</strong> Fotografía, biografía, intereses, preferencias, historial académico o profesional.</li>
                  <li><strong>Información de vivienda:</strong> Para anfitriones, detalles sobre la vivienda, ubicación, características, fotografías, precio.</li>
                  <li><strong>Información de verificación:</strong> Documentos de identidad, comprobantes de domicilio, certificados académicos.</li>
                  <li><strong>Comunicaciones:</strong> Contenido de mensajes enviados a través de nuestra plataforma, respuestas a encuestas, solicitudes de atención al cliente.</li>
                  <li><strong>Información de pago:</strong> Datos de tarjetas de crédito o débito, información de cuentas bancarias.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">2.2 Información que recopilamos automáticamente</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo, identificadores únicos, configuración de red.</li>
                  <li><strong>Información de uso:</strong> Páginas visitadas, tiempo de permanencia, interacciones, patrones de búsqueda, frecuencia de uso.</li>
                  <li><strong>Información de ubicación:</strong> Ubicación geográfica a través de GPS, WiFi o triangulación de red celular (si lo permites).</li>
                  <li><strong>Cookies y tecnologías similares:</strong> Datos recopilados mediante cookies, píxeles, balizas web y otras tecnologías.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">2.3 Información de terceros</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Redes sociales:</strong> Si te conectas a través de redes sociales, podemos recibir información de tu perfil.</li>
                  <li><strong>Referencias:</strong> Información proporcionada por otros usuarios sobre ti (por ejemplo, reseñas o referencias).</li>
                  <li><strong>Proveedores de servicios:</strong> Información de verificación de identidad, verificaciones de antecedentes, informes crediticios.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">3. Cómo Utilizamos Tu Información</h2>
                <p>
                  Utilizamos la información recopilada para los siguientes fines:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Proporcionar nuestros servicios:</strong> Facilitar la conexión entre anfitriones y huéspedes, procesar transacciones, gestionar cuentas de usuario.</li>
                  <li><strong>Personalizar la experiencia:</strong> Adaptar el contenido a tus preferencias, recomendar opciones relevantes, mostrar información personalizada.</li>
                  <li><strong>Comunicación:</strong> Enviarte notificaciones, actualizaciones, alertas de seguridad, mensajes de apoyo y promocionales.</li>
                  <li><strong>Mejora del servicio:</strong> Analizar el uso de la plataforma, resolver problemas, desarrollar nuevas funciones, realizar investigaciones.</li>
                  <li><strong>Seguridad:</strong> Verificar identidades, prevenir fraudes, proteger la seguridad de usuarios y datos, resolver disputas.</li>
                  <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales, hacer valer nuestros términos, proteger nuestros derechos.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">4. Compartición de Información</h2>
                <p>
                  Podemos compartir tu información en las siguientes circunstancias:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.1 Con otros usuarios</h3>
                <p>
                  Compartimos información entre anfitriones y huéspedes para facilitar la conexión y el proceso de convivencia:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Información de perfil y fotografías.</li>
                  <li>Información de contacto (una vez establecida la coincidencia).</li>
                  <li>Reseñas y valoraciones.</li>
                  <li>Mensajes y comunicaciones entre usuarios.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.2 Con proveedores de servicios</h3>
                <p>
                  Compartimos información con terceros que nos ayudan a proporcionar y mejorar nuestros servicios:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Proveedores de verificación de identidad y antecedentes.</li>
                  <li>Procesadores de pago.</li>
                  <li>Proveedores de servicios de alojamiento y tecnología en la nube.</li>
                  <li>Servicios de atención al cliente.</li>
                  <li>Servicios de análisis y marketing.</li>
                </ul>
                <p>
                  Estos proveedores están obligados a proteger tu información y utilizarla únicamente para los fines específicos que les indicamos.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-conest-darkGray">4.3 Por motivos legales</h3>
                <p>
                  Podemos divulgar información cuando creemos de buena fe que es necesario:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cumplir con leyes, regulaciones o procesos legales.</li>
                  <li>Proteger los derechos, propiedad o seguridad de CoNest, nuestros usuarios u otros.</li>
                  <li>Detectar, investigar y prevenir actividades fraudulentas o ilegales.</li>
                  <li>Responder a solicitudes gubernamentales, incluyendo autoridades policiales.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">5. Tus Derechos y Opciones</h2>
                <p>
                  Dependiendo de tu ubicación, puedes tener algunos o todos los siguientes derechos con respecto a tus datos personales:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti.</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos en determinadas circunstancias.</li>
                  <li><strong>Restricción:</strong> Limitar el procesamiento de tus datos en determinadas circunstancias.</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y transferirlos a otro proveedor.</li>
                  <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos para marketing directo u otros fines legítimos.</li>
                  <li><strong>Retirada del consentimiento:</strong> Retirar cualquier consentimiento que hayas proporcionado previamente.</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puedes contactarnos a través de los medios especificados en la sección "Contacto".
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">6. Seguridad de Datos</h2>
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra 
                  acceso no autorizado, pérdida, alteración o destrucción. Estas medidas incluyen:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Encriptación de datos sensibles.</li>
                  <li>Acceso restringido a datos personales por empleados.</li>
                  <li>Sistemas de detección y prevención de intrusiones.</li>
                  <li>Auditorías regulares de seguridad.</li>
                  <li>Planes de respuesta a incidentes.</li>
                </ul>
                <p>
                  Sin embargo, ningún sistema de seguridad es completamente impenetrable y no podemos garantizar la 
                  seguridad absoluta de tu información. Te recomendamos mantener tu cuenta segura utilizando contraseñas 
                  fuertes y no compartiendo tus credenciales de acceso.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">7. Conservación de Datos</h2>
                <p>
                  Conservamos tus datos personales durante el tiempo necesario para los fines descritos en esta Política 
                  de Privacidad, a menos que se requiera o permita un período de retención más largo por ley.
                </p>
                <p>
                  Los criterios utilizados para determinar nuestros períodos de retención incluyen:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>El tiempo que mantengas una cuenta activa con nosotros.</li>
                  <li>Obligaciones legales o contractuales que requieran la retención de datos.</li>
                  <li>Resolución de disputas, reclamos o investigaciones.</li>
                  <li>Protección contra fraudes, abusos y usuarios malintencionados.</li>
                </ul>
                <p>
                  Al cerrar tu cuenta, eliminaremos o anonimizaremos tus datos personales, excepto cuando sea necesario 
                  mantenerlos por razones legales, de seguridad o de prevención de fraudes.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">8. Transferencias Internacionales</h2>
                <p>
                  CoNest opera principalmente en España, pero algunos de nuestros proveedores de servicios pueden estar 
                  ubicados en otros países. Esto significa que tus datos pueden ser procesados en países donde las 
                  leyes de protección de datos pueden ser diferentes a las de tu país de residencia.
                </p>
                <p>
                  En tales casos, tomamos medidas para garantizar que tus datos reciban un nivel adecuado de protección, 
                  como implementar cláusulas contractuales estándar aprobadas por la Comisión Europea o utilizar 
                  mecanismos de certificación como el Privacy Shield.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">9. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas 
                  o por otros motivos operativos, legales o regulatorios. Te notificaremos cualquier cambio material 
                  a través de un aviso prominente en nuestra plataforma o mediante correo electrónico.
                </p>
                <p>
                  Te recomendamos revisar esta política regularmente para estar informado sobre cómo protegemos tu información.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-conest-darkGray">10. Contacto</h2>
                <p>
                  Si tienes preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o el 
                  procesamiento de tus datos personales, puedes contactarnos a través de:
                </p>
                <ul className="list-none pl-0 mb-4">
                  <li><strong>Correo electrónico:</strong> conesthome@gmail.com</li>
                  <li><strong>Dirección postal:</strong> Av. República Argentina, 25, planta 9, 41011, Sevilla, España</li>
                </ul>
                <p>
                  También tienes derecho a presentar una reclamación ante una autoridad de protección de datos si 
                  consideras que el procesamiento de tus datos personales infringe las leyes aplicables.
                </p>
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