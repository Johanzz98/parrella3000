import React, { useState } from "react";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
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

const Termino = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Box
      sx={{
        padding: "0px 40px",
        width: "70%",
        height: "600px",
        overflow: "auto", // Habilita el scroll cuando sea necesario
        padding: 6,
      }}
    >
      
      <Typography sx={titulo}>TÉRMINOS Y CONDICIONES GENERALES DE USO Y VENTA TOMMY HILFIGER</Typography>

      <Box>
        <Box>
          <Typography sx={detalles}>
          <br/>
          Te damos la bienvenida a nuestro sitio web cl.tommy.com en adelante “Sitio”. 
          <br/>Estos Términos y Condiciones regulan el acceso en Chile a nuestro sitio cl.tommy.com y su uso por todo usuario o consumidor. 
          <br/>En este sitio podrás comparar y/o adquirir, si lo deseas los productos exhibidos. Te recomendamos leer atentamente nuestros términos y condiciones. 
          <br/>Estos se aplicarán y se entenderán incorporados en todas las compras realizadas en el sitio, mediante los sistemas de comercialización comprendidos en este sitio web.<br/>
La aplicación de estos Términos y Condiciones se regirán por la legislación de Chile, en particular a la Ley N° 19.496 sobre la protección de los derechos de los consumidores y a la Ley N° 19.628 sobre protección de la vida privada. Es requisito esencial para comprar en el Sitio la aceptación de los Términos y Condiciones y al ser aceptados, los usuarios declaran haber tenido la posibilidad de revisarlos, guardarlos e informarse de manera clara, comprensible e inequívoca de los mismos. 
<br/>En caso de controversias éstas se resolverán por los tribunales competentes en el territorio de Chile.
Al realizar tu pedido aceptas los siguientes términos y condiciones generales.
          </Typography>
          <br />
        </Box>
      </Box>
      <br />
      <Typography sx={titulo}>I. APLICABILIDAD</Typography>

      <Box>
        <Box>
          <Typography sx={detalles}>
            <br />
            Estos términos y condiciones generales (las “Condiciones”) se aplican:<br/>
a) Al uso de cualquier información, fotos, documentos u otros servicios en la tienda en línea cl.tommy.com<br/>
b) A la compra de productos de marcaParrella o Tommy Jeans en el Sitio web.
          </Typography>
          <br />
        </Box>
      </Box>
      <Typography sx={titulo}>II. CONDICIONES DE USO DEL SITIO WEB</Typography>
      <br/>
      <Typography sx={titulo}>
      EXCLUSIÓN DE RESPONSABILIDAD PARA LOS ENLACES EXTERNOS
      </Typography>

      <br />

      <Box>
        <Typography sx={detalles}>
        El Sitio web puede proporcionar enlaces a sitios web externos. Por el presente, Parrella declara explícitamente que no tiene influencia en el diseño o contenido de las páginas vinculadas y se desvincula expresamente de todo el contenido de todas las páginas vinculadas de terceros.<br/>

        Parrella no será responsable del uso o contenido de sitios web con enlaces a este sitio o que estén vinculados desde él. Nuestro aviso de privacidad y cookies no se aplica a ninguna recogida y tratamiento de sus datos personales en o a través de esos sitios externos.
        </Typography>
      </Box>


      <Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            INFORMACIÓN EN EL SITIO WEB
          </Typography>
          <Typography sx={detalles}>
            <br />
            La información en el Sitio web tiene fines de información general y no constituye asesoramiento. Aunque Parrella haya elaborado su Sitio web con cuidado, la información, textos, documentos, gráficos, videos, música u otros servicios/información en él pueden contener errores o ser incorrectos o incompletos.Parrella no garantiza que el Sitio web o la información estén libres de errores, defectos, malware y virus, o que el Sitio web o la información sean correctos, actualizados y precisos.<br/>
Hasta la máxima medida permitida por la legislación aplicable, Parrella no será responsable de ningún daño resultante del uso o incapacidad de uso del Sitio web, incluidos los daños causados por malware, virus o cualquier equivocación o carencia de dicha información o del Sitio web, a menos que dicho daño sea resultado de una conducta indebida intencionada o de negligencia grave por parte de Parrella.<br/>
Parrella no será responsable de los daños resultantes del uso de (o la incapacidad de utilizar) medios electrónicos de comunicación con este sitio web, incluidos, entre otros, daños provocados por fallos o retrasos en la entrega de comunicaciones electrónicas, intercepción o manipulación de comunicaciones electrónicas por parte de terceros o mediante programas informáticos utilizados para comunicaciones electrónicas y transmisión de virus.
          </Typography>
        </Box>
      </Box>
      <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
PROPIEDAD INTELECTUAL
          </Typography>
          <Typography sx={detalles}>
            <br />
            Todos los nombres de marca, logotipos, nombres de productos y títulos utilizados en el Sitio web son marcas o nombres comerciales deParrella o titulares de marcas o nombres comerciales.<br/> No está permitido utilizar ni reproducir ninguna de nuestras marcas o nombres comerciales y logotipos ya que esto constituye una infracción a los derechos de nuestra marca.
Los derechos sobre el diseño, textos, documentos, videos, música u otros servicios del sitio web, la selección y disposición de estos, así como todas las compilaciones de software, códigos fuente subyacentes y el resto de material de este sitio web son propiedad deParrella o están cedidos bajo licencia de sus proveedores y subcontratistas.<br/><br/>
Solo se le permite copiar electrónicamente e imprimir en papel, partes del sitio web en la medida en que sea necesario con el fin de realizar un pedido o para utilizar el sitio web como recurso de compra. No está permitido efectuar ningún otro uso de la información y los materiales de este sitio web, incluida la reproducción para fines distintos al mencionado anteriormente, la modificación, distribución o reedición. Si desea utilizar materiales o información de este sitio web, necesita nuestra previa aprobación por escrito.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
           COOKIES EN EL SITIO
          </Typography>
          <Typography sx={detalles}>
            <br />
            El Sitio usa “cookies” para mejorar el conocimiento sobre el uso de la tienda y ofrecer información a los clientes respecto a sus preferencias y pautas de navegación. Una cookie recopila información de hábitos de navegación, sin acceder a los datos personales de un usuario.<br/>
            El sitio utiliza “cookies” de terceros para recabar información y someterla a un tratamiento estadístico, para ello, se utilizan los servicios de Google Analytics (el “Servidor”). Una vez que el usuario se conecte nuevamente al Sitio, el Servidor reconocerá el número almacenado en “cookie”, según se ha indicado, suministrando información anónima referida. Los procedimientos están gestionados y controlados exclusivamente por Google Analytics. El usuario podrá, en cualquier momento, revocar el consentimiento para el uso de “cookies” mediante su desactivación, a través de las opciones de privacidad/seguridad de su navegador. Para más información, consulta la ayuda que tu navegador te ofrece.
          </Typography>
        </Box>
        <br/><br/>
        <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
III. CONDICIONES DE VENTA</Typography>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Registro
          </Typography>

          <Typography sx={detalles}>
            <br />
            Puedes realizar pedidos como usuario registrado. Para esto necesitaras una dirección de correo electrónico, numero cedula de identidad, dirección y teléfono para realizar un pedido.<br/> El usuario garantiza la autenticidad, exactitud y vigencia de los datos registrados. 
            <br/>El registro del usuario en el sitio implica el conocimiento y aceptación de los Términos y Condiciones y es posible que tengas que configurar tu navegador para aceptar las cookies y ventanas emergentes con el fin de poder utilizar todas las funcionalidades del sitio web, lo cual incluye añadir productos a tu carrito de compra y enviar tu pedido.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
PEDIDOS
          </Typography>
          <br/>
          <Typography sx={detalles}>
          Los productos ofrecidos en el Sitio web constituyen una oferta para adquirir productos de Parrella. Todos los precios indicados son importes en CLP e incluyen IVA. Los pedidos y entregas solo son posibles dentro de Chile y solo se aceptan en cantidades habituales para el hogar.<br/>
Cuando realices un pedido, te enviaremos un correo electrónico en el que confirmamos la recepción de tu pedido (“Confirmación del pedido”). Esto no significa que hayamos aceptado el pedido, esto se realiza cuando se envían los productos y recibas un correo electrónico con la confirmación de envío.<br/>
Los productos del Sitio web están generalmente disponibles y listos para ser enviados. Las tallas agotadas se marcan como no disponibles. Es posible que tengamos problemas de disponibilidad cuando los clientes realicen pedidos de productos al mismo tiempo. Cuando no podamos enviar un artículo ya solicitado, podremos cancelar parcial o totalmente el pedido y se procederá al reembolso del artículo y valor del despacho cuando corresponda. Procuramos mantener nuestros niveles de existencias con la mayor precisión posible. Sin embargo, eventualmente pueden producirse errores. Para más información revisar Reembolsos.<br/>
Nuestra colección en línea se repone con regularidad, por lo que vale la pena volver a revisar con frecuencia la disponibilidad de stock. Sin embargo, si los productos que buscas están agotados, puedes consultar existencias con las tiendasParrella a través de nuestro Localizador de tiendas.<br/>
Si has realizado un pedido por error o si deseas cancelarlo antes de su entrega, por favor contáctanos al servicio de atención al cliente de Parrella al teléfono +56 937552580 de lunes – viernes de 9:00 - 17:00 o también puedes enviar un correo electrónico a parrella@gmail.com Debido a que Parrella siempre procura realizar entregas rápidas, no se dispone de mucho tiempo para cancelar tu pedido y nuestro equipo hará todo lo posible para ayudarte.<br/>
Es importante que tengas en cuenta que nosotros no podemos hacer modificaciones relacionadas a talla, color o tipo de producto, una vez que hayas realizado tu pedido. Deberás esperar a recibir tu compra, para solicitar el cambio o devolución de los productos.
Nos reservamos el derecho a cancelar tu pedido por cualquier motivo legítimo, incluidas, entre otras, las siguientes situaciones:<br/>
· El producto no tiene stock disponible.<br/>
· Su información de facturación no es correcta o no es verificable.<br/>
· Nuestros sistemas de seguridad señalan que el pedido es inusual o susceptible de fraude.<br/>
· Eres un distribuidor.<br/>
Debido a circunstancias o eventos más allá de nuestro control.<br/>
· No hemos podido efectuar la entrega en la dirección que nos proporcionaste.<br/>
          </Typography>
        </Box>
     
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Métodos de pago<br/>   <br/>
          </Typography>
      
          <Typography sx={detalles}>
          El pago de los productos se puede realizar mediante tarjetas de crédito (MasterCard, Visa y American Express)  desde tu banco. El importe máximo que puedes gastar en un pedido varía según el método de pago seleccionado y la entidad bancaria.
          Los medios de pago Transbank, Webpay, operan sobre sistemas de terceros cuyo funcionamiento y estatus de conexión es de su exclusiva responsabilidad.
          </Typography>
        </Box>

            <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Verificación de datos<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Durante el proceso de pago, el procesador del pago puede realizar comprobaciones de crédito. Según el resultado de esas comprobaciones, se puede rechazar un pedido o el método de pago seleccionado. En la mayoría de los casos el sitio le ofrecerá la opción de seleccionar un método de pago distinto.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Precio total<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          El precio total especificado en la pantalla final de pago incluye los impuestos y gastos de envío. Este precio se registrará en la confirmación del pedido.
          </Typography>
        </Box>
            <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
ENTREGAS<br/><br/>
          </Typography>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Despacho Normal
          </Typography>
          <Typography sx={detalles}>
          El valor del Despacho Normal es de $4.990 (IVA incluido) en Región Metropolitana
El tiempo de despacho y entrega del pedido depende de los transportistas, que es un servicio externo a la empresa y dependerá de la comuna de residencia. Esto puede demorar hasta 3 días hábiles en Región Metropolitana y 5 días hábiles en otras Regiones. Si tu pedido lo realizaste un fin de semana o día festivo, se procesará desde el día hábil siguiente.<br/>
Durante eventos eCommerce (Cyber, Black Friday,  Fashion Sale u eventos especiales) el plazo de preparación de los pedidos en nuestra bodega es de máximo 5 días hábiles. El tiempo de despacho y entrega depende del transportista, servicio externo, podría verse afectado debido a la alta demanda del evento, demorando hasta 5 días hábiles adicionales. Durante estos eventos, no estará habilitado la opción de Envío Express.<br/>
Si deseas conocer mayor detalle del estado de tu pedido consulta aquí.<br/>
Si los productos entregados tienen defectos obvios de producción o daños causados por el transportista, infórmanos de estos defectos en un plazo inferior a 3 días hábiles tras la recepción del pedido, al correo parrella@gmail.com o incluso puedes rechazar la entrega del pedido al currier.<br/>
En el caso de que hayas recibido el correo de confirmación de entrega, y desconozcas la entrega física total o parcial, tienes 24 horas para notificarnos por correo a parrella@gmail.com Con esta información se abrirá un caso con el transportista y de comprobarse su responsabilidad se procederá a reembolsar según corresponda.
          </Typography>
        </Box>    <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
           Despacho en regiones<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          En algunas localidades el despacho por parte del currier, podría tomar hasta 10 días hábiles. Algunas de estas localidades son: Lolol, Marchigüe, Navidad, Paredones, Pichilemu, Pumanque, Curepto, Cobquecura, El Carmen, Florida, San Rosendo, Ñiquen, Pemuco, Pinto, Portezuelo, Quilleco, Ranquil, San Fabian, San Ignacio, Santa Juana, Cholchol, Cunco, Curarrehue, Galvarino, Lonquimay, Melipeuco, Perquenco, Saavedra, Teodoro Schmidt, Toltén, Lumaco, Tirua, Vilcun, Corral, Lago Ranco, San Juan De La Costa, Queilen, Puqueldon, Curaco De Vélez, Quinchao, Puerto Octay, Chile Chico, Cisnes y Primavera.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            CAMBIO, DEVOLUCIONES Y REEMBOLSOS<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Todos los artículos comprados en el sitio Parrella se pueden cambiar gratis en un período de 30 días tras emitida la boleta. Si compraste en nuestro sitio web, sí podrás realizar el cambio de talla o producto, presentado la boleta o ticket de cambio en cualquiera de nuestros outlets o tiendas. Sin embargo, si compraste en alguna de nuestras tiendas físicas no podrás cambiar o devolver en parrella.com <br/>
Es importante informar que los artículos que no permiten ni cambios ni devoluciones son ropa interior, calcetines y petos deportivos por razones de higiene. En caso de realizar el proceso de devolución de dichos productos, se realizará la restitución de los artículos al domicilio registrado con envío por pagar.<br/>
Los productos por devolver deben enviarse en el estado en el que los recibió: estar completos, sin usar, sin lavar, con todas las etiquetas de producto y precio. Si no cumple lo anterior se realizará la devolución de los productos a la dirección registrada, con envío por pagar.
Para realizar la solicitud de cambio, debes seguir las siguientes instrucciones:<br/>
· Realiza tu solicitud aquí.<br/>
· Ingresa el número de tu pedido, incluido el guion y los dos números siguientes, junto con el correo electrónico con el que realizaste el pedido.<br/>
· Haz clic sobre la imagen del producto que deseas cambiar o devolver.<br/>
· Selecciona la razón de la devolución y en caso elegir garantía debes agregar un breve comentario y subir una foto del producto y su falla.<br/>
Si deseas realizar un cambio por el mismo producto, debes seleccionar la imagen que por defecto te muestra el sistema y seleccionar la talla de preferencia.<br/>
Si deseas realizar el cambio por otro producto, puedes elegirlo escribiendo el nombre de éste en el buscador.<br/>
· El valor del nuevo producto debe ser igual o superior al producto anterior.<br/>
Si el monto en “Diferencia de · Producto” está entre paréntesis, quiere decir que aún mantienes saldo a favor por lo que debes completar el monto para finalizar el proceso de cambio. Por otro lado, el valor de “Diferencia de Producto”, sin paréntesis, es el valor por pagar.<br/>
· Los cambios de talla están sujetos a disponibilidad de stock, de lo contrario serás contactado por nuestro equipo de Servicio de · Atención al Cliente y podrás optar por la devolución del dinero.<br/>
· Para efectuar una segunda solicitud sobre un cambio anterior debes realizar el proceso anteriormente descrito, sin embargo, el número de pedido es el notificado en el pedido de cambio original, el cual inicia con las letras RVS-.<br/>
· Los cambios realizados por primera vez serán gestionados sin costo. A partir de una segunda solicitud de cambio, este tendrá un cobro de despacho (envío y etiqueta).<br/>
· El producto deberá pasará por un proceso de revisión en el cual definirá si procede el cambio. Esto será informado a través de un correo electrónico.<br/>
· El proceso de retiro y devolución tiene un tiempo estimado de 10 días hábiles, que incluyen los procesos de retiro, sanitización, control de calidad y despacho de un nuevo producto.<br/>
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
Devoluciones<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          · Las devoluciones de dinero solo se realizarán mediante la solicitud en el siguiente link.<br/>
· No se realizan devoluciones ni reembolsos en nuestras tiendas físicas.<br/>
· Se pueden cambiar o devolver productos que pertenezcan a un mismo pedido. Si son productos que pertenecen a diferentes pedidos, la devolución debe realizarse por separado.<br/>
· El producto deberá pasar por un proceso de revisión en el cual se definirá si procede la devolución. Esto será informado a través de un correo electrónico.<br/>
· El proceso de retiro y devolución tiene un tiempo estimado de 10 días hábiles, que incluyen los procesos de retiro, sanitización y control de calidad.<br/>
· Los productos por devolver deben enviarse en el estado en el que los recibió: estar completos, sin usar, sin lavar, con todas las etiquetas de producto y precio. Si no cumple lo anterior se realizará la devolución de los productos a la dirección registrada, con envío por pagar.<br/>
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            DEVOLUCION DE PRODUCTOS DEFECTUOSOS<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          De acuerdo con lo previsto en la Ley de Protección de los Derechos de los Consumidores, se considerará que existe una falla o defecto:<br/>
· Cuando los productos sujetos a normas de seguridad o calidad de cumplimiento obligatorio no cumplan las especificaciones correspondientes.<br/>
· Cuando los materiales, partes, piezas, elementos que constituyan o integren los productos no correspondan a las especificaciones que ostenten o a las menciones del rotulado.<br/>
· Cuando cualquier producto, por deficiencias de fabricación, elaboración, materiales, partes, piezas, no sea enteramente apto para el uso o consumo al que está destinado o al que el proveedor hubiese señalado en su publicidad.<br/>
Podrás devolver productos que presenten defectos de fábrica o fallas (garantía) en un plazo de 180 días tras la emisión de la boleta. En caso de que tu reclamo sea justificado, se reembolsará el precio del producto y el despacho.<br/>
Para realizar la solicitud de devolución, debes seguir las siguientes instrucciones:<br/>
· Realiza tu solicitud aquí.<br/>
· Ingresa tu número de tu pedido, incluido el guion y los dos números siguientes, junto con el correo electrónico con el que realizaste el pedido.<br/>
· Haz clic sobre la imagen del producto que deseas devolver.<br/>
· Selecciona la razón de la devolución y en caso elegir garantía debes agregar un breve comentario y subir una foto del producto y su falla.<br/>
· Confirma tus datos personales, elige un método de devolución y confirma tu solicitud.<br/>
· Una vez enviada la solicitud, recibirás un correo confirmando el inicio del proceso de reembolso. La devolución se gestionará a la misma tarjeta o cuenta que se utilizó para realizar la compra.<br/>
· El producto pasará por revisión de nuestro equipo técnico, el cual definirá si el cambio o devolución es aprobado o rechazado, lo cual se informará vía correo electrónico. El proceso de retiro y devolución no es inmediato. Tiene un tiempo estimado de aproximadamente 10 días hábiles que incluye retiro; sanitización; control de calidad y entrega del nuevo producto.<br/>
· De ser aprobada la devolución, los tiempos de reembolso pueden tomar hasta 10 días hábiles dependiendo del método de pago original.<br/>
· Los cambios o devoluciones realizados por primera vez no tendrán cobro de despacho. A partir de una segunda solicitud sobre un cambio anterior, esta tendrá un cobro que corresponde al envío y la etiqueta de despacho.<br/>
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            CANCELACIÓN<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Si deseas anular un pedido podrás solicitar la cancelación de este siempre y cuando el pedido se encuentre en estado de “Preparación”, esto se deber realizar, enviando un correo a parrella@gmail.com.
          <br/>En caso de que el pedido se encuentre en tránsito podrás solicitar la devolución siguiendo los pasos descritos en el módulo anterior de devoluciones.<br/>
Al cancelar tu pedido, reembolsaremos el pago total recibido en la compra, eso incluye los gastos de envío. El proceso de reembolso se gestionará una vez que hayamos recibido los productos y en un plazo no superior a 10 días desde la recepción y confirmación de los datos para el reembolso.<br/>
Tommy Hilfiger se reserva el derecho a cancelar el pedido, sin ser responsables del pago de daños o costes distintos al reembolso. Esto se hará mediante la notificación por corro y bajo las siguientes condiciones:<br/>
· El producto no tiene stock disponible.<br/>
· Los datos de facturación no son correctos o no pueden verificarse.<br/>
· Nuestros sistemas de seguridad señalan su pedido como pedido no habitual o pedido susceptible de constituir fraude.<br/>
· No podemos realizar la entrega en la dirección indicada, debido a circunstancias o casos que quedan fuera de nuestro control.<br/>
Si en el pedido efectuado hay productos con errores claros de publicación, precios o stock, cancelaremos dichos productos, reembolsando al cliente ese monto.<br/>
La marca se reserva el derecho de cancelar los pedidos de compras de bolsas de regalo, en los casos que la cantidad de bolsas exceda la cantidad de productos comprados. 
<br/>· No está permitido la compra exclusiva de bolsas de regalo, procederemos a cancelar el pedido sin previo aviso y gestionaremos la devolución del pago efectuado.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
           DERECHO A RETRACTO<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          El plazo para la devolución de compra por “derecho a retracto” es de hasta 10 días contados desde la recepción del pedido. Los productos por devolver deben enviarse en el estado en el que los recibió: estar completos, sin usar, sin lavar, con todas las etiquetas de producto y precio. Si no cumple lo anterior se realizará la devolución de los productos a la dirección registrada, con envío por pagar.
Esto es válido para las compras online exclusivamente.
Si compraste en tienda, tienes derecho únicamente a cambio de producto y no devolución.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            OFERTAS PROMOCIONALES<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Las ofertas promocionales (códigos de descuento) deParrella se limitarán a uno por cliente y pedido. <br/>No será posible combinar códigos promocionales a menos que se indique lo contrario.<br/>
La promoción "Envío Gratis sobre $100.000" se aplica cuando el carrito de compra iguale o supere $100.000, valorando únicamente los productos, es decir no se suma a la promoción el costo de despacho, esto es un cobro aparte.<br/>
La Promoción "20% OFF en tu primera compra "sólo es válida para usuarios registrados.
<br/> El 20% de descuento no es acumulable con otras promociones y solo aplica en productos que no tienen descuento ya aplicado.<br/>
Existen promociones y descuentos exclusivos de nuestro sitio, que no son aplicables en tiendas físicas de Parrella.<br/>
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            CAMBIOS EN LAS PRESENTES CONDICIONES GENERALES<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Si Parrella decide modificar las presentes condiciones generales, publicaremos las condiciones modificadas en el Sitio Web, por lo que aconsejamos comprobar periódicamente si han cambiado. Las presentes condiciones se modificaron por última vez en JUNIO 2024.
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            CLICK & COLLECT – RETIRO EN TIENDA
          </Typography><br/><br/>
          <Typography sx={detalles}>
          La opción de Retiro en Tienda no tiene costo asociado.<br/>
Los productos son entregados en el packaging propio del Ecommerce. <br/>Si deseas una bolsa para regalo, debes agregarla en tu pedido en el carrito de compra.<br/>
Tu pedido será procesado tan pronto como confirmemos el pago. La preparación en tienda puede tardar hasta 4 horas. Una vez que tu pedido esté confirmado, recibirás un correo electrónico indicando que está listo para su retiro. Recuerda, esperar este correo antes de dirigirte a la tienda.<br/>
Para retirar tu compra en la tienda, asegúrate de tener contigo la boleta de compra en formato PDF y tu cédula de identidad. Si otra persona va a realizar el retiro en tu nombre, deberá presentar la boleta con el número de pedido y una fotocopia o foto de tu cédula de identidad.<br/>

Tienes un plazo de 7 días para retirar tu compra después de recibir el correo de confirmación de que tu pedido está listo para ser recogido. Si no retiras tu pedido dentro de este plazo, se cancelará la compra y se procederá a la devolución del dinero. El tiempo de reembolso varía según el método de pago y tu entidad bancaria, pudiendo tomar hasta 10 días hábiles. En el caso de haber realizado la compra con tarjeta de débito, nos pondremos en contacto contigo para solicitar los datos de la cuenta bancaria a la que se realizará la transferencia.<br/>
Si algún producto no está disponible en stock al momento de preparar tu pedido, te notificaremos por correo electrónico y nos comunicaremos contigo para gestionar la devolución del dinero.<br/>
Puedes solicitar el cambio o devolución de cualquier producto directamente en nuestras tiendas.<br/>
          </Typography>
        </Box>
        <Box>
<br/>
          <Typography
            sx={{
              ...detalles,
              fontSize: "18px",
              color: "#111",
              fontWeight: "1000",
            }}
          >
            FALSIFICACIONES<br/><br/>
          </Typography>
          <Typography sx={detalles}>
          Lamentablemente, y al igual que ocurre con otras marcas, nuestros diseños son objetivo de delincuentes que producen y venden falsificaciones de nuestros productos con la voluntad de engañar a los consumidores y aprovecharse económicamente de nuestro éxito.<br/>
Nuestro equipo de protección de marca realiza un seguimiento diario de páginas web, enlaces patrocinados, posts en redes sociales y tiendas online que ofrecen productos falsos de Parrella. Trabajamos de forma estrecha con las autoridades aduaneras y las fuerzas de seguridad para acabar con la venta de falsificaciones tanto en el mercado físico como online en más de un centenar de países.
Sabemos que puede resultar difícil distinguir un producto auténtico de una falsificación, por lo que nuestra recomendación es siempre desconfiar de productosParrella que ofrezcan grandes descuentos.<br/>
Si ves una tienda o distribuidor online que te haga dudar de la autenticidad de los productos que vende deParrella, ponte en contacto con nuestro servicio de atención al cliente a través de parrella@gmail.com e indícanos el nombre, el lugar donde se encuentra o su URL. Nos ayudará a realizar un seguimiento y tomar las medidas oportunas.
Basándonos en nuestra propia experiencia, estas son algunas de las características que sirven para identificar páginas web que venden falsificaciones o no entregan el producto solicitado:<br/>
· Suelen incluir escasos o nulos datos de contacto como nombre de la empresa, dirección, correo electrónico o número de teléfono.<br/>
· Este tipo de páginas no protegen tus datos personales ni los de tu tarjeta de crédito y es posible que la dirección del sitio web (URL) no incluya HTTPS: // o muestre un pequeño símbolo de candado antes de la dirección.<br/>
· También es posible que traten de imitar la apariencia de la página web oficial deParrella a pesar de que el dominio no tenga relación con la marca. Solo Parrella gestiona la tienda online oficial parrella.com
<br/>Ten en cuenta el riesgo que asumes al adquirir productos de vendedores no autorizados.<br/> Solo encontrarás productos auténticos de Parrella en parrella.com, tiendas Parrella y distribuidores autorizados de Parrella.
          </Typography>
        </Box>


    </Box>
  );
};

export default Termino;
