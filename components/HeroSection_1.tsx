'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  imageSrc = '/images/hero-image.jpg',
  imageAlt = 'CoNest Hero Image',
  badge,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set a small delay for the animation to start
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      {/* Background Elements with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-conest-lightBlue/30 via-white to-conest-blue/10 -z-10 animate-gradient"></div>
      
      {/* Animated particle background */}
      <div className="absolute inset-0 opacity-10 -z-10" aria-hidden="true">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #007B9E 1px, transparent 1px)', 
          backgroundSize: '30px 30px',
          animation: 'backgroundMovement 60s linear infinite'
        }}></div>
      </div>
      
      {/* Dynamic decorative blurred circles */}
      <div className={`absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 -z-10 transition-all duration-1000 ${scrolled ? 'scale-110' : 'scale-100'}`}>
        <div className="w-96 h-96 rounded-full bg-conest-blue/20 blur-3xl opacity-40 animate-pulse-slow"></div>
      </div>
      <div className={`absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 -z-10 transition-all duration-1000 ${scrolled ? 'scale-110' : 'scale-100'}`}>
        <div className="w-96 h-96 rounded-full bg-conest-blue/20 blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-24 h-24 border-4 border-conest-blue/20 rounded-xl transform rotate-12 -z-10 animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 border-4 border-conest-mediumBlue/20 rounded-full -z-10 animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-40 left-10 w-12 h-12 bg-conest-lightBlue/10 rounded-md transform -rotate-12 -z-10 animate-float-slow" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content with improved animations */}
          <div 
            className={`max-w-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {badge && (
              <div 
                className="inline-block rounded-full bg-gradient-to-r from-conest-blue/20 to-conest-mediumBlue/20 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-conest-blue mb-6 shadow-blue-sm animate-fade-in"
                style={{ 
                  transitionDelay: '150ms',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {badge}
              </div>
            )}
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in"
              style={{ 
                transitionDelay: '250ms',
                backgroundImage: 'linear-gradient(135deg, #004966, #007B9E, #004966)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '300% 300%',
                animation: 'gradientText 6s ease infinite'
              }}
            >
              {title}
            </h1>
            
            {subtitle && (
              <h2 
                className="text-2xl md:text-3xl mb-5 text-conest-darkGray font-medium animate-fade-in"
                style={{ transitionDelay: '350ms' }}
              >
                {subtitle}
              </h2>
            )}
            
            <p 
              className="text-lg text-conest-darkGray/80 leading-relaxed mb-8 animate-fade-in"
              style={{ transitionDelay: '450ms' }}
            >
              {description}
            </p>
            
            <div 
              className="flex flex-wrap gap-5 mt-8 animate-fade-in"
              style={{ transitionDelay: '550ms' }}
            >
              {primaryButtonText && primaryButtonUrl && (
                <Link href={primaryButtonUrl}>
                  <Button 
                    className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white font-bold px-7 py-6 rounded-xl shadow-blue-md transition-all hover:shadow-blue-lg hover:scale-105 duration-300"
                    size="lg"
                  >
                    {primaryButtonText}
                  </Button>
                </Link>
              )}
              
              {secondaryButtonText && secondaryButtonUrl && (
                <Link href={secondaryButtonUrl}>
                  <Button 
                    className="bg-white/80 backdrop-blur-sm border-2 border-conest-blue/50 text-conest-blue hover:bg-conest-lightBlue/20 font-bold px-7 py-6 rounded-xl transition-all hover:shadow-blue-md hover:scale-105 duration-300"
                    size="lg"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Trust indicators */}
            <div className="mt-10 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-blue-sm border border-conest-blue/10 animate-fade-in" style={{ transitionDelay: '650ms' }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-conest-blue/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-conest-blue">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-conest-darkGray">Más de 100 conexiones exitosas esperadas</p>
                  <p className="text-xs text-conest-darkGray/70">Cambiando vidas en toda España</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section with enhanced styling */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-conest-blue/30 via-conest-mediumBlue/20 to-conest-lightBlue/10 transform rotate-6 scale-105 rounded-3xl blur-md"></div>
            
            <div className="p-3 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue shadow-blue-lg animate-float">
              <div className="bg-white p-3 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-inner">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-conest-blue/30 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-conest-blue/10 to-conest-lightBlue/5 rounded-full z-[-1] animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-tl from-conest-blue/10 to-conest-lightBlue/5 rounded-full z-[-1] animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Additional info card */}
            <div className="absolute -bottom-10 right-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-blue-md p-5 max-w-xs border border-conest-lightBlue/20 animate-fade-in" style={{animationDelay: '750ms'}}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue flex items-center justify-center text-white text-sm font-bold shadow-blue-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 1 0-18c.83 0 1.5.67 1.5 1.5 0 .66-.41 1.2-1  "></path>
                    <path d="M12 9v4"></path>
                    <path d="m15 12-3 3-3-3"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-conest-darkGray">Descubre CoNest</p>
                  <p className="text-sm text-conest-darkGray/70">Reconectando generaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-20 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes gradientText {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        
        @keyframes backgroundMovement {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: animate-gradient 15s ease infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .shadow-blue-sm {
          box-shadow: 0 4px 6px -1px rgba(0, 123, 158, 0.1), 0 2px 4px -1px rgba(0, 123, 158, 0.06);
        }
        
        .shadow-blue-md {
          box-shadow: 0 10px 15px -3px rgba(0, 123, 158, 0.1), 0 4px 6px -2px rgba(0, 123, 158, 0.05);
        }
        
        .shadow-blue-lg {
          box-shadow: 0 20px 25px -5px rgba(0, 123, 158, 0.1), 0 10px 10px -5px rgba(0, 123, 158, 0.04);
        }
      `}</style>
    </section>
  );
}