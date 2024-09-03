import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductFiltrar from "./ProductFiltrar";
import { productData, responsive } from "./ItemFiltrar";
import "./carousel.css";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

function Filtrar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const setMidIz = {
    margin: "24px 20px",
    fontFamily: "Nunito Sans, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 550,
    fontSize: isSmallScreen ? "24px" : "28px",
    marginBottom: isSmallScreen ? "-12px" : 0,
    display: "flex",
    alignItems: isSmallScreen ? "center" : "center",
    justifyContent: isSmallScreen ? "center" : "center",
  };

  const product = productData.map((item, index) => (
    <ProductFiltrar item={item} key={index} />
  ));

  return (
    <>
      <Box>
        <Typography style={setMidIz}>Express Yourself</Typography>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Carousel responsive={responsive} infinite>
          {product}
        </Carousel>
      </Box>
    </>
  );
}

export default Filtrar;
