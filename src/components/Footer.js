import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, IconButton } from '@mui/material';
// Importa íconos de Material UI (Asegúrate de que 'npm install @mui/icons-material' se haya ejecutado)
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    // Box actúa como el contenedor principal del footer, con un fondo oscuro
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#222222', // Fondo muy oscuro
        color: '#ffffff',   // Texto blanco
        py: 6, // Padding vertical: 6 unidades (aprox 48px)
        px: 3  // Padding horizontal
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Columna 1: Información de Contacto */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f7a000', fontWeight: 'bold' }}>
            Contacto
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            Email: placeholder@contabilidad.com
          </Typography>
          <Typography variant="body2">
            Teléfono: +(504) XXXX-XXXX
          </Typography>
          
          {/* Íconos de Redes Sociales */}
          <Box sx={{ mt: 2 }}>
            <IconButton color="inherit" aria-label="Facebook" href="[LINK FACEBOOK]">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn" href="[LINK LINKEDIN]">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Columna 2: Navegación Rápida */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f7a000', fontWeight: 'bold' }}>
            Información
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Link to="/sobre-nosotros" style={{ color: '#cccccc', textDecoration: 'none' }}>Sobre Nosotros</Link>
            <Link to="/servicios" style={{ color: '#cccccc', textDecoration: 'none' }}>Servicios</Link>
            <Link to="/faqs" style={{ color: '#cccccc', textDecoration: 'none' }}>Preguntas Frecuentes</Link>
          </Box>
        </Grid>

        {/* Columna 3: Legal y Políticas */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ color: '#f7a000', fontWeight: 'bold' }}>
            Legal
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Link to="/politica-privacidad" style={{ color: '#cccccc', textDecoration: 'none' }}>Política de Privacidad</Link>
            <Link to="/terminos-servicio" style={{ color: '#cccccc', textDecoration: 'none' }}>Términos de Servicio</Link>
          </Box>
        </Grid>
      </Grid>

      {/* Sección de Copyright */}
      <Box sx={{ textAlign: 'center', pt: 4, borderTop: '1px solid #444', mt: 4 }}>
        <Typography variant="caption" color="#cccccc">
          © {new Date().getFullYear()} [NOMBRE DEL FIRMA]. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;