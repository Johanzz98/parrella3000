import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Estilos
const title = {
  color: "#ffffff",
  fontSize: "12.5px",

  fontFamily: "Helvetica,sans-serif",
};

const detalles = {
  color: "#7e7e7e",
  fontSize: "10px",
  fontWeight: "550",
  display: "flex",
  fontFamily: "Helvetica,sans-serif",
};

// Definir márgenes dinámicos por estado de pago
const marginLeftByPaymentStatus = {
  Paid: '-32px',
  UnPaid: '10px',
  InProgress: '0',
  Cancel: '-26px',
  default: '0px',
};

// Definir márgenes dinámicos por estado de pedido
const marginLeftByOrderStatus = {
  Completed: '-22px',
  InProgress: '10px',
  Failed:'7px',
  Pending: '20px',
  Cancelled: '30px',
  Incompleted:'-12px',
  default: '0px',
};

const botones={
    fontSize: "12.5px",
    fontFamily: "Helvetica,sans-serif",
    cursor: "pointer",
    border: '1px solid #757575',
    boxShadow: 'none',
   
  color:'#ffffff',
    '&:hover': {
      color:'orange',boxShadow:'none' // Define el color de fondo para el hover
    },
  
}

// Definir color para el estado del pago
const getPaymentStatusColor = (status) => {
  switch (status) {
    case "Paid":
      return "#4CAF50";
    case "UnPaid":
      return "#F44336";
    case "InProgress":
      return "#FFC107";
    case "Cancel":
      return "#9E9E9E";
    default:
      return "black";
  }
};

// Definir color para el estado del pedido
const getOrderStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "#2196F3";
    case "InProgress":
      return "#FFC107";
    case "Pending":
      return "#9C27B0";
    case "Cancelled":
      return "#9E9E9E";
    default:
      return "black";
  }
};

// Definir color para el estado del evento
const getStatusColor = (status) => {
  switch (status) {
    case "failed":
      return "green";
    case "pending":
      return "gray";
    default:
      return "black";
  }
};

const DrawerOrder = ({ open, onClose, order, onEditOrder }) => {
  if (!order) return null;

  const timeLine = order.timeLine || [];
  const itemDetails = order.itemDetails || [];
  const category = order.category || "N/A";

  const calculateTotal = () => {
    return itemDetails.reduce((total, item) => {
      const price = item.price || 0;
      return total + price * (item.items || 0);
    }, 0);
  };

  const calculateSubtotal = () => {
    return parseFloat(calculateTotal()).toFixed(2);
  };

  const subtotal = parseFloat(calculateSubtotal());
  const shippingCost = order.shippingCost || 0;
  const total = Math.floor(subtotal + shippingCost); // O usa Math.round si prefieres redondear al número entero más cercano

  const marginLeftPayment = marginLeftByPaymentStatus[order.paymentStatus] || marginLeftByPaymentStatus.default;
  const marginLeftOrder = marginLeftByOrderStatus[order.orderStatus] || marginLeftByOrderStatus.default;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ width: "800px", margin: 0, padding: 0 }}
    >
        <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start", // Alinea los elementos al inicio verticalmente
    backgroundColor: "#111",
    padding: "16px",
  }}
>
<Box
    sx={{
      display: "flex",
      flexDirection: "column", // Coloca los elementos uno debajo del otro
      justifyContent: "space-between", // Asegura que el IconButton esté al final
      alignItems: "flex-start", // Alinea el contenido al inicio del eje transversal
    }}
  >
          <Typography sx={title}>Order ID: {order.orderId}</Typography>
          <Typography sx={detalles}>Order details</Typography>
         
        </Box>
        <IconButton onClick={onClose}>
            <CloseIcon sx={{color:'white',marginTop:'-12px'}}/>
          </IconButton>
        </Box>
      <Box
  sx={{
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "460px",
    margin: 0,
    backgroundColor: "#212121",

  }}
>

        <Box >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 0,
              padding: 0,
              marginBottom:'12px',
              marginRight: '36px',
              paddingRight: "20px",
            }}
          >
            <Typography sx={detalles}>Created at</Typography>
            <Typography sx={{...detalles, marginLeft: '44px'}}>
              Payment Status
            </Typography>
            <Typography sx={{...detalles, marginRight: '54px'}}>
              Status
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: '64px',
              paddingRight: "20px",
            }}
          >
            <Typography sx={title}>{order.created}</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                backgroundColor: getPaymentStatusColor(order.paymentStatus) || "transparent",
                color: "white",
                borderRadius: "4px",
                marginLeft: marginLeftPayment,
               padding:'2px 8px',
              }}
            >
              <Typography sx={title}> {order.paymentStatus}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height:'50%',
                backgroundColor: getOrderStatusColor(order.orderStatus) || "transparent",
                color: "white",
                borderRadius: "4px",
                marginRight: marginLeftOrder,
                padding: "4px 8px 4px",
              }}
            >
              <Typography sx={title}>
                {order.orderStatus}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ marginY: "16px",backgroundColor:'#757575',color:'#757575' }} />
          <Box sx={{marginTop:'12px',marginBottom:'8px'}}>
          <Typography sx={title}>Customer: {order.customer}</Typography>
          </Box>
          <Typography sx={{...title,color: "#0069FF" }}>
            Email: {order.email}
          </Typography>
          <Box sx={{marginTop:'8px',marginBottom:'24px'}}>
          <Typography sx={title}>Phone: {order.phone}</Typography>
           </Box>
          <Divider sx={{ marginY: "16px",backgroundColor:'#757575' }} />
          <Typography sx={title}>Items</Typography>
         
            
          {itemDetails.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              {item.image && (
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    marginRight: 2,
                  }}
                />
              )}
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: 0 
                  }}
                >
                    
                    <Typography sx={{ ...title, maxWidth: '74px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </Typography>
                
                  <Typography sx={title}>{item.items}</Typography>
                  <Typography sx={title}>
                    ${item.price * item.items}
                  </Typography>
                </Box>
                {item.size && (
                  <Typography sx={detalles}>
                    Size: {item.size}
                  </Typography>
                )}
                <Typography sx={detalles}>
                  Category: {item.category || "N/A"}
                </Typography>
              </Box>
            </Box>
          ))}

<Divider sx={{ marginY: "16px",backgroundColor:'#757575' }} />

          <Box>
            <Typography sx={title}>Payment</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                
                padding: "8px",
              }}
            >
              <Typography sx={title}>Subtotal</Typography>
              <Typography sx={title}>${subtotal}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                
                padding: "8px",
              }}
            >
              <Typography sx={title}>Shipping</Typography>
              <Typography sx={title}>${shippingCost}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                
                padding: "8px",
              }}
            >
              <Typography sx={title}>Total</Typography>
              <Typography sx={title}>${total}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ marginY: "16px",backgroundColor:'#757575' }} />
        <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
        <Button sx={botones}    
      >
        Invoice
      </Button>
      <Button  onClick={onEditOrder}
      sx={botones}    
      >
        VIEW Completed
      </Button>
      </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerOrder;
