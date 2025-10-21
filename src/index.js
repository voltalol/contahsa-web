import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Asegúrate de tener este archivo para el diseño

// 1. Encontramos el elemento raíz en el HTML y creamos la raíz de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Renderizamos el componente App dentro de la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ELIMINA CUALQUIER OTRO CÓDIGO o COMENTARIO QUE ESTÉ ABAJO DE ESTO.