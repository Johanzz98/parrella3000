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
  borderRadius: "8px",
  marginTop:'32px',

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
  const theme = useTheme();
  const isSmallScreen2 = useMediaQuery("(max-width:800px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const token = useSelector((state) => state.auth.token);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false); // Inicializa isSuperAdmin con un valor por defecto
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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
      const response = await axios.get('/category');
      if (response.data.data && response.data.data.length > 0) {
        setCategories(response.data.data);
      } else {
        toast.error('No categories found');
      }
    } catch (error) {
      toast.error('Error fetching categories', error);
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
    <Grid container spacing={3} sx={{backgroundColor:'#f1f4fa',padding:'24px',marginTop:'-7px',marginLeft:'-24px'}}>
      <Grid item xs={12} md={6} >
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '12px',backgroundColor:'White',height:'64px', width:"1200px",borderRadius:'12px',paddingRight:'12px'}}>
      <Typography
        sx={{
          marginLeft:'24px',
          fontSize: '18px',
          fontWeight: '1000',
          color: '#4c5c7e',
   
        }}
      >
        New Product
      </Typography>
      <Box sx={{ marginLeft: 'auto' }}>
     
        <Box sx={{ marginLeft: '-32px' }}>
        <DeleteIcon sx={{ color: '#4c5c7e', cursor: 'pointer',marginLeft:'-12px', }} />
      </Box>
      </Box>
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
              
        
                fontWeight:'1000',
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
                 <Box sx={{ border: "1px solid #e7e9ee", borderRadius: "12px", padding: "20px" }}>
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
                    >Business Description</Typography>

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
        style: { fontSize: "0.8rem",color:"#111" },
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
          height: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined, // Cambia el color del borde aquí
      }}
    />
                  </Box>
                  <Typography
            sx={{
              fontSize: "16px",
                
        
                fontWeight:'1000',
                color: "#4c5c7e",
             marginTop:'16px',
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica,sans-serif",
              fontOpticalSizing: "auto",
              marginBottom: "-12px",
            }}
          >
                     Category
                    </Typography>
                  <Box
                    sx={{
                      padding: "20px",
                      border: "1px solid #e7e9ee",
                      borderRadius: "12px",
                      marginTop:'24px',
                      backgroundColor: "white",
                    }}
                  >
                 
                    <Box>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: '600',
          color: "#687692",
          display: "flex",
          marginBottom:'12px',
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Helvetica, sans-serif",
          fontOpticalSizing: "auto",
        }}
      >
        Main Product Category
      </Typography>

      <Box >
      <select
  style={{ height: '60px',width:'500px',border:'1px solid #c7c7c7',padding:'20px',paddingLeft:'12px',borderRadius:'4px' }} 
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  {categories.map((category) => (
   <option 
   key={category.id} 
   value={category.id}
  sx={{
     fontSize: "16px",
    boxShadow:'none',
     color: "#111",
  borderRadius:'none',
     display: "flex",
     justifyContent: "flex-start",
     alignItems: "center",
     fontFamily: "Helvetica, sans-serif",

   }}
 >
   {category.name}
 </option>
  ))}
</select>
      </Box>
      <Box sx={{marginTop:'12px'}}>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: '600',
          color: "#687692",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom:'12px',
          fontFamily: "Helvetica, sans-serif",
          fontOpticalSizing: "auto",
        }}
      >
        Second Product Category
      </Typography>

      <Box >
      <select
  style={{ height: '60px',width:'500px',border:'1px solid #c7c7c7',padding:'20px',paddingLeft:'12px',borderRadius:'4px' }} 
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  {categories.map((category) => (
   <option 
   key={category.id} 
   value={category.id}
  sx={{
     fontSize: "16px",
    boxShadow:'none',
     color: "#111",
  borderRadius:'none',
     display: "flex",
     justifyContent: "flex-start",
     alignItems: "center",
     fontFamily: "Helvetica, sans-serif",

   }}
 >
   {category.name}
 </option>
  ))}
</select>
      </Box>
      </Box>
      
      
</Box>

</Box>

<Box sx={{marginTop:'24px',marginBottom:'6px'}}>
<Typography
            sx={{
              fontSize: "16px",
              
        
                fontWeight:'1000',
                color: "#4c5c7e",
             
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica,sans-serif",
              fontOpticalSizing: "auto",
              marginBottom: "12px",
            }}
          >
                      Details Image
                    </Typography>
</Box>

<Box sx={{ border: "1px solid #e7e9ee", borderRadius: "12px", padding: "20px" }}>
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
                      Descripción
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
        style: { fontSize: "0.8rem",color:"#111" },
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
          height: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined, // Cambia el color del borde aquí
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
                    >Detalles</Typography>

                    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your detail"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem",color:"#111" },
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
          height: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined, // Cambia el color del borde aquí
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
                    >Cuidados</Typography>

                    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your take care of product"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem",color:"#111" },
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
          height: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined, // Cambia el color del borde aquí
      }}
    />
                  </Box>
      
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} sx={{marginTop:'72px'}}>
        <ProductPageImage />
      </Grid>
    </Grid>
  );
};

export default ProductPage;
