import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// 1. PALETA DE COLORES
const PRIMARY_BLUE = '#000000ff';        // 🟦 Azul Oscuro de la marca (Ya no se usa en hover)
const ACCENT_GREEN = '#000000ff';        // 🟩 Verde de Acento
const ACCENT_GREEN_DARK = '#000000ff';   // 🟩 Verde Oscuro para el HOVER
const HEADER_DARK = '#000000';         // ⬛ Fondo del Header (Negro)
const TEXT_LIGHT = '#FFFFFF';          // ⬜ Texto Blanco

const Header = () => {

    return (
        // 1. HEADER: Fondo negro, y sombra sutil
        <AppBar position="sticky" sx={{ 
            bgcolor: HEADER_DARK, 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)', 
            borderBottom: `none` 
        }}> 
            <Toolbar sx={{ py: 1 }}> 
                
                {/* 2. NOMBRE DE LA EMPRESA (ENLACE A INICIO) */}
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography 
                        variant="h5" 
                        component={Link} 
                        to="/" 
                        sx={{ 
                            color: TEXT_LIGHT, 
                            textDecoration: 'none', 
                            fontWeight: 700 
                        }}
                    >
                        CONTAHSA
                    </Typography>
                </Box>

                {/* 3. BOTONES DE NAVEGACIÓN PRINCIPALES */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {/* Estilo: Texto blanco sobre fondo negro, con hover sutil */}
                    <Button 
                        sx={{ 
                            color: TEXT_LIGHT, 
                            // Hover discreto (Blanco transparente)
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                        }} 
                        component={Link} 
                        to="/"
                    >
                        INICIO
                    </Button>
                    <Button 
                        sx={{ 
                            color: TEXT_LIGHT, 
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                        }} 
                        component={Link} 
                        to="/about"
                    >
                        SOBRE NOSOTROS
                    </Button>
                    <Button 
                        sx={{ 
                            color: TEXT_LIGHT, 
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                        }} 
                        component={Link} 
                        to="/services"
                    >
                        SERVICIOS
                    </Button>
                    <Button 
                        sx={{ 
                            color: TEXT_LIGHT, 
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                        }} 
                        component={Link} 
                        to="/blog"
                    >
                        BLOG
                    </Button>
                </Box>

                {/* 4. BOTÓN DE CONTACTO (Destacado) */}
                <Button 
                    variant="contained" 
                    sx={{ 
                        // El color normal del botón es el verde de acento.
                        bgcolor: HEADER_DARK, 
                        color: HEADER_DARK, 
                        fontWeight: 'bold',
                        borderRadius: '25px', 
                        boxShadow: '0 4px 10px rgba(0, 167, 157, 0.4)', 
                        '&:hover': { 
                            // CORRECCIÓN FINAL: Cambiado de PRIMARY_BLUE a ACCENT_GREEN_DARK (Verde Oscuro)
                            bgcolor: HEADER_DARK, 
                            boxShadow: '0 4px 12px rgba(0, 140, 131, 0.5)' 
                        },
                        ml: { xs: 1, md: 3 } 
                    }}
                    component={Link}
                    to="/contact"
                >
                    CONTÁCTANOS
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default Header;
