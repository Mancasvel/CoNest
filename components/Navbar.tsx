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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function NavbarConest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

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

  useEffect(() => {
    // Check authentication status
    const checkUser = async () => {
      try {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          setUser(user);
          // Get role from user metadata
          const role = user.user_metadata?.role;
          setUserRole(role || null);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        setUserRole(session.user.user_metadata?.role || null);
      } else {
        setUser(null);
        setUserRole(null);
      }
    });
    
    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const menuItems = [
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  // User-specific menu items based on role
  const getUserMenuItems = () => {
    if (!user) return [];
    
    const items = [
      { name: 'Mi Perfil', href: '/profile' },
    ];
    
    if (userRole === 'student') {
      items.push(
        { name: 'Buscar Alojamiento', href: '/student/housing' },
        { name: 'Mis Solicitudes', href: '/student/applications' }
      );
    } else if (userRole === 'elder') {
      items.push(
        { name: 'Mi Vivienda', href: '/elder/housing' },
        { name: 'Solicitudes Recibidas', href: '/elder/applications' }
      );
    }
    
    return items;
  };

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
              src="/images/conest_logo.png"
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
              src="/images/conest_logo.png"
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
        
        {user && userRole === 'student' && (
          <NavbarItem>
            <Link
              href="/student/housing"
              className={`relative text-conest-darkGray/90 hover:text-conest-blue transition-colors duration-200 py-2 px-3 text-sm font-medium rounded-lg
                ${pathname.startsWith('/student/housing') ? 'text-conest-blue after:opacity-100' : 'after:opacity-0'}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-conest-blue
                after:transition-all after:duration-300 hover:after:opacity-100
              `}
            >
              Buscar Alojamiento
            </Link>
          </NavbarItem>
        )}
        
        {user && userRole === 'elder' && (
          <NavbarItem>
            <Link
              href="/elder/housing"
              className={`relative text-conest-darkGray/90 hover:text-conest-blue transition-colors duration-200 py-2 px-3 text-sm font-medium rounded-lg
                ${pathname.startsWith('/elder/housing') ? 'text-conest-blue after:opacity-100' : 'after:opacity-0'}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-conest-blue
                after:transition-all after:duration-300 hover:after:opacity-100
              `}
            >
              Mi Vivienda
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        {loading ? (
          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
        ) : user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform cursor-pointer"
                src={user.user_metadata?.avatar_url || "https://i.pravatar.cc/150?img=3"}
                name={user.email?.charAt(0).toUpperCase() || "U"}
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions">
            <DropdownItem key="profile" textValue="profile">
              <div className="text-sm font-semibold">{user.email}</div>
              <div className="text-xs text-gray-500">
                {userRole === 'student'
                  ? 'Estudiante'
                  : userRole === 'elder'
                  ? 'Adulto mayor'
                  : 'Usuario'}
              </div>
            </DropdownItem>

            <DropdownItem key="settings" href="/profile">
              Mi Perfil
            </DropdownItem>

            {userRole === 'student' ? (
              <>
                <DropdownItem key="applications" href="/student/applications">
                  Mis Solicitudes
                </DropdownItem>
                <DropdownItem key="housing" href="/student/housing">
                  Buscar Alojamiento
                </DropdownItem>
              </>
            ) : null}

            {userRole === 'elder' ? (
              <>
                <DropdownItem key="elder-applications" href="/elder/applications">
                  Solicitudes Recibidas
                </DropdownItem>
                <DropdownItem key="elder-housing" href="/elder/housing">
                  Mi Vivienda
                </DropdownItem>
              </>
            ) : null}

            <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
              Cerrar Sesión
            </DropdownItem>

            </DropdownMenu>
          </Dropdown>
        ) : (
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
              href="/sign-up" 
              className="bg-conest-blue text-white shadow-soft hover:bg-conest-mediumBlue font-medium transition-transform hover:scale-105 duration-200 min-w-[120px]"
            >
              Registrarse
            </Button>
          </div>
        )}
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
          
          {/* Role-specific menu items for mobile */}
          {user && userRole === 'student' && (
            <>
              <NavbarMenuItem>
                <Link
                  href="/student/housing"
                  className={`w-full text-lg ${
                    pathname.startsWith('/student/housing')
                      ? 'text-conest-blue font-medium'
                      : 'text-conest-darkGray'
                  } hover:text-conest-blue transition-colors p-2 flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname.startsWith('/student/housing') && (
                    <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>
                  )}
                  Buscar Alojamiento
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  href="/student/applications"
                  className={`w-full text-lg ${
                    pathname.startsWith('/student/applications')
                      ? 'text-conest-blue font-medium'
                      : 'text-conest-darkGray'
                  } hover:text-conest-blue transition-colors p-2 flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname.startsWith('/student/applications') && (
                    <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>
                  )}
                  Mis Solicitudes
                </Link>
              </NavbarMenuItem>
            </>
          )}
          
          {user && userRole === 'elder' && (
            <>
              <NavbarMenuItem>
                <Link
                  href="/elder/housing"
                  className={`w-full text-lg ${
                    pathname.startsWith('/elder/housing')
                      ? 'text-conest-blue font-medium'
                      : 'text-conest-darkGray'
                  } hover:text-conest-blue transition-colors p-2 flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname.startsWith('/elder/housing') && (
                    <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>
                  )}
                  Mi Vivienda
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  href="/elder/applications"
                  className={`w-full text-lg ${
                    pathname.startsWith('/elder/applications')
                      ? 'text-conest-blue font-medium'
                      : 'text-conest-darkGray'
                  } hover:text-conest-blue transition-colors p-2 flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname.startsWith('/elder/applications') && (
                    <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>
                  )}
                  Solicitudes Recibidas
                </Link>
              </NavbarMenuItem>
            </>
          )}
          
          <div className="border-t border-gray-100 my-4"></div>
          
          {user ? (
            <div className="flex flex-col gap-3 px-2">
              <Button 
                as={Link} 
                href="/profile" 
                variant="light" 
                className="font-medium text-conest-darkGray hover:text-conest-blue justify-start"
                fullWidth
              >
                Mi Perfil
              </Button>
              <Button 
                onClick={handleSignOut}
                className="bg-red-500 text-white shadow-soft hover:bg-red-600 font-medium"
                fullWidth
              >
                Cerrar Sesión
              </Button>
            </div>
          ) : (
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
                href="/sign-up" 
                className="bg-conest-blue text-white shadow-soft hover:bg-conest-mediumBlue font-medium"
                fullWidth
              >
                Registrarse
              </Button>
            </div>
          )}
        </div>
      </NavbarMenu>
    </Navbar>
  );
} 