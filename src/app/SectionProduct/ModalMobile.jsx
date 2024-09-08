import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Modal,
  Button,
  useMediaQuery,
  CardMedia,
  Card,
  CardContent
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const createDataHombre = (name, XS, S, M, Estatura, highlight = false) => ({
  name, XS, S, M, Estatura, highlight
});

const rowsHombre = [
  createDataHombre("XS", "80 - 88", "65 - 73", "80 - 88", "<170", true),
  createDataHombre("S", "88 -96", "73 - 81", "88 - 96", "170 - 183", true),
  createDataHombre("M", "96 - 104", "81 - 89", "96 - 104", "170 - 183", true),
  createDataHombre("L", "104 - 112", "89 - 97", "104 - 112", "170 - 183", true),
  createDataHombre("XL", "112 - 124", "97 - 109", "112 - 120", "183 - 196", true),
];

const list = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#111",
  marginBottom: '12px',
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
};

const detalles = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const sub = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: "flex",
  marginTop: "12px",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",
};

const ModalMobile = ({ open, handleClose }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const renderTable = (rows) => (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        overflowX: 'auto', // Enable horizontal scrolling if needed
        marginLeft: 0,
      }}
    >
      <Table sx={{ minWidth: 'auto' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "1px solid #e4e4ec", minWidth: 120 }}>Tallas(CM)</TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec", minWidth: 120 }}>Pecho</TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec", minWidth: 120 }}>Cintura</TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec", minWidth: 120 }}>Cadera</TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec", minWidth: 120 }}>Estatura</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "1px solid #e4e4ec",
                },
                borderBottom: "1px solid #e4e4ec",
                backgroundColor: row.highlight ? "transparent" : "transparent",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  backgroundColor: row.highlight ? "#000c2d" : "transparent",
                  color: row.highlight ? "white" : "inherit",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ borderRight: "1px solid #e4e4ec" }}>{row.XS}</TableCell>
              <TableCell align="right" sx={{ borderRight: "1px solid #e4e4ec" }}>{row.S}</TableCell>
              <TableCell align="right" sx={{ borderRight: "1px solid #e4e4ec" }}>{row.M}</TableCell>
              <TableCell align="right" sx={{ borderRight: "1px solid #e4e4ec" }}>{row.Estatura}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        padding: '16px',
      }}
    >
      
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh', // Adjust the maximum height
          overflowY: 'auto', // Enable vertical scrolling if needed
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: 24,
          outline: 0,
          position: 'relative', // To position the close button correctly
        }}
      >
        <Button onClick={handleClose} sx={{ position: 'absolute', top: '16px', right: '0' }}>
          <ClearIcon sx={{ color: '#111' }} />
        </Button>

        <Box>
          <Typography sx={{
            fontSize: "20px",
            fontWeight: "1000",
            color: "#091952",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: '12px',
            fontFamily: "Helvetica, sans-serif",
          }}>
            POLERAS HOMBRE
          </Typography>
          <Typography sx={sub}>Encuentra tu talla correcta.</Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "1000",
              color: "#091952",
              marginTop: '24px',
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            GUIA DE TALLAS
          </Typography>
          <Typography sx={sub}>
            Las medidas de tallas son medidas corporales. Usa la siguiente tabla para encontrar la tabla correcta.
          </Typography>
          <br />
          {renderTable(rowsHombre)} 
           <Typography sx={{ fontSize: "12px",
  fontWeight: "500",
  color: "#091952",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: "auto",}}
          >
           Desliiza horizontalmente para ver más opciones
          </Typography>

          <Box sx={{ marginTop: '16px' }}>
            <Typography sx={{
              fontSize: "14px",
              fontWeight: "1000",
              color: "#091952",
              display: "flex",
              marginRight: '6px',
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
            }}>
              Consejos para encontrar el ajuste ideal
            </Typography>
          
          </Box>

          <Box >
            <Typography sx={{
                fontSize: "12px",
                fontWeight: "1000",
                color: "#091952",
                display: "flex",
                marginTop:'12px',
                marginBottom:'-2px',
                marginRight: '6px',
                justifyContent: "flex-start",
                fontFamily: "Helvetica, sans-serif",
              }}>
                Tallas de POLERAS
              </Typography>
              <Typography sx={
              sub}>
              para personas altas (1,83-1.96cm): 4,5 cm más largo que los tops regulares
            </Typography>

            <Typography sx={sub}>
              La longitud de la manga se ajusta de forma proporcional según el estilo. 
              Las tallas para personas altas solo están disponibles en estilos seleccionados.
              <br /><br />
              {' '}
            
            </Typography>
            <Typography component="span" sx={{
                fontSize: "12px",
                fontWeight: "1000",
                color: "#091952",
                display: "flex",
                marginTop:'-4px',
                marginRight: '6px',
                marginBottom:'2px',
                fontFamily: "Helvetica, sans-serif",
              }}>
                Si estás al límite entre dos tallas, pide la talla más pequeña para obtener un ajuste más ceñido o La talla más grande para obtener un ajuste más holgado (Oversize).
              </Typography>
              
              <Typography sx={sub}>
              Si las medidas del pecho y la cintura corresponden a dos tallas sugeridas diferentes, pide la talla más indicada para la medida del pecho.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: '32px', marginTop: '24px' }}>
            <Typography sx={{
              fontSize: "14px",
              fontWeight: "1000",
              color: "#091952",
              display: "flex",
              justifyContent: "flex-start",
              width: '100%',
              fontFamily: "Helvetica, sans-serif",
            }}>
              CÓMO MEDIR
            </Typography>
            <Typography sx={detalles}>
              Toma una cinta métrica, anota las medidas y compáralas con nuestra guía de tallas para encontrar la talla adecuada.
            </Typography>
          </Box>

          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px', boxShadow: 'none', border: 'none',backgroundColor:'#eceff1' }}>
            <CardMedia
              component="img"
              alt="Image"
              image="https://brand.assets.adidas.com/image/upload/Male_Image_tcm221_856197_5260588165.png"
              sx={{
                marginTop:'12px',
                marginLeft:'-12px',
                width: '80%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
              <Typography sx={list}>
                Sujeta la cinta métrica de forma horizontal para medir:
              </Typography>
              <Typography sx={list}>
                1. Pecho, alrededor de la parte más ancha
              </Typography>
              <Typography sx={list}>
                2. Cintura, alrededor de la parte más estrecha
              </Typography>
              <Typography sx={list}>
                3. Cadera, alrededor de la parte más ancha, manteniendo los pies juntos
              </Typography>
              <Typography sx={list}>
                Sujeta la cinta métrica de forma vertical para medir:
              </Typography>
              <Typography sx={list}>
                4. Tiro de la entrepierna, desde la entrepierna hasta el piso
              </Typography>
              <Typography sx={list}>
                5. Altura, desde la parte superior de la cabeza hasta el piso, manteniendo una postura recta
              </Typography>
            </CardContent>
          </Card>

        </Box>

      </Box>
    </Modal>
  );
};

export default ModalMobile;
