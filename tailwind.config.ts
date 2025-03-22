import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        conest: {
          blue: "#007B9E", // Azul Profundo principal
          darkGray: "#4A4A4A", // Gris Oscuro para texto
          white: "#FFFFFF", // Blanco Puro para fondos
          lightBlue: "#E1F5FA", // Azul claro para fondos secundarios
          mediumBlue: "#0090B8", // Azul medio para hover
          darkBlue: "#006380", // Azul más oscuro para efectos
          lightGray: "#F5F5F5", // Gris claro para fondos alternativos
          mediumGray: "#8A8A8A", // Gris medio para textos secundarios
          beige: "#F8F4E9", // Añadiendo beige para mantener consistencia con el hero
          green: "#4CAF50", // Añadiendo verde para mantener consistencia con el hero
        },
        'conest-blue': '#1E88E5',
        'conest-mediumBlue': '#1976D2',
        'conest-lightBlue': '#E3F2FD',
        'conest-darkGray': '#333333'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
      },
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
        "serif": ["Georgia", "ui-serif", "serif"],
        "blogger": ["Blogger Sans", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 4px 6px -1px rgba(26, 143, 143, 0.05), 0 2px 4px -1px rgba(11, 204, 230, 0.03)",
        "medium": "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 140, 255, 0.22)",
        "strong": "0 15px 40px rgba(0, 25, 245, 0.13)",
        "highlight": "0 0 0 3px rgba(0, 200, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-soft": "linear-gradient(135deg, #F5F7FA 0%, #E4EBF5 100%)",
        "gradient-blue": "linear-gradient(135deg, #0090B8 0%, #007B9E 100%)",
        "gradient-light": "linear-gradient(135deg, #E1F5FA 0%, #F5F5F5 100%)",
        'hero-pattern': "url('/images/hero-pattern.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
