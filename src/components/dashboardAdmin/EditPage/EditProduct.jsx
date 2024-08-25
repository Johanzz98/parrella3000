import React from 'react'
import { Box, CardMedia } from '@mui/material'
import EditPage from './EditPage'

const EditProduct = () => {
  // URL de la imagen que quieres mostrar
  const imageUrl = 'https://kissuomo.it/cdn/shop/files/nike-sneakers-air-jordan-4-retro-seafoam4-7826.jpg?v=1690647221&width=800'

  return (
    <Box 
      display="flex" 
      flexDirection="row" // Cambiar la dirección a fila
      alignItems="flex-start"
      justifyContent="flex-start"
      gap={2} // Añadir un espacio entre el contenedor de imágenes y EditPage
      sx={{padding: '24px',backgroundColor:'white',borderRadius:'24px'}} // Añadir un poco de padding si es necesario
    >
      {/* Contenedor de imágenes */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="flex-start" 
        gap={2} // Añadir espacio entre las filas de imágenes
      >
        {/* Fila con 1 imagen */}
        <Box display="flex" justifyContent="center" mb={1}>
          <CardMedia 
            component="img"
            height="auto"
            image={imageUrl}
            alt="Product Image"
            sx={{borderRadius:'24px', width:'240px', height:'240px', objectFit:'cover',marginLeft:'70px'}}
          />
        </Box>

        {/* Fila con 2 imágenes */}
        <Box display="flex" justifyContent="center" mb={1} sx={{marginLeft:'59px'}}>
          <Box display="flex" gap={3}>
            <CardMedia 
              component="img"
              height="auto"
              image={imageUrl}
              alt="Product Image"
              sx={{borderRadius:'24px', width:'120px', height:'120px'}}
            />
            <CardMedia 
              component="img"
              height="auto"
              image={imageUrl}
              alt="Product Image"
              sx={{borderRadius:'24px', width:'120px', height:'120px'}}
            />
          </Box>
        </Box>

        {/* Fila con 3 imágenes */}
        <Box display="flex" justifyContent="center" mb={1}>
          <Box display="flex" gap={1}>
            <CardMedia 
              component="img"
              height="auto"
              image={imageUrl}
              alt="Product Image"
              sx={{borderRadius:'24px', width:'120px', height:'120px'}}
            />
            <CardMedia 
              component="img"
              height="auto"
              image={imageUrl}
              alt="Product Image"
              sx={{borderRadius:'24px', width:'120px', height:'120px'}}
            />
            <CardMedia 
              component="img"
              height="auto"
              image={imageUrl}
              alt="Product Image"
              sx={{borderRadius:'24px', width:'120px', height:'120px'}}
            />
          </Box>
        </Box>
      </Box>

      {/* Componente EditPage a la derecha */}
      <Box  display="flex" justifyContent="center" alignItems="flex-start" sx={{marginLeft:'54px'}}>
        <EditPage />
      </Box>
    </Box>
  )
}

export default EditProduct
