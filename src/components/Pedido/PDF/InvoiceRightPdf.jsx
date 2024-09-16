"use client";
import React  from 'react';
import { Box,  createTheme, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";

import { forwardRef } from 'react';

const Container = {
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "12px",
  padding: "12px",
};

const Header = {
  color: "#111",
  fontSize: "16px",
  fontWeight: "600",
  display: "flex",
  margin: 0,
  marginLeft: "-4px",
  fontFamily: "Helvetica,sans-serif",
};

const Detail = {
  color: "#868686",
  fontSize: "12px",
  marginLeft: "6px",
  fontFamily: "Helvetica,sans-serif",
};

const Detail2 = {
  color: "#111",
  fontSize: "12px",
  marginLeft: "6px",
  fontFamily: "Helvetica,sans-serif",
};

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: "14px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "16px",
  marginBottom: "12px",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const InvoiceRightPdf = forwardRef((props, ref) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        padding: isMdUp ? '12px' : '0',
        margin: isSmUp ? (isMdUp ? 0 : '0') : 0,
        marginTop:'122px',
       marginLeft:'212px',
        
        
      }}
    >
      <Box
        sx={{
          padding: '24px',
          marginTop: "-28px",
          marginBottom: "36px",
          borderRadius: "16px",
          display: "flex",
          border: '1px solid #D7D7D7',
          flexDirection: "column",
          gap: "16px",
          backgroundColor: "white",
          width: "360px",
        }}
      >
        <Box sx={Container}>
          <Typography sx={Header}>Client Details</Typography>
        </Box>
        <Box sx={Container}>
          <Typography sx={Detail}>Customer:</Typography>
          <Typography sx={Detail2}>Johan Cordova</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>Rut:</Typography>
          <Typography sx={Detail2}>27443980-K</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>Boleta o factura:</Typography>
          <Typography sx={Detail2}>Boleta</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>Mobile:</Typography>
          <Typography sx={Detail2}>+56 9 3755 2580</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-16px",
          }}
        />
        <Box sx={{ ...Container, marginTop: "2px", marginBottom: '-16px' }}>
          <Typography sx={Detail}>E-mail:</Typography>
          <Typography sx={Detail2}>Johan@gmail.com</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          backgroundColor: "white",
          border: '1px solid #D7D7D7',
          width: "360px",
        }}
      >
        <Box sx={Container}>
          <Typography sx={Header}>Shipping Information</Typography>
        </Box>
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Región: </Typography>
          <Typography sx={Detail2}>Región Metropolitana</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
            marginBottom: "12px",
          }}
        />
        <Box
          sx={{
            ...Container,
            marginTop: "-16px",
            padding: "-2px",
          }}
        >
          <Typography sx={Detail}>Comuna:</Typography>
          <Typography sx={Detail2}>Puente Alto</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
          }}
        />
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Dirección:</Typography>
          <Typography sx={Detail2}>23 de septiembre 046</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            marginBottom: "12px",
            marginTop: "-4px",
          }}
        />
        <Box
          sx={{
            ...Container,
            marginTop: "-16px",
            padding: "-2px",
          }}
        >
          <Typography sx={Detail}>Apartamento, habitación, escalera, etc. (opcional):</Typography>
          <Typography sx={Detail2}>23</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
          }}
        />
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Postal (Opcional):</Typography>
          <Typography sx={Detail2}>6101</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
          }}
        />
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Tracking Number:</Typography>
          <Typography sx={Detail2}>K-1234012</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
          }}
        />
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Tracking URL:</Typography>
          <Typography sx={Detail2}>https://www.starken.clA/</Typography>
        </Box>
      </Box>

      {/* Botón de descarga 
      <Box sx={{ marginTop: '12px', marginBottom: '24px' }}>
        <Button
          onClick={handleDownload}
          variant="contained"
          sx={{
            ...buttonStyle,
            backgroundColor: "#ff8548",
            color: "#ffff",
            borderRadius: "12px",
            boxShadow: "none",
            marginBottom: "-12px",
            width: "100%",
            "&:hover": {
              backgroundColor: '#1667C2',
              color: "#ffff",
              boxShadow: "none",
            },
          }}
        >
          Download Invoice
        </Button>
      </Box>
      */}
    </Box>
);
});

export default InvoiceRightPdf;
