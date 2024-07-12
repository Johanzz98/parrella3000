"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "@/api/axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Image from "next/image";

const REGISTER_URL = "/user";

const paperStyle = {
  padding: 4,
  height: "72vh",
  width: 294,
  margin: "0 7px 45px",
  boxShadow: "none",
  borderRadius: "24px",
  alignItems: "center",
  justifyContent: "center",
};

const SmallpaperStyle = {
  padding:10,
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
  fontFamily: " 'Helvetica', sans-serif",
};

const marginTop = {
  marginTop: 5,
};

const SignUp = () => {
  const theme = useTheme();
  const isSmallScreen2 = useMediaQuery('(max-width:800px)');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const checkboxStyle = {
    transform: isSmallScreen2? 'scale(0.8)' : 'scale(0.8)',
    left: isSmallScreen2? 12 : 2,
    bottom: isSmallScreen2? 10 : 0,
  };
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

  const notFound = () => {
    toast.error("¡Esta cuenta ya existe!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const Unauthorized = () => {
    toast.error("No Server Response", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const Failed = () => {
    toast.error("Registration Failed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const onSubmit = async (values, props) => {
   
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          email: values.email,
          password: values.password,
          person: {
            fullName: values.person.fullName,
            codePostal: values.person.codePostal,
            country: values.person.country,
            phoneNumber:values.person.phoneNumber,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success("Se ha registrado de manera exitosa");
      props.resetForm();
      window.location.reload();
    } catch (err) {
      if (!err.response) {
        Unauthorized();
      } else if (err.response.status === 409) {
        notFound();
      } else {
        Failed();
      }
      props.setSubmitting(false);
    }
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
      codePostal: Yup.number()
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
        "Invalid email format"
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Only .com domains are allowed"
      ),


    password: Yup.string()
    .required("La contraseña es requerida") // Asegurarse de que la contraseña no esté vacía
    .min(8, "La contraseña debe tener al menos 8 caracteres") // Longitud mínima de la contraseña
    .matches(/(?=.*[a-z])/g, "La contraseña debe contener al menos una letra minúscula") // Letra minúscula
    .matches(/(?=.*[A-Z])/g, "La contraseña debe contener al menos una letra mayúscula") // Letra mayúscula
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
        style={{ fontSize: "12px", width: "446px", right: 5 }} // Establece el tamaño y estilo del ToastContainer
      />
      
        <Grid align="center">
          {/*
          <Box>
            <Image
              src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
              alt="Nike Logo"
              width={54}
              height={32}
              style={{ cursor: "pointer", maxWidth: "100%", marginTop:'-10px' }} // Added maxWidth to ensure responsiveness
            />
             
          </Box>
   */}
          <Grid item>
            <Typography  style={headerStyle}>
              Create Account
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
                fontFamily: " 'Helvetica', sans-serif",
              }}
            >
              Please fill this form to create an account
            </Typography>
          </Grid>
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
                  name="person.fullName" // Asegúrate de que esté configurado así
                  label="Name"
                  placeholder="Enter your Name"
                  helperText={<ErrorMessage name="person.fullName" />} // También aquí
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                    "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    }, // Ajustar altura del TextField
                  }}
                />

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
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                    "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    }, // Ajustar altura del TextField
                    marginTop: "8px",
                  }}
                />

<Box
            
            sx={{
              display: 'flex',
              flexDirection: 'row', // Alinea los elementos horizontalmente
              gap: 2, // Espacio entre los elementos
              alignItems: 'center', // Alinea verticalmente los elementos
            }}
          >
            <Field
              name="person.codePostal"
              as={TextField}
              label="Codigo Postal"
              placeholder="Enter your Codigo Postal"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="person.codePostal" />}
              FormHelperTextProps={{
                sx: { fontSize: "0.6rem", color: "#f44336" },
              }}
              sx={{
                "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  height: "43px",
                }, // Ajustar altura del TextField
                marginTop: "8px",
              }}
            />
           
            <Field
              name="person.country"
              as={TextField}
              label="Country"
              placeholder="Enter your Country"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="person.country" />}
              FormHelperTextProps={{
                sx: { fontSize: "0.6rem", color: "#f44336", },
              }}
              sx={{
                "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  height: "43px",
                }, // Ajustar altura del TextField
                marginTop: "8px",
              }}
            />
          </Box>

               {/* <FormControl style={marginTop}>
                  <Field
                    as={RadioGroup}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="gender"
                    name="gender"
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      value="female"
                      name="gender"
                      control={<Radio />}
                      label="Female"
                      sx={{
                        transform: "scale(0.8)",
                        marginTop: "-32px",
                        marginBottom: "-24px",
                      }}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      sx={{
                        transform: "scale(0.8)",
                        marginTop: "-32px",
                        marginBottom: "-24px",
                      }}
                    />
                   <FormControlLabel value="other" control={<Radio />} label="Other" /> 
                  </Field>
                  <FormHelperText
                    sx={{
                      fontSize: "0.6rem",
                      color: "#f44336",
                      marginTop:'-6px',
                      display: 'flex', // 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom:'-12px'
                    }}
                  >
                    <ErrorMessage name="gender" />
                  </FormHelperText>
                </FormControl>
               */}
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
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                    "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                    }, // Ajustar altura del TextField
                    marginTop: "8px",
                  }}
                />
                <div style={{ position: "relative", width: "100%" }}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    helperText={<ErrorMessage name="password" />}
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
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </div>
                <div style={{ position: "relative", width: "100%" }}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    helperText={<ErrorMessage name="confirmPassword" />}
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
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    size="small"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {showConfirmPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </div>

                <FormControl component="fieldset">

  <FormGroup row>
    <FormControlLabel
      control={
        <Field
          as={Checkbox}
          name="termsAndConditions"
          sx={checkboxStyle}
          color="primary"
        />
      }
      label={
        <Typography
         
          sx={{ fontSize: "0.8rem" }}
        >
          I accept the terms and conditions
        </Typography> // Reduce the text size
      }
    />
  </FormGroup>
  <FormHelperText
    sx={{
      fontSize: "0.6rem",
      color: "#f44336",
      marginTop: '-2px',
      textAlign: "center"
    }} // Reduce the size and change the color of the helper text
  >
    <ErrorMessage name="termsAndConditions" />
  </FormHelperText>
</FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  sx={{
                    padding: '4px 12px', // Reduce el padding interno del botón
                    fontSize: '0.75rem', // Reduce el tamaño de la fuente
                    minWidth: 'auto', // Ajusta el ancho mínimo para adaptarse al contenido
                  }}
                >
                  {props.isSubmitting ? "Loading" : "Sign Up"}
                 
                  
      
                </Button>
        
              </Form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
