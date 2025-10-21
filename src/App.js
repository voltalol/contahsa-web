import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes de Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importa las páginas
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

// Crea un componente que envuelva el Header y Footer
const Layout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Envuelve todas las rutas principales con el Layout
                  Esto asegura que el Header y Footer se mantengan constantes
                */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/sobre-nosotros" element={<Layout><About /></Layout>} />
                <Route path="/servicios" element={<Layout><Services /></Layout>} />
                <Route path="/faqs" element={<Layout><FAQPage /></Layout>} />
                <Route path="/contacto" element={<Layout><Contact /></Layout>} />
                
                {/* Puedes añadir una página 404 aquí */}
            </Routes>
        </Router>
    );
};

export default App;