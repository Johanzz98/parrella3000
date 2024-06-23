import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import PenultimateCarouselProduct from "./PenultimateCarouselProduct";
import { productData,  responsive } from "./PenultimateCarouselItem";
import "./carousel.css"
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';



 function PenultimateCarousel() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const setMidIz = {
    margin: "24px 20px",
    fontFamily: "Nunito Sans, sans-serif",
    fontOpticalSizing: 'auto',
    fontWeight: 1000,
    fontSize: isSmallScreen ? "24px" : "36px",
    fontStyle: 'normal',
    fontVariationSettings: '"wdth" 125, "YTLC" 540',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  };

  const product = productData.map((item, index) => (
    <PenultimateCarouselProduct
      item={item}
      key={index}
    />
  ));

  return (
    <>
      <Box>
        <Typography style={setMidIz}>NEW COLLECTION</Typography>
      </Box>

      <Box>
        <Carousel responsive={responsive} infinite>
          {product}
        </Carousel>
      </Box>
    </>
  );
}

export default PenultimateCarousel;
