import { Box, Typography } from '@mui/material'
import React from 'react'


const Container = {
    display: 'flex',
    justifyContent: 'space-between', // Aligns items horizontally with space between them
    gap: 2, // Space between the boxes
  };

const InvoiceRight = () => {
  return (
   <Box>
   <Box
    sx={{
      width: "100%",
      height: "auto",
      border: "1px solid red",
      padding: "24px 24px",
      borderRadius:'16px',
      display: "flex",
      flexDirection: "row", // Alinea los elementos horizontalmente
      gap: "16px", // Espacio entre los elementos
      flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
      alignItems: "center", // Alinea verticalmente los elementos en el centro
      justifyContent: "space-between", // Distribuye el espacio entre los elementos
    }}
  >
    <Box sx={Container}>
       <Typography>
        Client Details
       </Typography>
       <Typography>
        Edit 
       </Typography>
    </Box>
    <Box>
       <Typography>
       Yonaiker Daniel
       </Typography>
       <Typography>
        Client
       </Typography>
    </Box>
   </Box>
   </Box>
  )
}

export default InvoiceRight