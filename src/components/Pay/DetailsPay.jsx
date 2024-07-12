import React, { useEffect, useState } from "react";
import { Box, Typography, Divider,CircularProgress  } from "@mui/material";
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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simular carga de datos (simplemente para demostración)
    setTimeout(() => {
      setIsLoading(false); // Cambiar estado a falso después de un tiempo
    }, 2000); // Puedes ajustar el tiempo según tus necesidades
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'320px',height:'60vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>      {total > 0 && (
    

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '12px',
         
          width: '960px',
          paddingTop:'24px',
          backgroundColor: '#f5f5f5',
      
        }}
      >
    <Box p={1} sx={{ backgroundColor: "#f5f5f5;", width:"159.3%",marginLeft:'-20px',marginBottom:'70px', marginTop:'-120px' }}>
      <Typography variant="h3" sx={titulo}>MI COMPRA</Typography>
    </Box>
          <Box p={2} >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ ...titulo, marginLeft: '32px', fontWeight: 700 }}>PRODUCTO</Typography>
              <Typography sx={{ ...titulo, marginLeft: '185px' }}>CANTIDAD</Typography>
              <Typography sx={{ ...titulo, marginLeft: '-73px', marginRight: '74px' }}>SUBTOTAL</Typography>
            </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginBottom: "12px",
                marginTop: "12px",
              }}
            />
            <Box flexGrow={1} p={2}>
              {cart.map((item, index) => (
                <CartDetail key={index} data={item} delFromCart={delFromCart} />
              ))}
            </Box>
          </Box>
       
      </Box>
 )}
      {total === 0 && (
        <Box p={11} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', marginLeft:'320px'}}>
          <ProductionQuantityLimitsIcon sx={{ width: "54px", height: "54px", marginTop: '-4rem', }} />
          <Typography sx={{ fontFamily: "Helvetica, sans-serif", fontWeight: "400", textTransform: "none", letterSpacing: 0, margin: '24px',  }}>
            Tu carrito está vacío <SentimentVeryDissatisfiedIcon sx={SadStyle} />
          </Typography>
        </Box>
      )}
    </>
  );
};

export default DetailsPay;
