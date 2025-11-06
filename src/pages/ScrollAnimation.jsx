import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';

// Estilos CSS nativos para las animaciones más complejas
const styles = `
.fade-in-base {
    opacity: 0;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Efecto 1: Deslizamiento Suave (Slide Up) */
.fade-in-slide {
    transform: translateY(30px);
}
.fade-in-slide.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Efecto 2: Zoom y Rotación Sutil (Para elementos destacados como el logo o tarjetas) */
.fade-in-zoom {
    transform: scale(0.95) rotateZ(-1deg); /* Más pequeño y ligeramente rotado */
}
.fade-in-zoom.is-visible {
    opacity: 1;
    transform: scale(1) rotateZ(0deg); /* Vuelve a tamaño normal y sin rotación */
    transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Curva de transición más sofisticada */
}

/* Fallback: Solo Fade (Si el efecto es 'fade' o no está definido) */
.fade-in-default.is-visible {
    opacity: 1;
}
`;

/**
 * Componente Wrapper para aplicar una animación al hacer scroll.
 * Permite seleccionar el tipo de efecto: 'slide', 'zoom' o 'fade' (default).
 */
const ScrollAnimation = ({ children, delay = 0, effect = 'slide' }) => {
    // Referencia al elemento DOM que queremos observar
    const domRef = useRef();
    
    // Estado para saber si el elemento es visible
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Si solo queremos que se anime una vez
                setIsVisible(true);
                observer.unobserve(domRef.current); 
            }
        }, {
            rootMargin: '0px',
            // Detecta cuando una pequeña parte del elemento entra
            threshold: 0.1 
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []); 

    // Determinar las clases CSS basadas en el efecto seleccionado
    const effectClass = 
        effect === 'zoom' ? 'fade-in-zoom' : 
        effect === 'slide' ? 'fade-in-slide' : 
        'fade-in-default';

    const visibilityClass = isVisible ? 'is-visible' : '';

    return (
        <Box
            ref={domRef}
            // Combinamos la clase base con la clase de efecto y visibilidad
            className={`fade-in-base ${effectClass} ${visibilityClass}`}
            sx={{
                width: '100%',
                transitionDelay: `${delay}s` 
            }}
        >
            {/* Inyección de estilos CSS */}
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            {children}
        </Box>
    );
};

export default ScrollAnimation;