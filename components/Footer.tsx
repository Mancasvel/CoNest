import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full md:w-auto">
            <h3 className="text-xl font-bold text-teal-800 mb-4">CoNest</h3>
            <p className="text-gray-600 max-w-xs">Conectando personas, creando hogares.</p>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-2">
              {['Sobre Nosotros', 'Preguntas Frecuentes', 'Contacto', 'Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-teal-800">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {['Términos de Servicio', 'Política de Privacidad', 'Cookies'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-teal-800">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6 w-full md:w-auto">
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-800">
                <FaTwitter size={24} />
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
