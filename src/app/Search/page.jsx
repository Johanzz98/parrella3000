"use client";
import Navbar from "@/components/Navbar/Navbar";
import { ListSearch } from "@/components/Search/ListSearch";
import SearchNotFound from "@/components/Search/SearchNotFound";
import { Box } from "@mui/material";
import React from "react";
import Footer from "@/components/Footer/Footer";
import InfoFinal from "@/components/InfoFinal";
import FooterDown from "@/components/Footer/FooterDown";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from "@/PageWithWhatsAppButton";
import More from "@/components/Search/More";
import Two from "@/components/Search/Two";
const page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <div style={{ display: "none" }}>
          <ShoppingCart />
        </div>
        <Box sx={{ mt: 16 }}>
          <Navbar />

          <SearchNotFound />
          <ListSearch />
          <Two />
          <PageWithWhatsAppButton />
          <More />
          <InfoFinal />
          <Footer />
          <FooterDown />
        </Box>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default page;
