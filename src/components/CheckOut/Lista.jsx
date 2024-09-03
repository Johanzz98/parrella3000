import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const paperStyle = {
  padding: 24,
  boxShadow: "none",
  borderRadius: "24px",
  alignItems: "center",

  justifyContent: "center",
};

const SmallpaperStyle = {
  padding: 10,

  boxShadow: "none",
  borderRadius: "24px",
};

const opcionesBoletaFactura = ["Seleccione", "Boleta", "Factura"];
const regions = [
  "Región Metropolitana",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "O Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Lagos",
  "Aisén",
  "Magallanes y la Antártica Chilena",
];

const Lista = () => {
  const theme = useTheme();
  const isSmallScreen2 = useMediaQuery("(max-width:800px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [region, setRegion] = useState(regions[0]);
  const [tipoDocumento, setTipoDocumento] = useState(opcionesBoletaFactura[0]);
  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    setRegion(event.target.value); // Actualiza el estado con el nuevo valor seleccionado
  };

  // Función para manejar el cambio de selección
  const handleChangeTipoDocumento = (event) => {
    setTipoDocumento(event.target.value);
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validationSchema = Yup.object().shape({
    person: Yup.object().shape({
      fullName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
        .max(100, "Nombre must be at most 100 characters")
        .min(3, "It's too short")
        .required("Required"),
      country: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Should contain only letters")
        .min(3, "It's too short")
        .max(20, "Country must be at most 20 characters")
        .required("Required"),
      codePostal: Yup.string()
        .min(3, "It's too short")
        .max(10, "Code Postal must be at most 10 characters")
        .required("Required"),
      phoneNumber: Yup.string() // Correctly treating phoneNumber as a string
        .matches(phoneRegExp, "Phone number is not valid") // Use.matches for string patterns

        .required("Required"), // Ensure phoneNumber is provided // Ensure phoneNumber is provided
    }),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Required")
      .max(50, "Email must be at most 50 characters")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Invalid email format",
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Only .com domains are allowed",
      ),
    notas: Yup.string()
      .email("Enter a valid email")

      .max(250, "Email must be at most 250 characters")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Invalid email format",
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Only .com domains are allowed",
      ),
    direction: Yup.string()

      .required("Required"),

    direction2: Yup.string(),
    location: Yup.string()

      .required("Required"),

    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions",
    ),
  });

  const initialValues = {
    person: {
      fullName: "",
      country: "",
      codePostal: "",
      phoneNumber: "",
    },
    email: "",
    direction: "",
    direction2: "",
    location: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Grid>
      <Paper style={isSmallScreen ? SmallpaperStyle : paperStyle}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme="colored"
          style={{ fontSize: "12px", width: "446px", right: 5 }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#111",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica,sans-serif",
              fontOpticalSizing: "auto",
              marginBottom: "12px",
            }}
          >
            DETALLES DE FACTURACIÓN
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "12px",
                  }}
                >
                  Nombre Completo*
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="person.fullName"
                  label="Name"
                  placeholder="Ingrese su nombre completo"
                  helperText={<ErrorMessage name="person.fullName" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "46px",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    marginTop: "12px",
                    color: "#111",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  País / Región*
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "grey",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  Chile
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",

                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  Direccion de la calle*
                </Typography>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="direction"
                    placeholder="Número de la casa y nombre de la calle"
                    helperText={<ErrorMessage name="direction" />}
                    FormHelperTextProps={{
                      sx: { fontSize: "0.6rem", color: "#f44336" },
                    }}
                    sx={{
                      "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root.MuiOutlinedInput-root": {
                        height: "43px",
                      },
                      marginTop: "8px",
                    }}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name=" direction2"
                    placeholder="Apartamento, habitación, etc. (Opcional)"
                    helperText={<ErrorMessage name="direction2" />}
                    FormHelperTextProps={{
                      sx: { fontSize: "0.6rem", color: "#f44336" },
                    }}
                    sx={{
                      "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root": { fontSize: "0.8rem" },
                      "& .MuiInputBase-root.MuiOutlinedInput-root": {
                        height: "43px",
                      },
                      marginTop: "8px",
                    }}
                  />
                </div>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  Localidad / Ciudad*
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="location"
                  placeholder="Por ejemplo: Viña del mar"
                  helperText={<ErrorMessage name="location" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "12px",
                  }}
                >
                  Región*
                </Typography>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="region-label">Región</InputLabel>
                  <Select
                    labelId="region-label"
                    id="region-select"
                    value={region}
                    onChange={handleChange}
                    label="Región"
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                          width: 250,
                        },
                      },
                    }}
                  >
                    {regions.map((regionName) => (
                      <MenuItem key={regionName} value={regionName}>
                        {regionName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",

                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "2px,",
                  }}
                >
                  Dirección de correo eletrócnico*
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your Email"
                  helperText={<ErrorMessage name="email" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "2px",
                  }}
                >
                  Código postal *
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="person.codePostal"
                  label="Codigo Postal"
                  placeholder="Enter your Codigo Postal"
                  variant="outlined"
                  helperText={<ErrorMessage name="person.codePostal" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  RUT *
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  name="person.country"
                  placeholder="Ingrese RUT sin puntos"
                  variant="outlined"
                  helperText={<ErrorMessage name="person.country" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                  }}
                >
                  Telefono *
                </Typography>
                <Field
                  as={TextField}
                  fullWidth
                  placeholder="+56 9 XXXXXXX"
                  name="person.phoneNumber"
                  label="Phone Number"
                  helperText={<ErrorMessage name="person.phoneNumber" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    },
                    marginTop: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "12px",
                  }}
                >
                  ¿Boleta o Factura? *
                </Typography>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <InputLabel id="boletaofactura-label">
                    Boleta o Factura
                  </InputLabel>
                  <Select
                    labelId="boletaofactura-label"
                    id="boletaofactura-select"
                    value={tipoDocumento}
                    onChange={handleChangeTipoDocumento}
                    label="Boleta o Factura"
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                          width: 250,
                        },
                      },
                    }}
                  >
                    {opcionesBoletaFactura.map((opcion) => (
                      <MenuItem key={opcion} value={opcion}>
                        {opcion}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography>Notas del pedido para regalo (Opcional)</Typography>
                <Field
                  as={TextField}
                  fullWidth
                  multiline // Habilitar multiline
                  name="notes"
                  placeholder="Notas sobre tu pedido, por ejemplo notas especiales para la entrega."
                  helperText={<ErrorMessage name="notes" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  InputProps={{
                    style: { fontSize: "0.8rem" },

                    classes: {
                      root: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": {
                      fontSize: "0.8rem",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "80px", // Altura deseada
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                    marginTop: "8px",
                  }}
                />

                <Box
                  sx={{
                    height: "100px",
                    backgroundColor: "#ffff",
                    width: "200px",
                  }}
                ></Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Lista;
