import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// 1. PALETA DE COLORES DE CONTAHSA
const PRIMARY_DARK = '#005B96';        // 🟦 Azul oscuro (Fondo principal, Header)
const ACCENT_GREEN = '#00A79D';        // 🟩 Verde azulado (Botón de Contacto principal)
const PRIMARY_MEDIUM = '#007FC4';      // 🔵 Azul medio (Hover de botones)

const Header = () => {

    return (
        <AppBar position="sticky" sx={{ bgcolor: PRIMARY_DARK }}> {/* Fondo Azul Oscuro */}
            <Toolbar>
                
                {/* 2. NOMBRE DE LA EMPRESA (ENLACE A INICIO) */}
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography 
                        variant="h6" 
                        component={Link} 
                        to="/" 
                        sx={{ 
                            color: 'white', 
                            textDecoration: 'none', 
                            fontWeight: 'bold' // Opcional: Para darle más presencia
                        }}
                    >
                        CONTAHSA
                    </Typography>
                </Box>

                {/* 3. BOTONES DE NAVEGACIÓN PRINCIPALES (Ocultos en móvil) */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit" component={Link} to="/">
                        INICIO
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        SOBRE NOSOTROS
                    </Button>
                    <Button color="inherit" component={Link} to="/services">
                        SERVICIOS
                    </Button>
                    {/* Botón opcional de Preguntas Frecuentes si usas la ruta /faq */}
                    {/* <Button color="inherit" component={Link} to="/faq">
                        FAQ
                    </Button> */}
                </Box>

                {/* 4. BOTÓN DE CONTACTO (Destacado con color de acento) */}
                <Button 
                    variant="contained" 
                    sx={{ 
                        bgcolor: ACCENT_GREEN, // Fondo Verde Azulado para destacar
                        '&:hover': { bgcolor: PRIMARY_MEDIUM }, // Azul Medio en el hover
                        ml: { xs: 0, md: 2 } // Margen izquierdo
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