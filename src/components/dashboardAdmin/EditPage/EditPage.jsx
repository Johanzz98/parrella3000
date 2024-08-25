import React, { useState } from "react";
import { Box, Typography, TextField, Paper, Grid, Button, Divider } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useFormik } from "formik";
import * as Yup from "yup";

// Estilos
const title = { color: "#111", fontSize: "14px", fontWeight: "600", display: "flex", padding: "6px 24px", margin: 0, marginLeft: "8px", fontFamily: "Helvetica,sans-serif" };
const detalles = { color: "#7e7e7e", fontSize: "10px", fontWeight: "550", display: "flex", width: '80%', marginLeft: "8px", padding: "6px 24px", fontFamily: "Helvetica,sans-serif" };
const Numeros = { color: "#111", fontSize: "14px", fontWeight: "600", display: "flex", margin: 0, fontFamily: "Helvetica,sans-serif" };
const PriceStonk = { color: "#7e7e7e", fontSize: "10px", fontWeight: "550", fontFamily: "Helvetica,sans-serif" };

// Validación de Formik
const validationSchema = Yup.object({
  shippingDescription: Yup.string().required("Shipping Description is required"),
  billingAddress: Yup.string().required("Billing Address is required"),
  additionalInfo: Yup.string().required("Additional Information is required"),
  otherDetails: Yup.string().required("Other Details are required"),
});

const initialValues = {
  shippingDescription: "",
  billingAddress: "",
  additionalInfo: "",
  otherDetails: "",
};

// Función de envío
const onSubmit = (values) => {
  console.log(values);
};

const EditPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const getPaperStyle = (size) => ({
    textAlign: "center",
    boxShadow: "none",
    height: "24px",
    marginTop: "12px",
    backgroundColor: isSizeSelected(size) ? "#ff8854" : "#F4F4F4",
    position: "relative",
    cursor: "pointer",
    "&:hover": { color: "orange" },
  });

  const handleSizeClick = (size) => {
    let newSelectedSizes = [...selectedSizes];
    const index = newSelectedSizes.indexOf(size);
    if (index === -1) {
      newSelectedSizes.push(size);
    } else {
      newSelectedSizes.splice(index, 1);
    }
    setSelectedSizes(newSelectedSizes);
  };

  const isSizeSelected = (size) => {
    return selectedSizes.includes(size);
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", borderRadius: "12px", padding: "12px" }}>
        <Typography sx={{ color: "#111", fontSize: "16px", fontWeight: "600", padding: "6px 20px", margin: 0, fontFamily: "Helvetica,sans-serif" }}>Client Details</Typography>
        <Box display="flex" alignItems="center" sx={{ width: "86px", height: "36px", borderRadius: "6px", backgroundColor: "#fafafa", border: "1px solid #eeeeee", marginTop: "-5px", cursor: "pointer" }} onClick={() => setIsEditing(!isEditing)}>
          <EditRoadOutlinedIcon sx={{ fontSize: "20px", color: "#589999", marginLeft: "12px", paddingRight: "2px" }} />
          <Typography sx={{ color: "#589999", fontSize: "12px", padding: "6px", fontWeight: 550, fontFamily: "Helvetica,sans-serif" }}>Edit</Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={title}>Nike Sneakers Air Jordan 4 Retro Seafoam 7826 Lacrotas</Typography>
        <Typography sx={detalles}>PRODUCT ID: GY345912</Typography>
      </Box>

      <Box>
        <Typography sx={title}>Product Short Description</Typography>
        {isEditing ? (
          <TextField
            name="productDescription"
            value={formik.values.productDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{ ...detalles, width: '86%' }}
          />
        ) : (
          <Typography sx={{ ...detalles, width: '86%' }}>
            Introducing the Nike Air Jordan 4 Retro Seafoam Sneakers, an essential to add to your footwear collection. These sneakers will take you straight back to the 80s...
          </Typography>
        )}
      </Box>

      <Box
      sx={{
        width: 'auto',
        height: 'auto',
        border: '1px solid #eeeeee',
        padding: '24px 24px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex" alignItems="center">
        <LocalAtmIcon sx={{ color: 'green' }} />
        <Box ml={1}>
          <Typography sx={Numeros}>$120.40</Typography>
          <Typography sx={PriceStonk}>Price</Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ width: 'auto', height: 'auto', backgroundColor: '#eeeeee', mx: 2 }} />
      <Box display="flex" alignItems="center">
        <LocalMallIcon sx={{ color: '#06AC2C' }} />
        <Box ml={1}>
          <Typography sx={Numeros}>$120.40</Typography>
          <Typography sx={PriceStonk}>Orders</Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ width: 'auto', height: 'auto', backgroundColor: '#eeeeee', mx: 2 }} />
      <Box display="flex" alignItems="center">
        <StoreIcon sx={{ color: '#06AC2C' }} />
        <Box ml={1}>
          <Typography sx={Numeros}>$120.40</Typography>
          <Typography sx={PriceStonk}>Stock</Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ width: 'auto', height: 'auto', backgroundColor: '#eeeeee', mx: 2 }} />
      <Box display="flex" alignItems="center">
        <CreditCardIcon sx={{ color: '#06AC2C' }} />
  
        <Box ml={1}>
     
          <Typography sx={Numeros}>$120.40</Typography>
          <Typography sx={PriceStonk}>Total Revenue</Typography>
        </Box>
      </Box>
    </Box>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={5}>
          <Typography sx={title}>Add Size</Typography>
          <Grid container spacing={1} alignItems="center" sx={{ marginLeft: '24px' }}>
            {["M", "L", "XL"].map(size => (
              <Grid item xs={6} sm={6} md={2.5} key={size} onClick={() => handleSizeClick(size)}>
                <Paper sx={getPaperStyle(size)}>
                  {isSizeSelected(size) && (
                    <CloseOutlinedIcon sx={{ position: "absolute", top: "-8px", right: "-8px", backgroundColor: "#2c548c", padding: "2px", color: "white", borderRadius: "50%", fontSize: "12px" }} />
                  )}
                  <Typography sx={{ fontSize: "14px", color: isSizeSelected(size) ? "white" : "#111", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Helvetica, sans-serif", "&:hover": { color: "orange" } }}>
                    {size}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={6} sm={6} md={5} container alignItems="center" sx={{ marginLeft: '72px' }}>
          <Typography sx={title}>Stock:</Typography>
          <Grid container spacing={1}>
            {["M", "L", "XL"].map(size => (
              <Grid item xs={4} sm={4} md={4} key={size}>
                <TextField
                  label={size}
                  variant="outlined"
                  size="small"
                  sx={{ width: '100%' }}
                  InputProps={{ style: { textAlign: 'center' } }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
      <Box sx={{ width: "auto", height: "auto", border: "1px solid #dddddd", marginTop: '24px', marginBottom: '24px', borderRadius: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd", backgroundColor: '#f7f7f7' }}>
          <Typography sx={title}>Information</Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd" }}>
          <Box>
            <Typography sx={title}>Product</Typography>
            <Typography sx={detalles}>Nike Sneakers Air Jordan 4 Retro Seafoam 7826 Lacrotas</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd" }}>
          <Box>
            <Typography sx={title}>Main Categories</Typography>
            <Typography sx={detalles}>Hombre</Typography>
          </Box>

          <Box>
            <Typography sx={title}>Details</Typography>
            <Typography sx={detalles}>Hombre</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px' }}>
          <Box>
            <Typography sx={title}>Second Categories</Typography>
            <Typography sx={detalles}>Chaquetas</Typography>
          </Box>

          <Box>
            <Typography sx={title}>Details</Typography>
            <Typography sx={detalles}>Chaquetas</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "auto", height: "auto", border: "1px solid #dddddd", marginTop: '24px', marginBottom: '24px', borderRadius: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd", backgroundColor: '#f7f7f7' }}>
          <Typography sx={title}>Information Shipping</Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd" }}>
          <Box>
            <Typography sx={title}>Price of Shipping</Typography>
            <Typography sx={detalles}>Envios gratís a partir de 75.000$</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd" }}>
          <Box>
            <Typography sx={title}>Devoluciones</Typography>
            <Typography sx={detalles}>Cambios gratuitos de 30 días</Typography>
          </Box>

          <Box>
            <Typography sx={title}>Security</Typography>
            <Typography sx={detalles}>Paga seguro puedes pagar en línea</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", padding: '8px' }}>
          <Box>
            <Typography sx={title}>Second Categories</Typography>
            <Typography sx={detalles}>GUÍA DE TALLAS</Typography>
          </Box>

         
        </Box>
      </Box>

      <Box sx={{ width: "auto", height: "auto", border: "1px solid #dddddd", marginTop: '24px', marginBottom: '24px', borderRadius: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px", padding: '8px', borderBottom: "1px solid #dddddd", backgroundColor: '#f7f7f7' }}>
          <Typography sx={title}>Descripción</Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px", padding: '8px' }}>
          <Typography sx={title}>Additional Information</Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px", borderBottom: "1px solid #dddddd" }}>
              <Typography sx={title}>DESCRIPCIÓN</Typography>
              {isEditing ? (
                <TextField
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={detalles}
                />
              ) : (
                <Typography sx={detalles}>These Nike shoes give a sporty and masculine look...</Typography>
              )}
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px", borderBottom: "1px solid #dddddd" }}>
              <Typography sx={title}>DETALLES</Typography>
              {isEditing ? (
                <TextField
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={detalles}
                />
              ) : (
                <Typography sx={detalles}>Ajuste holgado Cierre frontal y cuello alto...</Typography>
              )}
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
              <Typography sx={title}>CUIDADOS</Typography>
              {isEditing ? (
                <TextField
                  name="care"
                  value={formik.values.care}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={detalles}
                />
              ) : (
                <Typography sx={detalles}>INSTRUCCIONES DE LAVADO No usar blanqueador...</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {isEditing && (
        <Box sx={{ padding: '16px' }}>
          <form onSubmit={formik.handleSubmit}>
        
            {formik.errors.otherDetails && formik.touched.otherDetails && (
              <div>{formik.errors.otherDetails}</div>
            )}

            <Button type="submit" variant="contained" color="primary" sx={{ marginRight: '8px' }}>Save Changes</Button>
            <Button type="button" variant="outlined" color="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default EditPage;
