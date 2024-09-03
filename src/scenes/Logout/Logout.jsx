import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Definir una función asincrónica para manejar el cierre de sesión
    const performLogout = async () => {
      // Ejecutar la acción de cierre de sesión
      await new Promise((resolve) => {
        dispatch({ type: "LOGOUT" });
        resolve(); // Resolver la promesa una vez que la acción se haya despachado
      });

      // Redirigir a la página principal
      window.location.href = "/";
    };

    performLogout();
  }, [dispatch]);

  return null; // No renderiza nada
};

export default Logout;
