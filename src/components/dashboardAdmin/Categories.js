import React, { useState, useEffect } from 'react';
import axios from '@/api/axios';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box, InputAdornment, Typography, Card, CardMedia, CardContent, Stack, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
const [selectedFileUrl, setSelectedFileUrl] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const [editFile, setEditFile] = useState(null); // State to manage the edited file
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [viewMode, setViewMode] = useState('module'); // State to manage view mode
  const token = useSelector((state) => state.auth.token);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false); // Inicializa isSuperAdmin con un valor por defecto

  useEffect(() => {
    // Suponiendo que el rol del usuario está en el token, extraerlo y establecer isSuperAdmin
    const userRole = token? JSON.parse(atob(token.split('.')[1])).role : null; // Ajusta esto según la estructura real de tu token
    setIsSuperAdmin(userRole === 'SUPER_ADMIN' || userRole === 'ADMIN'); // Asume que ambos roles tienen acceso completo
  }, [token]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/category');
      if (response.data.data && response.data.data.length > 0) {
        setCategories(response.data.data);
      } else {
        toast.error('No categories found');
      }
    } catch (error) {
      toast.error('Error fetching categories', error);
    }
  };

  const createCategory = async (values) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      await axios.post('/category', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setSelectedFileUrl(null);
      fetchCategories();
      handleClose();
    } catch (error) {
      toast.error('Categoria existente', error);
    }
  };

  const updateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append('name', editName);
      if (editFile) {
        formData.append('file', editFile);
      }

      await axios.patch(`/category/${editCategory._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEditCategory(null);
      setEditFile(null);
      setEditName('');
      fetchCategories();
    } catch (error) {
      toast.error('Error updating category', error);
    }
  };

  const removeCategory = async () => {
    try {
      await axios.delete(`/category/${deleteCategory._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDeleteCategory(null);
      fetchCategories();
    } catch (error) {
      toast.error('Error deleting category', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    setEditName(category.name);
  };

  const handleDelete = (category) => {
    setDeleteCategory(category);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileUrl(URL.createObjectURL(event.target.files[0])); // Guarda la URL del archivo seleccionado
  };

  const handleEditFileChange = (event) => {
    setEditFile(event.target.files[0]);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('El nombre de la categoría es obligatorio')
    
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
    file: Yup.mixed().required('La imagen es obligatoria'),
  });

  const toggleViewMode = () => {
    setViewMode((prevViewMode) => (prevViewMode === 'module' ? 'list' : 'module'));
  };

  if (!isSuperAdmin) {
    return (
      <Typography variant="h6" align="center" style={{ marginTop: '20%', color: 'red' }}>
        No tienes permisos para acceder a esta vista.
      </Typography>
    );
  }

  return (
    <Box sx={{ marginLeft: '36px',marginBottom:'24px' }}>
        {isSuperAdmin && (
        <>
          <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
              progress={undefined}
              theme="colored"
              style={{ fontSize: "12px", width: "446px", right: 5 }}
            />
      <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Button variant="outlined" onClick={handleOpen} sx={{
          border: "none",
          outline: "0",
          marginTop: '14px',
          color: "white",
          backgroundColor: "#000",
          textAlign: "center",
          cursor: "pointer",
          fontSize: "18px",
          marginBottom: '12px',
          '&:hover': {
            backgroundColor: 'black', color: 'grey', boxShadow: 'none' // Define el color de fondo para el hover
          },
        }}>Crea una nueva Categoría</Button>
        <IconButton onClick={toggleViewMode} sx={{ ml: 2, }}>
          {viewMode === 'module' ? <ViewModuleIcon sx={{color:'black'}} /> : <ViewListIcon sx={{color:'black'}} /> }
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: '90%',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            width: 600,
            height: 'auto',
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 1,
            mx: 'auto',
            my: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HighlightOffIcon
            onClick={handleClose} // Cierra el modal al hacer clic en el icono de cierre
            sx={{
              marginLeft: 'auto',
              fontSize: '32px',
              cursor: 'pointer',
              '&:hover': {
                color: 'white',
                borderRadius: '24px',
                backgroundColor: 'grey',
              },
            }}
          />

          <Typography id="modal-title" variant="h6" component="h2" sx={{ marginTop: '-32px' }}>
            Categories
          </Typography>
          <Formik
            initialValues={{ name: '', file: null }}
            validationSchema={validationSchema}
            onSubmit={createCategory}
          >
            {({ setFieldValue, errors, touched, isValid }) => (
              <Form>
                <Box
                  sx={{
                    width: '600px',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    mt: 2,
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                  onClick={handleIconClick}
                >
                  {selectedFileUrl ? (
  <img
    src={selectedFileUrl}
    alt="Selected"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
) : (
  <Typography sx={{ textAlign: 'center', marginRight: '36px', marginLeft: '36px' }}>
    Agregar Nueva Categoria
  </Typography>
)}
                </Box>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                    handleFileChange(event);
                  }}
                />
                {errors.file && touched.file && (
                  <Typography color="error" variant="body2">{errors.file}</Typography>
                )}

                <Field
                  as={TextField}
                  name="name"
                  variant="outlined"
                  label="Agregar nombre de categoría"
                  fullWidth
                  sx={{ mt: 2 }}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" aria-label="file upload" onClick={handleIconClick}>
                          <FileDownloadOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    sx={{
                      border: "none",
                      outline: "0",
                      marginTop: '14px',
                      color: "white",
                      width:'100%',
                      backgroundColor: "#000",
                      textAlign: "center",
                      cursor: "pointer",
                      fontSize: "18px",
                      marginLeft:'auto',
                      borderRadius:'0',
                      marginBottom: '12px',
                      '&:hover': {
                        backgroundColor: '#ffff', color: '#111', boxShadow: 'none', border:'1px solid black' // Define el color de fondo para el hover
                      },
                    }}
                  >
                    Create
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      {viewMode === 'module' ? (
        <Grid container spacing={1}>
          {categories.map((category) => (
            <Grid item xs={3} sm={2} md={2.8} key={category._id}>
              <Card sx={{ maxWidth: "200px", marginTop: '24px', textAlign: "center", borderRadius: "12px", }}>
                <div style={{ position: "relative" }}>
                  {category.file && category.file.fullPath && (
                    <CardMedia
                      component="img"
                      image={category.file.fullPath}
                      alt={category.name}
                      style={{ height: "200px", width: "100%", objectFit: 'contain' }}
                    />
                  )}
                  <CardContent>
                    <Typography sx={{
                      fontSize: "16px",
                      color: "#111",
                      border: "none",
                      fontWeight: 500,
                      textAlign: "center",
                      marginTop: '-4px',
                      marginBottom: '-12px',
                      fontFamily: " 'Helvetica', sans-serif",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                    }}>
                      {category.name}
                    </Typography>
                  </CardContent>
                </div>
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(category)}
                    sx={{
                      marginLeft: '24px',
                      '&:hover': {
                        backgroundColor: 'transparent', // Elimina el fondo gris al pasar el mouse
                      },
                    }}
                  >
                    <EditIcon sx={{ marginTop: '6px', color: 'black', }} />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(category)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent', // Elimina el fondo gris al pasar el mouse
                      },
                    }}
                  >
                    <DeleteIcon sx={{ marginTop: '6px', color: 'brown' }} />
                  </IconButton>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <List>
          {categories.map((category) => (
            <ListItem key={category._id} sx={{ borderBottom: '1px solid #ccc' }}>
              {category.file && category.file.fullPath && (
                <CardMedia
                  component="img"
                  image={category.file.fullPath}
                  alt={category.name}
                  sx={{ width: 100, height: 100, objectFit: 'contain', marginRight: 2 }}
                />
              )}
              <ListItemText
                primary={category.name}
                sx={{ flex: '1' }}
              />
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(category)}
              >
                <EditIcon  sx={{color:'black'}}/>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(category)}
              >
                <DeleteIcon sx={{color:'brown'}} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      {editCategory && (
        <Dialog open={Boolean(editCategory)} onClose={() => setEditCategory(null)}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit the name and image of the category.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Category Name"
              fullWidth
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="editFileInput"
              onChange={handleEditFileChange}
            />
          <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
 
}}>
  <Button onClick={() => document.getElementById('editFileInput').click()}  sx={{
          border: "none",
          outline: "0",
          marginTop: '6px',
          color: "white",
       
          backgroundColor: "#000",
          textAlign: "center",
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: '12px',
          '&:hover': {
            backgroundColor: 'black', color: 'grey', boxShadow: 'none' // Define el color de fondo para el hover
          }}}>
    Upload Image
  </Button>

            {editFile && (
              <img
                src={URL.createObjectURL(editFile)}
                alt="Edit Selected"
                 style={{ width: '60%', height: '50%', objectFit: 'contain' }}
              />
            )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditCategory(null)} color="primary">
              Cancel
            </Button>
            <Button onClick={updateCategory} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {deleteCategory && (
        <Dialog open={Boolean(deleteCategory)} onClose={() => setDeleteCategory(null)}>
          <DialogTitle>Delete Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete the category "{deleteCategory.name}"?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteCategory(null)} color="primary">
              Cancel
            </Button>
            <Button onClick={removeCategory} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
     )}
     </>
   )}
 </Box>
);
};

export default Categories;
