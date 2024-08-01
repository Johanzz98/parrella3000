import React, { useState } from 'react';
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";

//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const titulo = {
  fontSize: "16px",
  fontWeight: "1000",
  color: "#000c2d",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",

};

const detalles = {
    fontSize: "12px",
    fontWeight: "400",
    color: "#5a5c66;",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
  
  };

const FAQS = () => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <Box sx={{ padding: 6 }}>
            <Typography sx={{  fontSize: "18px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom:'24px',
  fontFamily: "Helvetica,sans-serif",}}>
                PREGUNTAS FRECUENTES
            </Typography>
            <Typography sx={{   fontSize: "14px",
    fontWeight: "400",
    color: "#5a5c66;",
    display: 'flex',

    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",}}>
                ¿Cómo podemos ayudarle?
            </Typography>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿CUÁLES SON LOS GASTOS Y EL PLAZO DE ENTREGA?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    
                    <Box>
                    <Divider
          sx={{
            marginTop:'-6px',
            marginBottom:'12px',
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
                        <Box>
                            <Typography sx={detalles}>
                                Costo de envío $4.990 CLP. El envío es gratuito en pedidos superiores a $100.000. Será entregado entre 3-5 días hábiles después de la confirmación del pedido. Retrasos inesperados con nuestros transportistas pueden afectar los tiempos de entrega.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿QUÉ OPCIONES DE ENTREGA HAY?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    <Box>
                    <Divider
          sx={{
            marginTop:'-6px',
            marginBottom:'12px',
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
                        <Box>
                            <Typography sx={detalles}>
                            En los pedidos online, hay las siguientes opciones de entrega:<br/>
Entrega via correo Chile<br/>
Entrega retiro presencial<br/>
Puedes hacer tu elección de entrega durante el proceso de check out.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿QUÉ HAGO SI RECIBO UN ARTÍCULO ERRÓNEO?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    <Box>
                    <Divider
          sx={{
            marginTop:'-6px',
            marginBottom:'12px',
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
                        <Box>
                        <Typography sx={{  fontSize: "12px",
    fontWeight: "400",
    color: "#5a5c66;",
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",}}>
      Si has recibido un artículo erróneo, ponte en contacto con nosotros para que un agente de Atención al Cliente se encargue de esta gestión. 
     
      <a href="/login" style={{ color: 'blue', marginLeft:'12px'}}>Contactanos</a>
     
    </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿QUÉ HAGO SI FALTA UN ARTÍCULO DE MI PEDIDO?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    <Box>
                        <Box>
                            <Typography sx={{ fontSize: "12px",
    fontWeight: "400",
    color: "#5a5c66;",
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",}}>
                           Si te falta uno o más artículos, ponte en contacto con nosotros para que un agente de       <a href="/login" style={{ color: 'blue'}}>Atención al cliente</a> se encargue de esta gestión
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿QUÉ HAGO SI EL PAQUETE ESTÁ DAÑADO AL LLEGAR?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    <Box>
                        <Box>
                            <Typography sx={detalles}>
                            Cada pedido que sale de nuestra bodega se inspecciona cuidadosamente. Si recibes un paquete dañado, ponte en contacto con nuestro equipo de Atención al Cliente:<br/>
Antes de aceptar la entrega, revisa la bolsa y el contenido para saber si se ha producido algún daño en el transporte. Si notas que la bolsa ha sido alterada puedes rechazar el pedido. En este caso, ponte en contacto con nosotros inmediatamente.<br/>
Cuando te pongas en contacto con el equipo de Atención al Cliente, proporciona el número del pedido y del artículo (todos estos datos están en el correo electrónico de confirmación del envío).<br/>
Si ves los daños después de la entrega, ponte en contacto con el equipo de Atención al Cliente proporciona el número del pedido y del artículo (todos estos datos están en el correo electrónico de confirmación del envío).
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
           
            <Typography variant="subtitle1">
            PEDIDOS Y PAGOS
            </Typography>
            <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '6px',
                width: '560px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription(!showDescription)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                        ¿CUÁLES SON LAS FORMAS DE PAGO?
                    </Typography>
                    {showDescription ? (
                        <KeyboardArrowUpIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            style={{ color: 'black', marginLeft: 'auto' }}
                        />
                    )}
                </Button>

                <CSSTransition
                    in={showDescription}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    
                    <Box>
                    <Divider
          sx={{
            marginTop:'-6px',
            marginBottom:'12px',
            bgcolor: "#f5f5f5",
            textAlign: "center",
          }}
        />
                        <Box>
                            <Typography sx={detalles}>
                            Al hacer una compra online, puedes usar como forma de pago tarjetas de crédito,webPay y tarjeta débito.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
        </Box>
    )
}

export default FAQS;
