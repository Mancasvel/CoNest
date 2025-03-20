"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-teal-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          CoNest
        </Link>

        {/* Menú en Desktop */}
        <div className="hidden lg:flex space-x-6">
          {["Como funciona", "Sobre Nosotros", "Contacto"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white hover:text-yellow-300 transition-colors mt-3">
              {item}
            </Link>
          ))}
          <Button
            as="a"
            href="/sign-in"
            color="warning"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Iniciar sesión
          </Button>
          <Button
            as="a"
            href="/sign-up"
            color="warning"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Registrarse
          </Button>
        </div>

        {/* Botón de menú móvil */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-teal-800 shadow-md"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["Como funciona", "Sobre Nosotros", "Contacto"].map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white text-lg hover:text-yellow-300 transition-colors">
                  {item}
                </Link>
              ))}
              <Button
                as="a"
                href="/sign-in"
                color="warning"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md w-4/5 text-center"
              >
                Iniciar sesión
              </Button>
              <Button
            as="a"
            href="/sign-up"
            color="warning"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Registrarse
          </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
