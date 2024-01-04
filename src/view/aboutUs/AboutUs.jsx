import React from "react";
import "./AboutUs.css"
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import { Link } from "react-router-dom";

import nosotros1 from "../../assets/contenido/nosotros1.jpg";
import nosotros2 from "../../assets/contenido/nosotros2.jpg";
import nosotros3 from "../../assets/contenido/nosotros3.jpg";
import nosotros4 from "../../assets/contenido/nosotros4.jpg";
import nosotros5 from "../../assets/contenido/nosotros5.jpg";



export default function AboutUs() {
  return (
    <div className="contenedor-aboutus">
       <nav className="navbar navbar-light mb-5" id="encabezado">
                <Link to="/" className="container-fluid">
                    <img
                    src={logonegro}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
                </Link>
            </nav>

            <div className="container-fluid">
              <div className="nosotros" align="left" id="padding">

                <h3 align="center" id="azul"> <b>Programa de Referidos</b> </h3>
                <br />
                <h3 align="center" id="azul"><i><b>"No somos clientes, somos socios: <br />
                compramos lo que necesitamos, pero siempre ganando"</b></i>
                </h3>
                <br />
                <br />

                <div className="imagenesTamAb">
                <img align="center"
                className="d-block w-200"
                height="250"
                src={nosotros1}
                alt="..."
                />
                </div> <br /> 


              <br />
              <h5 align="center" id="rojo"><b>Quiénes somos</b></h5>
              <p >El <b>Grupo Empresarial Mingga -GEM-</b> es un conglomerado de empresas que producen y comercializan bienes y servicios para satisfacer con calidad y precio competitivo las necesidades de las personas en el hogar y las diferentes actividades que desarrollan.</p>

              <br />

              <h5 align="center" id="rojo"><b>Nuestra Estrategia de Crecimiento: clientes no, socios</b></h5>
              <p>Para hacer del proceso de compra de bienes y servicios un gana-gana, GEM propone a sus clientes un gran pacto: pasar de ser compradores ocasionales, para convertirse en socios, que contribuyen al crecimiento de la empresa, y tienen derecho a participar en los beneficios que genera la actividad comercial, <br />
              
              <h5 align="center"><b>Nuestro lema : <br />
              compre lo que necesita, pero siempre ganando
              </b></h5>
              </p>
              <p>Como medio para hacer realidad este pacto, <b>GEM</b> ha creado el <b>Programa de Referidos</b>, una alianza estratégica entre nuestras empresas y los clientes a los que invitamos a ser socios, con lo cual pueden obtener ingresos e importantes beneficios de por vida, realizando un trabajo muy sencillo y rápido, sin tener que invertir ni un solo peso.</p>

              <br />

              <h5 align="center" id="rojo"><b>Qué debemos hacer</b></h5>
              <p>
              Para acceder a los beneficios del Programa de Referidos, las personas deben hacer solo 3 cosas: <br />

              <b>a. Vincularse gratuitamente</b>, diligenciando el formulario a través de internet. <br />

              <b>b. Comprar los bienes y servicios que requieran</b>, a través de <b>GEM</b>. No existen consumos ni metas obligatorias. Solo las compras normales que ya vienen realizando para el hogar y sus diferentes actividades.  <br />

              <b>c. Invitar a otras personas a vincularse al Programa de Referidos</b>, también gratuitamente (familiares, vecinos, compañeros de estudio y trabajo, etc). 

              </p>

              <p>
              <b>No hay que hacer nada más. Es un trabajo fácil y sencillo que cualquier persona puede realizar</b>, que beneficiará a <b>GEM</b> y reportará a cada socio ingresos y beneficios permanentes.
              </p>


              <br />
              <div className="imagenesTamAb2">
                <img align="center"
                className="d-block w-100"
                height="300"
                src={nosotros2}
                alt="..."
                />
                </div> <br />

              
              <h4 align="center" id="colorred"><b> Somos una comunidad de ganadores: <br />
              obtenemos ingresos de por vida, solo con nuestras compras <br />
              y las de nuestros invitados
              </b></h4>

              <br />
              <h5 align="center" id="rojo"><b>Quiénes pueden ser socios</b></h5>
              <p>
              Libre y gratuitamente, pueden participar en el <b>Programa de Referidos:</b> <br />

              • Las personas mayores de 14 años <br />
              • Las empresas legalmente constituidas <br />
              • Las organizaciones sociales sin ánimo de lucro y del sector solidario

              </p>

              <br />

              <div className="imagenesTamAb3">
                <img align="center"
                className="d-block w-180"
                height="270"
                src={nosotros3}
                alt="..."
                />
                </div>
                <br />

              <h5 align="center" id="rojo"><b>MISIÓN</b></h5>
              <p>El <b>Programa de Referidos</b> es una oportunidad para que las personas y empresas consumidoras de bienes y servicios puedan establecer una relación de beneficio mutuo a largo plazo con el <b>Grupo Empresarial Mingga</b>, realizar sus compras normales en condiciones favorables y obtener ingresos permanentes que mejoren la capacidad de compra y calidad de vida.</p>
              <p>Para ello, operamos como una gran comunidad virtual de compradores con cobertura nacional y mundial, que permite la comercialización de bienes y servicios en mejores condiciones de acceso y bajo costo, lo cual beneficia tanto a los productores como a los consumidores.</p>
              <br />
              
              <h5 align="center" id="rojo"><b>ZEN DE MINGGA: NUESTRA FILOSOFÍA</b></h5>
              <p>
              ✓ <b>Es mejor ser socios que clientes</b>, apoyar el crecimiento de la empresa y obtener beneficios de por vida. <br />
              ✓ Las <b>personas y el mejoramiento de su calidad de vida son nuestra misión</b>. <br />
              ✓ Inversión 0%, Beneficios 100% de por vida, es nuestra fórmula. <br />
              ✓ <b>Mingga</b> es un escenario de <b>oportunidades para todos</b>. <br />
              ✓ En donde estemos, apoyamos la producción propia, para coadyuvar al <b>empleo y el desarrollo</b> de cada localidad, región y país. <br />
              ✓ La igualdad de oportunidades no es un objetivo: debe ser real. <br />
              ✓ Todas las operaciones en Mingga deben ser sencillas, fáciles y rápidas. <br />
              ✓ Todo debe hacerse en tiempo real.

              </p>

              

              </div>
              </div>  

              <br />
              
              


              
     <br />
     <br />
     <Contacto></Contacto>


              
             
    </div>
  );
}
