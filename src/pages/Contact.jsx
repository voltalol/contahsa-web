import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, TextField, Button, Paper, Container, Alert, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// ----------------------------------------------------
// ✅ IMPORTS CANÓNICOS DE FIREBASE
// Importamos getApps y getApp para comprobar si ya está inicializada
import { initializeApp, getApps, getApp } from 'firebase/app'; 
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
// ----------------------------------------------------

// === PALETA DE COLORES ===
const PRIMARY_DARK = '#005B96';
const ACCENT_GREEN = '#00A79D';
const PRIMARY_MEDIUM = '#007FC4';
const MAIN_TEXT_COLOR = '#2B2B2B';
const SUB_TEXT_COLOR = '#7A7A7A';
const LIGHT_BACKGROUND = '#f7f9fc';
const WHITE = '#FFFFFF';

// --- CONFIGURACIÓN DE ENTORNO ---
const getEnvVar = (name, defaultValue) => {
    return typeof window !== 'undefined' && typeof window[name] !== 'undefined' ? window[name] : (typeof global !== 'undefined' && typeof global[name] !== 'undefined' ? global[name] : defaultValue);
};

// 🔴 CONFIGURACIÓN DE FIREBASE (Tomada de la imagen proporcionada por el usuario)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDfWhTiVkpU3CYWsf_F4GRV0wMfqhTnWsI",
  authDomain: "contahsa-web.firebaseapp.com",
  projectId: "contahsa-web",
  storageBucket: "contahsa-web.firebasestorage.app",
  messagingSenderId: "903760677113",
  appId: "1:903760677113:web:ec3c636956e3860b7f3a28",
  measurementId: "G-ZZWJPZ4MHN"
};

const IS_CONFIG_MISSING = Object.keys(FIREBASE_CONFIG).length === 0 || !FIREBASE_CONFIG.apiKey;
const CANVAS_APP_ID = getEnvVar('__app_id', FIREBASE_CONFIG.projectId || 'default-app-id');
const CANVAS_AUTH_TOKEN = getEnvVar('__initial_auth_token', null);
// ----------------------------------------------------


const Contact = () => {
    // 1. Estados de Firebase
    const [dbInstance, setDbInstance] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);

    // 2. Estados del Formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(() => IS_CONFIG_MISSING ? 
        { type: 'error', message: 'ERROR: La configuración de Firebase está vacía.' }
        : null
    );


    // --- EFECTO DE INICIALIZACIÓN DE FIREBASE ---
    useEffect(() => {
        const initFirebase = async () => {
            if (IS_CONFIG_MISSING) {
                console.error("Configuración de Firebase faltante o incompleta.");
                setIsFirebaseReady(true);
                return;
            }

            try {
                // 🛑 SOLUCIÓN AL ERROR: Reutilizar la instancia de App si ya existe
                let app;
                if (getApps().length === 0) {
                    // Si no hay apps, inicializar con la configuración del usuario
                    app = initializeApp(FIREBASE_CONFIG);
                } else {
                    // Si ya hay una app, obtener la app por defecto
                    app = getApp();
                }

                const authService = getAuth(app);
                const firestoreService = getFirestore(app);

                // 1. Autenticación: Intentamos con Custom Token, si falla, Anónimo
                try {
                    if (CANVAS_AUTH_TOKEN) {
                        await signInWithCustomToken(authService, CANVAS_AUTH_TOKEN);
                    } else {
                        await signInAnonymously(authService);
                    }
                } catch (authError) {
                    // Fallback a Anónimo si el Custom Token falla (ej: por la API Key no válida)
                    console.warn("Fallo el inicio de sesión con Custom Token. Intentando con signInAnonymously...", authError);
                    await signInAnonymously(authService);
                    
                    if (authError.message.includes('api-key-not-valid')) {
                        setStatus({ 
                            type: 'error', 
                            message: `Error de API Key: La clave proporcionada es rechazada. Asegúrate de desactivar las 'Restricciones de la aplicación' en Google Cloud Console.` 
                        });
                    }
                }


                // 2. Almacenamos las instancias y el UID
                setDbInstance(firestoreService);
                setCurrentUserId(authService.currentUser?.uid || crypto.randomUUID());
                
                // 3. Marcamos como listo
                setIsFirebaseReady(true); 

            } catch (error) {
                console.error("Error al inicializar o autenticar Firebase:", error);
                // Si el error es la duplicación, ya lo cubrimos, pero si es otro error lo mostramos
                if (!error.message.includes('app/duplicate-app')) {
                    setStatus({ type: 'error', message: `Error de conexión: ${error.message || 'Intenta recargar la página.'}` });
                }
                setIsFirebaseReady(true);
            }
        };
        
        initFirebase();
    }, []); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el mensaje de status al comenzar a escribir
        if (status && status.type !== 'error') {
            setStatus(null);
        }
    };

    // ✅ Función que guarda los datos en Firestore
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Verificación de estado de listo
        if (!isFirebaseReady || !dbInstance) {
            setStatus({ type: 'error', message: 'Sistema no listo. Espera un momento o verifica la conexión.' });
            setLoading(false);
            return;
        }

        try {
            if (!formData.name || !formData.email || !formData.message) {
                setStatus({ type: 'error', message: 'Por favor completa todos los campos obligatorios.' });
                setLoading(false);
                return;
            }
            
            // Usar el ID de usuario
            const userId = currentUserId || crypto.randomUUID();
            // Ruta de colección: artifacts/{appId}/public/data/contactos
            const collectionPath = `artifacts/${CANVAS_APP_ID}/public/data/contactos`;

            await addDoc(collection(dbInstance, collectionPath), {
                nombreCompleto: formData.name,
                correoElectronico: formData.email,
                telefonoWhatsapp: formData.phone || 'No proporcionado',
                descripcionServicio: formData.message,
                fechaEnvio: serverTimestamp(),
                estado: 'pendiente',
                submittedBy: userId,
                currentUserId: userId,
            });

            // Mensaje de confirmación
            setStatus({ 
                type: 'success', 
                message: `¡Gracias, ${formData.name.split(' ')[0]}! Tu mensaje ha sido enviado correctamente.` 
            });

            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error al enviar mensaje a Firebase:', error);
            // Manejo de errores de permisos y general
            const errorMessage = error.code === 'permission-denied' 
                ? 'Error de Permisos: Revisa tus Reglas de Seguridad de Firestore para permitir la escritura anónima.' 
                : `Error al enviar: ${error.message || 'Ocurrió un error. Intenta de nuevo.'}`;
                
            setStatus({ type: 'error', message: errorMessage });
        } finally {
            setLoading(false);
            // Oculta el mensaje de éxito o error después de un tiempo
            setTimeout(() => setStatus(null), 6000);
        }
    };


    const InfoBlock = ({ icon, title, content, isLink = false }) => (
        <Paper
            elevation={2}
            sx={{
                p: 2.5,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                bgcolor: WHITE,
                borderLeft: `5px solid ${ACCENT_GREEN}`,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)'
                }
            }}
        >
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

    const firebaseStatusText = (() => {
        if (IS_CONFIG_MISSING) return 'Error de Configuración (Falta Config)';
        if (!isFirebaseReady) return 'Conectando...';
        // Si hay un error de API Key en el status, lo mostramos
        if (status && status.type === 'error' && status.message.includes('API Key')) return 'Error de API Key';
        return dbInstance ? 'Conectado y Listo' : 'Error al Obtener BD';
    })();

    // Deshabilita el formulario si está cargando o si no hay instancia de base de datos
    const isFormDisabled = loading || !dbInstance || IS_CONFIG_MISSING;

    return (
        <Box
            sx={{
                fontFamily: 'Inter, sans-serif',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: LIGHT_BACKGROUND,
                width: '100%',
                boxSizing: 'border-box'
            }}
        >
            {/* === HERO CON VIDEO DE FONDO === */}
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
                    backgroundColor: PRIMARY_DARK,
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="https://placehold.co/1280x720/003C69/FFFFFF?text=Video+Background"
                    onError={(e) => { 
                        e.target.style.display = 'none'; // Oculta si no carga
                        e.target.parentNode.style.backgroundColor = PRIMARY_DARK; // Color de fallback
                    }}
                    onLoadedData={(e) => e.target.style.opacity = 1}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        opacity: 0,
                        transition: 'opacity 1.5s ease-in-out',
                    }}
                >
                    <source src="6700653-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>

                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: 3 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' } }}>
                        Hablemos de tu Contabilidad
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        ¿Listo para delegar tu cumplimiento fiscal? Estamos aquí para ayudarte.
                    </Typography>
                </Container>
            </Box>

            {/* === FORMULARIO === */}
            <Box sx={{ py: { xs: 8, md: 12 }, px: 3, flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center">
                        <Grid item xs={12} md={7}>
                            <Paper elevation={10} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
                                <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 3 }}>
                                    Envíanos un Mensaje
                                </Typography>
                                <Typography variant="body1" sx={{ color: SUB_TEXT_COLOR, mb: 3 }}>
                                    Llena el formulario y un especialista se pondrá en contacto contigo a la brevedad.
                                </Typography>

                                {status && (
                                    <Alert severity={status.type} sx={{ mb: 3, fontWeight: 600 }}>
                                        {status.message}
                                    </Alert>
                                )}

                                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    <TextField label="Nombre Completo" name="name" fullWidth required value={formData.name} onChange={handleChange} disabled={isFormDisabled} />
                                    <TextField label="Correo Electrónico" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} disabled={isFormDisabled} />
                                    <TextField label="Teléfono (WhatsApp, opcional)" name="phone" fullWidth value={formData.phone} onChange={handleChange} disabled={isFormDisabled} />
                                    <TextField label="¿En qué podemos ayudarte?" name="message" multiline rows={5} fullWidth required value={formData.message} onChange={handleChange} disabled={isFormDisabled} />
                                    <Button type="submit" variant="contained" size="large" disabled={isFormDisabled}
                                        sx={{ mt: 1, bgcolor: ACCENT_GREEN, color: WHITE, py: 1.5, borderRadius: '8px', fontWeight: 700, '&:hover': { bgcolor: PRIMARY_MEDIUM, transform: 'scale(1.01)' } }}>
                                        {loading ? <CircularProgress size={24} sx={{ color: WHITE }} /> : 'Enviar Consulta'}
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Typography variant="h5" gutterBottom sx={{ color: PRIMARY_DARK, fontWeight: 700, mb: 3 }}>Información Directa</Typography>
                            <Typography variant="body1" sx={{ color: MAIN_TEXT_COLOR, mb: 4 }}>
                                Si prefieres una comunicación más rápida, contáctanos directamente a través de estos canales.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <InfoBlock icon={<WhatsAppIcon />} title="WhatsApp & Móvil" content="tel:+(504) 9487-6832" isLink={true} />
                                <InfoBlock icon={<EmailIcon />} title="Correo Electrónico" content="contacto@contahsa.com" isLink={true} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
};

export default Contact;