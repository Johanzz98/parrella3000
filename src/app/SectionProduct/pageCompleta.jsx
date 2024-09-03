"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "@/components/Navbar/Navbar";
import PageMax from "./PageMax";

import Footer from "@/components/Footer/Footer";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider";
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";
import { Box } from "@mui/material";
import PageMobile from "./PageMobile";

const PageCompleta = () => {
  const dispatch = useDispatch();
  const theme = createTheme(); // Obtén el theme desde el ThemeProvider

  // Estado para manejar el tamaño de pantalla
  const [isMd, setIsMd] = useState(false);

  // Hook para media query
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setIsMd(matchesMd); // Actualiza el estado según el media query
  }, [matchesMd]); // Dependencia de efecto para actualizar cuando cambie matchesMd

  const handleAddToCart = (product) => {
    // Lógica para agregar producto al carrito y actualizar localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // Ejemplo de dispatch para Redux, ajusta según tu implementación
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 13.9 }}>
        <Navbar />
        <PageWithWhatsAppButton />
        <div style={{ display: isMd ? "none" : "block" }}>
          <PageMax handleAddToCart={handleAddToCart} />
        </div>
        <div style={{ display: isMd ? "block" : "none" }}>
          <PageMobile handleAddToCart={handleAddToCart} />
        </div>
        <div style={{ display: "none" }}>
          <ShoppingCart />
        </div>
        <Footer />
        <FooterDown />
      </Box>
    </ThemeProvider>
  );
};

export default PageCompleta;
