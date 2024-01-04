import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import "./Benefits.css"
import beneficios1 from "../../assets/contenido/beneficios1.jpg";
import { Link } from "react-router-dom";



export default function Benefits() {
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
            <h3 align="center"><b>Programa de Referidos <br />
              Beneficios</b></h3>
            <br />
            <div className="imagenesTam">
            <img
            className="d-block w-100"
            src={beneficios1}
            height="250"
            alt="..."
            />
            </div>
            <br />
            <p>  El <b>Grupo Empresarial Mingga -GEM-</b> propone a sus clientes una alianza estratégica para el beneficio mutuo a largo plazo: pasar de ser compradores ocasionales para ser socios que contribuyen con el fortalecimiento de la empresa, y adquieren el derecho a participar en sus beneficios comerciales, construyendo un ingreso de por vida que permita realizar las compras de bienes y servicios que requieren y mejoren su calidad de vida personal y familiar. </p>
            <p> <b>Mingga</b> pide a los compradores solo dos cosas: comprar lo que necesiten en la empresa, e invitar a los familiares, vecinos y conocidos a que también lo hagan. Fácil y sencillo, sin necesidad de invertir nada.</p>
            <p>
            Por este trabajo que permitirá a GEM crecer en clientes y ventas, los socios del Programa de Referidos obtienen importantes beneficios permanentes: <br />
            •	<b>Comprar con descuento</b> y en condiciones favorables los bienes y servicios que requieren rutinariamente en sus diferentes actividades, a través de 	<b>GEM</b>. <br />

            •	<b>Ingreso acumulado</b> por las compras personales y las de las personas que invite a vincularse. Este ingreso es permanente y permite comprar los bienes y servicios que se requieran en las empresas GEM. Toda compra automáticamente genera un descuento que se acumula en tiempo real en su Cuenta Personal, y puede ser utilizado inmediatamente. Cada socio recibe el 20% del descuento otorgado por sus compras y las de sus invitados al Programa de Referidos. <br />

            •	<b>Crédito de consumo</b> para compras en las empresas GEM, con base en el promedio acumulado de ingresos en los últimos 3 meses, de acuerdo con el <a href="https://mingga.net/Credit">Reglamento de Crédito Mingga</a>.<br />

            •	<b>Apoyo comercial</b>. Las personas y empresas que produzcan y comercialicen bienes y servicios, pueden vincularse a GEM y ofrecerlos a la Comunidad Mingga, asegurando un gran mercado para hacer crecer su actividad. <br />

            •	<b>Club de Lectura Mingga</b>. En <a href="www.clubdelectura.mingga.org">www.clubdelectura.mingga.org</a>&nbsp;
            
            www.clubdelectura.mingga.org, los socios del Programa de Referidos pueden acceder a noticias y artículos sobre los autores y obras más importantes de las ciencias sociales y la literatura universal, y acceder a libros gratuitos para motivar la lectura y mejorar su nivel educativo y cultural, para hacer de Mingga una gran comunidad de Lectores.
            </p>
            <br />
            <br />
            <h3 align="center" id="rojo"><b>Comprar e Invitar <br />
            Las claves para construir un ingreso
            </b></h3>
            </div>
          
            </div>  
     <br />
     <Contacto></Contacto>


              
             
    </div>
  );
}