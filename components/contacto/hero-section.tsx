"use client"

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-conest-lightBlue/20 to-white -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #007B9E 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block rounded-full bg-conest-blue/10 px-4 py-1.5 text-sm font-medium text-conest-blue mb-4 shadow-sm"
            style={{ animation: "fadeIn 0.8s ease-out" }}
          >
            Estamos Aquí Para Ti
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-conest-darkGray tracking-tight"
            style={{ animation: "fadeIn 0.8s ease-out 0.1s both" }}
          >
            Contacta Con <span className="text-conest-blue">CoNest</span>
          </h1>
          <p
            className="text-xl text-conest-darkGray/80 max-w-3xl mx-auto leading-relaxed"
            style={{ animation: "fadeIn 0.8s ease-out 0.2s both" }}
          >
            Si tienes preguntas sobre nuestro servicio o necesitas ayuda, estamos aquí para escucharte. Nuestro equipo
            estará encantado de asistirte.
          </p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}

