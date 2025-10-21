import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    // Estado simple para simular el formulario (opcional)
    const [formData, setFormData] = React.useState({
        name: '', email: '', phone: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica real para enviar el formulario a un servicio de backend o email
        alert('Mensaje enviado (simulado). Gracias por contactarnos!');
        // setFormData({ name: '', email: '', phone: '', message: '' }); // Para resetear
    };

    // Colores corporativos
    const primaryColor = '#004d99'; 
    const secondaryColor = '#f7a000';

    return (
        <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
            
            {/* Título Principal */}
            <Typography variant="h3" component="h1" gutterBottom 
                sx={{ 
                    textAlign: 'center', 
                    mb: 5, 
                    color: primaryColor,
                    fontWeight: 700 
                }}
            >
                Hablemos de tu Contabilidad
            </Typography>

            <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                <Grid container spacing={5}>
                    
                    {/* Columna 1: Formulario de Contacto (60% en escritorio) */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" gutterBottom sx={{ color: primaryColor, mb: 3 }}>
                            Envíanos un Mensaje
                        </Typography>
                        
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            
                            <TextField 
                                label="Nombre Completo" 
                                name="name" 
                                fullWidth 
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <TextField 
                                label="Correo Electrónico" 
                                name="email" 
                                type="email"
                                fullWidth 
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField 
                                label="Teléfono (Opcional)" 
                                name="phone" 
                                fullWidth 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <TextField
                                label="¿En qué podemos ayudarte?"
                                name="message"
                                multiline
                                rows={4}
                                fullWidth
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                            
                            <Button 
                                type="submit" 
                                variant="contained" 
                                sx={{ 
                                    mt: 2, 
                                    bgcolor: secondaryColor,
                                    '&:hover': { bgcolor: '#e69100' } // Tono oscuro al pasar el ratón
                                }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Box>
                    </Grid>

                    {/* Columna 2: Información y Ubicación (40% en escritorio) */}
                    <Grid item xs={12} md={5}>
                        <Typography variant="h5" gutterBottom sx={{ color: primaryColor, mb: 3 }}>
                            Información y Ubicación
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                                <Typography variant="body1">Teléfono: +(504) XXXX-XXXX</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon color="primary" sx={{ mr: 2 }} />
                                <Typography variant="body1">Email: placeholder@contabilidad.com</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <LocationOnIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                                <Typography variant="body1">
                                    Dirección: [Placeholder de la Oficina o Ciudad Principal]
                                </Typography>
                            </Box>
                        </Box>

                        {/* Mapa de Google (Placeholder) */}
                        <Box sx={{ mt: 4, height: 250, bgcolor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', borderRadius: 1 }}>
                            <Typography variant="subtitle1" color="text.secondary">
                                [Placeholder de Mapa de Google Maps Embed]
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Contact;