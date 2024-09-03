import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "@/api/axios";
import { useAuth } from "@/context/AuthProvider";
import { useDispatch } from "react-redux";
import PasswordModal from "@/components/accountProfile/PasswordModal"; // Import the password modal component
import EmailModal from "@/components/accountProfile/EmailModal"; // Import the email modal component
import FullNameModal from "@/components/accountProfile/FullNameNodal"; // Import the full name modal component
import DeleteAccount from "@/components/accountProfile/DeleteAccount";
const AUTH_ME = "/auth/me";

const cuadrosRellenos = {
  backgroundColor: "white",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  flexDirection: "column",
  position: "relative",
  display: "flex",
  width: "92%",
  padding: "12px",
  margin: "12px",
};
const cuadrosRellenitos = {
  backgroundColor: "white",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  flexDirection: "column",
  position: "relative",
  display: "flex",
};

const detalles = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  marginTop: "12px",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const helloName = {
  fontSize: "18px",
  fontWeight: "1000",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  marginBottom: "12px",
  marginTop: "24px",
};

const Detallitos = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  marginBottom: "12px",
  marginTop: "12px",
};
const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: "14px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "18px",
  marginBottom: "12px",
};

const Relleno = {
  fontFamily: "Helvetica, sans-serif",
  fontSize: "12px",
  fontWeight: "500",
  fontOpticalSizing: "auto",
  textDecoration: "none",
  color: "black",
  "&:hover": { color: "grey" },
  cursor: "pointer",

  textDecoration: "underline",
};

const AccountData = ({ openModal }) => {
  const [isHoveredDetalle, setIsHoveredDetalle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPassword, setIsHoveredPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [codePostal, setcodePostal] = useState("");
  const [country, setcountry] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State to control the visibility of the password modal
  const [showEmailModal, setShowEmailModal] = useState(false); // State to control the visibility of the email modal

  const [showNameModal, setShowNameModal] = useState(false); // State to control the visibility of the full name modal
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");
  const { authState } = useAuth(); // Destructure authState from the context
  const dispatch = useDispatch();
  if (isMobile) {
    return null; // Si es móvil, no renderizar el componente Perfil
  }

  // Función para obtener datos del usuario
  const obtenerMiData = async () => {
    try {
      if (!token) {
        return;
      }

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFullName(response.data.data.person.fullName);
      setphoneNumber(response.data.data.person.phoneNumber);
      setcountry(response.data.data.person.country);
      setEmail(response.data.data.email);
      setcodePostal(response.data.data.person.codePostal);
    } catch (error) {}
  };

  // Llamar a obtenerMiData cuando el componente se monte
  useEffect(() => {
    obtenerMiData();
  }, []); // Puedes agregar dependencias aquí si es necesario

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch a LOGOUT action if necessary
    window.location.href = "/"; // Redirect the user to the home page
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDetallesEnter = () => {
    setIsHoveredDetalle(true);
  };

  const handleMouseDetallesLeave = () => {
    setIsHoveredDetalle(false);
  };

  const handleMouseDetallesPasswordEnter = () => {
    setIsHoveredPassword(true);
  };

  const handleMouseDetallesPasswordLeave = () => {
    setIsHoveredPassword(false);
  };

  return (
    <Box
      textAlign="center"
      role="presentation"
      sx={{ backgroundColor: "white", marginTop: "-54px" }}
    >
      <Box sx={cuadrosRellenos}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              marginBottom: "24px",
              display: "flex",
              marginLeft: "auto",
              position: "relative",
              zIndex: "2",
              top: "42px", // Mover hacia arriba 20px
              width: "100%",
              left: 960,
            }}
          >
            {/* <Typography sx={{ ...Relleno, color: 'white', 
      // Alinear con el borde derecho
      }} onClick={handleLogout}>Cerrar Sesión</Typography>*/}
          </Box>
        </Box>
        <Typography
          sx={{ ...helloName, marginTop: "42px", marginBottom: "-6px" }}
        >
          MIS DATOS
        </Typography>
        <Typography
          sx={{ ...detalles, marginBottom: "-18px", marginTop: "6px" }}
        >
          Modifica tus datos personales a continuación para que tu cuenta esté
          actualizadas
        </Typography>
      </Box>

      <Box sx={cuadrosRellenos}>
        <Typography
          sx={{ ...Detallitos, marginBottom: "-12px", marginTop: "-6px" }}
        >
          Detalles
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          <Typography sx={{ ...detalles, marginBottom: "-12px" }}>
            {fullName}
          </Typography>
          <Typography sx={{ ...detalles, marginBottom: "-12px" }}>
            {country}
          </Typography>
          <Typography sx={detalles}>{phoneNumber}</Typography>
          <Typography sx={detalles}>{codePostal}</Typography>
        </Box>

        <Typography
          sx={{
            ...detalles,
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: "700",
            borderRadius: "6px",
            bgcolor: isHovered ? "black" : "white",
            color: isHovered ? "white" : "black",
            transition: "background-color 0.3s ease, color 0.1s ease",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setShowNameModal(true)}
        >
          Editar
        </Typography>
        <Box sx={cuadrosRellenitos}>
          <Typography
            sx={{ ...Detallitos, marginBottom: "-12px", marginTop: "12px" }}
          >
            DATOS DE ACCESO
          </Typography>
          <br />
          <Typography
            sx={{ ...Detallitos, marginBottom: "-6px", marginTop: "-1px" }}
          >
            Correo Eletrónico:
          </Typography>
          <Typography sx={detalles}>{email}</Typography>{" "}
          {/* Aquí usamos email */}
          <Typography
            sx={{
              ...detalles,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "700",
              borderRadius: "6px",
              marginTop: "12px",
              bgcolor: isHoveredDetalle ? "black" : "white",
              color: isHoveredDetalle ? "white" : "black",
              transition: "background-color 0.3s ease, color 0.1s ease",
            }}
            onMouseEnter={handleMouseDetallesEnter}
            onMouseLeave={handleMouseDetallesLeave}
            onClick={() => setShowEmailModal(true)}
          >
            Editar
          </Typography>
        </Box>
        <Box sx={cuadrosRellenitos}>
          <Typography sx={{ ...Detallitos, marginBottom: "-12px" }}>
            Contraseña
          </Typography>

          <Typography sx={{ ...detalles }}>●●●●●●●●●</Typography>
          <Typography
            sx={{
              ...detalles,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "700",
              borderRadius: "6px",
              marginTop: "12px",
              marginBottom: "14px",
              bgcolor: isHoveredPassword ? "black" : "white",
              color: isHoveredPassword ? "white" : "black",
              transition: "background-color 0.3s ease, color 0.1s ease",
            }}
            onMouseEnter={handleMouseDetallesPasswordEnter}
            onMouseLeave={handleMouseDetallesPasswordLeave}
            onClick={() => setShowPasswordModal(true)}
          >
            Editar Contraseña
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              boxShadow: "none",
              marginBottom: "-12px",
              marginLeft: "42px",

              width: "80%",
              "&:hover": {
                backgroundColor: "white",
                color: "red",
                boxShadow: "none", // Define el color de fondo para el hover
              },
            }}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
          <Box>
            <Typography
              sx={{
                ...helloName,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-12px",
                marginTop: "14px",
              }}
            >
              GESTIONAR CUENTA
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                ...buttonStyle,
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                boxShadow: "none",
                marginBottom: "2px",

                marginLeft: "108px",
                width: "60%",
                "&:hover": {
                  backgroundColor: "white",
                  color: "red",
                  boxShadow: "none", // Define el color de fondo para el hover
                },
              }}
              onClick={() => setShowDeleteAccount(true)} // Toggle the state to open the modal
            >
              Eliminar cuenta
            </Button>
          </Box>
          {/* Pass the handleSubmit function to the DeleteAccount component */}
          <FullNameModal
            open={showNameModal}
            handleClose={() => setShowNameModal(false)}
          />

          <PasswordModal // Password modal component
            open={showPasswordModal}
            handleClose={() => setShowPasswordModal(false)}
          />

          <EmailModal // Email modal component
            open={showEmailModal}
            handleClose={() => setShowEmailModal(false)}
          />

          <DeleteAccount
            open={showDeleteAccount} // Pass the state variable to control modal's visibility
            handleClose={() => setShowDeleteAccount(false)} // Close modal function
          />
          <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#111",
                display: "flex",
                marginTop: "6px",

                fontFamily: "Helvetica,sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Si eliminas tu cuenta adidas, ya no tendrás acceso a la
              información almacenada en la misma, como tu historial de pedidos o
              tu lista de deseos.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountData;
