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
} from '@heroui/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

type UserRole = 'student' | 'owner' | 'admin' | undefined;

interface NavItem {
  name: string;
  href: string;
  roles?: UserRole[];
}

export default function NavbarConest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<UserRole>(undefined);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          setUserRole(user.app_metadata?.role || undefined);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setUserRole(session?.user?.app_metadata?.role || undefined);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const getMenuItems = (): NavItem[] => {
    // Common navigation items for all users
    const defaultItems: NavItem[] = [
      { name: 'Cómo Funciona', href: '/como-funciona' },
      { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { name: 'Contacto', href: '/contacto' },
    ];

    // Role-specific navigation items
    const roleItems: Record<Exclude<UserRole, undefined>, NavItem[]> = {
      admin: [
        { name: 'Dashboard', href: '/admin' },
        { name: 'Registrar Mayor', href: '/admin/registrar-mayor' },
      ],
      student: [
        { name: 'Mi Perfil', href: '/student' },
        { name: 'Registrado', href: '/student/registered' },
        { name: 'Matchmaking', href: '/student/matchmaking' },
      ],
      owner: [
        { name: 'Mi Perfil', href: '/elder' },
      ],
    };

    // If user has a role, always show role-specific items
    if (userRole) {
      return roleItems[userRole] || [];
    }

    // If no role, show common items
    return defaultItems;
  };

  const menuItems = getMenuItems();

  const getUserMenuItems = (): NavItem[] => {
    if (!user) return [];

    const roleBasedLinks: NavItem[] = [];
    
    if (userRole === 'admin') {
      roleBasedLinks.push({ name: 'Admin Dashboard', href: '/admin' });
    } else if (userRole === 'student') {
      roleBasedLinks.push({ name: 'Área de Estudiante', href: '/student' });
    } else if (userRole === 'owner') {
      roleBasedLinks.push({ name: 'Área de Mayor', href: '/elder' });
    }
    
    return [
      { name: 'Mi Perfil', href: userRole === 'admin' ? '/admin' : userRole === 'student' ? '/student' : '/elder' },
      ...roleBasedLinks
    ];
  };

  const userMenuItems = getUserMenuItems();

  const renderAuthButtons = () => (
    <div className="flex items-center gap-3">
      <Button as={Link} href="/sign-in" variant="light" className="font-medium text-conest-darkGray hover:text-conest-blue hover:bg-conest-blue/10 min-w-[80px]">
        Acceder
      </Button>
      <Button as={Link} href="/sign-up" className="bg-conest-blue text-white shadow-soft hover:bg-conest-mediumBlue font-medium transition-transform hover:scale-105 duration-200 min-w-[120px] rounded-full">
        Registrarse
      </Button>
    </div>
  );

  const renderUserDropdown = () => (
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
            {userRole === 'student' ? 'Estudiante' : 
             userRole === 'owner' ? 'Adulto mayor' : 
             userRole === 'admin' ? 'Administrador' : 'Usuario'}
          </div>
        </DropdownItem>
        
        {userRole ? (
          <DropdownItem key="home" href="/">Volver a Inicio</DropdownItem>
        ) : (
          <>
            <DropdownItem key="settings" href="/profile">Mi Perfil</DropdownItem>
            {userRole === 'admin' && (
              <DropdownItem key="admin" href="/admin">Panel Admin</DropdownItem>
            )}
            {userRole === 'student' && (
              <>
                <DropdownItem key="student-area" href="/student">Área de Estudiante</DropdownItem>
              </>
            )}
            {userRole === 'owner' && (
              <DropdownItem key="elder-area" href="/elder">Área de Mayor</DropdownItem>
            )}
          </>
        )}

        <DropdownItem key="logout" color="danger" onClick={handleSignOut}>Cerrar Sesión</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  if (!mounted) {
    return null;
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className={`fixed bg-white transition-all duration-300 ${scrolled ? 'shadow-medium py-1' : 'py-2'} z-50`} maxWidth="xl" position="sticky" isBlurred={scrolled}>
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
            <p className={`font-bold text-conest-darkGray transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
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
            <p className={`font-bold text-conest-darkGray transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
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
        {loading ? (
          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
        ) : user ? renderUserDropdown() : renderAuthButtons()}
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                href={item.href}
                className={`w-full text-lg ${pathname === item.href ? 'text-conest-blue font-medium' : 'text-conest-darkGray'} hover:text-conest-blue transition-colors p-2 flex items-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                {pathname === item.href && <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>}
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}

          {userMenuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.href}
                className={`w-full text-lg ${pathname === item.href ? 'text-conest-blue font-medium' : 'text-conest-darkGray'} hover:text-conest-blue transition-colors p-2 flex items-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                {pathname === item.href && <div className="w-1 h-6 bg-conest-blue rounded-full mr-2"></div>}
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
