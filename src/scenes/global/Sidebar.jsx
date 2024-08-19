"use client";
import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { colors } from "@mui/material";
import { useSelector } from "react-redux";
import axios from '@/api/axios';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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

const AUTH_ME = '/auth/me';

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
  const [fullName, setFullName] = useState('');
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux

  const obtenerMiData = async () => {
    try {
      if (!token) {
        return; // Salir de la función si el token no está disponible en el estado de Redux
      }

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Actualizar el estado fullName con el valor obtenido de la respuesta
      setFullName(response.data.data.person.fullName);
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
    }
  };

  useEffect(() => {
    obtenerMiData();
  }, [token]); // Ejecutar el efecto cuando el token cambie

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: "#141414!important",
        marginLeft: '-12px'
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        color: 'grey',
     
        padding: "5px 12px 5px 40px !important",
      },
      "& .pro-inner-item:hover": {
        color: "white !important",
      },
      "& .pro-menu-item.active": {
        
        color: "white !important",
      },
      // Aplicar estilos a los elementos Typography específicamente
     "& .MuiTypography-root": {
    
      transition: "color 0.3s",
      "&:hover": {
        color: "white !important",
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
              color: "white",
            }}
          >
            {!isCollapsed && (
         <Box
         display="flex"
         justifyContent="space-between"  // Alinea los elementos al final del contenedor flex
         alignItems="center"
          // Espacio a la izquierda del contenido
       >
              <img
        src={`../../assets/pngegg.png`}
        alt="logo"
        style={{
          width: "120px",
          display:"flex",
          justifyContent:"center" , // Alinea los elementos al final del contenedor flex
          alignItems:"center",
          marginLeft:'38px',
      
        }}
      />
         <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
           <MenuOutlinedIcon sx={{ color: 'white',marginTop:'-52px'}} />
         </IconButton>
       </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography color="white" fontWeight="500">
                
                </Typography>
              </Box>
           
            </Box>
          )}
    <Divider sx={{ borderColor: '#E6E6E6', marginBottom:'12px',marginTop:'-32px' }} />
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
             <Divider sx={{ borderColor: '#E6E6E6', marginTop:'12px',marginBottom:'16px' }} />
            <Item
              title="Categories Page"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
            <Item
              title="Product Page"
              icon={<ContactsOutlinedIcon />}
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
                 <Divider sx={{ borderColor: '#E6E6E6', marginTop:'12px',marginBottom:'16px' }} />
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
             <Divider sx={{ borderColor: '#E6E6E6', marginTop:'12px',marginBottom:'16px' }} />
             <Item
              title="Home"
              icon={<DoorFrontOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onMenuClick={onMenuClick}
            />
              <Divider sx={{ borderColor: '#E6E6E6', marginTop:'12px',marginBottom:'16px' }} />
             <Item
              title="Logout"
              icon={<ExitToAppIcon/>}
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
