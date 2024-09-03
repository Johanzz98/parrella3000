import React, { useEffect, useState } from "react";
import axios from "@/api/axios";
import {
  Box,
  Divider,
  Typography,
  Drawer,
  Button,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const DrawerMan = ({ open, onClose }) => {
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
      toast.error("Error fetching categories");
    }
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: 2,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {/* Contenedor izquierdo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={onClose}>
              <ArrowBackIosIcon sx={{ color: "black", fontSize: "20px" }} />
            </IconButton>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#111",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Hombre
            </Typography>
          </div>

          {/* Contenedor derecho */}
          <IconButton onClick={onClose}>
            <ClearIcon sx={{ color: "black", fontSize: "24px" }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2, mt: 2 }} />
        <Box>
          <a href="/Women" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              sx={{
                mb: 2,
                fontSize: "16px",
                fontWeight: "700",
                color: "#111",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Todo Hombre
            </Typography>
          </a>
          {categories.map((category) => (
            <Typography key={category.id} sx={{ mb: 1 }}>
              {capitalizeFirstLetter(category.name)}
            </Typography>
          ))}
        </Box>
        <Box>
          <img
            src={`assets/MenuHombre/right.jpg`}
            alt="logo"
            style={{
              width: "100%",
              height: "auto",
              width: "300px",
              marginLeft: "-16px",
              marginBottom: "-24px",
            }}
          />
        </Box>
      </Box>
      <ToastContainer />
    </Drawer>
  );
};

export default DrawerMan;
