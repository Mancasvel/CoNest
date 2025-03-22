"use client";

import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavbarConest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={`fixed bg-white transition-all duration-300 ${
        scrolled ? 'shadow-medium py-1' : 'py-2'
      } z-50`}
      maxWidth="xl"
      position="sticky"
      isBlurred={scrolled}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-conest-darkGray"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CoNest Logo"
              width={32}
              height={32}
              className={`transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
            />
            <p className={`font-bold text-conest-darkGray transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}>
              Co<span className="text-conest-blue">Nest</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CoNest Logo"
              width={scrolled ? 32 : 40}
              height={scrolled ? 32 : 40}
              className="transition-all duration-300"
            />
            <p className={`font-bold text-conest-darkGray transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}>
              Co<span className="text-conest-blue">Nest</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className={`relative text-conest-darkGray/90 hover:text-conest-blue transition-colors duration-200 py-2 px-3 text-sm font-medium rounded-lg
                ${pathname === item.href ? 'text-conest-blue after:opacity-100' : 'after:opacity-0'}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-conest-blue
                after:transition-all after:duration-300 hover:after:opacity-100
              `}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <div className="flex items-center gap-3">
          <Button 
            as={Link} 
            href="/sign-in" 
            variant="light" 
            className="font-medium text-conest-darkGray hover:text-conest-blue hover:bg-conest-blue/10 min-w-[80px]"
          >
            Acceder
          </Button>
          <Button 
            as={Link} 
            href="/sign-up/options" 
            className="bg-conest-blue text-white shadow-soft hover:bg-conest-mediumBlue font-medium transition-transform hover:scale-105 duration-200 min-w-[120px]"
          >
            Registrarse
          </Button>
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-white z-50 pt-6 pb-6">
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                href={item.href}
                className={`w-full text-lg ${
                  pathname === item.href
                    ? 'text-conest-blue font-medium'
                    : 'text-conest-darkGray'
                } hover:text-conest-blue transition-colors p-2 flex items-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                {pathname === item.href && (
                  <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>
                )}
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="border-t border-gray-100 my-4"></div>
          <div className="flex flex-col gap-3 px-2">
            <Button 
              as={Link} 
              href="/sign-in" 
              variant="light" 
              className="font-medium text-conest-darkGray hover:text-conest-blue justify-start"
              fullWidth
            >
              Acceder
            </Button>
            <Button 
              as={Link} 
              href="/sign-up/options" 
              className="bg-conest-blue text-white shadow-soft hover:bg-conest-mediumBlue font-medium"
              fullWidth
            >
              Registrarse
            </Button>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
} 