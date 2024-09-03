"use client";
import Navbar from "@/components/Navbar/Navbar";
import Recovery from "@/components/Recovery/Recovery";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import FooterDown from "@/components/Footer/FooterDown";
import "./App.css";

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
          <Box sx={{ mt: 6 }}>
            <Navbar />
            <Recovery />

            <Footer />
            <FooterDown />
          </Box>
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default page;
