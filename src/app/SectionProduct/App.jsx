"use client";
import React, { useState, useEffect } from 'react';
import Info from './Info';
import Muestra from './Muestra';
import Mobile from './Mobile';
import MuestraMobile from './MuestraMobile';
import Look from './Look';
import "./App.css";
import Navbar from '@/components/Navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import { store } from "@/services/store";
import InfoFinal from '@/components/InfoFinal';
import Footer from '@/components/Footer/Footer';
import FooterDown from '@/components/Footer/FooterDown';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import { productDataCart } from './ImgDetails';


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Inicializar con false para evitar errores de compilación

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
             <div style={{ display: 'none' }}>
                <ShoppingCart/>
              </div>
          <Info product={productDataCart} />
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

export default App;