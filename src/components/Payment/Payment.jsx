"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Modal,
  IconButton,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const initialValues = {
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  password: Yup.string()
    .required("La contraseña es requerida") // Asegurarse de que la contraseña no esté vacía
    .min(8, "La contraseña debe tener al menos 8 caracteres") // Longitud mínima de la contraseña
    .matches(
      /(?=.*[a-z])/g,
      "La contraseña debe contener al menos una letra minúscula",
    ) // Letra minúscula
    .matches(
      /(?=.*[A-Z])/g,
      "La contraseña debe contener al menos una letra mayúscula",
    ) // Letra mayúscula
    .matches(/(?=.*\d)/g, "La contraseña debe contener al menos un número"), // Número
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const isMobile = useMediaQuery("(max-width:960px)");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    setIsModalOpen(true); // Open the modal after form submission
  };

  // Function to close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        transition: "margin-top 0.3s ease", // Agrega una transición para suavizar el cambio
      }}
    >
      <Box sx={{ borderRadius: "24px", textAlign: "center", zIndex: 1 }}>
        <Typography
          sx={{
            fontSize: "32px",
            position: isSmallScreen ? "normal" : "relative",
            left: isSmallScreen ? 0 : 420,
            color: "#111",
            display: "flex",
            fontWeight: "600",

            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Helvetica, sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          Secure CheckOut
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginLeft: "14px" }}>
            <Typography
              sx={{
                fontSize: "18px",

                color: "#111",
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Credit Card
            </Typography>
            <Box
              sx={{ borderBottom: "2px solid black", marginBottom: "20px" }}
            />
          </Box>

          {/* Accepted Card Logos */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "20px",
              marginLeft: "12px",
            }}
          >
            <img
              src={`../../assets/static/CheckOut/MACH.svg`}
              alt="MACH Logo"
              style={{
                width: "54px",
                height: "auto",
                marginLeft: "6px",
                marginRight: "12px",
              }}
            />
            <img
              src={`../../assets/static/CheckOut/American.svg`}
              alt="American Express Logo"
              style={{
                width: "54px",
                height: "auto",
                marginLeft: "6px",
                marginRight: "12px",
              }}
            />
            <img
              src={`../../assets/static/CheckOut/master.png`}
              alt="MasterCard Logo"
              style={{
                width: "54px",
                height: "auto",
                marginLeft: "6px",
                marginRight: "12px",
              }}
            />
            <img
              src={`../../assets/static/CheckOut/visa.svg`}
              alt="Visa Logo"
              style={{
                width: "54px",
                height: "auto",
                marginLeft: "6px",
                marginRight: "6px",
              }}
            />
          </Box>
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: "24px",
            borderRadius: "16px",
            marginBottom: "20px",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form>
                <div style={{ justifyContent: "flex-start", display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#0288d1",
                      display: "flex",
                      marginTop: isMobile ? "12px" : "0", // Aplica marginTop solo si es tamaño MD
                      marginBottom: isMobile ? "-24px" : "-12px", // Aplica marginTop solo si es tamaño MD
                      paddingTop: "18px",

                      justifyContent: "flex-start",
                      textAlign: "left",
                      alignItems: "center",
                      fontFamily: "Helvetica, sans-serif",
                      fontOpticalSizing: "auto",
                    }}
                  >
                    Card Number
                  </Typography>
                </div>
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  placeholder="1234 4567 8901"
                  helperText={<ErrorMessage name="password" />}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.8rem",
                      color: "#f44336",
                      marginLeft: "-1px",
                      alignItems: "center",
                      fontFamily: "Helvetica, sans-serif",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", // ocultar el borde predeterminado
                      },

                      "&:hover fieldset": {
                        border: "none", // ocultar el borde en el hover
                      },
                      "&.Mui-focused fieldset": {
                        border: "none", // ocultar el borde cuando está enfocado
                      },

                      width: isMobile ? "85%" : "80%", // Aplica marginTop solo si es tamaño MD
                      marginLeft: "-8px",
                      borderRadius: "0",
                      borderBottom: "2px solid black", // solo mostrar la línea inferior
                    },
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#0288d1",
                    display: "flex",
                    marginTop: isMobile ? "12px" : "0", // Aplica marginTop solo si es tamaño MD
                    marginBottom: isMobile ? "-12px" : "0", // Aplica marginTop solo si es tamaño MD
                    paddingTop: "18px",
                    justifyContent: "flex-start",
                    alignItems: "center",

                    fontFamily: "Helvetica, sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  CardHolder Name
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  placeholder="XXXXX XXXXX"
                  helperText={<ErrorMessage name="confirmPassword" />}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.8rem",
                      color: "#f44336",
                      marginLeft: "-1px",
                      alignItems: "center",
                      fontFamily: "Helvetica, sans-serif",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.8rem",
                      marginLeft: "-122px", // Ajusta el margen izquierdo del label (placeholder)
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", // ocultar el borde predeterminado
                      },
                      "&:hover fieldset": {
                        border: "none", // ocultar el borde en el hover
                      },
                      "&.Mui-focused fieldset": {
                        border: "none", // ocultar el borde cuando está enfocado
                      },

                      width: isMobile ? "85%" : "80%", // Aplica marginTop solo si es tamaño MD
                      marginLeft: "-8px",
                      borderRadius: "0",
                      borderBottom: "2px solid black", // solo mostrar la línea inferior
                    },
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    marginTop: "8px",
                  }}
                />
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  size="small"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* Ícono para alternar la visibilidad de la contraseña */}
                </IconButton>

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "32px" }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",

                        color: "#0288d1",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: "auto",
                      }}
                    >
                      EXP.DATE
                    </Typography>
                  </Box>
                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    placeholder="XX"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    FormHelperTextProps={{
                      sx: {
                        fontSize: "0.8rem",
                        color: "#f44336",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "-78px",
                        fontFamily: "Helvetica, sans-serif",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.8rem",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // ocultar el borde predeterminado
                        },
                        "&:hover fieldset": {
                          border: "none", // ocultar el borde en el hover
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // ocultar el borde cuando está enfocado
                        },

                        width: isMobile ? "85%" : "80%", // Aplica marginTop solo si es tamaño MD
                        marginLeft: "-78px",
                        borderRadius: "0",
                        marginTop: "12px",
                        borderBottom: "2px solid black", // solo mostrar la línea inferior
                      },
                      "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root": { fontSize: "0.8rem" },
                      marginTop: "8px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "14px",

                      color: "#0288d1",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      fontFamily: "Helvetica,sans-serif",
                      fontOpticalSizing: "auto",
                      marginBottom: "112px",
                    }}
                  >
                    CVV
                  </Typography>
                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    placeholder="XX"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    FormHelperTextProps={{
                      sx: {
                        fontSize: "0.8rem",
                        color: "#f44336",
                        marginLeft: "-42px",
                        alignItems: "center",
                        fontFamily: "Helvetica, sans-serif",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.8rem",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // ocultar el borde predeterminado
                        },
                        "&:hover fieldset": {
                          border: "none", // ocultar el borde en el hover
                        },
                        "&.Mui-focused fieldset": {
                          border: "none", // ocultar el borde cuando está enfocado
                        },

                        width: isMobile ? "85%" : "80%", // Aplica marginTop solo si es tamaño MD
                        marginLeft: "-42px",
                        marginTop: "12px",
                        borderRadius: "0",
                        borderBottom: "2px solid black", // solo mostrar la línea inferior
                      },
                      "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root": { fontSize: "0.8rem" },
                      marginTop: "8px",
                    }}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
};

export default Payment;
