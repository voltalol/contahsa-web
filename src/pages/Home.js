import React from 'react';

import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';

import { Link } from 'react-router-dom';

import { DollarSign, TrendingUp, Shield, ChevronRight } from 'lucide-react';



// Colores definidos en el diseño (tomados de Navbar.js)

const PRIMARY_DARK = '#000000ff';        

const ACCENT_GREEN = '#00A79D';        

const WHITE = '#FFFFFF';              

const LIGHT_GREY = '#F8F9FA';



// Datos para la sección de Valor/Servicios

const valueProps = [

    {

        icon: DollarSign,

        title: "Optimización Fiscal",

        details: "Maximizamos tus deducciones legales y minimizamos tu carga tributaria, garantizando siempre el cumplimiento con la ley hondureña.",

    },

    {

        icon: TrendingUp,

        title: "Análisis Estratégico",

        details: "Transformamos tus datos contables en reportes accionables para que tomes decisiones que impulsen el crecimiento y la rentabilidad.",

    },

    {

        icon: Shield,

        title: "Tranquilidad Garantizada",

        details: "Nos encargamos de todo el ciclo de impuestos (SAR, ISR, ISV, Planillas). Cero errores, cero multas y 100% de cumplimiento.",

    },

];



const Home = () => {

    return (

        <Box>

            {/* === SECCIÓN 1: HERO (INICIO) - CON VIDEO DE FONDO Y LOGO GIGANTE === */}

            <Box

                sx={{

                    position: 'relative',

                    // Establece la altura mínima al 100% de la altura de la ventana (100vh) para que el video ocupe todo el espacio visible

                    minHeight: { xs: '750px', sm: '850px', md: '100vh' },

                    overflow: 'hidden',

                    display: 'flex',

                    alignItems: 'center', // Centra el Container verticalmente

                    justifyContent: 'center',

                    textAlign: 'center',

                    color: WHITE,

                    py: { xs: 8, md: 0 }

                }}

            >

                {/* ELEMENTO DE VIDEO DE FONDO (Ocupa el 100% del Box) */}

                <video

                    autoPlay

                    loop

                    muted

                    playsInline

                    style={{

                        position: 'absolute',

                        top: 0,

                        left: 0,

                        width: '100%',

                        height: '100%',

                        objectFit: 'cover',

                        zIndex: -2,

                        filter: 'brightness(0.6) grayscale(0.2)',

                    }}

                >

                    <source src="/7593784-hd_1920_1080_25fps.mp4" type="video/mp4" />

                    Tu navegador no soporta la etiqueta de video.

                </video>



                {/* OVERLAY SEMI-TRANSPARENTE */}

                <Box

                    sx={{

                        position: 'absolute',

                        top: 0,

                        left: 0,

                        width: '100%',

                        height: '100%',

                        bgcolor: 'rgba(0, 0, 0, 0.4)',

                        zIndex: -1,

                    }}

                />



                {/* CONTENIDO PRINCIPAL (Logo, Texto, Botón) */}

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 0 } }}>

                    {/* Contenedor del Logo/Marca (TAMAÑO GIGANTE) */}

                    <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>

                        <img

                            src="/contahsalogo2.png"

                            alt="Logo CONTÁHSA"

                            style={{

                                height: 'auto',

                                // AJUSTE: Reducimos MaxHeight para que el texto suba y el logo sea visible.

                                maxHeight: '600px',

                                maxWidth: '90%',

                                width: 'auto',

                                filter: `drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))`

                            }}

                        />

                    </Box>

                   

                    {/* Subtítulo / Propuesta de Valor */}

                    <Typography

                        variant="h5"

                        component="h2"

                        sx={{

                            color: WHITE,

                            fontWeight: 700,

                            mb: 6,

                            maxWidth: 700,

                            mx: 'auto',

                            textShadow: '0 2px 6px rgba(0,0,0,0.7)'

                        }}

                    >

                        Servicios contables, financieros y tributarios de alta calidad, adaptados a tus necesidades.

                    </Typography>



                    {/* Botón CTA - AGENDA TU ASESORÍA GRATUITA */}

                    <Button

                        component={Link}

                        to="/contact"

                        variant="contained"

                        size="large"

                        sx={{

                            bgcolor: ACCENT_GREEN,

                            color: WHITE,

                            fontWeight: 700,

                            py: 1.5,

                            px: 4,

                            borderRadius: '50px',

                            fontSize: '1.1rem',

                            boxShadow: '0 6px 12px rgba(0, 167, 157, 0.4)',

                            transition: 'all 0.3s ease',

                            '&:hover': {

                                bgcolor: PRIMARY_DARK,

                                boxShadow: '0 8px 16px rgba(0, 91, 150, 0.4)',

                                transform: 'translateY(-2px)',

                            }

                        }}

                    >

                        AGENDA TU ASESORÍA GRATUITA

                        <ChevronRight style={{ marginLeft: 8, width: 20 }} />

                    </Button>

                </Container>

            </Box>



            {/* === SECCIÓN 2: VALORES CLAVE / SERVICIOS === */}

            <Box sx={{ bgcolor: LIGHT_GREY, py: { xs: 10, md: 16 } }}>

                <Container maxWidth="lg">

                    <Typography

                        variant="h4"

                        component="h2"

                        align="center"

                        sx={{ fontWeight: 700, color: PRIMARY_DARK, mb: { xs: 3, md: 2 } }}

                    >

                        ¿Por qué elegir a CONTÁHSA?

                    </Typography>

                    <Typography

                        variant="h6"

                        align="center"

                        sx={{ color: '#6C757D', mb: { xs: 8, md: 10 } }}

                    >

                        Te ofrecemos más que contabilidad; te brindamos una ventaja estratégica.

                    </Typography>



                    <Grid container spacing={4} justifyContent="center">

                        {valueProps.map((prop, index) => {

                            const IconComponent = prop.icon;

                            return (

                                <Grid item xs={12} sm={6} md={4} key={index}>

                                    <Paper

                                        elevation={3}

                                        sx={{

                                            p: 4,

                                            borderRadius: 2,

                                            textAlign: 'center',

                                            height: '100%',

                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',

                                            borderBottom: `4px solid ${ACCENT_GREEN}`,

                                            '&:hover': {

                                                transform: 'translateY(-5px)',

                                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',

                                            }

                                        }}

                                    >

                                        <Box sx={{ color: PRIMARY_DARK, mb: 2 }}>

                                            <IconComponent size={48} style={{ color: ACCENT_GREEN }} />

                                        </Box>

                                        <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1.5, color: PRIMARY_DARK }}>

                                            {prop.title}

                                        </Typography>

                                        <Typography variant="body1" sx={{ color: '#343A40' }}>

                                            {prop.details}

                                        </Typography>

                                        <Button

                                            component={Link}

                                            to="/services"

                                            variant="text"

                                            sx={{

                                                mt: 3,

                                                color: ACCENT_GREEN,

                                                fontWeight: 600,

                                                '&:hover': { textDecoration: 'underline' }

                                            }}

                                        >

                                            SABER MÁS

                                        </Button>

                                    </Paper>

                                </Grid>

                            );

                        })}

                    </Grid>

                </Container>

            </Box>



            {/* === SECCIÓN 3: CTA FINAL (CONTÁCTANOS) === */}

            <Box sx={{ bgcolor: PRIMARY_DARK, py: { xs: 8, md: 12 }, textAlign: 'center' }}>

                <Container maxWidth="md">

                    <Typography

                        variant="h4"

                        component="h2"

                        sx={{ fontWeight: 700, color: WHITE, mb: 2 }}

                    >

                        Tu Tranquilidad Fiscal es Nuestra Prioridad.

                    </Typography>

                    <Typography

                        variant="h6"

                        sx={{ color: '#DEDEDE', mb: 5 }}

                    >

                        Déjanos manejar tu contabilidad mientras te enfocas en expandir tu negocio.

                    </Typography>

                    <Button

                        component={Link}

                        to="/contact"

                        variant="contained"

                        size="large"

                        sx={{

                            bgcolor: ACCENT_GREEN,

                            color: PRIMARY_DARK,

                            fontWeight: 800,

                            py: 1.5,

                            px: 6,

                            borderRadius: '50px',

                            fontSize: '1.2rem',

                            boxShadow: '0 6px 12px rgba(0, 167, 157, 0.4)',

                            transition: 'all 0.3s ease',

                            '&:hover': {

                                bgcolor: WHITE,

                                boxShadow: '0 8px 16px rgba(255, 255, 255, 0.4)',

                                transform: 'translateY(-2px)',

                            }

                        }}

                    >

                        INICIA TU ASESORÍA AHORA

                    </Button>

                </Container>

            </Box>

        </Box>

    );

};



export default Home;