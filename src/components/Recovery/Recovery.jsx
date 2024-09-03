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
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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

const Recovery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const isMobile = useMediaQuery("(max-width:960px)");

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
        minHeight: "100vh",
        width: "100%",
        marginTop: isMobile ? "-82px" : "0", // Aplica marginTop solo si es tamaño MD
        transition: "margin-top 0.3s ease", // Agrega una transición para suavizar el cambio
      }}
    >
      <Box
        sx={{
          display: "block",
          margin: "40px 0 20px",
        }}
      >
        <img
          src={`../../assets/recovery/vogue.png`}
          alt="Nike Logo"
          style={{
            display: "block",
            marginBottom: "-182px",
            bottom: 130,
            width: "400px",
            position: "relative",
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "-64px",
          maxWidth: "800px",
          padding: "20px",
          borderRadius: "24px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{ textAlign: "left", width: "100%", paddingLeft: "16px" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#111",
                display: "flex",

                paddingTop: "18px",
                marginBottom: "24px",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Restablecer Contraseña
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#111",
                display: "flex",
                position: "relative",
                bottom: 24,
                paddingTop: "18px",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Por favor introduce tu dirección de correo electrónico para
              recibir un email con las instrucciones para restablecer tu
              contraseña.
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#111",
                display: "flex",
                marginTop: isMobile ? "-24px" : "0", // Aplica marginTop solo si es tamaño MD
                marginBottom: isMobile ? "-22px" : "0", // Aplica marginTop solo si es tamaño MD
                paddingTop: "18px",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Correo electrónico*
            </Typography>
          </div>
        </Box>

        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
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
                  placeholder="Enter your Email"
                  helperText={<ErrorMessage name="email" />}
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

                      width: isMobile ? "70%" : "50%", // Aplica marginTop solo si es tamaño MD
                      marginLeft: "-8px",
                      borderRadius: "0",
                      borderBottom: "2px solid black", // solo mostrar la línea inferior
                    },
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    marginTop: "8px",
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    sx={{
                      border: "none",
                      outline: "0",
                      marginTop: "14px",
                      color: "white",
                      width: "20%",
                      backgroundColor: "#000",
                      textAlign: "center",
                      cursor: "pointer",
                      fontSize: "18px",
                      marginLeft: "auto",
                      borderRadius: "0",
                      marginBottom: "12px",
                      "&:hover": {
                        backgroundColor: "#ffff",
                        color: "#111",
                        boxShadow: "none",
                        border: "1px solid black", // Define el color de fondo para el hover
                      },
                    }}
                  >
                    {props.isSubmitting ? "Loading" : "Enviar"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>

        <Modal
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px 40px",
              borderRadius: "0",
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
              textAlign: "left",

              position: "relative",
              top: "50%",
              left: isMobile ? "47.5%" : "18%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              id="modal-title"
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#111",
                display: "flex",
                margin: "12px 0 20px",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>Restablecer Contraseña</Box>
              <CloseOutlinedIcon
                onClick={handleClose}
                sx={{ color: "#111", cursor: "pointer" }}
              />
            </Typography>

            <Typography
              id="modal-description"
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#111",
                display: "flex",
                margin: "12px 0 20px",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Gracias por indicarnos tu dirección de correo electrónico. Te
              hemos enviado un e-mail con la información necesaria para
              restablecer tu contraseña. Es posible que el e-mail tarde un poco
              en llegar. Por favor, comprueba el correo no deseado/spam para
              comprobar que lo has recibido.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography
                onClick={handleClose}
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#111",
                  display: "flex",
                  margin: "12px 0 20px",
                  alignItems: "center",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    boxShadow: "none",
                    border: "1px solid black",
                  },
                }}
              >
                Cerrar
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Recovery;
