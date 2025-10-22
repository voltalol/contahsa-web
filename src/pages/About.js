import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Ícono para Integridad
import HandshakeIcon from '@mui/icons-material/Handshake'; // Ícono para Confianza

// PALETA DE COLORES OFICIAL DE CONTAHSA
const PRIMARY_DARK = '#005B96';        
const ACCENT_GREEN = '#00A79D';        
const PRIMARY_MEDIUM = '#007FC4';      
const MAIN_TEXT_COLOR = '#2B2B2B';     
const SUB_TEXT_COLOR = '#7A7A7A';      
const LIGHT_GREY = '#f7f9fc';          
const WHITE = '#FFFFFF';               

const managementData = [
    { title: "Gerente General:", value: "Mario Romeo Elvir" },
    { title: "Socio Mayoritario:", value: "Jose Mario Elvir (60% del Capital)" },
    { title: "Convocatoria a Asambleas:", value: "Mayoría Simple" },
    { title: "Revisión de Gestión del Gerente:", value: "Mayoría Simple" },
];

const coreValues = [
    { icon: <VerifiedUserIcon />, title: "Integridad", detail: "Actuamos con máxima transparencia y ética en cada registro y asesoría." },
    { icon: <AssignmentTurnedInIcon />, title: "Cumplimiento", detail: "Garantizamos el 100% de apego a las leyes fiscales y laborales hondureñas." },
    { icon: <HandshakeIcon />, title: "Confianza", detail: "Construimos relaciones duraderas basadas en la confidencialidad y el profesionalismo." },
];

const About = () => {
    return (
        // Contenedor principal único
        <Box> 
            
            {/* 1. HERO SECTION: Historia y Título */}
            <Box 
                sx={{ 
                    position: 'relative',
                    bgcolor: PRIMARY_DARK,
                    color: WHITE, 
                    py: { xs: 8, md: 10 }, 
                    textAlign: 'center',
                    overflow: 'hidden',
                    backgroundImage: 'linear-gradient(135deg, #005B96 0%, #007FC4 100%)', 
                    boxShadow: 3
                }}
            >
                <Container maxWidth="md">
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        gutterBottom 
                        sx={{ fontWeight: 700, mb: 2 }}
                    >
                        Somos tu Aliado Contable en Honduras
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ color: 'rgba(255,255,255,0.9)', mb: 4 }}
                    >
                        Conoce la estructura, misión y los valores que nos convierten en la mejor opción para la gestión financiera de tu empresa.
                    </Typography>
                </Container>
            </Box>

            {/* 2. SECCIÓN: MISIÓN Y PROPÓSITO - Diseño Separado (IMAGEN Y TÍTULO CENTRADOS) */}
            <Box sx={{ py: 8, px: 3, bgcolor: WHITE }}>
                <Container maxWidth="lg">
                    {/* Contenedor del título "Visión Clara, Gestión Transparente" y la imagen */}
                    {/* Usamos un Grid item xs=12 md=8 para que el contenido no se estire demasiado
                        y lo centramos con margin: '0 auto' */}
                    <Grid container spacing={5} justifyContent="center"> {/* Agregamos justifyContent="center" */}
                        <Grid item xs={12} md={8}> {/* En desktop, la imagen y texto ocuparán un ancho más manejable */}
                            <Box 
                                sx={{ 
                                    height: 350, 
                                    borderRadius: 2, 
                                    overflow: 'hidden', 
                                    boxShadow: 6, 
                                    mb: 4, // Margen inferior para separar del título
                                    width: '100%', // La imagen ocupa el 100% de su contenedor Grid
                                    display: 'flex', // Usar flexbox para centrar la imagen dentro de su Box
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            > 
                                <img 
                                    src="/equpotrabajo.jpg" 
                                    alt="Equipo de Contadores de CONTAHSA" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover' 
                                    }}
                                />
                            </Box>
                            <Typography 
                                variant="h4" 
                                component="h2" 
                                gutterBottom 
                                sx={{ 
                                    color: PRIMARY_DARK, 
                                    fontWeight: 600, 
                                    mb: 3, 
                                    textAlign: 'center' // Centramos el título
                                }}
                            >
                                Visión Clara, Gestión Transparente
                            </Typography>
                        </Grid>
                        
                        {/* El resto del texto se mantiene alineado a la izquierda por su naturaleza, pero dentro del mismo Grid Item centrado */}
                        <Grid item xs={12} md={8}> {/* Este Grid item también se centrará con el container padre */}
                            <Typography variant="body1" sx={{ color: MAIN_TEXT_COLOR, mb: 3, fontSize: '1.1rem' }}>
                                **CONTAHSA S. de R.L. de C.V.** nació con el objetivo de simplificar la complejidad fiscal y contable. Nos enfocamos en liberar a PYMES y profesionales para que puedan concentrarse en su crecimiento, garantizando su **cumplimiento total en Honduras**.
                            </Typography>
                            
                            <Typography variant="subtitle1" sx={{ color: ACCENT_GREEN, fontWeight: 'bold' }}>
                                Propósito Legal (Extracto):
                            </Typography>
                            <Typography variant="body2" fontStyle="italic" sx={{ mt: 1, p: 2, bgcolor: LIGHT_GREY, borderLeft: `5px solid ${ACCENT_GREEN}`, color: SUB_TEXT_COLOR, borderRadius: 1 }}>
                                "La sociedad tendrá por objeto principal la prestación de servicios profesionales de asesoría, consultoría y patrocinio contable, financiero, tributario, de auditoría, administrativo, laboral y empresarial, y la capacitación relacionada con estas áreas..."
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 3. SECCIÓN: VALORES CENTRALES - CENTRADA */}
            <Box sx={{ py: 8, px: 3, bgcolor: LIGHT_GREY }}>
                
                <Container maxWidth="md">
                    <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 600, mb: 6 }}>
                        Nuestros Valores Fundamentales
                    </Typography>
                    
                    <Grid container spacing={4} justifyContent="center">
                        {coreValues.map((value, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper elevation={4} sx={{ 
                                    p: 4, 
                                    textAlign: 'center', 
                                    height: '100%', 
                                    transition: '0.3s', 
                                    borderBottom: `4px solid ${ACCENT_GREEN}`,
                                    '&:hover': { transform: 'scale(1.02)', boxShadow: 10 } 
                                }}>
                                    {React.cloneElement(value.icon, { sx: { fontSize: 50, color: PRIMARY_DARK, mb: 2 } })}
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ color: MAIN_TEXT_COLOR, fontWeight: 600 }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR }}>
                                        {value.detail}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* 4. SECCIÓN: ESTRUCTURA LEGAL Y GOBERNANZA - Con Separación de Cajas */}
            <Box sx={{ py: 8, px: 3, bgcolor: WHITE }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 600, mb: 6 }}>
                        Estructura Societaria y Gobernanza
                    </Typography>
                    
                    <Grid container spacing={4}>
                        {/* Socios y Capital */}
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 4, height: '100%', borderLeft: `5px solid ${ACCENT_GREEN}` }}>
                                <GroupsIcon sx={{ color: PRIMARY_DARK, fontSize: 40, mb: 2 }} />
                                <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 600 }}>
                                    Socios y Distribución de Capital
                                </Typography>
                                <List dense>
                                    {[
                                        { name: "Jose Mario Elvir", percentage: "60%" },
                                        { name: "Karelis Elvir", percentage: "20%" },
                                        { name: "Mario Romeo Elvir", percentage: "20%" }
                                    ].map((socio, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><CheckCircleIcon sx={{ color: ACCENT_GREEN }} /></ListItemIcon>
                                            <ListItemText primary={<Typography component="span" sx={{ color: MAIN_TEXT_COLOR }}>
                                                <Typography component="span" sx={{ fontWeight: 'bold' }}>{socio.name}:</Typography> {socio.percentage} de Distribución
                                            </Typography>} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                        
                        {/* Gestión y Gobierno */}
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 4, height: '100%', borderLeft: `5px solid ${PRIMARY_DARK}` }}>
                                <BusinessIcon sx={{ color: PRIMARY_DARK, fontSize: 40, mb: 2 }} />
                                <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 600 }}>
                                    Detalles de la Gestión Interna
                                </Typography>
                                <List dense>
                                    {managementData.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon><AssignmentTurnedInIcon sx={{ color: PRIMARY_DARK }} /></ListItemIcon>
                                            <ListItemText primary={<Typography component="span" sx={{ color: MAIN_TEXT_COLOR }}>
                                                <Typography component="span" sx={{ fontWeight: 'bold' }}>{item.title}</Typography> {item.value.includes(':') ? '' : item.value}
                                            </Typography>} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* 5. LLAMADA A LA ACCIÓN FINAL - CTA Impactante */}
            <Box 
                sx={{ 
                    position: 'relative',
                    bgcolor: PRIMARY_DARK,
                    color: WHITE, 
                    py: { xs: 8, md: 10 }, 
                    textAlign: 'center',
                    overflow: 'hidden',
                    backgroundImage: 'linear-gradient(135deg, #005B96 0%, #007FC4 100%)', 
                    boxShadow: 3
                }}
            >
                <Container maxWidth="md">
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        gutterBottom 
                        sx={{ fontWeight: 700, mb: 3 }}
                    >
                        Comienza tu Alianza con CONTAHSA
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ color: 'rgba(255,255,255,0.9)', mb: 4 }}
                    >
                        Estamos listos para gestionar tu contabilidad con la confianza y eficiencia que mereces.
                    </Typography>
                    <Button 
                        component={Link} 
                        to="/contact" 
                        variant="contained" 
                        size="large"
                        sx={{ 
                            bgcolor: ACCENT_GREEN, 
                            color: WHITE,
                            '&:hover': { bgcolor: PRIMARY_MEDIUM, transform: 'scale(1.05)' },
                            transition: '0.3s',
                            borderRadius: '30px', 
                            px: 6, 
                            py: 2,
                            fontSize: '1.1rem',
                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        Contactar a un Experto
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default About;