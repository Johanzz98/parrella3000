import React from 'react';
import { Box, Button, CardContent, Grid, Hidden, Typography } from '@mui/material';

const setMidIz = {
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 600,
  textAlign: "center",
  fontSize: "24px",
  fontStyle: 'normal',
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
  marginTop:'8px'
};

export default function LastPhoto() {
  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center">
      {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
      <Hidden mdDown>
      <Grid item xs={12} sm={5.5}>
  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
    <CardContent sx={{ p: 0 }}>
      <img
        src="https://tommychile.vtexassets.com/arquivos/mujer-not-found.jpg"
        loading="lazy"
        alt="Image 1"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} // Asegura que la imagen se ajuste al contenedor
      />
      <Typography  sx={{
          position: 'absolute',
          bottom: '12%', // Ajusta la posición vertical según sea necesario
          left: '10%', // Ajusta la posición horizontal según sea necesario
          backgroundColor: 'transparent',
          color: 'white',
          fontSize:'24px',
          fontWeight:600,
        

        }}
      >
        Mujeres
      </Typography>
      <Button
  component="a"
  href="/Women"
  sx={{
    position: 'absolute',
    bottom: '5%', // Ajusta la posición vertical según sea necesario
    left: '10%', // Ajusta la posición horizontal según sea necesario
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 600,
    border: '2px solid white',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: 'white',
      color: '#111',
      fontWeight: 600,
      boxShadow: 'none', // Define el color de fondo para el hover
    },
  }}
>
  Comprar Mujeres
</Button>
    </CardContent>
  </Box>
</Grid>
      {/* Para pantallas medianas o mayores, muestra este elemento */}
      
      

        {/* Segunda imagen */}
        <Grid item xs={12} sm={5.5}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <CardContent sx={{ p: 0 }}>
            <img
              src="https://tommychile.vtexassets.com/arquivos/hombre-not-found.jpg"
              loading="lazy"
              alt="Image 2"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} // Asegura que la imagen se ajuste al contenedor
      />
      <Typography  sx={{
          position: 'absolute',
          bottom: '12%', // Ajusta la posición vertical según sea necesario
          left: '10%', // Ajusta la posición horizontal según sea necesario
          backgroundColor: 'transparent',
          color: 'white',
          fontSize:'24px',
          fontWeight:600,
        
        
        }}
      >
       Hombres
      </Typography>
      <Button
  component="a"
  href="/Hombre"
        sx={{
          position: 'absolute',
          bottom: '5%', // Ajusta la posición vertical según sea necesario
          left: '10%', // Ajusta la posición horizontal según sea necesario
          backgroundColor: 'transparent',
          color: 'white',
          fontWeight:600,
          border: '2px solid white',
          boxShadow: 'none',
      
          '&:hover': {
            backgroundColor: 'white',
            color: '#111',
            fontWeight:600,
            boxShadow: 'none', // Define el color de fondo para el hover
          },
        }}
      >
       Comprar  Hombres
      </Button>
    </CardContent>
  </Box>
        </Grid>

        {/* Tercera imagen */}
      
      </Hidden>
      {/* Para el resto de pantallas, muestra este elemento */}
      <Hidden smUp>
        <Grid item xs={12} sm={6}>

        <Box>
          <CardContent>
            <img
              
              srcSet="https://i.pinimg.com/564x/ec/22/20/ec222045c284341b560d6a1a740c2266.jpg"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            

          </CardContent>
        </Box>
          <Box>
            <CardContent>
              <img
              
                srcSet="https://i.pinimg.com/564x/9c/45/9b/9c459b4e11dee487885c2ae182fb8f4b.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
              />
           
            </CardContent>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
}
