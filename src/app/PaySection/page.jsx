"use client";
import DetailsPay from "@/components/Pay/DetailsPay";
import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import ShoppingCart from "@/components/Cart/ShoppingCart";
import ResumenDetails from "@/components/Pay/ResumenDetails";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FooterDown from "@/components/Footer/FooterDown";
import ResumenDetailsMobile from "@/components/Pay/ResumenDetailsMobile";
import DetailsPayMobile from "@/components/Pay/DetailsPayMobile";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <Box
          sx={{
            mt: 24, // Margen superior por defecto para todos los tamaños
            // Definir margen superior específico para móviles
            "@media (max-width:800px)": {
              mt: 4, // Cambiar a un margen mayor para pantallas más pequeñas
            },
          }}
        >
          <Navbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "16px",
              flexDirection: { xs: "column", md: "row" }, // xs: pantallas pequeñas, md: pantallas medianas y grandes
            }}
          >
            <Box
              sx={{
                flex: 1,
                marginRight: { md: "16px" },
                marginBottom: { xs: "16px", md: "0" },
              }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <DetailsPay />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <DetailsPayMobile />
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "300px" } }}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <ResumenDetails />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <ResumenDetailsMobile />
              </Box>
            </Box>
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
