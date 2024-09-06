"use client";
import React from "react";
import { Box, Button, Divider, Grid, Modal, Paper, Typography } from "@mui/material";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import { productDataCart } from "./ImgDetails";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import { useState } from "react";
import ModalMax from "./ModalMax";
const SidebarStyle = {
  position: "sticky",
  top: 0,
  right: 0,
  height: "calc(100% - 2000px)", // Ajusta la altura para dejar espacio para el contenido debajo
  backgroundColor: "white",
  zIndex: 1,
  boxSizing: "border-box", // Asegura que el padding y border sean incluidos en el cálculo de la altura
};

const Titulo = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  fontFamily: "Helvetica, sans-serif",
  marginBottom: "6px",
  marginTop: "-12px",
};

const NombreProducto = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  fontFamily: "Helvetica, sans-serif",
};

const getDescription = {
  fontSize: "12.8px",

  color: "#111",
  display: "flex",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
};

const detalles = {
  fontSize: "14px",
  fontWeight: "200",
  color: "grey",
  fontFamily: "Helvetica, sans-serif",
};

const priceStyle = {
  color: "#111",
  fontSize: "16px",
  fontWeight:600,
  margin: "2px",
  marginTop: "12px",
  fontFamily: "Helvetica, sans-serif",
};

const buttonStyle = {
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  marginTop:'12px',
  marginBottom:'6px',
  backgroundColor: "black",
  width:'82%',
  height:'46px',
  fontFamily: "Helvetica, sans-serif",
  boxShadow: "none",
  textTransform: 'none',
  borderRadius:'24px',
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:hover": {
    backgroundColor: "grey",
    color: "#ffffff",
    boxShadow: "none", // Define el color de fondo para el hover
  },
};

const horizontal = {
  display: "flex",
  alignItems: "center",
};

const Info = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (selectedSize && product.length > 0) {
      const productToAdd = product[0]; // Obtener el primer producto del arreglo productDataCart

      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: {
          ...productToAdd,
          imageurl: productToAdd.imageurl[0], // Tomar solo la primera imagen del arreglo de imágenes
          selectedSize, // Añadir la talla seleccionada
        },
      });
      dispatch({ type: TYPES.TOTAL });
      dispatch({
        type: TYPES.ADD_TALLA,
        payload: { id: productToAdd.id, talla: selectedSize },
      });
      console.log("Talla añadida:", selectedSize);
    } else {
      console.log("Selecciona una talla antes de agregar al carrito");
    }
  };

  // Tallas disponibles del producto
  const allSizes = product.length > 0 ? product[0].sizes : [];

  // Tallas que se pueden seleccionar
  const selectableSizes = ["M", "L"];

  const isTallaDisponible = (size) => {
    return selectableSizes.includes(size); // Solo M y L están disponibles para selección
  };

  return (
    <Box sx={SidebarStyle}>
      <Box sx={{ backgroundColor: "white", height: "24px" }}>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: -13.4,
            height: "58.5%",
            borderLeft: "1px solid #eceff1",
          }}
        />
      </Box>
      <Box>
        <Typography sx={NombreProducto}>
          Parrella Polerón Neon PO Yellow Smoke
        </Typography>
        <Typography sx={detalles}>Polerón para Mujeres</Typography>
        <Typography sx={priceStyle}>$59.990</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding:'12px 32px 6px 0'  }}>
  <Typography sx={{...detalles,color:'#111',fontWeight:600}}>
    Selecciona tu talla
  </Typography>
  <Typography onClick={handleOpen} sx={{...detalles,cursor:'pointer',textDecoration: 'underline' }}>
    Guia de Tallas
  </Typography>
</Box>
      <ModalMax open={open} handleClose={handleClose} />

      {/* Grid de tallas */}
      <Grid
  container
  spacing={1}
  justifyContent="center"
  sx={{ paddingBottom: "12px", paddingTop: "12px" }}
>
  {allSizes.map((size, index) => (
    <Grid item xs={1} sm={2} md={2.4} key={index}>
      <Paper
        elevation={2}
        sx={{
          textAlign: "center",
          padding: "5px",
          boxShadow: "none",
          borderRadius: "7px",
          border:
            selectedSize === size
              ? "1px solid #111"
              : "1px solid #eeeeee",
          backgroundColor: !isTallaDisponible(size)
            ? "#ccc"
            : "transparent",
          pointerEvents: !isTallaDisponible(size)
            ? "none"
            : "auto",
          cursor: isTallaDisponible(size) ? "pointer" : "not-allowed",
          transition: "background-color 0.3s, color 0.3s",
          "&:hover": {
            backgroundColor: isTallaDisponible(size) ? "grey" : "transparent",
            color: isTallaDisponible(size) ? "#ffffff" : "inherit",
            boxShadow: "none",
          },
        }}
        onClick={() => {
          if (!isTallaDisponible(size)) {
            console.log("Esta talla no está disponible");
            return;
          }
          setSelectedSize(size);
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "4px",
            fontSize: "14px",
            fontWeight: "500",
            color: "black",
            fontFamily: "Helvetica, sans-serif",
            height: "100%", // Asegura que el Typography cubra todo el Paper
          }}
        >
          {size}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>


      {/* Botón "Señala tu talla" o "Agregar al Carrito" */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button

          sx={
buttonStyle
         
          }
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

        
      <Grid
        container
        spacing={2}
        style={{ marginTop: "-12px", position: "relative", top: 24 }}
      >
        {/* Primera fila */}
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <DeliveryDiningOutlinedIcon
              sx={{ marginRight: "8px", color: "black", marginTop: "-11px" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Envíos gratis sobre $89.990{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <LocalMallOutlinedIcon
              sx={{ marginRight: "8px", color: "black" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Retiro presencial gratis{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Segunda fila */}
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <BrandingWatermarkOutlinedIcon
              sx={{ marginRight: "8px", color: "black", marginTop: "-9px" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Puedes pagar en línea, paga seguro.{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <ChangeCircleOutlinedIcon
              sx={{ marginRight: "8px", color: "black", marginTop: "-12px" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Cambios ilimitados sin costo{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "84px", marginLeft: "-12px" }}>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_553,c_limit/262fc583-6160-4703-9d72-1918b8a4ebac/sitio-web-oficial-de-nike.png"
          alt="Nike Logo"
          style={{
            width: "100%",
            cursor: "pointer",
            height: "105%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Info;