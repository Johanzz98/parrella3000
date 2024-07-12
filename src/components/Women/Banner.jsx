import { Box, Button, Typography, Card, CardMedia, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const productDataToDisplay = [
  {
    id: 1,
    imageurl:
      "https://www.propstudios.co.uk/wp-content/uploads/2018/10/Adidass-banner.jpg",
    alt: "Image 1"
  },
  // Add more product objects as needed
];
const productDataToDisplaySM = [
   
  {
    id: 2,
    imageurl:
      "https://i.pinimg.com/564x/b2/07/48/b20748d467f04eb78dccc642f423c6eb.jpg",
    alt: "Image 2"
  }
];
const Banner = () => {

  const theme = useTheme(); // Uso de useTheme después de useState
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">


    

      {!isSmallScreen && (
      <Box display="flex" flexWrap="wrap" justifyContent="center">
      {productDataToDisplay.map((product) => (
        <Card key={product.id} sx={{ width: "100%",borderRadius:'0'}}>
          <CardMedia
            component="img"
            height="auto"
            image={product.imageurl}
            alt={product.alt}
            
          />
        </Card>
      ))}
    </Box>
    )}
      {/* Mostrar solo en pantallas pequeñas */}
      {isSmallScreen && (
        <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center">
          {productDataToDisplaySM.map((product) => (
            <Card key={product.id} sx={{ width: "100%", m: 2 }}>
              <CardMedia
                component="img"
                height="auto"
                image={product.imageurl}
                alt={product.alt}
              />
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Banner;
