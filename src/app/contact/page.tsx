import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | CoNest",
  description: "Contáctanos para cualquier duda o sugerencia sobre CoNest.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Contáctanos</h1>
              <p className="mt-4 text-gray-600">
                ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
                Completa el formulario y te responderemos lo antes posible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-gray-600">Ciudad de México, México</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-gray-600">+52 (55) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contacto@conest.mx</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Horario de atención</h2>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábado: 10:00 AM - 2:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
} 