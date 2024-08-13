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
        <Box sx={{margin:'0 60px',width: isSmallScreen ? "100%":'45%'}}>
      <Typography sx={{  fontSize:isSmallScreen ? "20px": "32px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  marginTop:'54px',
  marginLeft:isSmallScreen ? '24px':'12px',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:'24px',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
       ¿Conoces los beneficios de comprar tus productos con nosotros?
      </Typography>
    
  
      </Box>
      <Typography sx={{  fontSize:isSmallScreen ? "20px": "32px",
  fontWeight: "400",
  color: "grey",
  width:'40%',
  fontSize:'18px',
  display: 'flex',
  marginLeft:isSmallScreen ? '24px':'12px',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:'24px',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
Empieza a elevar tus ventas, de manera rápida, sencilla y segura,
en demayoreo puedes encontrar una amplia lista de productos de alta
calidad para comercializar tu mismo.
      </Typography>
      <Box
      sx={{
        padding: '0 7.5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        width: '100%',
        flexWrap: 'wrap', // Allow wrapping on smaller screens
      }}
    >
      {[
        {
          title: 'Directo de fabricante hasta tu tienda',
          text: 'La compra de tu inventario debe ser fácil, económico y rápido, por lo que los productos que adquieras en demayoreo.com serán entregados hasta las puertas de tu negocio.',
          backgroundColor: '#f9676a', // Red color
        },
        {
          title: 'Amplio surtido',
          text: 'En demayoreo.com podrás elegir los productos que buscas dentro de un amplio stock. Recuerda que contamos con una gran variedad de categorías.',
          backgroundColor: '#4a90e2', // Blue color
        },
        {
          title: 'Tenemos los mejores precios',
          text: 'Compra de mayoreo, tenemos los precios más bajos para que así tus ganancias sean mayores.',
          backgroundColor: '#50e3c2', // Teal color
        },
        {
          title: 'Compras seguras',
          text: 'Cuida tu dinero, paga de contado directamente por transferencia. Ten la seguridad de que tu pedido llegará directamente a tu hogar.',
          backgroundColor: '#e94e77', // Pink color
        },
        {
          title: 'Surte tu tienda',
          text: 'Surte tu tienda en demayoreo comprando productos a un super precio para venderlos y multiplicar tus ganancias y elevar tus ventas.',
          backgroundColor: '#f5a623', // Orange color
        }
      ].map((item, index) => {
        // Define marginTop based on title
        let marginTop;
        switch (item.title) {
          case 'Tenemos los mejores precios':
            marginTop = '-64px';
            break;
          case 'Amplio surtido':
            marginTop = '-42px';
            break;
          case 'Compras seguras':
            marginTop = '-46px';
            break;
          case 'Surte tu tienda':
            marginTop = '-46px';
            break;
          default:
            marginTop = '0';
        }

        return (

          
          <Box
            key={index}
            sx={{
             
              width: '15%', // Make sure all boxes are the same width
              minWidth: '200px', // Ensure a minimum width
              height: '300px', // Define a fixed height to keep the size consistent
              borderRadius: '50px',
              backgroundColor: item.backgroundColor, // Apply dynamic background color
              paddingTop: '24px',
              paddingBottom: '46px',
              paddingLeft: '27px',
              paddingRight: '27px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#ffffff',
                  fontWeight: 700,
                  textAlign: 'center',
                  fontFamily: 'Helvetica, sans-serif',
                  fontOpticalSizing: 'auto',
                  margin: '-6px 0 16px',
                  marginTop: marginTop, // Apply the dynamic marginTop
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: '12px',
                color: '#ffffff',
                textAlign: 'center',
                fontFamily: 'Helvetica, sans-serif',
                fontOpticalSizing: 'auto',
                lineHeight: '22px',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
    </Box>
  );
}

export default VentaMayor;
