import React, { useState } from 'react';
import { Box, Grid, Grow, Hidden, Drawer, IconButton, Slide, ClickAwayListener } from '@mui/material';
import Header from './Header';
import FilterPanel from './FilterPanel'; // Importar el componente FilterPanel
import Mostrar from './SectionProducts/Mostrar';
import MenuIcon from '@mui/icons-material/Menu';
import { productData } from './SectionProducts/Items';

function Products() {
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedItems, setSelectedItems] = useState({});

    const handleToggle = (value) => () => {
        const currentIndex = selectedItems[value];
        const newSelectedItems = {
          ...selectedItems,
          [value]: currentIndex ? false : true,
        };
    
        setSelectedItems(newSelectedItems);
    
        const selectedSizes = Object.keys(newSelectedItems).filter(
          (item) => newSelectedItems[item]
        );
        const filteredProducts = productData.filter((product) =>
          selectedSizes.includes(product.talla)
        );
    
        setFilteredProducts(filteredProducts);
      };
    


    const sortByPriceLowToHigh = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sortedProducts);
    };

    const sortByPriceHighToLow = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        setFilteredProducts(sortedProducts);
    };

    const sortByAToZ = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
        setFilteredProducts(sortedProducts);
    };

    const sortByZToA = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
        setFilteredProducts(sortedProducts);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const productCards = filteredProducts.map((product, index) => (
        <Grow in key={index}>
            <Box sx={{ marginRight: '-6px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Mostrar item={product} />
                </Grid>
            </Box>
        </Grow>
    ));

    return (
        <>
            <Header
                sortByPriceLowToHigh={sortByPriceLowToHigh}
                sortByPriceHighToLow={sortByPriceHighToLow}
                sortByAToZ={sortByAToZ}
                sortByZToA={sortByZToA}
                toggleFilters={toggleFilters}
                mostrarFiltros={showFilters}
            />
            <Box sx={{ display: 'flex' }}>
                <Hidden smDown>
                    <Slide direction="right" in={!showFilters} mountOnEnter unmountOnExit timeout={500}>
                        <Grid item xs={12} sm={4}>
                        <FilterPanel 
                handleToggle={handleToggle} 
                selectedItems={selectedItems} 
                updateFilteredProducts={setFilteredProducts} // Pasando la función correctamente
              />
                        </Grid>
                    </Slide>
                </Hidden>
                <Hidden mdUp>
                    <Drawer
                        anchor="right"
                        open={showFilters}
                        onClose={() => setShowFilters(false)}
                    >
                        <ClickAwayListener onClickAway={() => setShowFilters(false)}>
                        <FilterPanel 
                handleToggle={handleToggle} 
                selectedItems={selectedItems} 
                updateFilteredProducts={setFilteredProducts} // Pasando la función correctamente
              />
                        </ClickAwayListener>
                    </Drawer>
                </Hidden>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        {productCards}
                    </Grid>
                </Box>
            </Box>
            <Hidden mdUp>
                <IconButton
                    color="inherit"
                    aria-label="open filters"
                    onClick={toggleFilters}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </>
    );
}

export default Products;
