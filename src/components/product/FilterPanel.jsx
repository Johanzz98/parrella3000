import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { productData } from "./SectionProducts/Items";

const helloName = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  marginBottom: "12px",
  marginTop: "24px",
};

const FilterPanel = ({
  handleToggle,
  selectedItems,
  updateFilteredProducts,
}) => {
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [openProductos, setOpenProductos] = useState(false);
  const [openDescuentos, setOpenDescuentos] = useState(false);

  const sizes = [
    ...new Set(productData.map((product) => product.talla).flat()),
  ];
  sizes.sort(); // Ordenar tallas alfabéticamente

  const handleSizeClick = (size) => {
    const index = filteredSizes.indexOf(size);
    let newFilteredSizes;

    if (index === -1) {
      newFilteredSizes = [...filteredSizes, size];
    } else {
      newFilteredSizes = [...filteredSizes];
      newFilteredSizes.splice(index, 1);
    }

    setFilteredSizes(newFilteredSizes);

    const selectedProducts = productData.filter((product) =>
      product.talla.includes(size)
    );
    const remainingProducts = productData.filter(
      (product) => !product.talla.includes(size)
    );

    // Colocar los productos seleccionados primero
    const filteredProducts = [...selectedProducts, ...remainingProducts];

    updateFilteredProducts(filteredProducts);
  };

  return (
    <Box
      sx={{
        width: "280px", // Ajustar el ancho del contenedor
        position: "sticky",
      marginTop:'32px',
        maxHeight: "calc(100vh - 1px)", // Establecer una altura máxima
        overflowY: "auto", // Habilitar scroll vertical cuando el contenido excede el tamaño del contenedor
        zIndex: 1000,
        "& .pro-sidebar-inner": {
          background: "#ffffff !important",
        },
        "&::-webkit-scrollbar": {
          width: "8px", // Ancho del scrollbar
          borderRadius: "24px", // Radio de borde para el scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgb(208, 208, 208)", // Color de fondo del thumb (barra de scroll)
          borderRadius: "24px", // Radio de borde para el thumb
        },
      }}
    >
      <Typography sx={{    fontFamily: "Helvetica, sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '22px',
                                padding:'0 8px 0',
                                fontWeight: "520",
                                color: "#000",
                                position:'relative',
                               marginLeft:'-8.2px',
                                textTransform: "capitalize",}}> Ropa para hombre</Typography>
      <ProSidebar
        style={{
          width: "100%", // Ajustar el ancho del ProSidebar
          background: "#ffffff",
        }}
      >
        <Box textAlign="center">
          <Typography sx={helloName}>Filtros</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Divider
            sx={{
              width: "100%",
              backgroundColor: "#f5f5f5",
              textAlign: "center",
              margin: "0 0 12px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Cambiado a columna para expandirse hacia abajo
            cursor: "pointer",
            color: "black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => setOpenProductos(!openProductos)}
          >
            <Typography>Tallas</Typography>
            {openProductos ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={openProductos} timeout={600} unmountOnExit>
            <Divider
              sx={{ backgroundColor: "#f5f5f5", margin: "12px 0 16px" }}
            />
            <List component="div" disablePadding sx={{ color: "black" }}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                paddingRight="12px"
                paddingLeft="12px"
                sx={{
                  marginTop: "-24px",
                  marginBottom: "12px",
                  marginLeft: "12px",
                }}
              >
                {sizes.map((size, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={5.3}
                    key={index}
                    onClick={() => handleSizeClick(size)}
                  >
                    <Paper
                      sx={{
                        textAlign: "center",
                        boxShadow: "none",
                        border: "1px solid grey",
                        height: "24px",
                        marginTop: "12px",
                       
                        cursor: "pointer",
                        "&:hover": { color: "orange" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#111",

                          display: "flex",
                          justifyContent: "center", // Ajustado para alinear el texto a la izquierda cuando sea largo
                          alignItems: "center", // Ajustado para alinear el texto a la izquierda cuando sea largo
                          fontFamily: "Helvetica, sans-serif",
                          fontOpticalSizing: "auto",
                          // Añadido para asegurar que el texto no se desborde

                          textOverflow: "ellipsis",
                          "&:hover": { color: "orange" },
                        
                        }}
                      >
                        {size}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Collapse>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Divider
            sx={{
              width: "100%",
              backgroundColor: "#f5f5f5",
              textAlign: "center",
              marginTop:'16px'
            }}
          />
        </Box>
        {/*   <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'black',
            }}
            onClick={() => setOpenProductos(!openProductos)}
          >
            <Typography  sx={{marginLeft:'13px',fontSize:'16px',marginTop:'-6px'}} >
              Tipo de Productos
            </Typography>
            {openProductos ? <ExpandLess sx={{ marginRight: '24px'}} /> : <ExpandMore sx={{ marginRight: '24px' }}/>}
          </Box>
          <Collapse in={openProductos} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{color:'black',marginLeft:'14px'}}>
              {['Poleras', 'Poleron ', 'Chaquetas'].map((item, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  <ListItem key={index} role={undefined} dense button onClick={handleToggle(item)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedItems[item] === true}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        sx={{
                          '&.Mui-checked .MuiSvgIcon-root': {
                            color: '#111',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
            justifyContent: "flex-start",
         
          }}
        >
          <Divider
            sx={{
              width: "86%",
                backgroundColor: '#f5f5f5',
              textAlign: "center",
              margin: '0 14px 32px',
              marginTop: '12px'
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'black'
            }}
            onClick={() => setOpenDescuentos(!openDescuentos)}
          >
            <Typography  sx={{marginLeft:'13px',fontSize:'16px',marginTop:'-6px'}} >
              Pura verga compa
            </Typography>
            {openDescuentos ? <ExpandLess sx={{ marginRight: '24px'}} /> : <ExpandMore sx={{ marginRight: '24px' }}/>}
          </Box>
          <Collapse in={openDescuentos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{color:'black',marginLeft:'14px'}}>
              {['Hasta ', 'La vista', 'Baby '].map((item, index) => {
                const labelId = `checkbox-list-label-${index}`;
                
                return (
                  <ListItem key={index} role={undefined} dense button onClick={handleToggle(item)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedItems[item] === true}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        sx={{
                          '&.Mui-checked .MuiSvgIcon-root': {
                            color: 'black',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
*/}
      </ProSidebar>
    </Box>
  );
};

export default FilterPanel;
