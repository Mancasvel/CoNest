"use client"
import { useState } from "react"
import type React from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar formulario
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: "Por favor, completa todos los campos",
      })
      return
    }

    setStatus({ loading: true, success: false, error: "" })

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      // Obtener los datos de la respuesta
      let data
      try {
        data = await response.json()
      } catch (e) {
        throw new Error("Error al procesar la respuesta del servidor")
      }

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setStatus({ loading: false, success: true, error: "" })
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }))
      }, 5000)
    } catch (error) {
      console.error("Error en la solicitud:", error)
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Error al enviar el mensaje",
      })
    }
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl h-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 text-conest-darkGray">Envíanos un mensaje</h2>
      <p className="text-conest-darkGray/80 mb-14">
        Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">{status.error}</div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-conest-darkGray/80 font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-conest-lightBlue/10 border-2 border-transparent focus:border-conest-blue/30 hover:border-conest-blue/20 p-3 rounded-lg text-conest-darkGray"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-conest-darkGray/80 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-conest-lightBlue/10 border-2 border-transparent focus:border-conest-blue/30 hover:border-conest-blue/20 p-3 rounded-lg text-conest-darkGray"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-conest-darkGray/80 font-medium mb-1">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-conest-lightBlue/10 border-2 border-transparent focus:border-conest-blue/30 hover:border-conest-blue/20 p-3 rounded-lg text-conest-darkGray"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-conest-darkGray/80 font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-conest-lightBlue/10 border-2 border-transparent focus:border-conest-blue/30 hover:border-conest-blue/20 p-3 rounded-lg text-conest-darkGray"
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold py-6 rounded-xl shadow-soft transition-transform hover:scale-[1.02] duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status.loading}
          >
            {status.loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </div>
  )
}

