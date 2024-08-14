import React, { useState } from 'react';
import { Box, Button, Divider, Link, Typography, useMediaQuery } from "@mui/material";
import { CSSTransition } from "react-transition-group";

//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const FAQS = () => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
    const [showDescription, setShowDescription] = useState(false);
    const [showDescription1, setShowDescription1] = useState(false);
    const [showDescription2, setShowDescription2] = useState(false);
    const [showDescription3, setShowDescription3] = useState(false);
    const [showDescription4, setShowDescription4] = useState(false);
    const [showDescription5, setShowDescription5] = useState(false);
    const [showDescription6, setShowDescription6] = useState(false);
    const [showDescription7, setShowDescription7] = useState(false);
    const [showDescription8, setShowDescription8] = useState(false);
    const [showDescription9, setShowDescription9] = useState(false);
    const [showDescription10, setShowDescription10] = useState(false);
    const [showDescription11, setShowDescription11] = useState(false);
    const [showDescription12, setShowDescription12] = useState(false);
    const [showDescription13, setShowDescription13] = useState(false);
    const [showDescription14, setShowDescription14] = useState(false);
    const [showDescription15, setShowDescription15] = useState(false);
    

    const titulo = {
        fontSize: isMobile ? '12px':"16px",
         fontWeight: "1000",
         color: "#061853",
       
         display: 'flex',
         justifyContent: 'flex-start',
         alignItems: 'center',
         fontFamily: "Helvetica,sans-serif",
       
       };
       
       const detalles = {
           fontSize: "12px",
           fontWeight: "400",
           color: "#5a5c66;",
           padding: isMobile ? '24px' :0,
           display: 'flex',
           justifyContent: 'flex-start',
           alignItems: 'center',
           fontFamily: "Helvetica,sans-serif",
         
         };
       
      return (
        <Box sx={ {marginLeft:  isMobile ? '32px':0 ,padding: isMobile ? 2: 8}}>
            <Typography sx={{  fontSize: "18px",
  fontWeight: "1000",
  color: "#061853",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom:'24px',
  marginTop:'-12px',
  fontFamily: "Helvetica,sans-serif",}}>
                PREGUNTAS FRECUENTES
            </Typography>
            <Typography sx={{   fontSize: isMobile ? '12px': "14px" ,
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription1(!showDescription1)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                        ¿QUÉ OPCIONES DE ENTREGA HAY?
                    </Typography>
                    {showDescription1 ? (
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
                    in={showDescription1}
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription2(!showDescription2)}
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
                    {showDescription2 ? (
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
                    in={showDescription2}
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription3(!showDescription3)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                     <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                       ¿DÓNDE ESTÁN LAS GUÍAS DE TALLAS?
                    </Typography>
                    {showDescription3 ? (
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
                    in={showDescription3}
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
                            Hay guías de tallas en la mayoría de las páginas con información sobre los productos. Simplemente, busca un artículo que te guste y haz clic en el botón de la guía de tallas. Tienes una vista general de las guías de tallas aquí.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription4(!showDescription4)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                     <Typography  sx={{...titulo,marginLeft: isMobile ? '0' : 0, }}>
                        ¿QUÉ HAGO SI RECIBO UN ARTÍCULO ERRÓNEO?
                    </Typography>
                    {showDescription4 ? (
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
                    in={showDescription4}
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription5(!showDescription5)}
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
                    {showDescription5 ? (
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
                    in={showDescription5}
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
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription6(!showDescription6)}
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
                    {showDescription6 ? (
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
                    in={showDescription6}
                    timeout={300}
                    classNames="description"
                    unmountOnExit
                >
                    <Box>
                        <Box>
                            <Typography sx={detalles}>
                            Cada pedido que sale de nuestra bodega se inspecciona cuidadosamente. Si recibes un paquete dañado, ponte en contacto con nuestro equipo de Atención al Cliente:<br/><br/>
Antes de aceptar la entrega, revisa la bolsa y el contenido para saber si se ha producido algún daño en el transporte. Si notas que la bolsa ha sido alterada puedes rechazar el pedido. En este caso, ponte en contacto con nosotros inmediatamente.<br/><br/>
Cuando te pongas en contacto con el equipo de Atención al Cliente, proporciona el número del pedido y del artículo (todos estos datos están en el correo electrónico de confirmación del envío).<br/><br/>
Si ves los daños después de la entrega, ponte en contacto con el equipo de Atención al Cliente proporciona el número del pedido y del artículo (todos estos datos están en el correo electrónico de confirmación del envío).
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription7(!showDescription7)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                     <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                    ¿DÓNDE ESTÁ MI PEDIDO?
                    </Typography>
                    {showDescription7 ? (
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
                    in={showDescription7}
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
                            Cuando el paquete sea entregado al courier recibirás un correo electrónico donde tendrás los siguientes datos: Operador y número de tracking.<br/>
                            <br/>
El Operador corresponde al courier con el que vas a recibir tu compra y con el número de tracking podrás ingresar al link que corresponda:
<br/><br/>
Bluexpress<br/><br/>

Starken<br/><br/>

Pickit<br/><br/>

Microservicio<br/><br/>

Recuerda que si eres miembro también podrás acceder al estado de tu pedido ingresando en tu cuenta desde ‘"mis pedidos".
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <Typography sx={{  fontSize: "18px",
  fontWeight: "1000",
  color: "#061853",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom:'12px',
  marginTop:'12px',
  fontFamily: "Helvetica,sans-serif",}}>
            PEDIDOS Y PAGOS
            </Typography>
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription8(!showDescription8)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                     <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                        ¿CUÁLES SON LAS FORMAS DE PAGO?
                    </Typography>
                    {showDescription8 ? (
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
                    in={showDescription8}
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

             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription9(!showDescription9)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                      ¿PUEDO MODIFICAR MI PEDIDO O LOS DATOS DE ENVÍO?
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
                    in={showDescription9}
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
                            Lo sentimos, no se pueden modificar el contenido de los pedidos. Podemos intentar cancelarlo.<br/><br/> Ponte en contacto con nosotros cuanto antes para que un agente de Atención al Cliente se encargue de esta gestión.<br/><br/> Esto solo se puede llevar a cabo durante el proceso de preparación del pedido.<br/><br/>
                            Si el pedido no se puede cancelar, puedes rechazar el paquete en el momento de la entrega o devolverlo más tarde sin costo. <br/><br/>
                            Nuestra política de devoluciones incluye toda la información sobre este proceso y el detalle de los productos que no se pueden devolver.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>

             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription10(!showDescription10)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                     <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                    ¿POR QUÉ SE HA CANCELADO MI PEDIDO?
                    </Typography>
                    {showDescription10 ? (
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
                    in={showDescription10}
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
                            Siempre te enviamos un correo electrónico para avisarte de que tu pedido se ha cancelado total o parcialmente. Esto puede ocurrir debido a bajo estas situaciones:<br/><br/>
1.El producto no se encuentra disponible.<br/><br/>
2.Sus datos de facturación no son correctos o no pueden verificarse.<br/><br/>
3.Nuestros sistemas de seguridad señalan su pedido como pedido no habitual o pedido susceptible de constituir fraude.<br/><br/>
4.Si el pago mediante transferencia bancaria aplicable no se recibe en un plazo de cinco días hábiles a partir de la Confirmación del Pedido.<br/><br/>
5.No podemos realizar la entrega en la dirección que indica. Debido a circunstancias o casos que quedan fuera de nuestro control.<br/><br/>
6.Si en el pedido efectuado hay productos con errores claros de publicación, precios o stock, cancelaremos dichos productos,reembolsando al cliente ese monto.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>

             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription11(!showDescription11)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                    ¿El importe total de mi pedido PARRELLA incluye los aranceles y los impuestos?<br/>
                    </Typography>
                    {showDescription11 ? (
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
                    in={showDescription11}
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
                            Sí, todos los aranceles o impuestos aplicables se incluyen en el importe total del pedido durante el proceso de compra. <br/><br/>Calculamos todos los aranceles e impuestos según las leyes que regulan la entrega. 
                            <br/><br/>
                            Toma en cuenta que no aceptamos pedidos exentos de impuestos.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
         
            <Typography sx={{  fontSize: "18px",
  fontWeight: "1000",
  color: "#061853",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom:'12px',
  marginTop:'12px',
  fontFamily: "Helvetica,sans-serif",}}>
            CUENTA
            </Typography>

        
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription12(!showDescription12)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                   <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                    ¿CÓMO CREO UNA CUENTA?
                    </Typography>
                    {showDescription12 ? (
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
                    in={showDescription12}
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
                            Para crear una cuenta, haz clic en "Iniciar sesión" en la parte superior derecha de la página web. 
                            <br/><br/>
                            Si lo haces en el móvil, despliega el menú y haz clic en "Iniciar sesión" en la parte superior derecha. <br/><br/>Después, sigue las instrucciones de la sección "Crea una cuenta".
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>

            
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription13(!showDescription13)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                    ¿QUÉ DATOS PERSONALES RECOPILA PARRELLA?
                    </Typography>
                    {showDescription13 ? (
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
                    in={showDescription13}
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
                            Usamos tus datos personales con distintos fines, como gestionar los pedidos y enviarte newsletters si te has suscrito.
                            <br/><br/>
                             Para saber qué datos personales recopilamos y por qué, consulta nuestra política de privacidad.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription14(!showDescription14)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography sx={titulo}>
                    ¿CÓMO SOLICITO LA MODIFICACIÓN DE MIS DATOS PERSONALES?
                    </Typography>
                    {showDescription14 ? (
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
                    in={showDescription14}
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
                            Para saber qué datos personales recopilamos y por qué, consulta nuestra política de privacidad.<br/><br/>
Si quieres modificar tus datos personales, ve a la sección "Tu cuenta" de la web y ahí podrás modificarlos.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            
             <Box sx={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e5e5', 
                padding: isMobile ? '12px 0' : '24px 32px', 
                margin: '0px 0px 4px',
                marginTop: '24px',
width:  isMobile ? '360px' : '800px',
                maxWidth:'100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Button
                    onClick={() => setShowDescription15(!showDescription15)}
                    sx={{
                        marginBottom: '10px',
                        '&:hover': {
            backgroundColor: 'white', color:'transparent',boxShadow:'none' // Define el color de fondo para el hover
          },
                    }}
                >
                    <Typography  sx={{...titulo,marginLeft: isMobile ? '18px' : 0, }}>
                    ¿CÓMO RESTABLEZCO MI CONTRASEÑA?
                    </Typography>
                    {showDescription15 ? (
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
                    in={showDescription15}
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
                            Para restablecer la contraseña, haz clic en el botón ""Iniciar sesión"" en la parte superior derecha de la página web y después en el enlace ""¿Has olvidado tu contraseña?"" que aparece en la parte inferior de la ventana de inicio.
                            <br/><br/>
                             Te enviaremos un correo electrónico para restablecer la contraseña en unos pocos clics. Recibirás este correo electrónico en un plazo de 48 horas.
                            </Typography>
                        </Box>
                    </Box>
                </CSSTransition>
            </Box>
            <br/>
            <br/>
            <span>
        <a href="/FAQS/Tallas" style={{ textDecoration: 'none', color: 'inherit' }}>
       <Typography 
      
      sx={{...titulo,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >
        <KeyboardArrowLeftIcon/> Guia de Tallas</Typography>
        </a>
      </span>

      <br/>
      <span>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
       <Typography 
      
      sx={{...titulo,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
    >
        <KeyboardArrowLeftIcon/> Inicio</Typography>
        </a>
      </span>

        </Box>
    )
}

export default FAQS;

           
                      