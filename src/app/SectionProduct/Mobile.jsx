"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileProduct from "./MobileProduct";
import { productData2, responsive } from "./MobileItem";
import "./carousel.css";

import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";

import "swiper/css";
import { Grid } from "@mui/material";

const Titulo = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  marginTop: "-42px",
  width: "46%",
};
const NombreProducto = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  marginTop:'6px',
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  width: "60%",
};

const detalles = {
  fontSize: "14px",
  fontWeight: "200",
  color: "grey",
  display: "flex",
  marginTop:'6px',
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};
const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: "14px",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  textTransform: "none",
  fontSize: "18px",
};
const priceStyle = {
  color: "#111",
  fontSize: "16px",
  marginTop: "12px",
  marginBottom:'16px',
  justifyContent: "flex-start",
  fontFamily: "Helvetica, sans-serif",
};
const getDescription = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  marginLeft: "24px",

  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
};

const horizontal = {
  display: "flex",
  alignItems: "center",
  margin: "12px auto 0",
  width: "100%",
  height: "30px",

  backgroundColor: "white",
};
function Mobile() {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [
    ...new Set(productData2.map((product) => product.talla).flat()),
  ];

  // Función para determinar si una talla está disponible
  const isTallaDisponible = (talla) => {
    // Simulamos que solo las tallas "M" y "L" están disponibles
    const tallasDisponibles = ["M", "L"];
    return tallasDisponibles.includes(talla);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "18px",
        }}
      >
        <Typography sx={Titulo}>Parrella Clubs</Typography>
        <Typography sx={NombreProducto}>
          Parrella Polerón Neon PO Yellow Smoke
        </Typography>
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

      <Grid container spacing={1} sx={{padding:'6px',marginLeft:'1px',marginTop:'12px'}}>
        {/* Primera fila */}
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <DeliveryDiningOutlinedIcon
              sx={{ marginRight: "-12px", color: "black" }}
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
              sx={{ marginRight: "-12px", color: "black" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Retiro en presencial gratis{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Segunda fila */}
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <BrandingWatermarkOutlinedIcon
              sx={{ marginRight: "-12px", color: "black" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Puedes pagar en línea, paga seguro.{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={horizontal}>
            <BrandingWatermarkOutlinedIcon
              sx={{ marginRight: "-12px", color: "black" }}
            />
            <Typography sx={getDescription}>
              {" "}
              Cambios ilimitados sin costo{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Mobile;
