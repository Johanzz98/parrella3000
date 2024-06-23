"use client";
import React from "react";
import Info from "./Info";
import Muestra from "./Muestra";
import "./App.css";
import { Box, Grid } from "@mui/material";
import InfoFinal from "@/components/InfoFinal";
import { productDataCart } from "./ImgDetails";

function PageMax() {
  return (
    <Box>
      <Grid container spacing={1}>
        {/* Columna para Muestra */}
        <Grid item xs={12} md={9}>
          <Muestra />
        </Grid>
      
        {/* Columna para Info */}
        <Grid item xs={12} md={3}>
          <Info product={productDataCart} />
        </Grid>
      </Grid>

      {/* Sección para LookMax debajo de Muestra */}

      <InfoFinal />
    </Box>
  );
}

export default PageMax;
