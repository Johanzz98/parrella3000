import React, { useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from '@/api/axios';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';

const SAVE_USER = '/user'; 



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


const FullNameModal = ({ open, handleClose, setFullName }) => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const token = useSelector((state) => state.auth.token);

  const initialValues = {
    person: {
      fullName: "",
    },
  };

  const validationSchema = Yup.object().shape({
    person: Yup.object().shape({
      fullName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
      .min(3, "It's too short")
      .required("Required"),
    })
  });
  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
  
      // Preparar los datos para la solicitud, incluyendo campos vacíos según lo esperado por el servidor
      const requestData = {
        person: {
          fullName: values.person.fullName,
          codePostal: "6101", // Campo requerido por el servidor, pero no utilizado en la actualización
          country: "Venezuela", // Campo requerido por el servidor, pero no utilizado en la actualización
        },
      };
  
      const response = await axios.patch(SAVE_USER, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 202 || response.status === 201) {
        handleClose();
        window.location.reload();
        setFullName(values.person.fullName); // Actualiza el nombre completo en el estado global/local
      } else {
        setError('Ocurrió un error al actualizar el Nombre.');
      }
    } catch (error) {
      console.error('Error updating Name:', error);
      setError('Ocurrió un error al actualizar el Nombre.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
  

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' }}}>
    
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '460px', height: '460px', bgcolor: 'background.paper',border: 'none', p: 4 }}>
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
        EDITAR TUS DATOS FISCALES
        </Typography>
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
                name="person.fullName"
                label="Nombre"
                placeholder="Colaca su Nombre"
                helperText={<ErrorMessage name="person.fullName" />}
                sx={{marginTop:'12px',marginBottom:'24px'}}
                FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText
              />

              <Button type="submit" variant="contained" color="primary"  disabled={isSubmitting}  sx={buttonStyle}>
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

export default FullNameModal;
