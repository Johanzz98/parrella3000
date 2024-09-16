"use client";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import { AuthProvider } from "@/context/AuthProvider";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import "./App.css";

// Dynamically import components with client-side only rendering
const Pedidos = dynamic(() => import('@/components/Pedido/Pedidos'), { ssr: false });
const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });
const InfoFinal = dynamic(() => import('@/components/InfoFinal'), { ssr: false });
const FooterDown = dynamic(() => import('@/components/Footer/FooterDown'), { ssr: false });
const ShoppingCart = dynamic(() => import('@/components/Cart/ShoppingCart'), { ssr: false });
const PageWithWhatsAppButton = dynamic(() => import('@/PageWithWhatsAppButton'), { ssr: false });
const InvoiceLeft = dynamic(() => import('@/components/Pedido/InvoiceLeft'), { ssr: false });

const Page = () => {
  const theme = useTheme();
  const [showInvoice, setShowInvoice] = useState(false);

  const handleShowInvoice = () => {
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Provider store={store()}>
          <Box sx={{ mt: 13 }}>
            <Navbar />
            <PageWithWhatsAppButton />

            {showInvoice ? (
              <InvoiceLeft onBackClick={handleCloseInvoice} />
            ) : (
              <Pedidos onShowInvoice={handleShowInvoice} />
            )}

            <div style={{ display: "none" }}>
              <ShoppingCart />
            </div>
            
            <Box sx={{ mt: -6.2 }}>
              <InfoFinal />
            </Box>
            <Footer />
            <FooterDown />
          </Box>
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Page;
