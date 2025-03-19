"use client";

import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarTerracota = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Efecto para detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar si el usuario está logueado (ejemplo usando localStorage)
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    router.push('/sign-in');
  };

  return (
    <Navbar 
      maxWidth="xl" 
      position="sticky" 
      className={`shadow-sm bg-white transition-all duration-300 ${scrolled ? 'opacity-90 shadow-md' : ''}`}
    >
      <NavbarBrand>
        <Link href="/" className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
            <path d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6Z" fill="#1A5653" />
          </svg>
          <p className="text-2xl font-bold text-teal-800">CoNest</p>
        </Link>
      </NavbarBrand>
      
      <NavbarContent justify="center" className="hidden sm:flex">
        <NavbarItem>
          <Link href="/about" className="text-teal-800 hover:text-teal-600">
            Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/how-it-works" className="text-teal-800 hover:text-teal-600">
            Cómo Funciona
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-teal-800 hover:text-teal-600">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        {isLoggedIn ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                color="primary"
                name="Usuario"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Acciones de perfil">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Mi Perfil</p>
                <p className="text-tiny">Gestiona tu información personal</p>
              </DropdownItem>
              <DropdownItem key="dashboard">Mi Dashboard</DropdownItem>
              <DropdownItem key="settings">Configuración</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem>
              <Button as={Link} href="/sign-in" variant="light" color="primary" className="text-teal-700">
                Iniciar sesión
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/sign-up" color="primary" className="bg-teal-700">
                Regístrate
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarTerracota; 