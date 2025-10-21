import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que esta línea esté
import ServiceCard from '../components/ServiceCard';
// ... el resto del componente Services
const servicesData = [
  { 
    title: "Asesoría Fiscal y Tributaria", 
    details: "Placeholder: Declaración de Impuesto sobre la Renta (ISR), Impuesto sobre Ventas (ISV), trámites ante el SAR." 
  },
  { 
    title: "Contabilidad General y Estados Financieros", 
    details: "Placeholder: Preparación de Balance General, Estado de Resultados y Flujo de Efectivo, conforme a NIIF." 
  },
  { 
    title: "Servicios de Planillas y Recursos Humanos", 
    details: "Placeholder: Cálculo de nómina, manejo de deducciones (IHSS) y cumplimiento laboral." 
  },
  { 
    title: "Auditoría Interna y Externa", 
    details: "Placeholder: Revisión de procesos contables para asegurar transparencia y detectar riesgos." 
  },
];

const Services = () => {
  return (
    <div className="services-page container">
      <h1>Nuestros Servicios Contables</h1>
      <p className="intro">Placeholder: Soluciones modulares y escalables para que tu negocio tenga la contabilidad que necesita, sin complejidad.</p>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          // Componente ServiceCard simple (Placeholder)
          <ServiceCard key={index} title={service.title} details={service.details} /> 
        ))}
      </div>

      <section className="cta-services">
        <h2>¿Necesitas un servicio a la medida?</h2>
        <Link to="/contacto" className="button-primary">Hablemos de tus necesidades</Link>
      </section>
    </div>
  );
};

export default Services;