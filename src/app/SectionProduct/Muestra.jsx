"use client";
import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./transitions.css";
import MostrarProductos from "./MostrarProductos";
import { productData } from "./ImgDetails";

//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import InstagramIcon from "@mui/icons-material/Instagram";
import LookMax from "./LookMax";

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

const ShowContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 
};

const Show = {
  border: "none",
  outline: "0",
  marginTop: "-12px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  width: "20%",
  fontSize: "18px",
   marginRight:'200px',
   marginBottom:'46px'
};

const zeldas = {
  border: "none",
  outline: "0",
  transition: "all 0.3s ease",
  marginTop: "12px",
  color: "white",
  backgroundColor: "white",
  display: "flex",
  padding: "16px 38px ",
  justifyContent: "flex-start",
  marginLeft:'-70px',
  alignItems: "center",
  boxShadow: "none",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
"&:hover": {
      backgroundColor: "transparent", // Establece el fondo en transparente en estado hover
    },
};

const detalles = {
  fontSize: "18px",
  fontWeight: "500",
  color: "black",
  display: "flex",
  flexGrow: 0.3,

  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

function Muestra() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(
    productData.slice(0, 4)
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
    <Box>
      <CSSTransition
        in={true}
        timeout={500}
        classNames="product-animation"
        unmountOnExit
      >
        <MostrarProductos items={visibleProducts} />
      </CSSTransition>

      <Box style={ShowContainer}>
        <Button style={{...Show,marginLeft:'200px'}} onClick={toggleShowAllProducts}>
          {showAllProducts ? "Mostrar menos" : "Mostrar más"}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
          marginLeft:'42px',
        }}
      >
        <Divider
          sx={{
            width: "72%",
            bgcolor: "#eceff1",
            textAlign: "center",
          }}
        />
      </Box>

      <Button sx={zeldas} onClick={() => setShowDescription(!showDescription)}>
        <Typography sx={{ ...detalles, marginLeft: "126px" }}>
          Descripción
        </Typography>
        {showDescription ? (
          <KeyboardArrowUpIcon
            style={{ color: "black", marginLeft: "auto", marginRight: "4%" }}
          />
        ) : (
          <KeyboardArrowDownIcon
            style={{ color: "black", marginLeft: "auto", marginRight: "4%" }}
          />
        )}
      </Button>

      <CSSTransition
        in={showDescription}
        timeout={300}
        classNames="description"
        unmountOnExit
      >
        <Box sx={Titulo}>
          <Box sx={{ padding: "15px"}}>
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={4.2}>
                <Typography sx={NombreProducto}>
                  UNA CHAQUETA DEPORTIVA MUY LLAMATIVA HECHA PARCIALMENTE CON
                  MATERIALES RECICLADOS.
                </Typography>
                <Typography>
                  Destaca en la calle con esta chaqueta deportiva. La chaqueta
                  Firebird es un emblema de adidas que desde la década de los 80
                  ha causado sensación por su estilo auténtico. Confeccionada en
                  un tejido de tricot reciclado brillante, esta chaqueta se
                  mantiene fiel a sus raíces deportivas gracias a su cuello alto
                  y las clásicas 3 Tiras en las mangas. Úsala con tus jeans o
                  calzas favoritas para un look casual y descomplicado que no
                  pasará desapercibido.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4.2}>
                {productWithIdThree && (
                  <img
                    src={productWithIdThree.imageurl}
                    alt={productWithIdThree.name}
                    style={{
                      width: "360px",
                      height: "369px",
                      marginLeft:'24px'
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CSSTransition>

     
      <Box
        sx={{
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
          marginLeft:'42px',
        }}
      >
        <Divider
          sx={{
            width: "72%",
            bgcolor: "#eceff1",
            textAlign: "center",
          }}
        />
      </Box>
    
      <Button
        sx={zeldas}
        onClick={() => setShowDetalles(!showDetalles)}
      >
        <Typography sx={{ ...detalles, marginLeft: "120px" }}>Detalles</Typography>
        {showDetalles? (
          <KeyboardArrowUpIcon
            style={{
              color: "black",
              marginLeft: "auto",
              marginRight: "4%" 
            }}
          />
        ) : (
          <KeyboardArrowDownIcon
            style={{
              color: "black",
              marginLeft: "auto",
              marginRight: "4%" 
            }}
          />
        )}
      </Button>

    
        <CSSTransition
          in={showDetalles}
          timeout={500}
          classNames="description"
          unmountOnExit
        >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft:'-54px'
              }}
            >
              <Box sx={{ flex: "0.5" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#111",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    paddingBottom: "24px",
                    lineHeight: "24px",
                  }}
                >
                  <ul>
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
              <Box sx={{ flex: "0.3", marginLeft: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#111",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    paddingBottom: "24px",
                    lineHeight: "24px",
                  }}
                >
                  <ul style={{ marginLeft:'-160px', padding: "0" }}>
                    <li style={{ marginBottom: "8px", marginTop: "-22px" }}>
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
      
    
        <Box
        sx={{
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
          marginLeft:'42px',
        }}
      >
        <Divider
          sx={{
            width: "72%",
            bgcolor: "#eceff1",
            textAlign: "center",
          }}
        />
      </Box>
     
      <Button sx={zeldas} onClick={() => setShowCuidados(!showCuidados)}>
        <Typography sx={{ ...detalles, marginLeft: "120px" }}>Cuidados</Typography>
        {showCuidados ? (
          <KeyboardArrowUpIcon
            style={{ color: "black", marginLeft: "auto", marginRight: "4%" }}
          />
        ) : (
          <KeyboardArrowDownIcon
            style={{ color: "black", marginLeft: "auto", marginRight: "4%" }}
          />
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 0.5 }}>
              <Typography
                sx={{
                  ...NombreProducto,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "124px",
                  fontSize:"18px",
                }}
              >
                INSTRUCCIONES DE LAVADO
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#111",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                  paddingBottom: "24px",
                  lineHeight: "24px",
                  marginLeft: "136px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <li style={{ marginBottom: "5px" }}>
                      No usar blanqueador{" "}
                      <img
                        src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/B1.svg "
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
                    <li style={{ marginBottom: "5px" }}>
                      No lavar en seco{" "}
                      <img
                        src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/E1.svg "
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
                    <li style={{ marginBottom: "5px" }}>
                      Lavado a máquina agua tibia{" "}
                      <img
                        src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/A5.svg"
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

                    <li style={{ marginBottom: "5px" }}>
                      Secar a potencia baja{" "}
                      <img
                        src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/C2.svg"
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
                    <li style={{ marginBottom: "5px" }}>
                      Retoque con plancha fría
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
            <Box sx={{ flex: "0.5" }}>
              <Typography
                sx={{
                  ...NombreProducto,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "55%",
                  marginLeft: "30px",
                  fontSize:"18px",
                }}
              >
                INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#111",
                  marginLeft: "-50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                  paddingBottom: "24px",
                  lineHeight: "24px",
                  marginRight: "-32px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ul style={{ margin: 0, padding: 0 }}>
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
                      Lavar con colores similares{" "}
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
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
          marginLeft:'42px',
        }}
      >
        <Divider
          sx={{
            width: "72%",
            bgcolor: "#eceff1",
            textAlign: "center",
          }}
        />
      </Box>
     
    
   
<Box sx={{marginTop:'30%'}}>
      <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <LookMax />
          </Grid>
        </Grid>
        </Box>
    </Box>
  );
}

export default Muestra;
