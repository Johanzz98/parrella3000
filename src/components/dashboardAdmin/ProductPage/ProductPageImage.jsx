import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
const paperStyle = {
  padding: 24,
  boxShadow: "none",
  borderRadius: "8px",
  height:'1232px',
  alignItems: "center",
  marginLeft:'-14px',
 marginTop:'34px',
  justifyContent: "center",
};

const SmallpaperStyle = {
  padding: 10,

  boxShadow: "none",
  borderRadius: "24px",
};

const ProductPageImage = () => {
  const theme = useTheme();
  const [selectedFiles, setSelectedFiles] = useState(Array(6).fill(null));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isFocused, setIsFocused] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSizeClick = (size) => {
    // Clona el array de tallas seleccionadas
    let newSelectedSizes = [...selectedSizes];

    // Verifica si la talla ya está seleccionada
    const index = newSelectedSizes.indexOf(size);

    // Si no está seleccionada, agrégala; de lo contrario, quítala
    if (index === -1) {
      newSelectedSizes.push(size);
    } else {
      newSelectedSizes.splice(index, 1);
    }

    // Actualiza el estado con el nuevo array de tallas seleccionadas
    setSelectedSizes(newSelectedSizes);
  };

  const isSizeSelected = (size) => {
    // Verifica si una talla está seleccionada
    return selectedSizes.includes(size);
  };

  const getPaperStyle = (size) => ({
    textAlign: "center",
    
    boxShadow: "none",
    border: isSizeSelected(size) ? "2px solid #f1f4fa" : "1px solid #6c8cac",
    height: "24px",
    marginTop: "12px",
    backgroundColor: isSizeSelected(size) ? "#f1f4fa" : "white",
    position: "relative",
    cursor: "pointer",
    "&:hover": { color: "orange" },
  });

  const handleFileChange = (event, index, setFieldValue) => {
    const file = event.currentTarget.files[0];
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);
    setFieldValue(`file${index}`, file); // Usamos setFieldValue directamente aquí
  };

  const onClickFileInput = (index) => {
    const inputId = `fileInput${index}`;
    const fileInput = document.getElementById(inputId);
    if (fileInput) {
      fileInput.click();
    }
  };

  const validationSchema = Yup.object().shape({
    file0: Yup.mixed().required("Required"),
    file1: Yup.mixed().required("Required"),
    file2: Yup.mixed().required("Required"),
    file3: Yup.mixed().required("Required"),
    file4: Yup.mixed().required("Required"),
    file5: Yup.mixed().required("Required"),
  });

  const initialValues = {
    file0: "",
    file1: "",
    file2: "",
    file3: "",
    file4: "",
    file5: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    console.log("Selected Files:", selectedFiles);
    toast.success("Form submitted successfully!");
    setSubmitting(false);
  };

  return (
    <Grid container justifyContent="center">
      <Paper style={isSmallScreen ? SmallpaperStyle : paperStyle}>
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
        
            <Typography
            sx={{
              fontSize: "16px",
              
        
                fontWeight:'1000',
                color: "#4c5c7e",
             
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica,sans-serif",
              fontOpticalSizing: "auto",
              marginBottom: "12px",
            }}
          >
            Product Images
          </Typography>
        <Box sx={{ border: "1px solid #e7e9ee", borderRadius: "12px", padding: "20px" }}>
      
          <Grid container spacing={2}>
            {[...Array(6)].map((_, index) => (
              <Grid item key={index} xs={4} sm={4}>
            <Box
  sx={{
    borderRadius: "4px",
    backgroundColor: "#f1f4fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "220px",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }}
  onClick={() => onClickFileInput(index)}
>
                  {selectedFiles[index] ? (
                    <img
                      src={URL.createObjectURL(selectedFiles[index])}
                      alt={`Selected ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "container",
                      }}
                    />
                  ) : (
                    <Typography
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column", // Organiza los elementos en columnas
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#111",
                      fontFamily: "Helvetica, sans-serif",
                      fontOpticalSizing: "auto",
                      fontSize: '12px',
                      "& span": {
                        color: "blue", // Cambiar el color de "click to browse" a rojo
                        margin: 0, // Eliminar margen
                        padding: 0, // Eliminar relleno
                        whiteSpace: 'nowrap', // Evitar que el texto se envuelva a la siguiente línea
                      },
                    }}
                  >
                       <img
            src= "../../assets/img/inmg.png"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100px', height: 'auto', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            
                   Drop your images or
                    <span> <span>click to browse</span></span>
                  </Typography>
                  )}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(props) => (
                      <Form>
                        <input
                          id={`fileInput${index}`} // Cambia el ID de manera dinámica para cada elemento
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(event) =>
                            handleFileChange(event, index, props.setFieldValue)
                          }
                        />
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Grid>
            ))}
          </Grid>
          </Box>
          <Box sx={{marginTop:'12px',marginBottom:'-12px'}}>
            <Typography sx={{ fontSize: "16px",
                                fontWeight:'1000',
                                color: "#4c5c7e",
                                fontFamily: "Helvetica, sans-serif",}}>
              Sales Channel
            </Typography>
          </Box>
          <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
>
    {(props) => (
        <Form>
            <Box
                sx={{
                    padding: "20px",
                    marginTop:'24px',
                    border: "1px solid #e7e9ee",
                    borderRadius: "12px",
                    backgroundColor: "white",
                    marginBottom: "20px",
                    display: "flex",
                    
                    flexDirection: "row",
                    alignItems: "center",
                }}
                
            >
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    sx={{ flexGrow: 1 }}
                >
                    {/* Columna de Tamaños */}
                    <Grid item xs={6} sm={6} md={5} sx={{ marginRight: 2 }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight:'600',
                                color: "#687692",
                                fontFamily: "Helvetica, sans-serif",
                                marginBottom: "12px",
                            }}
                        >
                            Add Size
                        </Typography>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={6} sm={6} md={4} onClick={() => handleSizeClick("XS")}>
                                <Paper sx={getPaperStyle("XS")}>
                                    {isSizeSelected("XS") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("XS") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        XS
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={4} onClick={() => handleSizeClick("S")}>
                                <Paper sx={getPaperStyle("S")}>
                                    {isSizeSelected("S") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("S") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        S
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={4} onClick={() => handleSizeClick("M")}>
                                <Paper sx={getPaperStyle("M")}>
                                    {isSizeSelected("M") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("M") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        M
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={4} onClick={() => handleSizeClick("L")}>
                                <Paper sx={getPaperStyle("L")}>
                                    {isSizeSelected("L") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("L") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        L
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={6} md={4} onClick={() => handleSizeClick("XL")} sx={{marginLeft:'71px'}}>
                                <Paper sx={getPaperStyle("XL")}>
                                    {isSizeSelected("XL") && (
                                        <CloseOutlinedIcon
                                            sx={{
                                                position: "absolute",
                                                top: "-8px",
                                                right: "-8px",
                                                backgroundColor: "#2c548c",
                                                padding: "2px",
                                                color: "white",
                                                borderRadius: "50%",
                                                fontSize: "12px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: isSizeSelected("XL") ? "#111" : "#333",
                                            display: "flex",
                                            justifyContent: "center",
                                          
                                            alignItems: "center",
                                            fontFamily: "Helvetica, sans-serif",
                                            "&:hover": { color: "orange" },
                                        }}
                                    >
                                        XL
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Columna de Fecha */}
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography  sx={{position:'relative', bottom:56,fontSize: "16px",
                                fontWeight: "600",
                                color: "#687692",
                                marginLeft:'36px',
                                fontFamily: "Helvetica, sans-serif",
                           }}>
                            Price
                        </Typography>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={12} md={6} sx={{marginTop:'-56px',marginLeft:'36px'}} >
                            <Field
                  as={TextField}
                  fullWidth
                  placeholder="$19.990"
                  name="person.phoneNumber"
                
                  helperText={<ErrorMessage name="person.phoneNumber" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                    "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                      width:'200px',
                    }, // Ajustar altura del TextField
                    marginTop: "8px",
                  }}
                />
                            </Grid>
                        </Grid>
                       
                    </Grid>
                    <Typography  sx={{position:'relative', bottom:46,fontSize: "16px",
                                fontWeight: "600",
                                color: "#687692",
                                marginLeft:'290px',
                                fontFamily: "Helvetica, sans-serif",
                           }}>
                            Stock
                        </Typography>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={12} md={6} sx={{marginTop:'-46px',marginLeft:'290px'}} >
                            <Field
                  as={TextField}
                  fullWidth
                  placeholder="24"
                  name="person.phoneNumber"
                
                  helperText={<ErrorMessage name="person.phoneNumber" />}
                  FormHelperTextProps={{
                    sx: { fontSize: "0.6rem", color: "#f44336" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { fontSize: "0.8rem" }, // Reducir tamaño del label
                    "& .MuiInputBase-root": { fontSize: "0.8rem" }, // Reducir tamaño del input
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      height: "43px",
                      width:'200px',
                    }, // Ajustar altura del TextField
                    marginTop: "8px",
                  }}
                />
                 </Grid>
                 </Grid>
                </Grid>
            </Box>
            <Box sx={{marginTop:'24px',marginBottom:'6px'}}>
<Typography
            sx={{
              fontSize: "16px",
              
        
                fontWeight:'1000',
                color: "#4c5c7e",
             
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica,sans-serif",
              fontOpticalSizing: "auto",
              marginBottom: "12px",
            }}
          >
                      Details Shipping
                    </Typography>
</Box>

            <Box
  sx={{
    padding: "20px",
    border: "1px solid #e7e9ee",
    borderRadius: "12px",
    backgroundColor: "white",
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "repeat(2, 1fr)", // Dos columnas con igual tamaño
  }}
>
  {/* Primer campo */}
  <div>
    <Typography
      sx={{
        color: "#687692",
        fontSize: "16px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Helvetica,sans-serif",
        fontOpticalSizing: "auto",
        marginTop: "12px",
      }}
    >
      Shipping Description
    </Typography>
    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your shipping and payment"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem", color: "#111" },
        classes: {
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          },
        },
      }}
      sx={{
        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
        "& .MuiInputBase-root": {
          fontSize: "0.8rem",
        },
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          height: "100px",
          width: "100%", // Ocupa todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined,
      }}
    />
  </div>

  {/* Segundo campo */}
  <div>
    <Typography
      sx={{
        color: "#687692",
        fontSize: "16px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Helvetica,sans-serif",
        fontOpticalSizing: "auto",
        marginTop: "12px",
      }}
    >
      Shipping Description
    </Typography>
    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your shipping and payment"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem", color: "#111" },
        classes: {
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          },
        },
      }}
      sx={{
        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
        "& .MuiInputBase-root": {
          fontSize: "0.8rem",
        },
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          height: "100px",
          width: "100%", // Ocupa todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined,
      }}
    />
  </div>

  {/* Tercer campo */}
  <div>
    <Typography
      sx={{
        color: "#687692",
        fontSize: "16px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Helvetica,sans-serif",
        fontOpticalSizing: "auto",
        marginTop: "12px",
      }}
    >
      Shipping Description
    </Typography>
    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your shipping and payment"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem", color: "#111" },
        classes: {
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          },
        },
      }}
      sx={{
        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
        "& .MuiInputBase-root": {
          fontSize: "0.8rem",
        },
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          height: "100px",
          width: "100%", // Ocupa todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined,
      }}
    />
  </div>

  {/* Cuarto campo */}
  <div>
    <Typography
      sx={{
        color: "#687692",
        fontSize: "16px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Helvetica,sans-serif",
        fontOpticalSizing: "auto",
        marginTop: "12px",
      }}
    >
      Shipping Description
    </Typography>
    <Field
      as={TextField}
      fullWidth
      multiline
      name="notes"
      placeholder="Notes about your shipping and payment"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      helperText={<ErrorMessage name="notes" />}
      FormHelperTextProps={{
        sx: { fontSize: "0.6rem", color: "#f44336" },
      }}
      InputProps={{
        style: { fontSize: "0.8rem", color: "#111" },
        classes: {
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          },
        },
      }}
      sx={{
        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
        "& .MuiInputBase-root": {
          fontSize: "0.8rem",
        },
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          height: "100px",
          width: "100%", // Ocupa todo el ancho disponible
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
        marginTop: "8px",
        borderColor: isFocused ? "#428fd5" : undefined,
      }}
    />
  </div>
</Box>
<Box sx={{display: 'flex',
                  justifyContent: 'flex-end',marginTop:'16px'}}>
              <Box
                sx={{ height: "30px", backgroundColor: "#ffff" }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
           sx={{ backgroundColor: '#3575af',
            color: 'white',
            width:'50%',
           
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#3575af', color:'#111',boxShadow:'none', // Define el color de fondo para el hover
            },
          }}
              >
                Add product
              </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default ProductPageImage;
