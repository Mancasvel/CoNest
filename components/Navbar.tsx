// src/app/components/Navbar.tsx

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaBars, FaTimes } from "react-icons/fa";  // Para el ícono de menú

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-teal-800 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-white">CoNest</a>
        </Link>

        {/* Menú móvil */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú de navegación para escritorio */}
        <div className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="/">
            <a className="text-white hover:text-teal-200">Inicio</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-teal-200">Sobre Nosotros</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-teal-200">Contacto</a>
          </Link>
          <Link href="/blog">
            <a className="text-white hover:text-teal-200">Blog</a>
          </Link>

          {/* Botón de acción (Iniciar sesión) */}
          <Button
            as="a"
            href="/sign-in"
            color="warning"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-teal-800 p-4`}>
        <Link href="/">
          <a className="text-white block mb-2">Inicio</a>
        </Link>
        <Link href="/about">
          <a className="text-white block mb-2">Sobre Nosotros</a>
        </Link>
        <Link href="/contact">
          <a className="text-white block mb-2">Contacto</a>
        </Link>
        <Link href="/blog">
          <a className="text-white block mb-2">Blog</a>
        </Link>

        {/* Botón de acción */}
        <Button
          as="a"
          href="/sign-in"
          color="warning"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md mt-4 w-full"
        >
          Iniciar sesión
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
