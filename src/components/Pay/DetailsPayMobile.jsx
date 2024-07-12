
import React, { useEffect, useState} from "react";
import { Box, Typography, IconButton, Divider,CircularProgress  } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CartDetail from "../Cart/CartDetail";
import { useSelector, useDispatch } from "react-redux";
import { TYPES } from '@/actions/ShoppingActions';

const titulo = {
  fontSize: '0.9375rem',
  color: '#111',
  
  textAlign: 'center',
  fontWeight: 700,
};

const getDescription = {
  fontSize: "12.9px",
  color: "#111",
  display: 'flex',
  paddingTop: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
};

const totalStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  marginBottom:"-12px",
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
};

const SadStyle = {
  verticalAlign: 'middle',
  fontSize: "20px",
  marginTop: "-2px",
};

const DetailsPayMobile = () => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, total } = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(true);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  useEffect(() => {
    // Simular carga de datos (simplemente para demostración)
    setTimeout(() => {
      setIsLoading(false); // Cambiar estado a falso después de un tiempo
    }, 2000); // Puedes ajustar el tiempo según tus necesidades
  }, []);


  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'136px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding:'12px 0px',
          backgroundColor: '#ffff',
        }}
      >
          {total > 0 && (
    <Box p={1} sx={{ backgroundColor: "#f5f5f5;", width:"125%",marginLeft:'-20px',marginBottom:'32px' }}>
              <Typography variant="h3" sx={titulo}>MI COMPRA</Typography>
            </Box>
        )}
    
      
        <Box flexGrow={1} p={2}>
          {/* Mostrar detalles del carrito */}
          {cart.map((item, index) => (
            <CartDetail key={index} data={item} delFromCart={delFromCart} />
          ))}
        </Box>

   
       
      </Box>    

      {/* Mostrar mensaje de carrito vacío si total es 0 */}
      {total === 0 && (
        <Box p={11} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProductionQuantityLimitsIcon sx={{ width: "54px", height: "54px"}} />
          <Typography sx={{ fontFamily: "Helvetica, sans-serif", fontWeight: "400", textTransform: "none", letterSpacing: 0 }}>
            Tu carrito está vacío <SentimentVeryDissatisfiedIcon sx={SadStyle} />
          </Typography>
        </Box>
      )}
    </>
  );
};

export default DetailsPayMobile;
