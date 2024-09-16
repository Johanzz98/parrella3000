import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
const Container = {
  display: "flex",
  justifyContent: "space-between", // Alinea los ítems horizontalmente con espacio entre ellos

  borderRadius: "12px",
  padding: "12px", // Añadido padding para mejorar el espaciado
};

const Header = {
  color: "#111",
  fontSize: "16px",
  fontWeight: "600",
  display: "flex",

  margin: 0,
  marginLeft: "-4px",
  fontFamily: "Helvetica,sans-serif",
};

const title = {
  color: "#111",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  padding: "6px 6px",
  margin: 0,

  fontFamily: "Helvetica,sans-serif",
};

const Detail = {
  color: "#868686",
  fontSize: "12px",
  marginLeft: "6px",
  fontFamily: "Helvetica,sans-serif",
};

const Detail2 = {
  color: "#111",
  fontSize: "12px",
  marginLeft: "6px",
  fontFamily: "Helvetica,sans-serif",
};

const Edit = {
  color: "#777777",
  fontSize: "12px",
  padding: "6px",

  display: "flex",
  fontWeight: 550,
  fontFamily: "Helvetica,sans-serif",
};

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: "14px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "16px",
  marginBottom: "12px",
};

const InvoiceRight = () => {
  return (
    <Box sx={{ padding: "12px" }}>
      <Box
        sx={{
          padding: "24px",
          marginTop: "-28px",
          marginBottom: "36px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column", // Cambiado a columna para alinear verticalmente los elementos
          gap: "16px", // Espacio entre los elementos
          backgroundColor: "white",
          width: "360px",
        }}
      >
        <Box sx={Container}>
          <Typography sx={Header}>Client Details</Typography>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              margin: 0,
              width: "86px",
              height: "32px",
              borderRadius: "16px",
              backgroundColor: "#fafafa",
              border: "1px solid #eeeeee",
              marginTop: "-5px",
              marginRight: "-12px",
            }}
          >
            <EditRoadOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#777777",
                marginLeft: "12px",
                paddingRight: "2px",
              }}
            />
            <Typography sx={Edit}>Edit</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={title}>Yonaiker Daniel</Typography>

          <Typography sx={Detail}>Client</Typography>
        </Box>
        <Box sx={Container}>
          <Typography sx={Detail}>Mobile:</Typography>

          <Typography sx={Detail2}>+56 9 3755 2580</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>E-Mail:</Typography>
          <Typography sx={Detail2}>Johanzzeroc@gmail.com</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>Location:</Typography>
          <Typography sx={Detail2}>La copita calle la florida n°51</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        />
        <Box sx={Container}>
          <Typography sx={Detail}>Location:</Typography>
          <Typography sx={Detail2}>6101 Venezuela</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-12px",
            marginBottom: "16px",
          }}
        />
      </Box>

      <Box
        sx={{
          padding: "24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column", // Cambiado a columna para alinear verticalmente los elementos
          gap: "16px", // Espacio entre los elementos
          backgroundColor: "white",
          width: "360px",
        }}
      >
        <Box sx={Container}>
          <Typography sx={Header}>Payment Method</Typography>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              margin: 0,
              width: "86px",
              height: "32px",
              borderRadius: "16px",
              backgroundColor: "#fafafa",
              border: "1px solid #eeeeee",
              marginTop: "-5px",
              marginRight: "-12px",
            }}
          >
            <EditRoadOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#777777",
                marginLeft: "12px",
                paddingRight: "2px",
              }}
            />
            <Typography sx={Edit}>Edit</Typography>
          </Box>
        </Box>
        <Box sx={{ ...Container, marginTop: "2px", padding: "-2px" }}>
          <Typography sx={Detail}>Card Number </Typography>
          <Typography sx={Detail2}>xxx xxxx xxxx1234</Typography>
        </Box>
        <Divider
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            color: "red",
            marginTop: "-4px",
            marginBottom: "12px",
          }}
        />
        <Box
          sx={{
            ...Container,
            marginTop: "-16px",
            padding: "-2px",
            marginBottom: "12px",
          }}
        >
          <Typography sx={Detail}>Card Holder Name</Typography>
          <Typography sx={Detail2}>Yuridisaida Katiuska</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "36px",
          padding: "24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column", // Cambiado a columna para alinear verticalmente los elementos
          gap: "16px", // Espacio entre los elementos
          
        }}
      >
        {/* Comment Section */}
    

        <Box>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: "#ff8548",
              color: "#ffff",
              borderRadius: "12px",
              boxShadow: "none",
              marginBottom: "-12px",

              width: "100%",
              "&:hover": {
                backgroundColor: "white",
                color: "#111",
                boxShadow: "none", // Define el color de fondo para el hover
              },
            }}
          >
            Send Invoices
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceRight;
