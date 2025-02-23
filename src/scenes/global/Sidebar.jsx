"use client";
import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Collapse,
} from "@mui/material";
import { colors } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "@/api/axios";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import "react-pro-sidebar/dist/css/styles.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
const AUTH_ME = "/auth/me";

const Item = ({ title, icon, selected, setSelected, onMenuClick }) => {
  const theme = useTheme();

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "black",
      }}
      onClick={() => {
        setSelected(title);
        onMenuClick(title); // Llama a la función onMenuClick directamente
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ onMenuClick }) => {
  const theme = useTheme();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [fullName, setFullName] = useState("");
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux

  const [expanded, setExpanded] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState(false);

  const handleToggleProduct = () => {
    setExpandedProduct(!expandedProduct);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
 <Box
  sx={{
    "& .pro-sidebar-inner": {
      background: "#ffffff !important",
      marginLeft: "-12px",
      // Estilos para el scroll
      "&::-webkit-scrollbar": {
        width: '8px', // Ancho del scrollbar
      },
      "&::-webkit-scrollbar-track": {
        background: '#f1f1f1', // Color del track del scrollbar
        borderRadius: '12px', // Radio del borde del track
      },
      "&::-webkit-scrollbar-thumb": {
        background: '#888', // Color del thumb del scrollbar
        borderRadius: '12px', // Radio del borde del thumb
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: '#555', // Color del thumb al pasar el ratón
      },
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
      color:'#111',
    },
    "& .pro-inner-item": {
      color: "#111",
      padding: "5px 12px 5px 40px !important",
    },
    "& .pro-inner-item:hover": {
      color: "#111 !important",
    },
    "& .pro-menu-item.active": {
      color: "#111 !important",
    },
    // Aplicar estilos a los elementos Typography específicamente
    "& .MuiTypography-root": {
      color:'#111',
      transition: "color 0.3s",
      "&:hover": {
        color: "#111 !important",
      },
    },
  }}
>

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "12px 0 42px ",
             color:'#111'
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between" // Alinea los elementos al final del contenedor flex
                alignItems="center"
                // Espacio a la izquierda del contenido
              >
                <img
                  src={`../../assets/pngegg.png`}
                  alt="logo"
                  style={{
                    width: "120px",
                    display: "flex",
                    justifyContent: "center", // Alinea los elementos al final del contenedor flex
                    alignItems: "center",
                    marginLeft: "38px",
                  }}
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                { <MenuOutlinedIcon
                    sx={{ color: "#111", marginTop: "-52px" }}
                  />}
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography color="white" fontWeight="500"></Typography>
              </Box>
            </Box>
          )}
          <Divider
            sx={{
              borderColor: "#E6E6E6",
              marginBottom: "12px",
              marginTop: "-46px",
            }}
          />
          <Box paddingLeft={isCollapsed ? undefined : "0"}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />

            <Item
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Divider
              sx={{
                borderColor: "#E6E6E6",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            />

            <Box>
              {/* Botón para alternar la visibilidad */}
              <Box
                display="flex"
                alignItems="center"
                onClick={handleToggleProduct}
                sx={{ cursor: "pointer", marginLeft: "45px" }}
              >
                <ShoppingBagOutlinedIcon sx={{  color: "#111"}} />
                <Typography
                  sx={{ marginLeft: "18px", color: "#111", fontWeight: 600 }}
                >
                  Product Page
                </Typography>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleProduct();
                  }}
                  sx={{
                    padding: "8px",
                    backgroundColor: "transparent !important", // Asegura el fondo transparente
                    border: "none !important", // Elimina cualquier borde
                    "&:hover": {
                      backgroundColor: "transparent !important", // Fondo transparente en hover
                      opacity: 1, // Mantener la opacidad en hover
                    },
                    "&:active": {
                      backgroundColor: "transparent !important", // Fondo transparente en clic
                      opacity: 1, // Mantener la opacidad en clic
                    },
                    "&:focus": {
                      outline: "none !important", // Elimina el contorno del enfoque
                      backgroundColor: "transparent !important", // Fondo transparente en foco
                    },
                  }}
                >
                  {expandedProduct ? (
                    <ExpandLess
                      sx={{
                        color: "#111",
                        border: "none !important",
                        marginLeft: "32px",
                        "&:hover": {
                          backgroundColor: "transparent !important", // Fondo transparente en hover
                          opacity: 1,
                        },
                        "&:active": {
                          backgroundColor: "transparent !important", // Fondo transparente en clic
                          opacity: 1,
                        },
                        "&:focus": {
                          outline: "none !important",
                          backgroundColor: "transparent !important",
                        },
                      }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{
                        color: "#111",
                        marginLeft: "32px",
                        "&:hover": {
                          backgroundColor: "transparent !important", // Fondo transparente en hover
                          opacity: 1,
                        },
                        "&:active": {
                          backgroundColor: "transparent !important", // Fondo transparente en clic
                          opacity: 1,
                        },
                        "&:focus": {
                          outline: "none !important",
                          backgroundColor: "transparent !important",
                        },
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              <Collapse
                in={expandedProduct}
                sx={{
                  backgroundColor: "transparent !important", // Fondo transparente en Collapse
                  "&:hover": {
                    backgroundColor: "transparent !important", // Fondo transparente en hover
                    opacity: 1,
                  },
                  "&:active": {
                    backgroundColor: "transparent !important", // Fondo transparente en clic
                    opacity: 1,
                  },
                  "&:focus": {
                    outline: "none !important",
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                <Item
                  title="Categories Page"
                  icon={<CategoryOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
                <Item
                  title="Product Page"
                  icon={<AddCircleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
                <Item
                  title="List Product"
                  icon={<Inventory2OutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
                <Item
                  title="Edit Product"
                  icon={<BuildCircleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
              </Collapse>
              <Box></Box>
              {/* Botón para alternar la visibilidad */}
              <Box
                display="flex"
                alignItems="center"
                onClick={handleToggle}
                sx={{ cursor: "pointer", marginLeft: "45px" }}
              >
                <ShoppingBagOutlinedIcon sx={{ color: "#111" }} />
                <Typography
                  sx={{ marginLeft: "18px", color: "#111", fontWeight: 600 }}
                >
                  Order Page
                </Typography>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle();
                  }}
                  sx={{
                    padding: "8px",
                    backgroundColor: "transparent !important", // Asegura el fondo transparente
                    border: "none !important", // Elimina cualquier borde
                    "&:hover": {
                      backgroundColor: "transparent !important", // Fondo transparente en hover
                      opacity: 1, // Mantener la opacidad en hover
                    },
                    "&:active": {
                      backgroundColor: "transparent !important", // Fondo transparente en clic
                      opacity: 1, // Mantener la opacidad en clic
                    },
                    "&:focus": {
                      outline: "none !important", // Elimina el contorno del enfoque
                      backgroundColor: "transparent !important", // Fondo transparente en foco
                    },
                  }}
                >
                  {expanded ? (
                    <ExpandLess
                      sx={{
                        color: "#111",
                        border: "none !important",
                        marginLeft: "48.7px",
                        "&:hover": {
                          backgroundColor: "transparent !important", // Fondo transparente en hover
                          opacity: 1,
                        },
                        "&:active": {
                          backgroundColor: "transparent !important", // Fondo transparente en clic
                          opacity: 1,
                        },
                        "&:focus": {
                          outline: "none !important",
                          backgroundColor: "transparent !important",
                        },
                      }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{
                        color: "#111",
                        border: "none !important",
                        marginLeft: "48.7px",
                        "&:hover": {
                          backgroundColor: "transparent !important", // Fondo transparente en hover
                          opacity: 1,
                        },
                        "&:active": {
                          backgroundColor: "transparent !important", // Fondo transparente en clic
                          opacity: 1,
                        },
                        "&:focus": {
                          outline: "none !important",
                          backgroundColor: "transparent !important",
                        },
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              {/* Contenido oculto/visible */}
              <Collapse
                in={expanded}
                sx={{
                  backgroundColor: "transparent !important", // Fondo transparente en Collapse
                  "&:hover": {
                    backgroundColor: "transparent !important", // Fondo transparente en hover
                    opacity: 1,
                  },
                  "&:active": {
                    backgroundColor: "transparent !important", // Fondo transparente en clic
                    opacity: 1,
                  },
                  "&:focus": {
                    outline: "none !important",
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                <Item
                  title="Order List"
                  icon={<LocalShippingOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
                <Item
                  title="List Product"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
                <Item
                  title="Edit Product"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onMenuClick={onMenuClick}
                />
              </Collapse>
            </Box>

            <Divider
              sx={{
                borderColor: "#E6E6E6",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            />

            <Item
              title="Invoices Perfil"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Item
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />

            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Item
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Divider
              sx={{
                borderColor: "#E6E6E6",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            />
            <Item
              title="Home"
              icon={<DoorFrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Divider
              sx={{
                borderColor: "#E6E6E6",
                marginTop: "12px",
                marginBottom: "16px",
              }}
            />
            <Item
              title="Logout"
              icon={<ExitToAppIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
