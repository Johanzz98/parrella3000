import React from 'react';
import { Box, CardContent, Grid, Hidden, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: "35px 0" }}>
          <Hidden mdDown>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingBottom: '12px' }}>
       
        <Typography sx={{
          fontSize: "32px",
          fontWeight: "1000",
          color: "#111",
          fontFamily: "Helvetica, sans-serif",
        }}>¿Quiénes Somos?</Typography>
      </Box>
      </Hidden>
      <Hidden smUp>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingBottom: '12px' }}>
       
        <Typography sx={{
          fontSize: "28px",
          fontWeight: "1000",
          color: "#111",
          marginTop:'-64px',
         
          fontFamily: "Helvetica, sans-serif",
        }}>¿Quiénes Somos?</Typography>
      </Box>
      </Hidden>
      <Hidden mdDown>
        <Box sx={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left', paddingBottom: '12px', maxWidth: '800px' }}>
            <Typography sx={{ flex: '1', maxWidth: '50%', padding: '0 20px' }}>
              <span style={{ fontWeight: '600' }}>PARRELLA</span> es una empresa dedicada a la venta de ropa con la mayor calidad en telas.
              <br /><br />
              Esta se destaca por su profesionalismo y responsabilidad para garantizar al cliente un excelente y satisfactorio resultado en cada uno de nuestros productos.
              <br /><br />
              Nuestra misión se basa en diseñar, producir y vender una gran variedad de prendas para vestir.
              <br /><br />Fomentando el apoyo y unión que nos caracteriza, contamos con una amplia variedad en diseños, colores y modelos innovadores.
              <br /><br />
              También logramos contar con la capacidad para ofrecerles un catálogo de ventas al mayor.
              <br /><br />
              Gracias a esto podemos incrementar el valor de la empresa y proporcionar estabilidad laboral a nuestros trabajadores.
              <br /><br />

            </Typography>
            <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src='https://i.pinimg.com/564x/72/58/97/7258970fe41a6082f684195e4d81c6a3.jpg'
                alt="logo"
                style={{ maxWidth: '300px', height: 'auto', marginBottom: '24px' }}
              />

            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box sx={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left', paddingBottom: '12px', maxWidth: '800px' }}>
            <Typography sx={{ padding: '0 20px' }}>
              <span style={{ fontWeight: '600' }}>PARRELLA</span> es una empresa dedicada a la venta de ropa con la mayor calidad en telas.
              <br /> <br />
              Esta se destaca por su profesionalismo y responsabilidad para garantizar al cliente un excelente y satisfactorio resultado en cada uno de nuestros productos.
              <br /> <br />
              Nuestra misión se basa en diseñar, producir y vender una gran variedad de prendas para vestir.
              Fomentando el apoyo y unión que nos caracteriza, contamos con una amplia variedad en diseños, colores y modelos innovadores.
              <br /> <br />
              También logramos contar con la capacidad para ofrecerles un catálogo de ventas al mayor.
              <br /> <br />
              Gracias a esto podemos incrementar el valor de la empresa y proporcionar estabilidad laboral a nuestros trabajadores.
              <br /> <br />

            </Typography>
          </Box>
          <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src='https://i.pinimg.com/564x/72/58/97/7258970fe41a6082f684195e4d81c6a3.jpg'
              alt="logo"
              style={{ maxWidth: '300px', height: 'auto', marginBottom: '24px' }}
            />
          </Box>
        </Box>
      </Hidden>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
        <Hidden mdDown>
          <Grid item xs={12} sm={4}>
            <Box>
              <CardContent>
                <img
                  src="https://i.pinimg.com/736x/55/0e/33/550e334251122fecfe86acf4571dbcdc.jpg"
                  loading="lazy"
                  alt="Image 1"
                  style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
          </Grid>

          {/* Segunda imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                src="https://i.pinimg.com/564x/b3/87/8f/b3878f7738261f51c18a01b589048582.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: '600px', objectFit: 'contain' }}
              />
            </CardContent>
          </Grid>

          {/* Tercera imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                srcSet="https://i.pinimg.com/736x/27/16/e9/2716e95ac641e82490f38132e9836660.jpg"
                loading="lazy"
                alt="Image 3"
                style={{ width: '100%', height: '600px', objectFit: 'fill' }}
              />
            </CardContent>
          </Grid>
        </Hidden>

        {/* Para el resto de pantallas, muestra este elemento */}
        <Hidden smUp>
          <Grid item xs={12} sm={6}>
            <Box>
              <CardContent>
                <img
                  srcSet="https://i.pinimg.com/564x/8d/ff/c5/8dffc5d22600428b3d58a3b93a7713cd.jpg"
                  loading="lazy"
                  alt="Image 1"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
            <Box>
              <CardContent>
                <img
                  srcSet="https://i.pinimg.com/564x/44/7d/fa/447dfa3d8138237d72ce8be8f88cbcda.jpg"
                  loading="lazy"
                  alt="Image 2"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
      <Hidden mdDown>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          paddingBottom: '12px',
        }}
      >
        <img
              src={`../../../../public/assets/AboutUs/BANNER.png`}
          alt="logo"
          style={{
            width: '100%',
            marginTop: '12px',
            zIndex: '1',
          }}
        />
      </Box>
      </Hidden>
      <Hidden smUp>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          paddingBottom: '12px',
        }}
      >
        <img
             srcSet="https://i.pinimg.com/564x/c3/9f/51/c39f518bdf040ceda5d515710e3dc13d.jpg"
          alt="logo"
          style={{
            width: '100%',
            marginTop: '12px',
            zIndex: '1',
          }}
        />
      </Box>
      </Hidden>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
        <Hidden mdDown>
          <Grid item xs={12} sm={4}>
            <Box>
              <CardContent>
                <img
                  src="https://i.pinimg.com/564x/d1/df/2e/d1df2e55173b9e64aa7622b09ea817fa.jpg"
                  loading="lazy"
                  alt="Image 1"
                  style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
          </Grid>

          {/* Segunda imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                src="https://i.pinimg.com/564x/38/ea/c3/38eac3a47d5d8afe9f7d8c3d618788e4.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: '600px', objectFit: 'contain' }}
              />
            </CardContent>
          </Grid>

          {/* Tercera imagen */}
          <Grid item xs={12} sm={4}>
            <CardContent>
              <img
                srcSet="https://i.pinimg.com/564x/bd/cc/d0/bdccd03841a790171b2da88b66767af5.jpg"
                loading="lazy"
                alt="Image 3"
                style={{ width: '100%', height: '600px', objectFit: 'fill' }}
              />
            </CardContent>
          </Grid>
        </Hidden>

        {/* Para el resto de pantallas, muestra este elemento */}
        <Hidden smUp>
          <Grid item xs={12} sm={6}>
            <Box>
              <CardContent>
                <img
                  srcSet="https://i.pinimg.com/564x/3d/00/ed/3d00ed26969ce4f09a9fd518a1cdea2c.jpg"
                  loading="lazy"
                  alt="Image 1"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
            <Box>
              <CardContent>
                <img
                  srcSet="https://i.pinimg.com/736x/b8/e2/1d/b8e21dfa8630ffbdcfef235a93379e1b.jpg"
                  loading="lazy"
                  alt="Image 2"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
                />
              </CardContent>
            </Box>
          </Grid>
        </Hidden>
      </Grid>

   
    </Box>
  );
}

export default AboutUs;
