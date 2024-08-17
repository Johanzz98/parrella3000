import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'



const titulo = {
    fontSize: "16px",
    fontWeight: "1000",
    color: "#00174f",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
  
  };
  
  const detalles = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  };
const PoliticaPrivacidad = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <Box
    sx={{
        margin: '40px 0px 0px',
        padding: '0px 40px',
        marginLeft:isMobile ? '6px' : 0,
        paddingRight: isMobile ? '24px' :0,
        width:  isMobile ? '95%': '70%',
        height: isMobile ?  '100%': '800px',
        overflow: 'auto', // Habilita el scroll cuando sea necesario

    }}
>


    <Typography sx={titulo}>
    Compromiso de privacidad de Parrella
    </Typography>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
      1. Transparencia
        </Typography>
    </Box> 
    <Box>
    <Typography sx={detalles}>
    Queremos que tenga la información que necesita para tomar decisiones significativas sobre su información personal. 
    <br/>Por lo tanto, nos comprometemos a explicar en nuestros avisos de privacidad por qué recopilamos su información personal y cómo se utiliza esa información. Nos esforzaremos para que nuestros avisos de privacidad sean fáciles de encontrar, acceder y comprender.
Tomaremos las medidas adecuadas para brindarle control sobre la información personal que recopilamos. Nunca le exigiremos que proporcione más información personal de la necesaria para comprar nuestros productos o acceder a nuestros servicios.
Si no desea recibir comunicaciones de marketing físicas ni por correo electrónico de nuestra parte, le facilitaremos la cancelación de la suscripción y cumpliremos con su solicitud.
    </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
2. Responsabilidad
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Nos hacemos responsables de nuestras prácticas de datos y de cumplir nuestros principios de privacidad. La privacidad y la seguridad de los datos son componentes clave en el diseño, desarrollo y ejecución de cualquier proyecto que trate con información personal. Nuestros proyectos que involucran el uso de su información personal son manejados por equipos que deben completar capacitaciones continuas sobre privacidad, seguridad y ética de los datos.
    <br/>
Nos esforzamos continuamente por reconocer áreas en las que tenemos margen de mejora, perfeccionar nuestros procesos y actuar como líder en prácticas de datos y privacidad en nuestra industria.
    </Typography>
    </Box><Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
     3. Seguridad
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    No hay privacidad sin seguridad de los datos y nos tomamos en serio nuestras obligaciones de salvaguardar la información personal. Hemos implementado políticas, prácticas y procedimientos diseñados para: limitar el acceso a la información personal tanto como sea posible, proteger la información personal contra pérdidas y acceso, uso y divulgación no autorizados, y exigir estándares de seguridad adecuados para los proveedores externos que tocan información personal. No almacenamos información de tarjetas de crédito en nuestros sistemas.
    </Typography>
    </Box><Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
      Políticas de cookies
        </Typography>
    </Box>
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
      Parrella
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Este es nuestro aviso de cookies. Cuando visites nuestro sitio web, depositaremos una o más cookies en tu dispositivo o usaremos JavaScript, HTML 5 y demás tecnologías digitales para recoger información de tu computador, teléfono móvil u otro dispositivo. Esta información podría contener datos personales. En la presente política de cookies te indicaremos qué cookies utilizaremos y cuáles son sus funciones. El modo en que tratamos los datos personales que obtenemos a partir de tu dispositivo figura descrito en nuestra política de privacidad. Consideraremos el hecho de que visites nuestro sitio web como una petición específica para que te ofrezcamos la totalidad de funcionalidades del sitio web, incluida, entre otras cosas, la posibilidad de comprar un artículo en nuestra tienda web.
    </Typography>
    </Box><Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
     ¿Quién es el responsable?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    La responsabilidad de esta política de cookies reside en Parrella. Puedes contactar con nosotros en la dirección indicada más abajo.
    </Typography>
    </Box><Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
    ¿Qué son las cookies?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Al hablar sobre las cookies nos referimos a pequeños (y temporales) archivos de texto que nosotros transmitimos a tu dispositivo. Podremos usar técnicas digitales similares, como JavaScript, HTML 5, registro de huella digital del dispositivo, etc. En esta política de cookies, de manera conjunta, nos referiremos a estas técnicas digitales como “cookies”.
    </Typography>
    </Box><Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
    ¿Por qué usamos cookies?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Las cookies pueden usarse con numerosos y distintos fines. En primer lugar, estas cookies garantizan que puedas usar las funcionalidades básicas del sitio web: recuerdan tu selección y las preferencias que eliges, a fin de mejorar tu experiencia en nuestro sitio web. Ayudan a hacer posible el proceso del carrito y el pago de la compra, así como la asistencia para los problemas de seguridad y el cumplimiento de las normativas. Las denominamos “cookies funcionales”.<br/><br/>
Las cookies también pueden usarse para que podamos desarrollar en mayor medida y mejorar la funcionalidad de nuestro sitio web mediante el seguimiento de su uso. En algunos casos mejoran la velocidad con la que podemos tratar tu petición, al permitirnos recordar preferencias del sitio web que hayas seleccionado anteriormente. Puedes optar por no dar tu consentimiento a nuestro uso de estas “cookies de análisis”.<br/>
Estas cookies transmiten de vuelta datos a nuestras herramientas de análisis de datos. Si visitas uno de nuestros sitios web, podemos determinar por qué canal de marketing has llegado (p. ej., Google AdWords, boletín electrónico), qué páginas has visualizado, qué artículos has añadido a tu carrito y cuáles has comprado. También recibimos información sobre cómo usas e interactúas con nuestros sitios web, así como respecto al tiempo que pasas en los mismos. El servidor de nuestros sitios web también recoge información básica que guarda relación con la petición que se hace desde tu navegador cuando visitas los sitios web. Estos datos podrán incluir información sobre la fecha y hora de tu última visita, el sello de tiempo de la solicitud del navegador, tu dirección IP, información básica sobre el encabezamiento de HTTP (como la URL de referencia y el agente de usuario) y la anterior URL solicitada por tu navegador.<br/><br/>
En tercer lugar, las “cookies de publicidad y redes sociales” ofrecen la posibilidad de conectarte a redes sociales y compartir contenido desde nuestro sitio web hacia dichas redes sociales. La información que obtenemos de las cookies de publicidad se usa para mantener tu perfil de publicidad personal. Estas cookies también nos ayudan a incluirte en un público en línea en particular en nuestra Plataforma de gestión de datos (DMP, por sus siglas en inglés).
En la DMP se recoge información sobre cómo responden nuestros consumidores a nuestros productos, marca y publicidad. Esta información se recoge de diferentes fuentes disponibles para nosotros fuera de línea, en línea y por móvil, por ejemplo, cuando visitas nuestro sitio web. Además, se enriquece mediante la información recogida por otros, como por ejemplo datos relacionados con el tiempo local. Basándose en esa información, la DMP puede ayudar a nuestros equipos de marketing a encontrar y definir segmentos pertinentes de públicos en línea para campañas de marketing directo a fin de llegar mejor a los mismos, dentro y fuera de los canales digitales de Parrella. Si tu perfil de marketing digital pertenece a uno de estos segmentos, probablemente recibirás nuestra publicidad adaptada a los intereses del segmento en que te colocamos en Facebook, propiedades de Google, propiedades en línea de las denominadas partes afiliadas y otras ubicaciones y materiales en línea y fuera de línea, lo cual es publicidad dirigida.
También podemos utilizar los datos para la redirección, mostrándote un anuncio dirigido en un sitio web de terceros vinculado a un evento en nuestro sitio web, por ejemplo, una compra específica que fue abandonada.

Además, Facebook, Google y otros actores en línea pueden registrar de forma independiente tu uso de nuestros anuncios. Recomendamos que leas las políticas de privacidad de dichos terceros, ya que nosotros no somos responsables de los datos personales que tratan para sus propios fines.
Puedes optar por no dar tu consentimiento a nuestro uso de estas “cookies de publicidad y redes sociales”.
    </Typography>
    </Box>
   
    <Box>
        <Typography sx={{ 
    fontSize: "14px",
    fontWeight: "600",
    color: "#00174f",
    margin:'16px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: "Helvetica,sans-serif",
    
  }}>
¿Qué opciones tengo respecto a las cookies y a mi privacidad?
        </Typography>
    </Box>
    <Box>
    <Typography sx={detalles}>
    Puedes configurar tus preferencias con respecto a las cookies en nuestro sitio web. Para ello, puedes hacer clic en el enlace de “más información” en el banner de la cookie o, cuando desees cambiar un consentimiento que hayas concedido previamente, puedes acceder a tus preferencias a través del botón de “más información” aquí. <br/>En la siguiente pantalla de “más información” que aparece, puedes indicar que retiras el consentimiento eliminando la marca relevante en las casillas de cookies de análisis y de publicidad y redes sociales. Obviamente, preferimos que no lo retires, porque estimamos que te aportan una experiencia web óptima y ayudan, además, a asegurarse de que no se te muestran anuncios que no te resulten pertinentes.
    Cuando retiras tu consentimiento no se suprimen automáticamente las cookies que ya están en tu dispositivo debido a un consentimiento anterior. Tendrás que borrar manualmente estas cookies.
    </Typography>
    </Box>
   </Box>
  )
}

export default PoliticaPrivacidad