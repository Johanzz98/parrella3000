"use client";
import React from 'react';
import { Box, Grid } from '@mui/material';
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider";
import HeaderNavbar from '@/components/CheckOut/HeaderNavbar';
import FooterDown from '@/components/Footer/FooterDown';
import Footer from '@/components/Footer/Footer';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import Carrito from '@/components/Payment/Carrito';
import Example from '@/components/Payment/Example';
import Payment from '@/components/Payment/Payment';
import "./App.css";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
      <Box
  sx={{
    mt: 16,
    display: 'flex',
    flexDirection: 'column',
  }}
>
        <HeaderNavbar />
        <Box sx={{  overflow: 'hidden'}}>
      
        <Grid container spacing={0} justifyContent="space-between" alignItems="start">
              <Grid item xs={12} sm={5.0}>
                <Box sx={{}}>
                <Payment />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                
                <Box sx={{marginLeft:'0'}}>
             
                <Carrito />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ display: 'none' }}>
            <ShoppingCart />
          </Box>
          <Footer />
          <FooterDown />
        </Box>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Page;
