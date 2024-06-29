import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productos from "./product";
import { productData, responsive } from "./Item";
import "./carouselInfo.css";
import { Divider } from "@mui/material";

const nombreProductoStyles = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#111",
  display: "flex",
  marginLeft: "12px",
  marginBottom: "18px",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  paddingTop: "12px",
  lineHeight: "24px",
};

function More() {
  const product = productData.map((item, index) => (
    <Productos item={item} key={index} />
  ));

  return (
    <Box sx={{ paddingTop: "12px"}}>
      <Box sx={{ marginTop: "24px" }}>
    
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%", // Ajusta la altura según sea necesario
            width: "100%", // Ajusta el ancho según sea necesario
           
          }}
        >
          {/* Divisor Vertical */}
          <Divider
            orientation="vertical" // Establece la orientación a vertical
            sx={{
              minWidth: 81, // Establece un ancho mínimo para el divisor
              height: "1002%", // Ajusta la altura del divisor
              bgcolor: "blue", // Color del divisor
              transform: "rotate(90deg)", // Rota el divisor para que sea vertical
            }}
          />
        </Box>
        <Typography sx={nombreProductoStyles}>TE RECOMENDAMOS</Typography>
        <Carousel responsive={responsive} className="look-carousel1">
          {product}
        </Carousel>
      </Box>
            <Box sx={{marginBottom:'-46px'}}/>
    </Box>
  );
}

export default More;
