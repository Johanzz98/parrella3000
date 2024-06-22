import React, { useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import axios from '@/api/axios';
import { useTheme } from '@mui/material/styles'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SAVE_PASS = '/user/update-password';

const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "Helvetica,sans-serif",
  fontSize: "18px",
  marginBottom: '12px',
  width:'100%'
};

const helloName = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom: '12px',
  marginTop:'-24px'
};


const PasswordModal = ({ open, handleClose, setFullPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const token = useSelector((state) => state.auth.token);

  const initialValues = {
    password: '',
    confirmPassword: ''
  };

  const Unauthorized = () => {
    toast.info("La contraseña que usted esta colocando es la misma, no necesita ser cambiada.", {
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
  
      const requestData = {
        password: values.password,
      };
  
      const response = await axios.patch(SAVE_PASS, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 202 || response.status === 201) {
        
        toast.success("¡Se ha Cambiado la contraseña con exito!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.success("¡Se ha Cambiado la contraseña con exito!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
     
 
      Unauthorized();
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' }}}>
        <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMdScreen ? '800px' : '499px', // Ajustar el ancho basado en el tamaño de la pantalla
          height: 'auto',
          bgcolor: 'background.paper',
          border: 'none',
          p: 4
        }}
      >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="colored"
        style={{ fontSize: "12px", width: "600px",right:0,left:80,bottom:-54}} // Establece el tamaño y estilo del ToastContainer
      />
     
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: isMdScreen ? '-16px':'-3px' ,
            backgroundColor:"white",border:'1px solid black',
            borderRadius:'0'
          }}
        >
          <ClearIcon sx={{ fontSize: isMdScreen ?  '1rem' :'0.85rem', color: 'black' }} />
        </IconButton>
        <Box>
          <Typography sx={helloName}>EDITAR TU CONTRASEÑA</Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Nueva Contraseña"
                type={showPassword? 'text' : 'password'}
                helperText={<ErrorMessage name="password" />}
                FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText 
                sx={{ marginBottom: '16px' }} />
             
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                label="Confirmar Contraseña"
                type={showPassword? 'text' : 'password'}
                helperText={<ErrorMessage name="confirmPassword" />}
                FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText 
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
      width: isMdScreen ? "40%": "50%",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "18px",
     
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
      width: isMdScreen ? "40%": "50%",
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
      </Box>
    </Modal>
  );
};

export default PasswordModal;
