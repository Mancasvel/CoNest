import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  imageSrc,
  imageAlt,
  badge = "Una Nueva Forma de Convivencia"
}: HeroSectionProps) {
  // Dividir título en partes para aplicar colores diferentes
  const titleParts = title.split('|');
  
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-block rounded-full bg-conest-lightBlue/20 px-4 py-1.5 text-sm font-medium text-conest-blue animate-fade-in">
            {badge}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-conest-darkGray animate-fade-in animate-delay-100">
            {titleParts.length > 1 ? (
              <>
                <span className="block">{titleParts[0]}</span>
                <span className="block mt-2 text-conest-blue">{titleParts[1]}</span>
              </>
            ) : (
              <span>{title}</span>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-conest-darkGray/70 max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-200">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in animate-delay-300">
            <Link href={primaryButtonUrl} className="inline-flex items-center justify-center">
              <button className="bg-conest-blue hover:bg-conest-mediumBlue text-white px-8 py-6 rounded-xl text-base md:text-lg font-medium shadow-soft hover:shadow-medium transition-all duration-300">
                {primaryButtonText}
              </button>
            </Link>
            <Link href={secondaryButtonUrl} className="inline-flex items-center justify-center">
              <button className="bg-white border border-conest-blue text-conest-blue hover:bg-conest-lightBlue/50 px-8 py-6 rounded-xl text-base md:text-lg font-medium">
                {secondaryButtonText}
              </button>
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative animate-fade-in animate-delay-400">
          <div className="relative rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[4/3] bg-conest-beige">
              <Image 
                alt={imageAlt} 
                className="w-full h-full object-cover" 
                src={imageSrc} 
                width={600}
                height={450}
              />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft md:max-w-xs animate-fade-in animate-delay-500">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-conest-beige">
                  <Image 
                    src="/images/compañía-para-personas-mayores.jpg" 
                    alt="Perfil de estudiante" 
                    className="w-full h-full object-cover" 
                    width={40}
                    height={40}
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-conest-beige">
                  <Image 
                    src="/images/alojamiento-asequible.jpg" 
                    alt="Perfil de persona mayor" 
                    className="w-full h-full object-cover" 
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-conest-darkGray">200+ emparejamientos</p>
                <p className="text-xs text-conest-darkGray/70">en toda España</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hidden sm:block animate-fade-in animate-delay-500">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-conest-blue/10 rounded-full">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-conest-blue"
                >
                  <path 
                    d="M16 6l2 2 4-4m-8 14a7 7 0 110-14 7 7 0 010 14z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-conest-darkGray">97% satisfacción</p>
                <p className="text-xs text-conest-darkGray/70">de nuestros usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 