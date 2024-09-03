"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import "./App.css";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FooterDown from "@/components/Footer/FooterDown";
import Lista from "@/components/CheckOut/Lista";
import Factura from "@/components/CheckOut/Factura";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import HeaderNavbar from "@/components/CheckOut/HeaderNavbar";
import Header from "@/components/CheckOut/Header";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <Box
          sx={{
            mt: 12,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeaderNavbar />
          <Header />
          <Box sx={{ flex: "1 1 auto", overflow: "hidden" }}>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="start"
            >
              <Grid item xs={12} sm={5}>
                <Lista />
              </Grid>

              <Grid item xs={12} sm={3}>
                <Factura />
              </Grid>
            </Grid>
          </Box>
          <div style={{ display: "none" }}>
            <ShoppingCart />
          </div>
          <Footer />
          <FooterDown />
        </Box>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Page;
