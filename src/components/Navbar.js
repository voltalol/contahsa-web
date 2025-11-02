import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Importamos Link desde react-router-dom

// Colores oficiales de CONTAHSA
const PRIMARY_DARK = '#000000';         // ⬛ Negro forzado para el fondo
const ACCENT_GREEN = '#00A79D';         // 🟩 Verde de Acento
const ACCENT_GREEN_DARK = '#008c83';    // 🟩 Verde Oscuro para el HOVER
const WHITE = '#FFFFFF';                // ⬜ Texto Blanco
const BLACK = '#000000';                // ⬛ Texto Negro para el botón

const Navbar = () => {
    // Altura del AppBar
    const appBarHeight = { xs: '70px', sm: '80px' }; 

    // Lista de enlaces de navegación (excluyendo el botón CTA)
    const navLinks = [
        { title: 'INICIO', path: '/' },
        { title: 'NOSOTROS', path: '/about' },
        { title: 'SERVICIOS', path: '/services' },
        { title: 'BLOG', path: '/blog' },
    ];

    return (
        <AppBar 
            position="fixed" 
            elevation={0} 
            sx={{ 
                // Color de fondo negro forzado
                bgcolor: `${PRIMARY_DARK} !important`, 
                boxShadow: 'none', 
                top: 0, 
                left: 0, 
                right: 0,
                zIndex: 1300, 
                border: 'none',
                outline: 'none',
                height: appBarHeight, 
                display: 'flex', 
                justifyContent: 'center', 
                borderBottom: 'none', 
            }}
        >
            <Toolbar 
                sx={{ 
                    // Usamos Flexbox para distribuir el contenido
                    display: 'flex',
                    justifyContent: 'space-between', 
                    // CAMBIO: Aumentamos el maxWidth de 'lg' a 'xl' (mayor ancho) para estirar el contenido
                    maxWidth: 'x1', 
                    margin: '0 auto', 
                    width: '100%',
                    py: 0, 
                    alignItems: 'center', 
                    minHeight: appBarHeight, 
                }}
            >
                
                {/* === 1. SECCIÓN DEL LOGO (Izquierda) === */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        flexShrink: 0,
                    }}
                >
                    <Link to="/">
                        <img 
                            src="/Logo CH.png" 
                            alt="Logo CONTAHSA" 
                            style={{ 
                                height: 'auto', 
                                maxHeight: '60px', 
                                width: 'auto',
                                filter: 'brightness(0) invert(1)', // Logo a BLANCO
                            }} 
                        />
                    </Link>
                </Box>

                {/* === 2. LINKS DE NAVEGACIÓN (CENTRO) === */}
                <Box 
                    sx={{ 
                        // Ocupa todo el espacio restante para centrar los enlaces
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' }, 
                        justifyContent: 'center', // CENTRA los enlaces
                        alignItems: 'center',
                        // CAMBIO: Aumentamos el margen horizontal de 4 a 8 para crear más espacio lateral
                        mx: 8,
                    }}
                >
                    {navLinks.map((link) => (
                        <Button 
                            key={link.title}
                            color="inherit" 
                            component={Link} 
                            to={link.path} 
                            sx={{ 
                                color: WHITE, 
                                fontWeight: 600, 
                                mx: 1.5, // Espaciado entre enlaces
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                            }}
                        >
                            {link.title}
                        </Button>
                    ))}
                </Box>
                
                {/* === 3. BOTÓN DE ACCIÓN: CONTÁCTANOS (Derecha/Esquina) === */}
                <Box sx={{ flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
                     <Button 
                        variant="contained" 
                        component={Link} 
                        to="/contact" 
                        sx={{ 
                            bgcolor: ACCENT_GREEN, 
                            color: BLACK, // Texto negro en el botón verde
                            px: 3, 
                            fontWeight: 700,
                            boxShadow: '0 4px 10px rgba(0, 167, 157, 0.4)',
                            '&:hover': { 
                                bgcolor: ACCENT_GREEN_DARK, 
                                boxShadow: '0 4px 12px rgba(0, 140, 131, 0.5)' 
                            } 
                        }}
                    >
                        CONTÁCTANOS
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
