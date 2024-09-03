import React from "react";
import { Box, CardContent, Grid, Hidden, Typography } from "@mui/material";

const setMidIz = {
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 600,
  textAlign: "center",
  fontSize: "24px",
  fontStyle: "normal",
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
  marginTop: "8px",
};

export default function Static() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
      <Hidden mdDown>
        <Grid item xs={12} sm={4}>
          <Box>
            <CardContent>
              <img
                src="https://cdn.myportfolio.com/ec4906ee-5053-4127-8249-23e1bc14e04f/9274a534-7797-4b79-ae97-e2df511e1131_rw_1920.jpeg?h=7f1cff98118da530189635504d177f36"
                loading="lazy"
                alt="Image 1"
                style={{ width: "100%", height: "600px", objectFit: "contain" }} // Asegura que la imagen se ajuste al contenedor
              />
            </CardContent>
          </Box>
        </Grid>
        {/* Para pantallas medianas o mayores, muestra este elemento */}

        {/* Segunda imagen */}
        <Grid item xs={12} sm={4}>
          <CardContent>
            <img
              src="https://cdn.myportfolio.com/ec4906ee-5053-4127-8249-23e1bc14e04f/dad09fe1-e975-43df-8626-fce95880aae8_rw_1920.jpeg?h=ea616c0c165caa438a98cdf30fec4bf9"
              loading="lazy"
              alt="Image 2"
              style={{ width: "100%", height: "600px", objectFit: "contain" }}
            />
          </CardContent>
        </Grid>

        {/* Tercera imagen */}
        <Grid item xs={12} sm={4}>
          <CardContent>
            <img
              srcSet="https://cdn.myportfolio.com/ec4906ee-5053-4127-8249-23e1bc14e04f/e302e5b9-7ca6-4154-9902-5bb99bf6e64f_rw_1920.jpeg?h=3ee5ca75b1f205bd215d2fa655d142ec"
              loading="lazy"
              alt="Image 3"
              style={{ width: "100%", height: "600px", objectFit: "fill" }}
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
                srcSet="https://i.pinimg.com/564x/a2/87/ed/a287edce9d0b9dfed07887058010e3d3.jpg"
                loading="lazy"
                alt="Image 1"
                style={{ width: "100%", height: "auto", objectFit: "contain" }} // Asegura que la imagen se ajuste al contenedor
              />
            </CardContent>
          </Box>
          <Box>
            <CardContent>
              <img
                srcSet="https://i.pinimg.com/564x/57/c5/61/57c561a569a8490c34e6b34969dc5d5a.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: "100%", height: "auto", objectFit: "contain" }} // Asegura que la imagen se ajuste al contenedor
              />
            </CardContent>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
}
