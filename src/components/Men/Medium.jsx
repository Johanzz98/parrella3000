import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

import { productData } from "./ItemsCarousel";
import { useTheme } from "@mui/material/styles";
import ProductMedium from "./ProductMedium";

const baseSetMid = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "24px",
  textAlign: "center",
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 1000,
  fontSize: "36px",
  fontStyle: "normal",
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
};

const baseSetMidIz = {
  margin: "24px 20px",
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 1000,
  fontSize: "36px",
  fontStyle: "normal",
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "20px",
};

const buttonStyle = {
  outline: "0",
  padding: "8px 20px",
  color: "white",
  backgroundColor: "#000",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "16px",
};

function Mid() {
  const theme = useTheme();
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: isMdOrSmaller ? 1 : 3, // Muestra solo una imagen en pantallas md o menores
      slidesToSlide: 1,
    },
  };

  const product = productData.map((item, index) => (
    <ProductMedium key={index} item={item} />
  ));

  const setMid = {
    ...baseSetMid,
    fontSize: isMdOrSmaller ? "16px" : "36px", // Ajusta el tamaño de la fuente según el tamaño de la pantalla
    marginBottom: isMdOrSmaller ? "16px" : "24px", // Ajusta el margen inferior
  };

  const setMidIz = {
    ...baseSetMidIz,
    fontSize: isMdOrSmaller ? "21px" : "36px", // Ajusta el tamaño de la fuente según el tamaño de la pantalla
    margin: isMdOrSmaller ? "16px 10px 24px" : "24px 20px", // Ajusta el margen
  };

  return (
    <>
      <Box>
        <Typography sx={{ ...setMid, fontSize: "28px", marginBottom: "-24px" }}>
          FEEL THE UNREAL
        </Typography>
      </Box>

      <Box>
        <Typography style={setMidIz}>Shadow Elite Nuevo</Typography>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Carousel responsive={responsive} infinite>
          {product}
        </Carousel>
      </Box>
    </>
  );
}

export default Mid;
