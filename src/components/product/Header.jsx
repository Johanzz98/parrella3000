import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Checkbox, Menu, MenuItem, Divider, Stack, Link } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ sortByPriceLowToHigh, sortByPriceHighToLow, sortByAToZ, sortByZToA, toggleFilters }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [orderByChecked, setOrderByChecked] = useState(false); // Estado para la checkbox
    const [anchorEl, setAnchorEl] = useState(null); // Estado para el elemento ancla del menú

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = (event) => {
        setIsMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget);
    };

    const handleOptionSelect = (option) => {
        setIsMenuOpen(false);
        setSelectedOption(option);
        setOrderByChecked(true); // Marcar la checkbox al seleccionar una opción
        switch (option) {
            case "Precio Más Bajo":
                sortByPriceLowToHigh();
                break;
            case "Precio Más Alto":
                sortByPriceHighToLow();
                break;
            case "A-Z":
                sortByAToZ();
                break;
            case "Z-A":
                sortByZToA();
                break;
            default:
                break;
        }
    };

    const handleToggleFilters = () => {
        toggleFilters();
        setMostrarFiltros(!mostrarFiltros);
    };

    return (
        <Box sx={{ marginTop: '160px',marginBottom:'24px' }}>
            <AppBar position="relative" sx={{ marginTop: '12px', boxShadow: '0 2px 4px rgba(12, 12, 255, 0.12)', backgroundColor: 'inherit' }}>
                <Toolbar
                    sx={{
                        height: '48px',
                        boxShadow: '{ xs: 1, sm: 0 }',
                        backgroundColor: 'inherit',
                        justifyContent: { xs: 'space-between', sm: 'flex-end' }
                    }}
                >
                    {!isSmallScreen && (
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "Helvetica,sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '1.2rem',
                                fontWeight: 1000,
                                fontStyle: 'normal',
                                marginBottom: '12px',
                                color: "#111",
                                marginBottom: '4px',
                                textTransform: "capitalize",
                                flexGrow: 1,
                            }}
                        >
                            Todo Parrella
                        </Typography>
                    )}
                    <Typography sx={{
                        margin: '0 12px',
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: 'auto',
                        fontSize: '.85rem',
                        fontWeight: 650,
                        marginTop:'6px',
                        fontStyle: 'normal',
                        textAlign: 'center',
                        color: "#111",
                       
                        textTransform: "capitalize",
                    }}>Parrella Clubs32</Typography>
                    <Divider
                        orientation="vertical"
                        sx={{
                           
                            marginLeft:'42px',
                            backgroundColor: '#f5f5f5',
                            display: { xs: 'block', sm: 'none' }
                        }}
                    />
                    <Stack direction="row" spacing={4}>
                    <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={handleToggleFilters}
    disableRipple
    sx={{
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }}
>
                             {isSmallScreen && (
                <TuneIcon  sx={{fontSize:'20px', marginLeft:'-2px'}}/>
            )}
            <Box >
                            <Typography sx={{
                                marginRight:'1px',
                                fontFamily: "Helvetica,sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '14px',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                textAlign: 'center',
                                color: "#111",
                                marginRight:'12px',
                              
                                textTransform: "capitalize",
                            }}>
                                {isSmallScreen ? 'Filtrar ' : mostrarFiltros ? 'Mostrar Filtros' : 'Ocultar Filtros '}
                            </Typography>
                            </Box>
                            {!isSmallScreen && (
    <Box sx={{ marginRight: '12px' }}>
        <TuneIcon />
    </Box>
)}

                                <Divider
                                    orientation="vertical"
                                    sx={{
                                        height: '58px',
                                        backgroundColor: '#f5f5f5',
                                        display: { xs: 'block', sm: 'none' }
                                    }}
                                />
                        </IconButton>

                        <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={handleToggleFilters}
    disableRipple
    sx={{
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }}
>
            <Box >
            <Typography sx={{
               marginLeft:'-32px',
                marginRight: '14px',
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: 'auto',
                fontSize: '.75rem',
                fontWeight: 600,
                fontStyle: 'normal',
                textAlign: 'center',
                color: "#111",
                textTransform: "capitalize",
            }}>
                {(!isSmallScreen && selectedOption) ? `Ordenar por ${selectedOption}` : 'Ordenar por'}
            </Typography>
            </Box>
            {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

       
    

                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleOptionSelect("Precio Más Alto")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Precio Más Alto"} sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        fontStyle: 'normal',
                                        
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Precio Más Alto
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Precio Más Bajo")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Precio Más Bajo"}   sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        fontStyle: 'normal',
                                        
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Precio Más Bajo
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("A-Z")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "A-Z"} sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        fontStyle: 'normal',
                                        textAlign: 'center',
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    A-Z
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Z-A")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Z-A"}sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        fontStyle: 'normal',
                                        textAlign: 'center',
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Z-A
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box>
                <Typography sx={{color:'#111', fontSize:'12px', fontWeight:'600',marginTop:'24px',marginBottom:'-42px',marginLeft:'12px'}}>
                    10 ARTICULOS
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
