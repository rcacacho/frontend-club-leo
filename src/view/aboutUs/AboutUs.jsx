import React from "react";
import "./AboutUs.css"
import logo from "../../assets/logoleo.png";
import { Link } from "react-router-dom";

import aboutus from "../../assets/contenido/aboutus.jpg";




export default function AboutUs() {
  return (
    <div className="contenedor-joinus" id="padding">
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

            <h3 id="titulo" align="center"> <b>Leer y escribir bien, las competencias fundamentales para ser exitosos <br />
            en la moderna sociedad mundial  de la información y el conocimiento
          </b> 
          </h3>

          <br />
          <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={aboutus}
            height="250"
            width="400"
            alt="..."
            />
            </div>

            <br />

            <h3 id="titulo" align="center"> <b>Nosotros <br />
          </b> 
          </h3>
          <br />
          <p>
          Hay una ley universal del desarrollo: todo progreso y bienestar de la sociedad, depende de la calidad de la educación que recibe la población. Por ello, los países más desarrollados, tienen como prioridad contar con sistemas educativos con cobertura universal, calidad y pertinencia, que mantengan y fortalezcan la competitividad de sus trabajadores.
          </p>
          <p>
          LEO - Club Mundial de Lectura, es una asociación sin ánimo de lucro cuya misión es promover la lectura, la escritura y el multilingüismo, como hábitos que contribuyen al mejoramiento educativo y cultural de las personas, familias y comunidades, mejoran la calidad del sistema educativo y coadyuvan a la construcción de sociedades más democráticas, pacíficas y progresistas.
          </p>
          <p>
          Para cumplir esta misión, queremos impulsar una gran comunidad de instituciones educativas y personas comprometidas con construir un mundo mejor, a partir de mejorar el pilar clave del desarrollo: la educación, que depende fundamentalmente de la lectura, por excelencia el camino para adquirir los conocimientos y capacidades en las diferentes áreas.
          </p>
          <p>
          Con este fin, LEO opera como una gran red mundial soportada en internet, que permite integrar todos los países y ciudades del mundo, y ofrecer servicios que llegan en tiempo real a todos los usuarios, con una gran eficiencia y economía que nos beneficia a todos.
          </p>
          <br />

          <h3 id="titulo" align="center"> <b>Misión <br />
          </b> 
          </h3> 
          <br />
          <p>
          Trabajamos en el país y el mundo para promover y masificar la lectura y escritura, como hábitos para aumentar el nivel educativo y cultural de las personas, familias y comunidades y mejorar sus competencias comunicativas en el contexto de la moderna sociedad de la información y el conocimiento, conectada a nivel global por internet. 
          </p>
                
          <br />

          <h3 id="titulo" align="center"> <b>Objetivos <br />
          </b> 
          </h3> 
          <br />      
          <p>
          •	Aumentar el número de personas que leen y escriben como actividad cotidiana en los diferentes escenario académicos, laborales y sociales. <br />

          •	Incrementar los índices de lectura, para lograr que las personas lean al menos un libro al mes, doce libros al año. <br />
 
          •	Ofrecer escenarios para que las personas escriban y publiquen sus obras en los diferentes géneros, dándolas a conocer en el país y el mundo, con énfasis en la comunidad académica. <br />

          •	Promover el multilingüismo y las competencias comunicativas de las personas, para mejorar sus posibilidades de participación y éxito en la moderna sociedad tecnológica, a través de internet. <br />

          •	Fortalecer a las familias y las instituciones educativas como escenarios básicos para inculcar y fortalecer las competencias lecto-escritoras de los estudiantes.

          </p>

          <br />

          <h3 id="titulo" align="center"> <b>Asociados <br />
          </b> 
          </h3> 
          <br />  
          <p>
            
          El Club Mundial de Lectura es una comunidad digital con cobertura mundial. Pueden ser socios de LEO en los diferentes países y ciudades: <br />
          •	Las personas (mayores de 14 años). <br />
          •	Las instituciones educativas y organizaciones sociales sin ánimo de lucro.

          </p>
          <p>
          
          La membresía (ingreso y permanencia como socios por un año) tiene un costo de solo $50.000, que otorga el acceso libre y gratuito a los programas educativos y culturales del Club (biblioteca digital, publicar obras, vender obras, etc).

          </p>
          <p>
          Adicionalmente, los socios LEO pueden contribuir a su crecimiento en todo el mundo, invitando a ingresar al Club a nuevos socios, lo que les permitirá obtener ingresos importantes y permanentes que mejoren su calidad de vida personal y familiar.
          </p>

          <br />

          <h3 id="titulo" align="center"> <b>Programas y Servicios a los Asociados<br />
          </b> 
          </h3> 
          <br />  
          <p>

          </p>
          <p>

          </p>
          <p>
            
         LEO ha desarrollado herramientas pedagógicas con tecnologías web, que permiten en forma eficiente y económica promover y masificar la lectura, la escritura y el multilingüismo como competencias clave para facilitar la participación y protagonismo de nuestros socios en la moderna sociedad de la información y el conocimiento soportado en internet, que demandan competencias comunicativas crecientes para lograr que las personas aprovechen las oportunidades de contactos, educación y negocios a nivel mundial <br />

        LEO ofrece a sus asociados los siguientes servicios totalmente gratuitos:

          </p>
          <h5 id="titulo" align="center"> <b>1. Promoción de la Lectura y el Multilingüismo<br />
          </b> 
          </h5>
          En el portal web institucional www.vamosaleer.co se proporcionan noticias educativas y culturales de actualidad y artículos sobre los géneros, autores y obras más importantes, para informar, motivar y orientar la lectura. También está disponible la Biblioteca Digital Familiar con 15.000 obras en 5 idiomas (español, inglés, francés, portugués e italiano), para leer on line o descargar al dispositivo del usuario,y tenerlas disponibles en todo momento y lugar sin conexión a internet. Mensualmente, se adicionan 50 nuevas obras a la colección, 600 nuevos libros al año. <br />

          Para promover la lectura, LEO ha desarrollado dos herramientas adicionales: <br />

          •	Bibliomobil: una APP que los usuarios pueden descargar a su celular, PC o tableta, y acceder a la colección de 15.000 obras que están almacenadas en la nube. Las obras se pueden leer on line o descargar al dispositivo del socio. La descarga de la APP es gratuita para los socios logeados. <br />

          •	Biblio-Tablet: aplicación a través de la cual la biblioteca digital y sus 15.000 obras se graban en la memoria del celular o tableta del usuario, para su consulta sin conexión a internet. Herramienta diseñada para servir a las zonas rurales y municipios apartados con limitaciones de conectividad web. La descarga de la aplicación es gratuita para los socios logeados.

          <p>
          <h5 id="titulo" align="center"> <b>2. Promoción de la escritura<br />
          </b> 
          </h5>
          Escribir es uno de los retos más importantes para las personas. Es un acto creativo y propositivo, que permite dar a conocer las ideas y creaciones, y contribuir a la expansión del conocimiento y el patrimonio literario universal. Para ello, el portal web institucional www.vamosaleer.co permite a los socios crear su perfil de escritor y publicar sus obras para ser visibles por los demás socios y por personas de todo el mundo. Pueden ser obras gratuitas o comerciales. Este es un servicio gratuito para los socios logeados.

          </p>
          <p>
          <h5 id="titulo" align="center">  <b>3. Promoción comercial de los autores LEO<br />
          </b> 
          </h5>
          A través de la tienda www.libreria.clubleo.co, la asociación permite que gratuitamente los socios puedan exponer y comercializar las obras de su autoría entre la comunidad LEO del país y el mundo. Cada socio es el responsable de toda la gestión comercial, conforme a las normas legales sobre la materia.

          </p>
          <br />
          <br />
          <h3 id="titulo" align="center"> <b>LEO <br />
          Una gran comunidad mundial comprometida con la construcción <br />
          de una sociedad más educada y culta

          </b> 
          </h3>
          <br />



              
              


              </div>
              
             
    </div>
  );
}
