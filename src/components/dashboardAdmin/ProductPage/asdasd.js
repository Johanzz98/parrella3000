import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ProductPageImage from "./ProductPageImage";
import axios from '@/api/axios';
import { useSelector } from "react-redux";

import DeleteIcon from '@mui/icons-material/Delete';
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


const ProductPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const theme = useTheme();
  const isSmallScreen2 = useMediaQuery("(max-width:800px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const token = useSelector((state) => state.auth.token);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false); // Inicializa isSuperAdmin con un valor por defecto

  useEffect(() => {
    // Suponiendo que el rol del usuario está en el token, extraerlo y establecer isSuperAdmin
    const userRole = token
      ? JSON.parse(atob(token.split(".")[1])).role
      : null; // Ajusta esto según la estructura real de tu token
    setIsSuperAdmin(userRole === "SUPER_ADMIN" || userRole === "ADMIN"); // Asume que ambos roles tienen acceso completo
  }, [token]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/category");
      if (response.data.data && response.data.data.length > 0) {
        setCategories(response.data.data);
        // Establece un valor predeterminado para selectedCategory si aún no está seleccionado
        if (!selectedCategory && response.data.data.length > 0) {
          setSelectedCategory(response.data.data[0].id);
        }
      } else {
        toast.error("No categories found");
      }
    } catch (error) {
      toast.error("Error fetching categories", error);
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
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
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
    notes: Yup.string().max(250, "Notes must be at most 250 characters"),
    direction: Yup.string().required("Required"),
    direction2: Yup.string(),
    location: Yup.string().required("Required"),
    termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions"),
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
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "1000",
              color: "#4c5c7e",
              flex: 1,
            }}
          >
            New Product
          </Typography>
          <DeleteIcon
            sx={{ color: "#4c5c7e", cursor: "pointer", marginLeft: "200px" }}
          />
        </Box>
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
                fontWeight: "1000",
                color: "#4c5c7e",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
                marginBottom: "12px",
              }}
            >
              Description
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <Box
                    sx={{
                      border: "1px solid #e7e9ee",
                      borderRadius: "12px",
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#687692",
                        fontSize: "16px",
                        fontWeight: "600",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: "auto",
                        marginBottom: "12px",
                      }}
                    >
                      Product Name
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="person.fullName"
                      placeholder="Leather Jacket Fashion Girl Planner"
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
                        color: "#687692",
                        fontSize: "16px",
                        fontWeight: "600",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: "auto",
                        marginTop: "12px",
                      }}
                    >
                      Business Description
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      multiline
                      name="notes"
                      placeholder="Notes about your product"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      helperText={<ErrorMessage name="notes" />}
                      FormHelperTextProps={{
                        sx: { fontSize: "0.6rem", color: "#f44336" },
                      }}
                      InputProps={{
                        style: { fontSize: "0.8rem", color: "#111" },
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
                        "& .MuiInputBase-root": { fontSize: "0.8rem" },
                        "& .MuiInputBase-root.MuiOutlinedInput-root": {
                          height: "120px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                        marginTop: "8px",
                        borderColor: isFocused ? "#428fd5" : undefined,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: "20px",
                      border: "1px solid #e7e9ee",
                      borderRadius: "12px",
                      marginTop: "24px",
                      backgroundColor: "white",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "1000",
                        color: "#4c5c7e",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: "auto",
                        marginBottom: "12px",
                      }}
                    >
                      Category
                    </Typography>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="category">Product Category</InputLabel>
                      <Select
                        fullWidth
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        inputProps={{
                          id: "category",
                          style: {
                            height: "60px",
                            padding: "20px",
                            border: "1px solid #e7e9ee",
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 300,
                            },
                          },
                        }}
                      >
                        {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#687692",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontFamily: "Helvetica, sans-serif",
                        fontOpticalSizing: "auto",
                        marginTop: "12px",
                      }}
                    >
                      Additional Info
                    </Typography>
                    <Field
                      as={TextField}
                      fullWidth
                      name="direction2"
                      placeholder="Apartment, room, etc. (Optional)"
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
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      {/* Temporalmente deshabilitado hasta que ProductPageImage esté disponible */}
      {/* <Grid item xs={12} md={6} sx={{ marginTop: "72px" }}>
        <ProductPageImage />
      </Grid> */}
    </Grid>
  );
};

export default ProductPage;