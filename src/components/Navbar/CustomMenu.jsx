import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const CustomMenu = () => {
  return (
    <Box>
    <Box sx={{ position: 'absolute', top: 16, bottom: 0, left:96,}}>
            <Typography
             sx={{fontSize: "16px",
                fontWeight: "600",
                color: "#111",
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: 'auto',}}>
            Samba zabaratucamba</Typography>
        </Box>
        <img
    src={`../../assets/Menu/MenuFoto.jpeg`}
    alt="logo"
    style={{
      width: "100%",
      height: "100%",
      maxWidth: "220px",
      height: "auto",
      position: 'absolute',
     top:46,
       left:80,
     
    }}
  />
  <Divider orientation="vertical" flexItem sx={{ position: 'absolute', top: 0, bottom: 0, left:360, height: '100%', borderLeft: '1px solid #e0e0e0' }} />

  

    <Box sx={{ position: 'absolute', top: 24, bottom: 0, left:400,}}>
        <Typography sx={{fontSize: "16px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        Novedades
        </Typography>
        <Typography
  onClick={() => window.location.href = '/products'}
  sx={{
    cursor: 'pointer',
    color: '#000',
    position: 'absolute', top: 32,
    '&:hover': {
      color: 'orange',
      textDecoration: 'underline', // Agrega subrayado al hacer hover
    },
  }}
>
  Shazam
</Typography>
  </Box>




<Box sx={{ position: 'absolute', top: 24, bottom: 0, left:710,}}>
        <Typography sx={{fontSize: "16px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',}}>
        Novedades
        </Typography>
        <Typography
  onClick={() => window.location.href = '/SectionProduct'}
  sx={{
    cursor: 'pointer',
    color: '#000',
    position: 'absolute', top: 32,
    '&:hover': {
      color: 'orange',
      textDecoration: 'underline', // Agrega subrayado al hacer hover
    },
  }}
>
  Producto
</Typography>
  </Box>

  <Box sx={{ position: 'absolute', top: 16, bottom: 0, right:72,}}>
            <Typography
             sx={{fontSize: "16px",
                fontWeight: "600",
                color: "#111",
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: 'auto',}}>
       You gotta make it rain</Typography>
        </Box>
  <img
    src={`../../assets/Menu/Gorra.jpg`}
    alt="logo"
    style={{
      width: "100%",
      height: "100%",
      maxWidth: "280px",
      height: "auto",
      position: 'absolute',
     top:46,
       right:20,
     
    }}
  />

  <Divider orientation="vertical" flexItem sx={{ position: 'absolute', top: 0, bottom: 0, right:360, height: '100%', borderLeft: '1px solid #e0e0e0' }} />
    </Box>
  )
}

export default CustomMenu