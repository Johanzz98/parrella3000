import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const inputStyleNav = {
  height: "46px",
  border: "2px",
  fontSize:'12px',
  borderRadius: 10,
  boxShadow: 4,
  backgroundColor: "#ffffff",
  alignItems: "center",
  width:'300px',
  boxShadow:'none',
  borderRadius: "30px",
  padding: "12px 24px 12px 24px",
  margin: "0 10px",
};

const settings={
  color: "#7e7e7e",
  fontSize: "10px",
  fontWeight: "550",
  display: "flex",
  padding: "6px 24px",
  fontFamily: "Helvetica,sans-serif",

}

const Items = {
  color: "#7e7e7e",
  fontSize: "12px",
  fontWeight: "550",
  display: "flex",
  padding: "6px 24px",
  fontFamily: "Helvetica,sans-serif",
};

const title = {
  color: "#111",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  padding: "6px 24px",
  margin:0,
  marginLeft:'8px',
  
  fontFamily: "Helvetica,sans-serif",
};

const detalles = {
  color: "#111",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  marginLeft:'6px',
  fontFamily: "Helvetica,sans-serif",
};

const Available = {
  color: "#2ccebe",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "8px",
 
  fontFamily: "Helvetica,sans-serif",
};
const Disable = {
  color: "#e75751",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "14px",
  
marginTop:'-6px',
marginBottom:'-6px',
  fontFamily: "Helvetica,sans-serif",
};

const Categories = {
  color: "#868686",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  marginLeft:'6px',
  fontFamily: "Helvetica,sans-serif",
};

const AvailableEdit = {
  color: "#2ccebe",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "14px",
 
  fontFamily: "Helvetica,sans-serif",
};
const DisableEdit = {
  color: "#e75751",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  padding: "14px",
  
marginTop:'-6px',
marginBottom:'-6px',
  fontFamily: "Helvetica,sans-serif",
};

const boxDisable={
  border: "1px solid #e75751",
              width: "auto",
              backgroundColor:'#fff3f4',
              height: "auto",
              
              borderRadius: "12px",
}
const boxAvailable={
border: "1px solid #149285",
              width: "auto",
              height: "auto",
              borderRadius: "12px",
            }
const ListProduct = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // Estado para el valor de búsqueda
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Estado para el modal
  const [actionType, setActionType] = useState(""); // Estado para el tipo de acción (Eliminar en este caso)
  const [status, setStatus] = useState("Available"); // Estado para el estado del producto
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Actualizar el estado del valor de búsqueda
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenu = () => {
      setAnchorEl(null);
    };
  


    const handleConfirmDelete = () => {
      console.log('Producto eliminado');
      setShowConfirmModal(false);
    };
    
    const handleCancelDelete = () => {
      setShowConfirmModal(false);
    };
    
    const handleMenuItemClick = (action) => {
      if (action === 'Eliminar') {
        setShowConfirmModal(true);
      } else {
        setStatus(action);
        console.log(action)
        handleMenu();
      }
    };
      
  return (
    <Box sx={{ padding: "12px", margin: 0,backgroundColor:'#faf9f2' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "16px", // Adjust spacing between items
          padding: "16px", // Optional padding around the container
        }}
      >
        <IconButton onClick={handleOpen} disableRipple>
          <InputBase
            placeholder="Search..."
            inputProps={{ Roboto: "search",fontSize:'12px' }}
            value={searchValue}
            onChange={handleSearchChange}
            sx={inputStyleNav}
            endAdornment={<SearchIcon sx={{ color: "black",fontSize:'14px' }} />}
          />
        </IconButton>

        <Box
          sx={{
            width: "120px",
            height: "40px",
            
            backgroundColor:'#ffff',
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={settings}>Sort By</Typography>
          <KeyboardArrowDownIcon/>
        </Box>

        <Box
          sx={{
            width: "160px",
            backgroundColor:'#ffff',
            height: "40px",
          
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={settings}>Price Range</Typography>
          <TuneIcon  sx={{color:'#111', paddingLeft:'12px', fontSize:'16px',margin:'2px'}}/>
        </Box>
      </Box>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center', // Alinea verticalmente los elementos dentro del contenedor
        gap: '16px', // Espacio entre el texto y el número
        padding: '16px', // Padding alrededor del contenedor
      }}
    >
      <Typography sx={{...Items, color: '#157171' }}>All Products</Typography>
      <Box
        sx={{...Items,
          width: '12px',  
          height: '16px',
          marginLeft:'-24px',
          backgroundColor:'#ffff',
          border: '1px solid #157171',
          borderRadius: '12px', // Hace que el borde sea circular
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#157171', // Cambia el color del número
        }}
      >
        (120)
      </Box>
      <Typography sx={{...Items}}>Available</Typography>
      <Box
        sx={{...Items,
          width: '12px',  
          height: '16px',
          marginLeft:'-24px',
          backgroundColor:'white',
          border: '1px solid #acacac',
          borderRadius: '12px', // Hace que el borde sea circular
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        (90)
      </Box>
      <Typography sx={{...Items }}>Disable</Typography>
      <Box
        sx={{...Items,
          width: '12px',  
          height: '16px',
          marginLeft:'-24px',
          backgroundColor:'white',
          border: '1px solid #acacac',
          borderRadius: '12px', // Hace que el borde sea circular
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        (30)
      </Box>
       
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          border: "1px solid #CFE4E4",
          borderRadius: "24px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ width: "100%", height: "auto", backgroundColor: "#fffff" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
              alignItems: "center",
              padding: "16px", // Padding alrededor del contenedor
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
              label={<Typography sx={title}>Product</Typography>}
            />
            <Typography sx={{ ...title, marginLeft: "186px" }}>
              Price <ImportExportIcon  sx={{color:'#111', paddingLeft:'12px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
            <Typography sx={{ ...title, marginLeft: "32px" }}>
              Status <ImportExportIcon  sx={{color:'#111', paddingLeft:'12px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
            <Typography sx={{ ...title, marginLeft: "36px" }}>
              Stock <ImportExportIcon  sx={{color:'#111', paddingLeft:'12px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
            <Typography sx={{ ...title, marginRight: "62px" }}>
              Total Earning <ImportExportIcon  sx={{color:'red', paddingLeft:'16px', fontSize:'18px',margin:'2px'}}/>
            </Typography>
          </Box>
          <Divider
            sx={{
              width: "100%",
              bgcolor: "#eeeeee",
              color: "red",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
            alignItems: "center",
            paddingRight:'12px',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Alinea los elementos verticalmente
              padding: "12px",
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
            />
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
              alt="logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "32px",
                margin: "0", // Elimina el margen
                marginLeft: "8px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Alinea los elementos en una columna
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "16px",
              }}
            >
              <Typography sx={detalles}>Jordan Air Max</Typography>
              <Typography sx={Categories}>Category: Shoes</Typography>
            </Box>
          </Box>
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={{
              border: "1px solid #149285",
              width: "auto",
              height: "auto",
              borderRadius: "12px",
            
            }}
          >
            <Typography sx={{...Available, }}>Available</Typography>
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton
  sx={{
    '&:hover': {
      backgroundColor: 'transparent', // Evita cambios de fondo en hover
    },

  }}
>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
      </IconButton>
        </Box>
        <Divider
            sx={{
              width: "100%",
              bgcolor: "#eeeeee",
              color: "red",
            }}
          />
      
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
            alignItems: "center",
            paddingRight:'12px',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Alinea los elementos verticalmente
              padding: "12px",
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
            />
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
              alt="logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "32px",
                margin: "0", // Elimina el margen
                marginLeft: "8px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Alinea los elementos en una columna
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "16px",
              }}
            >
              <Typography sx={detalles}>Jordan Air Max</Typography>
              <Typography sx={Categories}>Category: Shoes</Typography>
            </Box>
          </Box>
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={boxDisable}
          >
            <Typography sx={Disable}>Disable</Typography>
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton
  sx={{
    '&:hover': {
      backgroundColor: 'transparent', // Evita cambios de fondo en hover
    },

  }}
>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
      </IconButton>
        </Box>
        <Divider
            sx={{
              width: "100%",
              bgcolor: "#eeeeee",
              color: "red",
            }}
          />
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
            alignItems: "center",
            paddingRight:'12px',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Alinea los elementos verticalmente
              padding: "12px",
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
            />
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
              alt="logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "32px",
                margin: "0", // Elimina el margen
                marginLeft: "8px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Alinea los elementos en una columna
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "16px",
              }}
            >
              <Typography sx={detalles}>Jordan Air Max</Typography>
              <Typography sx={Categories}>Category: Shoes</Typography>
            </Box>
          </Box>
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={boxAvailable}
          >
            <Typography sx={{...Available, }}>Available</Typography>
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton
  sx={{
    '&:hover': {
      backgroundColor: 'transparent', // Evita cambios de fondo en hover
    },

  }}
>
            <Box sx={{backgroundColor:'#ececec',borderRadius:'8px',height:'42px',marginLeft:'-24px'}}>
        <MoreVertIcon sx={{ color: '#111',marginTop:'10px' }} />
          </Box>
      </IconButton>
        </Box>
        <Divider
            sx={{
              width: "100%",
              bgcolor: "#eeeeee",
              color: "red",
            }}
          />
  
      
      <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Distribuye el espacio de manera uniforme entre los elementos
            alignItems: "center",
            paddingRight:'12px',
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Alinea los elementos verticalmente
              padding: "12px",
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} />}
            />
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-wm0F96.png"
              alt="logo"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "32px",
                margin: "0", // Elimina el margen
                marginLeft: "8px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Alinea los elementos en una columna
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "16px",
              }}
            >
              <Typography sx={detalles}>Jordan Air Max</Typography>
              <Typography sx={Categories}>Category: Shoes</Typography>
            </Box>
          </Box>
          <Typography sx={detalles}>$220.99</Typography>
          <Box
            sx={status ==='Available' ? boxAvailable : boxDisable}
          >
           
            <Typography sx={status === "Available" ? Available : Disable}>
{status}
</Typography>
          </Box>
          <Typography sx={detalles}>55pcs</Typography>
          <Typography sx={detalles}>$854.226</Typography>
          <IconButton
sx={{
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: 'transparent',
  },
  transition: 'none',
}}
onClick={handleClick}
>
<Box
  sx={{
    backgroundColor: '#ececec',
    borderRadius: '8px',
    height: '42px',
    marginLeft: '-24px',
  }}
>
  <MoreVertIcon sx={{ color: '#111', marginTop: '10px' }} />
</Box>
</IconButton>

</Box>
   
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenu}
  sx={{
    boxShadow: 'none',
    
    '& .MuiPaper-root': {
      boxShadow: 'none',
      border: '1px solid #eeeeee',
      borderRadius: '12px',
    },
    // Adjust menu position
    transform: 'translateX(-5%) translateY(-2.5%)', // Moves the menu left and up
   
  }}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
>
  
  <MenuItem onClick={() => handleMenuItemClick('Available')} sx={AvailableEdit}>Disponible</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('Disable')} sx={DisableEdit}>Desactivar</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('Eliminar')} sx={DisableEdit}>Eliminar</MenuItem>
</Menu>


      </Box>
      <Modal
      open={showConfirmModal}
      onClose={handleCancelDelete}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          ¿Estás seguro de eliminar?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '20px' }}>
          Esta acción no se puede deshacer.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>
            Eliminar
          </Button>
          <Button variant="outlined" onClick={handleCancelDelete}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
    </Box>
  );
};



export default ListProduct;
