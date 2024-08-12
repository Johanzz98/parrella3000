import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

export const ListSearch = () => {
  return (
    <Box
      sx={{
     
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      {/* Primer par de Novedades y Listado */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Box sx={{ marginRight: '46px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#111',
              marginBottom: '8px',
               marginLeft:'-1px'
            }}

          >
            Novedades1
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 1
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 1
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 1
          </Typography>

            <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 1
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 1
          </Typography>
        </Box>
        
        {/* Segundo par de Novedades y Listado */}
        <Box sx={{ marginRight: '46px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#111',
              marginBottom: '8px',
                 marginLeft:'-1px'
            }}
          >
            Novedades2
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 2
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 2
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 2
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 2
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 2
          </Typography>
        </Box>
   
        <Box sx={{ marginRight: '46px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#111',
              marginBottom: '8px',
               marginLeft:'-1px'
            }}
          >
            Novedades3
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 3
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 3
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 3
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 3
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 3
          </Typography>
          
        </Box>

        {/* Cuarto par de Novedades y Listado */}
        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#111',
              marginBottom: '8px',
                 marginLeft:'-1px'
            }}
          >
            Novedades4
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 4
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 4
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 4
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 4
          </Typography>
          <Typography
            onClick={() => window.location.href = '/products'}
            sx={{
              cursor: 'pointer',
              color: '#000',
              '&:hover': {
                color: 'orange',
                textDecoration: 'underline',
              },
            }}
          >
            Listado 4
          </Typography>
          
        </Box>
      </Box>

    </Box>
  );
};
