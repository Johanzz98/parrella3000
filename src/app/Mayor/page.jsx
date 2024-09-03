"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import VentaMayor from "@/components/Footer/Mayor/VentaMayor";
import Footer from "@/components/Footer/Footer";
import InfoFinal from "@/components/InfoFinal";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";
import LastPhoto from "@/components/Footer/Mayor/LastPhoto";
import Banner from "@/components/Footer/Mayor/Banner";
import Detalles from "@/components/Footer/Mayor/Detalles";
import Venta from "@/components/Footer/Mayor/Venta";

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

const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store()}>
        <AuthProvider>
          <Box
            sx={{
              mt: 16,
            }}
          >
            <Navbar />
            <PageWithWhatsAppButton />
            <Banner />
            <VentaMayor />
            <Detalles />
            <Venta />
            <div style={{ display: "none" }}>
              <ShoppingCart />
            </div>

            <InfoFinal />
            <Footer />
            <FooterDown />
          </Box>
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default page;
