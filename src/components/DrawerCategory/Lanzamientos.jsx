import Drawer from "@mui/material/Drawer";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "@/api/axios";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify"; // Añade la importación de react-toastify si es necesario

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const Lanzamientos = ({ open, onClose }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/category");
      if (response.data.data && response.data.data.length > 0) {
        setCategories(response.data.data);
      } else {
        toast.error("No categories found");
      }
    } catch (error) {
      toast.error("Error fetching categories", error);
    }
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Contenido del Drawer */}
        <Box p={2} display="flex" alignItems="center" justifyContent="space-between" sx={{ backgroundColor: "#F7F7F7", borderBottom:'1px solid orange',boxShadow:'none' }}>
          {/* Contenedor izquierdo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={onClose}>
              <ArrowBackIosIcon sx={{ color: 'black', fontSize: '20px', marginLeft: '-6px' }} />
            </IconButton>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#111',
                fontFamily: 'Helvetica, sans-serif',
                fontOpticalSizing: 'auto',
              }}
            >
              Categorías
            </Typography>
          </div>

          {/* Contenedor derecho */}
          <IconButton onClick={onClose}>
            <ClearIcon sx={{ color: 'black', fontSize: '24px' }} />
          </IconButton>
        </Box>

        {/* Contenido de categorías */}
        <Box p={2} flexGrow={1}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ul style={{ listStyleType: "none", paddingLeft: 30, width: '100%' }}>
              {categories.map((category) => (
                <li key={category.id}>
                  <Typography
                    onClick={() =>
                      (window.location.href = `/products/${category.id}`)
                    }
                    sx={{
                      fontSize: "16px",
                      color: "#111",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Helvetica, sans-serif",
                      cursor: "pointer",
                      marginTop:'6px',
                      marginBottom:'24px',
                      "&:hover": {
                        color: "orange",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </Box>

        {/* Imagen */}
        <Box>
          <img
            src={`../../assets/Menu/Gorra.jpg`}
            alt="logo"
            style={{
              width: "100%",
              height: "auto",
            width: "300px",
            marginTop:'24px',
            marginBottom:'-24px'
            }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Lanzamientos;
