import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  width:'50%',
  color: "red",
  border:'2px solid red',
  backgroundColor: "white",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: '12px',
  '&:hover': {
    backgroundColor: 'white', color: 'grey', boxShadow: 'none' // Define el color de fondo para el hover
  },
};

const Facil = () => {
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
        src={`../../assets/static/CheckOut/fail.png`}
        alt="logo"
        style={{
          width: "160px",
          height: "auto",
      
         
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
  color: "red",
  marginLeft:'16px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        Payment Failed
      </Typography>
      <Typography sx={{fontSize: "18px",

  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        It seems we have not received money
      </Typography>
      </Box>
      <Box sx={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '6px',
  marginBottom: '24px',
  width: '90%',

}}>
  <Typography sx={{
    fontSize: "14px",
    color: "#111",
    marginTop:'12px',
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: 'auto',
    textAlign: 'center',  // Añadido para centrar texto horizontalmente
  }}>
   We couldnt complete your order request. <br/>
   <Typography sx={{
    fontSize: "14px",
    color: "grey",
    fontWeight:'1000',
    
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: 'auto',
    textAlign: 'center',  // Añadido para centrar texto horizontalmente
  }}>network was unrechable
    </Typography>
  </Typography>


</Box>

      <Button sx={buttonStyle}>
        Try again
      </Button>
      </Box>
    </Box>
  );
};

export default Facil;
