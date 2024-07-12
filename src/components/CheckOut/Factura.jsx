"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Tooltip,
  Checkbox,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Titulo = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
};

const description = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
  marginTop: "24px",
};

const detalleStyle = {
  fontSize: "13px",
  fontWeight: "500",
  color: "#757575",
  display: "flex",
  justifyContent: "flex-start", // Alinea a la izquierda horizontalmente
  alignItems: "center", // Alinea al centro verticalmente (si es necesario)
  fontFamily: "Helvetica, sans-serif",
  textDecoration: "none",
  "&:hover": { color: "black" },
  cursor: "pointer",
  margin: "8px 0",
  textAlign: "left", // Alinea el texto dentro del elemento a la izquierda
};
const Comprando = {
  display: "block",
  fontFamily: "Helvetica, sans-serif",
  width: "210px",
  fontWeight: "400",
  fontSize: "13px",
  margin: "0 auto",
  color: "#757575",
  padding: 0,
  textDecoration: "none",
  "&:hover": { color: "black" },
  cursor: "pointer",
  marginTop: "0.75rem",
};

const arrowIconStyle = {
  verticalAlign: "middle",
  fontSize: "16px",
};

const totalStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111",
  display: "flex",
  marginTop: '4px',
  marginBottom: '6px',
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
};

const Factura = () => {
  const { cart, total,quantity,name } = useSelector((state) => state.cart);
  const theme = useTheme();
 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const validationSchema = Yup.object().shape({
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Debes aceptar los términos y condiciones"
    ),
  });

  return (
    <>
     
    <Formik
      initialValues={{ termsAndConditions: false }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box
            sx={{
              textAlign: "center",
              padding: "24px",
              marginTop: isSmallScreen ? "-54px" : "46px",
              backgroundColor: "#fafafa",
              width: isSmallScreen ? "100%" : "500px",
              border:'2px solid black',
             marginBottom:'32px',
            }}
          >
            <Box>
              <Typography sx={Titulo}>TU PEDIDO</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between',  marginTop:'12px', }}>
  <Typography sx={{  fontSize: "14px",
  fontWeight: "500",
  color: "grey",

  display: "flex",
  marginBottom:'12px',
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
}}>PRODUCTO</Typography>
  <Typography sx={{fontSize: "14px",
  fontWeight: "500",
  color: "grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
 }}>CANTIDAD</Typography>
   <Typography sx={{fontSize: "14px",
  fontWeight: "500",
  color: "grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
 }}>SUBTOTAL</Typography>
</Box>
<Divider
              sx={{
              
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginTop:'-6px',
                marginBottom: "12px",
              
              }}
            />
<Box sx={{ display: 'flex', flexDirection: 'column'}}>
      {cart.map((item, index) => (
        <React.Fragment key={index}>
          <Typography sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',  }}>
            <Typography style={{ minWidth: '30%', maxWidth: '30%', textAlign: 'left',fontSize: "14px",
  fontWeight: "500",
  color: "#757575", }}>{item.name}</Typography> {/* Ajuste aquí */}
            <Typography style={{ minWidth: '40%', maxWidth: '40%', textAlign: 'center',fontSize: "14px",
  fontWeight: "500",
  color: "#757575", }}>{item.quantity}</Typography> {/* Alinea al centro */}
            <Typography style={{ minWidth: '30%', maxWidth: '30%', textAlign: 'right',fontSize: "14px",
  fontWeight: "600",
  color: "#111", }}>$ { (item.price * item.quantity).toFixed(3) }</Typography> {/* Alinea a la derecha */}
          </Typography>
          <Divider
              sx={{
              
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginBottom: "8px",
                marginTop: "8px",
              }}
            />
        </React.Fragment>
      ))}
    </Box>
  

            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
  <Typography sx={{
    fontSize: "14px",
    fontWeight: "500",
    color: "#111",
    display: "flex",
    marginTop:'6px',
    justifyContent: "center",
    alignItems: "flex-start",  // Cambiado a flex-start para alinear al inicio verticalmente
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: "auto",
  }}>
    Envío
  </Typography>
</Box>
<Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
<FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={Checkbox}
                  sx={{ transform: "scale(0.8)", top: 8 }}
                  color="primary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.8rem", marginTop: "16px" }}
                >
                  Envío por correos de Chile: $12.990
                </Typography>
              }
            />
               </Box>
            <FormHelperText
              sx={{
                fontSize: "0.6rem",
                color: "#f44336",
                marginTop: '-2px',
                textAlign: "center"
              }}
            >
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>
         
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
            <FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={Checkbox}
                  sx={{ transform: "scale(0.8)", top: 8 }}
                  color="primary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.8rem", marginTop: "16px" }}
                >
                  Retiro en bodega (Talca, Mall Portal Centro)
                </Typography>
              }
            />
             </Box>
            <FormHelperText
              sx={{
                fontSize: "0.6rem",
                color: "#f44336",
                marginTop: '-2px',
                textAlign: "center"
              }}
            >
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
                
                marginTop: "16px",
              }}
            />

<Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
              <Typography sx={description}>
                <WhatsAppIcon
                  sx={{ color: "green",  marginRight: "8px",bottom:2,position:'relative' }}
                />
                Coordinacion de entrega contactanos por via
                WhatsApp!
              </Typography>
            </Box>
            <Divider
              sx={{
                width: "100%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
              
                marginTop: "16px",
              }}
            />
           <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
              <Typography
                sx={{
                  ...description,
                }}
              >
                <TrainOutlinedIcon
                  sx={{ marginBottom: "2px", marginRight: "8px" }}
                />
                Entrega en todas las estaciones de la RM
              </Typography>
            </Box>

            <Divider
              sx={{
                width: "100%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
          
                marginTop: "16px",
              }}
            />

<Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
              <Typography
                sx={{
                  ...description,
                }}
              >
                <AccessTimeOutlinedIcon
                  sx={{ marginBottom: "2px",marginRight:'8px'}}
                />{" "}
                ¡Nos organizamos a su tiempo!
              </Typography>
            </Box>

          

            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000",
                marginTop: "16px", }}
              flexItem
            />
            <Box sx={{ marginTop: '12px', marginBottom: '16px' }}>
              <Typography variant="h3" sx={{ ...totalStyle, fontSize: '13px' }}>
                <span>
                  Subtotal
                  <Tooltip title="El subtotal refleja el importe total de tu pedido, incluidos los impuestos, antes de cualquier descuento aplicable. No incluye los gastos de envío ni las tarifas por transacciones internacionales.">
                    <IconButton>
                      <HelpOutlinedIcon sx={{ color: "black", marginBottom: '4px', fontSize: '20px' }} />
                    </IconButton>
                  </Tooltip>
                </span>
                <span>${total.toFixed(3)}</span>
              </Typography>

              <Typography variant="h3" sx={{ ...totalStyle, fontSize: '13px', marginBottom: '16px' }}>
                <span>Delivery</span>
                <span>0</span>
              </Typography>

              <Typography variant="h3" sx={totalStyle}>
                <span>Total</span>
                <span>${total.toFixed(3)}</span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              
              }}
            >
         
                <img
                  src={`../../assets/static/CheckOut/MACH.svg`}
                  alt="logo"
                  style={{
                    width: '60px',
                    height: '100%',
                    marginTop: '4%',
                    position: 'relative',
                   
                  }}
                />
            
                <img
                  src={`../../assets/static/CheckOut/American.svg`}
                  alt="logo"
                  style={{
                    width: '60px',
                    height: '100%',
                    marginTop: '4%',
                    position: 'relative',
                  }}
                />
           
                <img
                  src={`../../assets/static/CheckOut/master.png`}
                  alt="logo"
                  style={{
                    width: '60px',
                    height: '100%',
                    marginBottom: '-4px',
                    position: 'relative',
                  }}
                />
            
                <img
                  src={`../../assets/static/CheckOut/visa.svg`}
                  alt="logo"
                  style={{
                    width: '70px',
                    height: '100%',
                    marginBottom: '-12px',
                    position: 'relative',
                  }}
                />
             
            </Box>

          
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
            <FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={Checkbox}
                  sx={{ transform: "scale(0.8)", top: 8 }}
                  color="primary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.8rem", marginTop: "16px" }}
                >
                  Transferencia bancaria directa
                </Typography>
             
              }
            />
             
             </Box>
             <Box sx={{ display: 'flex',justifyContent: "flex-start", 
  alignItems: "left", }}>
             <Typography sx={detalleStyle}>
                  Realiza tu pago directamente en nuestra cuenta bancaria. Por favor, usa el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta.
                </Typography>
                </Box>
            <FormHelperText
              sx={{
                fontSize: "0.6rem",
                color: "#f44336",
                marginTop: '-2px',
                textAlign: "center"
              }}
            >
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>

            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000", marginTop: "20px" }}
              flexItem
            />
                  <Box sx={{ display: 'flex',justifyContent: "flex-start", 
  alignItems: "left", }}>
<FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={Checkbox}
                  sx={{ transform: "scale(0.8)",  }}
                  color="primary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.8rem"}}
                >
                  Transbank Webpay Plus 
                </Typography>
              
              }
              
            />
              
               <img
    src={`https://proteinasmayoristas.cl/wp-content/plugins/transbank-webpay-plus-rest/images/webpay.png`}
         
    loading="lazy"
    alt="Image 1"
    style={{ maxWidth: '100%', maxHeight:'100%', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
  />
         
            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000", marginTop: "20px" }}
              flexItem
            />

            </Box>
            <FormHelperText
              sx={{
                fontSize: "0.6rem",
                color: "#f44336",
                marginTop: '-2px',
                textAlign: "flex-start"
              }}
            >
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>
<FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={Checkbox}
                  sx={{ transform: "scale(0.8)", top: 8 }}
                  color="primary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.8rem", marginTop: "16px" }}
                >
                  Acepto los términos y condiciones
                </Typography>
              }
            />
            <FormHelperText
              sx={{
                fontSize: "0.6rem",
                color: "#f44336",
                marginTop: '-2px',
                textAlign: "center"
              }}
            >
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>
        
            <Box mt={2}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "12px",
                }}
              >
                Procesar Compra
              </Button>
              <Typography sx={Comprando}>
                Seguir comprando <KeyboardArrowRightIcon sx={arrowIconStyle} />
              </Typography>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  
     </>
  );
};

export default Factura;
