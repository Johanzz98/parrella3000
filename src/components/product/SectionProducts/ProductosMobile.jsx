import React, { useState } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { TYPES } from "@/actions/ShoppingActions";
const cardStyle = {
  maxWidth: "600px",
  margin: "0 auto 32px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: " 12px",
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};

const cardStyle2 = {
  width: "190px",

  cursor: "pointer",
  fontFamily: "arial",
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
  fontSize: "12px",
  fontWeight: "550",
  color: "#111",
  paddingTop: "8px",
  display: "flex",
  justifyContent: "flex-start", // Ajustado para alinear el texto a la izquierda cuando sea largo
  alignItems: "flex-start", // Ajustado para alinear el texto a la izquierda cuando sea largo
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  // Añadido para asegurar que el texto no se desborde
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const mediaStyle = {
  width: "100%",
  objectFit: "contain",
};

const smallMediaStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
};

const priceStyle = {
  color: "#111",
  fontSize: "12px",
  margin: "0 8px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "flex-start",

  fontFamily: "Helvetica, sans-serif",
};

const descriptionStyle = {
  fontSize: "12px",
  color: "orange",
  border: "none",
  fontWeight: 600,
  textAlign: "flex-start",
  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  margin: "2px ",
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

export default function Mostrar(props) {
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
        <div style={{ position: "relative",marginRight:'-12px' }}>
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
              bottom:58,
              left: 8,
              backgroundColor: "white",
              height: "%40",
              borderRadius:'12px',
              transition: "transform 0.3s ease",
              transform: `translateY(${isHovered ? "-10px" : "0"})`, // Movimiento hacia arriba al pasar el mouse
            }}
          >
            <Typography sx={priceStyle}>${props.item.price}</Typography>
          </Box>
          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#f73378", fontSize: "24px" }}
            />
          </Box>
          {/* Seleccionar qué CardContent mostrar basado en el tamaño de la pantalla */}
          {isSmallScreen ? (
            <Box>
              <Typography sx={NombreProducto}>{props.item.name}</Typography>

              { <Typography sx={descriptionStyle}>
                {props.item.description}
            </Typography>
           }
            </Box>
          ) : (
            <CardContent
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                background: "rgba(255, 255, 255, 0.9)",
                transition: "opacity 0.3s ease",
                opacity: isHovered ? 1 : 0,
                pointerEvents: isHovered ? "auto" : "none",
              }}
            >
              <Typography variant="h5" component="h2">
                {props.item.name}
              </Typography>
              <Typography sx={priceStyle}>ss${props.item.price}</Typography>
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
