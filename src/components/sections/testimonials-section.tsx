"use client"

import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Anfitriona',
    image: '/images/testimonials/host-1.jpg',
    content: 'Ser anfitriona ha sido una experiencia increíble. He conocido estudiantes maravillosos de todo el mundo y he podido compartir nuestra cultura española con ellos.',
  },
  {
    name: 'Ana Martínez',
    role: 'Anfitriona',
    image: '/images/testimonials/host-2.jpg',
    content: 'CoNest me ha ayudado a encontrar estudiantes que se integran perfectamente en nuestra familia. El proceso de matching es muy preciso.',
  },
  {
    name: 'John Smith',
    role: 'Estudiante',
    image: '/images/testimonials/student-1.jpg',
    content: 'Mi experiencia con mi familia anfitriona ha sido excepcional. Me han ayudado a mejorar mi español y a entender mejor la cultura española.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las experiencias de estudiantes y anfitriones que han encontrado su match perfecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 