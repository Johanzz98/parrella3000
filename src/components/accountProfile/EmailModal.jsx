import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ClearIcon from '@mui/icons-material/Clear';
import axios from '@/api/axios';
import { useTheme } from '@mui/material/styles'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuth } from "@/context/AuthProvider";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from '@emotion/styled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SAVE_USER = '/user';
const AUTH_ME = '/auth/me';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    display: 'flex',
    alignItems: 'center',
  },
  '& label span': {
    marginLeft: '2px',
    color: 'red',
    fontSize: '28px',
    position: 'relative',
    top: '8px',
  },
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
  },
}));

const EmailModal = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showEmail, setShowEmail] = useState(false);
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [currentEmail, setCurrentEmail] = useState('');
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("Campo requerido")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Formato de correo electrónico inválido"
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Solo se permiten dominios .com"
      ),
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
  
      setCurrentEmail(response.data.data.email); // Guarda el correo electrónico obtenido
    } catch (error) {
      console.error('Error obteniendo los datos del usuario:', error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);

      // Obtener el correo electrónico actual del usuario
      const currentEmailResponse = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Extraer el correo electrónico del usuario actual
      const currentUserEmail = currentEmailResponse.data.data.email;

      // Verificar si el correo electrónico proporcionado coincide con el actual
      if (currentUserEmail === values.email) {
        toast.info("El correo electrónico actual es el mismo, no necesita ser cambiado.");
        setLoading(false);
        setSubmitting(false);
    
        return; // Detener la ejecución aquí
      }

      // Proceder con la actualización si el correo electrónico no coincide
      const updateResponse = await axios.patch(SAVE_USER, {
        email: values.email
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (updateResponse.status === 202 || updateResponse.status === 201) {
        toast.success("¡Se ha actualizado el correo con éxito!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("Ocurrió un error al actualizar el correo.");
      }
    } catch (error) {
      console.error('Error actualizando el correo electrónico:', error);
      toast.error("Ocurrió un error al actualizar el correo.");
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
            EDITAR TU EMAIL
          </Typography>
        </Box>
        <Formik
  initialValues={{ email: currentEmail }} // Utiliza el estado para inicializar el valor
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                as={StyledTextField}
                fullWidth
                name="email"
                label={
                  <div>
                    Nuevo Correo
                    <span>*</span>
                  </div>
                }
                placeholder="Ingrese su nuevo correo electrónico"
                helperText={<ErrorMessage name="email" />}
                error={Boolean(errors.email && touched.email)}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />

              <IconButton
                onClick={() => setShowEmail(!showEmail)}
                size="small"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                {/* Ícono para alternar la visibilidad del correo */}
              </IconButton>

              {!isMdScreen && (
               <Box sx={{ border:'1px solid black', width:'432px', height:'36px',position:"absolute",bottom:108, left:42}}></Box>
              )}
               {isMdScreen && (
               <Box sx={{ border:'1px solid black', width:'726px', height:'36px',position:"absolute",bottom:110, left:46}}></Box>
              )}
              
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progress={undefined}
                theme="colored"
                style={{ fontSize: "12px", width: "100%", right: 0, top: 420 }} // Establece el tamaño y estilo del ToastContainer
              />

              {error && <p style={{ color: 'red' }}>{error}</p>}
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
    justifyContent:  ' flex-start',
    '&:hover': {
      backgroundColor: 'black',
      color: 'grey',
      boxShadow: 'none'
    },
  }}
>
  <span style={{ visibility: loading ? 'hidden' : 'visible'}}>
    Actualizar Correo Electronico
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

export default EmailModal;
