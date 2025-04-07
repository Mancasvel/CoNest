import HeroSection from "@/components/contacto/hero-section"
import ContactForm from "@/components/contacto/contact-form"
import ContactInfo from "@/components/contacto/contact-info"
import MapSection from "@/components/contacto/map-section"
import FaqTeaser from "@/components/contacto/faq-teaser"

export const metadata = {
  title: "Contacto | CoNest",
  description: "Ponte en contacto con el equipo de CoNest. Estamos aquí para resolver tus dudas y ayudarte.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form & Info Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-conest-blue/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-conest-blue/5 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Teaser */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <FaqTeaser />
        </div>
      </section>
    </main>
  )
}

