import {
  Box,
  Card,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InvoiceRight from "./InvoiceRight";
import { Field, Form, Formik } from "formik";

import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';

const BoxPrincipal = {
  width: "355px",
  height: "150px",
  borderRadius: "12px",
  backgroundColor: "red",
  padding: "24px 24px 24px ",
};

const Container = {
  display: "flex",
  justifyContent: "space-between", // Aligns items horizontally with space between them
  gap: 1, // Space between the boxes
  width:'720px',

};

const Header = {
  color: "#ffff",
  fontSize: "14px",

  display: "flex",
  padding: "6px 0",
  fontFamily: "Helvetica,sans-serif",
};
const Header2 = {
  color: "#111",
  fontSize: "14px",
fontWeight:540,
  display: "flex",
  padding: "6px 0",
  fontFamily: "Helvetica,sans-serif",
};


const title = {
  color: "#111",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  padding: "6px 6px",
  margin: 0,

  fontFamily: "Helvetica,sans-serif",
};

const detalles = {
  color: "#111",
  fontSize: "12px",
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
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  marginLeft: "6px",
  fontFamily: "Helvetica,sans-serif",
};

const Detail = {
  color: "#868686",
  fontSize: "12px",

  display: "flex",
  
  fontFamily: "Helvetica,sans-serif",
};

const Edit = {
  color: "#777777",
  fontSize: "12px",
padding:'6px',
  display: "flex",
  fontWeight:550,
  fontFamily: "Helvetica,sans-serif",
};

const InvoiceLeft = () => {
  return (
    <Box
      display="flex"
      flexDirection="row" // Cambiar la dirección a fila
      alignItems="flex-start"
      justifyContent="flex-start"
      gap={2} // Añadir un espacio entre el contenedor de imágenes y EditPage
      sx={{ padding: "16px", width: "300px", }} // Añadir un poco de padding si es necesario
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2} // Añadir espacio entre las filas de imágenes
       
      >
        <Box sx={Container}>
          <Box sx={{...BoxPrincipal,backgroundColor:'#44a6e9'}}>
            <Typography sx={Header}>Invoice Number</Typography>
            <Typography sx={Header}>No:#6541234</Typography>
            <Typography sx={Header}>Issued Date: AGOST 28,2024</Typography>
            <Typography sx={Header}>Due Date: Apr 02, 2024</Typography>
          </Box>
          <Box sx={{...BoxPrincipal,backgroundColor:'#fec600'}}>
             <Typography sx={Header2}>Invoice to</Typography>
             <Typography sx={Header2}>Cumana-Sucre</Typography>
             <Typography sx={Header2}>Calle la florida n°52, Sector la Copita</Typography>
             <Typography sx={Header2}>6101 Sucre</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "720px",
            height: "auto",
          
            borderRadius: "24px",
            backgroundColor: "#ffff",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "row", // Alinea los elementos horizontalmente
            gap: "16px", // Espacio entre los elementos
            flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
            alignItems: "center", // Alinea verticalmente los elementos en el centro
            justifyContent: "space-between", // Distribuye el espacio entre los elementos
          }}
        >
          <Box display="flex" alignItems="center"   sx={{...
              Container,padding:'16px'}}
          >
            <Typography sx={title}>Item Detail</Typography>
            <Box display="flex" alignItems="center"  sx={{margin:0,width:'86px',height:'32px', borderRadius:'16px',backgroundColor:'#fafafa',border:'1px solid #eeeeee'}}> 
              <EditRoadOutlinedIcon sx={{fontSize:'20px', color:'#777777',marginLeft:'12px'}}/>
            <Typography sx={Edit}> Edit</Typography>
            </Box>
          </Box>
        
         
          <Box
            sx={{
              width: "720px",
              height: "auto ",
              
              borderRadius: "24px",
              backgroundColor: "#ffff",
            }}
          >
            <Box
              sx={{ width: "100%", height: "auto", backgroundColor: "#fffff" }}
            >
                <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#eeeeee",
                  marginTop:'-12px',
                  color: "red",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
                  alignItems: "center",
                  padding: "16px", // Padding alrededor del contenedor
                }}
              >
                
                <Typography sx={title}>Product</Typography>
                <Typography sx={{ ...title, marginLeft: "164px" }}>
                  Price{" "}
                  <ImportExportIcon
                    sx={{
                      color: "red",
                      paddingLeft: "12px",
                      fontSize: "18px",
                      margin: "2px",
                    }}
                  />
                </Typography>

                <Typography sx={{ ...title, marginLeft: "36px" }}>
                  Quantity{" "}
                  <ImportExportIcon
                    sx={{
                      color: "red",
                      paddingLeft: "12px",
                      fontSize: "18px",
                      margin: "2px",
                    }}
                  />
                </Typography>
                <Typography
                  sx={{ ...title, marginLeft: "16px", marginRight: "32px" }}
                >
                  Total Amount{" "}
                  <ImportExportIcon
                    sx={{
                      color: "red",
                      paddingLeft: "16px",
                      fontSize: "18px",
                      margin: "2px",
                    }}
                  />
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
                    ml: 1, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "16px",
                  }}
                >
                  <Typography sx={detalles}>Jordan Air Max</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
              </Box>
              <Typography sx={{ ...detalles, marginLeft: "-4px" }}>
                $220.99
              </Typography>
              <Box
                sx={{
                  border: "1px solid #149285",
                  width: "auto",
                  height: "auto",
                  borderRadius: "12px",
                  marginLeft: "-12px",
                }}
              ></Box>
              <Typography sx={{ ...detalles, marginRight: "38px" }}>
                55pcs
              </Typography>
              <Typography
                sx={{ ...detalles, marginLeft: "24px", marginRight: "24px" }}
              >
                $854.226
              </Typography>
              <IconButton>
                <Box
                  sx={{
                    backgroundColor: "#ececec",
                    borderRadius: "8px",
                    height: "42px",
                    marginLeft: "-24px",
                  }}
                ></Box>
              </IconButton>
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
                  image="https://kissuomo.it/cdn/shop/files/nike-sneakers-air-jordan-4-retro-seafoam4-7826.jpg?v=1690647221&width=800"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml: 1, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "16px",
                  }}
                >
                  <Typography sx={detalles}>Jordan Air Max</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
              </Box>
              <Typography sx={{ ...detalles, marginLeft: "-4px" }}>
                $220.99
              </Typography>
              <Box
                sx={{
                  border: "1px solid #149285",
                  width: "auto",
                  height: "auto",
                  borderRadius: "12px",
                  marginLeft: "-12px",
                }}
              ></Box>
              <Typography sx={{ ...detalles, marginRight: "38px" }}>
                55pcs
              </Typography>
              <Typography
                sx={{ ...detalles, marginLeft: "24px", marginRight: "24px" }}
              >
                $854.226
              </Typography>
              <IconButton>
                <Box
                  sx={{
                    backgroundColor: "#ececec",
                    borderRadius: "8px",
                    height: "42px",
                    marginLeft: "-24px",
                  }}
                ></Box>
              </IconButton>
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
                  image="https://nikeclprod.vtexassets.com/arquivos/ids/982083/FN3108_247_A_PREM.jpg?v=638479383645300000"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml: 1, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "16px",
                  }}
                >
                  <Typography sx={detalles}>Jordan Air Max</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
              </Box>
              <Typography sx={{ ...detalles, marginLeft: "-4px" }}>
                $220.99
              </Typography>
              <Box
                sx={{
                
                  width: "auto",
                  height: "auto",
                  borderRadius: "12px",
                  marginLeft: "-12px",
                }}
              ></Box>
              <Typography sx={{ ...detalles, marginRight: "38px" }}>
                55pcs
              </Typography>
              <Typography
                sx={{ ...detalles, marginLeft: "24px", marginRight: "24px" }}
              >
                $854.226
              </Typography>
              <IconButton>
                <Box
                  sx={{
                    backgroundColor: "#ececec",
                    borderRadius: "8px",
                    height: "42px",
                    marginLeft: "-24px",
                  }}
                ></Box>
              </IconButton>
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
                  image="https://nikeclprod.vtexassets.com/arquivos/ids/885556/FB8618_330_A_PREM.jpg?v=638356784408330000"
                  alt="logo"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
                    margin: 0, // Elimina el margen
                    ml: 1, // margin-left: 8px, se traduce en 1 (0.25rem por defecto)
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los elementos en una columna
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "16px",
                  }}
                >
                  <Typography sx={detalles}>Jordan Air Max</Typography>
                  <Typography sx={Categories}>Category: Shoes</Typography>
                </Box>
              </Box>
              <Typography sx={{ ...detalles, marginLeft: "-4px" }}>
                $220.99
              </Typography>
              <Box
                sx={{
                 
                  width: "auto",
                  height: "auto",
                  borderRadius: "12px",
                  marginLeft: "-12px",
                }}
              ></Box>
              <Typography sx={{ ...detalles, marginRight: "38px" }}>
                55pcs
              </Typography>
              <Typography
                sx={{ ...detalles, marginLeft: "24px", marginRight: "24px" }}
              >
                $854.226
              </Typography>
              <IconButton>
                <Box
                  sx={{
                    backgroundColor: "#ececec",
                    borderRadius: "8px",
                    height: "42px",
                    marginLeft: "-24px",
                  }}
                ></Box>
              </IconButton>
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
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{padding:'12px',backgroundColor: "white",borderRadius:'16px',width:'695px'}}
        >
          {/* Comment Section */}
          <Box
    display="flex"
    flexDirection="column"
    alignItems="flex-start" // Cambiado a flex-start
    marginBottom="16px"
  >
            <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Typography sx={title}>Comment</Typography>
        </Box>
         
          
            <Formik
              initialValues={{ notes: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {() => (
                <Form>
                  <Field
                    as={TextField}
                    multiline
                    name="notes"
                    placeholder="Add a Note. This is a small Note section that only the seller can see."
                    FormHelperTextProps={{
                      sx: { fontSize: "0.6rem", color: "#f44336" },
                    }}
                    sx={{
                      "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root": {
                        fontSize: "0.8rem",
                        height: "120px",
                        width: "360px", // Ajusta el ancho aquí
                        display: "flex",
                        borderRadius: "12px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      },
                      marginTop: "8px",
                    }}
                  />
                </Form>
              )}
            </Formik>
          </Box>

          {/* Totals Section */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            width="360px"
            padding="24px"
            mt="24px"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              width="100%"
            >
              <Box display="flex" justifyContent="space-between" width="100%" sx={{marginBottom:'4px'}}>
                <Typography sx={Detail}>SUBTOTAL:</Typography>
                <Typography sx={total}>$772.90</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" width="100%" sx={{marginBottom:'4px'}}>
              <Typography sx={Detail}>Discount:</Typography>
              <Typography sx={total}>$60.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" width="100%" sx={{marginBottom:'4px'}}>
              <Typography sx={Detail}>Shipping Charge:</Typography>
              <Typography sx={total}>$15.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" width="100%" sx={{marginBottom:'4px'}}>
              <Typography sx={Detail}>ESTIMATED TAX:</Typography>
              <Typography sx={total}>$00.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" width="100%" sx={{marginBottom:'4px'}}>
                <Typography sx={{...total,fontWeight:'550',}}>TOTAL(USD):</Typography>
                <Typography  sx={{...total,fontWeight:'550',}}>$638.99</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
     
      <Box
        display="flex"
        justifyContent="flex-end" // Alinea InvoiceRight a la derecha
        sx={{ width: "100%", mt: 2, ml: 18.5 }} // Añadir un poco de margen superior si es necesario
      >
        <InvoiceRight />
      </Box>
    </Box>
  );
};

export default InvoiceLeft;
