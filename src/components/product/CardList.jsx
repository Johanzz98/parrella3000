import React, { useState } from "react";
import {
  Box,
  Grid,
  Grow,
  Hidden,
  Drawer,
  IconButton,
  Slide,
  useMediaQuery,
  ClickAwayListener,
  useTheme,
} from "@mui/material";
import Header from "./Header";
import FilterPanel from "./FilterPanel"; // Importar el componente FilterPanel
import Mostrar from "./SectionProducts/Mostrar";
import MenuIcon from "@mui/icons-material/Menu";
import { productData } from "./SectionProducts/Items";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


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
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(sortedProducts);
  };

  const sortByPriceHighToLow = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
    setFilteredProducts(sortedProducts);
  };

  const sortByAToZ = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredProducts(sortedProducts);
  };

  const sortByZToA = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setFilteredProducts(sortedProducts);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const productCards = filteredProducts.map((product, index) => (
    <Grow in key={index}>
      <Box sx={{ marginRight: "-6px"}}>
        <Grid item xs={12} sm={6} md={12}>
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
      <Box sx={{ display: "flex" }}>
        <Hidden smDown>
          <Slide
            direction="right"
            in={!showFilters}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Box sx={{ padding: "0 40px" }}>
              <FilterPanel
                handleToggle={handleToggle}
                selectedItems={selectedItems}
                updateFilteredProducts={setFilteredProducts} // Pasando la función correctamente
              />
            </Box>
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
        <Box
          sx={{
            padding: isSmallScreen ? "0" : "0 22px",
            left:isSmallScreen ?  4:-16,
            
            right:isSmallScreen ? 0: 0,
            bottom:0,
            position: "relative",
            top: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1}>
            {productCards}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Products;
