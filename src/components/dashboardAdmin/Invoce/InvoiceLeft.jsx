import {
    Box,
    Card,
    CardMedia,
    Checkbox,
    Divider,

    IconButton,
    InputBase,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import SearchIcon from "@mui/icons-material/Search";
  import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
  import ImportExportIcon from "@mui/icons-material/ImportExport";
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import TuneIcon from '@mui/icons-material/Tune';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InvoiceRight from "./InvoiceRight";
const BoxPrincipal = {
  width: "460px",
  height: "100px",
  borderRadius: "12px",
  backgroundColor: "red",
  padding: "24px 12px 24px ",
};

const Container = {
    display: 'flex',
    justifyContent: 'space-between', // Aligns items horizontally with space between them
    gap: 1, // Space between the boxes
  };

  const settings={
    color: "#7e7e7e",
    fontSize: "10px",
    fontWeight: "550",
    display: "flex",
    padding: "6px 24px",
    fontFamily: "Helvetica,sans-serif",
  
  }
  
  const Items = {
    color: "#7e7e7e",
    fontSize: "12px",
    fontWeight: "550",
    display: "flex",
    padding: "6px 24px",
    fontFamily: "Helvetica,sans-serif",
  };
  
  const title = {
    color: "#111",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    padding: "6px 24px",
    margin:0,
    marginLeft:'8px',
    
    fontFamily: "Helvetica,sans-serif",
  };
  
  const detalles = {
    color: "#111",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    marginLeft:'6px',
    fontFamily: "Helvetica,sans-serif",
  };
  
  const Available = {
    color: "#2ccebe",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    padding: "8px",
   
    fontFamily: "Helvetica,sans-serif",
  };
  const Disable = {
    color: "#e75751",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    padding: "14px",
    
  marginTop:'-6px',
  marginBottom:'-6px',
    fontFamily: "Helvetica,sans-serif",
  };
  
  const Categories = {
    color: "#868686",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    marginLeft:'6px',
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
    sx={{padding: '16px', width:'300px'}} // Añadir un poco de padding si es necesario
  >
           <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="flex-start" 
        gap={2} // Añadir espacio entre las filas de imágenes
      >
      
        <Box sx={Container}>
        <Box sx={BoxPrincipal}>
          <Typography>Invoice Number</Typography>
          <Typography>No:#6541234</Typography>
          <Typography>Issued Date: AGOST 28,2024</Typography>
          <Typography>Due Date: Apr 02, 2024</Typography>
        </Box>
        <Box sx={BoxPrincipal}>
          <Typography>Invoice to</Typography>
          <Typography>Cumana-Sucre</Typography>
          <Typography>Calle la florida n°52, Sector la Copita</Typography>
          <Typography>6101 Sucre</Typography>
        </Box>
      </Box>
      <Box
    sx={{
      width: "auto",
      height: "auto",
      border: "1px solid red",
      padding: "24px 24px",
      borderRadius:'16px',
      display: "flex",
      flexDirection: "row", // Alinea los elementos horizontalmente
      gap: "16px", // Espacio entre los elementos
      flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
      alignItems: "center", // Alinea verticalmente los elementos en el centro
      justifyContent: "space-between", // Distribuye el espacio entre los elementos
    }}
  >
        <Box >
            <Typography>
                Item Detail
            </Typography>
            <Typography> Edit</Typography>
        </Box>
        <Box
        sx={{
          width: "100%",
          height: "auto",
          border: "1px solid #CFE4E4",
          borderRadius: "24px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ width: "100%", height: "auto", backgroundColor: "#fffff" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
              alignItems: "center",
              padding: "16px", // Padding alrededor del contenedor
            }}
          >
           
            <Typography sx={title}>Product</Typography>
            <Typography sx={{ ...title, marginLeft: "186px" }}>
              Price <ImportExportIcon  sx={{color:'red', paddingLeft:'12px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
         
            <Typography sx={{ ...title, marginLeft: "36px" }}>
              Quantity <ImportExportIcon  sx={{color:'red', paddingLeft:'12px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
            <Typography sx={{ ...title, marginRight: "62px" }}>
              Total Amount <ImportExportIcon  sx={{color:'red', paddingLeft:'16px', fontSize:'18px',margin:'2px'}}/>
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
            paddingRight:'12px',
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
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={{
              border: "1px solid #149285",
              width: "auto",
              height: "auto",
              borderRadius: "12px",
            
            }}
          >
           
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
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
            paddingRight:'12px',
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
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={{
              border: "1px solid #e75751",
              width: "auto",
              backgroundColor:'#fff3f4',
              height: "auto",
              
              borderRadius: "12px",
            }}
          >
         
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
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
            paddingRight:'12px',
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
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={{
              border: "1px solid #149285",
              width: "auto",
              height: "auto",
              borderRadius: "12px",
            
            }}
          >
         
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
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
            paddingRight:'12px',
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
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={{
              border: "1px solid #149285",
              width: "auto",
              height: "auto",
              borderRadius: "12px",
            
            }}
          >
         
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
      </IconButton>
        </Box>
        </Box>
      </Box>
      <Box>
      <Box>
        <Typography>
            Comment
        </Typography>
        <Box>
            <Typography>
                Add a Note. This is a small Note section that only the seller can see.
            </Typography>
        </Box>
        <Box>
        <Box>
            <Typography>
            SUBTOTAL:
            </Typography>

            <Typography>
                $772.90
            </Typography>

            </Box>
            <Box>
            <Typography>
            Discount:
            </Typography>
            <Typography>
            $60.00
                </Typography>
                </Box>
                <Box>
                <Typography>
                Shipping Charge:
                </Typography> 
                <Typography>
                $15.00
                </Typography>
                </Box>
                <Box>
                <Typography>
                ESTIMATED TAX:
                </Typography> 
                <Typography>
                $00.00
                </Typography>
                </Box>
                <Box>
                <Typography>
                TOTAL(USD):
                </Typography> 
                <Typography>
                $638.999
                </Typography>
                </Box>
        </Box>
        </Box>
      </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end" // Alinea InvoiceRight a la derecha
        sx={{ width: '100%', mt: 2 }} // Añadir un poco de margen superior si es necesario
      >
        <InvoiceRight />
      </Box>
      </Box>
   
  );
};

export default InvoiceLeft;
