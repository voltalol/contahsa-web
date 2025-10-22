import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'; // <-- Importa CssBaseline y herramientas de tema
// ... (Importación de tus componentes: Header, Footer, Home, About, etc.)
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';

// Puedes crear un tema base aquí para asegurar la consistencia del fondo
const theme = createTheme({
    // Puedes definir tu paleta de colores aquí en el futuro
    // y asegurarte de que el fondo sea blanco o transparente
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* 1. AGREGAR ESTA LÍNEA AL PRINCIPIO */}
            <CssBaseline /> 
            
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQPage />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;