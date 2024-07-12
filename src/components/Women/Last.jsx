import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ProductLast from "./ProductLast";
import { productData,  responsive } from "./ItemsLast";
import "./carousel.css"
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';



 function Last() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const setMidIz = {
    marginTop:'-22px',
    marginBottom:'12px',
    fontFamily: "Nunito Sans, sans-serif",
    fontOpticalSizing: 'auto',
    fontWeight: 600,
    fontSize: isSmallScreen ? "24px" : "28px",
    
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  };

  const product = productData.map((item, index) => (
    <ProductLast
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

export default Last;
