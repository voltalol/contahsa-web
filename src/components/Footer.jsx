import React from 'react';
import { Box, Typography, Link, Grid, Container, IconButton, Divider } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// 🎨 PALETA DE COLORES CONTAHSA
const PRIMARY_DARK = '#005B96';
const ACCENT_GREEN = '#00A79D';
const BACKGROUND_DARK = '#0B0B0B';
const TEXT_GRAY = '#CCCCCC';

const Footer = () => {
    // Usamos useNavigate para poder programar la navegación
    const navigate = useNavigate();

    // FUNCIÓN CLAVE: Navega a la ruta y sube la página hasta arriba (0, 0)
    const handleNavigationAndScroll = (path) => {
        // 1. Navega a la nueva ruta usando react-router-dom
        navigate(path);
        
        // 2. Desplaza la ventana a la parte superior (arriba del todo)
        // Esto asegura que la nueva página se muestre desde el inicio.
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave para un mejor UX
        });
    };

    return (
        <Box
            component="footer"
            sx={{
                background: `linear-gradient(180deg, ${BACKGROUND_DARK} 0%, #000000 100%)`,
                color: '#FFFFFF',
                pt: { xs: 8, md: 10 },
                pb: { xs: 5, md: 8 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="space-between">

                    {/* === COLUMNA 1: LOGO Y REDES SOCIALES === */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ mb: 2 }}>
                            <img
                                src="/Logo CH white.png"
                                alt="Logo CONTAHSA"
                                style={{
                                    maxWidth: '220px',
                                    width: '100%',
                                    height: 'auto',
                                    filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.5))',
                                }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                            <IconButton
                                href="https://facebook.com"
                                target="_blank"
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                    '&:hover': {
                                        backgroundColor: ACCENT_GREEN,
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                href="https://linkedin.com"
                                target="_blank"
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(255,255,255,0.08)',
                                    '&:hover': {
                                        backgroundColor: PRIMARY_DARK,
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* === COLUMNA 2: ENLACES RÁPIDOS === */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: ACCENT_GREEN,
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                                mb: 2,
                            }}
                        >
                            Enlaces Rápidos
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {/* ENLACE INICIO MODIFICADO */}
                            <Link 
                                component="button" // Usamos component="button" para manejar el onClick
                                onClick={() => handleNavigationAndScroll('/')} 
                                color="inherit" 
                                underline="none"
                                sx={{
                                    textAlign: 'left', // Alineamos el texto a la izquierda
                                    color: TEXT_GRAY,
                                    '&:hover': { color: ACCENT_GREEN, pl: 0.5, transition: '0.3s' },
                                }}>
                                Inicio
                            </Link>
                            
                            {/* ENLACE NOSOTROS MODIFICADO */}
                            <Link 
                                component="button" // Usamos component="button" para manejar el onClick
                                onClick={() => handleNavigationAndScroll('/about')} 
                                color="inherit" 
                                underline="none"
                                sx={{
                                    textAlign: 'left', // Alineamos el texto a la izquierda
                                    color: TEXT_GRAY,
                                    '&:hover': { color: ACCENT_GREEN, pl: 0.5, transition: '0.3s' },
                                }}>
                                Nosotros
                            </Link>

                            {/* Otros enlaces (usando RouterLink para las rutas que no necesitan scroll al 0,0 por ser páginas diferentes) */}
                            <Link component={RouterLink} to="/services" color="inherit" underline="none"
                                sx={{
                                    color: TEXT_GRAY,
                                    '&:hover': { color: ACCENT_GREEN, pl: 0.5, transition: '0.3s' },
                                }}>
                                Servicios
                            </Link>
                            <Link component={RouterLink} to="/blog" color="inherit" underline="none"
                                sx={{
                                    color: TEXT_GRAY,
                                    '&:hover': { color: ACCENT_GREEN, pl: 0.5, transition: '0.3s' },
                                }}>
                                Blog
                            </Link>
                            <Link component={RouterLink} to="/contact" color="inherit" underline="none"
                                sx={{
                                    color: TEXT_GRAY,
                                    '&:hover': { color: ACCENT_GREEN, pl: 0.5, transition: '0.3s' },
                                }}>
                                Contáctanos
                            </Link>
                        </Box>
                    </Grid>

                    {/* === COLUMNA 3: CONTACTO Y LEGAL === */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: ACCENT_GREEN,
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                                mb: 2,
                            }}
                        >
                            Contáctanos
                        </Typography>
                        <Typography variant="body2" sx={{ color: TEXT_GRAY, mb: 1 }}>
                            Email: contacto@contahsa.com
                        </Typography>
                        <Typography variant="body2" sx={{ color: TEXT_GRAY, mb: 3 }}>
                            Teléfono: +504 9487-6832
                        </Typography>

                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                color: ACCENT_GREEN,
                                fontWeight: 700,
                                mb: 1.5,
                            }}
                        >
                            Legal
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" underline="none" sx={{ color: TEXT_GRAY, '&:hover': { color: ACCENT_GREEN } }}>
                                Términos y Condiciones
                            </Link>
                            <Link href="#" underline="none" sx={{ color: TEXT_GRAY, '&:hover': { color: ACCENT_GREEN } }}>
                                Política de Privacidad
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 5 }} />

                {/* COPYRIGHT */}
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.9rem',
                    }}
                >
                    © {new Date().getFullYear()} CONTAHSA. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;