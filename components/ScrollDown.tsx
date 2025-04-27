"use client";

import { useEffect, useReducer, useCallback, useRef } from "react";

// Definir acciones y estado inicial
type State = {
  opacity: number;
  visible: boolean;
  direction: 'increasing' | 'decreasing';
};

type Action = 
  | { type: 'SET_VISIBILITY'; payload: boolean }
  | { type: 'UPDATE_OPACITY' };

const initialState: State = {
  opacity: 1,
  visible: true,
  direction: 'decreasing'
};

// Reducer para manejar el estado de forma más eficiente
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return { ...state, visible: action.payload };
    case 'UPDATE_OPACITY':
      // Lógica para la animación de pulso
      if (state.direction === 'decreasing') {
        const newOpacity = state.opacity - 0.03;
        if (newOpacity <= 0.3) {
          return { ...state, opacity: newOpacity, direction: 'increasing' };
        }
        return { ...state, opacity: newOpacity };
      } else {
        const newOpacity = state.opacity + 0.03;
        if (newOpacity >= 1) {
          return { ...state, opacity: newOpacity, direction: 'decreasing' };
        }
        return { ...state, opacity: newOpacity };
      }
    default:
      return state;
  }
}

export const ScrollDownArrow = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const animationFrameId = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(0);

  // Manejo del desplazamiento optimizado
  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    
    // Ocultar la flecha después de desplazarse 200px (threshold)
    const shouldBeVisible = position <= 200;
    
    if (shouldBeVisible !== state.visible) {
      dispatch({ type: 'SET_VISIBILITY', payload: shouldBeVisible });
    }
  }, [state.visible]);

  // Función para la animación de pulso usando requestAnimationFrame
  const updateOpacity = useCallback((timestamp: number) => {
    // Limitar la velocidad de actualización a 30 fps para mejor rendimiento
    if (timestamp - lastUpdateTime.current >= 33) { // ~30fps (1000ms / 30)
      lastUpdateTime.current = timestamp;
      dispatch({ type: 'UPDATE_OPACITY' });
    }
    
    animationFrameId.current = requestAnimationFrame(updateOpacity);
  }, []);

  // Iniciar y detener la animación basado en visibilidad
  useEffect(() => {
    if (state.visible) {
      lastUpdateTime.current = performance.now();
      animationFrameId.current = requestAnimationFrame(updateOpacity);
    } else if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [state.visible, updateOpacity]);

  // Escuchar el evento de desplazamiento con throttling
  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // No renderizar si no es visible
  if (!state.visible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center" 
         style={{ 
           opacity: state.opacity,
           transition: 'opacity 100ms linear'
         }}>
      <p className="text-lg md:text-2xl font-semibold text-black mb-3 
                    bg-white/70 px-4 py-1 rounded-full backdrop-blur-sm">
        Sigue deslizando
      </p>
      <div className="text-[#B9FF66] text-6xl md:text-8xl animate-bounce shadow-lg will-change-transform">
        ↓ {/* Flecha hacia abajo */}
      </div>
    </div>
  );
};
