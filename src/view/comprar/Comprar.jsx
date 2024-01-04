import React from "react";

import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import "./Comprar.css";
import { Link } from "react-router-dom";
// import { getOfertsByCity } from "../../services/ofertsCategoriesServices";
// import { ofertsActionByCity } from "../../stateManagement/actions/ofertsCategoriesActions";

export default function Comprar() {

  const categories = useSelector(state=>state.categoriesReducer.categories)
  const services = categories?.filter(service=> service.isService===true)
  const vendedor = categories?.filter(service=> service.isService===false)
  const ofertas = useSelector(state=> state.ofertsCategoriesReducer.oferts)
  // const ofertasCity = useSelector(state=> state.ofertsCategoriesReducer.ofertsByCity)
  // console.log(ofertasCity);
  const loadingOferts = useSelector(state=> state.ofertsCategoriesReducer.loading)
  const loadingCategories = useSelector(state=> state.categoriesReducer.loading)
  const id= useSelector(state=>state.IDCityReducer?.id)
  // async function offersByCity(id){
  //   const info = await getOfertsByCity(id)
  //   // setOffer(info);
  //   dispatch(ofertsActionByCity(info))
  // }

  // if(id>0){
  //   offersByCity(id)
  // }


  return (
    <div>
      <div className="container-fluid">
      <h3 align="left"><b>DÓNDE PUEDO COMPRAR</b> - Red Comercial Minga</h3>
      {loadingCategories ? <Spinner animation="grow" variant="info" />:
      <div className="grid_buy">
          {vendedor?.map(item=>
          <div className="col" key={item.id}>
            <div className="card" >
              <a href={item.url}>
                <img src={item.image} className="img-fluid" alt="..." />
              </a>
              {id>0?<Link to={`/${item.name}/${item.id}`} className="card-body">{item.name}</Link>:<div className="card-body">
                <p className="card-text" align="center" id="title-center"><b><i>{item.name}</i></b></p>
              </div>}
            </div>
          </div>)}
      </div> 
      }
      </div>

      <br />
      <div className="container-fluid">
      <h3 align="left"><b>PROMOCIONES Y OFERTAS</b> - Nuestros proveedores</h3>
      {loadingOferts ? <Spinner animation="grow" variant="info" />:
      <div className="grid_specials">
        
          {/* {id>0 && offer.length>0 && offer?.map(item=>
          <div className="col" key={item.id}>
            <div className="card">
              <a href={`https://${item.url}`} target="_blank" rel="noreferrer" >
                <img src={item.image} className="card-img-top" alt="..." />
              </a>
              <div className="card-body" align="center" id="title-center">
                <h6><b><i>{item.name}</i></b></h6>
              </div>
            </div>
          </div>)}
          {id>0 && offer.length===0 && <></>} */}
          {ofertas.length>0?ofertas?.map(item=>
          <div className="col" key={item.id}>
            <div className="card">
              <a href={`https://${item.url}`} target="_blank" rel="noreferrer" >
                <img src={item.image} className="card-img-top" alt="..." />
              </a>
              <div className="card-body" align="center" id="title-center">
                <p><b><i>{item.name}</i></b></p>
              </div>
            </div>
          </div>)
          :<></>}

        
      </div>     
      }
      </div>
      <br />


      {/* <div className="container-fluid">
      <h3 align="left"><b>SERVICIOS OFRECIDOS</b> - Profesionales y servicios</h3>   
      {loadingCategories ? <Spinner animation="grow" variant="info" />:
      <div className="grid_products">
          {services?.map(item=>
          <div className="col" key={item.id}>
            <div className="card">
              <a href={item.url}>
                <img src={item.image} className="card-img-top" alt="..." />
              </a>
              {id>0?<Link to={`/${item.name}/${item.id}`} className="card-body">{item.name}</Link>:<div className="card-body">
                <p className="card-text" align="center" id="title-center"><b><i>{item.name}</i></b></p>
              </div>}
            </div>
          </div>)}
      </div>
      }
      </div> */}

    </div>
);
}
