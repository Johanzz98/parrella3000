"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "@/api/axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";  
const paperStyle = {
  padding: 4,
  height: "72vh",
  width: 520,
  margin: "0 7px 45px",
  boxShadow: "none",
  borderRadius: "24px",
  alignItems: "center",
  justifyContent: "center",
};

const SmallpaperStyle = {
  padding: 10,
  maxHeight: "73vh",
  width: 230,
  margin: "0 auto 60.5px",
  boxShadow: "none",
  borderRadius: "24px",
};

const headerStyle = {
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  color: "#111",
  border: "none",
  textAlign: "center",
  fontFamily: "'Helvetica', sans-serif",
};

const marginTop = {
  marginTop: 5,
};

const RegisterAdmin = ({ open, onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
    person: {
      phoneNumber: "",
      fullName: "",
      country: "",
      codePostal: "",
    },
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      if (!token) {
        // Manejar el caso cuando no hay token
        toast.error("No hay token disponible para la autenticación.");
        return;
      }

      // Realizar la petición para crear el usuario administrador
      const response = await axios.post("/user/admin", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      alert("Usuario creado exitosamente");
      onClose();
    } catch (error) {
     
      alert("Usuario ya Existente");
    } finally {
      setSubmitting(false);
    }
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationSchema = Yup.object().shape({
    person: Yup.object().shape({
      fullName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
        .min(3, "It's too short")
        .required("Required"),
      country: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Should contain only letters")
        .min(3, "It's too short")
        .required("Required"),
      codePostal: Yup.number().min(3, "It's too short").required("Required"),
      phoneNumber: Yup.string() // Correctly treating phoneNumber as a string
        .matches(phoneRegExp, "Phone number is not valid") // Use.matches for string patterns
        .required("Required"), // Ensure phoneNumber is provided // Ensure phoneNumber is provided
    }),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Invalid email format"
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Only .com domains are allowed"
      )
      .matches(/@admin\.com$/, "Email must end with @admin.com"),

    password: Yup.string()
      .required("La contraseña es requerida") // Asegurarse de que la contraseña no esté vacía
      .min(8, "La contraseña debe tener al menos 8 caracteres") // Longitud mínima de la contraseña
      .matches(
        /(?=.*[a-z])/g,
        "La contraseña debe contener al menos una letra minúscula"
      ) // Letra minúscula
      .matches(
        /(?=.*[A-Z])/g,
        "La contraseña debe contener al menos una letra mayúscula"
      ) // Letra mayúscula
      .matches(/(?=.*\d)/g, "La contraseña debe contener al menos un número"), // Número
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
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
            <Grid align="center">
              <Grid item>
                <Typography style={headerStyle}>
                  Create Admin Accout{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#757575",
                    border: "none",
                    textAlign: "center",
                    fontFamily: "'Helvetica', sans-serif",
                  }}
                >
                  Please fill this form to create an account
                </Typography>
              </Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
                sx={{ width: "100%" }}
              >
                {(props) => (
                  <Form>
                    <Field
                      as={TextField}
                      fullWidth
                      name="person.fullName"
                      label="Name"
                      placeholder="Enter your Name"
                      helperText={<ErrorMessage name="person.fullName" />}
                      FormHelperTextProps={{
                        sx: {
                          fontSize: "0.6rem",
                          color: "#f44336",
                          marginTop: "16px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                        "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                        "& .MuiFormHelperText-root": {
                          fontSize: "0.6rem",
                          color: "#f44336",
                        },
                      }}
                    />
                    <Box display="flex" gap={2}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        helperText={<ErrorMessage name="email" />}
                        FormHelperTextProps={{
                          sx: {
                            fontSize: "0.6rem",
                            color: "#f44336",
                            marginTop: "16px",
                          },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />

                      <Field
                        as={TextField}
                        fullWidth
                        name="person.phoneNumber"
                        label="Phone Number"
                        placeholder="+56 9 XXXXXXX"
                        helperText={<ErrorMessage name="person.phoneNumber" />}
                        FormHelperTextProps={{
                          sx: { fontSize: "0.6rem", color: "#f44336" },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />
                    </Box>
                    <Box display="flex" gap={2}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="person.country"
                        label="Country"
                        placeholder="Enter your country"
                        helperText={<ErrorMessage name="person.country" />}
                        FormHelperTextProps={{
                          sx: {
                            fontSize: "0.6rem",
                            color: "#f44336",
                            marginTop: "16px",
                          },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />
                      <Field
                        as={TextField}
                        fullWidth
                        name="person.codePostal"
                        label="Postal Code"
                        placeholder="Enter your postal code"
                        helperText={<ErrorMessage name="person.codePostal" />}
                        FormHelperTextProps={{
                          sx: { fontSize: "0.6rem", color: "#f44336" },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ position: "relative" }}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        placeholder="Enter your password"
                        helperText={<ErrorMessage name="password" />}
                        FormHelperTextProps={{
                          sx: {
                            fontSize: "0.6rem",
                            color: "#f44336",
                            marginTop: "16px",
                          },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          right: 32,
                          transform: "translateY(-50%)",
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon fontSize="small" />
                        ) : (
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        )}
                      </IconButton>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        FormHelperTextProps={{
                          sx: { fontSize: "0.6rem", color: "#f44336" },
                        }}
                        sx={{
                          "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                          "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
                          "& .MuiFormHelperText-root": {
                            fontSize: "0.6rem",
                            color: "#f44336",
                          },
                        }}
                      />
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          right: 32,
                          transform: "translateY(-50%)",
                        }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOutlinedIcon fontSize="small" />
                        ) : (
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        )}
                      </IconButton>
                    </Box>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Field
                            as={Checkbox}
                            name="termsAndConditions"
                       
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontSize: "0.8rem",
                              color: "#757575",
                            }}
                          >
                            I accept the terms and conditions
                          </Typography>
                        }
                      />
                      <FormHelperText
                        sx={{ fontSize: "0.6rem", color: "#d32f2f" }}
                      >
                        <ErrorMessage name="termsAndConditions" />
                      </FormHelperText>
                    </FormGroup>

                    <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                sx={{ marginTop: "16px", marginLeft:'auto'}}
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>
            </Form>
                )}
              </Formik>
            </Grid>
          </Paper>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterAdmin;
