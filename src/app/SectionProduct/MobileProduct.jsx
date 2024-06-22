import React, { useState } from "react"; // Importa useState
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, Grid, Paper } from "@mui/material"; // Importa Box, Button, Grid y Paper
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import { productData,responsive } from "./MobileItem";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



const cardStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
  fontFamily: "arial",
  border:'none',
  borderRadius: " 0",
  boxShadow:'none',
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};

const NombreProducto = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  width:'60%'
};

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  textTransform: 'none',
  fontSize: "18px",
};

const cardStyle2 = {
  width: "400px",
  margin: "0 auto 12px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};

const mediaStyle = {
  width: "100%",
  objectFit: 'contain',
};

const smallMediaStyle = {
  margin: "0 auto 12px",
  width: "96%",
  border:'none',
  objectFit: 'contain',
  position: "relative", // Añadido
  alignItems: 'center', 
  boxShadow: 'none',
  textAlign: "center",
};  

const MobileProduct = ({ product, selectedSize, setSelectedSize, sizes }) => {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch();

  const isTallaDisponible = (talla) => {
    const tallasDisponibles = ['M', 'L'];
    return tallasDisponibles.includes(talla);
  };

  const addToCart = () => {
    if (selectedSize) {
      const productWithFirstImage = {
        ...product,
        imageurl: [product.imageurl[0]] // Tomar solo la primera imagen del arreglo imageurl
      };
      
      dispatch({type: TYPES.ADD_TO_CART, payload: productWithFirstImage}); // Agregar al carrito el producto con la primera imagen
      dispatch({type: TYPES.TOTAL});
      dispatch({ type: TYPES.ADD_TALLA, payload: { id: product.id, talla: selectedSize } });
      console.log("Talla añadida:", selectedSize);
    } else {
      console.log("Selecciona una talla antes de agregar al carrito");
    }
  };

  return (
    <Box className={isSmallScreen ? "" : "large-item"}> 

      <Card style={cardStyle}>
        <div style={{  
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente
        }}>
        </div>
        <CardMedia sx={isSmallScreen ? smallMediaStyle : mediaStyle}>
  <Carousel responsive={responsive}  >
    {Array.isArray(product.imageurl) && product.imageurl.map((image, index) => (
      <img src={image} alt={`Product ${index}`} key={index} style={isSmallScreen ? smallMediaStyle : {}}/>
    ))}
  </Carousel>
</CardMedia>
</Card>
        <Box sx={{ alignItems: 'center', justifyContent:"center", marginLeft: '20px',paddingTop:'12px', }}>
          <Typography sx={{...NombreProducto}}>
            Selecciona Tu talla
          </Typography>
        </Box>

        {/* Grid de tallas */}
        <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom:'12px',paddingTop:'12px',  }}>
          {sizes.map((size, index) => (
            <Grid item xs={5} sm={2} md={1} key={index}>
              <Paper
                elevation={3}
                style={{
                  textAlign: 'center',
                  padding: '5px',
                  boxShadow: 'none',
                  borderRadius: '7px',
                  border: selectedSize === size? '1px solid #111' : '1px solid #eeeeee',
                  backgroundColor:!isTallaDisponible(size)? '#ccc' : 'transparent',
                  pointerEvents:!isTallaDisponible(size)? 'not-allowed' : 'auto',
                  cursor: isTallaDisponible(size)? 'pointer' : 'not-allowed',
                }}
                onClick={() => {
                  if (!isTallaDisponible(size)) {
                    console.log("Esta talla no está disponible");
                    return;
                  }
                  setSelectedSize(selectedSize === size? null : size);
                }}
              >
                <Typography sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '4px',
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: 'auto'
                }}>
                  {size}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Botón "Señala tu talla" o "Agregar al Carrito" */}
        <Box sx={{ display: 'flex', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Button
            variant="contained"
            sx={{...buttonStyle, backgroundColor: 'black',
            color: 'white',
            borderRadius: '16px',
            fontFamily: "Helvetica, sans-serif",
            width: '95%',
            borderShadow:'none',
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            }
          }}
            onClick={() => {
              if (selectedSize) {
                addToCart(); // Agrega al carrito solo si se ha seleccionado una talla
              } else {
                console.log("Selecciona una talla antes de agregar al carrito");
              }
            }}
          >
            {selectedSize ? "Agregar al Carrito" : "Señala tu talla"}
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', }}>
      
        <Button 
  variant="contained"
  sx={{
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '16px',
    width: '80%',
    height:'20%',
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
      
    },
    '&:active': {
      boxShadow: 'none',
     
    }
  }}
>
          Favorito ♡
        </Button>
      </Box>
     
    </Box>
  );
}

export default MobileProduct;