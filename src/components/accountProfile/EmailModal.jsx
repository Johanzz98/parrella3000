import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ClearIcon from '@mui/icons-material/Clear';
import axios from '@/api/axios';
import { useAuth } from "@/context/AuthProvider";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  marginBottom: '20px',
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


const EmailModal = ({ open, handleClose, onSubmit }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Estado para la carga
  const [error, setError] = useState(null); // Estado para el error

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Enter a valid email")
    .required("Required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "Invalid email format"
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
      "Only .com domains are allowed"
    ),
  });
  

  const token = useSelector((state) => state.auth.token);
  const { authState } = useAuth();
  const dispatch = useDispatch();


  const notFound = () => {
    toast.error("Este Email ya existe", {
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

  const checkEmailExists = async (emailToCheck) => {
    try {
      const response = await axios.get('/AUTH_ME', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    
      return response.data.exists; // Devuelve true si el correo existe, false en caso contrario
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false;
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
  
      const exists = await checkEmailExists(values.email);
      if (exists) {
        setError('El correo electrónico ya existe.');
        setLoading(false);
        return;
      }
  
      const response = await axios.patch(SAVE_USER, { email: values.email }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Verifica que la respuesta sea exitosa antes de recargar la página
      if (response.status === 202 || response.status === 201) {
        // Proceder a recargar la página
        window.location.reload();
      } else {
        // Manejar el caso en que la respuesta no sea exitosa
        console.error('Respuesta del servidor no esperada:', response);
        notFound();
      }
  
      // Limpieza de estados y cierre del modal
      setError(null);
      handleClose();
   window.location.reload();
    } catch (error) {
      console.error('Error updating email:', error);
        notFound();
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' }}}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '460px',  bgcolor: 'background.paper', border: 'none', p: 4 }}>
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-16px',
            backgroundColor:"white",
            border:'1px solid black',
            borderRadius:'0'
          }}
        >
        
          <ClearIcon sx={{fontSize:'1rem', color:'black'}} />
        </IconButton>
        <Box>
            <Typography sx={helloName}>
              EDITAR TU EMAIL
            </Typography>
            </Box>
        <Formik
          initialValues={{ email }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Nuevo Correo"
                placeholder="Colaca su Correo"
                type={showEmail? 'text' : 'email'}
                helperText={<ErrorMessage name="email" />}
                FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText
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
                {/* Ícono para alternar la visibilidad de la contraseña */}
              </IconButton>
              {/* Botón de envío */}
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}  sx={{
    ...buttonStyle,
    
    '&:hover': {
      backgroundColor: 'black', color:'grey',boxShadow:'none' // Define el color de fondo para el hover
    },
  }}>
              <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="colored"
        style={{ fontSize: "12px", width: "100%", right: 0,top:420}} // Establece el tamaño y estilo del ToastContainer
      />
                {loading? <CircularProgress size={24} /> : 'Actualizar Correo Electrónico'}
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button type="button" variant="contained" color="primary" onClick={handleClose} sx={{ marginTop:'12px', width:"50%",  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
 marginLeft:'96px',
  cursor: "pointer",
  fontFamily: "Helvetica,sans-serif",
  fontSize: "18px",
  marginBottom: '12px',
 
}}>
                Cancelar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EmailModal;
