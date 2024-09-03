"use client";
import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./transitions.css"; // Asegúrate de que este archivo existe y tiene las definiciones correctas

import { productData } from "./ImgDetailsMobile";

// Importaciones de íconos
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";

// Estilos definidos como objetos
const NombreProducto = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#00000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  paddingBottom: "24px",
  lineHeight: "24px",
};

const Titulo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0px 0px -1px",
  padding: "0 30px",
};

const zeldas = {
  border: "none",
  outline: "0",
  transition: "all 0.3s ease",
  marginTop: "12px",
  marginBottom: "12px",
  color: "white",
  backgroundColor: "white",
  display: "flex",

  justifyContent: "space-between", // Modificado aquí
  alignItems: "center",

  boxShadow: "none",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
};

const detalles = {
  fontSize: "18px",
  fontWeight: "600",
  color: "black",
  display: "flex",

  justifyContent: "flex-start", // Modificado aquí
  alignItems: "center",

  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const MuestraMobile = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(
    productData.slice(0, 4),
  );
  const [showDescription, setShowDescription] = useState(false);
  const [showDetalles, setShowDetalles] = useState(false);
  const [showCuidados, setShowCuidados] = useState(false);
  const [showLook, setShowLook] = useState(false);
  const productWithIdThree = productData.find((product) => product.id === 4);
  const [isHovered, setIsHovered] = useState(false);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
    setVisibleProducts(showAllProducts ? productData.slice(0, 4) : productData);
    if (showAllProducts) {
      scrollUp();
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        justifyContent: "center", // Modificado aquí
        alignItems: "center",
      }}
    >
      {/* Componente para mostrar descripción */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "24px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>
      <Button sx={zeldas} onClick={() => setShowDescription(!showDescription)}>
        <Typography sx={{ ...detalles, textTransform: "none" }}>
          Descripción
        </Typography>
        {showDescription ? (
          <KeyboardArrowUpIcon style={{ color: "black" }} />
        ) : (
          <KeyboardArrowDownIcon style={{ color: "black" }} />
        )}
      </Button>

      <CSSTransition
        in={showDescription}
        timeout={300}
        classNames="description"
        unmountOnExit
      >
        <Box sx={Titulo}>
          <Box sx={{ marginTop: "24px" }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6}>
                <Typography sx={NombreProducto}>
                  UNA CHAQUETA DEPORTIVA MUY LLAMATIVA HECHA PARCIALMENTE CON
                  MATERIALES RECICLADOS.
                </Typography>
                <Typography
                  sx={{
                    ...detalles,
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "32px",
                    width: "100%",
                    lineHeight: "1.8",
                  }}
                >
                  Destaca en la calle con esta chaqueta deportiva. La chaqueta
                  Firebird es un emblema de adidas que desde la década de los 80
                  ha causado sensación por su estilo auténtico.
                  <br />
                  Confeccionada en un tejido de tricot reciclado brillante, esta
                  chaqueta se mantiene fiel a sus raíces deportivas gracias a su
                  cuello alto y las clásicas 3 Tiras en las mangas.
                  <br />
                  Úsala con tus jeans o calzas favoritas para un look casual y
                  descomplicado que no pasará desapercibido.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CSSTransition>

      {/* Más contenido del componente */}
      {/* Asegúrate de seguir la misma estructura para otros botones y secciones */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "1px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "24px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>
      <Button sx={zeldas} onClick={() => setShowDetalles(!showDetalles)}>
        <Typography sx={{ ...detalles, textTransform: "none" }}>
          Detalles
        </Typography>
        {showDetalles ? (
          <KeyboardArrowUpIcon style={{ color: "black" }} />
        ) : (
          <KeyboardArrowDownIcon style={{ color: "black" }} />
        )}
      </Button>

      <CSSTransition
        in={showDetalles}
        timeout={300}
        classNames="description"
        unmountOnExit
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centra horizontalmente
            alignItems: "center", // Centra verticalmente
            flexDirection: "column", // Alinear contenido en columna
            textAlign: "center", // Alinear texto al centro
            width: "100%", // Ajustar al ancho completo si es necesario
            padding: "20px", // Añadir espacio de relleno alrededor del contenido si es necesario
          }}
        >
          <Box sx={{ flex: "0.5", textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#111",
                fontFamily: "Helvetica, sans-serif",
                paddingBottom: "24px",
                lineHeight: "24px",
              }}
            >
              <ul style={{ margin: "0", padding: "0", textAlign: "left" }}>
                <li style={{ marginBottom: "5px" }}>Ajuste holgado</li>
                <li style={{ marginBottom: "5px" }}>
                  Cierre frontal y cuello alto
                </li>
                <li style={{ marginBottom: "5px" }}>
                  Tejido tricot 100% poliéster reciclado
                </li>
                <li style={{ marginBottom: "5px" }}>Bolsillos con cierre</li>
              </ul>
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px", textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#111",
                fontFamily: "Helvetica, sans-serif",
                lineHeight: "24px",
              }}
            >
              <ul style={{ margin: "0", padding: "0", textAlign: "left" }}>
                <li style={{ marginBottom: "8px" }}>
                  Puños y dobladillo acanalados
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Color del artículo: Bold Gold
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Número de artículo: IP0611
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </CSSTransition>

      {/* Más contenido del componente */}
      {/* Asegúrate de seguir la misma estructura para otros botones y secciones */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "1px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "24px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>
      <Button sx={zeldas} onClick={() => setShowCuidados(!showCuidados)}>
        <Typography sx={{ ...detalles, textTransform: "none" }}>
          Cuidados
        </Typography>
        {showCuidados ? (
          <KeyboardArrowUpIcon style={{ color: "black" }} />
        ) : (
          <KeyboardArrowDownIcon style={{ color: "black" }} />
        )}
      </Button>

      <CSSTransition
        in={showCuidados}
        timeout={300}
        classNames="description"
        unmountOnExit
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centra horizontalmente
            alignItems: "center", // Centra verticalmente
            flexDirection: "column", // Alinear contenido en columna
            textAlign: "center", // Alinear texto al centro
            width: "100%", // Ajustar al ancho completo si es necesario
            padding: "20px", // Añadir espacio de relleno alrededor del contenido si es necesario
          }}
        >
          <Box sx={{ flex: "0.5", textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "550",
                color: "#111",
                fontFamily: "Helvetica, sans-serif",
                paddingBottom: "24px",
                lineHeight: "24px",
              }}
            >
              INSTRUCCIONES DE LAVADO
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#111",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
                textAlign: "center", // Alinear texto a la izquierda
                margin: "10px 0", // Añadir espacio vertical entre elementos
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ul style={{ margin: 0, padding: 0, textAlign: "left" }}>
                  <li style={{ marginBottom: "5px" }}>
                    No usar blanqueador{" "}
                    <img
                      src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/B1.svg"
                      alt=""
                      width="24"
                      height="24"
                      style={{ marginTop: "-5px", verticalAlign: "middle" }}
                    />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    No lavar en seco{" "}
                    <img
                      src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/E1.svg"
                      alt=""
                      width="24"
                      height="24"
                      style={{ marginTop: "-5px", verticalAlign: "middle" }}
                    />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Lavado a máquina agua tibia{" "}
                    <img
                      src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/A5.svg"
                      alt=""
                      width="24"
                      height="24"
                      style={{ marginTop: "-5px", verticalAlign: "middle" }}
                    />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Secar a potencia baja{" "}
                    <img
                      src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/C2.svg"
                      alt=""
                      width="24"
                      height="24"
                      style={{ marginTop: "-5px", verticalAlign: "middle" }}
                    />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Retoque con plancha fría suavemente{" "}
                    <img
                      src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/D2.svg"
                      alt=""
                      width="24"
                      height="24"
                      style={{
                        marginLeft: "5px",
                        marginTop: "-5px",
                        verticalAlign: "middle",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </Typography>
          </Box>
          <Box sx={{ flex: 0, textAlign: "left", marginTop: "20px" }}>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "550",
                color: "#111",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
                textAlign: "center", // Alinear texto a la izquierda
                margin: "10px 0", // Añadir espacio vertical entre elementos
                marginBottom: "24px",
              }}
            >
              INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#111",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
                textAlign: "center", // Alinear texto a la izquierda
                margin: "10px 0", // Añadir espacio vertical entre elementos
                marginLeft: "-46px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ul style={{ margin: 0, padding: 0, textAlign: "left" }}>
                  <li style={{ marginBottom: "5px" }}>
                    Usar únicamente detergente suave
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Lavar con cierres ajustados
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Lavar y planchar al revés
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    Lavar con colores similares
                  </li>
                </ul>
              </div>
            </Typography>
          </Box>
        </Box>
      </CSSTransition>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: "4px",
          marginBottom: "24px",
        }}
      >
        <Divider
          sx={{
            width: "97%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default MuestraMobile;
