"use client"
import { useState, ChangeEvent, FormEvent } from "react"
import { FaCheck, FaPaperPlane } from "react-icons/fa"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email inválido"
    if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio"
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClass = (fieldName: string) => {
    const baseClass = "w-full px-4 py-3 rounded-lg bg-white/90 shadow-sm backdrop-blur-sm border transition-all duration-300"
    const focusClass = focusedField === fieldName ? "border-conest-mediumBlue ring-2 ring-conest-blue/20" : "border-gray-200"
    const errorClass = errors[fieldName] ? "border-red-400" : focusClass
    return `${baseClass} ${errorClass}`
  }

  return (
    <div className="rounded-2xl bg-white/90 shadow-xl backdrop-blur-md overflow-hidden transform hover:shadow-2xl transition-all duration-500 relative z-10">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-conest-blue/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-conest-blue/5 blur-3xl"></div>
      
      <div className="p-8 md:p-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-conest-darkGray mb-2">Envíanos un mensaje</h3>
          <p className="text-conest-darkGray/70">
            Completa el formulario y te responderemos a la brevedad posible
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-conest-darkGray mb-1.5">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className={getInputClass('name')}
                placeholder="Tu nombre"
                disabled={isSubmitting}
              />
              {errors.name && <p className="mt-1.5 text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-conest-darkGray mb-1.5">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                className={getInputClass('email')}
                placeholder="tucorreo@ejemplo.com"
                disabled={isSubmitting}
              />
              {errors.email && <p className="mt-1.5 text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-conest-darkGray mb-1.5">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus('subject')}
              onBlur={handleBlur}
              className={getInputClass('subject')}
              placeholder="¿Sobre qué nos quieres contactar?"
              disabled={isSubmitting}
            />
            {errors.subject && <p className="mt-1.5 text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-conest-darkGray mb-1.5">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              className={getInputClass('message')}
              placeholder="Escribe aquí tu mensaje para nuestro equipo..."
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="mt-1.5 text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full md:w-auto px-8 py-3.5 rounded-lg font-medium text-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                isSuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gradient-to-r from-conest-blue to-conest-mediumBlue hover:from-conest-mediumBlue hover:to-conest-blue"
              } transform hover:scale-[1.03] active:scale-[0.97]`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center">
                  <FaCheck className="mr-2" /> Mensaje enviado
                </span>
              ) : (
                <span className="flex items-center">
                  <FaPaperPlane className="mr-2" /> Enviar mensaje
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

