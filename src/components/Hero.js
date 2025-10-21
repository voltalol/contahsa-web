import React from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de importar los componentes de MUI que estés usando aquí (Box, Typography, Button, etc.)

const Hero = () => {
  return (
    <section className="hero-section">
      
      {/* ------------------------------------------- */}
      {/* CAMBIO DE CÓDIGO AQUÍ: Usar la etiqueta <img> */}
      {/* ------------------------------------------- */}
      <div className="hero-image-placeholder">
        <img 
          src="/consultoriacontable.png" 
          alt="Consultoría Contable Profesional" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
      </div> 
      {/* ------------------------------------------- */}
      
      <div className="hero-content">
        <h1>Simplifica tu Contabilidad. Aumenta tu Crecimiento.</h1>
        <p>Expertos contables dedicados a PYMES y profesionales independientes en Honduras.</p>
        <Link to="/contacto" className="cta-button primary">
          Solicita una Consulta Gratuita
        </Link>
      </div>
    </section>
  );
};

export default Hero;