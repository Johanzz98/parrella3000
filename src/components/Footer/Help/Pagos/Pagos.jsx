import { Box, Typography } from '@mui/material'
import React from 'react'



const titulo = {
    fontSize: "18px",
    fontWeight: "1000",
    color: "#00174f",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
  
  };
  
  const detalles = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  };
const Pagos = () => {
  return (
    <Box
    sx={{
        margin: '40px 0px 0px',
        padding: '0px 40px',
        width: '50%',
        height: '800px',
        overflow: 'auto', // Habilita el scroll cuando sea necesario

    }}
>
    <Typography sx={titulo}>
    PEDIDOS Y PAGOS
    </Typography>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-center',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
            ¿Qué métodos de pago puedo utilizar para hacer pedidos en Nike?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Queremos que la compra por internet de tus productos favoritos de Nike sea una experiencia rápida y sencilla, haciéndola inolvidable. <br/> <br/>
    </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
        ¿Cuáles son las formas de pago?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Al hacer una compra online, puedes usar como forma de pago tarjetas de crédito y tarjeta débito. <br/> <br/>
  </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
        ¿Es seguro pagar en parrella?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
  
    ¡Sí, pagar en adidas en muy seguro!
 <br/> <br/>
 El pago mediante tarjeta de crédito es totalmente seguro. La totalidad de la transacción se realiza de forma cifrada a través de un servidor de validación bancaria utilizándose el protocolo de encriptación SSL (Secure Socket Layer), así pues, el número de su tarjeta de crédito y la fecha de la caducidad quedan instantáneamente encriptados en su ordenador antes de ser enviados al protocolo SSL. <br/> <br/>
    </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
        ¿Es seguro pagar en parrella?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
  
    ¡Sí, pagar en adidas en muy seguro!
 <br/> <br/>
 El pago mediante tarjeta de crédito es totalmente seguro. La totalidad de la transacción se realiza de forma cifrada a través de un servidor de validación bancaria utilizándose el protocolo de encriptación SSL (Secure Socket Layer), así pues, el número de su tarjeta de crédito y la fecha de la caducidad quedan instantáneamente encriptados en su ordenador antes de ser enviados al protocolo SSL. <br/> <br/>
    </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
    ¿Puedo pagar con una tarjeta internacional?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Sólo aceptamos tarjetas de Chile.
    <br/><br/>
    <br/><br/>
    </Typography>
    </Box>
   </Box>
  )
}

export default Pagos