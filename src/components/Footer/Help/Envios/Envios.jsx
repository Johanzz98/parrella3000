import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CSSTransition } from "react-transition-group";

//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const titulo = {
  fontSize: "16px",
  fontWeight: "1000",
  color: "#000c2d",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
};

const detalles = {
  fontSize: ".875rem",
  fontWeight: "500",
  color: "#000c2d",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "left",

  fontFamily: "Helvetica,sans-serif",
};

const Envios = () => {
  const [showDescription, setShowDescription] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: "0px 40px",
        width: isMobile ? "97%" : "70%",
        marginLeft: isMobile ? "6px" : 0,
        paddingRight: isMobile ? "24px" : 0,
        height: isMobile ? "100%" : "600px",
        overflow: "auto", // Habilita el scroll cuando sea necesario
        padding: 6,
      }}
    >
      <Typography sx={titulo}>Despacho Normal</Typography>

      <Box>
        <Box>
          <Typography sx={detalles}>
            <br />
            El valor del despacho normal es desde $4.990 (IVA incluido) en la
            región metropolitana. El tiempo de despacho y entrega del pedido
            depende de los transportistas, que es un servicio externo a la
            empresa y dependerá de la comuna de residencia. Esto puede demorar
            hasta 3 días hábiles en Región Metropolitana y 5 días hábiles en
            otras regiones. Si tu pedido lo realizaste un fin de semana o día
            festivo, se procesará desde el día hábil siguiente.
            <br />
            <br />
            Realizamos envíos gratis a todo Chile por compras superiores a
            $75.000
          </Typography>
          <br />
        </Box>
      </Box>
      <br />
      <Typography sx={titulo}>Despacho en regiones</Typography>

      <Box>
        <Box>
          <Typography sx={detalles}>
            <br />
            En algunas localidades el despacho por parte del currier, podría
            tomar hasta 10 días hábiles. Algunas de estas localidades son:
            Lolol, Marchigüe, Navidad, Paredones, Pichilemu, Pumanque, Curepto,
            Cobquecura, El Carmen, Florida, San Rosendo, Ñiquen, Pemuco, Pinto,
            Portezuelo, Quilleco, Ranquil, San Fabian, San Ignacio, Santa Juana,
            Cholchol, Cunco, Curarrehue, Galvarino, Lonquimay, Melipeuco,
            Perquenco, Saavedra, Teodoro Schmidt, Toltén, Lumaco, Tirua, Vilcun,
            Corral, Lago Ranco, San Juan De La Costa, Queilen, Puqueldon, Curaco
            De Vélez, Quinchao, Puerto Octay, Chile Chico, Cisnes y Primavera.
          </Typography>
          <br />
        </Box>
      </Box>

      <Typography sx={titulo}>
        ¿Puedo cambiar la dirección de despacho o la información de la persona
        que lo recibe?
      </Typography>

      <br />

      <Box>
        <Typography sx={detalles}>
          Por temas de seguridad, después de terminar tu orden de compra no
          podrás cambiar los datos de la entrega.
          <br />
          Por esta razón te sugerimos revisar antes de realizar el pago, que
          toda la información que nos proporciones sea la adecuada.
          <br />
          <br />
          En caso de retirar un tercero:
          <br />
          <br />
          Si compraste con despacho a una Sucursal/Agencia de Correos Chile,
          puedes elaborar una carta poder simple autorizando el retiro por otra
          persona mas tu copia de carnet por ambos lados, así tu compra podrá
          ser retirada por la personas que tu indiques.
          <br />
          <br />
          Si compraste con Retiro en Personal , puedes presentar el mail de
          retiro de la orden de compra
        </Typography>
      </Box>

      <Box>
        <Box>
          <br />
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            En caso de retirar un tercero:
          </Typography>
          <Typography sx={detalles}>
            <br />
            Si compraste con despacho a una Sucursal/Agencia de Correos Chile,
            puedes elaborar una carta poder simple autorizando el retiro por
            otra persona mas tu copia de carnet por ambos lados, así tu compra
            podrá ser retirada por la personas que tu indiques.
            <br />
            <br />
            Si compraste con Retiro en Tienda , puedes presentar el mail de
            retiro de la orden de compra o el PIN de 4 dígitos, que va en este
            mismo mail.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Envios;
