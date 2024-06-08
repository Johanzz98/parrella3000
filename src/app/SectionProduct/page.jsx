"use client";
import React, { useState, useEffect } from 'react';
import Info from './Info';
import Muestra from './Muestra';
import Mobile from './Mobile';
import MuestraMobile from './MuestraMobile';
import Look from './Look';
import LookMax from './LookMax';
import Navbar from '@/components/Navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import { store } from "@/services/store";
import InfoFinal from '@/components/InfoFinal';
import Footer from '@/components/Footer/Footer';
import FooterDown from '@/components/Footer/FooterDown';


function SectionProduct() {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Inicializar con false para evitar errores de compilación

  useEffect(() => {
    // Verificar si el código se está ejecutando en el navegador
    if (typeof window!== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 800);

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 800);
      };

      window.addEventListener('resize', handleResize);

      // Limpiar el evento al desmontar el componente
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (isSmallScreen) {
    return (
      <>
       <ReduxProvider store={store()}>
       <AuthProvider>
       <Navbar />
        <Mobile />
        <MuestraMobile />
      
        <Look />
        <div style={{ display: 'none' }}>
                <ShoppingCart/>
              </div>
              <InfoFinal/>
              <Footer />
              <FooterDown/>
              </AuthProvider>
              </ReduxProvider>
      </>
    );
  }

  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
      <Box sx={{mt:16}}>
        <Navbar/>
        
        <Grid container spacing={1}>
          {/* Columna para Muestra */}
          <Grid item xs={12} md={9}>
            <Muestra />
          </Grid>

          {/* Columna para Info */}
          <Grid item xs={12} md={3}>
            <Info />
          </Grid>
        </Grid>
       
        {/* Sección para LookMax debajo de Muestra */}
       
       
        <InfoFinal/>
              <Footer />
              <FooterDown/>
    </Box>

      </AuthProvider>
    </ReduxProvider>
  );
}

export default SectionProduct;
