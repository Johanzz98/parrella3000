import { Box, Link, Typography, useMediaQuery } from '@mui/material'
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
const Pedidos = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <Box
    sx={{
   
        margin: '40px 0px 0px',
        padding: '0px 40px',
        marginLeft:isMobile ? '6px' : 0,
        paddingRight: isMobile ? '24px' :0,
        width:  isMobile ? '95%':'78%',
        height: isMobile ?  '100%': '800px',
        overflow: 'auto', // Habilita el scroll cuando sea necesario

    }}
>
    <Typography sx={titulo}>
    Estado de mi Pedido
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
            ¿Cómo hago el seguimiento de mi pedido de Parrella?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Una vez que el pedido sea despachado recibirás un correo electrónico con el número de tracking para hacer el seguimiento de tu compra. <br/> <br/>
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
       ¿Cómo puedo conocer el courier de mi compra?
        </Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'start'}}> {/* Ajuste aquí */}
        <Typography sx={detalles}>
          Cuando el paquete sea entregado al courier recibirás un correo electrónico donde tendrás los siguientes datos: Operador y número de tracking. <br /><br />
          El Operador corresponde al courier con el que vas a recibir tu compra y con el número de tracking podrás ingresar al link que corresponda: </Typography>
          <br /><br />
          <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'start', marginTop:'-32px'}}> {/* Ajuste aquí */}
          <Typography>
          <a href="https://www.starken.cl/seguimiento" target="_blank" rel="noopener noreferrer">Starken</a>
          </Typography>
          <Typography sx={detalles}>
          <a href="https://www.bluexpress.com/track" target="_blank" rel="noopener noreferrer">Bluexpress</a>
          </Typography>

          <Typography sx={{...detalles,marginTop:'-4px'}}>
          <a href="https://www.microservicio.com/track" target="_blank" rel="noopener noreferrer">Microservicio</a>
          </Typography>
      </Box>
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
        ¿El importe total de mi pedido Parrella incluye los aranceles y los impuestos?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
  
    Sí, todos los aranceles o impuestos aplicables se incluyen en el importe total del pedido durante el proceso de compra. Calculamos todos los aranceles e impuestos según las leyes que regulan la entrega. Toma en cuenta que no aceptamos pedidos exentos de impuestos.
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
  ¿Puedo cancelar mi pedido Parrella?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    En caso de querer cancelar tu pedido podrás avanzar con tu solicitud siempre que no hayan transcurrido más de 24 hs desde realizada la compra.
    <br/><br/>
    <br/><br/>
    </Typography>
    </Box>
   </Box>
  )
}

export default Pedidos