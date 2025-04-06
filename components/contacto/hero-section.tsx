"use client"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-conest-blue/90 to-conest-mediumBlue/80"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-20 -z-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl -z-5"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white mb-6 shadow-glow animate-pulse-slow"
            style={{ animation: "fadeIn 0.8s ease-out" }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Estamos Aquí Para Ti
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight"
            style={{ animation: "fadeIn 0.8s ease-out 0.1s both" }}
          >
            Contacta Con <span className="bg-gradient-to-r from-white to-conest-lightBlue text-transparent bg-clip-text">CoNest</span>
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{ animation: "fadeIn 0.8s ease-out 0.2s both" }}
          >
            Nuestro equipo está listo para resolver tus dudas y ayudarte a formar parte 
            de la comunidad intergeneracional que está transformando la convivencia.
          </p>
        </div>
      </div>


    </section>
  )
}

