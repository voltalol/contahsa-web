import React, { useState } from 'react';
import { 
    AppBar, Toolbar, Button, Box, IconButton, 
    Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme 
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// 🎨 COLORES OFICIALES DE CONTAHSA (Mantenidos del código original)
const PRIMARY_DARK = '#000000';         // ⬛ Negro forzado para el fondo del AppBar
const ACCENT_GREEN = '#00A79D';         // 🟩 Verde de Acento
const ACCENT_GREEN_DARK = '#008c83';    // 🟩 Verde Oscuro para el HOVER
const WHITE = '#FFFFFF';                // ⬜ Texto Blanco
const BLACK = '#000000';                // ⬛ Texto Negro para el botón

// 📱 Configuración de WhatsApp
const WHATSAPP_NUMBER = '50494876829'; // Número de ejemplo (ajusta este número si tienes el correcto)
const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir una consulta gratuita de CONTAHSA.';

const Navbar = () => {
    const theme = useTheme();
    // Determina si estamos en un dispositivo móvil (pantalla menor a 'md')
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    // Altura del AppBar
    const appBarHeight = { xs: '70px', sm: '80px' }; 

    // Lista de enlaces de navegación (incluye Contacto para el menú móvil)
    const navLinks = [
        { title: 'INICIO', path: '/' },
        { title: 'NOSOTROS', path: '/about' },
        { title: 'SERVICIOS', path: '/services' },
        { title: 'BLOG', path: '/blog' },
        { title: 'CONTACTO', path: '/contact' }, // Añadido para mostrar en el menú móvil
    ];

    // Función para manejar la navegación y asegurar el scroll al inicio
    const handleNavigationAndClose = (path) => {
        setDrawerOpen(false); // Cierra el menú móvil si está abierto
        navigate(path);
        // Desplazamiento suave al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    // Función para abrir el chat de WhatsApp
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(whatsappUrl, '_blank');
    };

    // --- Contenido del Menú Desplegable (Móvil) ---
    const drawerContent = (
        <Box
            sx={{ 
                width: 300, 
                // Fondo blanco para el menú, contrastando con el fondo negro del AppBar
                backgroundColor: WHITE, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            role="presentation"
        >
            {/* Encabezado del Drawer: Logo y Botón de Cerrar */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    p: 2, 
                    borderBottom: `2px solid ${PRIMARY_DARK}` 
                }}
            >
                {/* Logo Pequeño (Usando un contenedor con fondo negro para imitar el logo completo) */}
                <Box sx={{ p: 0.5, bgcolor: PRIMARY_DARK, borderRadius: 1 }}>
                    <img 
                        src="/contahsalogosintexto.png" 
                        alt="Logo CONTAHSA" 
                        style={{ height: '30px', width: 'auto' }} 
                    />
                </Box>
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: BLACK }}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </Box>
            
            {/* Lista de Enlaces */}
            <List sx={{ flexGrow: 1 }}>
                {navLinks.map((item) => (
                    <ListItem 
                        button 
                        key={item.title} 
                        onClick={() => handleNavigationAndClose(item.path)}
                    >
                        <ListItemText 
                            primary={item.title} 
                            primaryTypographyProps={{ 
                                fontWeight: 700, 
                                color: PRIMARY_DARK,
                                fontSize: '1.1rem'
                            }} 
                        />
                    </ListItem>
                ))}
            </List>

            {/* Botón de WhatsApp 'Consultar Ahora' (Fijo en el fondo del Drawer) */}
            <Box sx={{ p: 2, borderTop: `1px solid #ccc` }}>
                <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsAppClick}
                    fullWidth
                    sx={{
                        backgroundColor: ACCENT_GREEN, 
                        color: BLACK, // Texto negro en el botón verde
                        '&:hover': {
                            backgroundColor: ACCENT_GREEN_DARK, 
                        },
                        py: 1.5,
                        borderRadius: 1,
                        fontWeight: 700,
                        boxShadow: '0 4px 10px rgba(0, 167, 157, 0.4)',
                    }}
                >
                    Consulta Ahora (WhatsApp)
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar 
            position="fixed" 
            elevation={0} 
            sx={{ 
                bgcolor: PRIMARY_DARK, 
                boxShadow: 'none', 
                zIndex: 1300, 
                height: appBarHeight, 
                display: 'flex', 
                justifyContent: 'center', 
            }}
        >
            <Toolbar 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between', 
                    maxWidth: 'xl', 
                    margin: '0 auto', 
                    width: '100%',
                    py: 0, 
                    alignItems: 'center', 
                    minHeight: appBarHeight, 
                    // Asegura padding horizontal en móviles
                    px: { xs: 2, sm: 3, md: 0 } 
                }}
            >
                
                {/* === 1. SECCIÓN DEL LOGO (Izquierda) === */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Link to="/" onClick={() => handleNavigationAndClose('/')}>
                        <img 
                            // Asumo que esta ruta de imagen es correcta
                            src="/contahsalogosintexto.png" 
                            alt="Logo CONTAHSA" 
                            style={{ 
                                height: 'auto', 
                                maxHeight: '60px', 
                                width: 'auto',
                            }} 
                        />
                    </Link>
                </Box>

                {/* === 2. LINKS DE NAVEGACIÓN (ESCRITORIO) === */}
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' }, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        mx: 8,
                    }}
                >
                    {navLinks
                        .filter(link => link.title !== 'CONTACTO') // Quitamos Contacto de aquí
                        .map((link) => (
                            <Button 
                                key={link.title}
                                color="inherit" 
                                component={Link} 
                                to={link.path} 
                                onClick={() => handleNavigationAndClose(link.path)}
                                sx={{ 
                                    color: WHITE, 
                                    fontWeight: 600, 
                                    mx: 1.5, 
                                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
                                }}
                            >
                                {link.title}
                            </Button>
                    ))}
                </Box>
                
                {/* === 3. BOTONES DE ACCIÓN (Derecha) === */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    flexShrink: 0,
                    // Espaciado para evitar que el menú colisione con el botón en móvil
                    gap: { xs: 0.5, md: 2 } 
                }}>
                    
                    {/* Botón de WhatsApp (Visible en Escritorio y Móvil, pero solo icono en Móvil) */}
                    <Button 
                        variant="contained" 
                        onClick={handleWhatsAppClick}
                        startIcon={<WhatsAppIcon />}
                        sx={{ 
                            bgcolor: ACCENT_GREEN, 
                            color: BLACK,
                            px: { xs: 1.5, md: 3 }, // Menos padding en móvil
                            py: { xs: 1, md: 1.5 },
                            fontWeight: 700,
                            borderRadius: 1,
                            minWidth: { xs: 'auto', md: 100 }, // Reduce el tamaño mínimo en móvil
                            boxShadow: '0 4px 10px rgba(0, 167, 157, 0.4)',
                            '&:hover': { 
                                bgcolor: ACCENT_GREEN_DARK, 
                                boxShadow: '0 4px 12px rgba(0, 140, 131, 0.5)' 
                            } ,
                            // Oculta el texto en pantallas pequeñas, solo muestra el icono
                            '& .MuiButton-startIcon': { mr: { xs: 0, md: 1 } },
                            '& .MuiButton-label': { display: { xs: 'none', md: 'block' } }
                        }}
                    >
                        <Box component="span" sx={{ display: { xs: 'none', md: 'block' } }}>
                            CONTÁCTANOS
                        </Box>
                    </Button>


                    {/* Botón de Menú de Hamburguesa (Solo Móvil) */}
                    {isMobile && (
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                            sx={{ color: WHITE }} // Color blanco para el icono en fondo negro
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>

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

export default Navbar;