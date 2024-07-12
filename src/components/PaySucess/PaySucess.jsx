"use client";
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  width:'50%',
  color: "white",
  backgroundColor: "#0ebf00",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: '12px',
  '&:hover': {
    backgroundColor: 'black', color: '#69c5ab', boxShadow: 'none' // Define el color de fondo para el hover
  },
};

const PaySucess = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      
      }}
    >
      <img
        src={`../../assets/static/CheckOut/check.png`}
        alt="logo"
        style={{
          width: "160px",
          height: "auto",
          borderRadius:'100%',
          border:'12px',
         
          marginTop: "4%",
          position: "relative",
        }}
      />
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '56vh',  // Adjust as needed for full viewport height
      }}
    >
        <Box>
      <Typography sx={{  fontSize: "32px",
  fontWeight: "1000",
  color: "#0ebf00",
  display: 'flex', marginLeft: isSmallScreen ?'24px' : '12px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        Thank You!
      </Typography>
      <Typography sx={{fontSize: "18px",

  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        Payment done Successfully
      </Typography>
      </Box>
      <Box sx={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '6px',
  marginBottom: '24px',
  width: '80%',

}}>
  <Typography sx={{
    fontSize: "14px",
    color: "#111",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: 'auto',
    textAlign: 'center',  // Añadido para centrar texto horizontalmente
  }}>
    You will be redirected to the home page shortly or click here to return to the home page
  </Typography>
</Box>

      <Button sx={buttonStyle}>
        Home
      </Button>
      </Box>
    </Box>
  );
};

export default PaySucess;
