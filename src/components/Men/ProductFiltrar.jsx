import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, useTheme } from "@mui/material";

const cardStyle = {
  width: "100%",
  margin: "0 auto 32px",
  textAlign: "center",
  fontFamily: "arial",
  boxShadow: 0,
  transition: "transform 0.6s ease",
};

const cardStyle2 = {
  width: "100%",
  margin: "0 auto 32px",
  boxShadow: "0",
  marginBottom: "-24px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "0",
  transition: "transform 0.6s ease",
};

const mediaStyle = {
  height: "400px",
  width: "100%",
  objectFit: "cover",
};

const smallMediaStyle = {
  height: "100%",
  width: "100%",

  cursor: "pointer",
  objectFit: "contain",
};
const descriptionStyle = {
  fontSize: "12px",
  color: "grey",

  border: "none",
  fontWeight: 600,
  textAlign: "center",
  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  margin: "2px ",
};
const priceStyle = {
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  fontSize: "1rem",
  fontWeight: 600,
  fontStyle: "normal",
  marginBottom: "12px",
  color: "#111",
  marginBottom: "4px",
  textTransform: "capitalize",
  textAlign: "center",
};

const buttonStyle = {
  border: "none",
  outline: "0",

  marginTop: "8px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "12px",
};

const productContainerStyle = {
  margin: "0 10px",
};

export default function ProductFiltrar(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [isHovered, setIsHovered] = useState(false);
  const nameStyle = {
    fontFamily: "Helvetica,sans-serif",
    fontOpticalSizing: "auto",
    fontSize: isSmallScreen ? "12" : "16px",
    fontWeight: isSmallScreen ? 540 : 550,

    marginBottom: "12px",
    color: "#111",
    marginBottom: "4px",
    textTransform: "capitalize",
    textAlign: "center",
  };
  const addToCart = () => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: props.item });
    dispatch({ type: TYPES.TOTAL });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 10000); // Cambia el valor a 3000 (3 segundos) o lo que prefieras
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
        <CardMedia
          component="img"
          image={props.item.imageurl}
          alt="product image"
          sx={isSmallScreen ? smallMediaStyle : mediaStyle}
        />

        <CardContent>
          <Typography sx={nameStyle}>{props.item.name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
