import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// PALETA DE COLORES OFICIAL DE CONTAHSA
const PRIMARY_DARK = '#005B96';        // 🟦 Azul Oscuro (Títulos, Íconos principales)
const ACCENT_GREEN = '#00A79D';        // 🟩 Verde Azulado (Botón de Llamada a la Acción)
const PRIMARY_MEDIUM = '#007FC4';      // 🔵 Azul Medio (Hover de botones)
const MAIN_TEXT_COLOR = '#2B2B2B';     // ⚫ Negro (Texto Principal, no usado directamente aquí)
const SUB_TEXT_COLOR = '#7A7A7A';      // ⚪ Gris (Texto secundario, no usado directamente aquí)

const Contact = () => {
    // Estado simple para simular el formulario
    const [formData, setFormData] = React.useState({
        name: '', email: '', phone: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica real para enviar el formulario
        alert('Mensaje enviado (simulado). Gracias por contactarnos!');
        // setFormData({ name: '', email: '', phone: '', message: '' }); // Para resetear
    };

    return (
        <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 1200, margin: '0 auto' }}>
            
            {/* Título Principal */}
            <Typography variant="h3" component="h1" gutterBottom 
                sx={{ 
                    textAlign: 'center', 
                    mb: 5, 
                    color: PRIMARY_DARK, // Título en Azul Oscuro
                    fontWeight: 700 
                }}
            >
                Hablemos de tu Contabilidad
            </Typography>

            <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                <Grid container spacing={5}>
                    
                    {/* Columna 1: Formulario de Contacto */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, mb: 3 }}>
                            Envíanos un Mensaje
                        </Typography>
                        
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            
                            {/* Campos del formulario */}
                            <TextField label="Nombre Completo" name="name" fullWidth required value={formData.name} onChange={handleChange} />
                            <TextField label="Correo Electrónico" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
                            <TextField label="Teléfono (Opcional)" name="phone" fullWidth value={formData.phone} onChange={handleChange} />
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
                            
                            {/* BOTÓN ENVIAR: ACCENT_GREEN (Verde Azulado) */}
                            <Button 
                                type="submit" 
                                variant="contained" 
                                size="large"
                                sx={{ 
                                    mt: 2, 
                                    bgcolor: ACCENT_GREEN, // Verde Azulado
                                    '&:hover': { bgcolor: PRIMARY_MEDIUM } // Azul Medio en el hover
                                }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Box>
                    </Grid>

                    {/* Columna 2: Información y Ubicación */}
                    <Grid item xs={12} md={5}>
                        <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, mb: 3 }}>
                            Información y Ubicación
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            
                            {/* Teléfono */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ color: PRIMARY_DARK, mr: 2 }} /> {/* Ícono en Azul Oscuro */}
                                <Typography variant="body1">Teléfono: +(504) XXXX-XXXX</Typography>
                            </Box>

                            {/* Email */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ color: PRIMARY_DARK, mr: 2 }} /> {/* Ícono en Azul Oscuro */}
                                <Typography variant="body1">Email: placeholder@contabilidad.com</Typography>
                            </Box>

                            {/* Dirección */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <LocationOnIcon sx={{ color: PRIMARY_DARK, mr: 2, mt: 0.5 }} /> {/* Ícono en Azul Oscuro */}
                                <Typography variant="body1">
                                    Dirección: [Placeholder de la Oficina o Ciudad Principal]
                                </Typography>
                            </Box>
                        </Box>

                        {/* Mapa de Google (Placeholder) */}
                        <Box sx={{ mt: 4, height: 250, bgcolor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${PRIMARY_DARK}`, borderRadius: 1 }}>
                            <Typography variant="subtitle1" color={SUB_TEXT_COLOR}>
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