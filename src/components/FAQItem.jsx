import React from 'react';

const FAQItem = ({ question, answer }) => (
  <details className="faq-item"> 
    <summary className="faq-question">{question}</summary> 
    <p className="faq-answer">{answer}</p>
  </details>
);

export default FAQItem;