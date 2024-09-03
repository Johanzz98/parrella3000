import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Header = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#111",
          display: "flex",
          marginRight: isSmallScreen ? "0" : "0",
          marginTop: isSmallScreen ? "-12px" : "auto",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Helvetica, sans-serif",
          fontOpticalSizing: "auto",
        }}
      >
        Detalles Shipping
      </Typography>
    </Box>
  );
};

export default Header;
