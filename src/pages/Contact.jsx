import React from 'react';
// IMPORTANTE: Se ha agregado 'Container' a las importaciones de Material-UI
import { Box, Typography, Grid, TextField, Button, Paper, Divider, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 

// === PALETA DE COLORES OFICIAL DE CONTAHSA ===
const PRIMARY_DARK = '#005B96'; // 🟦 Azul Oscuro
const ACCENT_GREEN = '#00A79D'; // 🟩 Verde Azulado
const PRIMARY_MEDIUM = '#007FC4'; // 🔵 Azul Medio
const MAIN_TEXT_COLOR = '#2B2B2B'; // ⚫ Texto Principal
const SUB_TEXT_COLOR = '#7A7A7A'; // ⚪ Gris (Texto secundario)
const LIGHT_BACKGROUND = '#f7f9fc'; // Fondo Suave
const WHITE = '#FFFFFF'; // Blanco puro

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
        
        // Simulación: Reemplazamos alert() por una notificación visual en el DOM.
        const notificationBox = document.getElementById('form-notification');
        if (notificationBox) {
            notificationBox.style.display = 'block';
            notificationBox.textContent = '¡Mensaje enviado con éxito! (Simulación). Nos pondremos en contacto pronto.';
            // Ocultar notificación después de 5 segundos
            setTimeout(() => {
                notificationBox.style.display = 'none';
                notificationBox.textContent = '';
            }, 5000);
        }

        setFormData({ name: '', email: '', phone: '', message: '' }); 
    };

    // Componente estilizado para bloques de información
    const InfoBlock = ({ icon, title, content, isLink = false }) => (
        <Paper 
            elevation={2} 
            sx={{ 
                p: 2.5, 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                bgcolor: WHITE,
                borderLeft: `5px solid ${ACCENT_GREEN}`, // Barra de color de acento
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)'
                }
            }}
        >
            {/* Clonamos el ícono para aplicarle estilos de MUI */}
            {React.cloneElement(icon, { sx: { color: PRIMARY_DARK, mr: 2, fontSize: 30 } })}
            <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: MAIN_TEXT_COLOR, mb: 0.5 }}>{title}</Typography>
                {isLink ? (
                    <Typography 
                        variant="body1" 
                        component="a" 
                        href={content.startsWith('tel:') ? content : `mailto:${content}`}
                        sx={{ color: SUB_TEXT_COLOR, textDecoration: 'none', '&:hover': { color: PRIMARY_MEDIUM, textDecoration: 'underline' } }}
                    >
                        {content.replace('tel:', '')}
                    </Typography>
                ) : (
                    <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR }}>{content}</Typography>
                )}
            </Box>
        </Paper>
    );

    return (
        // === CONTENEDOR PRINCIPAL CENTRADO ===
        // Establece una altura mínima de 100% del viewport (100vh)
        // Usa flexbox para centrar vertical y horizontalmente
        <Box 
            sx={{ 
                fontFamily: 'Inter, sans-serif',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centrado vertical
                alignItems: 'center',     // Centrado horizontal
                bgcolor: LIGHT_BACKGROUND, // Fondo suave aplicado aquí
                width: '100%',
                boxSizing: 'border-box'
            }}
        >
 {/* 1. SECCIÓN HERO CON VIDEO DE FONDO (sin flash inicial) */}
<Box
  sx={{
    position: 'relative',
    width: '100%',
    minHeight: { xs: '350px', md: '450px' },
    color: WHITE,
    py: { xs: 8, md: 10 },
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003C69', // tono corporativo oscuro de respaldo
  }}
>
  {/* === VIDEO DE FONDO CON FADE-IN === */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    poster="/videos/poster.jpg" // opcional: miniatura estática sin texto
    onLoadedData={(e) => {
      e.target.style.opacity = 1; // muestra suavemente al cargar
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
      transition: 'opacity 1.5s ease-in-out', // animación suave al aparecer
    }}
  >
    <source src="/1116473_Man_Indoor_3840x2160.mp4" type="video/mp4" />
    Tu navegador no soporta la etiqueta de video.
  </video>

  {/* === OVERLAY AZUL TRANSLÚCIDO === */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bgcolor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    }}
  />

  {/* === CONTENIDO PRINCIPAL === */}
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: 3 }}>
    <Typography
      variant="h3"
      component="h1"
      gutterBottom
      sx={{
        fontWeight: 800,
        mb: 2,
        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
      }}
    >
      Hablemos de tu Contabilidad
    </Typography>
    <Typography
      variant="h6"
      sx={{
        color: 'rgba(255,255,255,0.9)',
        fontSize: { xs: '1rem', sm: '1.25rem' },
      }}
    >
      ¿Listo para delegar tu cumplimiento fiscal? Estamos aquí para ayudarte.
    </Typography>
  </Container>
</Box>



            {/* 2. SECCIÓN PRINCIPAL: FORMULARIO Y CONTACTO RÁPIDO - AHORA CENTRADO */}
            <Box sx={{ 
                py: { xs: 8, md: 12 }, 
                px: 3, 
                // Ya no necesitamos bgcolor aquí, el padre lo maneja
                flexGrow: 1, // Permite que este Box ocupe el espacio restante si la altura es mayor a la pantalla
                width: '100%', 
                display: 'flex',
                justifyContent: 'center', // Centrado horizontal
                alignItems: 'center',     // Centrado vertical si el contenido es pequeño
            }}>
                {/* Se usa Container de MUI para limitar el ancho y centrar su contenido */}
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center">
                        {/* COLUMNA 1: FORMULARIO DE CONTACTO */}
                        <Grid item xs={12} md={7}>
                            <Paper elevation={10} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
                                <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 3 }}>
                                    Envíanos un Mensaje
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR, mb: 3 }}>
                                    Llena el formulario y un especialista se pondrá en contacto contigo a la brevedad.
                                </Typography>
                                
                                {/* NOTIFICACIÓN DE ENVÍO */}
                                <Box 
                                    id="form-notification"
                                    sx={{ 
                                        display: 'none', 
                                        p: 2, 
                                        mb: 3,
                                        borderRadius: 1, 
                                        bgcolor: ACCENT_GREEN, 
                                        color: WHITE, 
                                        fontWeight: 600 
                                    }}
                                />

                                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    
                                    <TextField 
                                        label="Nombre Completo" 
                                        name="name" 
                                        fullWidth 
                                        required 
                                        value={formData.name} 
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="medium"
                                    />
                                    <TextField 
                                        label="Correo Electrónico" 
                                        name="email" 
                                        type="email" 
                                        fullWidth 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="medium"
                                    />
                                    <TextField 
                                        label="Teléfono (WhatsApp, opcional)" 
                                        name="phone" 
                                        fullWidth 
                                        value={formData.phone} 
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="medium"
                                    />
                                    <TextField
                                        label="¿En qué podemos ayudarte? (Consulta, Servicio, Duda Fiscal...)"
                                        name="message"
                                        multiline
                                        rows={5}
                                        fullWidth
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="medium"
                                    />
                                    
                                    {/* BOTÓN ENVIAR */}
                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        size="large"
                                        sx={{ 
                                            mt: 1, 
                                            bgcolor: ACCENT_GREEN, 
                                            color: WHITE,
                                            py: 1.5,
                                            borderRadius: '8px',
                                            fontWeight: 700,
                                            '&:hover': { bgcolor: PRIMARY_MEDIUM, transform: 'scale(1.01)' } 
                                        }}
                                    >
                                        Enviar Consulta
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* COLUMNA 2: INFORMACIÓN DE CONTACTO Y HORARIO */}
                        <Grid item xs={12} md={5}>
                            <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 3 }}>
                                Información Directa
                            </Typography>
                            <Typography variant="body1" sx={{ color: MAIN_TEXT_COLOR, mb: 4 }}>
                                Si prefieres una comunicación más rápida, contáctanos directamente a través de estos canales.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                
                                {/* WhatsApp / Teléfono */}
                                <InfoBlock 
                                    icon={<WhatsAppIcon />} 
                                    title="WhatsApp & Móvil" 
                                    content="tel:+(504) XXXX-XXXX" // Usamos tel: para un enlace clicable
                                    isLink={true}
                                />

                                {/* Email */}
                                <InfoBlock 
                                    icon={<EmailIcon />} 
                                    title="Correo Electrónico" 
                                    content="placeholder@contabilidad.com" 
                                    isLink={true}
                                />
                                
                                <Divider sx={{ my: 1, borderColor: SUB_TEXT_COLOR }} />

                                {/* Horario */}
                                <InfoBlock 
                                    icon={<AccessTimeIcon />} 
                                    title="Horario de Atención" 
                                    content="Lunes a Viernes: 8:00 AM - 5:00 PM (CST)"
                                />

                                {/* Dirección */}
                                <InfoBlock 
                                    icon={<LocationOnIcon />} 
                                    title="Oficina Central" 
                                    content="[Placeholder de la Oficina o Ciudad Principal en Honduras]"
                                />
                            </Box>
                            
                            {/* Mapa de Google (Placeholder con iframe) */}
                            <Box sx={{ mt: 5, height: 280, borderRadius: 3, overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.093390888022!2d-87.16544574999999!3d14.08836155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a72b0c6a5e1e1%3A0x8f2d5a3a7b5d1e1e!2sTegucigalpa%2C%20Honduras!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de la oficina"
                                ></iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
