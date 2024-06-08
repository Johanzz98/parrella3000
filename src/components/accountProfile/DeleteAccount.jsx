"use client";
import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, IconButton, CircularProgress, Typography } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from "react-redux";
import axios from '@/api/axios';
import { useDispatch } from 'react-redux';
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

const detalles = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  marginTop:'16px',
  marginBottom:'24px',
  width:'90%'
};


const DeleteAccountButton = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState('');
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();


  const obtenerMiData = async () => {
    try {
      if (!token) {
        console.error('Token not available in Redux state');
        return;
      }
  
      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Update the fullName state with the value obtained from the response
      setFullName(response.data.data.person.fullName);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Call obtenerMiData when the component mounts
  useEffect(() => {
    obtenerMiData();
  }, []); // You can add dependencies here if necessary

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete('https://e-commerce-nestjs.onrender.com/api/user/delete-me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 || response.status === 202) {
        // Limpia el token del estado de Redux
        dispatch({ type: 'LOGOUT' });

        // Redirige al usuario a la página inicial
        window.location.href = "/"; // Redirect the user to the home page
      }
      console.log('Cuenta eliminada exitosamente', response.data);
    } catch (error) {
      console.error('Error al eliminar la cuenta:', error.response? error.response.data : error.message);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '&.MuiPaper-root': { border: 'none' }}}>
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '470px',  bgcolor: 'background.paper',border: 'none', p: 4 }}>
      <IconButton
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-12px',
          backgroundColor:"white",border:'1px solid black',
          borderRadius:'0'
        }}
      >
        <ClearIcon sx={{fontSize:'1rem', color:'black'}} />
      </IconButton>
      <Typography sx={helloName}>
      {fullName}, NOS DA PENA QUE TE VAYAS.
      </Typography>
      <Typography sx={detalles}>
      ¿Seguro que quieres eliminar tu cuenta Parrella No podrás acceder más a la información de tu cuenta, como tu historial de pedidos, tu lista de deseos o tu progreso deportivo.
      </Typography>

      <Typography sx={{...detalles,marginTop:'-12px',width:'86%',marginBottom:'-4px'}}>
      Si decides eliminar tu cuenta, se enviará un mensaje de confirmación a .
      </Typography>

    <Button type="button" variant="contained" color="primary" onClick={handleDeleteAccount}sx={{ marginTop:'12px', width:"50%",  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  cursor: "pointer",
  fontFamily: "Helvetica,sans-serif",
  fontSize: "18px",
  marginBottom: '12px',
  width:'100%',
  '&:hover': {
    backgroundColor: 'white', color:'red',boxShadow:'none', border:'1px solid black' // Define el color de fondo para el hover
  },
 
}}>
                Eliminar Cuenta
              </Button>

              <Button type="button" variant="contained" color="primary" onClick={handleDeleteAccount}sx={{ marginTop:'12px', width:"50%",  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  cursor: "pointer",
  fontFamily: "Helvetica,sans-serif",
  fontSize: "18px",
  marginLeft:'42px',
  marginBottom: '12px',
  width:'80%',
  '&:hover': {
    backgroundColor: 'white', color:'red',boxShadow:'none', border:'1px solid black' // Define el color de fondo para el hover
  },
 
}}>
                Cancelar
              </Button>
    </Box>
    </Modal>
  );
};

export default DeleteAccountButton;
