import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import vinculate1 from "../../assets/contenido/vinculate1.jpg";
import { Link } from "react-router-dom";
import "./Joinus.css"





export default function Joinus() {
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
            <div className="privacy" align="left" id="padding">
            <h3  align="center"><b>Programa de Referidos <br />
            Vincúlate, queremos que seas nuestro <br />
            socio
            </b></h3>
            <br />
          
            <div className="imagenesTam">
            <img align="center"
            className="d-block w-100"
            height="250"
            src={vinculate1}
            alt="..."
            />
            </div>
            <br />
            <p>
            En todos los países del mundo, los seres humanos tenemos una característica común: necesitamos adquirir bienes y servicios para desarrollar nuestras diferentes actividades.
            </p>
            <p>
            A partir de esta necesidad que tenemos todos, el <b>Programa de Referidos Mingga</b> nos propone una alianza estratégica de beneficio mutuo a largo plazo: organizarnos libre y gratuitamente en una gran comunidad, y con solo nuestras compras normales y las de las personas que invitemos a unirse al Programa, podremos construir un ingreso de por vida, con el cual podremos comprar lo que necesitemos y mejorar nuestra calidad de vida. Sin invertir nada, y con un trabajo muy sencillo, fácil y rápido.
            </p>
            <p>
            Para lograrlo, <b>Mingga</b> invita a las personas mayores de 14 años, las empresas y las organizaciones sociales a que se vinculen al Programa de Referidos, con base en los siguientes parámetros: <br />
            • <b>El ingreso es libre y voluntario</b>. <br />
            • <b>La vinculación y permanencia es gratuita</b>: nunca hay que pagar ni invertir nada para ser socio del <b>Programa de Referidos</b>. El objetivo de GEM es aumentar sus ventas y lograr la fidelidad de compra, ofreciendo ingresos y beneficios a los socios, en proporción a su trabajo en favor del crecimiento de la empresa. <br />
            • <b>En cualquier momento nos podemos retirar</b>, con solo un click, sin tener que pedir permisos, pagar o cumplir requisito alguno. <br />
            • <b>No existen barreras o restricciones de ingreso</b>: toda persona mayor de 14 años y cualquier empresa u organización social legalmente constituida, pueden asociarse, independiente de su ubicación, actividad económica, nivel de ingreso, etc. <br />
            • <b>La vinculación se realiza por internet</b> en cualquier ciudad y país del mundo, diligenciando el formulario de registro, suministrando la información solicitada y aportando los documentos de soporte respectivos. Igualmente, vía internet se accede a los programas y servicios que ofrece <b>Mingga</b> a su comunidad, venciendo los obstáculos geográficos, políticos y culturales entre los seres humanos.

            </p>
            
            <br />
            <h4 align="center" id="rojo"><b> <i> Socios Mingga:
            Construimos un mejor futuro, fácilmente y sin ninguna inversión
            </i></b></h4>
            <br />
          
     


     </div>   
     </div> 
     <Contacto></Contacto>    
    </div>
  );
}