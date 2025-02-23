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
  height: "1232px",
  alignItems: "center",
  marginLeft: "-14px",
  marginTop: "34px",
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
  const [stock, setStock] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
  });

  const handleSizeClick = (size) => {
    let newSelectedSizes = [...selectedSizes];
    const index = newSelectedSizes.indexOf(size);

    if (index === -1) {
      newSelectedSizes.push(size);
      setStock((prevStock) => ({ ...prevStock, [size]: prevStock[size] || 0 }));
    } else {
      newSelectedSizes.splice(index, 1);
      setStock((prevStock) => ({ ...prevStock, [size]: 0 }));
    }

    setSelectedSizes(newSelectedSizes);
  };

  const handleStockChange = (size, value) => {
    setStock((prevStock) => ({
      ...prevStock,
      [size]: value,
    }));
  };

  const isSizeSelected = (size) => selectedSizes.includes(size);

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

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();

      selectedFiles.forEach((file, index) => {
        if (file) {
          formData.append(`file${index}`, file);
        }
      });

      formData.append("sizes", JSON.stringify(selectedSizes));
      formData.append("stock", JSON.stringify(stock));

      toast.success("Form submitted successfully!");
      setSubmitting(false);
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      setSubmitting(false);
    }
  };

  // Maneja el cambio de archivo
  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);
  };

  // Maneja el drop de archivos
  const handleDrop = (event, index) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[index] = file;
      setSelectedFiles(newSelectedFiles);
    }
  };

  // Prevenir el comportamiento predeterminado de drag over para permitir el drop
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Eliminar una imagen
  const handleRemoveImage = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = null; // Eliminar el archivo
    setSelectedFiles(newSelectedFiles);
  };
  return (
    <Grid container justifyContent="center">
      <Paper style={isSmallScreen ? { padding: 10, boxShadow: "none", borderRadius: "24px" } : { padding: 24, boxShadow: "none", borderRadius: "8px", height: "1232px", alignItems: "center", marginLeft: "-14px", marginTop: "34px", justifyContent: "center" }}>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable progress={undefined} theme="colored" style={{ fontSize: "12px", width: "446px", right: 5 }} />
        
        <Typography sx={{ fontSize: "16px", fontWeight: "1000", color: "#4c5c7e", display: "flex", justifyContent: "flex-start", alignItems: "center", fontFamily: "Helvetica,sans-serif", fontOpticalSizing: "auto", marginBottom: "12px" }}>
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
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                  onClick={() => document.getElementById(`fileInput${index}`).click()}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)} // Manejar el evento drop
                >
                  {selectedFiles[index] ? (
                    <>
                      <CloseOutlinedIcon
                        onClick={(e) => {
                          e.stopPropagation(); // Evita que se active el evento de clic en la caja
                          handleRemoveImage(index);
                        }}
                        sx={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          padding:'4px',
                          cursor: "pointer",
                          fontSize:'14px',
                          color: "#eeeeeee",
                          backgroundColor:'#f1f4fa',
                          borderRadius:'24px',
                        }}
                      />
                      <img
                        src={URL.createObjectURL(selectedFiles[index])}
                        alt={`Selected ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </>
                  ) : (
                    <Typography sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#111", fontFamily: "Helvetica, sans-serif", fontSize: "12px" }}>
                      <img
                        src="../../assets/img/inmg.png"
                        loading="lazy"
                        alt="Image 1"
                        style={{
                          width: "100px",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                      Drop your images or
                      <span>
                        <span>click to browse</span>
                      </span>
                    </Typography>
                  )}

                  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {() => (
                      <Form>
                        <input
                          id={`fileInput${index}`}
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(event) => handleFileChange(event, index)}
                        />
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ marginTop: "12px", marginBottom: "12px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "1000",
              color: "#4c5c7e",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
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
                  border: "1px solid #e7e9ee",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "row", // Aseguramos que los elementos estén en fila
                  alignItems: "center",
                }}
              >
                {/* Columna de Tamaños */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{ flexGrow: 1 }}
                >
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={5}
                    sx={{ marginRight: 2, position: "relative" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#687692",
                        fontFamily: "Helvetica, sans-serif",
                        marginBottom: "12px",
                      }}
                    >
                      Add Size
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={4}
                          key={size}
                          onClick={() => handleSizeClick(size)}
                        >
                          <Paper sx={getPaperStyle(size)}>
                            {isSizeSelected(size) && (
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
                                color: isSizeSelected(size) ? "#111" : "#333",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontFamily: "Helvetica, sans-serif",
                                "&:hover": { color: "orange" },
                              }}
                            >
                              {size}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  {/* Columna de Stock */}
                  <Grid item xs={6} sm={6} md={6}>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                      direction="row"
                    >
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <Grid item xs={6} sm={6} md={4} key={size}>
                          {/* Campo de Stock solo visible cuando el tamaño está seleccionado */}
                          {isSizeSelected(size) && (
                            <TextField
                              type="number"
                              label={`${size} Stock`} // Aquí se indica la talla
                              value={stock[size] || 0}
                              onChange={(e) =>
                                handleStockChange(size, e.target.value)
                              }
                              sx={{
                                width: "80px",
                                borderRadius: "4px",
                                fontSize: "14px",
                                textAlign: "center",
                              }}
                              inputProps={{
                                min: 0,
                              }}
                            />
                          )}
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
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
                <Typography
                  sx={{
                    fontSize: "16px",

                    fontWeight: "800",
                    color: "#4c5c7e",

                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontFamily: "Helvetica,sans-serif",
                    fontOpticalSizing: "auto",
                    marginBottom: "12px",
                  }}
                >
                  Price
                </Typography>
                <Grid container alignItems="center">
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{ marginTop: "-16px" }}
                  >
                    <TextField
                      fullWidth
                      placeholder="$19.990"
                      variant="outlined"
                      sx={{
                        "& .MuiInputLabel-root": { fontSize: "0.8rem" },
                        "& .MuiInputBase-root": { fontSize: "0.8rem" },
                        marginTop: "8px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ marginTop: "24px", marginBottom: "6px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",

                    fontWeight: "1000",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "16px",
                }}
              >
                <Box sx={{ height: "30px", backgroundColor: "#ffff" }} />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={props.isSubmitting}
                  sx={{
                    backgroundColor: "#3575af",
                    color: "white",
                    width: "50%",

                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#3575af",
                      color: "#111",
                      boxShadow: "none", // Define el color de fondo para el hover
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
