
import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from '@/api/axios';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';

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



const FullNameModal = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const token = useSelector((state) => state.auth.token);
  const [person, setPerson] = useState({
    fullName: '',
    country: '',
    phoneNumber: '',
    codePostal: '',
  });

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const initialValues = {
    person: {
      fullName: '',
      country: '',
      phoneNumber: '',
      codePostal: '',
    }
  };

  const validationSchema = Yup.object().shape({
    person: Yup.object().shape({
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
    })
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
      setPerson(prevState => ({
       ...prevState,
        fullName,
        phoneNumber,
        country,
        codePostal,
      }));
    } catch (error) {
      console.error('Error obteniendo los datos del usuario:', error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
  
      // Your existing logic here...
  
      const requestData = {
        person: {
          fullName: values.person.fullName,
          codePostal: values.person.codePostal,
          country: values.person.country,
          phoneNumber: values.person.phoneNumber,
        },
      };
  
      console.log('Sending data:', requestData); // Log the data being sent
  
      const response = await axios.patch(SAVE_USER, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        handleClose(); // Close the modal
      } else {
        // Assuming the server responds with a body containing error messages
        const errorMessage = response.data.message || 'Error al actualizar los datos. Por favor, inténtalo de nuevo.';
        setError(errorMessage);
      }
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
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '460px', height: 'auto', bgcolor: 'background.paper', border: 'none', p: 4 }}>
        <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-16px',
            backgroundColor: "white",
            border: '1px solid black',
            borderRadius: '0'
          }}
        >
          <ClearIcon sx={{ fontSize: '1rem', color: 'black' }} />
        </IconButton>
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "1000", color: "#111", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontFamily: "Helvetica,sans-serif", fontOpticalSizing: 'auto', marginBottom: '12px' }}>
            EDITAR TUS DATOS FISCALES
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="person.fullName"
                label="Nombre"
                value={person.fullName}
                onChange={(e) => setPerson({...person, fullName: e.target.value})}
                helperText={<ErrorMessage name="person.fullName" />}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Field
                as={TextField}
                fullWidth
                name="person.country"
                label="País"
                value={person.country}
                onChange={(e) => setPerson({...person, country: e.target.value})}
                helperText={<ErrorMessage name="person.country" />}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Field
                as={TextField}
                fullWidth
                name="person.phoneNumber"
                label="Número de Teléfono"
                value={person.phoneNumber}
                onChange={(e) => setPerson({...person, phoneNumber: e.target.value})}
                helperText={<ErrorMessage name="person.phoneNumber" />}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Field
                as={TextField}
                fullWidth
                name="person.codePostal"
                label="Número de Código Postal"
                value={person.codePostal}
                onChange={(e) => setPerson({...person, codePostal: e.target.value})}
                helperText={<ErrorMessage name="person.codePostal" />}
                sx={{ marginTop: '12px', marginBottom: '24px' }}
                FormHelperTextProps={{ sx: { color: "#f44336" } }}
              />
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || loading} sx={{ marginTop: '12px', width: "100%", cursor: "pointer", fontFamily: "Helvetica, sans-serif", fontSize: "18px" }}>
                {loading? <CircularProgress size={24} /> : 'Actualizar Datos'}
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button type="button" variant="contained" color="primary" onClick={handleClose} sx={{ marginTop: '12px', width: "100%", cursor: "pointer", fontFamily: "Helvetica, sans-serif", fontSize: "18px" }}>
                Cancelar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default FullNameModal;