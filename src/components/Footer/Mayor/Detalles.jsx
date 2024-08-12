"use client";
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

    const handleWhatsAppClick = () => {
      // Aquí puedes ajustar el número de WhatsApp al que deseas redirigir
      window.open('https://api.whatsapp.com/send/?phone=56937552580&text&type=phone_number&app_absent=0', '_blank');

    };
const VentaMayor = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: '0 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra verticalmente
        textAlign: 'center',     // Alinea el texto a la izquierda
     
       
      }}
    >

     


      <Box
  sx={{
    fontSize:'36px',
    cursor: 'pointer',
    padding: '10px',
    marginBottom:'54px',
    marginTop:'54px',
    backgroundColor: '#111',  fontFamily: "Helvetica,sans-serif",
    borderRadius: '24px',
    color:'#fff',
    boxShadow: 'none', // Solo necesitas definir esto una vez
    '&:hover': {
      backgroundColor: '#111',
      color: 'grey',
      boxShadow: 'none', // Y aquí también
    },
  }}
  onClick={handleWhatsAppClick} // Asegúrate de que esta función esté definida en tu componente
>
 
        Contactanos
  </Box>
    </Box>
  );
}

export default VentaMayor;
