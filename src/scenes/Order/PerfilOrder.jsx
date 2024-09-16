import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DrawerShip from "./DrawerShip";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const buttonStyle = {
  fontSize: "10px",
  display: "flex",
  fontFamily: "Helvetica, sans-serif",
  backgroundColor: "#2196f3",
  color: "#ffffff",
  padding: "10px",
  borderRadius: "6px",

  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "green",
    color: "#ffffff",
    boxShadow: "none", // Define el color de fondo para el hover
  },
};

// Estilos
const Container = {
  display: "flex",
  justifyContent: "space-between", // Alinea los ítems horizontalmente con espacio entre ellos
  borderRadius: "12px",
};

const title = {
  color: "#ffffff",
  fontSize: "12.5px",
  fontFamily: "Helvetica, sans-serif",
};

const detalles = {
  color: "#7e7e7e",
  fontSize: "10px",
  fontWeight: "550",
  display: "flex",
  fontFamily: "Helvetica, sans-serif",
};

// Definir márgenes dinámicos por estado de pago
const marginLeftByPaymentStatus = {
  Paid: "0",
  UnPaid: "10px",

  Cancel: "-26px",
  default: "0px",
};

// Definir márgenes dinámicos por estado de pedido
const marginLeftByOrderStatus = {
  Completed: "-32px",
  InProgress: "10px",
  Failed: "7px",
  Pending: "20px",
  Cancelled: "30px",
  Incompleted: "-12px",
  default: "0px",
};

// Definir color para el estado del pago
const getPaymentStatusColor = (status) => {
  switch (status) {
    case "Paid":
      return "#4CAF50";
    case "UnPaid":
      return "#F44336";
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
      a;
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
const gradientDividerStyle = {
  background: "linear-gradient(to right, yellow 50%, #424242 50%)",
  width: "200px",
  height: "6px",
  borderRadius: "24px",
};

const getProgressStatusStyles = (status) => {
  switch (status) {
    case "Ready":
      return Ready;

    default:
      return {}; // Estilo por defecto si el estado no es 'ready' ni 'packing'
  }
};

const Ready = {
  color: "#149285",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "8px",
  fontFamily: "Helvetica, sans-serif",
  cursor: "pointer", // Cambia el cursor para indicar que es clickeable
};



const Eliminar = {
  color: "#f44336",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "8px",
  fontFamily: "Helvetica, sans-serif",
  cursor: "pointer", // Cambia el cursor para indicar que es clickeable
};

const getBoxStyle = (status) => {
  switch (status) {
    case "Ready":
      return boxReady;

    default:
      return {}; // Estilo por defecto si el estado no es 'ready' ni 'packing'
  }
};


const boxReady = {
  border: "1px solid #149285",
  width: "auto",
  height: "auto",

  borderRadius: "12px",
};

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .max(50, "Email must be at most 50 characters")
    .required("por favor, introduce un email válido")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "Invalid email format",
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
      "Only.com domains are allowed",
    ),
});

const PerfilOrder = ({ order, onBackClick }) => {
  if (!order) return null;
  // Estado para manejar el estatus y el menú desplegable
  const [items, setItems] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItemId, setCurrentItemId] = useState(null);

  const handleClick = (event, itemId) => {
    setAnchorEl(event.currentTarget);
    setCurrentItemId(itemId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    setIsModalOpen(true); // Open the modal after form submission
  };

  const handleSelectStatus = (newStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === currentItemId ? { ...item, status: newStatus } : item,
      ),
    );
    handleClose();
  };

  const [item, setItem] = useState({ status: " " });
  const timeLine = order.timeLine || [];
  const itemDetails = order.itemDetails || [];
  const category = order.category || "N/A";
  const itemShippingAddress = order.itemShippingAddress || [];

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

  const marginLeftPayment =
    marginLeftByPaymentStatus[order.paymentStatus] ||
    marginLeftByPaymentStatus.default;
  const marginLeftOrder =
    marginLeftByOrderStatus[order.orderStatus] ||
    marginLeftByOrderStatus.default;

  const [openShip, setOpenShip] = useState(false);

  const handleOpenShip = () => setOpenShip(true);
  const handleCloseShip = () => setOpenShip(false);

  const handleMenuItemClick = (action) => {
{
      setStatus(action);
      console.log(action);
      handleMenu();
    }
  };
  const handleMenu = () => {
    setAnchorEl(null);
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false); // Estado para el modal
  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };
  const handleConfirmDelete = () => {
    console.log("Producto eliminado");
    setShowConfirmModal(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#212121",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // Alinea los elementos al inicio verticalmente
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "8px",
          width: "100%", // Añadido para que el icono se alinee correctamente
          marginTop: "-18px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Coloca los elementos uno debajo del otro
            justifyContent: "space-between", // Asegura que el IconButton esté al final
            alignItems: "flex-start", // Alinea el contenido al inicio del eje transversal
            width: "100%", // Añadido para que el icono se alinee correctamente}
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Cambiado a "row" para alinear horizontalmente
              alignItems: "center", // Alinea los elementos verticalmente al centro del contenedor
              width: "100%", // Se mantiene para que el contenedor use el ancho disponible
              gap: "16px", // Añade espacio entre los elementos
            }}
          >
            <Typography sx={title}>Order ID: {order.orderId}</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                backgroundColor:
                  getPaymentStatusColor(order.paymentStatus) || "transparent",
                color: "white",
                borderRadius: "4px",
                marginLeft: marginLeftPayment,
                padding: "2px 8px",
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
                height: "50%",
                backgroundColor:
                  getOrderStatusColor(order.orderStatus) || "transparent",
                color: "white",
                borderRadius: "4px",
                marginRight: marginLeftOrder,
                padding: "4px 8px 4px",
              }}
            >
              <Typography sx={title}>{order.orderStatus}</Typography>
            </Box>
          </Box>
          <Typography sx={detalles}>Order details</Typography>
          <Typography sx={title}>{order.created}</Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px", // Espacio entre los elementos
              marginLeft: "-46px",
              marginBottom: "12px", // Espacio debajo del primer bloque
              width: "100%", // Asegura que el contenedor ocupa todo el ancho disponible
            }}
          >
            <Typography sx={title}>Tracking Number:</Typography>
            <Typography sx={title}>K-1234012</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px", // Alinea el espaciado para que coincida con el primer bloque
              width: "100%", // Asegura que el contenedor ocupa todo el ancho disponible
            }}
          >
            <Typography sx={title}>Tracking URL:</Typography>
            <Typography sx={title}>https://www.starken.cl/</Typography>
          </Box>
        </Box>

        <Divider sx={{ marginX: "16px", backgroundColor: "#757575" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "16px",
          gap: "12px", // Alinea el espaciado para que coincida con el primer bloque
          width: "100%", // Asegura que el contenedor ocupa todo el ancho disponible
        }}
      >
        {/* PROGRESS*/}
        <Typography sx={title}> Progress</Typography>
      </Box>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%", // Añadido para que el icono se alinee correctamente
          margin: 0,
          backgroundColor: "#212121",
        }}
      >
        <Box
          sx={{
            display: "flex", // Usa flexbox para la disposición de los elementos
            alignItems: "center", // Alinea verticalmente los elementos al centro
            justifyContent: "space-between", // Distribuye el espacio entre los elementos
            width: "100%", // Asegúrate de que el contenedor use el ancho completo disponible
            flexWrap: "wrap", // Permite que los elementos se envuelvan si el espacio es limitado
          }}
        >
          {/* Primero bloque de Divider y Typography */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Divider
              sx={{
                backgroundColor: "green",
                width: "200px",
                height: "6px",
                borderRadius: "24px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Alinea la Typography al inicio del contenedor
                width: "100%", // Asegura que el contenedor interno ocupe el ancho completo
                mt: 1, // Añade un margen superior si necesitas separar el Divider de la Typography
              }}
            >
              <Typography sx={title}>Order Confirming</Typography>
            </Box>
          </Box>
          {/* Segundo bloque de Divider y Typography */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Divider
              sx={{
                backgroundColor: "green",
                width: "200px",
                height: "6px",
                borderRadius: "24px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Alinea la Typography al inicio del contenedor
                width: "100%", // Asegura que el contenedor interno ocupe el ancho completo
                mt: 1, // Añade un margen superior si necesitas separar el Divider de la Typography
              }}
            >
              <Typography sx={title}>Payment Pending</Typography>
            </Box>
          </Box>
          {/* Tercer bloque de Divider y Typography */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Divider sx={gradientDividerStyle} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Alinea la Typography al inicio del contenedor
                width: "100%", // Asegura que el contenedor interno ocupe el ancho completo
                mt: 1, // Añade un margen superior si necesitas separar el Divider de la Typography
              }}
            >
              <Typography sx={title}>Shipping</Typography>
            </Box>
          </Box>
          {/* Cuarto bloque de Divider y Typography */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
        
          </Box>

        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Alinea el contenido al inicio horizontalmente
            alignItems: "center", // Alinea el contenido al centro verticalmente, opcional según tu diseño
            marginTop: "16px",
            padding: "12px",
          }}
        >
          <Button sx={buttonStyle} onClick={handleOpenShip}>
            Mark as ready to ship
          </Button>
          <DrawerShip open={openShip} handleClose={handleCloseShip} />
        </Box>
        <Divider
          sx={{
            marginY: "12px",
            marginTop: "16px",
            backgroundColor: "#757575",
          }}
        />
      </Box>

      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: 0,
          backgroundColor: "#212121",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              margin: 0,
              padding: 0,
              marginBottom: "12px",
              marginRight: "36px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ flex: 0.71 }}>
              <Typography sx={detalles}>Created at</Typography>
            </Box>
            <Box sx={{ flex: 0.5,marginLeft:'16px'}}>
              <Typography sx={detalles}>Status</Typography>
            </Box>
            <Box sx={{ flex: 0.59,marginLeft:'16px'}}>
              <Typography sx={detalles}>Items</Typography>
            </Box>
            <Box sx={{ flex: 0.4, marginRight: "56px" }}>
              <Typography sx={detalles}>Price</Typography>
            </Box>
          </Box>

          <Divider sx={{ marginY: "16px", backgroundColor: "#757575" }} />
          <Typography sx={title}>Items</Typography>
          <Box>
            {itemDetails.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
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
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      minWidth: 0,
                    }}
                  >
                    <Box sx={{ flex: 1, marginTop: "-16px" }}>
                      <Typography
                        sx={{
                          ...title,
                          maxWidth: "100%",
                          overflow: "hidden",
                          marginTop: "12px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ flex: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box sx={getBoxStyle(item.status)}>
                        <Typography sx={getProgressStatusStyles(item.status)}>
                          {item.status}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={title}>{item.items}</Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={title}>
                        ${item.price * item.items}
                      </Typography>
                    </Box>
                    <IconButton
                      sx={{
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                        "&:focus": {
                          outline: "none",
                          boxShadow: "none",
                        },
                        "&:active": {
                          backgroundColor: "transparent",
                        },
                        transition: "none",
                      }}
                      onClick={handleClick}
                    >
                      <Box
                        sx={{
                          borderRadius: "8px",
                          display: "flex", // Ensure correct display
                          alignItems: "center", // Center icon vertically
                          justifyContent: "center", // Center icon horizontally
                        }}
                      >
                        <MoreVertIcon
                          sx={{ color: "white", fontSize: "20px" }}
                        />
                      </Box>
                    </IconButton>
                  </Box>
                  <Box sx={{ flex: 1, marginTop: "-16px" }}>
                    {item.size && (
                      <Typography sx={detalles}>Size: {item.size}</Typography>
                    )}
                    <Typography sx={detalles}>
                      Category: {item.category || "N/A"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenu}
              sx={{
                boxShadow: "none",

                "& .MuiPaper-root": {
                  boxShadow: "none",
                  backgroundColor: "#212121",
                  border: "1px solid #111",
                  borderRadius: "12px",
                },
                transform: "translateX(-5%) translateY(-2.5%)",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem sx={Ready}>Ready</MenuItem>
          
          
            </Menu>

          </Box>

          <Divider sx={{ marginY: "16px", backgroundColor: "#757575" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Alinea los elementos horizontalmente
              width: "100%", // Usa el ancho disponible
              gap: "16px", // Espacio entre las secciones
            }}
          >
            {/* Sección de Client Details */}
            <Box
              sx={{
                flex: 1, // Hace que este Box ocupe el espacio disponible
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "12px",
                border: "2px solid #424242",
                borderRadius: "16px",
              }}
            >
              <Typography sx={title}>Customer Details:</Typography>

              <Box sx={Container}>
                <Typography sx={title}>Customer:</Typography>
                <Typography sx={title}>{order.customer}</Typography>
              </Box>

              <Box sx={Container}>
                <Typography sx={title}>RUT:</Typography>
                <Typography sx={title}>{order.rut}</Typography>
              </Box>
              <Box sx={Container}>
                <Typography sx={title}>Boleta o factura :</Typography>
                <Typography sx={title}>{order.BF}</Typography>
              </Box>

              <Box sx={Container}>
                <Typography sx={title}>Phone:</Typography>
                <Typography sx={title}> {order.phone}</Typography>
              </Box>
              <Box sx={Container}>
                <Typography sx={title}>E-Mail:</Typography>
                <Typography sx={{ ...title, color: "#0069FF" }}>
                  {order.email}
                </Typography>
              </Box>

              <Typography sx={title}>Shipping Address</Typography>
              {order.shippingAddress &&
                order.shippingAddress.map((address, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "24px",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1, // Hace que este Box ocupe el espacio disponible
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <Box sx={Container}>
                        <Typography sx={title}>Region: </Typography>
                        <Typography sx={title}>{address.region}</Typography>
                      </Box>

                      <Box sx={Container}>
                        <Typography sx={title}>Comuna: </Typography>
                        <Typography sx={title}>{address.comuna}</Typography>
                      </Box>

                      <Box sx={Container}>
                        <Typography sx={title}>Dirección: </Typography>
                        <Typography sx={title}>{address.direccion}</Typography>
                      </Box>

                      <Box sx={Container}>
                        <Typography sx={title}>
                          Apartamento, habitación, escalera, etc. (opcional):{" "}
                        </Typography>
                        <Typography sx={title}>{address.numero}</Typography>
                      </Box>
                      <Box sx={Container}>
                        <Typography sx={title}>Postal (Opcional): </Typography>
                        <Typography sx={title}>{address.postal}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}

              <Typography sx={detalles}>Billing Addres</Typography>
              <Typography sx={detalles}>Same as shipping Addres</Typography>
            </Box>

            {/* Sección de Payment */}
            <Box
              sx={{
                flex: 1, // Hace que este Box ocupe el espacio disponible
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "12px",
                border: "2px solid #424242",
                borderRadius: "16px",
              }}
            >
              <Typography sx={title}>Payment</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px",
                  borderBottom: "1px solid #eee", // Opcional: Línea separadora
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
                  borderBottom: "1px solid #eee", // Opcional: Línea separadora
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
          
              {/*<Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor:'transparent',boxShadow:'none'  }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
            <Field
  as={TextField}
  fullWidth
  name="email"
  helperText={<ErrorMessage name="email" />}
  FormHelperTextProps={{
    sx: { fontSize: "0.8rem", color: "red",marginLeft:'-1px', alignItems: 'center',
        fontFamily: "Helvetica, sans-serif",},
  }}
  sx={{marginLeft:'-8px',
      borderRadius:"0",
      height:'200px',
    marginTop: "8px",
  }}
/>

              </Form>
            )}
          </Formik>
        </Paper>*/}
         
          </Box>
        </Box>
        <Divider sx={{ marginY: "16px", backgroundColor: "#757575" }} />
        {/* Aquí puedes agregar detalles adicionales del perfil */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="secondary" onClick={onBackClick}>
            Back to Orders
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PerfilOrder;
