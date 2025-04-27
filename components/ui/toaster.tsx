"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

// Tipo para los toasts
type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  title?: string;
  description: string;
  type: ToastType;
}

// Contexto para el sistema de toasts
interface ToasterContextValue {
  toast: (props: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
}

const ToasterContext = createContext<ToasterContextValue | undefined>(undefined);

// Hook para usar el toast en cualquier componente
export const useToast = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("useToast debe ser usado dentro de un ToasterProvider");
  }
  return context;
};

// Proveedor del contexto
export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (props: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...props }]);
  };

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Limpia toasts automáticamente después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prev) => prev.slice(1));
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToasterContext.Provider value={{ toast, dismiss }}>
      {children}
    </ToasterContext.Provider>
  );
}

// Componente individual de Toast
function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const bgColorMap: Record<ToastType, string> = {
    success: "bg-green-100 border-green-200 text-green-800",
    error: "bg-red-100 border-red-200 text-red-800",
    warning: "bg-yellow-100 border-yellow-200 text-yellow-800",
    info: "bg-blue-100 border-blue-200 text-blue-800",
  };

  return (
    <div 
      className={cn(
        "rounded-lg p-4 shadow-md border animate-fadeIn mb-2 flex items-center",
        bgColorMap[toast.type]
      )}
    >
      <div className="flex-1">
        {toast.title && <h4 className="font-semibold text-sm">{toast.title}</h4>}
        <p className="text-sm">{toast.description}</p>
      </div>
      <button 
        onClick={onDismiss}
        className="ml-4 text-gray-500 hover:text-gray-700"
        aria-label="Cerrar notificación"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// Componente Toaster principal que se importa en layout.tsx
export function Toaster() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const context = useContext(ToasterContext);
  if (!context) return null;

  const { dismiss } = context;

  // Estado local para toasts (solo para demostración)
  const [toastsLocal, setToastsLocal] = useState<Toast[]>([]);

  if (!isMounted) return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm flex flex-col items-end gap-2">
      {toastsLocal.map((toast) => (
        <ToastItem 
          key={toast.id} 
          toast={toast} 
          onDismiss={() => dismiss(toast.id)} 
        />
      ))}
    </div>,
    document.body
  );
} 