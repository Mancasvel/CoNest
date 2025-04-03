import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full md:w-auto">
            <h3 className="text-xl font-bold text-teal-800 mb-4">CoNest</h3>
            <p className="text-gray-600 max-w-xs">Un hogar, dos generaciones, un proposito.</p>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-600 hover:text-teal-800">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-gray-600 hover:text-teal-800">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-teal-800">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-teal-800">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos-de-servicio" className="text-gray-600 hover:text-teal-800">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-gray-600 hover:text-teal-800">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-teal-800">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/conest_home" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-800">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/itsconest/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} CoNest. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
