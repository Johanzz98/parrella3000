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

const ResumenDetails = () => {
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
              width: "500px",
              marginLeft: "-200px",
              height: "100vh",
            }}
          >
            <Box>
              <Typography sx={Titulo}>RESUMEN DE COMPRA</Typography>
            </Box>
            <Box>
              <Typography sx={description}>
                <WhatsAppIcon
                  sx={{ color: "green", marginBottom: "12px", marginRight: "2px" }}
                />
                Coordinacion de entrega en Metro (de momento) contactanos por via
                WhatsApp!
              </Typography>
            </Box>

            <Divider
              sx={{
                width: "97%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginBottom: "24px",
                marginTop: "16px",
              }}
            />
            <Box sx={{ marginLeft: "-152px" }}>
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
                width: "97%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginBottom: "24px",
                marginTop: "16px",
              }}
            />

            <Box sx={{ marginLeft: "-204px" }}>
              <Typography
                sx={{
                  ...description,
                }}
              >
                <AccessTimeOutlinedIcon
                  sx={{ marginBottom: "2px", marginRight: "20px" }}
                />{" "}
                ¡Nos organizamos a su tiempo!
              </Typography>
            </Box>

            <Divider
              sx={{
                width: "97%",
                bgcolor: "#f5f5f5",
                textAlign: "center",
                marginBottom: "24px",
                marginTop: "16px",
              }}
            />

            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000" }}
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
                <span>Gratis</span>
              </Typography>

              <Typography variant="h3" sx={totalStyle}>
                <span>Total</span>
                <span>${total.toFixed(3)}</span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'space-between',
              }}
            >
              <Box sx={{ marginLeft: '-90px', marginRight: '46px' }}>
                <img
                  src={`../../assets/static/CheckOut/MACH.svg`}
                  alt="logo"
                  style={{
                    width: '60px',
                    height: '100%',
                    marginTop: '4%',
                    position: 'relative',
                    marginLeft: '122px',
                  }}
                />
              </Box>
              <Box sx={{ marginLeft: '12px', marginRight: '34px' }}>
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
              </Box>
              <Box sx={{ marginLeft: '12px', marginRight: '32px' }}>
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
              </Box>
              <Box sx={{ marginLeft: '32px', marginRight: '32px' }}>
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
            </Box>

          

            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#000", marginTop: "20px" }}
              flexItem
            />

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
  )}
     </>
  );
};

export default ResumenDetails;
