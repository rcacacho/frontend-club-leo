import React from "react";
import logo from "../../assets/logoleo.png";
import { Link } from "react-router-dom";
import "./Joinus.css"

import afiliados1 from "../../assets/contenido/afiliados1.jpg";
import afiliados2 from "../../assets/contenido/afiliados2.jpg";
import tabla from "../../assets/contenido/tabla.png";
import tabla1 from "../../assets/contenido/tabla1.png";








export default function Joinus() {
  return (
    <div className="contenedor-aboutus" id="padding">
    <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logo}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                </Link>
            </nav>
            <div className="container-fluid" align="left">

            <h3 id="titulo" align="center"> <b>PROGRAMA DE INVITADOS LEO: <br />

           Ayúdanos a crecer, y construye un ingreso de por vida

          </b> 
          </h3>

          <br />
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={afiliados1}
            height="250"
            alt="..."
            />
            </div>

            <br />

           <p>
           LEO Club Mundial de Lectura es una organización social sin ánimo de lucro que no realiza actividades de producción o comercialización de bienes y servicios. Su única fuente de ingresos es la cuota de membrecía anual que pagan los asociados. 
           </p>
           <p>
           Los programas de promoción de la lectura, escritura y multilingüismo y los demás servicios que ofrece LEO son de acceso libre y gratuito para sus socios, quienes aparte de la cuota anual no deben pagar ningún valor adicional.
           </p>
           <p>
           Por ello, la estrategia de financiamiento de la asociación es masificar la vinculación de socios en  nuestro país y el mundo, de manera que se generen los ingresos para cumplir su misión social.
           </p>
           <br />
           <h3 id="titulo" align="center"> <b>Programa de Invitados : <br />

           Estrategia LEO de Crecimiento en el país y el mundo
           </b> 
           </h3>
           <br />
           <p>
           El Programa de Invitados, es una oportunidad para que los socios apoyen a LEO en su objetivo de crecimiento, con un trabajo muy sencillo: invitar a más personas a que ingresen al Club en el país y el mundo, aprovechando su círculo de conocidos (familiares, amigos, vecinos, compañeros de trabajo y estudio) y sus contactos en las redes sociales, que permiten que la invitación llegue a nuevos socios en los más de 100 países del mundo que utilizan los 5 idiomas del programa (español, inglés, francés, italiano, portugués).
           </p>
           <p>
           Para motivar a los socios, LEO les retribuye su trabajo, proporcionándoles un ingreso por la vinculación de cada nuevo socio, al igual que por las sucesivas renovaciones anuales de la suscripción, con lo cual el ingreso es permanente y puede llegar a ser muy significativo
           </p>
           <p>
           LEO destina el 80% del ingreso por afiliación a financiar el Programa de Invitados, y solo el 20% para su funcionamiento y los programas para los asociados.
          </p>
          <p>
          El Programa de Referidos está concebido como una alianza estratégica gana-gana: la Asociación crece en todo el mundo y cuenta con los recursos para desarrollar sus programas educativos y culturales, y los socios pueden asegurar un importante ingreso, de por vida.
          </p>
          <br />
           <h3 id="titulo" align="center"> <b>Cómo funciona el Programa de Invitados LEO <br />

          El principio es sencillo: invitar, y obtener ingresos crecientes, de por vida

           </b> 
           </h3>
           <br />
           <p>
           1. Al vincularse diligenciando el formulario por internet, cada socio crea su usuario y contraseña; el programa automáticamente le crea “Mi Cuenta” para que realice seguimiento en tiempo real a sus invitados e ingresos.
           </p>
           <p>
           2. El socio invita a otras personas a vincularse a LEO, y al diligenciar el formulario, registran el usuario del socio promotor; el sistema los vincula en su red personal de invitados RPI, de por vida
           </p>
           <p>
           3. El sistema automáticamente distribuye el valor de la cuota de afiliación de $50.000 entre la asociación, 20% ($10.000) y el restante 80% ($40.000) lo asigna a la red del socio promotor. Este ingreso se suma en tiempo real en su Cuenta Personal, y el acumulado mensual es girado a su cuenta financiera. Durante el mes, con sus ingresos, el socio pude comprar los libros, benes y servicios ofrecidos por los aliados de LEO.
           </p>
           <br />
           <h3 id="titulo" align="center"> <b>Cuánto ingreso puede obtener en el Programa de Invitados?<br />
           </b> 
           </h3>
           <br />
           <p>
           Según las estadísticas, en promedio todos conocemos directamente a 100 personas (familiares, vecinos, compañeros de estudio o trabajo), y actualmente este número se multiplica con los contactos en redes sociales, que pueden estar en cualquier país del mundo.
           </p>
           <p>
           Para que sea un trabajo sencillo que cualquier persona pueda hacer en poco tiempo, cada socio que decida participar en el Programa, puede invitar un máximo de 20 nuevos socios, en el país y cualquier otro del mundo.  
           </p>
           <p>
           Con este trabajo, cada socio estará construyendo su Red Personal de Invitados (RPI), que inicia con el respectivo socio y sus 20 invitados, y sigue creciendo con las personas que éstos inviten a vincularse a LEO.
           </p>
           <p>
           De esta manera, la RPI y los ingresos que puede obtener cada socio LEO son bastante significativos, como se ilustra en el siguiente cuadro:
           </p>
         
          <br />
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={tabla}
            height="250"
            alt="..."
            />
            </div>
            <br />
            <p>
            Es decir, un socio que logre completar su RPI con sus 20 socios directos y sucesivamente, podrá obtener un ingreso de más de $1.500 millones anuales, que será permanente por la renovación de la suscripción a LEO.
            </p>
            <p>
            Todo el sistema opera por internet en tiempo real. Cada socio tiene una Cuenta Personal, en la cual puede hacer seguimiento permanente a los nuevos socios que ha invitado y a sus ingresos acumulados.
            </p>
            <p>
            El ingreso acumulado cada mes se gira dentro de la semana siguiente a la cuenta financiera del socio, o al método de pagos internacional que seleccione (Paypal, Pionners, etc).
            </p>
            <br />
           <h3 id="titulo" align="center"> <b>Por qué el Programa de Invitados?<br />
           </b> 
           </h3>
           <br />
           <p>
           El fenómeno económico más gran del mundo en el Siglo XXI son las redes sociales, que gracias a internet, en poco tiempo hacen presencia en todo el mundo con miles de millones de usuarios, convirtiéndose en las empresas más valiosas y rentables (este año twitter fue vendida en US$44.000 millones, mientras facebook está valorada en US$226.000 millones). De acuerdo a cifras de Smart Insights, en 2022 el 58.4% de la población mundial utiliza redes sociales (4,062 millones de personas). 
           </p>
            <p>
            Cómo crecieron las redes sociales? Cuál es su estrategia de crecimiento? Es sencilla. Se llama la teoría de los seis grados de separación: indica que cualquier persona está conectada a cualquier otra persona del planeta a través de una cadena con sólo 6 enlaces. De esta manera, si cada uno conoce en promedio a 100 personas, con solo 6 enlaces, se puede conectar a toda la humanidad. Y esto es posible gracias a internet, en tiempo real.
            </p>
            <br />
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={afiliados2}
            height="250"
            alt="..."
            />
            </div>
            <br />
            <p>
            Aprovechando esta experiencia, el Programa de Invitados LEO está concebido como una red social mundial, en donde los socios pueden invitar a personas de todo el mundo a vincularse a través de internet, y obtener ingresos por cada nuevo socio, construyendo un ingreso permanente que garantice su independencia económica.
            </p>
            <br />
           <h3 id="titulo" align="center"> <b>Mercado Objetivo LEO. Socios potenciales<br />
           </b> 
           </h3>
           <br />
           <p>La Biblioteca Digital Familiar de LEO ofrece a sus socios más de 15.000 obras en 5 idiomas, utilizados en más de 100 países del mundo, con una población de 1.900 millones de personas, y 1.500 millones de socios potenciales (mayores de 14 años con capacidad lectora).
            </p>
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={tabla1}
            height="250"
            alt="..."
            />
            </div>
            <br />
            <p>
            La prioridad de LEO son los estudiantes y sus familias en los diferentes países (aprox. 380 millones), para quienes la lectura y escritura son actividades rutinarias asociadas al proceso de formación académica, y el fortalecimiento de sus competencias comunicativas es clave para el éxito del proceso educativo. Con la membrecía anual de $50.000, cada socio accede a la biblioteca digital descargable con 15.000 obras en 5 idiomas, valorada en más de CO$150 mills, US$40.000.
            </p>
            <p>
            Para cubrir esta gran población en todo el mundo, el Programa de Invitados LEO permite que los socios apoyen el crecimiento de la asociación, aprovechando sus conocidos, y realizando cada uno el trabajo de invitación y motivación a vincularse, lo que se facilita a través del registro por internet y una plataforma de pagos internacional (paypal, etc.).
            </p>
            <br />
            <h3 id="titulo" align="center"> <b>Un ingreso creciente de por vida <br />

            Sin invertir nada, sencillo y rápido

            </b> 
            </h3>
            <br />



              
              


              </div>
 
          
              
    </div>
  );
}