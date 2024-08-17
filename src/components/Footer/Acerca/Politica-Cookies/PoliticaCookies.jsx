import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'



const titulo = {
    fontSize: "16px",
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
const PoliticaCookies = () => {


  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <Box
    sx={{
   
        margin: '40px 0px 0px',
        padding: '0px 40px',
        marginLeft:isMobile ? '6px' : 0,
        paddingRight: isMobile ? '24px' :0,
        width:  isMobile ? '95%':'70%',
        height: isMobile ?  '100%': '800px',
        overflow: 'auto', // Habilita el scroll cuando sea necesario

    }}
>
    <Typography sx={titulo}>
    Políticas de privacidad y Cookies
    </Typography>
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
           COOKIES EN EL SITIO
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    El Sitio usa “cookies” para mejorar el conocimiento sobre el uso de la tienda y ofrecer información a los clientes respecto a sus preferencias y pautas de navegación. Una cookie recopila información de hábitos de navegación, sin acceder a los datos personales de un usuario.
    El sitio utiliza “cookies” de terceros para recabar información y someterla a un tratamiento estadístico, para ello, se utilizan los servicios de Google Analytics (el “Servidor”). Una vez que el usuario se conecte nuevamente al Sitio, el Servidor reconocerá el número almacenado en “cookie”, según se ha indicado, suministrando información anónima referida. Los procedimientos están gestionados y controlados exclusivamente por Google Analytics. <br/>El usuario podrá, en cualquier momento, revocar el consentimiento para el uso de “cookies” mediante su desactivación, a través de las opciones de privacidad/seguridad de su navegador. Para más información, consulta la ayuda que tu navegador te ofrece.
    </Typography>
    </Box>
    
   </Box>
  )
}

export default PoliticaCookies