import { Box, Typography } from '@mui/material';
import React from 'react';
import HeaderAdmin from '@/components/HeaderAdmin';
import ListProduct from '@/components/dashboardAdmin/ListProduct';
import SortIcon from '@mui/icons-material/Sort';
import InvoiceLeft from '@/components/dashboardAdmin/Invoce/InvoiceLeft';

const InvoicesPerfil = () => {
  return (
    <Box sx={{ backgroundColor: '#faf9f2', padding: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Alinea verticalmente los elementos en el centro
          gap: '16px', // Espacio entre el ícono y el título
          marginBottom: '24px', // Espacio debajo de la fila de encabezado
        }}
      >
        <SortIcon sx={{marginLeft:'12px',fontSize:'32px', color:'red'}}/>
       <Typography sx={{  color: "#111",
  fontSize: "24px",
  fontWeight: "700",
  display: "flex",

  margin:0,
  marginLeft:'8px',
  
  fontFamily: "Helvetica,sans-serif",}}>Product List</Typography>
      </Box>
      <Box>
        <InvoiceLeft  />
      </Box>
    </Box>
  );
};

export default InvoicesPerfil;
