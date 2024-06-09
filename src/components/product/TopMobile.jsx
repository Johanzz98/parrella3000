import { Box, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const helloName = {
  fontSize: "18px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom: '12px',
  marginTop: '24px',
};
const Title = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#111",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    fontOpticalSizing: 'auto',
   
   
  };
  

const TopMobile = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '89px',
      marginBottom:'-160px',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '-24px',
         marginLeft:'24px'
      }}>
        <Typography sx={Title}>Hombre</Typography>
        <KeyboardArrowRightOutlinedIcon sx={{ marginX: '8px' }} />
        <Typography sx={Title}>New Arrivals 2024</Typography>
      </Box>
      <Typography sx={helloName}>ROPA DE MODA PARA HOMBRE</Typography>
    </Box>
  );
};

export default TopMobile;
