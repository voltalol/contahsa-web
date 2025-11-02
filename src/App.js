import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material'; 
import { useTheme } from '@mui/material/styles'; 

// 1. Importar los componentes principales de diseño
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

// 2. Importar los componentes de las páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
    const theme = useTheme(); 

    // Definir la misma altura del AppBar que en Navbar.js
    const appBarHeight = { xs: '70px', sm: '80px' }; // <<<<< MISMA ALTURA QUE EN Navbar.js

    return (
        <Router>
            <CssBaseline /> 

            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                
                {/* === 1. BARRA DE NAVEGACIÓN (HEADER) === */}
                <Navbar />

                {/* === ESPACIADOR PRECISO === */}
                {/* Este Box replica la altura exacta del Navbar */}
                <Box sx={{ 
                    // Ya no usamos theme.mixins.toolbar porque definimos una altura custom
                    height: appBarHeight, 
                    minHeight: appBarHeight 
                }} />

                {/* === 2. CONTENIDO PRINCIPAL === */}
                <main style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="" element={<Home />} /> 
                    </Routes>
                </main>
                
                {/* === 3. PIE DE PÁGINA (FOOTER) === */}
                <Footer />

            </div>
        </Router>
    );
};

export default App;
