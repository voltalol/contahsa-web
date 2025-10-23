import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Importamos Link desde react-router-dom

// Colores oficiales de CONTAHSA
const PRIMARY_DARK = '#005B96';        
const ACCENT_GREEN = '#00A79D';        
const WHITE = '#FFFFFF';               
const BLACK = '#000000'; // Definimos el color negro para el texto

const Navbar = () => {
  // Altura del AppBar
  const appBarHeight = { xs: '70px', sm: '80px' }; 

  return (
    <AppBar 
      position="fixed" 
      elevation={0} // Sin sombra/elevación
      sx={{ 
        bgcolor: PRIMARY_DARK, // <<< Fondo del Navbar a AZUL OSCURO
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
        // Eliminamos el borde sutil, ya que el contraste de colores lo hará visible.
        borderBottom: 'none', 
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          // Center the content wrapper
          maxWidth: 'lg', 
          margin: '0 auto', 
          width: '100%',
          py: 0, 
          alignItems: 'center', 
          minHeight: appBarHeight, 
        }}
      >
        
        {/* === SECCIÓN DEL LOGO === */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            // >>> CAMBIO CLAVE: Utilizamos margen negativo para empujar el logo
            // fuera del padding predeterminado de la Toolbar.
            marginLeft: '-640px', 
            // Esto es para que el logo se pegue al borde del contenedor 'lg'
          }}
        >
          <Link to="/">
            <img 
              src="/Logo CH.png" 
              alt="Logo CONTAHSA" 
              style={{ 
                height: 'auto', 
                maxHeight: '60px', // Tamaño del logo
                width: 'auto',
                // Aplicamos el filtro para convertir el logo a BLANCO
                filter: 'brightness(0) invert(1)', 
              }} 
            />
          </Link>
        </Box>

        {/* === LINKS DE NAVEGACIÓN === */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ 
              color: WHITE, // <<< Texto a BLANCO
              fontWeight: 600, 
              mx: 1, 
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
            }}
          >
            Inicio
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{ 
              color: WHITE, // <<< Texto a BLANCO
              fontWeight: 600, 
              mx: 1, 
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
            }}
          >
            Nosotros
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/services" 
            sx={{ 
              color: WHITE, // <<< Texto a BLANCO
              fontWeight: 600, 
              mx: 1, 
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } 
            }}
          >
            Servicios
          </Button>
          
          {/* BOTÓN DE ACCIÓN: CONTÁCTANOS */}
          <Button 
            variant="contained" 
            component={Link} 
            to="/contact" 
            sx={{ 
              bgcolor: ACCENT_GREEN, 
              color: WHITE, 
              ml: 2,
              fontWeight: 700,
              '&:hover': { bgcolor: PRIMARY_DARK, boxShadow: 'none' } 
            }}
          >
            Contáctanos
          </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
