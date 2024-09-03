import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  CardContent,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const createDataMujer = (
  name,
  XXS,
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  highlight = false,
) => {
  return { name, XXS, XS, S, M, L, XL, XXL, highlight };
};

const createDataHombre = (name, XS, S, M, L, XL, XXL, highlight = false) => {
  return { name, XS, S, M, L, XL, XXL, highlight };
};

const rowsMujer = [
  createDataMujer("US SIZES", "4", "6", "8", "10", "12", "14", "18"),
  createDataMujer("UK SIZES", "0", "2", "4", "6", "8", "10", "12"),
  createDataMujer("EU SIZES", "32", "34", "36", "38", "40", "42", "44"),
  createDataMujer("FR SIZE", "34", "36", "38", "40", "42", "44", "46"),
  createDataMujer("IT SIZE", "38", "40", "42", "44", "46", "48", "50"),
  createDataMujer(
    "MANGA",
    "77.8 - 78.3",
    "78.3 - 78.8",
    "78.8 - 79.3",
    "79.3 - 79.8",
    "79.8 - 80.3",
    "80.3 - 80.8",
    "80.8 - 81.3",
    true,
  ),
  createDataMujer(
    "CADERA",
    "76.5 - 80.5",
    "80.5 - 84.5",
    "84.5 - 88.5",
    "88.5 - 92.5",
    "92.5 - 96.5",
    "96.5 - 101.5",
    "101.5 - 106.5",
    true,
  ),
  createDataMujer(
    "CINTURA",
    "60 - 64",
    "64 - 68",
    "68 - 72",
    "72 - 76",
    "76 - 81",
    "81 - 86",
    "86 - 91",
    true,
  ),
];

const rowsHombre = [
  createDataHombre("UK / US SIZE", "34", "36-38", "40", "42", "44", "46"),
  createDataHombre("EU SIZE", "44", "46-48", "50", "52", "54", "56"),
  createDataHombre(
    "BUSTO",
    "88 - 92",
    "93 - 97",
    "98 - 102",
    "103 - 108",
    "109 - 114",
    "115 - 120",
  ),
  createDataHombre(
    "CINTURA",
    "78 - 82",
    "83 - 87",
    "88 - 92",
    "93 - 98",
    "99 - 104",
    "105 - 110",
  ),
  createDataHombre(
    "BRAZOS",
    "84 - 85",
    "86 - 87",
    "88 - 89",
    "90 - 91",
    "92 - 93",
    "94 - 95",
  ),
  createDataHombre(
    "CUELLOS",
    "37 - 38",
    "38 - 39",
    "40 - 41",
    "42 - 43",
    "44 - 45",
    "45 - 46",
    true,
  ),
  createDataHombre(
    "CADERA",
    "84.5 - 88.5",
    "88.5 - 92.5",
    "92.5 - 96.5",
    "96.5 - 100.5",
    "100.5 - 104.5",
    "104.5 - 108.5",
    "108.5 - 112.5",
    true,
  ),
  createDataHombre(
    "CINTURA",
    "70 - 74",
    "74 - 78",
    "78 - 82",
    "82 - 86",
    "86 - 90",
    "90 - 94",
    "94 - 98",
    true,
  ),
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Talla() {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = React.useState("Mujer");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderTable = (rows, showXXS) => (
    <TableContainer
      component={Paper}
      sx={{
        width: isMobile ? "380px" : "100%",
        marginLeft: isMobile ? "42px" : 0,
      }}
    >
      <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "1px solid #e4e4ec" }}></TableCell>
            {showXXS && (
              <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
                XXS
              </TableCell>
            )}
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              XS
            </TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              S
            </TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              M
            </TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              L
            </TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              XL
            </TableCell>
            <TableCell align="right" sx={{ border: "1px solid #e4e4ec" }}>
              XXL
            </TableCell>
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
              {showXXS && (
                <TableCell
                  align="right"
                  sx={{
                    borderRight: "1px solid #e4e4ec",
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    textOverflow: "clip",
                  }}
                >
                  {row.XXS}
                </TableCell>
              )}
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.XS}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.S}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.M}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.L}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.XL}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "1px solid #e4e4ec",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  textOverflow: "clip",
                }}
              >
                {row.XXL}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ padding: isMobile ? 0 : 12, marginTop: "-24px" }}>
      <Hidden mdDown>
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "1000",
              color: "#091952",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "24px",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            GUIA DE TALLAS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 300,
              border: "1px solid #04144c",
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: "6px",
            }}
          >
            <Typography sx={{ marginLeft: "13px" }}>Parrella</Typography>
          </Box>
          <FormControl sx={{ width: 300 }}>
            <Select
              labelId="select-label"
              id="select"
              value={selectedOption}
              onChange={handleChange}
              MenuProps={MenuProps}
              sx={{
                border: "1px solid #04144c",
              }}
            >
              <MenuItem value="Mujer">Mujer</MenuItem>
              <MenuItem value="Hombre">Hombre</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              width: 300,
              border: "1px solid #04144c",
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: "6px",
            }}
          >
            <Typography sx={{ marginLeft: "13px" }}>
              Polos, Poleras, Camisas y Blusas
            </Typography>
          </Box>
        </Box>
        {/* Renderiza la tabla según la opción seleccionada */}
        {selectedOption === "Mujer" && renderTable(rowsMujer, true)}
        {selectedOption === "Hombre" && renderTable(rowsHombre, false)}
      </Hidden>
      <Box>
        {/* Para el resto de pantallas, muestra este elemento */}
        <Hidden mdUp>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Cambia la dirección del flex a columna
              alignItems: "flex-start",
              gap: 2,
              marginTop: "36px",
              marginLeft: "44px",
              marginBottom: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "1000",
                color: "#091952",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "24px",
                fontFamily: "Helvetica, sans-serif",
              }}
            >
              GUIA DE TALLAS
            </Typography>

            <Box
              sx={{
                width: 300, // Max ancho para mantener el diseño en dispositivos más grandes
                border: "1px solid #04144c",
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "6px",
                marginBottom: 2,
              }}
            >
              <Typography sx={{ marginLeft: "13px" }}>Parrella</Typography>
            </Box>

            <FormControl sx={{ width: "100%", maxWidth: 300 }}>
              <Select
                labelId="select-label"
                id="select"
                value={selectedOption}
                onChange={handleChange}
                MenuProps={MenuProps}
                sx={{
                  border: "1px solid #04144c",
                  marginBottom: "18px",
                }}
              >
                <MenuItem value="Mujer">Mujer</MenuItem>
                <MenuItem value="Hombre">Hombre</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{
                width: 300,
                border: "1px solid #04144c",
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "6px",
              }}
            >
              <Typography sx={{ marginLeft: "13px" }}>
                Polos, Poleras, Camisas y Blusas
              </Typography>
            </Box>
          </Box>
          {/* Renderiza la tabla según la opción seleccionada */}
          {selectedOption === "Mujer" && renderTable(rowsMujer, true)}
          {selectedOption === "Hombre" && renderTable(rowsHombre, false)}
        </Hidden>
      </Box>
    </Box>
  );
}
