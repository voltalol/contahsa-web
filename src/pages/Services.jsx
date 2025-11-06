import React, { useState, useEffect } from 'react';
// Íconos de Lucide React
import {
    Wallet,
    Scale,
    TrendingUp,
    Users,
    Star,
    ChevronDown,
    Check,
    Lightbulb,
    ArrowRight,
    MessageCircle, // Nuevo ícono para WhatsApp
} from 'lucide-react';

// --- DEFINICIÓN DE COLORES Y ESTILOS NATIVOS ---

// Colores de la paleta (Hexadecimales)
const COLORS = {
    PRIMARY: '#3730a3', // Indigo-800
    ACCENT: '#06b6d4',  // Cyan-500
    BACKGROUND_LIGHT: '#f9fafb', // Gray-50
    TEXT_DARK: '#1f2937', // Gray-900
    // Fondos suaves para tarjetas
    INDIGO_LIGHT: '#e0e7ff', // Indigo-100
    CYAN_LIGHT: '#cffafe', // Cyan-100
    TEXT_GRAY: '#4b5563', // Gray-600
    WHATSAPP: '#25D366', // Color oficial de WhatsApp
};

// Estilos base reutilizables
const baseStyles = {
    pageContainer: {
        backgroundColor: COLORS.BACKGROUND_LIGHT,
        fontFamily: 'Inter, sans-serif',
        paddingTop: '3rem', // py-12
        paddingBottom: '5rem', // py-20
    },
    contentWrapper: {
        maxWidth: '1280px', // max-w-7xl
        margin: '0 auto',
        paddingLeft: '1rem', // px-4
        paddingRight: '1rem',
        '@media (min-width: 640px)': {
            paddingLeft: '1.5rem', // sm:px-6
            paddingRight: '1.5rem',
        },
        '@media (min-width: 1024px)': {
            paddingLeft: '2rem', // lg:px-8
            paddingRight: '2rem',
        },
    },
    header: {
        textAlign: 'center',
        maxWidth: '900px', // max-w-4xl
        margin: '0 auto',
        marginBottom: '3rem', // mb-12
        '@media (min-width: 768px)': {
            marginBottom: '4rem', // md:mb-16
        },
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '2rem', // gap-8
        '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)', // md:grid-cols-2
        },
        '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, 1fr)', // lg:grid-cols-3
        },
        '@media (min-width: 1280px)': {
            gap: '2.5rem', // xl:gap-10
        },
    },
};

// --- DATOS DE SERVICIOS ---
const serviceData = [
    {
        title: "Servicios Contables Básicos",
        icon: Wallet,
        colorName: 'indigo',
        summary: "El cimiento de su gestión: garantizamos registros precisos y reportes financieros oportunos para una visibilidad total de su negocio.",
        details: [
            "Registro de transacciones (diario, mayor, balance).",
            "Preparación de estados financieros mensuales.",
            "Conciliaciones bancarias.",
            "Control de cuentas por pagar y cobrar."
        ],
    },
    {
        title: "Servicios Fiscales",
        icon: Scale,
        colorName: 'cyan',
        summary: "Cumplimiento total en Honduras: Nos encargamos de todas sus obligaciones fiscales para evitar multas y asegurar su tranquilidad legal.",
        details: [
            "Declaraciones mensuales y anuales (ISR, ISV, RAP, IHSS, Retención en la fuente 1%, Retención del 12.5% Honorarios).",
            "Revisión de cumplimiento tributario.",
            "Impuesto de Bienes Inmuebles."
        ],
    },
    {
        title: "Asesoría y Planificación Financiera",
        icon: TrendingUp,
        colorName: 'indigo',
        summary: "Estrategia para el crecimiento: Proyectamos el futuro de su empresa, analizamos su rentabilidad y ofrecemos un diagnóstico claro para la toma de decisiones.",
        details: [
            "Proyecciones de flujo de caja, Estados Financieros Sensibilizados.",
            "Análisis de rentabilidad.",
            "Diagnóstico financiero."
        ],
    },
    {
        title: "Planilla y Recursos Humanos",
        icon: Users,
        colorName: 'cyan',
        summary: "Gestión laboral sin errores: Procesamos su nómina y gestionamos las obligaciones con el personal conforme a la ley hondureña.",
        details: [
            "Cálculo y elaboración de planillas.",
            "Cálculo de prestaciones laborales y liquidaciones.",
            "Asesoría en cumplimiento laboral."
        ],
    },
    {
        title: "Servicios Adicionales",
        icon: Star,
        colorName: 'indigo',
        summary: "Soluciones complementarias: Desde la implementación de sistemas hasta la constitución legal de su empresa, le damos soporte integral.",
        details: [
            "Implementación de sistemas contables (Contífico, Alegra, QuickBooks).",
            "Auditorías internas o preparación para auditorías externas.",
            "Constitución de empresas (registro mercantil, RTN, licencias)."
        ],
    },
];

// Función para generar el enlace de WhatsApp con el mensaje codificado
const generateWhatsAppLink = (serviceTitle) => {
    // Número de Honduras con código de país
    const phoneNumber = '50494876832'; 
    
    // Mensaje predefinido con la estructura solicitada
    const message = `Hola, me gustaría consultar sobre el servicio de ${serviceTitle} que ofrece Contahsa. ¿Podrían darme más información?`;
    
    // Codifica el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// --- COMPONENTE DE TARJETA DE SERVICIO INTERACTIVA ---
const ServiceCard = ({ service, index }) => {
    const [expanded, setExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Estado para la animación de entrada (simulación ScrollAnimation)
    
    // Genera el enlace de WhatsApp específico para este servicio
    const whatsappLink = generateWhatsAppLink(service.title);

    // Simula la detección de visibilidad al cargar (similar a Intersection Observer)
    useEffect(() => {
        // Retraso escalonado para las tarjetas (150ms * index)
        const delay = 150 * index;
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [index]);

    const IconComponent = service.icon;

    // Asignar colores HEX basados en el nombre del color
    const primaryHex = service.colorName === 'indigo' ? COLORS.PRIMARY : COLORS.ACCENT;
    const backgroundHex = service.colorName === 'indigo' ? COLORS.INDIGO_LIGHT : COLORS.CYAN_LIGHT;

    const cardStyles = {
        padding: '2rem', // p-8
        height: '100%',
        borderRadius: '1rem', // rounded-2xl
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderLeft: `8px solid ${primaryHex}`, // border-l-8
        boxShadow: isHovered 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' // shadow-2xl
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-xl
        
        // Animación de aparición (ScrollAnimation simulada)
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)', // Animación de abajo hacia arriba
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease-in-out',
        transitionDelay: `${index * 0.15}s`, // Staggered effect
        
        cursor: 'default',
        '@media (min-width: 640px)': {
            padding: '2rem', // sm:p-8
        }
    };

    // Estilos para el nuevo botón de WhatsApp (más pequeño)
    const whatsappButtonStyles = {
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem', // Padding más pequeño
        borderRadius: '9999px', // rounded-full (más suave)
        backgroundColor: COLORS.WHATSAPP,
        color: 'white',
        fontSize: '0.9rem', // Tamaño de fuente ligeramente más pequeño
        fontWeight: '600', // font-semibold
        textDecoration: 'none', 
        transition: 'background-color 0.2s ease, transform 0.2s ease',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    
    const detailsStyles = {
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out, padding-top 0.5s ease-in-out',
        maxHeight: expanded ? '1000px' : '0', // Valor alto para simular max-h-screen
        paddingTop: expanded ? '1rem' : '0', // pt-4
    };

    return (
        <div
            style={cardStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                {/* Ícono grande y colorido */}
                <div 
                    style={{
                        width: '4rem', // w-16
                        height: '4rem', // h-16
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '9999px', // rounded-full
                        marginBottom: '1rem', // mb-4
                        color: primaryHex,
                        backgroundColor: backgroundHex,
                    }}
                >
                    <IconComponent style={{ width: '2rem', height: '2rem' }} /> {/* w-8 h-8 */}
                </div>

                {/* Título */}
                <h3 style={{ 
                    fontSize: '1.5rem', // text-2xl
                    fontWeight: '800', // font-extrabold
                    color: COLORS.TEXT_DARK,
                    marginTop: '0.25rem', // mt-1
                    marginBottom: '0.5rem', // mb-2
                }}>
                    {service.title}
                </h3>

                {/* Resumen */}
                <p style={{ 
                    fontSize: '1rem', // text-base
                    color: COLORS.TEXT_GRAY,
                    marginBottom: '1rem', // mb-4
                    minHeight: '60px', // min-h-[60px]
                    lineHeight: '1.625', // leading-relaxed
                }}>
                    {service.summary}
                </p>
                
                {/* Contenedor para alinear el botón de WhatsApp a la derecha */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', // ALINEACIÓN A LA DERECHA
                    marginBottom: '1rem', // Espacio abajo
                }}>
                    {/* --- BOTÓN DE WHATSAPP (CONSULTAR AHORA) --- */}
                    <a
                        href={whatsappLink}
                        target="_blank" // Abre en una nueva pestaña
                        rel="noopener noreferrer"
                        style={whatsappButtonStyles}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1DA851'; // Un verde más oscuro al pasar el ratón
                            e.currentTarget.style.transform = 'translateY(-2px)'; // Efecto de elevación
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.WHATSAPP;
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <MessageCircle style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                        Consultar Ahora
                    </a>
                </div>
                {/* Fin del contenedor de alineación */}

            </div>

            <div style={{ marginTop: 'auto' }}>
                
                {/* Botón de Expansión/Interactivo (Saber Más) - Siempre alineado a la izquierda */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-label="mostrar detalles"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.875rem', // text-sm
                        fontWeight: '700', // font-semibold
                        color: primaryHex,
                        padding: '0',
                        transition: 'opacity 0.3s',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        outline: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    <span style={{ marginRight: '0.25rem' }}>
                        {expanded ? 'Ocultar Detalles' : 'Ver Detalles del Servicio'}
                    </span>
                    <ChevronDown 
                        style={{ 
                            width: '1.25rem', // w-5
                            height: '1.25rem', // h-5
                            transition: 'transform 0.3s',
                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }} 
                    />
                </button>

                {/* Sección Colapsable para los Detalles */}
                <div style={detailsStyles}>
                    <ul style={{ 
                        listStyle: 'none',
                        padding: '0',
                        margin: '0',
                        marginTop: expanded ? '0.5rem' : '0', // Agregar margen arriba si está expandido
                        lineHeight: '1.5',
                    }}>
                        {service.details.map((detail, index) => (
                            <li key={index} style={{ 
                                display: 'flex',
                                alignItems: 'flex-start',
                                fontSize: '0.875rem', // text-sm
                                color: COLORS.TEXT_GRAY,
                                marginBottom: '0.5rem'
                            }}>
                                <Check style={{ 
                                    width: '1rem', // w-4
                                    height: '1rem', // h-4
                                    marginTop: '0.125rem', // mt-1
                                    marginRight: '0.5rem', // mr-2
                                    color: COLORS.ACCENT, // Color fijo cian
                                    flexShrink: 0,
                                }} /> 
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPAL (Services Page) ---
const ServicesPage = () => {
    const [isCtaVisible, setIsCtaVisible] = useState(false); // Estado para la animación del CTA
    
    // 1. Hook para hacer SCROLL AL TOPE al cargar la página
    useEffect(() => {
        // Asegura que el scroll esté en la parte superior (0, 0) al montar el componente.
        if (window) {
            window.scrollTo(0, 0);
        }
    }, []);

    // 2. Hook para simular la visibilidad del CTA (animación)
    useEffect(() => {
        // El CTA aparece después de que las tarjetas hayan comenzado a aparecer
        const timer = setTimeout(() => {
            setIsCtaVisible(true);
        }, 800); 
        return () => clearTimeout(timer);
    }, []);

    const ctaStyles = {
        marginTop: '4rem', // mt-16
        '@media (min-width: 768px)': { marginTop: '6rem' }, // md:mt-24
        padding: '2rem', // p-8
        '@media (min-width: 640px)': { padding: '3rem' }, // sm:p-12
        borderRadius: '1rem', // rounded-2xl
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
        backgroundColor: COLORS.PRIMARY,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        // Animación de aparición (ScrollAnimation simulada)
        opacity: isCtaVisible ? '1' : '0',
        transform: isCtaVisible ? 'translateY(0)' : 'translateY(30px)', // Animación de abajo hacia arriba
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: '0.8s', // Retraso mayor para el CTA
    };

    // Usaremos el mismo enlace de WhatsApp genérico para el CTA
    const genericWhatsappLink = generateWhatsAppLink("Consulta General");

    return (
        <div style={baseStyles.pageContainer}>
            
            <div style={baseStyles.contentWrapper}>
                
                {/* Título Principal */}
                <header style={baseStyles.header}>
                    <h1 style={{ 
                        fontSize: '2.25rem', // text-4xl
                        '@media (min-width: 640px)': { fontSize: '3rem' }, // sm:text-5xl
                        '@media (min-width: 768px)': { fontSize: '3.75rem' }, // md:text-6xl
                        fontWeight: '800', // font-extrabold
                        color: COLORS.PRIMARY,
                        marginBottom: '1rem', // mb-4
                        lineHeight: '1.2', // leading-tight
                    }}>
                        Nuestros Servicios Integrales
                    </h1>
                    <p style={{ 
                        fontSize: '1.125rem', // text-xl
                        '@media (min-width: 768px)': { fontSize: '1.5rem' }, // md:text-2xl
                        color: COLORS.TEXT_DARK,
                        fontWeight: '300', // font-light
                    }}>
                        CONTAHSA ofrece una gestión contable y fiscal sin complicaciones, 
                        permitiéndole concentrarse en el crecimiento de su negocio en Honduras.
                    </p>
                </header>

                {/* Grid de Tarjetas de Servicio */}
                <div style={baseStyles.gridContainer}>
                    {serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
                
                {/* Call to Action Final */}
                <div style={ctaStyles}>
                    <Lightbulb style={{ 
                        width: '2.5rem', // w-10 h-10
                        height: '2.5rem', 
                        '@media (min-width: 640px)': { width: '3rem', height: '3rem' }, // sm:w-12 sm:h-12
                        color: COLORS.ACCENT,
                        marginBottom: '1rem', // mb-4
                    }} />
                    <h2 style={{ 
                        fontSize: '1.875rem', // text-3xl
                        '@media (min-width: 640px)': { fontSize: '2.25rem' }, // sm:text-4xl
                        fontWeight: '800', // font-extrabold
                        marginBottom: '0.75rem', // mb-3
                    }}>
                        Deje la Carga Contable en Manos Expertas
                    </h2>
                    <p style={{ 
                        fontSize: '1.125rem', // text-lg
                        '@media (min-width: 640px)': { fontSize: '1.25rem' }, // sm:text-xl
                        fontWeight: '300', // font-light
                        maxWidth: '768px', // max-w-3xl
                        marginBottom: '2rem', // mb-8
                    }}>
                        Nuestro enfoque es darle la claridad financiera y la tranquilidad fiscal que necesita para tomar decisiones estratégicas y enfocarse en el crecimiento de su PyME en Honduras.
                    </p>
                    <a href={genericWhatsappLink} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.75rem 2rem', // px-8 py-3
                        border: '1px solid transparent',
                        fontSize: '1rem', // text-base
                        fontWeight: '700', // font-bold
                        borderRadius: '9999px', // rounded-full
                        color: COLORS.PRIMARY,
                        backgroundColor: 'white',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        textDecoration: 'none', // Asegura que no haya subrayado
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f3f4f6'; // hover:bg-gray-100
                        e.currentTarget.style.transform = 'scale(1.02)'; // hover:scale-[1.02]
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                        Solicitar Consulta Gratuita
                        <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;