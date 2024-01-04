import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import { Link } from "react-router-dom";
import Contacto from '../contacto/Contacto';


export default function Credit() {
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
            <h3 align="center"><b>CONSEJO DIRECTIVO</b>
                <br />
                <br />


                <h4><b>ACUERDO  02</b></h4> </h3>
                <h4 align="center">(Octubre de 2023)</h4>
            <br />

            <h2 align="center"><b>Reglamento de crédito</b></h2>
                <br />


            <p>El Consejo Directivo del Grupo Empresarial Mingga –GEM -, en uso de las atribuciones otorgadas en los Estatutos Sociales de la empresa,
            </p>

            <h4 align="center"><b>CONSIDERANDO:</b></h4>
            <p>
            Que el Grupo Empresarial Mingga –GEM- es una empresa legalmente constituida, con personería jurídica y patrimonio propios, que tiene como objeto social la producción y comercialización de bienes y servicios al consumidor final.
            </p>
            <p>
            Que como estrategia de crecimiento y fidelización de compra, GEM ha creado el Programa de Referidos, que invita a los clientes a vincularse libre y gratuitamente, y contribuir al crecimiento de las ventas invitando a nuevos clientes.
            </p>
            <p>
            Que para hacer efectivo el  Programa de Referidos se debe establecer un Plan de Beneficios que haga atractiva la vinculación y motive a los clientes a contribuir al crecimiento de GEM.
            </p>
            <p>
            Que conforme a las normas legales vigentes, las personas naturales y jurídicas que desarrollen actividades productivas y comerciales pueden otorgar créditos a sus clientes con base en su propio patrimonio e ingresos operacionales, sin que puedan recurrir  a la captación de recursos del público, actividad restringida a las entidades de intermediación financiera autorizadas para dicha actividad por las autoridades oficiales.
            </p>

            <h4 align="center"><b>ACUERDA</b></h4>

            <p>
            Artículo 1. Objeto. Adoptar el Reglamento de Crédito para Socios del Programa de Referidos, como servicio que puede prestar el Grupo Empresarial Mingga -GEM-, en cumplimiento del objeto y fines misionales de la Empresa.
            </p>
            <p>
            Artículo 2. Destinación.  Los créditos que otorgue GEM podrán destinarse a la compra de bienes y servicios en las empresas del grupo, o transferirlos a otros socios. Para el efecto, el monto del crédito otorgado incrementará el saldo de Puntos de Bienestar (PBs) en la cuenta personal del socio solicitante. 
            </p>
            <p>
            Artículo 3. Fuente de Recursos. Para otorgar crédito a los socios, GEM utilizará como fuente de recursos su propio patrimonio, ingresos operacionales y el saldo de PBs que corresponde a los socios pero temporalmente está depositado en las cuentas de la Empresa mientras los respectivos socios los utilizan. En ningún caso GEM realizará actividades de intermediación financiera mediante la captación de recursos del público bajo ninguna modalidad.    
            </p>
            <p>
            Artículo 4. Monto del crédito.  GEM podrá conceder créditos por un monto de hasta 3 veces el promedio de los Puntos de Bienestar (PBs) ganados por el socio solicitante durante los últimos 90 días. El Consejo Directivo, a propuesta del Gerente General de la Empresa, determinará el valor máximo de los créditos que se otorguen a los socios.
            </p>
            <p>
            Artículo 5. Plazo de pago. El socio solicitante definirá el plazo de pago del crédito concedido, que será de 6 o 12 meses. La respectiva cuota mensual será descontada de la Cuenta de PBs del socio hasta la cancelación del crédito.
            </p>
            <p>
            Artículo 6. Tasa de interés. El Consejo Directivo, a propuesta del Gerente General de la empresa, determinará la tasa de interés a cobrar por los créditos que se otorguen a los socios del Programa de Referidos. En todo los casos se respetará los límites máximos de interés establecidos por las  autoridades, y que la misión de Mingga es facilitar a los socios la compra de los bienes y servicios que requieren para mejorar su calidad de vida personal y familiar.   
            </p>
            <p>
            Artículo 7. Vigencia. El presente Acuerdo rige a partir de la fecha.
            </p>
            <p>
            Artículo 8. Acuerdo aprobado por el Consejo Directivo en la reunión ordinaria realizada el  día 27 de octubre de dos mil veintitrés (2023).
            </p>


          


            </div>     
            </div>   

               <br />
     <Contacto></Contacto>   
    </div>
  );
}
