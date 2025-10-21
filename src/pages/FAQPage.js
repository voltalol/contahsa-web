import React from 'react';
import { Link } from 'react-router-dom'; // <--- ¡Añadir esta importación!
import FAQItem from '../components/FAQItem';
// ... el resto del código es correcto

const faqsData = [
  { 
    question: "¿Cuánto cuesta la asesoría contable?", 
    answer: "Placeholder: Depende de la complejidad y volumen de tu negocio. Ofrecemos paquetes mensuales, ¡cotiza sin compromiso!" 
  },
  { 
    question: "¿Necesito tener mi contabilidad al día para contactarlos?", 
    answer: "Placeholder: No. Podemos ayudarte a ponerla al día. ¡Ese es nuestro trabajo!" 
  },
  { 
    question: "¿Trabajan con empresas grandes o solo PYMES?", 
    answer: "Placeholder: Nuestro enfoque principal son PYMES, pero tenemos soluciones para cualquier tamaño de empresa en Honduras." 
  },
  // Añade más preguntasPlaceholder:
];

const FAQPage = () => {
  return (
    <div className="faq-page container">
      <h1>Preguntas Frecuentes (FAQ)</h1>
      <p className="intro">Placeholder: Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios y contabilidad en general.</p>
      
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          // Componente FAQItem que manejaría el estado de "abierto/cerrado"
          <FAQItem key={index} question={faq.question} answer={faq.answer} /> 
        ))}
      </div>
      
      <section className="no-answer-cta">
        <p>¿No encontraste la respuesta?</p>
        <Link to="/contacto" className="button-secondary">Pregúntanos directamente</Link>
      </section>
    </div>
  );
};

export default FAQPage;