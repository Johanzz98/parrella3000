"use client";
import Header from "@/components/Women/Header";
import Medium from "@/components/Women/Medium";
import { Box } from "@mui/material";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import InfoFinal from "@/components/InfoFinal";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";
import Last from "@/components/Women/Last";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Banner from "@/components/Women/Banner";
import Filtrar from "@/components/Women/Filtrar";
import Static from "@/components/Women/Static";
import Two from "@/components/Women/Two";

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
          <Box sx={{ mt: 12 }}>
            <Navbar />
            <Header />
            <Medium />
            <Last />
            <Banner />
            <Filtrar />
            <Static />
            <div style={{ display: "none" }}>
              <ShoppingCart />
            </div>{" "}
            <Two />
            <PageWithWhatsAppButton />
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
