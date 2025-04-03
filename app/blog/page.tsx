'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody } from "@heroui/react";
import HeroSection from '../../components/HeroSection_1';

export default function BlogPage() {
  // Blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "Cómo CoNest está transformando el concepto de vivienda compartida en España",
      excerpt: "Descubre cómo nuestra plataforma está revolucionando el acceso a la vivienda y combatiendo la soledad no deseada a través de conexiones intergeneracionales significativas.",
      image: "/images/blog/blog-housing.jpg",
      category: "Innovación Social",
      author: "José María de Cossío",
      authorRole: "CEO y Fundador",
      authorImage: "/images/team/ceo.png",
      date: "15 de mayo de 2024",
      readTime: "6 min"
    },
    {
      id: 2,
      title: "5 beneficios de la convivencia intergeneracional que quizás no conocías",
      excerpt: "Un análisis de los efectos positivos, respaldados por estudios, que tiene la convivencia entre personas mayores y jóvenes en su bienestar físico y emocional.",
      image: "/images/blog/blog-benefits.jpg",
      category: "Bienestar",
      author: "Manuel Castillejo",
      authorRole: "CTO",
      authorImage: "/images/team/cto1.png",
      date: "2 de junio de 2024",
      readTime: "8 min"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Historias de éxito: María y Carlos, un año de convivencia que cambió sus vidas",
      excerpt: "Conoce cómo la vida de María, una profesora jubilada, y Carlos, un estudiante de medicina, cambió radicalmente tras un año compartiendo hogar a través de CoNest.",
      image: "/images/blog/blog-success.jpg",
      category: "Historias",
      author: "Equipo CoNest",
      date: "29 de junio de 2024",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Guía práctica: Preparando tu hogar para recibir a un estudiante",
      excerpt: "Consejos útiles para personas mayores que se preparan para compartir su hogar con un estudiante, desde adecuación de espacios hasta establecimiento de normas de convivencia.",
      image: "/images/blog/blog-guide.jpg",
      category: "Consejos",
      author: "Natalia Olmo",
      date: "10 de julio de 2024",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "El impacto económico de la vivienda compartida intergeneracional",
      excerpt: "Análisis del ahorro real que supone para estudiantes y el ingreso adicional para mayores, así como el impacto en la economía local de las ciudades donde opera CoNest.",
      image: "/images/blog/blog-economic.jpg",
      category: "Economía",
      author: "Equipo CoNest",
      date: "22 de julio de 2024",
      readTime: "6 min"
    },
    {
      id: 6,
      title: "CoNest se expande: Nuevas ciudades universitarias en nuestro horizonte",
      excerpt: "Anunciamos la expansión de CoNest a nuevas ciudades universitarias en España para el próximo curso académico, ampliando nuestra comunidad intergeneracional.",
      image: "/images/blog/blog-expansion.jpg",
      category: "Noticias",
      author: "José María de Cossío",
      date: "5 de agosto de 2024",
      readTime: "4 min"
    }
  ];

  const categories = [
    { name: "Historias", count: 12 },
    { name: "Consejos", count: 8 },
    { name: "Noticias", count: 6 },
    { name: "Bienestar", count: 5 },
    { name: "Economía", count: 4 },
    { name: "Innovación Social", count: 3 }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-conest-darkGray font-inter">
      <HeroSection 
        title="Blog CoNest"
        subtitle="Historias, consejos y tendencias"
        description="Explora nuestro blog para descubrir historias inspiradoras de convivencia intergeneracional, consejos prácticos y las últimas novedades sobre CoNest."
        primaryButtonText="Últimos artículos"
        primaryButtonUrl="#recent-posts"
        secondaryButtonText="Únete a CoNest"
        secondaryButtonUrl="/sign-up"
        imageSrc="/images/blog.jpg"
        imageAlt="Blog de CoNest"
        badge="Blog"
      />
      
      {/* Featured Posts Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-conest-darkGray">
              <span className="text-conest-blue">Artículos destacados</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="bg-white shadow-medium border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-conest-blue/20 group">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-conest-blue text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardBody className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">
                      <Link href={`/blog/${post.id}`} className="hover:text-conest-mediumBlue">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-conest-darkGray/80 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-conest-darkGray">{post.author}</p>
                          <p className="text-xs text-conest-darkGray/60">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="text-sm text-conest-darkGray/60">
                        {post.date} · {post.readTime} de lectura
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section id="recent-posts" className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl font-bold mb-10 text-conest-darkGray">
                  <span className="text-conest-blue">Artículos recientes</span>
                </h2>
                
                <div className="space-y-8">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="bg-white shadow-soft border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-medium hover:border-conest-blue/20 group">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative">
                          <div className="relative aspect-[4/3] md:h-full w-full">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-conest-blue text-white text-xs font-medium rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <CardBody className="p-6 h-full flex flex-col">
                            <h3 className="text-lg font-bold mb-2 text-conest-darkGray group-hover:text-conest-blue transition-colors duration-300">
                              <Link href={`/blog/${post.id}`} className="hover:text-conest-mediumBlue">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-conest-darkGray/80 mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4">
                              <div className="text-sm font-medium text-conest-darkGray">{post.author}</div>
                              <div className="text-sm text-conest-darkGray/60">
                                {post.date} · {post.readTime} de lectura
                              </div>
                            </div>
                          </CardBody>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
              </div>
              
              {/* Sidebar */}
              <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
                
                
                {/* Newsletter */}
                <div className="bg-conest-lightBlue/30 shadow-soft rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-conest-blue/10 rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 -ml-8 -mb-8 bg-conest-blue/10 rounded-full"></div>
                  
                  <h3 className="text-xl font-bold mb-3 text-conest-darkGray">Suscríbete a nuestro newsletter</h3>
                  <p className="text-conest-darkGray/80 mb-6">
                    Recibe los últimos artículos y novedades de CoNest directamente en tu email.
                  </p>
                  
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Tu correo electrónico" 
                       className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-conest-blue/30 focus:border-transparent"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 rounded-lg bg-conest-blue text-white font-medium transition-all duration-300 hover:bg-conest-mediumBlue shadow-soft hover:shadow-medium"
                    >
                      Suscribirme
                    </button>
                  </form>
                  
                  <p className="text-xs text-conest-darkGray/60 mt-4">
                    Al suscribirte, aceptas nuestra <Link href="/politica-de-privacidad" className="underline">política de privacidad</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-2xl overflow-hidden shadow-lg">
            <div className="p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">¿Listo para formar parte de CoNest?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Únete a nuestra comunidad intergeneracional y descubre los beneficios de compartir hogar, experiencias y aprendizaje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/elder/sign-up" 
                  className="px-6 py-3 rounded-full bg-white text-conest-blue font-medium transition-all duration-300 hover:bg-gray-100 shadow-soft hover:shadow-medium"
                >
                  Registrar mi vivienda
                </Link>
                <Link 
                  href="/student/sign-up" 
                  className="px-6 py-3 rounded-full bg-transparent text-white font-medium border border-white transition-all duration-300 hover:bg-white/10 shadow-soft hover:shadow-medium"
                >
                  Buscar alojamiento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 