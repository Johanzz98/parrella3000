import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const cardStyle = {
  width: "240px",
  margin: "0 auto 32px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: " 12px",
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};

const cardStyle2 = {
  width: "300px",
  margin: "0 auto 12px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
  transition: "transform 0.6s ease",
  position: "relative", // Añadido
};
const NombreProducto = {
  fontSize: "18px",
  fontWeight: "550",
  color: "orange",
  paddingTop: "8px",
  display: "flex",
  justifyContent: "center", // Ajustado para alinear el texto a la izquierda cuando sea largo
  alignItems: "center", // Ajustado para alinear el texto a la izquierda cuando sea largo
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  // Añadido para asegurar que el texto no se desborde
  overflow: "hidden",
  textOverflow: "ellipsis",
};
const mediaStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
};

const smallMediaStyle = {
  height: "360px",
  width: "100%",
  objectFit: " cover  ",
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
  fontSize: "16px",
  color: "#111",
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

export default function PenultimateCarousel(props) {
  const dispatch = useDispatch();
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
      <Card
        sx={isSmallScreen ? cardStyle2 : cardStyle}
        style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}
      >
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={props.item.imageurl}
            alt="product image"
            sx={isSmallScreen ? smallMediaStyle : mediaStyle}
          />
          {/* Seleccionar qué CardContent mostrar basado en el tamaño de la pantalla */}
          {isSmallScreen ? (
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.item.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    bottom: 162,
                    left: 8,
                    backgroundColor: "white",
                    height: "%40",
                    borderRadius: "12px",
                    transition: "transform 0.3s ease",
                    transform: `translateY(${isHovered ? "-10px" : "0"})`, // Movimiento hacia arriba al pasar el mouse
                  }}
                >
                  <Typography sx={{ ...priceStyle }}>
                    ${props.item.price}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{ ...descriptionStyle, color: "orange" }}
                variant="body2"
                color="text.secondary"
              >
                {props.item.description}
              </Typography>
              <Button variant="contained" sx={buttonStyle} onClick={addToCart}>
                Add to Cart
              </Button>
            </CardContent>
          ) : (
            <Box
              style={{
                position: "absolute",
                bottom: 12,
                left: 13,
                backgroundColor: "white",
                height: "%20",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                transform: `translateY(${isHovered ? "-10px" : "0"})`, // Movimiento hacia arriba al pasar el mouse
              }}
            >
              <Typography sx={priceStyle}>${props.item.price}</Typography>
            </Box>
          )}
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
          {/* Contenido adicional que aparece al hacer hover en pantallas grandes */}
          {!isSmallScreen && (
            <CardContent
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                cursor: "pointer",
                margin: "auto",
                background: "rgba(255, 255, 255, 0.9)",
                transition: "opacity 0.3s ease",
                opacity: isHovered ? 1 : 0,
                pointerEvents: isHovered ? "auto" : "none",
              }}
            >
              <Typography sx={NombreProducto}>{props.item.name}</Typography>
              <Typography
                sx={descriptionStyle}
                variant="body2"
                color="text.secondary"
              >
                {props.item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  ...buttonStyle,
                  width: "80%",
                  position: "absolute",
                  bottom: 60,
                  left: 24,
                }}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </CardContent>
          )}
        </div>
      </Card>
    </Box>
  );
}
