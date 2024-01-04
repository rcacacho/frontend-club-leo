import React, { useEffect, useState } from "react";
import image from "../../assets/png/logoempresarial.png";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import vinculate from "../../assets/comprar/vinculate.jpg";
import videos from "../../assets/comprar/videos.jpg";
import beneficios from "../../assets/comprar/beneficios.jpg";
import comprar from "../../assets/comprar/comprar.jpg";
import vender from "../../assets/comprar/vender.jpg";
import Autosuggest from 'react-autosuggest';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner_1 from "../../assets/comprar/BANNER1.jpg";
import banner_2 from "../../assets/comprar/BANNER2.jpg";
import banner_3 from "../../assets/comprar/BANNER3.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { getCities } from "../../services/registerService";
import { getIdCity } from "../../stateManagement/actions/IDCityAction";

export default function NavBar() {



  const dispatch = useDispatch()
   //escucha del evento de generar el pwa
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const countries = useSelector(state=>state.countriesReducer.country)

  const [cities, setCities] = useState()
  const [citiesComplete, setCitiesComplete] = useState()
    // const [selectCity, setSelectCity] = useState()
  const [value, setValue]= useState("");

  useEffect(() => {
      window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.

      //el eventprevent es para que cargue solo
      event.preventDefault();
      // console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' className from the install button container.
      setIsReadyForInstall(true);
      });
  }, []);

  async function downloadPwa(){
      // console.log("👍", "butInstall-clicked");
      const promptEvent = window.deferredPrompt;
      if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
      }
      // Show the install prompt.

      //el prompt solo puede ser escuchado una vez por sesión para no saturar con llamadas "descargame"
      promptEvent.prompt();
      // Log the result
      // const result = await promptEvent.userChoice;
      // console.log("👍", "userChoice", result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      setIsReadyForInstall(true);
  }

  async function countrySelect (id){
    const city = await getCities(id.target.value)
    setCities(city)
    setCitiesComplete(city)
    // setType(id.target.value) 
  }
  // function handleInputChange(e){
  //   dispatch(getIdCity(e.target.value))
  // }

  const filterCities = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    var filtrado= citiesComplete.filter(city=>{
        var textoCompleto = city.name

        if(textoCompleto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(inputValue)){
            return city
        }
        return false
    })
    return inputLength ===0 ? []: filtrado
  }

  const onSuggestionsFetchRequested = ({value})=>{
      setCities(filterCities(value))
  }

  const onSuggestionsClearRequested = ()=>{
      setCities([])
  }

  const getSuggestionValue = (suggestion) =>{
      return `${suggestion.name}`
  }

  const renderSuggestion=(suggestion)=>(
      <div className="form-control" onClick={()=>seleccionarCiudad(suggestion)}>
          {`${suggestion.name}`}
      </div>
  );
      
  const seleccionarCiudad=(city)=>{
      dispatch(getIdCity(city.id))
  }
      
  const onChange=(e, {newValue})=>{
      setValue(newValue);
  }

  const inputProps={
      placeholder:"Ciudad",
      value,
      onChange
  };

  const userInfo = useSelector(state=>state.infoUserReducer.user)
  const nameUser = userInfo?.name

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img
              src={image}
              width="280" height="100"
              alt="...."
            />
          {/* <form className="d-flex">
            <input
              size={31}
              className="form-control"
              type="search"
              placeholder="Proveedores, productos y servicios"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Buscar
            </button>
          </form> */}
          <div className="form-floating mb-3">
              <select name='select' 
              className="form-control"
              onChange={(e)=>countrySelect(e)}>
                  <option value='----'> ---- </option>
                  {countries?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}
              </select>
              <label htmlFor="floatingInput">País</label>
          </div>

          {citiesComplete? <div className="form-floating mb-3">
                  <Autosuggest 
                  suggestions={cities}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
              />
          </div>:<></>}
        </div>
      </nav>
      
      <b></b>

      {userInfo?<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Hola {nameUser}
          </Link>
          <Link to="/AboutUs" className="navbar-brand">
            Nosotros
          </Link>
          <Link to="/Profile" className="navbar-brand">
            Perfil
          </Link>
          <Link className="navbar-brand" href="/">
            Noticias
          </Link>
        </div>
      </nav>:
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/AboutUs" className="navbar-brand">
          <h4> <b>   Nosotros </b></h4>
          </Link>
          <Link to="/SignUp" className="navbar-brand">
          <h4><b> Vincúlate </b></h4>
          </Link>
          <Link to="/SignIn" className="navbar-brand">
          <h4> <b>   Ingresar </b></h4>
          </Link>
          <Link to="http://mingga.org/" className="navbar-brand">
          <h4><b> Noticias </b></h4>
          </Link>

          {isReadyForInstall && 
            <a  id="descargar" onClick={downloadPwa} href="/"><b>Descargar App</b></a>
          }
        </div>
      </nav>}
        

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner_2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner_3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
       


      <br />
  <div className="container-fluid">
  <h3>Bienvenidos a Mingga - Una gran comunidad de ganadores</h3>
  <br />
    <div className="grid">
      <div className="col">
        <div className="card">
        <Link to="/Joinus">
        <img 
              className="img-fluid"
              src={vinculate}
              alt="First slide"
            />
            </Link>
          <div className="card-body">
            <h5 className="card-title">
            <Link to="/Joinus">
              VINCÚLATE COMO SOCIO 
              </Link>
              </h5>
              <p className="card-text" id="card-text">Sin costo alguno y en cualquier parte del mundo, todo por internet. Sólo debes hacer 3 cosas sencillas... <Link to="/Joinus" className="navbar-brand">
              <b>  <u> ver más </u></b>
              </Link>
            </p>
          </div>
        </div>
      </div>

    <div className="col">
      <div className="card">
      <Link to="/Benefits">
      <img
            className="img-fluid"
            src={beneficios}
            alt="First slide"
          />
          </Link>
        <div className="card-body">
          <h5 className="card-title">
          <Link to="/Benefits">
            MIS BENEFICIOS
            </Link>
            </h5>
          <p className="card-text" id="card-text">Sin invertir nada y con un trabajo muy sencillo, Minga te ofrece importantes oportunidades y beneficios... <Link to="/Benefits" className="navbar-brand">
          <b>  <u> ver más </u></b>
          </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card" >
      <Link to="/Buy">
      <img
            className="img-fluid"
            src={comprar}
            alt="First slide"
          />
          </Link>
        <div className="card-body">
          <h5 className="card-title">
          <Link to="/Buy">
            DONDE COMPRAR
            </Link>
            </h5>
          <p className="card-text" id="card-text">En el hogar, el trabajo, el estudio cada vez que necesites algo, cómpralo en la Red Comercial Minga y siempre ganando... <Link to="/Buy" className="navbar-brand">
          <b>  <u> ver más </u></b>
          </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card">
      <Link to="/Sell">
      <img
            className="img-fluid"
            src={vender}
            alt="First slide"
          />
          </Link>
        <div className="card-body">
          <h5 className="card-title">
          <Link to="/Sell">
            VENDE EN MINGA
            </Link>
            </h5>
          <p className="card-text" id="card-text">Apoyamos a nuestros emprendedores, quienes pueden vender sus bienes  y servicios a la red de socios en todo el mundo... <Link to="/Sell" className="navbar-brand">
          <b>  <u> ver más </u></b>
          </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card">
      <Link to="/">
      <img
            className="img-fluid"
            src={videos}
            alt="First slide"
          />
          </Link>
        <div className="card-body">
          <h5 className="card-title">
          <Link to="/">
            MINGA VIDEOS
            </Link>
            </h5>
          <p className="card-text" id="card-text">Conoce a Minga y su Red Mundial de Bienestar, su equipo de trabajo, servicios, oportunidades y beneficios para los socios... <Link to="/" className="navbar-brand">
          <b>  <u> ver más </u></b>
          </Link>
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

</div>

  

  );
}
