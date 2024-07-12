
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { useState, useEffect } from 'react';

import NextLink from 'next/link'; // Importa el componente NextLink
import { ThemeProvider, createTheme } from '@mui/material/styles';
/* Icons */

import MenuIcon from "@mui/icons-material/Menu";


import CartDrawers from "../Navbar/CartDrawers";
import CartDrawersMax from "../Navbar/CartDrawersMax";



const theme = createTheme({
    palette: {
      primary: {
        main: '#fafafa', // Color de fondo del navbar
      },
      secondary: {
        main: '#212121', // Color del texto del navbar
      },
    },
   
  });
  



const FirstAppBar = styled(AppBar)(({ theme, showSecondAppBar }) => ({
    transition: theme.transitions.create(['top'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    top: showSecondAppBar ? '64px' : '0', // Ajustar la position de top basado en la visiblidad de SecondAppBar 
    [theme.breakpoints.down('sm')]: {
        top: 0, //Cuando se esconda secondAppBar, pegue en el top 
        marginTop: 0, // Y con esto quito todo tipo de margen
    },
   
}));


const imgPath = "https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg";

export default function HeaderNavbar() {

    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function to set the initial window width

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <>
            
            

                <FirstAppBar sx={{position:'absolute', top: '42px', boxShadow: 'none',backgroundColor:'#ffff' }}>
  <Toolbar>
   
    <Typography variant="h6" sx={{ width: '60px', aspectRatio: 'auto 60 / 28.8', height: '28.8px', marginLeft: '42px', cursor: 'pointer' }}>
      <NextLink href="/">
        <img src={imgPath} alt="Swoosh Icon" />
      </NextLink>
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          {windowWidth > 600 ? (
            <CartDrawers />
          ) : (
            <CartDrawersMax />
          )}
        </Box>



  </Toolbar>
</FirstAppBar>


        
              
            </>
        </ThemeProvider>
    );
}
