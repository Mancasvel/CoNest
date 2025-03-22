'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
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

  useEffect(() => {
    // Set a small delay for the animation to start
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-conest-lightBlue/20 to-white -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10" aria-hidden="true">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #007B9E 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      {/* Decorative blurred circles */}
      <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 -z-10">
        <div className="w-96 h-96 rounded-full bg-conest-blue/20 blur-3xl opacity-30"></div>
      </div>
      <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 -z-10">
        <div className="w-96 h-96 rounded-full bg-conest-blue/20 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div 
            className={`max-w-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {badge && (
              <div 
                className="inline-block rounded-full bg-conest-blue/10 px-4 py-1.5 text-sm font-medium text-conest-blue mb-4 shadow-sm"
                style={{ 
                  transitionDelay: '150ms',
                }}
              >
                {badge}
              </div>
            )}
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-conest-darkGray tracking-tight leading-tight"
              style={{ 
              }}
            >
              {title}
            </h1>
            
            {subtitle && (
              <h2 
                className="text-2xl md:text-3xl mb-4 text-conest-blue font-medium"
              >
                {subtitle}
              </h2>
            )}
            
            <p 
              className="text-lg text-conest-darkGray/80 leading-relaxed mb-8"
            >
              {description}
            </p>
            
            <div 
              className="flex flex-wrap gap-4 mt-8"
            >
              {primaryButtonText && primaryButtonUrl && (
                <Link href={primaryButtonUrl}>
                  <Button 
                    className="bg-conest-blue hover:bg-conest-mediumBlue text-white font-bold px-6 py-6 rounded-xl shadow-medium transition-transform hover:scale-105 duration-200"
                    size="lg"
                  >
                    {primaryButtonText}
                  </Button>
                </Link>
              )}
              
              {secondaryButtonText && secondaryButtonUrl && (
                <Link href={secondaryButtonUrl}>
                  <Button 
                    className="bg-white border-2 border-conest-blue text-conest-blue hover:bg-conest-lightBlue/20 font-bold px-6 py-6 rounded-xl transition-transform hover:scale-105 duration-200"
                    size="lg"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          {/* Image Section */}
          <div 
            className="relative"
          >
            <div className="p-2 rounded-2xl bg-gradient-to-br from-conest-blue via-conest-mediumBlue to-conest-lightBlue shadow-medium">
              <div className="bg-white p-3 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-conest-blue/5 rounded-full z-[-1]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-conest-blue/5 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-16 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
} 