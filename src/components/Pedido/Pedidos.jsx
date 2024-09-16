"use client";
import { Box, CardMedia, Divider, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';


const Pedidos = ({ onShowInvoice }) => {


  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
 

  const titulo = {
    fontSize: "14px",
    
    fontWeight: "600",
    color: "#111",
    marginTop: "12px",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    textAlign: "left", // Align text to the left
  };
  
    
  const menu = {
    fontSize:isMdUp ? "14px": "11px",
    fontWeight: "600",
    color: "#111",
  
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start'
  };
  
  const detalles = {
    fontSize: "12px",
    fontWeight: "500",
    color: "grey",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    marginBottom: '12px',
    textAlign: "left", // Align text to the left
  };
  
  const invoice = {
    fontSize: "12px",
    fontWeight: "500",
    color: "#111",
    
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      color: 'orange',
    },
  };
  
  
  const tituloProducto = {
    fontSize: isMdUp ? '12px':"11px",
    fontWeight: "600",
    color: "#111",
    marginTop: isMdUp ? "28px": '14px',
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    textAlign: "left", // Align text to the left
    marginLeft:isMdUp ? 0:'-8px',
  };
  
  const detalleProductos = {
    fontSize: "10px",
    fontWeight: "600",
    color: "grey",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    marginBottom:isMdUp ? '2px': '0',
    marginTop: '2px',
    marginLeft:isMdUp ? 0:'-8px',
    textAlign: "left", // Align text to the left
  };
  
  const delivered = {
    fontSize: isMdUp ? '12px':"10px",
    fontWeight: "600",
    color: "#111",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    textAlign: "left", // Align text to the left
  };
  
  const viewProduct = {
    fontSize: "12px",
    fontWeight: "700",
    color: "orange",
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
    cursor: 'pointer',
    textAlign: "left", // Align text to the left
  };
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ padding: '12px', alignItems: 'center' }}
    >
      <Box
        sx={{
          display: isMdUp ? 'Block' : 'none',
          width: "101.58%",
          height: "122px",
          bgcolor: "black",
          marginTop: '-11px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            marginTop: '-12px',
            marginLeft: '-72px',
          }}
        >
          <img
            src="https://en.bloomingdales.qa/on/demandware.static/-/Library-Sites-BloomingDalesSharedLibrary/default/dw69be0108/FINAL-IMAGES/BRAND-HEADERS/desktop-brand/adidas.jpg"
            alt="logo"
            style={{
              width: "50%",
              height: '1%',
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: isMdUp ? 'none' : 'Block',

          marginTop: '-11px'
        }}
      >
      <img
        src="https://en.bloomingdales.qa/on/demandware.static/-/Library-Sites-BloomingDalesSharedLibrary/default/dw69be0108/FINAL-IMAGES/BRAND-HEADERS/desktop-brand/adidas.jpg"
        alt="logo"
        style={{
          width: "105%",
          height: "100px",
          marginLeft:'-12px',
          marginTop: '-32px',
          zIndex: "111",
        }}
      />
  </Box>
      <Box textAlign="center" sx={{ padding: '12px', alignItems: 'center', width: isMdUp ?'55.5%' : '100%', marginTop: '12px' }}>
        <Typography sx={{ ...titulo, textAlign: "left" }}>Order history</Typography>
        <Typography sx={{ ...detalles, textAlign: "left" }}>Check the status of recent orders, manage returns, and discover similar products</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{ border: '1px solid #D7D7D7', padding: isMdUp ? '0 32px 8px' : '0 12px 0', alignItems: 'center', borderRadius: '6px', marginBottom: '12px', height: 'auto', width: isMdUp ? 'auto' :'460px', }}
      >
        <Divider sx={{ width: '108%', position: 'relative', top: '72px' }} />
        
        <Box
          display="flex"
          flexDirection="space-between"
          sx={{ padding:isMdUp ? '12px 14px 8px' : '6px 0 8px', alignItems: 'center', borderRadius: '2px', marginBottom: '12px', width: '100%', marginBottom: '6px', marginLeft: isMdUp ? '-32px' : 0}}
        >
          <Box textAlign="center" sx={{ flex: isMdUp ? 0.4 :1}}>
            <Typography sx={menu}>Order number</Typography>
            <Typography sx={{ ...detalles, marginTop: '12px' }}>WU998989123</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: isMdUp ? 0.4 :1}}>
            <Typography sx={menu}>Date place</Typography>
            <Typography sx={{ ...detalles, marginTop: '12px' }}>Jul 6, 2021</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: isMdUp ?  0.5 : 1}}>
            <Typography sx={menu}>Total Amount</Typography>
            <Typography sx={{ ...detalles, marginTop: '12px' }}>$160,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "4px",
              flex: 1,
              marginTop: '-14px',
              marginLeft: '-12px',
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
                backgroundColor: "#FFC107",
                marginTop: '6px',
                borderRadius: "4px",
                flex: 1,
              }}
            >
              <Typography sx={{ ...detalles, marginBottom: '0px', color: 'white' }}>Inprogress</Typography>
            </Box>
            
          </Box>
          <Box
            sx={{
              border: '1px dashed orange',
              borderRadius: '24px',
              width: '100px',
              display: isMdUp ? 'flex' : 'none',
              padding: "12px 14.6px",
              marginRight: '-42px',
              marginTop: '-32px',
              alignItems: "center",
              height: '32px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
            onClick={onShowInvoice} // Llama a la función cuando se hace clic
          >
            <Typography sx={invoice}>View Invoice</Typography>
          </Box>



  </Box>
      
        {/* Primer CardMedia */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Alinea los elementos verticalmente
            padding: "12px",
            width: '100%',
            marginTop:'-16px',
            marginRight: isMdUp ? 0 :'52px',
            width: isMdUp ? '800px' :'auto',
          }}
        >
          <CardMedia
            component="img"
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
            alt="logo"
            sx={{
              width:isMdUp ? 100: 86,
              height:isMdUp ? 100: 86,
              borderRadius: 1, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
              margin: 0, // Elimina el margen
              ml:isMdUp ? -2: -15,
            }}
          />


          
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Alinea los elementos en una columna
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "6px",
              marginTop: '-6px',
              marginLeft: '16px',
              width: isMdUp ? '800px' :'auto',
            }}
          >

            <Box
              sx={{
                display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
                width: isMdUp ? '100%' :'auto',
                marginTop:isMdUp ?'-24px': '-24px',
                
              }}
            >
              <Typography sx={{...tituloProducto, marginBottom: isMdUp ? '6px':0, marginTop:isMdUp ? '24px':'24px'}}>Parrella Chaqueta De cuero</Typography>
              {isMdUp && (
        <Typography sx={tituloProducto}>
          $79.999
        </Typography>
      )}{!isMdUp && (
              <Box
      sx={{
        position: 'relative', // El contenedor necesita ser relativo para que el absoluto funcione
      }}
    >
      <Typography
        sx={{...tituloProducto,
          position: 'absolute', // Aplica posición absoluta
          top: '-6px', // Posiciona a 20px desde la parte superior del contenedor
          left: '120px', // Puedes ajustar esto según sea necesario para alinear horizontalmente
          right: 0, // Esto asegura que el componente esté centrado horizontalmente
          textAlign: 'center', // Opcional: centra el texto horizontalmente
        }}
      >
        $19,902
      </Typography>
   
    </Box>
     )}
            </Box>
            
            <Typography sx={{...detalleProductos, width: '100%'}}>
              aqui
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Cantidad: 3
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Talla: L
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', marginRight: '4px'}}>
              <Typography sx={{...detalleProductos, width: '100%'}}>
                Order ID -
              </Typography>
              <Typography sx={{...detalleProductos, width: '100%', fontWeight: 600, color: '#111', marginLeft: '6px'}}>
                #212393812739Chloe
              </Typography>
            </Box>
          </Box>
          
        </Box>
          
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
            width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
            marginTop: '2px',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
              ml: isMdUp ? -1: -0.5,
              
            }}
          >
            <Box
              sx={{
                backgroundColor: '#22C55E',
                borderRadius: '100%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight:  '8px', // Espacio entre el ícono y el texto
              }}
            >
              <CheckIcon sx={{ color: 'white', fontSize: '12px' }} />
            </Box>
            <Typography sx={delivered}>Delivered On January 12, 2021</Typography>
          </Box>
         
          <Box
            sx={{
              border: '1px dashed orange',
              borderRadius: '24px',
              width: '100px',
              display: isMdUp ? 'none' : 'flex',
              padding: "12px 14.6px",
              alignItems: "center",
              height: '24px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
            onClick={onShowInvoice} // Llama a la función cuando se hace clic
          >
            <Typography sx={invoice}>View Invoice</Typography>
          </Box>
          
          <Typography sx={viewProduct}>View Product</Typography>
        </Box>
        <Divider sx={{ marginTop:'-6px', marginBottom:'21px', width: '108%' }} /> {/* Línea horizontal para separar CardMedia */}
    

          
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
            width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
            marginTop: '2px',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
              ml: -1,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#22C55E',
                borderRadius: '100%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px', // Espacio entre el ícono y el texto
              }}
            >
              <CheckIcon sx={{ color: 'white', fontSize: '12px' }} />
            </Box>
            <Typography sx={delivered}>Delivered On January 12, 2021</Typography>
          </Box>
          <Typography sx={viewProduct}>View Product</Typography>
         
        </Box>

      
      </Box>
      <Box 
        display="flex" 
        flexDirection="column" 
        sx={{ border: '1px solid #D7D7D7', padding: '12px 32px 8px', alignItems: 'center', borderRadius: '6px', marginBottom: '12px',height:'auto' }} // Centrar el contenido dentro del contenedor de detalles
      >
         <Divider sx={{width: '108%',position:'relative',top:'72px' }} /> {/* Línea horizontal para separar CardMedia */}
        <Box 
          display="flex" 
          flexDirection="space-between" 
          sx={{ padding: '12px 32px 8px', alignItems: 'center', borderRadius: '2px', marginBottom: '12px', width: '100%',marginBottom:'6px',marginLeft:'-32px' }} // Centrar el contenido dentro del contenedor de detalles
        >
          <Box textAlign="center" sx={{ flex: 0.4 }}>
            <Typography sx={menu}>Order number</Typography>
            <Typography sx={{...detalles, marginTop: '6px'}}>WU998989123</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: 0.4 }}>
            <Typography sx={menu}>Date place</Typography>
            <Typography sx={{...detalles, marginTop: '6px'}}>Jul 6, 2021</Typography>
          </Box>
          <Box textAlign="center" sx={{ flex: 0.5 }}>
            <Typography sx={menu}>Total Amount</Typography>
            <Typography sx={{...detalles, marginTop: '6px'}}>$160,000</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Organiza los elementos en una columna
              alignItems: "flex-start",
              borderRadius: "4px",
              flex: 1,  
              marginTop: '-12px',
              marginLeft: '-12px',
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
              <Typography sx={{...detalles, marginBottom: '0px', color: 'white'}}>Completed</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px dashed orange', // O '2px dotted orange' para puntos
              borderRadius: '24px',
              width: '100px',
              display: "flex",
              padding: "12px 14.6px",
              marginRight:'-42px',
              marginTop:'-32px',
              alignItems: "center",
              height: '32px',
              cursor: 'pointer',
              transition: 'background 0.3s ease', // Para una transición suave
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
          >
            <Typography sx={invoice}>View Invoice</Typography>
         
          </Box>
        </Box>

        {/* Primer CardMedia */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Alinea los elementos verticalmente
            padding: "12px",
            width: '100%',

            marginTop:'-16px',
            width: '800px',
          }}
        >
          <CardMedia
            component="img"
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
            alt="logo"
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
              margin: 0, // Elimina el margen
              ml: -2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Alinea los elementos en una columna
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "6px",
              marginTop: '-6px',
              marginLeft: '16px',
              width: '800px',
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
                marginTop: '-24px'
              }}
            >
              <Typography sx={{...tituloProducto, marginBottom: '6px'}}>Parrella Chaqueta De cuero</Typography>
              <Typography sx={tituloProducto}>$79.999</Typography>
            </Box>
            
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Half Moon Shoulder Clothes
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Cantidad: 3
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Talla: L
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', marginRight: '4px'}}>
              <Typography sx={{...detalleProductos, width: '100%'}}>
                Order ID -
              </Typography>
              <Typography sx={{...detalleProductos, width: '100%', fontWeight: 600, color: '#111', marginLeft: '6px'}}>
                #212393812739Chloe
              </Typography>
            </Box>
          </Box>
          
        </Box>
          
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
            width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
            marginTop: '2px',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
              ml: -1,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#22C55E',
                borderRadius: '100%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px', // Espacio entre el ícono y el texto
              }}
            >
              <CheckIcon sx={{ color: 'white', fontSize: '12px' }} />
            </Box>
            <Typography sx={delivered}>Delivered On January 12, 2021</Typography>
          </Box>
          <Typography sx={viewProduct}>View Product</Typography>
        </Box>
        <Divider sx={{ marginTop:'-6px', marginBottom:'21px', width: '108%' }} /> {/* Línea horizontal para separar CardMedia */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Alinea los elementos verticalmente
            padding: "12px",
            width: '100%',
            marginTop:'-16px',
            width: '800px',
          }}
        >
          <CardMedia
            component="img"
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
            alt="logo"
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
              margin: 0, // Elimina el margen
              ml: -2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Alinea los elementos en una columna
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "6px",
              marginTop: '-6px',
              marginLeft: '16px',
              width: '800px',
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
                marginTop: '-24px'
              }}
            >
              <Typography sx={{...tituloProducto, marginBottom: '6px'}}>Parrella Chaqueta De cuero</Typography>
              <Typography sx={tituloProducto}>$79.999</Typography>
            </Box>
            
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Half Moon Shoulder Clothes
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Cantidad: 3
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Talla: L
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', marginRight: '4px'}}>
              <Typography sx={{...detalleProductos, width: '100%'}}>
                Order ID -
              </Typography>
              <Typography sx={{...detalleProductos, width: '100%', fontWeight: 600, color: '#111', marginLeft: '6px'}}>
                #212393812739Chloe
              </Typography>
            </Box>
          </Box>
          
        </Box>
          
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
            width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
            marginTop: '2px',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
              ml: -1,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#22C55E',
                borderRadius: '100%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px', // Espacio entre el ícono y el texto
              }}
            >
              <CheckIcon sx={{ color: 'white', fontSize: '12px' }} />
            </Box>
            <Typography sx={delivered}>Delivered On January 12, 2021</Typography>
          </Box>
          <Typography sx={viewProduct}>View Product</Typography>
        </Box>
        <Divider sx={{ marginTop:'-6px', marginBottom:'21px', width: '108%' }} /> {/* Línea horizontal para separar CardMedia */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Alinea los elementos verticalmente
            padding: "12px",
            width: '100%',
            marginTop:'-16px',
            width: '800px',
          }}
        >
          <CardMedia
            component="img"
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
            alt="logo"
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1, // 12px en el diseño de Material-UI se traduce en 1.5 (0.25rem por defecto)
              margin: 0, // Elimina el margen
              ml: -2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Alinea los elementos en una columna
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "6px",
              marginTop: '-6px',
              marginLeft: '16px',
              width: '800px',
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
                marginTop: '-24px'
              }}
            >
              <Typography sx={{...tituloProducto, marginBottom: '6px'}}>Parrella Chaqueta De cuero</Typography>
              <Typography sx={tituloProducto}>$79.999</Typography>
            </Box>
            
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Half Moon Shoulder Clothes
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Cantidad: 3
            </Typography>
            <Typography sx={{...detalleProductos, width: '100%'}}>
              Talla: L
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', marginRight: '4px'}}>
              <Typography sx={{...detalleProductos, width: '100%'}}>
                Order ID -
              </Typography>
              <Typography sx={{...detalleProductos, width: '100%', fontWeight: 600, color: '#111', marginLeft: '6px'}}>
                #212393812739Chloe
              </Typography>
            </Box>
          </Box>
          
        </Box>
          
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Alinea verticalmente en el centro
            width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
            marginTop: '2px',
            marginBottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
              ml: -1,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#22C55E',
                borderRadius: '100%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px', // Espacio entre el ícono y el texto
              }}
            >
              <CheckIcon sx={{ color: 'white', fontSize: '12px' }} />
            </Box>
            <Typography sx={delivered}>Delivered On January 12, 2021</Typography>
          </Box>
          <Typography sx={viewProduct}>View Product</Typography>
        </Box>

      
      </Box>

      <Box>
      <Box
              sx={{
                display: "flex",
                padding: "6px 12px",
                alignItems: "center",
                width: 'auto',
                height: 'auto',
                backgroundColor: "#CC6200",
                marginTop: '4px',
                borderRadius: "4px",
              }}
            >
          <Typography sx={{...detalles, marginBottom: '0px', color: 'white'}}> Continue Shopping</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Pedidos;
