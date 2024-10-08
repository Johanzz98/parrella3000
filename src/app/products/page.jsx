"use client";
import "./app.css";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import CardList from "@/components/product/CardList";
import { store } from "@/services/store";
import { Provider } from "react-redux";

import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/context/AuthProvider";
import TopMobile from "@/components/product/TopMobile";
import Top from "@/components/product/Top"; // Asegúrate de importar el componente Top

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#212121",
    },
  },
});

const Page = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Provider store={store()}>
          <Navbar />
          {isMobile ? <TopMobile /> : <Top />}
          <CardList />

          {/* <Grid container spacing={3}>
          FilterPanel en la posición izquierda 
          <Grid item xs={12} sm={3}>
            {!isSmallScreen && <FilterPanel sizes={sizes} />}
          </Grid>
          {/* Products al lado de FilterPanel en el medio 
          <Grid item xs={12} sm={9}>
            <CardList />
          </Grid>
        </Grid>
        */}
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Page;
