import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { TYPES } from '@/actions/ShoppingActions';
import CartItemsPay from "./Cart/CartItemsPay";
import { ProSidebar } from "react-pro-sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
const titulo = {
  fontSize: '0.9375rem',
  color: '#111',
  marginBottom:'-12px',
  textAlign: 'center',
  fontWeight: 700,
};

const totalStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  marginBottom: "-12px",
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
};

const SadStyle = {
  verticalAlign: 'middle',
  fontSize: "20px",
  marginTop: "-2px",
};

const DetailsPay = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, total } = useSelector((state) => state.cart);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <>
      {total > 0 && (
        <>
          {/* Contenedor principal con scroll */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor:'#f5f5f5',
              marginTop:'0px',
              marginTop:'102px',
            height:'460px',
              overflowY: "auto",
              zIndex: 1000,
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "24px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(208, 208, 208)",
                borderRadius: "24px",
              },
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#f5f5f5",height:'46px' }}>
                <Typography sx={{ ...titulo,  fontWeight: 700 }}>PRODUCTOS</Typography>
             
              </Box>
              {isSmallScreen && (
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#111",
            textAlign: "flex-start",
            
            marginTop: "6px",
         
          }}
        />
      )}
              {!isSmallScreen && (
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#111",
            textAlign: "flex-start",
            
            marginTop: "6px",
           
          }}
        />
      )}
              <ProSidebar>
                <Box flexGrow={1} p={2}>
                  {cart.map((item, index) => (
                    <CartItemsPay key={index} data={item} />
                  ))}
                </Box>
              </ProSidebar>
            </Box>
          </Box>

          {/* Contenedor para el total, fuera del scroll */}
          <Box sx={{ 
  display: 'flex', 
  justifyContent: 'space-between', // Distribuye los elementos al inicio y al final
  alignItems: 'center', // Alinea los elementos verticalmente en el centro
  marginTop: '12px',


  marginBottom: '64px',
backgroundColor:"#f5f5f5",

padding:'24px',
  
}}>
  <Box sx={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }}>
    <Typography sx={{
      fontSize:isSmallScreen ? '12px': "14px",
      fontWeight: "550",
      color: "#111",
      display: "inline-flex", // Usa inline-flex para que el texto se alinee correctamente
      justifyContent: "flex-start", // Alinea al inicio
      alignItems: "center", // Alinea verticalmente al centro
      fontFamily: "Helvetica, sans-serif",
      fontOpticalSizing: "auto",
    }}>
      Envío por correos de Chile: $12.990
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
    <Typography sx={{
      fontSize: "14px",
      fontWeight: "550",
      color: "#111",
      display: "inline-flex", // Usa inline-flex para que el texto se alinee correctamente
      justifyContent: "flex-end", // Alinea al final
      alignItems: "center", // Alinea verticalmente al centro
      fontFamily: "Helvetica, sans-serif",
      fontOpticalSizing: "auto",
    }}>
      Total: $<span>{total.toFixed(2)}</span>
    </Typography>
  </Box>
</Box>

      
        </>
      )}
      {total === 0 && (
        <Box p={11} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:isSmallScreen ? 0:'200px'}}>
          <ProductionQuantityLimitsIcon sx={{ width: "54px", height: "54px" }} />
          <Typography sx={{ fontFamily: "Helvetica, sans-serif", fontWeight: "400", textTransform: "none",  }}>
            Tu carrito está vacío <SentimentVeryDissatisfiedIcon sx={SadStyle} />
          </Typography>
        </Box>
      )}
    </>
  );
};

export default DetailsPay;
