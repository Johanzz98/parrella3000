"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider} from '@mui/material';
import Perfil from './Perfil';
import AccountData from './AccountData';
import FullNameNodal from '@/components/accountProfile/FullNameNodal';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '@/components/Footer/Footer';
import InfoFinal from '@/components/InfoFinal';
import FooterDown from '@/components/Footer/FooterDown';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css"
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import AccountDataMobile from './AccountDataMobile';

const RedDivider = () => {
  return (
    <Divider
      orientation="vertical"
      sx={{
        backgroundColor: '#e0e0e0',
        height: '100%',
      }}
    />
  );
};

const Titulo = {
  fontSize: "32px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
};



const VerDivider = () => {
  return (
    <Divider
      orientation="horizontal"
      sx={{
        backgroundColor: 'white',
        height: '1px',
        width: '600%',
        margin: '10px 0',
      }}
    />
  );
};

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;
  
    // Verifica si el usuario ya está en la página raíz ('/')
    if (currentPath === '/') {
      return; // No hace nada y sale del useEffect
    }
  
    // Primero verifica en el almacenamiento de sesión
    const sessionToken = sessionStorage.getItem('token');
    if (!sessionToken) {
      // Si no hay un token en el almacenamiento de sesión, verifica en el almacenamiento local
      const localToken = localStorage.getItem('token');
      if (!localToken) {
        // Si no hay token en ninguno de los dos almacenamientos, redirige a la página raíz ('/')
        window.location.href = "/SignInOutContainer";
        console.log("No hay token disponible. Redireccionando a la página raíz.");
      }
    }
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al cargar el componente
  

  return (
    <ThemeProvider theme={theme}>
    <ReduxProvider store={store()}>
      <AuthProvider>
        <Box sx={{ mt: 6 }}>
          <Navbar />
          <Hidden mdDown>
            <Box
              sx={{
                position: 'absolute',
                top: '1',
                left: '0',
                width: '100%',
                height: '263px',
                bgcolor: 'black',
                zIndex: '1',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  paddingBottom: '12px',
                }}
              >
                <img
                  src='https://en.bloomingdales.qa/on/demandware.static/-/Library-Sites-BloomingDalesSharedLibrary/default/dw69be0108/FINAL-IMAGES/BRAND-HEADERS/desktop-brand/adidas.jpg'
                  alt="logo"
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    zIndex: '1',
                  }}
                />
              </Box>
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh', backgroundColor: "white" }}>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <VerDivider />
                <Perfil />
              </Box>
              <Hidden mdDown>
                <RedDivider />
              </Hidden>
              <Box sx={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15%' }}>
                <AccountData openModal={handleOpenModal} />
                <FullNameNodal open={openModal} handleClose={handleCloseModal} />
              </Box>
              <Hidden mdDown>
                <RedDivider />
              </Hidden>
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <Box sx={{ marginBottom: '-14px', display: 'flex', marginLeft: 'auto', position: 'relative', zIndex: '9999' }}>
       
      </Box>
      <img
        src={`../../assets/franvertical.jpg`}
        alt="logo"
        style={{
          width: "460px",
          height: "100%",
          marginTop: '4%',
          position: 'relative',
        }}
      />
    </Box>
  </Box>
           
          </Hidden>
          <Box >
          <Hidden mdUp>
                
             
            <AccountDataMobile openModal={handleOpenModal} />
            <FullNameNodal open={openModal} handleClose={handleCloseModal} />
            </Hidden>
          </Box>
          <Footer />
          <FooterDown />
        </Box>
      </AuthProvider>
    </ReduxProvider>
  </ThemeProvider>
  );
}

export default App;