import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Top from "@/components/product/Top";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';


const title = {
  color: "#111",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  padding: "6px 24px",
  margin: 0,
  marginLeft: "8px",

  fontFamily: "Helvetica,sans-serif",
};
const detalles = {
    color: "#7e7e7e",
    fontSize: "10px",
    fontWeight: "550",
    display: "flex",
    padding: "6px 24px",
    fontFamily: "Helvetica,sans-serif",
  };
const Numeros = {
    color: "#111",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    margin: 0,
    
    fontFamily: "Helvetica,sans-serif",
  };

const PriceStonk = {
  color: "#7e7e7e",
  fontSize: "10px",
  fontWeight: "550",
  

  fontFamily: "Helvetica,sans-serif",
};

const Items = {
  color: "#7e7e7e",
  fontSize: "12px",
  fontWeight: "550",
  display: "flex",
  padding: "6px 24px",
  fontFamily: "Helvetica,sans-serif",
};


// Definición del esquema de validación
const validationSchema = Yup.object({
  shippingDescription: Yup.string().required('Shipping Description is required'),
  billingAddress: Yup.string().required('Billing Address is required'),
  additionalInfo: Yup.string().required('Additional Information is required'),
  otherDetails: Yup.string().required('Other Details are required'),
});

// Valores iniciales
const initialValues = {
  shippingDescription: '',
  billingAddress: '',
  additionalInfo: '',
  otherDetails: '',
};

// Función de envío
const onSubmit = (values) => {
  console.log(values);
};


const EditPage = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const getPaperStyle = (size) => ({
        textAlign: "center",
        
        boxShadow: "none",
       
        height: "24px",
        marginTop: "12px",
        backgroundColor: isSizeSelected(size) ? "#ff8854 " : "#e4ecec",
        position: "relative",
        cursor: "pointer",
        "&:hover": { color: "orange" },
      });
     
    const handleSizeClick = (size) => {
        // Clona el array de tallas seleccionadas
        let newSelectedSizes = [...selectedSizes];
    
        // Verifica si la talla ya está seleccionada
        const index = newSelectedSizes.indexOf(size);
    
        // Si no está seleccionada, agrégala; de lo contrario, quítala
        if (index === -1) {
          newSelectedSizes.push(size);
        } else {
          newSelectedSizes.splice(index, 1);
        }
    
        // Actualiza el estado con el nuevo array de tallas seleccionadas
        setSelectedSizes(newSelectedSizes);
      };
    
    const isSizeSelected = (size) => {
        // Verifica si una talla está seleccionada
        return selectedSizes.includes(size);
      };

  return (
    <Box>
        <Box sx={{backgroundColor:'#e3ecec',borderRadius:'12px'}}> 
            <EditIcon sx={{color:'#3c8888'}}/>
            <Typography>Edit</Typography>
        </Box>
      <Box>
        <Typography sx={title}>
          Nike Sneakers Air Jordan 4 Retro Seafoam 7826 Lacrotas
        </Typography>
        <Typography sx={detalles}>PRODUCT ID:GY345912</Typography>
      </Box>
      <Box>
        <Typography sx={title}> Product Short Description</Typography>
        <Typography sx={detalles}>
          Introducing the Nike Air Jordan 4 Retro Seafoam Sneakers , an
          essential to add to your footwear collection. These sneakers will take
          you straight back to the 80s, when basketball legend Michael Jordan
          dominated the sports scene. Every detail of these shoes has been
          carefully considered to offer you maximum comfort and style.
        </Typography>
      </Box>
      <Box
    sx={{
      width: "auto",
      height: "auto",
      border: "1px solid red",
      padding: "24px 24px",
      borderRadius:'16px',
      display: "flex",
      flexDirection: "row", // Alinea los elementos horizontalmente
      gap: "16px", // Espacio entre los elementos
      flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
      alignItems: "center", // Alinea verticalmente los elementos en el centro
      justifyContent: "space-between", // Distribuye el espacio entre los elementos
    }}
  >
        <Box display="flex" alignItems="center">
          <LocalAtmIcon sx={{ color: "green" }} />
          <Box ml={1}>
            <Typography sx={Numeros}>$120.40</Typography>
            <Typography sx={PriceStonk}>Price</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <LocalMallIcon sx={{ color: "#06AC2C" }} />
          <Box ml={1}>
            <Typography sx={Numeros}>$120.40</Typography>
            <Typography sx={PriceStonk}>Orders</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <StoreIcon sx={{ color: "#06AC2C" }} />
          <Box ml={1}>
            <Typography sx={Numeros}>$120.40</Typography>
            <Typography sx={PriceStonk}>Stock</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <CreditCardIcon sx={{ color: "#06AC2C" }} />
          <Box ml={1}>
            <Typography sx={Numeros}>$120.40</Typography>
            <Typography sx={PriceStonk}>Total Revenue</Typography>
          </Box>
        </Box>
      </Box>

      <Grid item xs={6} sm={6} md={5} sx={{ marginRight: 2 }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight:'600',
                                color: "#687692",
                                fontFamily: "Helvetica, sans-serif",
                                
                            }}
                        >
                            Add Size
                        </Typography>
                        <Grid container spacing={1} alignItems="center">

                            <Grid item xs={6} sm={6} md={1} onClick={() => handleSizeClick("M")}>
                                <Paper sx={getPaperStyle("M")}>
                                    {isSizeSelected("M") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("M") ? "white" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "#111" },
                                        }}
                                    >
                                        M
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={1} onClick={() => handleSizeClick("L")}>
                                <Paper sx={getPaperStyle("L")}>
                                    {isSizeSelected("L") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("L") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        L
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={1} onClick={() => handleSizeClick("XL")} sx={{marginLeft:'0px'}}>
                                <Paper sx={getPaperStyle("XL")}>
                                    {isSizeSelected("XL") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("XL") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                          
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        XL
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box
    sx={{
      width: "auto",
      height: "auto",
      border: "1px solid red",
      padding: "24px 24px",
      borderRadius:'16px',
      display: "flex",
      flexDirection: "row", // Alinea los elementos horizontalmente
      gap: "16px", // Espacio entre los elementos
      flexWrap: "wrap", // Permite que los elementos se envuelvan si no caben en una fila
      alignItems: "center", // Alinea verticalmente los elementos en el centro
      justifyContent: "space-between", // Distribuye el espacio entre los elementos
    }}
  >
       
     
        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight:'600',
                                color: "#687692",
                                fontFamily: "Helvetica, sans-serif",
                                
                            }}
                        >
                            Categories
                        </Typography>
                        <Box display="flex" alignItems="center">
          <Typography> Main Categories</Typography>
          </Box>
          <Box display="flex" alignItems="center">
          <Typography> Second Categories</Typography>
          
        </Box>
      </Box>
      <Box>
        <Typography>Descripción</Typography>
      </Box>

      <Box>
        <Typography sx={title}>Additional Information</Typography>
        <Box>
        <Box>
        <Typography sx={title}>DESCRIPCIÓN</Typography>
        <Typography>These Nike shoes give a sporty and masculine look. Combining retro aesthetics and modern comfort, they are ideal for any man who loves to express his personal style through his footwear. Whether you're looking to immortalize them on the basketball court like Michael Jordan did, or you're simply looking to add a touch of style to your everyday outfit, these Air Jordan 4 Retro Seafoam sneakers are the perfect accessory.</Typography>
        </Box>
        <Typography sx={title}>DETALLES</Typography>
        Ajuste holgado
Cierre frontal y cuello alto
Tejido tricot 100% poliéster reciclado
Bolsillos con cierre

Puños y dobladillo acanalados
Color del artículo: Bold Gold
Número de artículo: IP0611
        <Typography sx={title}>CUIDADOS</Typography>
        INSTRUCCIONES DE LAVADO

No usar blanqueador 
No lavar en seco 
Lavado a máquina agua tibia 
Secar a potencia baja 
Retoque con plancha fría

INFORMACIÓN ADICIONAL SOBRE EL CUIDADO

Usar únicamente detergente suave
Lavar con cierres ajustados
Lavar y planchar al revés
Lavar con colores similares
        </Box>
      </Box>


  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        <Box>
          <Typography>Shipping Description</Typography>
          <Field name="shippingDescription">
            {({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            )}
          </Field>
          <ErrorMessage name="shippingDescription" component="div" />

          <Typography>Billing Address</Typography>
          <Field name="billingAddress">
            {({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            )}
          </Field>
          <ErrorMessage name="billingAddress" component="div" />

          <Typography>Additional Information</Typography>
          <Field name="additionalInfo">
            {({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            )}
          </Field>
          <ErrorMessage name="additionalInfo" component="div" />

          <Typography>Other Details</Typography>
          <Field name="otherDetails">
            {({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            )}
          </Field>
          <ErrorMessage name="otherDetails" component="div" />

      
        </Box>
      </Form>
    )}
  </Formik>


      <Box>
        <Typography>
            Save Changes
        </Typography>
      </Box>
    </Box>
  );
};

export default EditPage;
