import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddProduct = () => {
    if (product.trim()) {
      setProducts([...products, product]);
      setProduct('');
    }
  };

  const handleEditProduct = (index) => {
    setProduct(products[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = [...products];
    updatedProducts[currentIndex] = product;
    setProducts(updatedProducts);
    setProduct('');
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <h1>Product Management</h1>
      <TextField
        label="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={isEditing ? handleUpdateProduct : handleAddProduct}
      >
        {isEditing ? 'Update Product' : 'Add Product'}
      </Button>
      <List>
        {products.map((prod, index) => (
          <ListItem key={index}>
            <ListItemText primary={prod} />
            <IconButton edge="end" onClick={() => handleEditProduct(index)}>
              <Edit sx={{color:'black'}} />
            </IconButton>
            <IconButton edge="end" onClick={() => handleDeleteProduct(index)}>
              <Delete sx={{color:'brown'}} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
