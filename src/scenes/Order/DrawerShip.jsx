import React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Paper,
  TextField,
  Divider,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ChilexpressIcon from "@mui/icons-material/LocalShipping"; // Cambia esto a tu ícono real si tienes uno
import StarkenIcon from "@mui/icons-material/LocalShipping"; // Cambia esto a tu ícono real si tienes uno

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #212121",
  boxShadow: 24,
  p: 4,
  height: "600px",
  padding: "20px",
  backgroundColor: "#212121",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column", // Columnar layout to push buttons to the bottom
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(10px)", // Cambia el valor según el grado de difuminado deseado
  zIndex: 1200, // Asegúrate de que esté detrás del modal pero encima del contenido
};

const initialValues = {
  email: "",
  carrier: "",
  trackingNumber: "",
  trackingUrl: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .max(50, "Email must be at most 50 characters")
    .required("Please enter a valid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "Invalid email format",
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
      "Only .com domains are allowed",
    ),
  carrier: Yup.string().required("Please select a carrier"),
  trackingNumber: Yup.string().required("Please enter the tracking number"),
  trackingUrl: Yup.string()
    .url("Enter a valid URL")
    .required("Please enter the tracking URL"),
});

const DrawerShip = ({ open, handleClose }) => {
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    // Handle form submission here
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

  return (
    <>
      {open && <Box sx={backdropStyle} />}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              id="modal-title"
              sx={{
                color: "#ffffff",
                fontSize: "14px",
                fontFamily: "Helvetica, sans-serif",
              }}
            >
              Mark as shipped
            </Typography>
          </Box>
          <Divider sx={{ marginY: "12px", backgroundColor: "#757575" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "2px",
            }}
          >
            <Typography sx={title}>
              Add tracking details and confirm to set the order status to
              "Shipping"
            </Typography>
          </Box>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "transparent",
              boxShadow: "none",
              flex: 1,
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Typography sx={title}>Provider</Typography>
                  </Box>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Field
                      as={Select}
                      name="carrier"
                      labelId="carrier-select-label"
                      id="carrier-select"
                      defaultValue="" // Asegura que el valor inicial sea vacío para mostrar el placeholder
                      displayEmpty
                      sx={{
                        height: "36px",
                        backgroundColor: "#ffffff", // Color de fondo del select
                        border: "1px solid #ffffff", // Borde del select
                        "& .MuiSelect-select": { color: "#000000" }, // Color del texto del select
                        "& .MuiInputLabel-root": { color: "#ffffff" }, // Color del label
                        "& .MuiSelect-icon": { color: "#000000" }, // Color del ícono del select
                      }}
                      onChange={(e) => setFieldValue("carrier", e.target.value)}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Box
                              sx={{
                                color: "#111",
                                fontSize: "12.5px",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "Helvetica, sans-serif",
                              }}
                            >
                              <em>Select a carrier</em>
                            </Box>
                          );
                        }
                        switch (selected) {
                          case "chilexpress":
                            return (
                              <Box
                                sx={{
                                  color: "#111",
                                  fontSize: "12.5px",
                                  display: "flex",
                                  alignItems: "center",
                                  fontFamily: "Helvetica, sans-serif",
                                }}
                              >
                                <ChilexpressIcon
                                  sx={{
                                    mr: 1,
                                    color: "#111",
                                    fontSize: "18px",
                                    marginTop: "-2px",
                                  }}
                                />
                                Chilexpress
                              </Box>
                            );
                          case "starken":
                            return (
                              <Box
                                sx={{
                                  color: "#111",
                                  fontSize: "12.5px",
                                  display: "flex",
                                  alignItems: "center",
                                  fontFamily: "Helvetica, sans-serif",
                                }}
                              >
                                <StarkenIcon
                                  sx={{
                                    mr: 1,
                                    color: "#111",
                                    fontSize: "18px",
                                    marginTop: "-2px",
                                  }}
                                />
                                Starken
                              </Box>
                            );
                          default:
                            return null;
                        }
                      }}
                    >
                      <MenuItem value="" disabled sx={detalles}>
                        Select a carrier {/* Placeholder */}
                      </MenuItem>
                      <MenuItem value="chilexpress">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <ChilexpressIcon sx={{ mr: 1 }} />
                          Chilexpress
                        </Box>
                      </MenuItem>
                      <MenuItem value="starken">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <StarkenIcon sx={{ mr: 1 }} />
                          Starken
                        </Box>
                      </MenuItem>
                    </Field>
                    <FormHelperText>
                      <ErrorMessage name="carrier" />
                    </FormHelperText>
                  </FormControl>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Typography id="modal-description" sx={detalles}>
                      Once Confirmed the shipping method will generate a
                      tracking number and URL
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "-12px", marginBottom: "24px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                        marginBottom: "12px",
                      }}
                    >
                      <Typography id="modal-description" sx={title}>
                        Tracking Number
                      </Typography>
                    </Box>
                    <Field
                      as={TextField}
                      fullWidth
                      name="trackingNumber"
                      helperText={<ErrorMessage name="trackingNumber" />}
                      FormHelperTextProps={{
                        sx: {
                          fontSize: "0.8rem",
                          color: "red",
                          fontFamily: "Helvetica, sans-serif",
                        },
                      }}
                      sx={{
                        "& .MuiInputBase-input": {
                          backgroundColor: "#ffffff", // Color de fondo del área de entrada
                          borderRadius: "4px", // Redondeo opcional del borde del área de entrada
                          height: 4,
                        },
                        "& .MuiInputLabel-root": {
                          color: "#000000", // Color de la etiqueta del campo si es necesario
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.8rem",
                          color: "red",
                          fontFamily: "Helvetica, sans-serif",
                        },
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "-12px",
                      marginBottom: "12px",
                    }}
                  >
                    <Typography sx={title}>Tracking URL</Typography>
                  </Box>
                  <Field
                    as={TextField}
                    fullWidth
                    name="trackingUrl"
                    helperText={<ErrorMessage name="trackingUrl" />}
                    FormHelperTextProps={{
                      sx: {
                        fontSize: "0.8rem",
                        color: "red",
                        fontFamily: "Helvetica, sans-serif",
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        backgroundColor: "#ffffff", // Color de fondo del área de entrada
                        height: 4,
                        borderRadius: "4px", // Redondeo opcional del borde del área de entrada
                      },

                      "& .MuiInputLabel-root": {
                        color: "#000000", // Color de la etiqueta del campo si es necesario
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "0.8rem",
                        color: "red",
                        fontFamily: "Helvetica, sans-serif",
                      },
                    }}
                  />
                </Form>
              )}
            </Formik>
          </Paper>
          <Box sx={{ marginTop: "auto" }}>
            {" "}
            {/* Ensure this box is pushed to the bottom */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                border: "1px solid black",
                boxShadow: "none",
                borderRadius: "8px",
                width: "100%",
                "&:hover": {
                  backgroundColor: "green",
                  color: "white",
                  boxShadow: "none", // Define el color de fondo para el hover
                },
              }}
              type="submit"
            >
              Confirm
            </Button>
            <Box sx={{ marginTop: "10px" }}>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                  boxShadow: "none",
                  borderRadius: "8px",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "red",
                    boxShadow: "none", // Define el color de fondo para el hover
                  },
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DrawerShip;
