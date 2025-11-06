import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Divider, Paper, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business'; // Ícono para Gestión
import GroupsIcon from '@mui/icons-material/Groups'; // Ícono para Equipo Contable
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'; // Ícono para Cumplimiento
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Ícono para Integridad
import HandshakeIcon from '@mui/icons-material/Handshake'; // Ícono para Confianza
import BalanceIcon from '@mui/icons-material/Balance'; // Ícono para Servicios Fiscales
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Ícono para Visión/Innovación
import DescriptionIcon from '@mui/icons-material/Description'; // Ícono para Documentación

// IMPORTAMOS EL COMPONENTE DE ANIMACIÓN
import ScrollAnimation from './ScrollAnimation'; 

// === PALETA DE COLORES OFICIAL DE CONTAHSA Y CORRECCIÓN DEL ERROR ===
const PRIMARY_DARK = '#005B96'; // Azul Oscuro
const ACCENT_GREEN = '#00A79D'; // Verde Azulado
const PRIMARY_MEDIUM = '#007FC4'; // Azul Medio
const MAIN_TEXT_COLOR = '#2B2B2B'; // Texto Principal (casi negro)
const SUB_TEXT_COLOR = '#7A7A7A'; // Texto Secundario (gris oscuro)
const LIGHT_BACKGROUND = '#f7f9fc'; // Fondo Suave (gris muy claro)
const WHITE = '#FFFFFF'; // Blanco puro
const LIGHT_GREY = '#eef1f5'; // **CORRECCIÓN: Definición de la constante faltante**

// Data del equipo
const teamPillars = [
    { 
        icon: <BusinessIcon />, 
        title: "Liderazgo y Gestión Operativa", 
        name: "Mario Elvir", 
        detail: "Responsable de la gestión operativa, marketing, ventas, CRM, y cobros, asegurando la eficiencia del flujo de trabajo y la satisfacción del cliente." 
    },
    { 
        icon: <GroupsIcon />, 
        title: "Expertise Contable y Fiscal", 
        name: "Karelis Madrid", 
        detail: "Especialista en preparación de estados financieros, cumplimiento fiscal y la asesoría contable estratégica para micro, pequeñas y medianas empresas." 
    },
];

// Data de los valores centrales
const coreValues = [
    { icon: <VerifiedUserIcon />, title: "Integridad", detail: "Actuamos con máxima transparencia y ética en cada registro y asesoría, siendo su pilar de confianza." },
    { icon: <AssignmentTurnedInIcon />, title: "Cumplimiento", detail: "Garantizamos el 100% de apego a las leyes fiscales y laborales hondureñas, eliminando riesgos." },
    { icon: <HandshakeIcon />, title: "Confianza", detail: "Construimos relaciones duraderas basadas en la confidencialidad, el profesionalismo y el soporte continuo." },
];

const About = () => {
    return (
        <Box sx={{ fontFamily: 'Inter, sans-serif' }}>

{/* 1. HERO SECTION: Título Principal con Video de Fondo (con fade-in) */}
<Box
  sx={{
    position: 'relative',
    color: WHITE,
    py: { xs: 10, md: 15 },
    textAlign: 'center',
    overflow: 'hidden',
  }}
>
  {/* Video de fondo con efecto fade-in */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    onLoadedData={(e) => {
      e.target.style.opacity = 1; // Activa la transición de opacidad al cargarse
    }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      opacity: 0,
      transition: 'opacity 1.5s ease-in-out', // <-- Efecto de fade-in
    }}
  >
    <source src="/3195532-uhd_3840_2160_25fps.mp4" type="video/mp4" />
    <source src="https://assets.mixkit.co/videos/preview/mixkit-man-writing-on-a-whiteboard-2882-large.mp4" type="video/mp4" onError={(e) => e.target.style.display = 'none'} />
    Tu navegador no soporta la etiqueta de video.
  </video>

  {/* Capa translúcida para contraste */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    }}
  />

  {/* Contenido sobre el video - Aplicamos animaciones SLIDE en cascada */}
  <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
    <ScrollAnimation delay={0.2} effect="slide">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' } }}
        >
          Somos tu Aliado Contable en Honduras
        </Typography>
    </ScrollAnimation>
    <ScrollAnimation delay={0.4} effect="slide">
        <Typography
          variant="h6"
          sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, fontSize: { xs: '1rem', sm: '1.25rem' } }}
        >
          Conoce la estructura, misión y los valores que nos convierten en la mejor opción para la gestión financiera de tu empresa.
        </Typography>
    </ScrollAnimation>
  </Container>
</Box>



    {/* 2. SECCIÓN: MISIÓN Y PROPÓSITO - Con Imagen a la Derecha y Texto a la Izquierda (o viceversa) */}
    <Box sx={{ py: { xs: 8, md: 12 }, px: 3, bgcolor: WHITE }}>
        <Container maxWidth="lg">
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                {/* Contenido de Texto - Animación SLIDE en cascada */}
                <Grid item xs={12} md={6}>
                    <ScrollAnimation delay={0} effect="slide">
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 3 }}
                        >
                            Visión Clara, Gestión Transparente
                        </Typography>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.1} effect="slide">
                        <Typography variant="body1" sx={{ color: MAIN_TEXT_COLOR, mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                            CONTAHSA S. de R.L. de C.V. nació con el objetivo de simplificar la complejidad fiscal y contable. Nos enfocamos en liberar a PYMES y profesionales para que puedan concentrarse en su crecimiento, garantizando su cumplimiento total en Honduras. Nuestra misión es: "Proveer servicios contables y financieros confiables, personalizados y accesibles a micro, pequeñas y medianas empresas hondureñas."
                        </Typography>
                    </ScrollAnimation>
                </Grid>

                {/* Contenedor de la Imagen - Animación ZOOM */}
                <Grid item xs={12} md={6}>
                    <ScrollAnimation delay={0.3} effect="zoom">
                        <Box
                            sx={{
                                height: { xs: 300, sm: 400, md: 450 },
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="conta.jpg" // Placeholder o reemplazar con imagen real
                                alt="Equipo de Contadores de CONTAHSA trabajando juntos"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/007FC4/FFFFFF?text=CONTAHSA+Equipo" }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}
                            />
                        </Box>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </Container>
    </Box>

    {/* 3. SECCIÓN: VALORES CENTRALES - Con Tarjetas Estilizadas */}
    <Box sx={{ py: { xs: 8, md: 12 }, px: 3, bgcolor: LIGHT_BACKGROUND }}>
        <Container maxWidth="lg">
            {/* Título - Animación SLIDE */}
            <ScrollAnimation delay={0} effect="slide">
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: { xs: 6, md: 8 } }}>
                    Nuestros Valores Fundamentales
                </Typography>
            </ScrollAnimation>

            {/* Grid de tarjetas de Valores - Animación ZOOM en cascada */}
            <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
                {coreValues.map((value, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ScrollAnimation delay={0.1 * (index + 1)} effect="zoom">
                            <Paper
                                elevation={6}
                                sx={{
                                    p: { xs: 3, sm: 4 },
                                    textAlign: 'center',
                                    height: '100%',
                                    borderRadius: '12px',
                                    borderBottom: `6px solid ${ACCENT_GREEN}`,
                                    transition: 'transform 0.4s, box-shadow 0.4s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 20px 40px rgba(0, 91, 150, 0.15)`
                                    }
                                }}
                            >
                                {React.cloneElement(value.icon, { sx: { fontSize: 60, color: PRIMARY_DARK, mb: 2, p: 1.5, borderRadius: '50%', backgroundColor: `${PRIMARY_DARK}10` } })}
                                <Typography variant="h5" component="h3" gutterBottom sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600, mt: 2 }}>
                                    {value.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR, lineHeight: 1.6 }}>
                                    {value.detail}
                                </Typography>
                            </Paper>
                        </ScrollAnimation>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>

    {/* 4. SECCIÓN: EQUIPO FUNDADOR Y EXPERTISE CLAVE - Diseño más sofisticado */}
    <Box sx={{ py: { xs: 8, md: 12 }, px: 3, bgcolor: WHITE }}>
        <Container maxWidth="lg">
            {/* Título - Animación SLIDE */}
            <ScrollAnimation delay={0} effect="slide">
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: { xs: 6, md: 8 } }}>
                    Equipo Fundador y Expertise Clave
                </Typography>
            </ScrollAnimation>

            {/* Pilares del Equipo con diseño de tarjeta - Animación ZOOM en cascada */}
            <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" sx={{ mb: { xs: 6, md: 10 } }}>
                {teamPillars.map((pillar, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <ScrollAnimation delay={0.1 * (index + 1)} effect="zoom">
                            <Paper
                                elevation={6}
                                sx={{
                                    p: { xs: 3, sm: 4 },
                                    height: '100%',
                                    borderRadius: '12px',
                                    borderLeft: `8px solid ${PRIMARY_DARK}`, // Borde distintivo
                                    transition: 'transform 0.4s, box-shadow 0.4s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 20px 40px rgba(0, 91, 150, 0.15)`
                                    }
                                }}
                            >
                                {React.cloneElement(pillar.icon, { sx: { fontSize: 60, color: ACCENT_GREEN, mb: 2, p: 1.5, borderRadius: '50%', backgroundColor: `${ACCENT_GREEN}10` } })}
                                <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 600, mt: 2 }}>
                                    {pillar.title}
                                </Typography>
                                <Typography variant="h6" sx={{ color: MAIN_TEXT_COLOR, mb: 1, fontSize: '1.25rem', fontWeight: 500 }}>{pillar.name}</Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR, lineHeight: 1.6, flexGrow: 1 }}>
                                    {pillar.detail}
                                </Typography>
                            </Paper>
                        </ScrollAnimation>
                    </Grid>
                ))}
            </Grid>

            {/* Resumen de Servicios con un diseño de lista más compacto y visual */}
            <ScrollAnimation delay={0} effect="slide">
                <Typography variant="h5" component="h3" align="center" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 4 }}>
                    Enfoque en el Cumplimiento: Servicios Clave
                </Typography>
            </ScrollAnimation>
            
            {/* Servicios clave - Animación SLIDE en cascada */}
            <Grid container spacing={2} justifyContent="center">
                {[
                    { icon: <AssignmentTurnedInIcon />, text: "Contabilidad Mensual y Estados Financieros" },
                    { icon: <BalanceIcon />, text: "Declaraciones Fiscales (ISR, ISV, RAP, IHSS, Retenciones)" },
                    { icon: <LightbulbIcon />, text: "Asesoría Financiera y Proyecciones de Flujo de Caja" },
                    { icon: <DescriptionIcon />, text: "Cálculo y Gestión de Planillas y Prestaciones Laborales" }
                ].map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ScrollAnimation delay={0.1 * (index + 1)} effect="slide">
                            <Paper elevation={2} sx={{ 
                                p: { xs: 2, sm: 2.5 }, 
                                bgcolor: LIGHT_BACKGROUND, 
                                borderRadius: 1, 
                                height: '100%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': { 
                                    transform: 'translateY(-4px)', 
                                    boxShadow: '0px 8px 15px rgba(0,0,0,0.1)' 
                                }
                            }}>
                                {React.cloneElement(service.icon, { sx: { color: ACCENT_GREEN, mr: 1.5, fontSize: { xs: 24, sm: 28 } } })}
                                <Typography variant="body2" align="left" sx={{ color: MAIN_TEXT_COLOR, fontWeight: 500, fontSize: { xs: '0.9rem', sm: '1rem' } }}>{service.text}</Typography>
                            </Paper>
                        </ScrollAnimation>
                    </Grid>
                ))}
            </Grid>
            
            {/* Botón CTA - Animación SLIDE */}
            <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
                <ScrollAnimation delay={0.1 * 5} effect="slide">
                    <Button
                        component={Link}
                        to="/services"
                        variant="outlined"
                        size="large"
                        sx={{
                            borderColor: PRIMARY_DARK,
                            color: PRIMARY_DARK,
                            borderWidth: '2px', // Más grueso para destacar
                            '&:hover': {
                                bgcolor: PRIMARY_DARK,
                                color: WHITE,
                                borderColor: PRIMARY_DARK,
                                transform: 'scale(1.03)',
                                boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
                                borderWidth: '2px',
                            },
                            transition: '0.3s',
                            borderRadius: '30px',
                            px: { xs: 4, sm: 6 },
                            py: { xs: 1.5, sm: 2 },
                            fontSize: { xs: '0.9rem', sm: '1.1rem' },
                            fontWeight: 600,
                        }}
                    >
                        Conoce el Detalle de Nuestros Servicios
                    </Button>
                </ScrollAnimation>
            </Box>
        </Container>
    </Box>
        </Box>
    );
};

export default About;