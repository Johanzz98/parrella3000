import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { productData } from "./SectionProducts/Items";
const Header = ({
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  sortByAToZ,
  sortByZToA,
  toggleFilters,
  mostrarFiltros,
}) => {
  const [mostrarFiltrosState, setMostrarFiltrosState] =
    useState(mostrarFiltros);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const totalProducts = productData.length;
  useEffect(() => {
    setMostrarFiltrosState(mostrarFiltros);
  }, [mostrarFiltros]);

  const handleToggleFilters = () => {
    toggleFilters();
    setMostrarFiltrosState(!mostrarFiltrosState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (option) => {
    setIsMenuOpen(false);
    setSelectedOption(option);
    switch (option) {
      case "Precio Más Bajo":
        sortByPriceLowToHigh();
        break;
      case "Precio Más Alto":
        sortByPriceHighToLow();
        break;
      case "A-Z":
        sortByAToZ();
        break;
      case "Z-A":
        sortByZToA();
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ marginTop: "200px" }}>
      <AppBar
        position="relative"
        sx={{
          position: "relative",
          top: isSmallScreen ? 80 : 55,
          marginTop: "12px",
          boxShadow: isSmallScreen ? "0 2px 4px rgba(12, 12, 255, 0.12)" : "0",
          backgroundColor: "inherit",
        }}
      >
        <Toolbar
          sx={{
            height: "48px",
            boxShadow: "{ xs: 1, sm: 0 }",
            backgroundColor: "inherit",
            justifyContent: { xs: "space-between", sm: "flex-end" },
            marginRight: isSmallScreen ? "0" : "70px",
            marginBottom: isSmallScreen ? " " : "-24px",
          }}
        >
          {isSmallScreen && (
            <Typography
              sx={{
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
                fontSize: "16px",
                fontWeight: 550,

                fontStyle: "normal",
                textAlign: "center",
                color: "#111",

                textTransform: "capitalize",
              }}
            >
              Parrella{" "}
            </Typography>
          )}
          <Divider
            orientation="vertical"
            sx={{
              marginLeft: "32px",
              backgroundColor: "#f5f5f5",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Stack direction="row" spacing={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleToggleFilters}
              disableRipple
              sx={{
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <TuneIcon
                sx={{
                  marginRight: isSmallScreen ? "16px" : "0",
                  fontSize: isSmallScreen ? "16px" : "20px",
                }}
              />
              <Typography
                sx={{ ml: isSmallScreen ? -1 : 1, textTransform: "capitalize" }}
              >
                {isSmallScreen
                  ? "Filtrar"
                  : mostrarFiltrosState
                    ? "Mostrar Filtros"
                    : " "}
              </Typography>
              <Divider
                orientation="vertical"
                sx={{
                  height: "58px",
                  backgroundColor: "#f5f5f5",
                  marginRight: "-6px",
                  display: { xs: "block", sm: "none" },
                  marginLeft: "24px",
                }}
              />
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              disableRipple
              sx={{
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                  fontSize: isSmallScreen ? "14px" : "16px",

                  fontStyle: "normal",
                  textAlign: "center",
                  color: "#111",
                  mr: isSmallScreen ? 0.5 : 2,
                  textTransform: "capitalize",
                }}
              >
                {!isSmallScreen && selectedOption
                  ? `Ordenar por ${selectedOption}`
                  : "Ordenar por"}
              </Typography>
              {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => handleOptionSelect("Precio Más Alto")}>
                <Typography>Precio Más Alto</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOptionSelect("Precio Más Bajo")}>
                <Typography>Precio Más Bajo</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOptionSelect("A-Z")}>
                <Typography>A-Z</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOptionSelect("Z-A")}>
                <Typography>Z-A</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          sx={{
            color: "#111",
            fontSize: "12px",
            fontWeight: "500",
            marginTop: isSmallScreen ? "-12px" : "24px",
            position: isSmallScreen ? "relative" : "relative",
            top: isSmallScreen ? 120 : 48,
            right: isSmallScreen ? 0 : 0,
            marginBottom: "-42px",
            marginRight: isSmallScreen ? "16px" : "90px", // Ajusta el marginRight según el breakpoint MD
          }}
        >
          Total de productos: {totalProducts}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
