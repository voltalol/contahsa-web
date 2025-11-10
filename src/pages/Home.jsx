import React, { useCallback } from 'react';
import { Box, Typography, Container, Button, Grid, Paper, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { DollarSign, TrendingUp, Shield, ChevronRight } from 'lucide-react';
// 1. IMPORTACIÓN CLAVE: Importamos el componente de lógica de animación
import ScrollAnimation from './ScrollAnimation';

// Colores definidos en el diseño
const PRIMARY_DARK = '#0B0B0B';
const ACCENT_GREEN = '#00A79D';
const WHITE = '#FFFFFF';
const LIGHT_GREY = '#F8F9FA';

// Datos para la sección de Valor/Servicios
const valueProps = [
    {
        icon: DollarSign,
        title: "Optimización Fiscal",
        details: "Maximizamos tus deducciones legales y minimizamos tu carga tributaria, garantizando siempre el cumplimiento con la ley hondureña.",
    },
    {
        icon: TrendingUp,
        title: "Análisis Estratégico",
        details: "Transformamos tus datos contables en reportes accionables para que tomes decisiones que impulsen el crecimiento y la rentabilidad.",
    },
    {
        icon: Shield,
        title: "Tranquilidad Garantizada",
        details: "Nos encargamos de todo el ciclo de impuestos (SAR, ISR, ISV, Planillas). Cero errores, cero multas y 100% de cumplimiento.",
    },
];

const Home = () => {
    const navigate = useNavigate(); // Hook para navegación programática
    const transitionStyle = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';

    // FUNCIÓN CORREGIDA: Fuerza el scroll a la parte superior de la ventana antes de navegar.
    const handleContactClick = useCallback(() => {
        window.scrollTo(0, 0); // Esto fuerza el desplazamiento al inicio de la ventana
        navigate('/contact');
    }, [navigate]);

    return (
        <Box sx={{ width: '100%', overflowX: 'hidden' }}>

            {/* === SECCIÓN 1: HERO (INICIO) === */}
            <Box
                sx={{
                    position: 'relative',
                    minHeight: { xs: '750px', sm: '850px', md: '100vh' },
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: WHITE,
                    py: { xs: 8, md: 0 }
                }}
            >
                {/* ELEMENTO DE VIDEO DE FONDO */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -2,
                        filter: 'brightness(0.6) grayscale(0.2)',
                    }}
                >
                    <source src="/7593784-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-at-home-1116473-large.mp4" type="video/mp4" onError={(e) => e.target.style.display = 'none'} />
                    Tu navegador no soporta la etiqueta de video.
                </video>

                {/* OVERLAY SEMI-TRANSPARENTE */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: -1,
                    }}
                />

                {/* CONTENIDO PRINCIPAL (Logo, Texto, Botón) */}
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 0 } }}>
                    
                    {/* Logo/Marca */}
                    <ScrollAnimation delay={0}>
                        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/contahsalogo2.png"
                                alt="Logo CONTÁHSA"
                                style={{
                                    height: 'auto',
                                    maxHeight: '600px',
                                    maxWidth: '90%',
                                    width: 'auto',
                                    filter: `drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))`,
                                }}
                            />
                        </Box>
                    </ScrollAnimation>

                    {/* Subtítulo / Propuesta de Valor */}
                    <ScrollAnimation delay={0.2}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                color: WHITE,
                                fontWeight: 700,
                                mb: 6,
                                maxWidth: 700,
                                mx: 'auto',
                                textShadow: '0 2px 6px rgba(0,0,0,0.7)'
                            }}
                        >
                            Servicios contables, financieros y tributarios de alta calidad, adaptados a tus necesidades.
                        </Typography>
                    </ScrollAnimation>

                    {/* Botón CTA (Inicio) - Utilizamos onClick y useNavigate */}
                    <ScrollAnimation delay={0.4}>
                        <Button
                            onClick={handleContactClick} // Llama a la función que hace scroll y navega
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: ACCENT_GREEN,
                                color: WHITE,
                                fontWeight: 700,
                                py: 1.5,
                                px: 4,
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                boxShadow: '0 6px 12px rgba(0, 167, 157, 0.4)',
                                transition: transitionStyle,
                                '&:hover': {
                                    bgcolor: PRIMARY_DARK,
                                    boxShadow: '0 8px 16px rgba(0, 91, 150, 0.4)',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            AGENDA TU ASESORÍA GRATUITA
                            <ChevronRight style={{ marginLeft: 8, width: 20 }} />
                        </Button>
                    </ScrollAnimation>
                </Container>
            </Box>


            {/* === SECCIÓN 2: VALORES CLAVE / SERVICIOS === */}
            <Box sx={{ bgcolor: LIGHT_GREY, py: { xs: 10, md: 16 } }}>
                <Container maxWidth="lg">
                    {/* Título de la sección */}
                    <ScrollAnimation delay={0}>
                        <Typography
                            variant="h4"
                            component="h2"
                            align="center"
                            sx={{ fontWeight: 700, color: PRIMARY_DARK, mb: { xs: 3, md: 2 } }}
                        >
                            ¿Por qué elegir a CONTAHSA?
                        </Typography>
                    </ScrollAnimation>
                    
                    {/* Subtítulo de la sección */}
                    <ScrollAnimation delay={0.1}>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{ color: '#6C757D', mb: { xs: 8, md: 10 } }}
                        >
                            Te ofrecemos más que contabilidad; te brindamos una ventaja estratégica.
                        </Typography>
                    </ScrollAnimation>

                    {/* Grid de tarjetas, cada una con un ScrollAnimation */}
                    <Grid container spacing={4} justifyContent="center">
                        {valueProps.map((prop, index) => {
                            const IconComponent = prop.icon;
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    {/* 2. USO: Aplicamos la animación con un retraso en cascada */}
                                    <ScrollAnimation delay={0.1 * (index + 2)}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 4,
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                height: '100%',
                                                transition: transitionStyle,
                                                borderBottom: `4px solid ${ACCENT_GREEN}`,
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: PRIMARY_DARK, mb: 2 }}>
                                                <IconComponent size={48} style={{ color: ACCENT_GREEN }} />
                                            </Box>
                                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1.5, color: PRIMARY_DARK }}>
                                                {prop.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#343A40' }}>
                                                {prop.details}
                                            </Typography>
                                            <Button
                                                component={Link}
                                                to="/services"
                                                variant="text"
                                                sx={{
                                                    mt: 3,
                                                    color: ACCENT_GREEN,
                                                    fontWeight: 600,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': { textDecoration: 'underline', color: PRIMARY_DARK }
                                                }}
                                            >
                                                SABER MÁS
                                            </Button>
                                        </Paper>
                                    </ScrollAnimation>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>


            {/* === SECCIÓN 3: CTA FINAL (CONTÁCTANOS) === */}
            <Box sx={{ bgcolor: PRIMARY_DARK, py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                <Container maxWidth="md">
                    {/* Título CTA */}
                    <ScrollAnimation delay={0}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: 700, color: WHITE, mb: 2 }}
                        >
                            Tu Tranquilidad Fiscal es Nuestra Prioridad.
                        </Typography>
                    </ScrollAnimation>
                    
                    {/* Subtítulo CTA */}
                    <ScrollAnimation delay={0.1}>
                        <Typography
                            variant="h6"
                            sx={{ color: '#DEDEDE', mb: 5 }}
                        >
                            Déjanos manejar tu contabilidad mientras te enfocas en expandir tu negocio.
                        </Typography>
                    </ScrollAnimation>

                    {/* Botón CTA (Final) - Utilizamos onClick y useNavigate */}
                    <ScrollAnimation delay={0.2}>
                        <Button
                            onClick={handleContactClick} // Llama a la función que hace scroll y navega
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: ACCENT_GREEN,
                                color: WHITE,
                                fontWeight: 700,
                                py: 1.5,
                                px: 4,
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                boxShadow: '0 6px 12px rgba(0, 167, 157, 0.4)',
                                transition: transitionStyle,
                                '&:hover': {
                                    bgcolor: WHITE, // Cambia a blanco en hover para contraste
                                    color: PRIMARY_DARK, // El texto se pone oscuro
                                    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.4)',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            CONTÁCTANOS HOY
                            <ChevronRight style={{ marginLeft: 8, width: 20 }} />
                        </Button>
                    </ScrollAnimation>
                </Container>
            </Box>

        </Box>
    );
};

export default Home;