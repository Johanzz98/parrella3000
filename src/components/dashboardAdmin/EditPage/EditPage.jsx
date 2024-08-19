import { Box, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Top from '@/components/product/Top';




const title = {
    color: "#111",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    padding: "6px 24px",
    margin:0,
    marginLeft:'8px',
    
    fontFamily: "Helvetica,sans-serif",
  };

  const detalles={
    color: "#7e7e7e",
    fontSize: "10px",
    fontWeight: "550",
    display: "flex",
    padding: "6px 24px",
    fontFamily: "Helvetica,sans-serif",
  
  }
  
  const Items = {
    color: "#7e7e7e",
    fontSize: "12px",
    fontWeight: "550",
    display: "flex",
    padding: "6px 24px",
    fontFamily: "Helvetica,sans-serif",
  };
  




const EditPage = () => {
  return (
    <Box>
        <Box>
            <Typography sx={title}>
            Nike Sneakers Air Jordan 4 Retro Seafoam 7826 Lacrotas
            </Typography>
            <Typography sx={detalles}>PRODUCT ID:GY345912</Typography>
        </Box>
        <Box>
            <Typography sx={title}> Product Short Description</Typography>
            <Typography sx={detalles}>Introducing the Nike Air Jordan 4 Retro Seafoam Sneakers , an essential to add to your footwear collection. These sneakers will take you straight back to the 80s, when basketball legend Michael Jordan dominated the sports scene. Every detail of these shoes has been carefully considered to offer you maximum comfort and style.</Typography>
        </Box>
        <Box 
      sx={{ 
        width: 'auto',
        height: 'auto',
        border: '1px solid red',
        padding: '24px 24px',
        display: 'flex', // Utiliza flexbox para organización
        flexDirection: 'row', // Alinea los elementos horizontalmente
        gap: '16px', // Espacio entre los elementos
        flexWrap: 'wrap' // Permite que los elementos se envuelvan si no caben en una fila
      }}
    >
      <Box>
        <MonetizationOnIcon/>
        <Typography>$120.40</Typography>
        <Typography>Price</Typography>
      </Box>
      <Box>
        <LocalMallIcon/>
        <Typography>$120.40</Typography>
        <Typography>Orders</Typography>
      </Box>
      <Box>
      <StoreIcon/>
        <Typography>$120.40</Typography>
        <Typography>Stock</Typography>
      </Box>
      <Box>
      
        <CreditCardIcon/>
        <Typography>$120.40</Typography>
        <Typography>Total Revenue</Typography>
      </Box>
    </Box>
    <Box>
        <Box>
            <Typography> Sizes:</Typography>
            <Typography> M</Typography>
            <Typography> L</Typography>
            <Typography>Xl</Typography>
        </Box>
        <Box>
            <Typography> Categories</Typography>
            <Typography> Main Categories</Typography>
            <Typography> Second Categories</Typography>
            <Typography>Xl</Typography>
        </Box>
    </Box>
    <Box>
        <Typography>Descripción</Typography>
    </Box>

    <Box>
        <Typography>Additional Information</Typography>
        <Box>
        <Typography>Additional Information</Typography>
        <Typography>Additional Information</Typography>
        <Typography>Additional Information</Typography>


        </Box>
    </Box>
    </Box>
  )
}

export default EditPage