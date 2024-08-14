import React from 'react';
import { Box, Typography, Hidden, Grid } from '@mui/material';
import FAQS from './FAQS';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
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
  fontSize: "12.65px",
  fontWeight: "700",
  color: "#00174f",
  textAlign: 'right',
  padding: "0 !important",
  whiteSpace: 'nowrap',
  overflowWrap: 'break-word',
  display: 'flex',
 lineHeight:'15px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  margin: '12px', // Agregar un margen alrededor de cada Box
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    initialSlide: 0, // optional, default to 0.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
    initialSlide: 0, // optional, default to 0.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    initialSlide: 0, // optional, default to 0.
  },
};

const Index = () => {
  return (
    <Box display="flex" sx={{ backgroundColor: '#f9fafb' }}>
      {/* Contenido izquierdo para pantallas mayores a md */}
      <Hidden mdDown>
        <Box sx={{display:'flex', padding:'24px'}}>
        <Box sx={{ backgroundColor: 'white', border: '1px solid #e5e5e5', padding: '2.5rem', marginTop: '2.5rem', maxWidth: '85%', height: '20%' }}>
          <Typography sx={{ ...titulo, color: '#00174f' }}>MENU</Typography>
          <span>
            <a href="/FAQS" style={{ textDecoration: 'underline', color: 'inherit' }}>
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
                  Entrega
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
          <span>
            <a href="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                sx={{ ...detalles, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Contactos
              </Typography>
            </a>
          </span>
        </Box>
           {/* Componente FAQS a la derecha */}
      <FAQS />
      </Box>
      </Hidden>

      {/* Contenido izquierdo para pantallas menores a md */}
      <Hidden mdUp>
      
  <Box sx={{ width: '100%',  padding: '24px 12px 0',marginBottom:'222px' }}>
  <Carousel
        responsive={responsive}
        infinite={false}
        arrows={false}
        autoPlay={false} // Considera habilitarlo con una velocidad adecuada
        autoPlaySpeed={5000} // Ajusta según sea necesario
        containerClass="carousel-container"
        itemClass="carousel-item"
        swipeable={true}
        draggable={true}
        customTransition="transform 0.15s ease-in-out" // Asegura una transición suave
        swipeThreshold={0.5} // Ajusta la sensibilidad del deslizamiento
      >
  
   <Box
  sx={{
    backgroundColor: 'white',
    border: '1px solid #e5e6ed',
    borderRadius: '0',

    width: '62px',
    height: '40px',
    textTransform: 'capitalize',
  }}
>
      <a href="/FAQS" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography
          sx={{
            ...detallesMobile,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline", color: 'orange' },
          }}
        >
          FAQS1
        </Typography>
      </a>
      </Box>
   
      <Box
  sx={{
    backgroundColor: 'white',
    border: '1px solid #e5e6ed',
    borderRadius: '0',
    marginLeft:'-36px',

    width: '132px',
    height: '40px',
    textTransform: 'capitalize',
  }}
>
      <a href="/FAQS/Pagos" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography
          sx={{
            ...detallesMobile,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Pedidos y pagos
        </Typography>
      </a>
    </Box>
     <Box
  sx={{
    backgroundColor: 'white',
    border: '1px solid #e5e6ed',
    borderRadius: '0',
   
    width: '82px',
    height: '40px',
    textTransform: 'capitalize',
  }}
>
      <a href="/FAQS/Envios" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography
          sx={{
            ...detallesMobile,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Entrega
        </Typography>
      </a>
    </Box>

     <Box
  sx={{
    backgroundColor: 'white',
    border: '1px solid #e5e6ed',
    borderRadius: '0',
   marginLeft:'0px',
    width: '324px',
    height: '40px',
    textTransform: 'capitalize',
  }}
>
      <a href="/FAQS/Cambios" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography
          sx={{
            ...detallesMobile,
            textDecoration: "none",  marginLeft:'54px', marginRight: '24px',
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Cambios, Devoluciones y reembolsos
        </Typography>
      </a>
    </Box>

     <Box
  sx={{
    backgroundColor: 'white',
    border: '1px solid #e5e6ed',
    borderRadius: '0',
    marginLeft:'160px',
    width: '120px',
    height: '40px',
    textTransform: 'capitalize',
  }}
>
      <a href="/FAQS/Tallas" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography
          sx={{
            ...detallesMobile,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Guia de Tallas
        </Typography>
      </a>
    </Box>
    
   
  </Carousel>
  </Box>



      </Hidden>

   
    </Box>
  );
};

export default Index;
