import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "@/api/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const CustomMenuMan = () => {
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
    <Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="colored"
        style={{ fontSize: "12px", maxWidth: "446px", right: 5 }} // Establece el tamaño y estilo del ToastContainer
      />
      <Box sx={{ position: "absolute", top: 16, bottom: 0, left: 86 }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#111",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          Samba zabaratucamba
        </Typography>
      </Box>
      <img
        src={`../../assets/MenuHombre/left.jpg`}
        alt="logo"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          height: "auto",
          position: "absolute",
          top: 46,
          left: 20,
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 360,
          height: "100%",
          borderLeft: "1px solid #e0e0e0",
        }}
      />

      <Box sx={{ position: "absolute", top: 24, bottom: 0, left: 400 }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "1000",
            color: "#111",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          Novedades
        </Typography>
        <Typography
          onClick={() => (window.location.href = "/products")}
          sx={{
            cursor: "pointer",
            color: "#000",
            position: "absolute",
            top: 32,
            "&:hover": {
              color: "orange",
              textDecoration: "underline", // Agrega subrayado al hacer hover
            },
          }}
        >
          Shazam
        </Typography>
      </Box>

      <Box sx={{ position: "absolute", top: 24, bottom: 0, left: 710 }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "1000",
            color: "#111",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          Categorías
        </Typography>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {categories.map((category) => (
            <li key={category.id} style={{ marginTop: "8px" }}>
              <Typography
                onClick={() =>
                  (window.location.href = `/products/${category.id}`)
                }
                sx={{
                  fontSize: "16px",

                  color: "#000",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontFamily: "Helvetica,sans-serif",
                  fontOpticalSizing: "auto",
                  cursor: "pointer",

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
      </Box>

      <Box sx={{ position: "absolute", top: 16, bottom: 0, right: 72 }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#111",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          You gotta make it rain
        </Typography>
      </Box>
      <img
        src={`../../assets/MenuHombre/right.jpg`}
        alt="logo"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          height: "auto",
          position: "absolute",
          top: 46,
          right: 20,
        }}
      />

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 360,
          height: "100%",
          borderLeft: "1px solid #e0e0e0",
        }}
      />
    </Box>
  );
};

export default CustomMenuMan;
