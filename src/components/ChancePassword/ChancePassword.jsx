"use client";
import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, useMediaQuery, Modal, IconButton } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const initialValues = {
    password: '',
    confirmPassword: ''
  };
  const validationSchema = Yup.object({
    password: Yup.string()
    .required("La contraseña es requerida") // Asegurarse de que la contraseña no esté vacía
    .min(8, "La contraseña debe tener al menos 8 caracteres") // Longitud mínima de la contraseña
    .matches(/(?=.*[a-z])/g, "La contraseña debe contener al menos una letra minúscula") // Letra minúscula
    .matches(/(?=.*[A-Z])/g, "La contraseña debe contener al menos una letra mayúscula") // Letra mayúscula
    .matches(/(?=.*\d)/g, "La contraseña debe contener al menos un número"), // Número
    confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Passwords must match')
   .required('Required')
  });

const ChancePassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const isMobile = useMediaQuery('(max-width:960px)');
    const [loading, setLoading] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      marginTop: isMobile ? '-24px' : '64px', // Aplica marginTop solo si es tamaño MD
      transition: 'margin-top 0.3s ease', // Agrega una transición para suavizar el cambio
    }}
  >

<Box
            sx={{
              display: "block",
              margin: '40px 0 20px'
            }}
          >
            <img
                src={`../../assets/recovery/vogue.png`}
              alt="Nike Logo"
              style={{
                display: "block",
                marginBottom:'-182px',
                bottom:130,
                width:"400px",
                position: 'relative',
              }}
            />
          </Box>
          <Box sx={{ marginTop:'-64px', width:  isMobile ? '100%' : '800px', padding: '20px', borderRadius:'24px', textAlign: 'center', zIndex:1 }}>
   
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
  
  
        

    <div style={{ textAlign: 'left', width: '100%', paddingLeft: '16px' }}>
      <Typography sx={{  fontSize: "14px",
  fontWeight: "600",
  color: "#111",
  display: 'flex',

  paddingTop: '18px',
  marginBottom:'24px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',}}>
        Crear una nueva Contraseña
      </Typography>
      <Typography sx={{  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  position: 'relative',
  bottom:24,
  marginBottom:'-16px',
  paddingTop: '18px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',}}>
        Por favor introduce su nueva contraseña  contraseña.
      </Typography>

      <Typography sx={{  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginTop: isMobile ? '12px' : '0', // Aplica marginTop solo si es tamaño MD
  marginBottom: isMobile ? '-24px' : '-12px', // Aplica marginTop solo si es tamaño MD
  paddingTop: '18px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',}}>
        Contraseña
      </Typography>
    </div>
</Box>

        <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor:'transparent',boxShadow:'none'  }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="password"
             placeholder="Nueva contraseña"
                type={showPassword? 'text' : 'password'}
                helperText={<ErrorMessage name="password" />}
           
                FormHelperTextProps={{
                    sx: { fontSize: "0.8rem", color: "#f44336",marginLeft:'-1px', alignItems: 'center',
                        fontFamily: "Helvetica, sans-serif",},
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
                   
                   width: isMobile ? '85%' : '80%', // Aplica marginTop solo si es tamaño MD
                      marginLeft:'-8px',
                      borderRadius:"0",
                      borderBottom: "2px solid black", // solo mostrar la línea inferior
                    },
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    marginTop: "8px", 
                  }}
                />
                  <Typography sx={{  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginTop: isMobile ? '12px' : '0', // Aplica marginTop solo si es tamaño MD
  marginBottom: isMobile ? '-12px' : '0', // Aplica marginTop solo si es tamaño MD
  paddingTop: '18px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft:'-12px',
 
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',}}>
       Nueva  Contraseña
      </Typography>
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                  placeholder="Confirmar nueva contraseña"
                type={showPassword? 'text' : 'password'}
                helperText={<ErrorMessage name="confirmPassword" />}
                FormHelperTextProps={{
                    sx: { fontSize: "0.8rem", color: "#f44336",marginLeft:'-1px', alignItems: 'center',
                        fontFamily: "Helvetica, sans-serif",},
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.8rem",
                      marginLeft: '-122px', // Ajusta el margen izquierdo del label (placeholder)
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
                    
                   width: isMobile ? '85%' : '80%', // Aplica marginTop solo si es tamaño MD
                      marginLeft:'-8px',
                      borderRadius:"0",
                      borderBottom: "2px solid black", // solo mostrar la línea inferior
                    },
                    "& .MuiInputLabel-root": { fontSize: "0.8rem"},
                    "& .MuiInputBase-root": { fontSize: "0.8rem" },
                    marginTop: "8px",
                  }}
                />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                size="small"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                {/* Ícono para alternar la visibilidad de la contraseña */}
              </IconButton>
              {/* Botón de envío */}
              <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '14px' }}>
  <Button
    type="submit"
    variant="contained"
    color="primary"
    disabled={isSubmitting || loading}
    sx={{
      backgroundColor: loading ? "#000" : "#000", // Mantener el fondo negro tanto en carga como en estado normal
      color: "white",
      width: isMobile ? "80%": "50%",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "18px",
      marginTop:'12px',
     marginLeft:'-12px',
      marginBottom: '12px',
      position: 'relative',
      justifyContent:  ' flex-start',
      '&:hover': {
        backgroundColor: 'black',
        color: 'grey',
        boxShadow: 'none'
      },
    }}
  >
    <span style={{ visibility: loading ? 'hidden' : 'visible', fontSize:'14px'}}>
      Guardar Cambios
      <KeyboardArrowRightIcon
        sx={{
        
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </span>
    
    {loading && (
    <>
      <CircularProgress
        size={24}
        sx={{
          position: 'absolute',
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          zIndex: 1,
        }}
      />
      <span
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
       
        }}
      />
    </>
    )}
  </Button>
  
  <Button
    type="button"
    variant="contained"
    color="primary"
    onClick={handleClose}
    sx={{
      border: "none",
      outline: "0",
      marginTop: '14px', // Espacio entre los botones
      color: "#111",
      marginLeft:'-12px',
      width: isMobile ? "60%": "50%",
      backgroundColor: "white",
      textAlign: "center",
      cursor: "pointer",
      boxShadow: 'none',
      border: '1px solid black',
       fontSize:'14px',
       justifyContent:  ' flex-start',
      marginBottom: '12px',
      '&:hover': {
        backgroundColor: 'white',
        color: 'grey',
        boxShadow: 'none',
        border: '1px solid black',
      },
    }}
  >
    Cancelar
    <KeyboardArrowRightIcon
      sx={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    />
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
        <Box sx={{ 
          backgroundColor: 'white',
         padding:'20px 40px',
          borderRadius: '0',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'left', 
         
          position: 'relative',
          top: '50%',
          left: isMobile ? '47.5%': '18%',
          transform: 'translate(-50%, -50%)',
          
        }}>
           
<Typography
  id="modal-title"

  sx={{ fontSize: "14px",
    fontWeight: "600",
    color: "#111",
    display: 'flex',
    margin:'12px 0 20px',
    alignItems: 'center',
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: 'auto',}}>


  <Box sx={{ flexGrow: 1 }}>
    Restablecer Contraseña
  </Box>
  <CloseOutlinedIcon   onClick={handleClose} sx={{ color: "#111",cursor:"pointer" }} />
</Typography>

          <Typography id="modal-description" sx={{ fontSize: "12px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  margin:'12px 0 20px',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',}}>
            Gracias por indicarnos tu dirección de correo electrónico. Te hemos enviado un e-mail con la información necesaria para restablecer tu contraseña. Es posible que el e-mail tarde un poco en llegar. Por favor, comprueba el correo no deseado/spam para comprobar que lo has recibido.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Typography   onClick={handleClose} sx={{ textDecoration: 'underline', cursor: 'pointer',fontSize: "12px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  margin:'12px 0 20px',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto', '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      boxShadow: 'none',
      border: '1px solid black',
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
}

export default ChancePassword;
