import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'; // <-- IMPORTACIONES DE MUI

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#004d99' }}> {/* AppBar es el header fijo */}
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          CONTAHSA
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Usa Box para agrupar enlaces */}
          <Button color="inherit" component={NavLink} to="/">Inicio</Button>
          <Button color="inherit" component={NavLink} to="/sobre-nosotros">Sobre Nosotros</Button>
          <Button color="inherit" component={NavLink} to="/servicios">Servicios</Button>
          {/* El botón de contacto, usa el color de contraste */}
          <Button 
            component={Link} 
            to="/contacto" 
            variant="contained" 
            sx={{ 
                bgcolor: '#f7a000', 
                '&:hover': { bgcolor: '#e69100' },
                ml: 2 // Margin-left para separarlo
            }}
          >
            Contáctanos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;