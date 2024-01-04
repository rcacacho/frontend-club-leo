import React from "react";
import logonegro from '../../assets/png/logoempresarialnegro.png'
import Contacto from '../contacto/Contacto';
import { Link } from "react-router-dom";



export default function Team() {
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
            <h3 align="center"><b>EQUIPO DE TRABAJO</b></h3>
            <br />
            <p>Conoce las personas del <b>Grupo Empresarial Mingga -GEM-</b> que crearon y trabajan para hacer del <b>Programa de Referidos Mingga</b> la mejor oportunidad de ingresos permanentes, en beneficio de todos sus socios.</p>
            <br />
            <h5 align="center"><b><i>EQUIPO DIRECTIVO</i></b></h5> 
            <br />

          
         
            <p><b>DIANA MARCELA ROMERO ROJAS</b> <br />
            <b>Gerente General.</b> <br />
            Economista (U. Javeriana, 2015), Abogada (U. Javeriana, 2016), Especialista en Gestión Pública (ESAP, 2016), Magister en Derecho Administrativo (U. Externado, 2023). 
            Experiencia profesional en entidades del sector público y privado. Socia fundadora del Grupo Empresarial Mingga GEM.<br />
            • gerencia@mingga.org
            </p>

            <p><b>HENRY ROMERO TRUJILLO</b> <br />
            <b>Director Programa de Referidos Mingga</b> <br />
            Administrador Público (ESAP, 1987), Ingeniero Industrial (U. Distrital, 1990), Especialista en Planeación Urbana y Regional (ESAP, 1991). 
            Trabajo como funcionario y consultor en entidades oficiales y empresas privadas. <b>Director del Programa de Referidos Mingga.</b>  <br />
            • referidos@mingga.org.
            </p>

            <h5 align="center"><b> <i>EQUIPO TECNOLÓGICO</i></b></h5>
            <br />

            <p><b>MILENA CHAVARRIA </b> <br />
            Ingeniera Sanitaria (U. Distrital, 2021). Líder en el desarrollo del front-end del portal institucional mingga.net. Experiencia en empresas de desarrollo de software y comercio electrónico.
            </p>
           
            <p><b>DAVID FIGUEROA</b> <br />
            Ingeniero de Sistemas (U. Distrital, 2020). Líder en desarrollo del back-end del portal mingga.net. Experiencia como programador en javascript, Node JS, PostgreSQL. 
            <br />
            <b>Portafolio profesional: <a href="https://davshn.com/">https://davshn.com/</a>&nbsp;</b>
            </p>

            <p><b>STEVEN JAIMES</b> <br />
            Ingeniero de Sistemas (U. Distrital, 2020). Líder en el desarrollo de la PWA de mingga.net. Experiencia como programador en javascript, Node JS, PostgreSQL.
            </p>

            </div>
            </div>

              
     <br />
     <Contacto></Contacto>


              
             
    </div>
  );
}
