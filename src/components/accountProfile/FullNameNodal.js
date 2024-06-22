
import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from '@/api/axios';
import { useTheme } from '@mui/material/styles'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SAVE_USER = '/user'; 
const AUTH_ME = '/auth/me';



const helloName = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom: '12px',
};

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


const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    display: 'flex',
    alignItems: 'center',
  },
  '& label span': {
    

    marginLeft: '2px', 
    color: 'red',        // Cambia el color del asterisco a rojo
    fontSize: '28px',    // Cambia el tamaño de la fuente del asterisco
    position: 'relative',
    top: '8px',          // Ajusta esta propiedad según sea necesario para alinear el asterisco
  },
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green', // Color de borde verde por defecto
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green', // Color de borde verde al hacer hover
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green', // Color de borde verde cuando está enfocado
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red', // Color de borde rojo cuando hay error
    },
  },
}));
const FullNameModal = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false); 
  const theme = useTheme();
  const [error, setError] = useState(null); 
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const token = useSelector((state) => state.auth.token);
  const [person, setPerson] = useState({
    fullName: '',
    country: '',
    phoneNumber: '',
    codePostal: '',
  });

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "El nombre debe contener solo letras")
      .min(3, "Debe tener al menos 3 caracteres")
      .notRequired(),
    country: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Debe contenter solo letras")
      .min(3, "Debe tener al menos 3 caracteres")
      .notRequired(),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "El número de teléfono no es válido")
      .notRequired(),
    codePostal: Yup.string()
      .matches(/^\d+$/, "El código postal debe contener solo números")
      .min(3, "Debe tener al menos 3 caracteres")
      .notRequired(),
  });

  useEffect(() => {
    obtenerMiData();
  }, []);

  const obtenerMiData = async () => {
    try {
      if (!token) {
        return;
      }

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { fullName, phoneNumber, country, codePostal } = response.data.data.person;
      setPerson({
        fullName,
        phoneNumber,
        country,
        codePostal,
      });
    } catch (error) {
      console.error('Error obteniendo los datos del usuario:', error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
  
      const requestData = {
        person: values,
      };
  
      console.log('Sending data:', requestData); // Log the data being sent
  
      const response = await axios.patch(SAVE_USER, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200 || response.status === 202) {
        toast.success("¡Se ha  actualizado los datos con exito!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.success("¡Se ha  actualizado los datos con exito!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);}
    } catch (error) {
      console.error('Error updating user data:', error);
      setError(error.response?.data?.message || 'Ocurrió un error al actualizar los datos del usuario.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' } }}>
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
            backgroundColor: "white",
            border: '1px solid black',
            borderRadius: '0'
          }}
        >
          <ClearIcon sx={{ fontSize: isMdScreen ?  '1rem' :'0.85rem', color: 'black' }} />
        </IconButton>
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "1000", color: "#111", display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: "Helvetica,sans-serif", fontOpticalSizing: 'auto', marginBottom: '12px',marginTop:'-16px' }}>
            EDITAR TUS DATOS 
          </Typography>
        </Box>
        <Formik
          initialValues={person}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
        {({ isSubmitting, errors, touched }) => (
    <Form>
          <Field
  as={StyledTextField}
  fullWidth
  name="fullName"
  label={
    <div>
      Nombre<span>*</span>
    </div>
  }
  value={person.fullName}
  onChange={(e) => setPerson({ ...person, fullName: e.target.value })}
  helperText={<ErrorMessage name="fullName" />}
  error={Boolean(errors.fullName && touched.fullName)}
  sx={{ marginTop: '12px', marginBottom: '24px' }}
  FormHelperTextProps={{ sx: { color: "#f44336" } }}
/>
              <Field
            as={StyledTextField}
                fullWidth
                name="country"
                label={
                  <div>
                    País<span>*</span>
                  </div>
                }
                value={person.country}
                onChange={(e) => setPerson({ ...person, country: e.target.value })}
                helperText={<ErrorMessage name="country" />}
                error={Boolean(errors.country && touched.country)}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Field
              as={StyledTextField}
                fullWidth
                name="phoneNumber"
                label={
                  <div>
                   Número de Teléfono<span>*</span>
                  </div>
                }
              
                value={person.phoneNumber}
                onChange={(e) => setPerson({ ...person, phoneNumber: e.target.value })}
                helperText={<ErrorMessage name="phoneNumber" />}
                error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Field
                     as={StyledTextField}
                fullWidth
                label={
                  <div>
                  Número de Código Postal&nbsp;
                  <span>*</span>
                </div>
                }
                name="codePostal"
              
                value={person.codePostal}
                onChange={(e) => setPerson({ ...person, codePostal: e.target.value })}
                helperText={<ErrorMessage name="codePostal" />}
                error={Boolean(errors.codePostal && touched.codePostal)}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
               {!isMdScreen && (
               <Box sx={{ border:'1px solid black', width:'432px', height:'36px',position:"absolute",bottom:108, left:42}}></Box>
              )}
               {isMdScreen && (
               <Box sx={{ border:'1px solid black', width:'726px', height:'36px',position:"absolute",bottom:110, left:46}}></Box>
              )}
<Button
  type="submit"
  variant="contained"
  color="primary"
  disabled={isSubmitting || loading}
  sx={{
    backgroundColor: loading ? "#000" : "#000", // Mantener el fondo negro tanto en carga como en estado normal
    color: "white",
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "18px",
    marginBottom: '12px',
    position: 'relative',
   borderRadius:'none',
    justifyContent:  ' flex-start',
    '&:hover': {
      backgroundColor: 'black',
      color: 'grey',
      boxShadow: 'none'
    },
  }}
>
  <span style={{ visibility: loading ? 'hidden' : 'visible'}}>
    Actualizar Datos
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
        zIndex: 1, // Asegura que CircularProgress esté sobre el botón
      }}
    />
    <span
      style={{
        backgroundColor: 'black', // Fondo negro semi-transparente
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Asegura que el fondo esté detrás de CircularProgress
      }}
    />
  </>
)}
</Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button
  type="button"
  variant="contained"
  color="primary"
  onClick={handleClose}
  sx={{
    border: "none",
    outline: "0",
    marginTop: '14px',
    color: "#111",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: 'none',
    border: '1px solid black',
    fontSize: "18px",
    marginBottom: '12px',
    justifyContent:  ' flex-start',
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
        right: '10px', // Ajusta la posición del ícono a la derecha
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    />
  
</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default FullNameModal;