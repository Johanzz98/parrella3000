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
  justifyContent: "center",
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
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  textDecoration: "none",
  "&:hover": { color: "black" },
  cursor: "pointer",
  margin: "8px 0",
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

const ResumenDetailsMobile = () => {
  const { cart, total } = useSelector((state) => state.cart);

  const validationSchema = Yup.object().shape({
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Debes aceptar los términos y condiciones"
    ),
  });

  return (
    <>
    {total > 0 && (
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
              marginTop: "auto",
              backgroundColor: "#f5f5f5",
              borderRadius:'12px',
        
            }}
          >
            <Box>
              <Typography sx={Titulo}>RESUMEN DE COMPRA</Typography>
            </Box>
        

       

            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000",marginTop:'12px' }}
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

              <Typography variant="h3" sx={{ ...totalStyle, fontSize: '13px', marginBottom: '12px' }}>
                <span>Delivery</span>
                <span>0</span>
              </Typography>

              <Typography variant="h3" sx={totalStyle}>
                <span>Total</span>
                <span>${total.toFixed(3)}</span>
              </Typography>
            </Box>

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
       )}
       </>
  );
};

export default ResumenDetailsMobile;
