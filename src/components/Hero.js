import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container } from '@mui/material';

// PALETA DE COLORES OFICIAL DE CONTAHSA
const PRIMARY_DARK = '#005B96';
const ACCENT_GREEN = '#00A79D';
const PRIMARY_MEDIUM = '#007FC4';
const MAIN_TEXT_COLOR = '#2B2B2B';
const WHITE = '#FFFFFF';

const Hero = () => {
    return (
        <Box 
            sx={{ 
                // Fondo con degradado para un look moderno
                backgroundImage: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY_MEDIUM} 100%)`,
                color: WHITE, 
                py: { xs: 10, md: 15 }, 
                px: 3, 
                boxShadow: 6
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center">
                    
                    {/* Contenido de Texto */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                            El Futuro de tu Contabilidad en Honduras.
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, mt: 2 }}>
                            **CONTAHSA** es el líder en asesoría contable y fiscal. Simplifica el cumplimiento para tu PYME o profesión, impulsando tu éxito financiero.
                        </Typography>
                        
                        {/* BOTÓN CTA Principal: ACCENT_GREEN */}
                        <Button 
                            component={Link} 
                            to="/contact"
                            variant="contained" 
                            size="large"
                            sx={{ 
                                bgcolor: ACCENT_GREEN,
                                color: MAIN_TEXT_COLOR,
                                fontWeight: 700,
                                '&:hover': { bgcolor: PRIMARY_MEDIUM, color: WHITE, transform: 'scale(1.05)' }, 
                                transition: '0.3s',
                                borderRadius: '30px', 
                                px: 6, 
                                py: 1.5,
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            Agenda tu Consulta Gratuita Hoy
                        </Button>
                    </Grid>
                    
                    {/* Ilustración o imagen */}
                    <Grid item xs={12} md={5}>
                         <Box 
                            sx={{ 
                                height: 350, 
                                borderRadius: 3, 
                                overflow: 'hidden', 
                                border: `5px solid ${ACCENT_GREEN}`, 
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <img 
                                src="/consultoriacontable.png"
                                alt="Consultoría Contable Profesional" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;