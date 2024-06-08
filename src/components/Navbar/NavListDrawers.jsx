import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon,Typography } from "@mui/material";
import { useAuth } from "@/context/AuthProvider";
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close'; // Importa el ícono CloseIcon
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Titulo= {
    fontSize: "14px",
    fontWeight: "550",
    color: "#00000",
    display: 'flex',
    '&:hover': { color: 'grey' },
    marginBottom:'12px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Helvetica, sans-serif",
    fontOpticalSizing: 'auto',
   paddingTop:'12px',
    lineHeight: '24px',
  };

const detalles = {
    
    fontSize: "16px",
    fontWeight: 600,
    fontOpticalSizing: 'auto',
    textDecoration: "none",
    color: 'black',
    display: 'flex',
    margin:'2px 0 2px',
    marginLeft:'-54px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    '&:hover': { color: 'grey' },
    cursor: 'pointer',
    boxShadow:'none'
    
   
  }


  const info = {
    
    fontSize: "14px",
    fontWeight: 500,
    fontOpticalSizing: 'auto',
    textDecoration: "none",
    color: 'black',
    display: 'flex',
    margin:'2px 0 2px',
    marginLeft:'-12px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    '&:hover': { color: 'grey' },
    cursor: 'pointer',
    boxShadow:'none'
    
   
  }

  export default function NavListDrawers({ navLinks, setOpen }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { authState } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsAuthenticated(authState.isAuthenticated);
    }, [authState.isAuthenticated]);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        window.location.reload();
    };

    return (
        <Box sx={{ width: 259 }}>
            <nav>
            <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpen(false)}
                            sx={{
                                textAlign: 'center',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                  
                                }}
                            >
                                <img
                                     src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
                                    alt="logo"
                                    href="/"
                                    style={{
                                        width: '40%',
                                        height:'100%',
                                       marginLeft:'70px',
                                       marginBottom:'4px'
                                    }}
                                />
                               
                              
                            </Box>
                            <ListItemIcon>
                                    <CloseIcon sx={{color:'black', marginLeft:'54px',fontSize:'32px',marginBottom:'4px'}} />
                                </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{ width: '100%', bgcolor: '#f5f5f5',margin:'12px 0 12px' }} />
                </List>
             
                <List>
                    {navLinks.map((item) => (
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton component="a" href={item.path} sx={{ ...detalles, marginLeft: '-54px' }}>
                                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                                <Typography>{item.title}</Typography>
                                <KeyboardArrowRightIcon style={{ color: 'black', marginLeft: 'auto' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ width: '100%', bgcolor: '#f5f5f5', marginTop: '24px', marginBottom: '12px' }} />
                <List>
                    {!isAuthenticated && (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer"   sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    
                                    <Typography sx={Titulo}>Registrarse / Login</Typography>
                                    <ListItemIcon><LoginIcon sx={{color:'black',marginLeft:'64px',fontSize:'24px'}}/></ListItemIcon >
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><WorkOutlineOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Mi Compra</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><CardGiftcardOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Pedidos</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><FavoriteBorderOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Favoritos</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><HelpOutlineOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Ayuda</Typography>
                                </ListItemButton>
                            </ListItem>
                            
                            {/* Agrega más elementos de la lista según sea necesario */}
                        </>
                    )}
                    {
            
                    
                    isAuthenticated && (
                        <>
                          <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><WorkOutlineOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Mi Compra</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><CardGiftcardOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Pedidos</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><FavoriteBorderOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Favoritos</Typography>
                                </ListItemButton>
                            </ListItem>
                         <ListItem disablePadding>
                                <ListItemButton component="a" href="/SignInOutContainer" sx={{
                                textAlign: 'center',
                                
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'white'
                                }
                            }}>
                                    <ListItemIcon><HelpOutlineOutlinedIcon sx={{color:'black'}}/></ListItemIcon>
                                    <Typography sx={info}>Ayuda</Typography>
                                </ListItemButton>
                            </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleLogout();
                                    window.location.href = "/"; // Redirect the user to the home page
                                }}
                                sx={{
                                    textAlign: 'center',
                                    
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: 'white'
                                    }
                                }}>
                                    
                                <Typography sx={{...Titulo, fontSize:'18px'}} >Cerrar sesión</Typography>
                                <ListItemIcon><ExitToAppOutlinedIcon sx={{color:'black',marginLeft:'64px',fontSize:'24px'}}/></ListItemIcon>
                                
                            </ListItemButton>
                        </ListItem>
                        </>
                    )}
                </List>
            </nav>
        </Box>
    );
}