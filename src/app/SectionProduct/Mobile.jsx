"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import MobileProduct from "./MobileProduct";
import { productData2, responsive } from "./MobileItem";
import "./carousel.css";

import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';

import 'swiper/css';


const Titulo = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginTop:'-42px',
  width:'46%'
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

const detalles = {
  fontSize: "14px",
  fontWeight: "200",
  color: "grey",
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  
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
const priceStyle = {
  color: "red",
  fontSize: "16px",  
  margin:'2px',

  justifyContent: 'flex-start',
  fontFamily: "Helvetica, sans-serif",
};
const getDescription= {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginLeft:'24px',
 
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
};

const horizontal ={
  display: 'flex',
  alignItems: 'center',
  margin:'12px auto 0',
  width:'100%',
 height:'30px',

  backgroundColor: 'white',
  
 }
function Mobile() {


  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [...new Set(productData2.map(product => product.talla).flat())];

    // Función para determinar si una talla está disponible
    const isTallaDisponible = (talla) => {
      // Simulamos que solo las tallas "M" y "L" están disponibles
      const tallasDisponibles = ['M', 'L'];
      return tallasDisponibles.includes(talla);
    };
  


  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '18px' }}>
  <Typography sx={Titulo}>Parrella Clubs</Typography>
  <Typography sx={NombreProducto}>Parrella Polerón Neon PO Yellow Smoke</Typography>
  <Typography sx={detalles}>Polerón para Mujeres</Typography>
  <Typography sx={priceStyle}>$59.990</Typography>
</Box>
<>

      {productData2.map((product, index) => (
        <MobileProduct
          key={index}
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          sizes={sizes}
        />
      ))}
    </>
    

  
        <Box sx={horizontal}>
        <DeliveryDiningOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}>Delivery Coordinado (por estos momentos)</Typography>
        </Box>
        <Box sx={horizontal}>
        <LocalMallOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}>Entrega a coordinación</Typography>
        </Box>
        <Box sx={horizontal}>
        <BrandingWatermarkOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}> Efectivo o Transferencias</Typography>
        </Box>
      
       
       
      
    </>
  );
}

export default Mobile;
