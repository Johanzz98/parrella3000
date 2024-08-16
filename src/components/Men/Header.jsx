import React, { useState } from "react";
import { Box, Button, Typography, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";

const productDataToDisplay = [
  {
    id: 1,
    imageurl:
      "https://nikeclprod.vtexassets.com/assets/vtex.file-manager-graphql/images/18715b49-9af1-4ca2-8668-743873dcc901___0528f16d79501dec2d4b3ffa79270920.png",
    alt: "Image 1"
  },

];

const productDataToDisplaySM = [
   
    {
      id: 2,
      imageurl:
        "https://nikeclprod.vtexassets.com/assets/vtex.file-manager-graphql/images/d4c7b382-300e-4ce5-b182-f07f3148c3f7___6c961e0add8d8ea2efb63f00c9163491.png",
      alt: "Image 2"
    }
  ];


const Header = () => {
    const [isHovered, setIsHovered] = useState(false); // Primer estado local
    const theme = useTheme(); // Uso de useTheme después de useState
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        
        <Box my={4} position="relative">
        <Box
        sx={{
          backgroundColor: '#111',
          width: isSmallScreen ? '100%' :'304.2%',
          height: '100px',
       
          position: 'relative',
            right: isSmallScreen ? 0 : 510,
         bottom:isSmallScreen ? 72: 20,
          zIndex: 0, // Añadido para ajustar el z-index
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:'-80px',
        }}
      >
       
  <img

  
     src="/assets/Hombre/Just.png"
    alt="logo"
    style={{
      maxWidth: isSmallScreen ?'90%':'100%',      // Ajustar el tamaño máximo de la imagen
      maxHeight: '100%',     // Ajustar el tamaño máximo de la imagen
      height: 'auto',        // Mantener la proporción original de la imagen
      width: 'auto',         // Mantener la proporción original de la imagen
      position: 'relative',
      left: isSmallScreen ? 12:20,
   top:6,
    }}
  />
  
</Box>
</Box>
<Box
        sx={{
          backgroundColor: '#111',
          width: '100%',
          height: '40px',
        
          position: 'relative',
         bottom:isSmallScreen ? 46: 0,
          zIndex: -1, // Añadido para ajustar el z-index
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:isSmallScreen ? '-64px':'-24px',
        }}
      ></Box>
     <Box my={4} position="relative">
      <Typography
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{ fontSize: "16px",
           
            color: "#111",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor:'pointer',
            fontFamily: "Helvetica,sans-serif",
            fontOpticalSizing: 'auto',
           }}>
        Ropas
      </Typography>
      <Box
        sx={{
          backgroundColor: '#111',
          width: '100%',
          height: '2px',
          position: 'absolute',
          top: '100%',
          left: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Contenido del Box cuando se hace hover */}
      </Box>
    </Box>
      <Typography sx={{ fontSize: isSmallScreen ? "32px": "36px",
    fontWeight: "1000",
    color: "#111",
    marginTop:'-32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    fontOpticalSizing: 'auto',
    marginBottom:isSmallScreen ? "-24px":"0'",
   }}>
        FIND YOUR STYLED
      </Typography>
      <Typography sx={{ fontSize: isSmallScreen ? "16px":"20px",
    marginTop:isSmallScreen ? '32px':0,
    color: "#111",
    display: 'flex',

    justifyContent: isSmallScreen ? 'center':'flex-start',
    alignItems: 'center',
    textAlign: isSmallScreen ? 'center' : 'left',
    fontFamily: "Helvetica,sans-serif",
    fontOpticalSizing: 'auto'}}>
        Siéntete comodo y mejor con Parrella, 
         las mejores ropas para hombre, son la base que necesitas para todo lo que te espera en el día
      </Typography>
      <Button sx={{
  border: "none",
  width:  isSmallScreen ? "50%":'10%',
        borderRadius:'24px',
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: '-24px',
  '&:hover': {
    backgroundColor: 'black', color: 'grey', boxShadow: 'none' // Define el color de fondo para el hover
  },
}}>
        Buscar
      </Button>
      {!isSmallScreen && (
      <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center">
        {productDataToDisplay.map((product) => (
          <Card key={product.id} sx={{ width: "100%", m: 2 }}>
            <CardMedia
              component="img"
              height="auto"
              image={product.imageurl}
              alt={product.alt}
            />
          </Card>
        ))}
      </Box>
    )}
      {/* Mostrar solo en pantallas pequeñas */}
      {isSmallScreen && (
        <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center">
          {productDataToDisplaySM.map((product) => (
            <Card key={product.id} sx={{ width: "100%", m: 2 }}>
              <CardMedia
                component="img"
                height="auto"
                image={product.imageurl}
                alt={product.alt}
              />
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Header;
