import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useAuth } from "@/context/AuthProvider";
import { useEffect, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
export default function NavListDrawers({ navLinks }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { authState } = useAuth(); // Obtén el estado de autenticación del contexto

    useEffect(() => {
        setIsAuthenticated(authState.isAuthenticated); // Establece isAuthenticated según el estado actual de autenticación
    }, [authState.isAuthenticated]);

    const handleLogout = () => {
        // Suponiendo que hay una manera de limpiar el estado de autenticación, por ejemplo, estableciéndolo en null o un objeto vacío
        dispatch({ type: 'LOGOUT' }); // Despacha una acción LOGOUT si es necesario
        window.location.reload();
    };

    return (
        <Box sx={{ width: 259 }}>
            <nav>
                <List>
                    {navLinks.map((item) => (
                        <ListItem
                            disablePadding
                            key={item.title}
                        >
                            <ListItemButton
                                component="a"
                                href={item.path}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {/* Aquí verificamos si el usuario está autenticado para mostrar el enlace "Cerrar sesión" en lugar de "Registrarse/Login" */}
                    {isAuthenticated ? (
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleLogout(); // Maneja el cierre de sesión aquí
                                }}
                            >
                                <ListItemIcon>
                                    {/* Aquí puedes poner el icono correspondiente */}
                                </ListItemIcon>
                                <ListItemText>Cerrar sesión</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ) : (
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                href="/SignInOutContainer"
                            >
                                <ListItemIcon>
                                    {/* Aquí puedes poner el icono correspondiente */}
                                </ListItemIcon>
                                <ListItemText> <MenuIcon />Register</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </nav>
        </Box>
    );
}
