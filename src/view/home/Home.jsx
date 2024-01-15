import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import logo from "../../assets/logoleo.png";
import { Link } from "react-router-dom";
import "./Home.css"



import React, { useEffect } from 'react'
import { getCategories, getCountries} from '../../services/registerService';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../navBar/NavBar';
import Comprar from '../comprar/Comprar';
import Vendedores from '../vendedores/Vendedores';
import Contacto from '../contacto/Contacto';
import { categoriesAction } from '../../stateManagement/actions/categoriesAction';
// import { getOferts } from '../../services/ofertsCategoriesServices';
import { getOfertsByCity } from '../../services/ofertsCategoriesServices';
import { ofertsAction } from '../../stateManagement/actions/ofertsCategoriesActions';
import { getCountry } from '../../stateManagement/actions/getCities';


export default function Home() {

    const dispatch = useDispatch()
    const id= useSelector(state=>state.IDCityReducer?.id)

    async function countries (){
        const [categories, ofertas,country] = await Promise.all([
            getCategories(),
            getOfertsByCity(id),
            getCountries(),
        ]
        )
        dispatch(categoriesAction(categories))
        dispatch(ofertsAction(ofertas))
        dispatch(getCountry(country))
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
        countries();}, [id])
    
    return (

        <div id='paginaprincipal'>
      <div>

      <div className="container-fluid">
        <br />

        <div className="row">
          <div className="col-lg-6 col-md-6">
          <Link to="/" className="container-fluid">
                    <img
                    align="left"
                    src={logo}
                    width="340"
                    height="600"
                    className="img-fluid d-block mx-auto"
                    alt='logo'
                    />
                </Link>
          </div>
          <div className="col-lg-6 col-md-6">
          <div className="social-links mt-3" align="right">
              <Link to="/">
              <svg  id="color"
              xmlns="http://www.w3.org/2000/svg" 
              width="35" height="35" fill="currentColor" class="bi bi-envelope-fill" 
              viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link to="/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
              class="bi bi-lock" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              

              <Link to="/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
              class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link to="/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
              class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/">
              <svg id="color"
              xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
              class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            </div>
            
          </div>

          </div>
          
              
              
    </div >
    <br />
    


    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <Link to="httpS://www.vamosaleer.co/" className="navbar-brand">
          <h4> <b>   Vamos a leer </b></h4>
          </Link>
          <Link to="/SignUp" className="navbar-brand">
          <h4><b> Librería </b></h4>
          </Link>
          <Link to="/SignIn" className="navbar-brand">
          <h4> <b>   Aliados </b></h4>
          </Link>
          <Link to="http://mingga.org/" className="navbar-brand">
          <h4><b> Educación </b></h4>
          </Link>
          <Link to="/AboutUs" className="navbar-brand">
          <h4> <b>   Bibliotecas </b></h4>
          </Link>
          <Link to="/AboutUs" className="navbar-brand">
          <h4> <b>   Demo </b></h4>
          </Link>
          <Link to="/AboutUs" className="navbar-brand">
          <h4> <b>   Videos </b></h4>
          </Link>
        </div>
      </nav>
      </div>

    <div className="row" id="margin">
      
    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin"> 
     
      <Link to="/AboutUs">
      <img id="photo"
            className="img-fluid"
            src={banner1}
            alt="First slide"
          
          />
        </Link>
       
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      <Link to="/JoinUs">
      <img id="photo"
                    src={banner2}
                    width="290"
                    height="550"
                    className="img-fluid d-block mx-auto"
                    alt='logoMingga'
                    />
          </Link>

          
      
      </div>
    </div>

    <div className="col-sm-12 col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4" id="margin">
      <div className="card" id="photo">
      <Link to="/">
      <img
            className="img-fluid"
            src={banner3}
            alt="First slide"
            id="photo"
          />
          </Link>
        
      </div>
    </div>

</div>

          <br />
          <h4 id="titulo"> <b> <h2><b>ClubLeo</b></h2>
            Somos una comunidad mundial en acción <br />
          <h4>Promovemos la lectura, la escritura y el multilingüismo, para construir <br />
          entre todos un mundo más educado y culto, progresista y pacífico</h4> <br />
          </b> 
          </h4>


      </div>
      
    </div>
        
    );
}
