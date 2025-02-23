import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Sidebar from "@/scenes/global/Sidebar";
import Topbar from "@/scenes/global/Topbar";
import HeaderAdminTop from "@/scenes/dashboard/HeadersAdminTop";
import Team from "@/scenes/team/Team";
import Contacts from "@/scenes/Contacts/Contacts";
import Invoices from "@/scenes/invoices/Invoices";
import Form from "@/scenes/form/form";
import Bar from "@/scenes/Bar/Bar";
import PieChart from "@/components/PieChart";
import LineChart from "@/scenes/LineChart/LineChart";
import Home from "@/scenes/Home/Home";
import Logout from "@/scenes/Logout/Logout";
import Categories from "@/components/dashboardAdmin/Categories";
import Register from "@/components/dashboardAdmin/Register";
import { useSelector } from "react-redux";
import "./app.css";
import ProductPage from "@/components/dashboardAdmin/ProductPage/ProductPage";
import ListProductPage from "@/scenes/ListProductPage/ListProductPage";
import EditPage from "@/scenes/EditPage/EditPage";
import InvoicesPerfil from "@/scenes/InvoicesPerfil/InvoicesPerfil";
import Order from "@/scenes/Order/Order";

const Dash = () => {
  const [mainComponent, setMainComponent] = useState(<HeaderAdminTop />);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;

  useEffect(() => {
    const verifyTokenAndRole = async () => {
      try {
        // Si el token no está presente o el rol no es válido, redirigimos al error
        if (!token || (userRole !== "SUPER_ADMIN" && userRole !== "ADMIN")) {
          window.location.href = "/error";  // Redirige al error de inmediato
          return;
        }

        // Si el token es válido, mostramos el contenido principal después de la verificación
        setMainComponent(<HeaderAdminTop />);
        setLoading(false);  // Termina la animación de carga

      } catch (error) {
        console.error("Error verifying token:", error);
        setLoading(false);
        window.location.href = "/error";  // Redirige a error si hay un error al verificar el token
      }
    };

    if (token) {
      // Simula un retraso de 2 segundos para mostrar la animación de carga
      setTimeout(() => {
        verifyTokenAndRole();
      }, 2000); // 2 segundos de retraso
    } else {
      // Si no hay token, redirige al error inmediatamente
      setTimeout(() => {
        window.location.href = "/error";
      }, 2000); // 2 segundos de retraso antes de redirigir
    }
  }, [token, userRole]);

  const handleMenuClick = (menuItem) => {
    switch (menuItem) {
      case "Manage Team":
        setMainComponent(<Team />);
        break;
      case "Contacts Information":
        setMainComponent(<Contacts />);
        break;
      case "Order List":
        setMainComponent(<Order />);
        break;
      case "Product Page":
        setMainComponent(<ProductPage />);
        break;
      case "Categories Page":
        setMainComponent(<Categories />);
        break;
      case "List Product":
        setMainComponent(<ListProductPage />);
        break;
      case "Edit Product":
        setMainComponent(<EditPage />);
        break;
      case "Invoices Perfil":
        setMainComponent(<InvoicesPerfil />);
        break;
      case "Invoices Balances":
        setMainComponent(<Invoices />);
        break;
      case "Profile Form":
        setMainComponent(<Form />);
        break;
      case "Bar Chart":
        setMainComponent(<Bar />);
        break;
      case "Pie Chart":
        setMainComponent(<PieChart />);
        break;
      case "Register Form":
        setMainComponent(<Register />);
        break;
      case "Line Chart":
        setMainComponent(<LineChart />);
        break;
      case "Home":
        setMainComponent(<Home />);
        break;
      case "Logout":
        setMainComponent(<Logout />);
        break;
      default:
        setMainComponent(<HeaderAdminTop />);
        break;
    }
  };

  // Mostramos la animación de carga mientras verificamos el token
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <CircularProgress color="primary" size={60} />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Verificando tu acceso...
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="app-container">
      <Sidebar onMenuClick={handleMenuClick} />
      <Box className="main-content">
        <Topbar />
        {mainComponent}
      </Box>
    </Box>
  );
};

export default Dash;
