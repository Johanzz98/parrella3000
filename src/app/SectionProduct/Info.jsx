"use client";
import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import { productDataCart } from "./ImgDetails";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
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
  color: "red",
  fontSize: "16px",
  margin: "2px",
  marginTop: "12px",
  fontFamily: "Helvetica, sans-serif",
};

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: "14px",
  color: "white",
  borderRadius: "18px",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: "12px",
  "&:hover": {
    backgroundColor: "black",
    color: "grey",
    boxShadow: "none", // Define el color de fondo para el hover
  },
};

const horizontal = {
  display: "flex",
  alignItems: "center",
};

const Info = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    // Suponiendo que solo se agrega un producto a la vez
    const productToAdd = productDataCart[0]; // Obtener el primer producto del arreglo productDataCart

    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        ...productToAdd,
        // Asegúrate de que la URL de la imagen se pasa al carrito
        imageurl: productToAdd.imageurl[0], // Tomar solo la primera imagen del arreglo de imágenes
      },
    });
    dispatch({ type: TYPES.TOTAL });
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
            height: "38.5%",
            borderLeft: "1px solid #eceff1",
          }}
        />
      </Box>
      <Typography sx={Titulo}>Nombre del Producto</Typography>
      <Box>
        {Array.isArray(product.imageurl) &&
          product.imageurl.map((image, index) => (
            <img
              src={image}
              alt={`Product ${index}`}
              key={index}
              style={{ width: "100%", marginBottom: "8px" }}
            />
          ))}
        <Typography sx={NombreProducto}>
          Parrella Polerón Neon PO Yellow Smoke
        </Typography>
        <Typography sx={detalles}>Polerón para Mujeres</Typography>
        <Typography sx={priceStyle}>$59.990</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{ ...buttonStyle, marginLeft: "-4px", width: "100%" }}
          onClick={addToCart}
        >
          Agregar al Carrito
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
