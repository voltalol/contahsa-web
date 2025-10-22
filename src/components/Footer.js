import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Usamos RouterLink para la navegación interna
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// PALETA DE COLORES
const PRIMARY_DARK = '#005B96';        // Títulos de sección en el footer
const MAIN_TEXT_COLOR = '#2B2B2B';     // Fondo del footer (Negro)
const SUB_TEXT_COLOR = '#7A7A7A';      // Color para Copyright (Gris)

const Footer = () => {
    return (
        // 1. Fondo Negro. color: 'white' hace que el texto principal (Typography) sea blanco.
        <Box sx={{ bgcolor: MAIN_TEXT_COLOR, color: 'white', py: 6 }}> 
            <Container>
                <Grid container spacing={4}>
                    
                    {/* COLUMNA 1: Información de Contacto */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: PRIMARY_DARK }}>
                            CONTAHSA
                        </Typography>
                        <Typography variant="body2">
                            Contabilidad y Asesoría de Honduras.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Email: placeholder@contabilidad.com
                        </Typography>
                        <Typography variant="body2">
                            Teléfono: +504 XXXX-XXXX
                        </Typography>
                        { <Box sx={{ mt: 2 }}>
                            <Link href="https://facebook.com" target="_blank" color="inherit" sx={{ mr: 1 }}>
                                <FacebookIcon />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" color="inherit">
                                <LinkedInIcon />
                            </Link>
                        </Box> }
                    </Grid>

                    {/* COLUMNA 2: Enlaces Rápidos */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: PRIMARY_DARK }}>
                            Enlaces
                        </Typography>
                        {/* Aseguramos color blanco para los enlaces */}
                        <Link component={RouterLink} to="/" color="inherit" underline="hover" display="block">Inicio</Link>
                        <Link component={RouterLink} to="/services" color="inherit" underline="hover" display="block">Servicios</Link>
                        <Link component={RouterLink} to="/about" color="inherit" underline="hover" display="block">Nosotros</Link>
                        <Link component={RouterLink} to="/contact" color="inherit" underline="hover" display="block">Contacto</Link>
                    </Grid>

                    {/* COLUMNA 3: Legal y Social */}
                     <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: PRIMARY_DARK }}>
                            Legal
                        </Typography>
                        <Link href="#" color="inherit" underline="hover" display="block">Términos y Condiciones</Link>
                        <Link href="#" color="inherit" underline="hover" display="block">Política de Privacidad</Link>
                    </Grid>

                </Grid>
                
                {/* Copyright */}
                <Box sx={{ textAlign: 'center', pt: 4, mt: 4, borderTop: `1px solid ${SUB_TEXT_COLOR}` }}>
                    <Typography variant="body2" color={SUB_TEXT_COLOR}>
                        &copy; {new Date().getFullYear()} CONTAHSA. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;