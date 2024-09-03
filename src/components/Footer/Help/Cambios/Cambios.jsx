import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const titulo = {
  fontSize: "16px",
  fontWeight: "1000",
  color: "#00174f",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
};

const detalles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#00174f",
  margin: "16px 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Helvetica,sans-serif",
};
const Cambios = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: "0px 40px",
        margin: "40px 0px 0px",
        width: isMobile ? "97%" : "70%",
        marginLeft: isMobile ? "6px" : 0,
        paddingRight: isMobile ? "24px" : 0,
        height: isMobile ? "100%" : "800px",
        overflow: "auto", // Habilita el scroll cuando sea necesario
      }}
    >
      <Typography sx={titulo}>CAMBIOS, DEVOLUCIONES Y REEMBOLSOS</Typography>
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#00174f",
            margin: "16px 0",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
          }}
        >
          Cambios
        </Typography>
      </Box>
      <Box>
        <Typography sx={detalles}>
          Es importante informar que los artículos que no permiten ni cambios ni
          devoluciones son ropa interior, calcetines y petos deportivos por
          razones de higiene. En caso de realizar el proceso de devolución de
          dichos productos, se realizará la restitución de los artículos al
          domicilio registrado con envío por pagar.
          <br />
          <br />
          Los productos por devolver deben enviarse en el estado en el que los
          recibió: estar completos, sin usar, sin lavar, con todas las etiquetas
          de producto y precio. Si no cumple lo anterior se realizará la
          devolución de los productos a la dirección registrada, con envío por
          pagar.
          <br />
          <br />
          • Para poder gestionar tu solicitud tanto el producto como su
          packaging deben estar en las mismas condiciones que se entregó. (Sin
          rayones ni escrituras)
          <br />
          <br />
          • Todos sus productos deben conservar sus etiquetas originales.
          <br />
          <br />
          • Recordá incluir todos los accesorios con los que recibiste tu
          producto, incluyendo accesorios (bolsas, cordones, stickers, etc.) De
          lo contrario será considerada como incompleta.
          <br />
          <br />
          • Hacemos devoluciones únicamente de productos adquiridos en nuestro
          sitio oficial Parrella.com
          <br />
          <br />
          • En caso de que el producto no corresponda a tu solicitud, la gestión
          de devolución no será realizada y no avanzaremos con el reintegro.
          <br />
          <br />
          Para realizar la solicitud de cambio, debes seguir las siguientes
          instrucciones:
          <br />
          <br />
          • Realiza tu solicitud aquí.
          <br />
          <br />
          • Ingresa el número de tu pedido, incluido el guion y los dos números
          siguientes, junto con el correo electrónico con el que realizaste el
          pedido.
          <br />
          <br />
          • Haz clic sobre la imagen del producto que deseas cambiar o devolver.
          <br />
          <br />
          • Selecciona la razón de la devolución y en caso elegir garantía debes
          agregar un breve comentario y subir una foto del producto y su falla.
          <br />
          <br />
          • Si deseas realizar un cambio por el mismo producto, debes
          seleccionar la imagen que por defecto te muestra el sistema y
          seleccionar la talla de preferencia.
          <br />
          <br />
          • Si deseas realizar el cambio por otro producto, puedes elegirlo
          escribiendo el nombre de éste en el buscador.
          <br />
          <br />
          • El valor del nuevo producto debe ser igual o superior al producto
          anterior.
          <br />
          <br />
          • Si el monto en “Diferencia de Producto” está entre paréntesis,
          quiere decir que aún mantienes saldo a favor por lo que debes
          completar el monto para finalizar el proceso de cambio. <br />
          <br />
          Por otro lado, el valor de “Diferencia de Producto”, sin paréntesis,
          es el valor por pagar.
          <br />
          <br />
          • Los cambios de talla están sujetos a disponibilidad de stock, de lo
          contrario serás contactado por nuestro equipo de Servicio de Atención
          al Cliente y podrás optar por la devolución del dinero.
          <br />
          <br />
          • Para efectuar una segunda solicitud sobre un cambio anterior debes
          realizar el proceso anteriormente descrito, sin embargo, el número de
          pedido es el notificado en el pedido de cambio original, el cual
          inicia con las letras RVS-.
          <br />
          <br />
          • Los cambios realizados por primera vez serán gestionados sin costo.
          A partir de una segunda solicitud de cambio, este tendrá un cobro de
          despacho (envío y etiqueta).
          <br />
          <br />
          • El producto deberá pasará por un proceso de revisión en el cual
          definirá si procede el cambio. Esto será informado a través de un
          correo electrónico.
          <br />
          <br />
          • El proceso de retiro y devolución tiene un tiempo estimado de 10
          días hábiles, que incluyen los procesos de retiro, sanitización,
          control de calidad y despacho de un nuevo producto.
          <br />
          <br />
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#00174f",
            margin: "16px 0",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
          }}
        >
          Devoluciones
        </Typography>
      </Box>
      <Box>
        <Typography sx={detalles}>
          Los artículos comprados en la tienda online de Tommy Hilfiger se
          pueden cambiar gratis en un período de 10 días tras la recepción de la
          compra. Por favor tener en cuenta las siguientes políticas de cambio:
          <br />
          <br />
          • Las devoluciones de dinero solo se realizarán mediante la solicitud
          en reverso.
          <br />
          <br />
          • No se realizan devoluciones ni reembolsos en nuestras tiendas
          físicas.
          <br />
          <br />
          • Se pueden cambiar o devolver productos que pertenezcan a un mismo
          pedido. Si son productos que pertenecen a diferentes pedidos, la
          devolución debe realizarse por separado.
          <br />
          <br />
          • Los productos por devolver deben enviarse en el estado en el que los
          recibió: estar completos, sin usar, sin lavar, con todas las etiquetas
          de producto y precio. <br />
          <br />
          Si no cumple lo anterior se realizará la devolución de los productos a
          la dirección registrada, con envío por pagar.
          <br />
          <br />
          Para realizar la solicitud de devolución, debes seguir las siguientes
          instrucciones:
          <br />
          <br />
          • Realiza tu solicitud aquí.
          <br />
          <br />
          • Ingresa tu número de tu pedido, incluido el guion y los dos números
          siguientes, junto con el correo electrónico con el que realizaste el
          pedido.
          <br />
          <br />
          • Haz clic sobre la imagen del producto que deseas devolver.
          <br />
          <br />
          • Selecciona la razón de la devolución y en caso elegir garantía debes
          agregar un breve comentario y subir una foto del producto y su falla.
          <br />
          <br />
          • Confirma tus datos personales, elige un método de devolución y
          confirma tu solicitud.
          <br />
          <br />
          • Una vez enviada la solicitud, recibirás un correo confirmando el
          inicio del proceso de reembolso. La devolución se gestionará a la
          misma tarjeta o cuenta que se utilizó para realizar la compra.
          <br />
          <br />
          • El producto pasará por revisión de nuestro equipo técnico, el cual
          definirá si el cambio o devolución es aprobado o rechazado, lo cual se
          informará vía correo electrónico. El proceso de retiro y devolución no
          es inmediato. Tiene un tiempo estimado de aproximadamente 10 días
          hábiles que incluye retiro; sanitización; control de calidad y entrega
          del nuevo producto.
          <br />
          <br />
          • De ser aprobada la devolución, los tiempos de reembolso pueden tomar
          hasta 10 días hábiles dependiendo del método de pago original.
          <br />
          <br />
          • Los cambios o devoluciones realizados por primera vez no tendrán
          cobro de despacho. A partir de una segunda solicitud sobre un cambio
          anterior, esta tendrá un cobro que corresponde al envío y la etiqueta
          de despacho.
          <br />
          <br />
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#00174f",
            margin: "16px 0",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica,sans-serif",
          }}
        >
          Devolución de productos por garantía
        </Typography>
      </Box>
      <Box>
        <Typography sx={detalles}>
          De acuerdo con lo previsto en la Ley de protección de los derechos de
          los consumidores, se considerará que existe una falla o defecto:
          <br />
          <br />
          • Cuando los productos sujetos a normas de seguridad o calidad de
          cumplimiento obligatorio no cumplan las especificaciones
          correspondientes.
          <br />
          <br />
          • Cuando los materiales, partes, piezas, elementos que constituyan o
          integren los productos no correspondan a las especificaciones que
          ostenten o a las menciones del rotulado.
          <br />
          <br />
          • Cuando cualquier producto, por deficiencias de fabricación,
          elaboración, materiales, partes, piezas, no sea enteramente apto para
          el uso o consumo al que está destinado o al que el proveedor hubiese
          señalado en su publicidad.
          <br />
          <br />
          Podrás devolver productos que presenten defectos de fábrica o fallas
          (garantía) en un plazo de 180 días tras la emisión de la boleta. En
          caso de que tu reclamo sea justificado, se reembolsará el precio del
          producto y el despacho.
          <br />
          <br />
          Para realizar la solicitud de devolución, debes seguir las siguientes
          instrucciones:
          <br />
          <br />
          • Realiza tu solicitud aquí.
          <br />
          <br />
          • Ingresa tu número de tu pedido, incluido el guion y los dos números
          siguientes, junto con el correo electrónico con el que realizaste el
          pedido.
          <br />
          <br />
          • Haz clic sobre la imagen del producto que deseas devolver.
          <br />
          <br />
          • Selecciona la razón de la devolución y en caso elegir garantía debes
          agregar un breve comentario y subir una foto del producto y su falla.
          <br />
          <br />
          • Confirma tus datos personales, elige un método de devolución y
          confirma tu solicitud.
          <br />
          <br />
          • Una vez enviada la solicitud, recibirás un correo confirmando el
          inicio del proceso de reembolso. La devolución se gestionará a la
          misma tarjeta o cuenta que se utilizó para realizar la compra.
          <br />
          <br />
          • El producto pasará por revisión de nuestro equipo técnico, el cual
          definirá si el cambio o devolución es aprobado o rechazado, lo cual se
          informará vía correo electrónico. El proceso de retiro y devolución no
          es inmediato. Tiene un tiempo estimado de aproximadamente 10 días
          hábiles que incluye retiro; sanitización; control de calidad y entrega
          del nuevo producto.
          <br />
          <br />
          • De ser aprobada la devolución, los tiempos de reembolso pueden tomar
          hasta 10 días hábiles dependiendo del método de pago original.
          <br />
          <br />
          • Los cambios o devoluciones realizados por primera vez no tendrán
          cobro de despacho. A partir de una segunda solicitud sobre un cambio
          anterior, esta tendrá un cobro que corresponde al envío y la etiqueta
          de despacho.
          <br />
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default Cambios;
