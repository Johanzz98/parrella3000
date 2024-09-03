"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IndexTerminos from "@/components/Footer/Acerca/Terminos/IndexTerminos";
import Footer from "@/components/Footer/Footer";
import InfoFinal from "@/components/InfoFinal";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";
import { Hidden } from "@mui/material";

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
          <Box sx={{ mt: 15 }}>
            <Navbar />

            <PageWithWhatsAppButton />

            <IndexTerminos />
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

export default Page;
