import React, { useState } from 'react';
import { 
    AppBar, Toolbar, Typography, Button, Box, 
    IconButton, Drawer, List, ListItem, ListItemText, 
    Container, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// 🎨 PALETA DE COLORES CONTAHSA (Basada en tu Footer)
const PRIMARY_BLUE = '#005B96'; // Azul primario para el header/botón
const ACCENT_GREEN = '#00A79D'; // Verde de acento
const BACKGROUND_WHITE = '#FFFFFF';
const TEXT_DARK = '#333333';
const WHATSAPP_NUMBER = '50494876832'; // Número de teléfono (sin + ni guiones)
const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir más información sobre los servicios contables de CONTAHSA.';

// 🔗 Estructura de navegación
const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/about' },
    { label: 'Servicios', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contacto', path: '/contact' },
];

const Header = () => {
    const theme = useTheme();
    // Determinar si es una pantalla pequeña (móvil/tablet)
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    // Función para manejar el scroll al navegar (tomada de la lógica del Footer)
    const handleNavigationAndClose = (path) => {
        setDrawerOpen(false); // Cierra el menú móvil
        navigate(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    // Función para abrir el chat de WhatsApp
    const handleWhatsAppClick = () => {
        // Enlace wa.me con el número y mensaje codificado
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Estilos de los enlaces de escritorio
    const desktopLinkStyle = {
        color: TEXT_DARK,
        fontWeight: 600,
        textTransform: 'none',
        '&:hover': {
            color: PRIMARY_BLUE,
            backgroundColor: 'transparent',
        }
    };

    // Componente del logo (ajustado para usar texto y MUI Box)
    const Logo = (
        <Box 
            onClick={() => handleNavigationAndClose('/')} 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                // Para centrar el logo en móvil si no hay otros elementos, o alinearlo a la izquierda
                flexGrow: isMobile ? 1 : 0 
            }}>
            {/* Aquí puedes reemplazar 'C' por una imagen de logo real si tienes una URL */}
            <Typography 
                variant="h6" 
                sx={{ 
                    fontWeight: 700, 
                    color: PRIMARY_BLUE, 
                    textTransform: 'uppercase' 
                }}>
                CONTAHSA
            </Typography>
        </Box>
    );

    // --- Menú Desplegable (Móvil) ---
    const drawerContent = (
        <Box
            sx={{ width: 250, backgroundColor: BACKGROUND_WHITE, height: '100%' }}
            role="presentation"
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    p: 2, 
                    borderBottom: `1px solid ${PRIMARY_BLUE}` 
                }}
            >
                {Logo}
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: PRIMARY_BLUE }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            
            <List>
                {navItems.map((item) => (
                    <ListItem 
                        button 
                        key={item.label} 
                        onClick={() => handleNavigationAndClose(item.path)}
                    >
                        <ListItemText 
                            primary={item.label} 
                            primaryTypographyProps={{ 
                                fontWeight: 500, 
                                color: TEXT_DARK 
                            }} 
                        />
                    </ListItem>
                ))}
            </List>

            {/* Botón de WhatsApp dentro del menú móvil */}
            <Box sx={{ p: 2, pt: 1, mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsAppClick}
                    fullWidth
                    sx={{
                        backgroundColor: ACCENT_GREEN, // Usamos el verde de acento
                        '&:hover': {
                            backgroundColor: '#008C86', // Un tono de verde ligeramente más oscuro al pasar el ratón
                        },
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 700,
                        boxShadow: '0 4px 10px rgba(0, 167, 157, 0.4)', // Sombra sutil
                    }}
                >
                    Contactar Ahora
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar position="sticky" elevation={isMobile ? 1 : 4} sx={{ backgroundColor: BACKGROUND_WHITE, borderBottom: `2px solid ${ACCENT_GREEN}` }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo (Visible siempre) */}
                    {Logo}

                    {/* Botones de Navegación (Solo Escritorio) */}
                    {!isMobile && (
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
                            {navItems.map((item) => (
                                <Button 
                                    key={item.label} 
                                    component={RouterLink} 
                                    to={item.path} 
                                    sx={desktopLinkStyle}
                                    onClick={() => handleNavigationAndClose(item.path)} // Usamos el handler para scroll
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Botón Contactar/WhatsApp (Visible siempre) */}
                    <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        onClick={handleWhatsAppClick}
                        sx={{
                            ml: isMobile ? 'auto' : 3, // Alinea a la derecha en móvil o usa margen en escritorio
                            backgroundColor: ACCENT_GREEN, 
                            color: BACKGROUND_WHITE,
                            '&:hover': {
                                backgroundColor: PRIMARY_BLUE,
                            },
                            borderRadius: 1,
                            fontWeight: 600,
                            // Ocultar texto "Contactar Ahora" en móvil, mostrar solo el icono (excepto en el drawer)
                            display: { xs: 'none', md: 'inline-flex' }, 
                            py: 1,
                            px: 2
                        }}
                    >
                        Contactar Ahora
                    </Button>

                    {/* Botón de Menú (Solo Móvil) */}
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                            sx={{ color: TEXT_DARK, ml: 1 }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            {/* Drawer/Menú Lateral (Móvil) */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {drawerContent}
            </Drawer>
        </AppBar>
    );
};

export default Header;