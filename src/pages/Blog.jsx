import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CategoryIcon from '@mui/icons-material/Category';

// === COLORES Y ESTILOS BASE DE CONTAHSA ===
const PRIMARY_DARK = '#005B96';
const ACCENT_GREEN = '#00A79D';
const LIGHT_BACKGROUND = '#f7f9fc';
const MAIN_TEXT = '#2B2B2B';
const SUB_TEXT = '#7A7A7A';
const WHITE = '#FFFFFF';

const Blog = () => {
    // Datos simulados (placeholders)
    const posts = [
        {
            title: "Cómo Optimizar tu Contabilidad Mensual",
            summary: "Descubre las mejores prácticas para mantener tus registros al día y mejorar la salud financiera de tu empresa.",
            date: "Octubre 25, 2025",
            category: "Contabilidad",
            image: "https://placehold.co/800x500/005B96/FFFFFF?text=Artículo+1",
        },
        {
            title: "Nuevas Reformas Fiscales en Honduras 2025",
            summary: "Te explicamos los cambios más relevantes y cómo pueden afectar a las PYMES este año.",
            date: "Octubre 20, 2025",
            category: "Fiscal",
            image: "https://placehold.co/800x500/00A79D/FFFFFF?text=Artículo+2",
        },
        {
            title: "Errores Comunes al Calcular Planillas",
            summary: "Evita sanciones y errores revisando los puntos clave del cálculo de prestaciones y deducciones.",
            date: "Octubre 10, 2025",
            category: "Recursos Humanos",
            image: "https://placehold.co/800x500/007FC4/FFFFFF?text=Artículo+3",
        },
    ];

    return (
        <Box sx={{ fontFamily: 'Inter, sans-serif' }}>
            {/* HERO SECTION con video de fondo */}
            <Box
                sx={{
                    position: 'relative',
                    color: WHITE,
                    py: { xs: 10, md: 15 },
                    textAlign: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Video de fondo con fade-in */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        opacity: 0,
                        animation: 'fadeIn 1.8s ease-in-out forwards',
                    }}
                >
                    <source src="/6700653-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

                {/* Capa oscura para contraste */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.45)',
                        zIndex: 1,
                    }}
                />

                {/* Contenido */}
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '2.3rem', md: '3.2rem' },
                        }}
                    >
                        Blog CONTAHSA
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: { xs: '1rem', md: '1.25rem' },
                        }}
                    >
                        Artículos y guías para ayudarte a tomar decisiones financieras más inteligentes.
                    </Typography>
                </Container>
            </Box>

            {/* GRID DE POSTS */}
            <Box sx={{ bgcolor: LIGHT_BACKGROUND, py: { xs: 8, md: 12 }, px: 3 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 4, md: 5 }}>
                        {posts.map((post, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={5}
                                    sx={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        transition: 'transform 0.4s, box-shadow 0.4s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0,91,150,0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ height: 220, overflow: 'hidden' }}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s ease',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ p: { xs: 3, sm: 4 } }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: PRIMARY_DARK,
                                                fontWeight: 700,
                                                mb: 1,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: SUB_TEXT, mb: 2, minHeight: 60 }}
                                        >
                                            {post.summary}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                color: SUB_TEXT,
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarMonthIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                                {post.date}
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CategoryIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                                {post.category}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA FINAL */}
            <Box
                sx={{
                    py: { xs: 8, md: 10 },
                    textAlign: 'center',
                    backgroundColor: PRIMARY_DARK,
                    color: WHITE,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.8rem', md: '2.3rem' } }}
                    >
                        ¿Listo para llevar tu empresa al siguiente nivel?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                        Descubre cómo nuestros servicios contables y fiscales pueden ayudarte a crecer sin preocupaciones.
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        sx={{
                            backgroundColor: ACCENT_GREEN,
                            color: WHITE,
                            fontWeight: 600,
                            px: { xs: 4, sm: 6 },
                            py: { xs: 1.5, sm: 2 },
                            borderRadius: '30px',
                            fontSize: { xs: '0.9rem', sm: '1.1rem' },
                            '&:hover': {
                                backgroundColor: '#009184',
                                transform: 'scale(1.05)',
                                boxShadow: '0px 8px 20px rgba(0,0,0,0.25)',
                            },
                            transition: '0.3s',
                        }}
                    >
                        Contáctanos
                    </Button>
                </Container>
            </Box>

            {/* Animación global */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
        </Box>
    );
};

export default Blog;
