"use client";
import Envios from '@/components/Footer/Help/Envios/Envios';
import { Box, Typography } from '@mui/material';
import React from 'react';
const titulo = {
    fontSize: "16px",
    fontWeight: "1000",
    color: "#111",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
  
  };
  
  const detalles = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#00174f;",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  };
const page = () => {
  return (
   <Box>

    <Box display="flex" sx={{padding:'24px', backgroundColor:'#f9fafb'}}>
      {/* Contenido izquierdo */}
      <Box sx={{ backgroundColor: 'white', border: '1px solid #e5e5e5', padding: '2.5rem', marginTop: '2.5rem',maxWidth:'85%',height:'10%'}}>
        <Typography sx={{...titulo, color:'#00174f'}}>MENU</Typography>
      
      <span>
        <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >
      FAQs
    </Typography>
        </a>
      </span>

        <Box sx={{ marginLeft: '16px' }}>
        <span>
        <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >Pedidos y pagos</Typography>
     </a>
     </span>
     <span>
     <a href="/account" style={{  textDecoration: 'underline',color: 'inherit' }}>
          <Typography 
      
      sx={{...detalles,
        textDecoration: 'underline',
        "&:hover": {
          textDecoration: "underline",
          color:'orange'
        }
      }}
    >Envios</Typography>
     </a>
     </span>
     <span>
     <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >Cambios, Devoluciones y reembolsos</Typography>
       </a>
       </span>
       <span>
       <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >Productos Falsificados</Typography>
      </a>
      </span>
        </Box>
        <span>
        <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
       <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >Guia de Tallas</Typography>
        </a>
      </span>
      <span>
      <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
       <Typography 
      
      sx={{...detalles,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >Contactos</Typography>
        </a>
      </span>
      </Box>





    <Envios/> </Box>
   </Box>
  );
};

export default page;