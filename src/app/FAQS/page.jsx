"use client";
import React from "react";
import Index from "@/components/Footer/Help/Index";
import Navbar from "@/components/Navbar/Navbar";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "@/components/Footer/Footer";
import InfoFinal from "@/components/InfoFinal";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";

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
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store()}>
        <AuthProvider>
          <Box sx={{ mt: 13 }}>
            <Navbar />

            <PageWithWhatsAppButton />
            <Index />
            {/* Envuelve ShoppingCart en un div invisible */}
            <div style={{ display: "none" }}>
              <ShoppingCart />
            </div>
            <Box sx={{ marginTop: "-54px" }}>
              <InfoFinal />
            </Box>
            <Footer />
            <FooterDown />
          </Box>
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Page;
