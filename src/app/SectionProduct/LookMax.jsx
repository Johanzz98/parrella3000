import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import LookMaxProduct from "./LookMaxProduct";
import { productData, responsive } from "./LookMaxItems";
import "./carouselInfo.css"
import { Divider } from '@mui/material';

const nombreProductoStyles = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#111",
  display: 'flex',
  marginLeft:'24px',
  marginBottom:'18px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
 paddingTop:'12px',
  lineHeight: '24px',
};

function LookMax() {
  const product = productData.map((item, index) => (
    <LookMaxProduct
      item={item}
      key={index}
    />
  ));

  return (
    <Box sx={{ paddingTop:'12px', marginTop:'-300px',padding:'20px'}}>
      <Box sx={{marginTop:'24px'}}>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
            
            
          }}
        >
          <Divider sx={{
              width: '101%',
              height: 8,
                bgcolor: '#eeeeee',
               color:'red',
               marginBottom:'32px'
          }} />
        </Box>
        

        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Ajusta la altura según sea necesario
    width: '100%', // Ajusta el ancho según sea necesario
  }}
>
  {/* Divisor Vertical */}
  <Divider
    orientation="vertical" // Establece la orientación a vertical
    sx={{
      minWidth: 81, // Establece un ancho mínimo para el divisor
      height: '1002%', // Ajusta la altura del divisor
      bgcolor: 'blue', // Color del divisor
      transform: 'rotate(90deg)', // Rota el divisor para que sea vertical
    }}
  />
</Box>
        <Typography sx={nombreProductoStyles}>Completa Tu Look</Typography>
        <Carousel responsive={responsive} className="look-carousel1">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
      <Box sx={{marginTop:'12px'}}>
        <Typography sx={nombreProductoStyles}>QUIZÁ TAMBIÉN TE GUSTE...</Typography>
        <Carousel responsive={responsive} className="look-carousel1">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
      <Box>
        <Typography sx={nombreProductoStyles}>OTROS TAMBIÉN COMPRARON</Typography>
        <Carousel responsive={responsive} className="look-carousel1">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
    </Box>
  )
}

export default LookMax;
