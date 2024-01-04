import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import "./Buy.css"
import comprar1 from "../../assets/contenido/comprar1.jpg";
import { Link } from "react-router-dom";


export default function Buy() {
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
            <h3  align="center"><b>¿DÓNDE COMPRAR?</b></h3>
            <br />
            <div className="imagenesTam">
                <img align="center"
                className="d-block w-100"
                height="270"
                src={comprar1}
                alt="..."
                />
                </div> <br />
                <p>
                En el <b>Programa de Referidos Mingga</b> no existen compras mínimas ni obligaciones de ningún tipo. Pero cada vez que un socio necesite algo, puede adquirirlo a través de las empresas de la Red Comercial con las cuales GEM haya celebrado convenio de descuento por compras al por mayor.
                </p>
                <p>
                El reto es que a través de la red comercial GEM se pueda adquirir cualquier bien o servicio que los socios requieran en el hogar, el estudio, el trabajo y las demás actividades que realicen.
                </p>
                Para ello, la Empresa celebra convenios especiales con los proveedores de bienes y servicios (que pueden ser los mismos socios) para que los miembros de la comunidad puedan realizar sus compras, utilizar sus Puntos de Bienestar PBs, y seguir obteniendo ingresos por cada compra que se realicen (descuento).
                <p>
                En las empresas vinculadas a la Red Comercial Mingga, los socios pueden realizar sus compras, con dos beneficios: <br />
                •  Toda compra genera un descuento según el convenio que Mingga celebre con la empresa, y el socio recibe el 20%, por sus compras y las de todas sus invitados al Programa de Referidos .<br />
                • Las empresas reciben los PBs de los socios para el pago de sus bienes y servicios.
                </p>
                <p>
                Los proveedores pueden ser físicos (tiendas tradicionales) o digitales (portales de comercio electrónico).
                </p>
                <p>
                Cada proveedor se identifica con el logo de <b>Mingga</b> para indicar a los socios que hace parte de la Red Comercial.
                </p>
                <p>
                Al realizar sus compras, la persona manifiesta al proveedor que es socio del <b>Programa de Referidos Mingga</b> y que utilizará sus PBs para pagar. A través de la PWA, el socio transfiere al vendedor los PBs que utilizará en la compra.  
                </p>
                <p>
                El vendedor reporta la venta realizada a <b>GEM</b>, con los siguientes datos : Valor total (sin impuestos) = PBs utilizados + efectivo.
                </p>
                <p>
                Con estos datos, el sistema calcula el porcentaje de descuento pactado, y lo distribuye entre los socios del Programa de Referidos, aumentando automáticamente el saldo de PBs en la cuenta personal del socio.
                </p>
                
            
            

            </div>
            </div>

              
     <br />
     <Contacto></Contacto>


              
             
    </div>
  );
}