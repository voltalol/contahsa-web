import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'; 

// Importación simulada de íconos de Material UI
import { 
    AccountBalanceWallet as ContabilidadIcon, 
    Gavel as FiscalIcon,              
    TrendingUp as FinanzasIcon,              
    Groups as PlanillaIcon,              
    Star as AdicionalesIcon,
    ExpandMore as ExpandMoreIcon,
    CheckCircle as CheckIcon, 
    Lightbulb as IdeaIcon 
} from '@mui/icons-material'; 

// --- PALETA DE COLORES Y ESTILOS ---
const PRIMARY_COLOR = '#005B96';      // Azul Oscuro (Primario CONTAHSA)
const ACCENT_COLOR = '#00A79D';      // Verde Azulado (Acento CONTAHSA)
const LIGHT_BACKGROUND = '#f7f9fc';  // Fondo Suave
const TEXT_DARK = '#2B2B2B';          // Texto Principal
const SUB_TEXT_COLOR = '#7A7A7A';     // Texto Secundario/Gris

// --- DATOS DE SERVICIOS (Extraídos del PDF de CONTAHSA) ---
const serviceData = [
    {
        title: "Servicios Contables Básicos",
        icon: ContabilidadIcon,
        color: PRIMARY_COLOR,
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
        icon: FiscalIcon,
        color: ACCENT_COLOR,
        summary: "Cumplimiento total en Honduras: Nos encargamos de todas sus obligaciones fiscales para evitar multas y asegurar su tranquilidad legal.",
        details: [
            "Declaraciones mensuales y anuales (ISR, ISV, RAP, IHSS, Retención en la fuente 1%, Retención del 12.5% Honorarios).",
            "Revisión de cumplimiento tributario.",
            "Impuesto de Bienes Inmuebles."
        ],
    },
    {
        title: "Asesoría y Planificación Financiera",
        icon: FinanzasIcon,
        color: PRIMARY_COLOR,
        summary: "Estrategia para el crecimiento: Proyectamos el futuro de su empresa, analizamos su rentabilidad y ofrecemos un diagnóstico claro para la toma de decisiones.",
        details: [
            "Proyecciones de flujo de caja, Estados Financieros Sensibilizados.",
            "Análisis de rentabilidad.",
            "Diagnóstico financiero."
        ],
    },
    {
        title: "Planilla y Recursos Humanos",
        icon: PlanillaIcon,
        color: ACCENT_COLOR,
        summary: "Gestión laboral sin errores: Procesamos su nómina y gestionamos las obligaciones con el personal conforme a la ley hondureña.",
        details: [
            "Cálculo y elaboración de planillas.",
            "Cálculo de prestaciones laborales y liquidaciones.",
            "Asesoría en cumplimiento laboral."
        ],
    },
    {
        title: "Servicios Adicionales",
        icon: AdicionalesIcon,
        color: PRIMARY_COLOR,
        summary: "Soluciones complementarias: Desde la implementación de sistemas hasta la constitución legal de su empresa, le damos soporte integral.",
        details: [
            "Implementación de sistemas contables (Contífico, Alegra, QuickBooks).",
            "Auditorías internas o preparación para auditorías externas.",
            "Constitución de empresas (registro mercantil, RTN, licencias)."
        ],
    },
];

// --- 1. COMPONENTE DE TARJETA DE SERVICIO INTERACTIVA ---
const ServiceCard = ({ service }) => {
    // Estado para controlar la expansión de los detalles
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const IconComponent = service.icon;

    return (
        <Paper 
            elevation={6} 
            sx={{ 
                p: { xs: 3, sm: 4 }, 
                height: '100%', 
                borderRadius: '16px',
                borderTop: `6px solid ${service.color}`, 
                transition: 'transform 0.4s, box-shadow 0.4s',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': { 
                    transform: 'translateY(-8px)', 
                    boxShadow: `0 20px 40px rgba(0, 91, 150, 0.15)` 
                } 
            }}
        >
            <Box>
                {/* Ícono grande y colorido */}
                <IconComponent 
                    sx={{ 
                        fontSize: { xs: 50, md: 60 }, 
                        color: service.color, 
                        mb: 2,
                        p: 1.5,
                        borderRadius: '50%',
                        backgroundColor: `${service.color}10`, // Fondo muy claro
                    }} 
                />
                
                {/* Título */}
                <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                        fontWeight: 700, 
                        color: TEXT_DARK,
                        mt: 1
                    }}
                >
                    {service.title}
                </Typography>

                {/* Resumen */}
                <Typography 
                    variant="body1" 
                    sx={{ 
                        color: TEXT_DARK, 
                        mb: 2, 
                        minHeight: '60px'
                    }}
                >
                    {service.summary}
                </Typography>
            </Box>

            <Box sx={{ mt: 'auto' }}>
                {/* Botón de Expansión/Interactivo */}
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="mostrar detalles"
                    sx={{
                        color: service.color,
                        p: 0,
                        transition: 'transform 0.3s',
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        fontWeight: 600,
                        '&:hover': { backgroundColor: 'transparent' }
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem', mr: 1, textTransform: 'uppercase' }}>
                        {expanded ? 'Ocultar Detalles' : 'Ver Detalles'}
                    </Box>
                    <ExpandMoreIcon />
                </IconButton>

                {/* Sección Colapsable para los Detalles */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ mt: 2 }}>
                        {service.details.map((detail, index) => (
                            <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: '30px', color: ACCENT_COLOR }}>
                                    <CheckIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={detail} 
                                    primaryTypographyProps={{ 
                                        variant: 'body2', 
                                        color: SUB_TEXT_COLOR, 
                                        lineHeight: 1.4
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </Box>
        </Paper>
    );
};

// --- 2. COMPONENTE PRINCIPAL (Services) ---
// Se renombra la función a Services y se mantiene como la exportación por defecto
export default function Services() {
    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                py: { xs: 4, md: 8 }, 
                px: { xs: 2, sm: 3 }, 
                minHeight: '100vh', 
                backgroundColor: LIGHT_BACKGROUND,
                fontFamily: 'Inter, sans-serif'
            }}
        >
            {/* Título Principal */}
            <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
                <Typography 
                    variant="h2" 
                    component="h1" 
                    sx={{ 
                        fontWeight: 800, 
                        color: PRIMARY_COLOR, 
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        mb: 2
                    }}
                >
                    Nuestros Servicios Integrales
                </Typography>
                <Typography 
                    variant="h6" 
                    color={TEXT_DARK}
                    sx={{ 
                        maxWidth: '700px', 
                        mx: 'auto',
                        fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                >
                    CONTAHSA ofrece una gestión contable y fiscal sin complicaciones, 
                    permitiéndole concentrarse en el crecimiento de su negocio en Honduras.
                </Typography>
            </Box>

            {/* Grid de Tarjetas de Servicio */}
            <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
                {serviceData.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ServiceCard service={service} />
                    </Grid>
                ))}
            </Grid>
            
            {/* Call to Action Final */}
            <Paper 
                elevation={12} 
                sx={{ 
                    mt: { xs: 8, md: 12 }, 
                    p: { xs: 4, md: 8 },
                    minHeight: { xs: 150, sm: 200 }, 
                    borderRadius: '16px',
                    textAlign: 'center',
                    backgroundColor: PRIMARY_COLOR, 
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <IdeaIcon 
                    sx={{ 
                        fontSize: { xs: 50, md: 60 }, 
                        color: ACCENT_COLOR, 
                        mb: 2 
                    }} 
                />
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                        fontWeight: 800, 
                        color: 'white',
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        mb: 1
                    }}
                >
                    Deje la Carga Contable en Manos Expertas
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'white',
                        maxWidth: '800px',
                        mx: 'auto',
                        fontWeight: 300,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                >
                    Nuestro enfoque es darle la claridad financiera y la tranquilidad fiscal que necesita para tomar decisiones estratégicas y enfocarse en el crecimiento de su PyME en Honduras.
                </Typography>
            </Paper>

        </Container>
    );
}
