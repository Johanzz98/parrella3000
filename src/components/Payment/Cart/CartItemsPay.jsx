"use client";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { TYPES } from "@/actions/ShoppingActions";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Divider } from "@mui/material";

const styleBox = {
  margin: "12px 0",
  color: "#111",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  position: "relative",
};

const SmallStylebox = {
  color: "#111",

  height: "160px",
  display: "flex",
  alignItems: "center",
  position: "relative",

  marginBottom: '-12px',
  marginTop: '-16px',
};

const cart = {
  width: "95px",
  height: "100px",
  marginBottom:'24px',
  objectFit: "contain",
};

const Smallcart = {
  width: "100px",
  height: "120px",
  marginLeft:'-12px',
  objectFit: "contain",
};

const column = {
  display: "flex",
  flexDirection: "center",
  alignItems: "center",
  margin: "0 24px 0",
};

const SmallColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "6px 12px 24px",
};

const CartItems = ({ data, delFromCart }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { id, name, price, quantity, imageurl, description, talla } = data;

  const dispatch = useDispatch();
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(quantity);

  useEffect(() => {
    setCantidadSeleccionada(quantity);
  }, [quantity]);

  useEffect(() => {
    dispatch({ type: TYPES.ADD_TALLA, payload: talla });
  }, [dispatch, talla]);

  const handleIncrement = () => {
    setCantidadSeleccionada((prevCantidad) => prevCantidad + 1);
    dispatch({
      type: TYPES.QUANTITY,
      payload: { id, quantity: cantidadSeleccionada + 1 },
    });
    dispatch({ type: TYPES.TOTAL });
  };

  const handleDecrement = () => {
    if (cantidadSeleccionada > 1) {
      setCantidadSeleccionada((prevCantidad) => prevCantidad - 1);
      dispatch({
        type: TYPES.QUANTITY,
        payload: { id, quantity: cantidadSeleccionada - 1 },
      });
      dispatch({ type: TYPES.TOTAL });
    }
  };

  const handleDelete = () => {
    delFromCart(id, true);
  };

  const fontName = {
    fontFamily: "Helvetica, sans-serif",

    fontSize:  isSmallScreen ? "0.85rem": "1rem",
    fontWeight: 600,
    fontStyle: "normal",
    color: "#111",
   
    marginTop: isSmallScreen ? '46px' : '0px',
   
  };

  const fontDescription = {
    fontSize: isSmallScreen ? "10px" : "12px",
    color: "#111",
    marginBottom: "4px",
    border: "none",
    width:isSmallScreen ? "80%" :"100%",
    fontWeight: 400,
    textTransform: "uppercase",
    fontFamily: "Helvetica, sans-serif",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };

  const priceStyle = {
    margin: 0,
    fontFamily: "Inter, 'Helvetica', sans-serif",
    fontOpticalSizing: "auto",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#111",
    letterSpacing: "0.0075em",
    marginTop: "1.2rem",
  };

  const SmallpriceStyle = {
    margin: 0,
    fontFamily: "Inter, 'Helvetica', sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 540,
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#111",
    letterSpacing: "0.0075em",
    marginBottom: "-4rem",
  };

  return (
    <Box style={{ backgroundColor: "#f5f5f5" }}>
      <Box style={isSmallScreen ? SmallStylebox : styleBox}>
        <Grid>
          <Grid item xs={12} md={12}>
            <img
              src={imageurl}
              alt={name}
              style={isSmallScreen ? Smallcart : cart}
            />
          </Grid>
        </Grid>
        <Box style={isSmallScreen ? SmallColumn : column}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '42px', marginTop: '4px' ,marginLeft: isSmallScreen ? '0':'-8px'}}>
           <Box sx={{marginTop:isSmallScreen ? '24px': '12px'}}>
            <Typography sx={fontName}>{name}</Typography>
            </Box>
              <Typography sx={fontDescription}> {description}</Typography>
            <Box >
            <Typography sx={{ ...priceStyle, position:'relative', top:isSmallScreen ? 8:-2, }}>
              ${price}
            </Typography>
            </Box>
          </Box>
          {/*<Typography sx={fontDescription}> {talla}</Typography>*/}
          <Grid
            item
            xs={12}
            md={!isSmallScreen ? 1.5 : false}
            style={{
              display: !isSmallScreen ? "block" : "none",
              visibility: !isSmallScreen ? "visible" : "hidden",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", position: "absolute", top: -16, right: "72px" }}>
              <Typography sx={{ ...priceStyle, fontWeight: 700, fontSize: '16px' }}>
                ${(price * cantidadSeleccionada).toFixed(3)}
              </Typography>
            </Box>
          </Grid>

          {isSmallScreen && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "12px",
                border: "1px solid #bdbdbd",
                position: "relative",
                left:180,
               bottom: 62
              }}
            >
              <IconButton
                onClick={handleDecrement}
                sx={{ width: "12px", height: "12px" }}
              >
                <RemoveIcon sx={{ fontSize: "16px" }} />
              </IconButton>
              <Typography sx={{ padding: "2px 8px", fontSize: "12px" }}>
                {cantidadSeleccionada}
              </Typography>
              <IconButton
                onClick={handleIncrement}
                sx={{ width: "12px", height: "12px" }}
              >
                <AddIcon sx={{ fontSize: "14px" }} />
              </IconButton>
            </Box>
          )}
        </Box>

        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            
              backgroundColor:'white',
              border: "1px solid #bdbdbd",
              position: "relative",
              bottom: "0",
              height:'36px',
              width:'36px',
              left: '-12px',
              bottom:32,
            }}
          >
       
            <Typography sx={{ padding: "12px", fontSize: "14px" }}>
              {cantidadSeleccionada}
            </Typography>
          
          </Box>
        )}
        <Box>
        {!isSmallScreen && (
          <Box sx={{ position: "static" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: -4,
                right: "2px",
              }}
            >
              <IconButton sx={{ width: "24px", height: "32px" }}>
                <DeleteOutlinedIcon
                  variant="contained"
                  color="secondary"
                  onClick={() => delFromCart(id, true)}
                  sx={{ fontSize: "24px", cursor: "pointer", color: "black" }}
                />
              </IconButton>
            </Box>
          </Box>
             )}
        </Box>    <Box>
        {isSmallScreen && (
          <Box sx={{ position: "static" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: 24,
                right: "-54px",
              }}
            >
              <IconButton sx={{ width: "24px", height: "32px" }}>
                <DeleteOutlinedIcon
                  variant="contained"
                  color="secondary"
                  onClick={() => delFromCart(id, true)}
                  sx={{ fontSize: "24px", cursor: "pointer", color: "#111" }}
                />
              </IconButton>
            </Box>
          </Box>
             )}
        </Box>
        {isSmallScreen && (
          <Typography sx={SmallpriceStyle}>
        
          </Typography>
        )}
      </Box>
      {!isSmallScreen && (
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#f5f5f5",
            textAlign: "center",
            marginBottom: "24px",
            marginTop: "2px",
          }}
        />
      )}
       {isSmallScreen && (
        <Divider
          sx={{
            width: "167%",
            bgcolor: "#f5f5f5",
            textAlign: "flex-start",
            marginBottom: "24px",
            marginTop: "6px",
            marginLeft:'-142px'
          }}
        />
      )}
    </Box>
  );
};

export default CartItems;
