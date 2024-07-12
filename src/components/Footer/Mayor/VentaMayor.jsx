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
        textAlign: 'left',     // Alinea el texto a la izquierda
     
       
      }}
    >
        <Box sx={{margin:'0 60px',width: isSmallScreen ? "100%":'45%'}}>
      <Typography sx={{  fontSize:isSmallScreen ? "20px": "32px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  marginLeft:isSmallScreen ? '24px':'12px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom:'24px',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        ¿CÓMO PUEDO VENDER AL MAYOR?
      </Typography>
    
  
      <Typography sx={{  fontSize: "18px",

  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        ¿Te interesa comprar ROPA por mayor? ¿Quieres emprender junto a PARRELLA? <br/>

        Aquí tienes  una excelente oportunidad para ser distribuidor de la mejor calidad en tela.<br/>
        <br/>

        Se acabaron las excusas, es tu momento de crear tu propio  emprendimiento y así comenzar a trazar tu camino.
        <br/><br/>
        ¡Comunícate con nosotros vía WhatsApp para ofrecerle las mejores ofertas, el momento es ahora, crea tu propio negocio!
        <br/><br/>
        Es por eso que te queremos invitar a ser parte de nuestro proyecto que es ventas al mayor, potencia tus ventas con nosotros
        y se parte de este gran proyecto.
      </Typography>
  
     <Typography sx={{  fontSize: "18px",

  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
     <br/><br/>
        Si quieres más información sobre nuestros precios al mayor, métodos de trabajo y entregas, escríbenos dándole click al icono de WhatsApp y con gusto te atenderemos.
      </Typography>
      </Box>

      <Divider/>

      <Box
  sx={{
    fontSize:'36px',
    cursor: 'pointer',
    padding: '10px',
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
