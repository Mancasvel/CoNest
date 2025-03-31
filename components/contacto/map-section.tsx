"use client"

export default function MapSection() {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-conest-blue flex items-center justify-center text-white shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-conest-darkGray">Oficinas Centrales</h4>
          <p className="text-conest-darkGray/80 text-sm">Av. República Argentina, 25, planta 9, 41011 Sevilla</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-lg overflow-hidden shadow-md mt-3">
        <iframe
          title="Mapa Oficinas CoNest"
          width="100%"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Av.+República+Argentina,+25,+Sevilla&output=embed"
        ></iframe>
      </div>
    </div>
  )
}

