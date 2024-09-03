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
                src="https://i.pinimg.com/564x/b5/62/6b/b5626b28040aa3762f43f48ab0ac3d95.jpg"
                loading="lazy"
                alt="Image 1"
                style={{ width: "100%", height: "590px", objectFit: "contain" }} // Asegura que la imagen se ajuste al contenedor
              />
            </CardContent>
          </Box>
        </Grid>
        {/* Para pantallas medianas o mayores, muestra este elemento */}

        {/* Segunda imagen */}
        <Grid item xs={12} sm={4}>
          <CardContent>
            <img
              src="../../assets/Mujer/1.jpg"
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
              srcSet="../../assets/Mujer/2.jpg"
              alt="Image 3"
              style={{ width: "100%", height: "auto", objectFit: "fill" }}
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
                srcSet="https://i.pinimg.com/564x/4a/be/56/4abe5694fdc4b56ee183eef1ef49903a.jpg"
                loading="lazy"
                alt="Image 1"
                style={{ width: "100%", height: "auto", objectFit: "contain" }} // Asegura que la imagen se ajuste al contenedor
              />
            </CardContent>
          </Box>
          <Box>
            <CardContent>
              <img
                srcSet="https://i.pinimg.com/564x/c7/0f/0c/c70f0cfd6fc2777d580aadd067ad9427.jpg"
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
