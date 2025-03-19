"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Asegúrate de importar desde framer-motion

interface HeroProps {
  text: string; // El valor del texto se pasa como prop
  duration?: number;
}

const Hero: React.FC<HeroProps> = ({ text, duration = 0.5 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center w-full h-[100px] text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Texto con gradiente de fondo */}
      <motion.div
        className="absolute text-7xl font-bold text-transparent"
        style={{
          background: hovered
            ? "linear-gradient(to right, #eab308, #ef4444, #3b82f6, #06b6d4, #8b5cf6)"
            : "transparent",
          WebkitBackgroundClip: "text", // Hace que el gradiente se vea solo en el texto
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration, ease: "easeOut" }}
      >
        {text} {/* Aquí se coloca el valor dinámico del texto */}
      </motion.div>

      {/* Texto con contorno */}
      <motion.div
        className="absolute text-7xl font-bold"
        style={{
          color: "transparent", // Hace el texto transparente
          WebkitTextStroke: "2px black", // Efecto de contorno
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.7 : 1 }}
        transition={{ duration, ease: "easeOut" }}
      >
        {text} {/* Aquí también se coloca el valor dinámico del texto */}
      </motion.div>

      {/* Texto normal (sin animación, solo visible por defecto) */}
      <motion.div
        className="absolute text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration, ease: "easeOut" }}
      >
        {text} {/* Y aquí también se coloca el valor dinámico del texto */}
      </motion.div>
    </div>
  );
};

export default Hero;
