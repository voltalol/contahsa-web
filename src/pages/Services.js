import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Button, Paper, Grow } from '@mui/material'; // Agregamos Paper y Grow

// --- ÍCONOS DE MATERIAL UI PARA LOS SERVICIOS ---
import GavelIcon from '@mui/icons-material/Gavel'; 
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; 
import GroupsIcon from '@mui/icons-material/Groups'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; 
import SecurityIcon from '@mui/icons-material/Security'; 
import LightbulbIcon from '@mui/icons-material/Lightbulb'; 
import StarIcon from '@mui/icons-material/Star'; 

// --- PALETA DE COLORES OFICIAL DE CONTAHSA ---
const PRIMARY_DARK = '#005B96';        
const ACCENT_GREEN = '#00A79D';        
const PRIMARY_MEDIUM = '#007FC4';      
const MAIN_TEXT_COLOR = '#2B2B2B';     
const SUB_TEXT_COLOR = '#7A7A7A';      
const LIGHT_GREY = '#f7f9fc';          
const WHITE = '#FFFFFF';               

// --- DATOS EXTENDIDOS DE SERVICIOS ---
const servicesData = [
    { 
        icon: <GavelIcon />,
        title: "Asesoría Fiscal y Tributaria", 
        details: "Declaración de Impuesto sobre la Renta (ISR), Impuesto sobre Ventas (ISV), gestiones y trámites ante el SAR y la municipalidad, asegurando la máxima deducción legal.",
        link: "/services/fiscal"
    },
    { 
        icon: <AccountBalanceWalletIcon />,
        title: "Contabilidad General y Estados Financieros", 
        details: "Registro completo de transacciones, elaboración de Balance General, Estado de Resultados y Flujo de Efectivo, 100% conforme a NIIF.", 
        link: "/services/contabilidad"
    },
    { 
        icon: <GroupsIcon />,
        title: "Servicios de Planillas y Recursos Humanos", 
        details: "Cálculo preciso de nómina, manejo de deducciones (IHSS, RAP), liquidaciones laborales, y cumplimiento de todas las obligaciones patronales y sociales en Honduras.", 
        link: "/services/planillas"
    },
    { 
        icon: <BarChartIcon />,
        title: "Auditoría Interna y Externa", 
        details: "Revisión exhaustiva de procesos contables, verificación de la transparencia financiera y detección temprana de riesgos, fraudes e ineficiencias operacionales.", 
        link: "/services/auditoria"
    },
    {
        icon: <TrendingUpIcon />,
        title: "Análisis y Estrategia Financiera",
        details: "Análisis profundo de la salud financiera de tu PYME. Te proveemos métricas y planes de acción para mejorar la rentabilidad, la gestión de costos y el flujo de caja.",
        link: "/services/estrategia"
    },
    {
        icon: <SecurityIcon />,
        title: "Legal y Constitución de Empresas",
        details: "Asesoría en la correcta constitución de nuevas sociedades mercantiles, actualización de libros legales y cumplimiento de regulaciones corporativas en el país.",
        link: "/services/legal"
    }
];

import ServiceCard from '../components/ServiceCard';


const Services = () => {
    return (
        <Box>
            {/* 1. HERO SECTION ESPECÍFICA DE SERVICIOS - CON FONDO GRADIENTE */}
            <Box 
                sx={{ 
                    position: 'relative',
                    bgcolor: PRIMARY_DARK,
                    color: WHITE, 
                    py: { xs: 8, md: 12 }, 
                    textAlign: 'center',
                    overflow: 'hidden',
                    backgroundImage: 'linear-gradient(135deg, #005B96 0%, #007FC4 100%)',
                }}
            >
                <Container maxWidth="md">
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        gutterBottom 
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Soluciones Contables para el Éxito en Honduras
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ color: 'rgba(255,255,255,0.9)', mb: 4 }}
                    >
                        Ofrecemos un portafolio de servicios modulares y escalables, diseñados para liberar tu tiempo y garantizar tu cumplimiento fiscal y laboral, impulsando el crecimiento de tu negocio.
                    </Typography>
                </Container>
            </Box>

            {/* 2. GRID DE SERVICIOS - CON EFECTOS */}
            <Box sx={{ py: 8, px: 3, bgcolor: LIGHT_GREY }}>
                <Container maxWidth="lg">
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        align="center" 
                        gutterBottom 
                        sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600, mb: 6 }}
                    >
                        Nuestros Servicios Especializados
                    </Typography>
                    
                    <Grid container spacing={4}>
                        {servicesData.map((service, index) => (
                            // Mantenemos el key en el Grid item, que es lo correcto para un map
                            <Grid item xs={12} sm={6} md={4} key={index}> 
                                {/* EL ARREGLO ESTÁ AQUÍ: Grow ENVUELVE UN BOX QUE CONTIENE LA CARD */}
                                <Grow in={true} timeout={(index + 1) * 300}>
                                    <Box>
                                        <ServiceCard 
                                            icon={React.cloneElement(service.icon, { sx: { color: PRIMARY_DARK } })} 
                                            title={service.title} 
                                            details={service.details} 
                                            linkTo={service.link}
                                        /> 
                                    </Box>
                                </Grow>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 3. SECCIÓN: ¿POR QUÉ ELEGIR CONTAHSA? */}
            <Box sx={{ py: 8, px: 3, bgcolor: WHITE }}>
                <Container maxWidth="lg">
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        align="center" 
                        gutterBottom 
                        sx={{ color: PRIMARY_DARK, fontWeight: 600, mb: 6 }}
                    >
                        ¿Por Qué Elegir a CONTAHSA?
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 10 } }}>
                                <LightbulbIcon sx={{ fontSize: 60, color: ACCENT_GREEN, mb: 2 }} />
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600 }}>
                                    Asesoría Experta
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR }}>
                                    Contadores certificados con años de experiencia en el marco legal y tributario de Honduras.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 10 } }}>
                                <StarIcon sx={{ fontSize: 60, color: PRIMARY_DARK, mb: 2 }} />
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600 }}>
                                    Tecnología y Eficiencia
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR }}>
                                    Utilizamos las últimas herramientas para una gestión contable rápida, transparente y sin errores.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 10 } }}>
                                <GroupsIcon sx={{ fontSize: 60, color: ACCENT_GREEN, mb: 2 }} />
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600 }}>
                                    Atención Personalizada
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR }}>
                                    Entendemos tu negocio. Ofrecemos soluciones a medida que se adaptan a tus necesidades específicas.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* 4. LLAMADA A LA ACCIÓN FINAL - MÁS VISIBLE Y DIRECTA */}
            <Box 
                sx={{ 
                    bgcolor: PRIMARY_DARK, 
                    py: { xs: 6, md: 10 }, 
                    textAlign: 'center', 
                    color: WHITE,
                    backgroundImage: 'linear-gradient(to right, #005B96, #007FC4)',
                }}
            >
                <Container maxWidth="md">
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        gutterBottom 
                        sx={{ fontWeight: 700, mb: 3 }}
                    >
                        Impulsa tu Negocio con CONTAHSA
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ color: 'rgba(255,255,255,0.9)', mb: 4 }}
                    >
                        Deja tu contabilidad en manos expertas y concéntrate en lo que mejor sabes hacer: hacer crecer tu empresa.
                    </Typography>
                    <Button 
                        component={Link} 
                        to="/contact" 
                        variant="contained" 
                        size="large"
                        sx={{ 
                            bgcolor: ACCENT_GREEN, 
                            color: WHITE,
                            '&:hover': { bgcolor: PRIMARY_MEDIUM, transform: 'scale(1.05)' },
                            transition: '0.3s',
                            borderRadius: '30px', 
                            px: 6, 
                            py: 2,
                            fontSize: '1.1rem',
                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        Agenda una Consulta Ahora
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Services;