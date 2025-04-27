"use client"

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type BackgroundSilhouetteProps = {
  children: ReactNode
  className?: string
  variant?: 'blue' | 'light' | 'white' | 'dark' | 'primary' | 'gradient'
  withParticles?: boolean
  withBlurCircles?: boolean
  withWaves?: boolean
  withDots?: boolean
  withImage?: boolean
  imageSrc?: string
  imageAlt?: string
  imageSide?: 'left' | 'right'
  imageOpacity?: number
}

export default function BackgroundSilhouette({
  children,
  className,
  variant = 'light',
  withParticles = false,
  withBlurCircles = false,
  withWaves = false,
  withDots = false,
  withImage = false,
  imageSrc,
  imageAlt = "Background image",
  imageSide = 'right',
  imageOpacity = 0.1
}: BackgroundSilhouetteProps) {
  
  // Define background color based on variant
  const getBgColor = () => {
    switch (variant) {
      case 'blue':
        return 'bg-gradient-to-br from-conest-lightBg/90 to-conest-darkBg/80'
      case 'dark':
        return 'bg-conest-darkBg'
      case 'white':
        return 'bg-white'
      case 'primary':
        return 'bg-conest-primary/10'
      case 'gradient':
        return 'bg-gradient-to-br from-conest-primary/10 via-white to-conest-secondary/10'
      case 'light':
      default:
        return 'bg-gray-50'
    }
  }
  
  // Define text color based on variant
  const getTextColor = () => {
    switch (variant) {
      case 'blue':
      case 'dark':
        return 'text-white'
      case 'light':
      case 'white':
      case 'primary':
      case 'gradient':
      default:
        return 'text-conest-darkBg'
    }
  }

  return (
    <section className={cn(
      'relative overflow-hidden', 
      getBgColor(),
      getTextColor(),
      className
    )}>
      {/* Background particles */}
      {withParticles && (
        <div className="absolute inset-0 opacity-20 -z-5" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="absolute inset-0 animate-spin-slow">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  backgroundColor: 'currentColor',
                  opacity: Math.random() * 0.5 + 0.2,
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Dots background pattern */}
      {withDots && (
        <div className="vector-dots absolute inset-0" aria-hidden="true"></div>
      )}

      {/* Waves vector */}
      {withWaves && (
        <div className="vector-bg vector-wave animate-wave" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path fill="currentColor" opacity="0.1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            <path fill="currentColor" opacity="0.25" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"></path>
            <path fill="currentColor" opacity="0.2" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      )}

      {/* Blur circles */}
      {withBlurCircles && (
        <>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-conest-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-conest-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/4 w-60 h-60 bg-conest-highlight/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </>
      )}

      {/* Animated vector circles */}
      <div className="vector-circles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="vector-circle"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.1 + 0.05
            }}
          />
        ))}
      </div>

      {/* Background image */}
      {withImage && imageSrc && (
        <div className={cn(
          "absolute h-full w-1/3 overflow-hidden pointer-events-none transition-opacity duration-1000",
          imageSide === 'left' ? 'left-0' : 'right-0',
          'top-0'
        )} style={{ opacity: imageOpacity }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-center transition-transform duration-1000 hover:scale-105"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
} 