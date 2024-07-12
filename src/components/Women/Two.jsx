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
          src="https://images.squarespace-cdn.com/content/v1/5678890cdc5cb4407db3c353/1549327190123-3BNPPP9YCKGCDM6OU592/ke17ZwdGBToddI8pDm48kHmwtm1aU-I6ZAw2Z9cXaJ17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX3aH6lOzntqSUQ-eULWdFRnc9GVloBXW0BtxDdJHHB5zN6QY7niGWDmqnvl2nsF8A/4.jpg"
          loading="lazy"
          alt="Image 1"
          style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
      <div style={{ maxWidth: '50%', padding: '10px' }}>
        <img
          src="https://www.ampoo.gr/wp-content/uploads/Adidas-Women-Statement-Collection-Mandy-Persaki.jpg"
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
              
              srcSet="https://i.pinimg.com/564x/1e/ec/40/1eec40d09ef34df92e90061e13559130.jpg"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            

          </CardContent>
        </Box>
          <Box>
            <CardContent>
              <img
              
                srcSet="https://i.pinimg.com/564x/64/7b/1c/647b1ce5d2e7f20e4f90d0d854e43989.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
              />
           
            </CardContent>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
}
