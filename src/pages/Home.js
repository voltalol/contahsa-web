import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container, Card, CardContent } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield'; 
import GavelIcon from '@mui/icons-material/Gavel'; // 🎉 Importado el ícono de martillo

// 🚀 Asume que el componente Hero está en esta ruta.
import Hero from '../components/Hero'; 

// PALETA DE COLORES OFICIAL DE CONTAHSA
const PRIMARY_DARK = '#005B96';        
const ACCENT_GREEN = '#00A79D';        
const PRIMARY_MEDIUM = '#007FC4';      
const MAIN_TEXT_COLOR = '#2B2B2B';     
const SUB_TEXT_COLOR = '#7A7A7A';      
const LIGHT_GREY = '#f7f9fc';          
const WHITE = '#FFFFFF';               

// Datos de Valor de CONTAHSA (Mantenidos uniformes)
const valueProps = [
    { 
        icon: <SavingsIcon />, 
        title: "Optimización Fiscal", 
        details: "Maximizamos tus deducciones legales y minimizamos tu carga tributaria, garantizando siempre el cumplimiento con la ley hondureña.", 
    },
    { 
        icon: <TrendingUpIcon />, 
        title: "Análisis Estratégico", 
        details: "Transformamos tus datos contables en reportes accionables para que tomes decisiones que impulsen el crecimiento y la rentabilidad de tu negocio.",
    },
    { 
        icon: <ShieldIcon />, 
        title: "Tranquilidad Garantizada", 
        details: "Nos encargamos de todo el ciclo de impuestos (SAR, ISR, ISV, Planillas). Cero errores, cero multas y 100% de cumplimiento garantizado.",
    },
];

const HomePage = () => {
    return (
        <Box>
            
            {/* 1. HERO SECTION (Componente Modular) */}
            <Hero />
            
            {/* 2. SECCIÓN: NUESTRO VALOR (Tarjetas de tamaño y contenido alineado con Flexbox y minHeight) */}
            <Box sx={{ py: 8, bgcolor: LIGHT_GREY, px: 3 }}>
                <Container maxWidth="lg">
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        align="center" 
                        sx={{ color: PRIMARY_DARK, fontWeight: 600, mb: 2 }}
                    >
                        ¿Por qué elegir a CONTAHSA?
                    </Typography>
                    <Typography 
                        variant="h6" 
                        align="center" 
                        sx={{ color: SUB_TEXT_COLOR, mb: 6 }}
                    >
                        Te ofrecemos más que contabilidad; te brindamos una ventaja estratégica.
                    </Typography>
                    
                    <Grid container spacing={4} alignItems="stretch"> 
                        {valueProps.map((prop, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card 
                                    elevation={4} 
                                    sx={{ 
                                        textAlign: 'center', 
                                        p: 4, 
                                        height: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        justifyContent: 'space-between', 
                                        borderBottom: `5px solid ${ACCENT_GREEN}`, 
                                        transition: '0.3s', 
                                        '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 } 
                                    }}
                                >
                                    <CardContent sx={{ 
                                        flexGrow: 1, 
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                     }}> 
                                        {/* Ícono grande en color principal */}
                                        {React.cloneElement(prop.icon, { sx: { color: PRIMARY_DARK, fontSize: 55, mb: 2 } })}
                                        
                                        {/* Título de la Tarjeta */}
                                        <Typography 
                                            variant="h5" 
                                            component="h3" 
                                            gutterBottom 
                                            sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600 }}
                                        >
                                            {prop.title}
                                        </Typography>
                                        
                                        {/* Descripción con minHeight para igualar el espacio */}
                                        <Typography 
                                            variant="body1" 
                                            sx={{ 
                                                color: SUB_TEXT_COLOR, 
                                                mb: 3,
                                                minHeight: { xs: 'auto', md: '75px' } 
                                            }}
                                        >
                                            {prop.details}
                                        </Typography>
                                    </CardContent>
                                    
                                    {/* Contenedor Box para centrar el botón y limitar su ancho */}
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <Button 
                                            component={Link} 
                                            to="/services" 
                                            variant="outlined" 
                                            size="small" 
                                            sx={{ 
                                                color: ACCENT_GREEN, 
                                                borderColor: ACCENT_GREEN, 
                                                '&:hover': { bgcolor: 'rgba(0, 167, 157, 0.1)' },
                                                minWidth: 120,
                                            }}
                                        >
                                            SABER MÁS
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            
            {/* 3. SECCIÓN: LLAMADA A LA ACCIÓN (CTA - Testimonio) */}
            <Box sx={{ py: 8, bgcolor: PRIMARY_DARK, px: 3 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center', color: WHITE }}>
                    {/* 🎉 CAMBIO AQUÍ: Ahora es un martillo */}
                    <GavelIcon sx={{ fontSize: 50, color: ACCENT_GREEN, mb: 2 }} />
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        gutterBottom 
                        sx={{ fontWeight: 600, mb: 4 }}
                    >
                        Más que Cumplimiento: Crecimiento
                    </Typography>
                    
                    {/* Testimonio Integrado para generar confianza */}
                    <Card elevation={0} sx={{ p: 4, mb: 4, bgcolor: PRIMARY_MEDIUM, borderRadius: 2 }}>
                        <Typography variant="h6" fontStyle="italic" sx={{ color: WHITE }}>
                            "Contar con CONTAHSA fue la mejor decisión. Su gestión fiscal y asesoría estratégica nos dio la tranquilidad para escalar nuestro negocio sin preocupaciones legales."
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 2, fontWeight: 'bold' }}>
                            — Roberto Fúnez, CEO de Logística HN
                        </Typography>
                    </Card>
                </Container>
            </Box>

        </Box>
    );
};

export default HomePage;