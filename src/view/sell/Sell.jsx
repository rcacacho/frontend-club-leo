import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import { Link } from "react-router-dom";
import vende1 from "../../assets/contenido/vende1.jpg";




export default function Sell() {
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
            <h3 align="center"><b>VENDE EN MINGA</b></h3>

            <h4 align="center"><b>Una oportunidad para fortalecer <br />
           las empresas de nuestros socios
           </b></h4>

            <br />
            <div className="imagenesTam">
                <img align="center"
                className="d-block w-100"
                height="250"
                src={vende1}
                alt="..."
                />
                </div> <br />

            <p>
            El Grupo Empresarial Mingga -GEM- tiene como misión producir y ofrecer los bienes y servicios que requieren las personas, empresas y organizaciones sociales en sus diferentes actividades, con criterios de precio, calidad y servicio competitivos.
            </p>
            <p>
            Teniendo en cuenta que al Programa de Referidos pueden vincularse personas y empresas del país y el mundo, GEM ofrece la oportunidad para que los socios vendan sus bienes y servicios a la comunidad Mingga a nivel local, nacional y mundial, con lo cual se espera contribuir con el fortalecimiento de sus empresas.
            </p>
            <br />
            <h5 align="center" id="rojo"><b>¿Cómo vender en Mingga?</b></h5>
            <p>
            • En la sección “Vincúlate” del portal mingga.net, selecciona la opción “Vendedor”.
            </p>
            <p>
            • Ingresa los datos de tu empresa y anexa el certificado sobre su existencia legal expedido por la autoridad competente.
            </p> 
            <p>
            • Ingresa los datos del representante legal, facultado para vincular la empresa a Mingga.
            </p>
            <p>
            • Registra tu sector de actividad, productos o servicios que ofreces, localización, página web y cuentas en redes sociales, y los demás aspectos que permitan a Mingga canalizar efectivamente las compras de los socios hacia tu comercio.
            </p>
            <p>
            • Ingresa el porcentaje que la empresa reconocen  a los socios del Programa de Referidos por las compras que realicen. Este valor se configura mediante la modalidad de cashback (retorno de dinero). <br />
            El sistema asignará un usuario y contraseña, con los cuales podrás informar a GEM sobre las compras de los socios y la gestión del pago de descuentos.
            </p>


          
            <br />

           

            
            <br />
            
            </div>
            </div>

              
     <br />
     <Contacto></Contacto>


              
             
    </div>
  );
}