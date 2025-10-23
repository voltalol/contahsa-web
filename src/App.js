import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material'; // <<<<<<< IMPORTAR ESTO

// 1. Importar los componentes principales de diseño
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import Footer from './components/Footer'; // Asegúrate de que la ruta sea correcta

// 2. Importar los componentes de las páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Puedes definir tus colores aquí o en un archivo theme.js
const PRIMARY_DARK = '#005B96';

const App = () => {
  return (
    // Router envuelve toda la aplicación para manejar la navegación
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* === 1. BARRA DE NAVEGACIÓN (HEADER) === */}
        {/* El Navbar se coloca fuera de <Routes> para que aparezca en todas las páginas */}
        <Navbar />

        {/* === 2. CONTENIDO PRINCIPAL (Donde cambian las páginas) === */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Opcional: Ruta para 404 Not Found */}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>
        
        {/* === 3. PIE DE PÁGINA (FOOTER) === */}
        {/* El Footer se coloca fuera de <Routes> para que aparezca en todas las páginas */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;