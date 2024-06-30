import React from 'react';
import { Box, CardContent, Grid, Hidden, Typography } from '@mui/material';

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

export default function Two() {
  return (
    <Grid alignItems="center" justifyContent="center">
      {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
      <Hidden mdDown>
   
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '50%', padding: '10px' }}>
        <img
          src="https://preview.thenewsmarket.com/Previews/ADID/VideoAssets/800x600/ADID_53989_663815.jpg"
          loading="lazy"
          alt="Image 1"
          style={{ width: '100%', height: '417px', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
      <div style={{ maxWidth: '50%', padding: '10px' }}>
        <img
          src="https://preview.thenewsmarket.com/Previews/ADID/VideoAssets/1920x1080/ADID_53991_663817_v4.jpg"
          loading="lazy"
          alt="Image 2"
          style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
      


        {/* Tercera imagen */}
       
      </Hidden>
      {/* Para el resto de pantallas, muestra este elemento */}
      <Hidden smUp>
        <Grid item xs={12} sm={6}>

        <Box>
          <CardContent>
            <img
              
              srcSet="https://i.pinimg.com/564x/b4/81/9a/b4819ae97b9a65009cf94329e96d1bdb.jpg"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            

          </CardContent>
        </Box>
          <Box>
            <CardContent>
              <img
              
                srcSet="https://i.pinimg.com/564x/c8/b2/00/c8b200da12ea4c5de48f5a0ca1ac4a1e.jpg"
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
