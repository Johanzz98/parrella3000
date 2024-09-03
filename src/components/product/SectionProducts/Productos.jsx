import React, { useState } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const cardStyle = {
  width: "356.8px",
  marginTop: "-36px",
  textAlign: "center",
  paddingLeft: "12px",
  borderRadius: " 12px",
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};

const cardStyle2 = {
  width: "80px",
  margin: "0 auto",
  cursor: "pointer",
  fontFamily: "arial",
  margin: "0 auto",
  boxShadow: "none", // Se corrigió el nombre de la propiedad boxShadow
  position: "relative", // Añadido
  textAlign: "left",
};

const detalles = {
  fontSize: "18px",
  fontWeight: "600",
  color: "black",
  display: "flex",

  justifyContent: "flex-start", // Modificado aquí
  alignItems: "center",

  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const NombreProducto = {
  fontSize: "16px",
  fontWeight: "550",
  color: "orange",
  marginLeft: "-12px",
  marginTop: "-12px",
  display: "flex",
  justifyContent: "flex-start", // Ajustado para alinear el texto a la izquierda cuando sea largo
  alignItems: "center", // Ajustado para alinear el texto a la izquierda cuando sea largo
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  // Añadido para asegurar que el texto no se desborde
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const mediaStyle = {
  height: "420px",
  width: "100%",

  objectFit: "cover",
};

const smallMediaStyle = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const priceStyle = {
  color: "#111",
  fontSize: "14px",
  margin: "0 8px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "flex-start",

  fontFamily: "Helvetica, sans-serif",
};

const descriptionStyle = {
  fontSize: "12px",
  color: "grey",
  border: "none",
  justifyContent: "flex-start", // Ajustado para alinear el texto a la izquierda cuando sea largo
  fontWeight: 600,
  display: "flex",
  marginLeft: "-12px",
  textAlign: "center",
  fontFamily: " 'Helvetica', sans-serif",
};

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  marginTop: "8px",
  color: "white",

  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
};

const productContainerStyle = {
  margin: "0 10px",
};

// Estilos definidos previamente...

export default function Product(props) {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: props.item });
    dispatch({ type: TYPES.TOTAL });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      style={productContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={isSmallScreen ? cardStyle2 : cardStyle}>
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={props.item.imageurl}
            alt="product image"
            sx={isSmallScreen ? smallMediaStyle : mediaStyle}
          />
          {/* Contenedor para el precio */}
          <Box
            style={{
              position: "absolute",
              bottom: 90,
              left: 6,
              backgroundColor: "white",
              height: "%20",
              borderRadius: "12px",
              transition: "transform 0.3s ease",
              transform: `translateY(${isHovered ? "-10px" : "0"})`, // Movimiento hacia arriba al pasar el mouse
            }}
          >
            <Typography sx={priceStyle}>${props.item.price}</Typography>
          </Box>
          <Box
            style={{
              position: "absolute",
              top: 12,
              right: 12,
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#f73378", fontSize: "20px" }}
            />
          </Box>
          {/* Seleccionar qué CardContent mostrar basado en el tamaño de la pantalla */}
          {isSmallScreen ? (
            <Box>
              <Typography sx={NombreProducto}>{props.item.name}</Typography>

              {/* <Typography sx={priceStyle}>
                $ss{props.item.price}
            </Typography>
            */}
            </Box>
          ) : (
            <CardContent>
              <Typography sx={NombreProducto}>{props.item.name}</Typography>

              <Typography
                sx={descriptionStyle}
                variant="body2"
                color="text.secondary"
              >
                {props.item.description}
              </Typography>
            </CardContent>
          )}
        </div>
      </Box>
    </Box>
  );
}
