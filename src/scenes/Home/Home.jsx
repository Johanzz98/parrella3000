import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.href = '/'; // Redirige a la página de inicio
  }, []);

  return null; // No se renderiza ningún contenido
};

export default Home;
