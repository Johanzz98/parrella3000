"use client";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import InvoiceRight from "./InvoiceRightPdf";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




const InvoiceLeftPdf = ({  onBackClick, invoiceRef }) => {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const title = {
    color: "#111",
    fontSize: isMdUp ? "12px" :'12px',
    fontWeight: "600",
    display: "flex",
    padding: isMdUp ? 0 :0,
    margin: 0,
  
    fontFamily: "Helvetica,sans-serif",
  };
  
  const detalles = {
color: "#111",
    fontSize: isMdUp ? "12px" :'12px',
    fontWeight: "500",
    display: "flex",
    marginLeft: "6px",
    fontFamily: "Helvetica,sans-serif",
  };
  
  const total = {
    color: "#111",
    fontSize: "14px",
    display: "flex",
    margin: 0,
    fontFamily: "Helvetica,sans-serif",
  };
  
  const Categories = {
    color: "#868686",
    fontSize: isMdUp ? "10px" :'10px',
    fontWeight: "500",
    display: "flex",
    marginLeft: "6px",
    fontFamily: "Helvetica,sans-serif",
  };
  
  const Detail = {
    color: "#868686",
    fontSize: isMdUp ? "10px" :'10px',
    fontWeight: "500",
    display: "flex",
    
    fontFamily: "Helvetica,sans-serif",
  };

  
  
  const menu = {
    fontSize:isMdUp ? "11px": "11px",
    fontWeight: "600",
    color: "#111",

    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start'
  };
  
  const menu1 = {
    fontSize:isMdUp ? "9px": "9px",
    marginRight:isMdUp ? '12px' :'12px',
    fontWeight: "500",
    color: "grey",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    
    textAlign: "left", // Align text to the left
  };
  const titulo = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111",
    marginTop: "12px",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    textAlign: "left", // Align text to the left
  };

  return (
    <Box
      display="flex"
      
      alignItems="center"
      justifyContent="center"
      gap={1} // Añadir un espacio entre el contenedor de imágenes y EditPage
      sx={{flexDirection: isMdUp ? 'row' : 'column',width:'100%',padding: isMdUp ? '12px': '16px',
        mt:isMdUp ? 0: -6,marginTop:'80px'
      }}

    >
  
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%" // Asegura que el Box ocupe el 100% del ancho
      sx={{ width: "100%", mt:isMdUp ? -12: -12, ml:isMdUp ? 0:0,mb:12, }} // Añadir un poco de margen superior si es necesario
      >
    
      <Box
        textAlign="center"
        sx={{
          padding: '12px',
          width: '100%', // Asegura que el Box ocupe el 100% del ancho
          marginTop: '12px',
         
        }}
      >
        
        <Typography sx={{ ...titulo, textAlign: "left" }}>Order history - Order ID: 3</Typography>
        <Typography sx={{ ...menu1, textAlign: "left" }}>
          Check the status of recent orders, manage returns, and discover similar products
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          border: '1px solid #D7D7D7',
          padding: isMdUp ? '0 12px 4px' : '0 12px 4px',
          borderRadius: '6px',
          backgroundColor: "#ffff",
          marginBottom: '4px',
          width: '100%', // Asegura que el Box ocupe el 100% del ancho
        }}
      >

        
        <Box
          display="flex"
          flexDirection="row" // Usa 'row' en lugar de 'space-between' para que los elementos se alineen horizontalmente
          sx={{
            padding: '12px 0',
            alignItems: 'center',
            borderRadius: '2px',
            marginBottom: '0px',
            backgroundColor: "#ffff",
            width: '100%', // Asegura que el Box ocupe el 100% del ancho
          }}
        >
          <Box textAlign="center" sx={{ flex: 1 }}>
            <Typography sx={menu}>Order number</Typography>
            <Typography sx={{ ...menu1, marginTop: '12px' }}>WU998989123</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: 1 }}>
            <Typography sx={menu}>Date placed</Typography>
            <Typography sx={{ ...menu1, marginTop: '12px' }}>Jul 6, 2021</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: 1 }}>
            <Typography sx={menu}>Total Amount</Typography>
            <Typography sx={{ ...menu1, marginTop: '12px' }}>$160,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor:'#FFFFFF',
              borderRadius: "4px",
              flex: 1,
              marginTop: '0', // Ajusta el margen superior
              paddingLeft: '12px', // Ajusta el margen izquierdo para separarlo del contenido adyacente
            }}
          >
            <Typography sx={menu}>Status</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "2px 6px 0",
                alignItems: "center",
                width: 'auto',
                height: '2px',
                backgroundColor: "#2196F3",
                marginTop: '4px',
                borderRadius: "4px",
                flex: 1,
              }}
            >
              <Typography sx={{...menu1, marginBottom: '4px', color: 'white'}}>Completed</Typography>
            </Box>
            
          </Box>
        </Box>
    
      </Box>
    
        <Box
          sx={{
            width:isMdUp ? "100%" :'100%',
            height: "auto",
            marginTop:'16px',
            borderRadius: "24px",
            backgroundColor: "#ffff",
            borderRadius: "16px",
            border: '1px solid #D7D7D7',
            display: "flex",
            flexDirection: "row", // Alinea los elementos horizontalmente
            gap: "16px", // Espacio entre los elementos
            flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
            alignItems: "center", // Alinea verticalmente los elementos en el centro
            justifyContent: "space-between", // Distribuye el espacio entre los elementos
          }}
        >
 

          <Box
            sx={{
              width:isMdUp ? "100%" : '100%',
              height: "auto ",

              borderRadius: "24px",
              backgroundColor: "#ffff",
            }}
          >
            <Box
              sx={{ width: "100%", height: "auto", backgroundColor: "#fffff" }}
            >
            
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                  alignItems: "center",
                  padding: "16px", // Padding alrededor del contenedor
                }}
              >
                <Typography sx={title}>Product</Typography>
                <Typography sx={{ ...title, marginLeft:isMdUp? "102px" :'92px' }}>
                  Price{" "}
                
                </Typography>

                <Typography sx={{ ...title, marginRight: "20px" }}>
                  Cantidad{" "}
              
                </Typography>
   
              </Box>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#eeeeee",
                  color: "red",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Alinea los elementos verticalmente
                  padding: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml:isMdUp ? 1:0, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
               
                    padding: isMdUp? "8px" :'8px',
                  
                  }}
                >
                  <Typography sx={detalles}>Jordan Aasdasdir Max</Typography>
                  <Typography sx={Categories}>Size: L</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
                
              </Box>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Distribuye el espacio de manera uniforme
          padding: "16px",
          width: "auto",
    flex:isMdUp ? 0.7: 1,
        }}
      >
        <Typography sx={{ ...detalles, marginLeft: "4px" }}>
          $220.99
        </Typography>

        <Typography sx={{ ...detalles,marginRight:isMdUp ? "18px"  :'18px'}}>
          55pcs
        </Typography>
      </Box>
    </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#eeeeee",
                color: "red",
              }}
            />

          
<Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Alinea los elementos verticalmente
                  padding: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml:isMdUp ? 1:0, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
               
                    padding: isMdUp? "8px" :'8px',
                  
                  }}
                >
                  <Typography sx={detalles}>Jordan Aasdasdir Max</Typography>
                  <Typography sx={Categories}>Size: L</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
                
              </Box>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Distribuye el espacio de manera uniforme
          padding: "16px",
          width: "auto",
    flex:isMdUp ? 0.7: 1,
        }}
      >
        <Typography sx={{ ...detalles, marginLeft: "4px" }}>
          $220.99
        </Typography>

        <Typography sx={{ ...detalles,marginRight:isMdUp ? "18px"  :'18px'}}>
          55pcs
        </Typography>
      </Box>
    </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#eeeeee",
                color: "red",
              }}
            />

          
<Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Alinea los elementos verticalmente
                  padding: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml:isMdUp ? 1:0, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
               
                    padding: isMdUp? "8px" :'8px',
                  
                  }}
                >
                  <Typography sx={detalles}>Jordan Aasdasdir Max</Typography>
                  <Typography sx={Categories}>Size: L</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
                
              </Box>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Distribuye el espacio de manera uniforme
          padding: "16px",
          width: "auto",
    flex:isMdUp ? 0.7: 1,
        }}
      >
        <Typography sx={{ ...detalles, marginLeft: "4px" }}>
          $220.99
        </Typography>

        <Typography sx={{ ...detalles,marginRight:isMdUp ? "18px"  :'18px'}}>
          55pcs
        </Typography>
      </Box>
    </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#eeeeee",
                color: "red",
              }}
            />

            
<Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Alinea los elementos verticalmente
                  padding: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml:isMdUp ? 1:0, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
               
                    padding: isMdUp? "8px" :'8px',
                  
                  }}
                >
                  <Typography sx={detalles}>Jordan Aasdasdir Max</Typography>
                  <Typography sx={Categories}>Size: L</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
                
              </Box>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Distribuye el espacio de manera uniforme
          padding: "16px",
          width: "auto",
    flex:isMdUp ? 0.7: 1,
        }}
      >
        <Typography sx={{ ...detalles, marginLeft: "4px" }}>
          $220.99
        </Typography>

        <Typography sx={{ ...detalles,marginRight:isMdUp ? "18px"  :'18px'}}>
          55pcs
        </Typography>
      </Box>
    </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#eeeeee",
                color: "red",
              }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }} // Cambia la dirección del flex
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{
              padding: "12px",
              backgroundColor: "white",
              borderRadius: "16px",
              width: "695px",
              
            }}
          >
  {/* Comment Section */}
  <Box
    display="flex"
    flexDirection="column"
    alignItems="flex-start" // Cambiado a flex-start
    sx={{ marginBottom: "24px" }} // Añadido margen para separar las secciones
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ marginTop: '-12px', marginBottom: '12px', padding: isMdUp ? '0' : '6px' }}
    >
      <Typography sx={title}>Comment</Typography>
    </Box>
    <Box
      sx={{
        height: '120px',
        width: '360px',
        display: 'flex',
        alignItems: 'flex-start', // Cambia la alineación vertical a la parte superior
        justifyContent: 'flex-start', // Cambia la alineación horizontal a la izquierda
        border: '1px solid #D7D7D7',
        borderRadius: '12px',
        padding: isMdUp ? '16px' : '12px',
        boxSizing: 'border-box', // Asegura que el padding no afecte las dimensiones totales
      }}
    >
      <Typography sx={Detail}>Un regalo para alguien especial en una cartica, bello y precioso</Typography>
    </Box>
  </Box>

  <Box
              display="flex"
              flexDirection="column"
              width="360px"

            sx=
            {
              {
                padding: isMdUp ?'24px' :"8px",
              }
            }
            >
    <Box
      display="flex"
      flexDirection="column" // Cambiado a columna
      alignItems="flex-end"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="row" // Cada detalle y valor en fila
        justifyContent="space-between"
        width="100%"
        sx={{ marginBottom: "8px" }} // Espacio entre cada par detalle-valor
      >
        <Typography sx={Detail}>SUBTOTAL:</Typography>
        <Typography sx={total}>$772.90</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row" // Cada detalle y valor en fila
        justifyContent="space-between"
        width="100%"
        sx={{ marginBottom: "8px" }} // Espacio entre cada par detalle-valor
      >
        <Typography sx={Detail}>Shipping Charge:</Typography>
        <Typography sx={total}>$15.00</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row" // Cada detalle y valor en fila
        justifyContent="space-between"
        width="100%"
        sx={{ marginBottom: "8px" }} // Espacio entre cada par detalle-valor
      >
        <Typography sx={Detail}>ESTIMATED TAX:</Typography>
        <Typography sx={total}>$00.00</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row" // Cada detalle y valor en fila
        justifyContent="space-between"
        width="100%"
      >
        <Typography sx={{ ...total, fontWeight: "550" }}>
          TOTAL(USD):
        </Typography>
        <Typography sx={{ ...total, fontWeight: "550" }}>
          $638.99
        </Typography>
      </Box>
    </Box>


            </Box>
          </Box>
        </Box>
      </Box>


    </Box>
  );
};

export default InvoiceLeftPdf;
