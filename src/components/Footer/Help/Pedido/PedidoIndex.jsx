import React from 'react';
import { Box, Typography, Hidden, Grid, Container, Button } from '@mui/material';

import 'react-multi-carousel/lib/styles.css';
import Pedidos from './Pedidos';

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
  color: "#00174f",
  margin: '16px 0',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
};

const detallesMobile = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#00174f",
  textAlign: 'right',
 
  whiteSpace: 'nowrap',
  overflowWrap: 'break-word',
  display: 'flex',
 lineHeight:'15px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  margin: '12px', // Agregar un margen alrededor de cada Box
};



const PedidoIndex = () => {
  return (
    <Box display="flex" sx={{ backgroundColor: '#f9fafb' }}>
      {/* Contenido izquierdo para pantallas mayores a md */}
      <Hidden mdDown>
        <Box sx={{display:'flex', padding:'24px'}}>
        <Box sx={{ backgroundColor: 'white', border: '1px solid #e5e5e5', padding: '2.5rem', marginTop: '2.5rem', maxWidth: '85%', height: '50%' }}>
          <Typography sx={{ ...titulo, color: '#00174f' }}>MENU</Typography>     
          <span>
            <a href="/FAQS" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline", color: 'orange' } }}
              >
                FAQS
              </Typography>
            </a>
          </span>
          <Box sx={{ marginLeft: '16px' }}>
            <span>
              <a href="/FAQS/Pagos" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography 
                  sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                >
                  Pedidos y pagos
                </Typography>
              </a>
            </span>
            <span>
              <a href="/FAQS/Envios" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography 
                  sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                >
                  Envios
                </Typography>
              </a>
            </span>
            <span>
              <a href="/FAQS/Cambios" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography 
                  sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                >
                  Cambios, Devoluciones y reembolsos
                </Typography>
              </a>
            </span>
            <span>
            <a href="/FAQS/Pedidos" style={{ textDecoration: 'underline', color: 'inherit' }}>
              <Typography 
                sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline", color: 'orange' }  }}
              >
                Estado de mi Pedido
              </Typography>
            </a>
          </span>
          </Box>
          <span>
            <a href="/FAQS/Tallas" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Guia de Tallas
              </Typography>
            </a>
          </span>
        
     
        
        </Box>
           {/* Componente FAQS a la derecha */}
      <Pedidos/>
      </Box>
      </Hidden>

      {/* Contenido izquierdo para pantallas menores a md */}
      <Hidden mdUp>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {/* Primer Box - barra de navegación */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e6ed',
          display: 'flex',
          marginTop:'-48px',
         
          overflowX: 'auto',
          overflowY: 'hidden', // Oculta cualquier barra de desplazamiento vertical si la hubiera
          whiteSpace: 'nowrap',
          padding: '12px 0',

          // Estilos para ocultar las barras de desplazamiento
          '&::-webkit-scrollbar': {
            display: 'none', // Para navegadores basados en WebKit
          },
          scrollbarWidth: 'none', // Para Firefox
        }}
      >
        <Container sx={{ display: 'flex', gap: '16px', flexWrap: 'nowrap' }}>
          <Button
            component="a"
            href="/FAQS"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '62px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>FAQS</Typography>
          </Button>

          <Button
            component="a"
            href="/FAQS/Pagos"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '132px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>Pedidos y pagos</Typography>
          </Button>

          <Button
            component="a"
            href="/FAQS/Envios"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '82px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>Envios</Typography>
          </Button>

          <Button
            component="a"
            href="/FAQS/Cambios"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '170px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>Cambios y Devoluciones</Typography>
          </Button>

          <Button
            component="a"
            href="/FAQS/Tallas"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '120px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>Guía de Tallas</Typography>
          </Button>

          <Button
            component="a"
            href="/FAQS/Pedidos"
            sx={{
              backgroundColor: 'white',
              border: '1px solid #e5e6ed',
              borderRadius: '0',
              minWidth: '150px',
              height: '40px',
              textTransform: 'capitalize',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography sx={detallesMobile}>Estado de mi Pedido</Typography>
          </Button>
        </Container>
      </Box>

      {/* Segundo Box - contenido debajo de la barra de navegación */}
      <Box
      sx={{
        backgroundColor: '#f9f9f9',
   
        display: 'flex',
        marginLeft:'-32px',
        flexDirection: 'column', // Asegura que los elementos se alineen verticalmente
        alignItems: 'flex-start', // Alinea los elementos al principio del contenedor
        padding: '-16px', // Añade un poco de relleno para que no esté tan pegado al borde
      }}
    >
      <Pedidos/>
    </Box>
  </Box>
      </Hidden>

   
    </Box>
  );
};

export default PedidoIndex;
