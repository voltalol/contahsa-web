import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Colores base para usar en el SX (Style overrides)
const primaryColor = '#004d99'; 
const secondaryColor = '#f7a000';
const lightBg = '#f4f4f4';

// Datos de Valor de CONTAHSA
const valueProps = [
    { 
        icon: <SavingsIcon sx={{ color: secondaryColor, fontSize: 40, mb: 1 }} />, 
        title: "Ahorro Fiscal Optimizado", 
        details: "Garantizamos el cumplimiento normativo mientras exploramos todas las deducciones legales para maximizar tu rentabilidad y reducir tu carga tributaria.",
    },
    { 
        icon: <TrendingUpIcon sx={{ color: secondaryColor, fontSize: 40, mb: 1 }} />, 
        title: "Crecimiento Empresarial", 
        details: "Convertimos tus estados financieros en herramientas estratégicas. Te ayudamos a tomar decisiones informadas para escalar tu negocio en Honduras.",
    },
    { 
        icon: <CheckCircleIcon sx={{ color: secondaryColor, fontSize: 40, mb: 1 }} />, 
        title: "Paz Mental y Cero Multas", 
        details: "Nos encargamos del trabajo pesado (ISR, ISV, Planillas). Cero errores, cero multas y 100% de cumplimiento garantizado con la SAR y otras entidades.",
    },
];

const HomePage = () => {
  return (
    <Box>
      
      {/* 1. HERO SECTION (Sección Principal) */}
      <Box sx={{ bgcolor: 'white', py: 10, px: 3, boxShadow: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            
            {/* Contenido de Texto */}
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ color: primaryColor, fontWeight: 700 }}>
                Simplifica tu Contabilidad. <br/> Asegura tu Crecimiento.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#555', mb: 3 }}>
                Expertos contables y asesores financieros dedicados a PYMES y profesionales independientes en Honduras.
              </Typography>
              <Button 
                component={Link} 
                to="/contacto" 
                variant="contained" 
                size="large"
                sx={{ bgcolor: secondaryColor, '&:hover': { bgcolor: '#e69100' }, borderRadius: '30px', px: 4, py: 1.5 }}
              >
                Solicita una Consulta Gratuita
              </Button>
            </Grid>
            
            {/* Imagen (Manteniendo el placeholder MUI para la imagen) */}
            <Grid item xs={12} md={5}>
              <Box 
                sx={{ 
                  height: 350, 
                  bgcolor: lightBg, 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {/* Usar la imagen consultoriacontable.png desde la carpeta public */}
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

      {/* 2. SECCIÓN: NUESTROS SERVICIOS CLAVE */}
      <Box sx={{ py: 8, bgcolor: lightBg, px: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" sx={{ color: primaryColor, fontWeight: 600, mb: 5 }}>
            Servicios Contables Clave
          </Typography>
          
          <Grid container spacing={4}>
            {valueProps.map((prop, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card elevation={4} sx={{ textAlign: 'center', p: 3, height: '100%', borderTop: `4px solid ${primaryColor}` }}>
                  <CardContent>
                    {prop.icon}
                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: primaryColor, mt: 1 }}>
                      {prop.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {prop.details}
                    </Typography>
                    <Button component={Link} to="/servicios" variant="text" size="small" sx={{ mt: 2, color: secondaryColor }}>
                        Ver más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button component={Link} to="/servicios" variant="outlined" size="large" sx={{ color: primaryColor, borderColor: primaryColor, '&:hover': { borderColor: primaryColor, bgcolor: '#e5f2ff' }, borderRadius: '30px' }}>
                Explora Todos Nuestros Servicios
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* 3. SECCIÓN: TESTIMONIOS (Simple Placeholder) */}
      <Box sx={{ py: 8, bgcolor: 'white', px: 3 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" sx={{ color: primaryColor, fontWeight: 600, mb: 5 }}>
            Nuestros Clientes Confían en Nosotros
          </Typography>
          <Card elevation={2} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" fontStyle="italic" color="text.primary">
              "CONTAHSA transformó la gestión fiscal de nuestra PYME. Su asesoría nos ha ahorrado miles de lempiras en impuestos."
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
              — Daniela Paz, Gerente General de Inversiones DP
            </Typography>
          </Card>
        </Container>
      </Box>

    </Box>
  );
};

export default HomePage;