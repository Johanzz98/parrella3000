import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Productos from "./Productos"; // Ajusta la ruta según corresponda

// Asumiendo que tienes un componente ProductosMobile definido
import ProductosMobile from "./ProductosMobile"; // Ajusta la ruta según corresponda

const nombreProductoStyles = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#00000",
  display: "flex",

  marginLeft: "8px",
  marginBottom: "18px",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  paddingTop: "12px",
  lineHeight: "24px",
};

function Mostrar({ item }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 'sm' es el breakpoint para pantallas pequeñas

  return (
    <Box sx={{ paddingTop: "12px" }}>
      <Box sx={{ marginTop: "24px" }}>
        {isMobile ? (
          <ProductosMobile item={item} /> // Muestra ProductosMobile para pantallas pequeñas
        ) : (
          <Productos item={item} /> // Muestra Productos para pantallas grandes
        )}
      </Box>
    </Box>
  );
}

export default Mostrar;
