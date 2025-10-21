import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // <-- ¡Añadido!

const About = () => {
    const primaryColor = '#004d99'; 
    const secondaryColor = '#f7a000';
    const lightBg = '#f4f4f4';

    // Datos de Socios y Gestión
    const managementData = [
        { title: "Gerente General:", value: "Mario Romeo Elvir" },
        { title: "Socio Mayoritario:", value: "Jose Mario Elvir (60% del Capital)" },
        { title: "Convocatoria a Asambleas:", value: "Mayoría Simple" },
        { title: "Revisión de Gestión del Gerente:", value: "Mayoría Simple" },
    ];

    return (
        <Box sx={{ py: 8, px: 3, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                
                <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ color: primaryColor, fontWeight: 700, mb: 6 }}>
                    Conoce a CONTAHSA S. de R.L. de C.V.
                </Typography>

                {/* Sección 1: Propósito y Misión */}
                <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ color: primaryColor, mb: 2 }}>
                            Nuestra Misión y Propósito
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                            **CONTAHSA S. de R.L. de C.V.** tiene como objetivo principal ser el aliado contable y financiero más confiable de Honduras, brindando soluciones claras y eficientes a PYMES y profesionales.
                        </Typography>
                        
                        <Typography variant="subtitle1" sx={{ color: secondaryColor, fontWeight: 'bold' }}>
                            Nuestro Propósito Legal:
                        </Typography>
                        <Typography variant="body2" fontStyle="italic" sx={{ mt: 1, p: 2, bgcolor: '#f9f9f9', borderLeft: `3px solid ${secondaryColor}` }}>
                            "La sociedad tendrá por objeto principal la prestación de servicios profesionales de asesoría, consultoría y patrocinio contable, financiero, tributario, de auditoría, administrativo, laboral y empresarial, y la capacitación relacionada con estas áreas..."
                        </Typography>
                    </Grid>
                    
                    {}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: 300, borderRadius: 2, overflow: 'hidden' }}> 
    <img 
        src="/equpotrabajo.jpg"
        alt="Equipo de Contadores de CONTAHSA" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
</Box>
                    </Grid>
                </Grid>
                
                <Divider sx={{ my: 4 }} />

                {}
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: primaryColor, fontWeight: 600, mt: 4, mb: 4 }}>
                    Estructura de la Empresa
                </Typography>
                
                <Grid container spacing={4}>
                    {/* Estructura Legal */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                            <GroupsIcon sx={{ color: primaryColor, fontSize: 40, mb: 1 }} />
                            <Typography variant="h5" gutterBottom sx={{ color: primaryColor }}>
                                Socios y Capital
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="action" /></ListItemIcon>
                                    <ListItemText primary="Jose Mario Elvir: 60% de Distribución de Capital" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="action" /></ListItemIcon>
                                    <ListItemText primary="Karelis Elvir: 20% de Distribución de Capital" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="action" /></ListItemIcon>
                                    <ListItemText primary="Mario Romeo Elvir: 20% de Distribución de Capital" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    
                    {/* Gestión y Gobierno */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                            <BusinessIcon sx={{ color: primaryColor, fontSize: 40, mb: 1 }} />
                            <Typography variant="h5" gutterBottom sx={{ color: primaryColor }}>
                                Gestión y Gobernanza
                            </Typography>
                            <List dense>
                                {managementData.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon><AssignmentTurnedInIcon color="action" /></ListItemIcon>
                                        <ListItemText primary={
                                            <React.Fragment>
                                                <Typography component="span" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                                <Typography component="span">{item.value}</Typography>
                                            </React.Fragment>
                                        } />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* Sección 3: Llamado a la Acción Final */}
                <Box sx={{ textAlign: 'center', py: 5, bgcolor: lightBg, borderRadius: 2, mt: 6 }}>
                    <Typography variant="h5" sx={{ color: primaryColor, mb: 2 }}>
                        ¿Listo para Optimizar tu Contabilidad?
                    </Typography>
                    <Button 
                        component={Link} 
                        to="/contacto" 
                        variant="contained" 
                        size="large"
                        sx={{ bgcolor: secondaryColor, '&:hover': { bgcolor: '#e69100' } }}
                    >
                        Agenda tu Consulta Hoy
                    </Button>
                </Box>
                
            </Container>
        </Box>
    );
};

export default About;