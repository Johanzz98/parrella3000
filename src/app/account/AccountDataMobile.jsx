import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "@/api/axios";
import { useAuth } from "@/context/AuthProvider";
import { useDispatch } from "react-redux";
import PasswordModal from "@/components/accountProfile/PasswordModal"; // Import the password modal component
import EmailModal from "@/components/accountProfile/EmailModal"; // Import the email modal component
import FullNameModal from "@/components/accountProfile/FullNameNodal"; // Import the full name modal component
import DeleteAccount from "@/components/accountProfile/DeleteAccount";
const AUTH_ME = "/auth/me";

// Define the styles for components
const cuadrosRellenos = {
  backgroundColor: "white",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  flexDirection: "column",
  position: "relative",
  display: "flex",
  width: "100%",
  padding: "18px",
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
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const helloName = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
  marginBottom: "12px",
};

const Detallitos = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: "flex",
  marginTop: "14px",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: "auto",
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

const AccountDataMobile = ({ openModal }) => {
  const [isHoveredDetalle, setIsHoveredDetalle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State to control the visibility of the password modal
  const [showEmailModal, setShowEmailModal] = useState(false); // State to control the visibility of the email modal
  const [showNameModal, setShowNameModal] = useState(false); // State to control the visibility of the full name modal
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [fullName, setFullName] = useState("");
  const [codePostal, setcodePostal] = useState("");
  const [country, setcountry] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.auth.token); // Get the token from the Redux state
  const { authState } = useAuth(); // Destructure authState from the context
  const dispatch = useDispatch();

  // Function to update the full name

  // Function to fetch user data
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

      // Update the fullName state with the value obtained from the response
      setFullName(response.data.data.person.fullName);
      setphoneNumber(response.data.data.person.phoneNumber);
      setcountry(response.data.data.person.country);
      setEmail(response.data.data.email);
      setcodePostal(response.data.data.person.codePostal);
    } catch (error) {}
  };

  // Call obtenerMiData when the component mounts
  useEffect(() => {
    obtenerMiData();
  }, []); // You can add dependencies here if necessary

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
    setIsPassword(true);
  };

  const handleMouseDetallesPasswordLeave = () => {
    setIsPassword(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch a LOGOUT action if necessary
    window.location.href = "/"; // Redirect the user to the home page
  };

  // Function to handle form submission for full name
  const handleSubmit = async (values) => {
    try {
      // Implement your form submission logic here
    } catch (error) {}
  };

  return (
    <Box textAlign="center" role="presentation">
      <img
        src="https://en.bloomingdales.qa/on/demandware.static/-/Library-Sites-BloomingDalesSharedLibrary/default/dw69be0108/FINAL-IMAGES/BRAND-HEADERS/desktop-brand/adidas.jpg"
        alt="logo"
        style={{
          width: "100%",
          height: "100px",
          marginTop: "12px",
          zIndex: "111",
        }}
      />
      <Box sx={cuadrosRellenos}>
        <Typography sx={helloName}>MIS DATOS</Typography>
        <Typography
          sx={{ ...detalles, marginBottom: "-24px", marginTop: "6px" }}
        >
          Modifica tus datos personales a continuación para que tu cuenta esté
          actualizadas
        </Typography>
      </Box>

      <Box sx={cuadrosRellenos}>
        <Typography sx={{ ...Detallitos, marginBottom: "12px" }}>
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
            marginTop: "12px",

            bgcolor: isHoveredDetalle ? "black" : "white",
            color: isHoveredDetalle ? "white" : "black",
            borderRadius: "6px",

            transition: "background-color 0.3s ease, color 0.1s ease",
          }}
          onMouseEnter={handleMouseDetallesEnter}
          onMouseLeave={handleMouseDetallesLeave}
          onClick={() => setShowNameModal(true)}
        >
          Editar
        </Typography>

        <Box sx={cuadrosRellenitos}>
          <Typography
            sx={{ ...Detallitos, marginTop: "24px", marginBottom: "-12px" }}
          >
            DATOS DE ACCESO
          </Typography>

          <Typography sx={{ ...Detallitos, marginBottom: "12px" }}>
            Correo Eletrónico:
          </Typography>

          <Typography sx={detalles}>{email}</Typography>

          <Typography
            sx={{
              ...detalles,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "700",
              marginTop: "12px",
              bgcolor: isHovered ? "black" : "white",
              color: isHovered ? "white" : "black",
              borderRadius: "6px",
              transition: "background-color 0.3s ease, color 0.1s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setShowEmailModal(true)}
          >
            Editar
          </Typography>
        </Box>

        <Box sx={cuadrosRellenitos}>
          <Typography sx={Detallitos}>Contraseña</Typography>

          <Typography sx={Detallitos}>************</Typography>

          <Typography
            sx={{
              ...detalles,
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "700",
              marginTop: "12px",
              bgcolor: isPassword ? "black" : "white",
              color: isPassword ? "white" : "black",
              borderRadius: "6px",
              transition: "background-color 0.3s ease, color 0.1s ease",
            }}
            onMouseEnter={handleMouseDetallesPasswordEnter}
            onMouseLeave={handleMouseDetallesPasswordLeave}
            onClick={() => setShowPasswordModal(true)}
          >
            Editar Contraseña
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          ...buttonStyle,
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
          boxShadow: "none",
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
            marginBottom: "-4px",

            marginLeft: "16px",
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
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#111",
          display: "flex",
          marginTop: "14px",
          justifyContent: "center",
          marginLeft: "54px",
          alignItems: "center",
          marginBottom: "32px",
          fontFamily: "Helvetica,sans-serif",
          width: "80%",
          fontOpticalSizing: "auto",
        }}
      >
        Si eliminas tu cuenta adidas, ya no tendrás acceso a la información
        almacenada en la misma, como tu historial de pedidos o tu lista de
        deseos.
      </Typography>
    </Box>
  );
};

export default AccountDataMobile;
