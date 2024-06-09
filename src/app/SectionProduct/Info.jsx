"use client";
import React, { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";

const SidebarStyle = {
  position: 'sticky',
  top: 0,
  right: 0,
  height: 'calc(100% - 2000px)', // Ajusta la altura para dejar espacio para el contenido debajo
  backgroundColor: 'white',
  zIndex: 1,
  boxSizing: 'border-box', // Asegura que el padding y border sean incluidos en el cálculo de la altura
};

const Titulo = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom: '6px',
};

const NombreProducto = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
};

const getDescription = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginLeft: '12px',
  paddingTop: '8px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
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

const priceStyle = {
  color: "red",
  fontSize: "16px",
  margin: '2px',
  marginTop: '12px',
  justifyContent: 'flex-start',
  fontFamily: "Helvetica, sans-serif",
};

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: '12px',
  '&:hover': {
    backgroundColor: 'black', color: 'grey', boxShadow: 'none' // Define el color de fondo para el hover
  },
};

const horizontal = {
  display: 'flex',
  alignItems: 'center',
  margin: '8px auto 0',
};

const Info = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingFavorite, setIsAddingFavorite] = useState(false); // Estado de carga para añadir a favoritos
  const [isRemovingFavorite, setIsRemovingFavorite] = useState(false); // Estado de carga para quitar de favoritos
  const [isHoveredStar, setIsHoveredStar] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    if (product && product.length > 0) {
      const productWithFirstImage = {
        ...product[0], // Accede al primer elemento del array
        imageurl: [product[0].imageurl[0]] // Tomar solo la primera imagen del primer producto
      };
      dispatch({ type: TYPES.ADD_TO_CART, payload: productWithFirstImage });
      dispatch({ type: TYPES.TOTAL });
    }
  };
  return (
    <Box sx={SidebarStyle}>
      <Box sx={{ backgroundColor: 'white', height: "24px" }}>
        <Divider orientation="vertical" flexItem sx={{ position: 'absolute', top: 0, bottom: 0, left: -12, height: '104.8%', borderLeft: '1px solid #e0e0e0' }} />
      </Box>
      <Typography sx={Titulo}>Nombre del Producto</Typography>
      <Box>
        {Array.isArray(product.imageurl) && product.imageurl.map((image, index) => (
          <img src={image} alt={`Product ${index}`} key={index} />
        ))}
        <Typography sx={NombreProducto}>Parrella Polerón Neon PO Yellow Smoke</Typography>
  <Typography sx={detalles}>Polerón para Mujeres</Typography>
 
        <Typography sx={priceStyle}>$59.990</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <Button variant="contained"  sx={{...buttonStyle, width:'100%',marginLeft:'-4px'}}  onClick={addToCart}>
    Agregar al Carrito
  </Button>
  <Button variant="contained" sx={{...buttonStyle, width:'52%', marginLeft:'100px', '&:hover': {
            backgroundColor: 'black', color:'grey',boxShadow:'none' // Define el color de fondo para el hover
          }}}>
    Favorito ♡
  </Button>
</Box>


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
      
       
       
      </Box>
      <Box sx={{marginTop:'58px'}}>
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_553,c_limit/262fc583-6160-4703-9d72-1918b8a4ebac/sitio-web-oficial-de-nike.png"
              alt="Nike Logo"
              style={{
                width: "103%",
                
                height: "100%",
                marginLeft:'-12px',
                cursor: "pointer",
              }} // Ajusta el tamaño según sea necesario
            />
          </Box>
         
    </Box>
  );
};

export default Info;

