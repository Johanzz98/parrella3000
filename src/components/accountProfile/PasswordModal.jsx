import React, { useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import axios from '@/api/axios';

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
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom: '12px',
};

const PasswordModal = ({ open, handleClose, setFullPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const token = useSelector((state) => state.auth.token);

  const initialValues = {
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
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
        handleClose();
        setFullPassword(values.password); // Actualiza el nombre completo en el estado global/local
      } else {
        setError('Ocurrió un error al actualizar el password.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Ocurrió un error al actualizar el password.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' }}}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '450px', height: 'auto', bgcolor: 'background.paper',border: 'none', p: 4 }}>
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-16px',
            backgroundColor:"white",border:'1px solid black',
            borderRadius:'0'
          }}
        >
          <ClearIcon sx={{fontSize:'1rem', color:'black'}} />
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
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} sx={buttonStyle}>
                {loading? <CircularProgress size={24} /> : 'Actualizar Datos '}
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

export default PasswordModal;
