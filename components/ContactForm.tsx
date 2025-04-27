'use client';

import { useState, FormEvent } from 'react';

type ContactType = 'info' | 'quote';

export default function ContactForm() {
  const [contactType, setContactType] = useState<ContactType>('info');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: {name?: string; email?: string; message?: string} = {};
    
    // Email validation
    if (!email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }
    
    // Message validation
    if (!message) {
      newErrors.message = 'El mensaje es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the data to your API
      console.log('Form submitted:', { contactType, name, email, message });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Contact Type Selection */}
      <div className="flex space-x-8 mb-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="radio"
              id="contactType-info"
              name="contactType"
              value="info"
              checked={contactType === 'info'}
              onChange={() => setContactType('info')}
              className="sr-only" // Hidden but accessible
            />
            <label 
              htmlFor="contactType-info"
              className="flex items-center justify-center w-7 h-7 rounded-full border border-black cursor-pointer"
            >
              {contactType === 'info' && (
                <span className="w-4 h-4 rounded-full bg-[#B9FF66]"></span>
              )}
            </label>
          </div>
          <label htmlFor="contactType-info" className="text-lg font-zodiak cursor-pointer">
            Información
          </label>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="radio"
              id="contactType-quote"
              name="contactType"
              value="quote"
              checked={contactType === 'quote'}
              onChange={() => setContactType('quote')}
              className="sr-only" // Hidden but accessible
            />
            <label 
              htmlFor="contactType-quote"
              className="flex items-center justify-center w-7 h-7 rounded-full border border-black cursor-pointer"
            >
              {contactType === 'quote' && (
                <span className="w-4 h-4 rounded-full bg-[#B9FF66]"></span>
              )}
            </label>
          </div>
          <label htmlFor="contactType-quote" className="text-lg font-zodiak cursor-pointer">
            Solicitar visita
          </label>
        </div>
      </div>
      
      {/* Fields */}
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-zodiak">
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="w-full p-4 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B9FF66] font-zodiak"
            />
          </div>
        </div>
        
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-zodiak">
            Email*
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@example.com"
              className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-black'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B9FF66] font-zodiak`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm font-zodiak">{errors.email}</p>
            )}
          </div>
        </div>
        
        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-zodiak">
            Mensaje*
          </label>
          <div className="relative">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="¿En qué podemos ayudarte?"
              rows={6}
              className={`w-full p-4 border ${errors.message ? 'border-red-500' : 'border-black'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B9FF66] font-zodiak`}
              required
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm font-zodiak">{errors.message}</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#191A23] text-white rounded-xl py-4 font-zodiak hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        
        {submitSuccess && (
          <p className="mt-3 text-green-600 text-center font-zodiak">
            ¡Mensaje enviado correctamente! Te contactaremos pronto.
          </p>
        )}
      </div>
    </form>
  );
} 