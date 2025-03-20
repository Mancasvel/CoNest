

import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importamos el Navbar
import Footer from "@/components/Footer"; // Importamos el Footer

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CoNest - Una mejor manera de alojarte",
  description:
    "Conectamos estudiantes con opciones de alojamiento asequible mientras brindamos compañía a personas mayores",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Contenedor principal */}
          <div className="flex flex-col min-h-screen">
            {/* Navbar agregado aquí */}
            <Navbar />
            
            {/* Contenido principal */}
            <main className="flex-1">{children}</main>

            {/* Footer agregado aquí */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
