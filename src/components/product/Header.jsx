import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Divider, Stack, useTheme, useMediaQuery } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { productData } from './SectionProducts/Items';
const Header = ({ sortByPriceLowToHigh, sortByPriceHighToLow, sortByAToZ, sortByZToA, toggleFilters, mostrarFiltros }) => {
    const [mostrarFiltrosState, setMostrarFiltrosState] = useState(mostrarFiltros);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const totalProducts = productData.length;
    useEffect(() => {
        setMostrarFiltrosState(mostrarFiltros);
    }, [mostrarFiltros]);

    const handleToggleFilters = () => {
        toggleFilters();
        setMostrarFiltrosState(!mostrarFiltrosState);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOptionSelect = (option) => {
        setIsMenuOpen(false);
        setSelectedOption(option);
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

    return (
        <Box sx={{ marginTop: '160px', marginBottom: '24px' }}>
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
                                fontFamily: "Helvetica, sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                color: "orange",
                                textTransform: "capitalize",
                                flexGrow: 1,
                            }}
                        >
                            Parrella Clubs
                        </Typography>
                    )}
                    {isSmallScreen && (
                        <Typography sx={{
                            fontFamily: "Helvetica, sans-serif",
                            fontOpticalSizing: 'auto',
                            fontSize: '11.5px',
                            fontWeight: 650,
                            marginTop: '6px',
                            fontStyle: 'normal',
                            textAlign: 'center',
                            color: "orange",
                            textTransform: "capitalize",
                        }}>Parrella clothes</Typography>
                    )}
                    <Divider
                        orientation="vertical"
                        sx={{
                           marginLeft:'16px',
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
                            <TuneIcon  sx={{marginRight:'16px',fontSize:'20px'}}/>
                            <Typography sx={{ ml: isSmallScreen ? -1 : 1, textTransform: "capitalize" }}>
                                {isSmallScreen ? 'Filtrar' : mostrarFiltrosState ? 'Mostrar Filtros' : 'Ocultar Filtros'}
                            </Typography>
                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: '58px',
                                    backgroundColor: '#f5f5f5',
                                   marginRight:'-30px',
                                    display: { xs: 'block', sm: 'none' },
                                    marginLeft:'12px',
                                }}
                            />
                        </IconButton>
                  
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}
                            disableRipple
                            sx={{
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <Typography sx={{ mr: 1, textTransform: "capitalize" }}>
                                {(!isSmallScreen && selectedOption) ? `Ordenar por ${selectedOption}` : 'Ordenar por'}
                            </Typography>
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
                                <Typography>Precio Más Alto</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Precio Más Bajo")}>
                                <Typography>Precio Más Bajo</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("A-Z")}>
                                <Typography>A-Z</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Z-A")}>
                                <Typography>Z-A</Typography>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography sx={{ color: '#111', fontSize: '12px', fontWeight: '500', marginTop: '24px', marginBottom: '-42px', marginRight: '54px' }}>
                Total de productos: {totalProducts}
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
