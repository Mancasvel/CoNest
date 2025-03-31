"use client"
import HeroSection from "@/components/contacto/hero-section"
import ContactForm from "@/components/contacto/contact-form"
import ContactInfo from "@/components/contacto/contact-info"
import MapSection from "@/components/contacto/map-section"
import FaqTeaser from "@/components/contacto/faq-teaser"

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form Section */}
      <section className="py-20 relative z-10 mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Form Column */}
              <div className="w-full lg:w-7/12">
                <div
                  className="bg-white shadow-medium rounded-2xl overflow-hidden transition-all"
                  style={{ animation: "fadeIn 0.8s ease-out 0.3s both" }}
                >
                  <div className="p-1 bg-gradient-to-r from-conest-blue via-conest-mediumBlue to-conest-lightBlue rounded-2xl">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="w-full lg:w-5/12" style={{ animation: "fadeIn 0.8s ease-out 0.4s both" }}>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div style={{ animation: "fadeIn 0.8s ease-out 0.6s both" }}>
              <MapSection />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <FaqTeaser />
    </div>
  )
}

