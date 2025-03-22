
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

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
          <div className="relative min-h-screen">
            {/* Navbar con mayor prioridad */}
            <div className="fixed top-0 left-0 w-full z-50">
              <Navbar />
            </div>

            {/* Aseguramos espacio para el Navbar */}
            <div className="pt-[4rem] md:pt-[5rem]">
              <main className="flex-1">{children}</main>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
