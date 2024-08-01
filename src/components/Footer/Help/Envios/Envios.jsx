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

const Envios = () => {
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
                    ¿Puedo cambiar la dirección de despacho o la información de la persona que lo recibe?
                    
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
                            Por temas de seguridad, después de terminar tu orden de compra no podrás cambiar los datos de la entrega.<br/>
Por esta razón te sugerimos revisar antes de realizar el pago, que toda la información que nos proporciones sea la adecuada.<br/>
<br/>
En caso de retirar un tercero:<br/>
<br/>
Si compraste con despacho a una Sucursal/Agencia de Correos Chile, puedes elaborar una carta poder simple autorizando el retiro por otra persona mas tu copia de carnet por ambos lados, así tu compra podrá ser retirada por la personas que tu indiques.
<br/><br/>
Si compraste con Retiro en Personal , puedes presentar el mail de retiro de la orden de compra 
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

Mi pedido esta atrasado, fuera de plazo o entregado sin yo haberlo recibido<br/>
Tendrás contactarnos a través de nuestros canales de atención:<br/><br/>

Chat en Línea Via WhatsApp.<br/><br/>
Formulario contacto: www.parrella.com/contacto<br/><br/>
Contacto vía WhatsApp +56937552580<br/><br/>
De esta manera nos encargaremos de solucionar a la brevedad tu solicitud.<br/><br/>
Recuerda que nuestros horarios de atención son de Lunes a Viernes desde las 09:00 a 19:00 horas<br/><br/>

Cómo validar mi compra:<br/><br/>
No te preocupes, cuando tu compra sea validada recibirás un resumen de tu orden de compra al correo electrónico que hayas registrado.
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
                    Puntos de retiro
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
     RETIROS<br/><br/>
Además, ofrecemos 2 opciones de retiro las cuales se detallan a continuación:<br/> <br/>

Retiro de manera presencial<br/> <br/>
Esta opción de retiro es GRATIS, solo deberás seleccionar la estación de metro en la Región Metropolitana que mas te acomode de acuerdo a la disponibilidad de stock del producto que desees comprar. <br/><br/>

Cuando tu pedido esté disponible para retiro, te enviaremos un correo electrónico con un código de 4 dígitos el cual tendrás que indicar al momento del retiro de tu orden de compra.<br/><br/>

Revisa el siguiente link para mas información: www.vans.cl/retiro-en-tienda<br/><br/>

¿Cuándo y cómo puedo retirar mi producto en tienda?
<br/><br/>
Haremos todo lo posible por tener tu pedido listo en las próximas horas. <br/><br/>
A más tardar demoraremos 1 día hábil. Apenas procesemos tus productos, te enviaremos un mail informándote que ya están listos para ser retirados en la tienda que escogiste.
<br/><br/> Recuerda esperar este mail antes de dirigirte a la tienda. Necesitarás acercarte a un vendedor y entregarle tu nombre y el código de 4 dígitos que llegó con el correo de confirmación de retiro.
<br/><br/>
Tienes 5 días para retirar tu compra desde el momento que te llega el correo de que tu orden está lista para retiro. En ese correo se muestra la fecha límite para retirar.<br/><br/>

Sucursal /Agencia de Correos Chile:<br/><br/>
Enviaremos tu orden de compra a la Sucursal o Agencia que nos indiques.<br/><br/>
Recuerda que vas a tener un plazo de 5 días hábiles para completar este retiro antes de que tu compra sea enviada y devuelta a nuestras dependencias.<br/><br/>
Para retirar tu orden de compra, sólo debes presentar tu cédula de identidad al momento de la entrega. En caso de retirar un tercero este deberá llevar un poder simple.
<br/><br/>
Los valores para despacho a Sucursal o Agencias de Correos Chile:<br/><br/>
• Región Metropolitana: $ 3.990<br/><br/>
• Copiapó – Puerto Montt: $ 4.990<br/><br/>
• Zonas Extremas: $ 9.490<br/><br/>
     
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
                    ¿Cuándo puedo retirar mi producto en tienda?
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
                         ¿Cuándo y cómo puedo retirar mi producto en tienda?<br/><br/>

Haremos todo lo posible por tener tu pedido listo en las próximas horas. <br/><br/>A más tardar demoraremos 1 día hábil.<br/><br/> Apenas procesemos tus productos, te enviaremos un mail informándote que ya están listos para ser retirados en la tienda que escogiste.<br/><br/> Recuerda esperar este mail antes de dirigirte a la tienda.<br/><br/> Necesitarás acercarte a un vendedor y entregarle tu nombre y el código de 4 dígitos que llegó con el correo de confirmación de retiro.<br/><br/>

Tienes 5 días para retirar tu compra desde el momento que te llega el correo de que tu orden está lista para retiro. En ese correo se muestra la fecha límite para retirar.<br/><br/>

¿Cuándo y cómo puedo retirar mi producto en una Sucursal/Agencia de Correos Chile?<br/><br/>

Enviaremos tu orden de compra a la Sucursal o Agencia que nos indiques.<br/><br/>
Recuerda que vas a tener un plazo de 5 días hábiles para completar este retiro antes de que tu compra sea enviada y devuelta a nuestras dependencias.<br/><br/>
Para retirar tu orden de compra, sólo debes presentar tu cédula de identidad al momento de la entrega. En caso de retirar un tercero <br/><br/>este deberá llevar un poder simple.<br/><br/><a href="/login" style={{ color: 'blue'}}>Atención al cliente</a> se encargue de esta gestión
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
                    ¿Puede retirar mi pedido otra persona?
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
                            <Typography sx={{...detalles,fontSize:'18px',color:'#111',fontWeight:'1000'}}>¡Claro que si!</Typography> 
                            <Typography sx={detalles}>
                            <br/>
Por temas de seguridad, después de terminar tu orden de compra no podrás cambiar los datos de la entrega.<br/><br/>
Por esta razón te sugerimos revisar antes de realizar el pago, que toda la información que nos proporciones sea la adecuada.<br/><br/>
</Typography>
<Typography sx={{...detalles,fontSize:'18px',color:'#111',fontWeight:'1000'}}>
En caso de retirar un tercero:
</Typography>
<Typography sx={detalles}><br/>
Si compraste con despacho a una Sucursal/Agencia de Correos Chile, puedes elaborar una carta poder simple autorizando el retiro por otra persona mas tu copia de carnet por ambos lados, así tu compra podrá ser retirada por la personas que tu indiques.<br/><br/>

Si compraste con Retiro en Tienda , puedes presentar el mail de retiro de la orden de compra o el PIN de 4 dígitos, que va en este mismo mail.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
        </Box>
    )
}

export default Envios;
