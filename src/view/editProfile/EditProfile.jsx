import React, { useEffect, useState } from 'react'
import Autosuggest from 'react-autosuggest';
import logonegro from '../../assets/png/logoempresarialnegro.png'
// import "./SignUp.css"
import Select from "react-select"
import { useDispatch, useSelector } from 'react-redux';
import { getCities, getCountries, getDocumentType } from '../../services/registerService';
import { Link, useNavigate } from 'react-router-dom';
import { getCountry } from '../../stateManagement/actions/getCities';
import { editProfile } from '../../services/editProfileService';
import { userLogOut } from '../../stateManagement/actions/infoUserAction';
import Modal from '../../components/Modal';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { DebounceInput } from 'react-debounce-input';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { deleteUser } from '../../services/userServices';
// import Modal from 'react-modal';

export default function EditProfile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState({})
    const [errors, setErrors] = useState({});
    const [pass, setPassword] = useState()
    const [cities, setCities] = useState()
    const [citiesComplete, setCitiesComplete] = useState()
    // const [selectCity, setSelectCity] = useState()
    const [value, setValue]= useState("");
    const [passValid, setPassValid] = useState(0)
    const [showPass, setShowPass] = useState(false)
    const [buttonStop, setButtonStop] = useState(false)
    const [filePhoto, setFilePhoto] = useState([])

    //Modales
    const [modalUpdate, setModalUpdate] = useState(false)
    const notify = () => {
        toast('Actualización de datos realizada!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyVendedor = () => {
        toast('Actualización de datos, Se deshabilitara tu cuenta hasta que sean revisados tus documentos!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyDelete = () => {
        toast('tu usuario ha sido eliminado, si quieres reactivar tu cuenta tienes 30 días para volver, escribenos a minggarmb@gmail.com!', {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const userInfo = useSelector(state=>state.infoUserReducer.user)
    const token = useSelector(state=>state.infoUserReducer.token.token)
    const countries = useSelector(state=>state.countriesReducer.country)
    const categories = useSelector(state=>state.categoriesReducer.categories)
    // const services = categories?.filter(service=> service.isService===true)
    const category = categories?.map(info => {return {value: info.id, label:info.name}})
    const vendedor = categories?.filter(service=> service.isService===false)
    const categorie = vendedor?.map(info => {return {value: info.id, label:info.name}})

    async function country (){
        const [country] = await Promise.all([
            getCountries(),
            // getPersonType(),
        ]
        )
        dispatch(getCountry(country))
        const secondDocument = await getDocumentType(userInfo?.CountryId, 2)
        setSecondDocument(secondDocument)
        // dispatch(getTypePerson(personType))
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
        country();}, [])

    function handleInputChange(input, e){
        setInput(prev=>({...prev, [input]:e.target.value}))
    }

    const [representName, setRepresentName]= useState()
    const [representLastName, setRepresentLastName]= useState()
    const [secondDocument, setSecondDocument] = useState()

    function userRepresentName (input, e){
        setRepresentName(prev=>({...prev, [input]:e.target.value}))
    }
    function userRepresentLastName (input, e){
        setRepresentLastName(prev=>({...prev, [input]:e.target.value}))
    }

    function onChangeCategory(value){
        setErrors({})
        setInput(prev=>({...prev, Categories:value}))
    }

    async function countrySelect (input,id){
        const city = await getCities(id.target.value)
        setInput(prev=>({...prev, [input]:id.target.value}))
        setCities(city)
        setCitiesComplete(city)
        const secondDocument = await getDocumentType(id.target.value, 2)
        setSecondDocument(secondDocument)
    }

    function passwordComparation(e){
        // const patron =  /(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/
        const patron =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
        // const patron =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if(patron.test(e.target.value)){
            setPassValid(1)
            setPassword(e.target.value)
        }
        else{
            setPassValid(2)
        }
    }
    function passwordVerificated(input, e){
        setPassValid(0)
        setErrors({})
        if(pass===e.target.value){
            setInput(prev=>({...prev, [input]:e.target.value}))
        }
        else{
            setErrors(prev=>({...prev, [input]:"Las contraseñas son diferentes"}))
        }
    }

    function handleInputDiscount(inside, e){
        // setInput(prev=>({...prev, [input]:e.target.value}))
        // setInput([...discount, {[input]:e.target.value}])
        input.discount[inside]=parseInt(e.target.value)
    }

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
        // setSelectCity(city);
        setInput(prev=>({...prev, CityId:city.id}))
    }
        
    const onChange=(e, {newValue})=>{
        setValue(newValue);
    }

    const inputProps={
        placeholder:"Ciudad",
        value,
        onChange
    };

    const onUpload = (e) => {
        e.preventDefault()
        const cloudName = "dsuxfsvt1"; // replace with your own cloud name
        const uploadPreset = "ml_default"; // replace with your own upload preset
        input.docs=[]
        const myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                folder: 'Archivos',  // folder
                sources: [ "local"], // restrict the upload sources to URL and local files
                clientAllowedFormats: ["pdf", "docx"], //restrict uploading to image files only
                maxImageFileSize: 2000000,  //restrict file size to less than 2MB
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    // console.log("Done! Here is the pdf info: ", result.info);
                    // setInput(prev=>({...prev, docs:result.info.url}))
                    input.docs.push(result.info.url)
                    setErrors({})
                    myWidget.close()
                }
            }
            )
            myWidget.open()
    }
    const onUploadPhoto = (e) => {
        e.preventDefault()
        const cloudName = "dsuxfsvt1"; // replace with your own cloud name
        const uploadPreset = "ml_default"; // replace with your own upload preset
    
        const myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                folder: 'Archivos',  // folder 
                sources: [ "local"], // restrict the upload sources to URL and local files
                clientAllowedFormats: ["jpg"], //restrict uploading to image files only
                maxImageFileSize: 2000000,  //restrict file size to less than 2MB
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    // console.log("Done! Here is the pdf info: ", result.info);
                    // setInput(prev=>({...prev, docs:result.info.url}))  profilePic
                    setFilePhoto([...filePhoto, result.info.original_filename])
                    setInput(prev=>({...prev, profilePic:result.info.url}))
                    setErrors({})
                    myWidget.close()
                }
            }
            )
            myWidget.open()
    }

    async function onSend (e){
        e.preventDefault()
        setButtonStop(true)
        let errores = {}
        if((input.RoleId === "4" && !input.docs)) errores.docs="Falta documento"
        if(input.RoleId ==="4" && !input.Categories) errores.Categories="Ingrese servicios que ofrece"
        if(input.Categories.length!==Object.keys(input.discount)?.length) errores.discount = "Ingrese descuentos a cada servicio"
        if(Object.keys(errores).length === 0){
            if(input.RoleId==='4'){
                const user = await editProfile(input, token)
                if(user.data.message==='User updated'){
                    notifyVendedor()
                    setButtonStop(false)
                    dispatch(userLogOut())
                    setTimeout(() => {
                        navigate('/')
                    }, "3000");
                }
            }
            if(userInfo?.RoleId===3){
                const user = await editProfile(input, token)
                if(user.data.message==='User updated'){
                    notify()
                    setButtonStop(false)
                    setTimeout(() => {
                        navigate('/Profile')
                    }, "3000");
                }
            }
            if(userInfo?.RoleId===4){
                if(representLastName){
                    input.representName=[]
                    input.representName.push(representLastName.lastName)
                }
                if(representName){
                    input.representName=[]
                    input.representName.push(representName.name)
                }
                const user = await editProfile(input, token)
                if(user.data.message==='User updated'){
                    notify()
                    setButtonStop(false)
                    setTimeout(() => {
                        navigate('/Profile')
                    }, "3000");
                }
            }
        }
        else{
            setErrors(errores)
        }
    }

    async function deleteUserMingga(){
        await deleteUser(token)
        notifyDelete()
        dispatch(userLogOut())
        setTimeout(() => {
            navigate('/')
        }, "3000");
    }

    return (
    <div>
        <ToastContainer />
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
        <div className="container-fluid"  id="registro">
            <h1>Editar Perfil</h1>

            <br/>
            <br/>
            <form className='formRegister'>

                <div>


                    <label className="l-01"> <h5>Datos</h5></label>

                    {userInfo?.Role?.name==="Vendedor"?<></>:<div className="form-floating mb-3">
                        <select name='select'
                        className="form-control"
                        onChange={(e)=>handleInputChange("RoleId",e)}>
                            <option value={userInfo?.RoleId}> ---- </option>
                            <option value="4">Vendedor </option>
                        </select>
                        <label htmlFor="floatingInput">Añadir rol</label>
                    </div>}

                    <label className="l-01"> <h5>Lugar de residencia</h5></label>

                    <div className="form-floating mb-3">
                        <select name='select'
                        className="form-control"
                        onChange={(e)=>countrySelect("CountryId",e)}>
                            <option value={userInfo?.CountryId}> ---- </option>
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

                    {input.RoleId === "4" || userInfo.RoleId===4?
                    <div className="form-floating mb-3">
                        <br />
                        <button 
                        className="btn btn-secondary btn-lg"
                        onClick={onUploadPhoto}>Subir Foto</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Si deseas subir una foto para que los usuarios que requeriran tus servicios te conozcan
                        </div>
                        {filePhoto.length? filePhoto.map(file=> <span className='textValid'>Foto: {file}, </span> ): <></>}  
                    </div>:<></>}
                    {input.RoleId === "4" || userInfo.RoleId===4?
                    <div  className="form-floating mb-3">
                        <textarea  
                        className="form-control"
                        type="email" onChange={(e)=>handleInputChange("description", e)}/>
                        <label htmlFor="floatingInput">Escribe una breve descripción de quien eres y servicios que ofreces</label>
                    </div>:<></>}

                    {userInfo.PersonTypeId==="1"?<div>
                    <label className="l-01"> <h5>Representante Legal</h5></label>
                    <div>
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control"
                            type="text" onChange={(e)=>userRepresentName("name", e)}/>
                            <label htmlFor="floatingInput">Nombres</label>
                        </div>
                        {errors.representName ? <span className='textError'>{errors.representName}</span> : <></>}
                            
                        <div className="form-floating mb-3">
                            <input 
                            className="form-control"
                            type="text" onChange={(e)=>userRepresentLastName("lastName", e)}/>
                            <label htmlFor="floatingInput">Apellidos</label>
                        </div>
                        {errors.representName ? <span className='textError'>{errors.representName}</span> : <></>}
                        <div className="form-floating mb-3">
                            <select name='select' 
                            className="form-control">
                                <option value='----'> ---- </option>
                                {secondDocument?.map((document)=> <option value={document.id} key={document.id}>{document.name}</option>)}
                            </select>
                            <label htmlFor="floatingInput">Tipo de Documento</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                            className="form-control"
                            type="text" onChange={(e)=>handleInputChange("representDocumentNumber", e)}/>
                            <label htmlFor="floatingInput">Número de documento</label>
                        </div>
                        
                        <div  className="form-floating mb-3">
                            <input 
                            className="form-control"
                            type="email" onChange={(e)=>handleInputChange("representEmail", e)}/>
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        
                        <div  className="form-floating mb-3">
                            <input 
                            className="form-control"
                            type="text" onChange={(e)=>handleInputChange("representPhone", e)}/>
                            <label htmlFor="floatingInput">Número teléfono celular</label>
                        </div>
                        </div>
                    </div>:<></>}

                    {input.RoleId === "4"?<div>
                        {userInfo?.PersonTypeId===2 &&
                            <div  className="form-floating mb-3">
                                <Select isMulti onChange={(values) => {
                                            onChangeCategory(values?.map((option) => option.value));
                                        }} options={category}/>
                                <label htmlFor="floatingInput">Servicios que ofrece</label>
                            </div>
                        }
                        {userInfo?.PersonTypeId===1 &&
                            <div  className="form-floating mb-3">
                                <Select isMulti onChange={(values) => {
                                            onChangeCategory(values?.map((option) => option.value));
                                        }} options={categorie}/>
                                <label htmlFor="floatingInput">Servicios que ofrece</label>
                            </div>
                        }
                        {errors.Categories ? <span className='textError'>{errors.Categories}</span> : <></>}
                        <div  className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="text" onChange={(e)=>handleInputChange("address", e)}/>
                            <label htmlFor="floatingInput">Dirección Negocio</label>
                        </div>
                        <div  className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="text" onChange={(e)=>handleInputChange("website", e)}/>
                            <label htmlFor="floatingInput">Página Web del negocio</label>
                        </div>
                    </div>:<></>
                    }

                    {input.RoleId === "4" && userInfo?.PersonTypeId===2?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        ✓ Si vas a vender bienes y servicios, por favor adjunta: <b>a.</b> <b>RUT</b> y <b>cédula</b>.
                            <br />
                        ✓ Si vas a prestar servicios, por favor adjunta: <b>b.</b> <b>licencia profesional</b> y <b>cédula</b>.
                            <br />
                        ✓ En caso de vender bienes y servicios y también prestar servicios
                            por favor adjunta <b>a.</b> y <b>b.</b>.
                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}

                    </div>:<></>}
                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        type="text" onChange={(e)=>handleInputChange("phone", e)}/>
                        <label hmtlfor="floatingInput">Número teléfono celular</label>
                    </div>
                    {errors.phone ? <span className='textError'>{errors.phone}</span> : <></>}

                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        type={showPass ? "text" : "password"} onChange={(e)=>passwordComparation(e)}
                        />
                        <label htmlFor="floatingInput">Contraseña que incluya mínimo 8 carácteres entre 1 símbolo especial, 1 mayúscula y 1 número</label>


                        {/* aqui empieza ese ojo, el onclick es el que hace que se dispare el evento de cambio para ver o no */}
                        <div className="position-absolute pointer pwd-icon flex-end" onClick={() => setShowPass(!showPass)}>
                            {showPass ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>} Ver contaseñas
                        </div>
                        {/* aqui termina */}

                    </div>

                        {errors.password ? <span className='textError'>{errors.password}</span> : <></>}
                        {passValid===1?<span className='textValid'>Contraseña valida</span> : <></>}
                        {passValid===2?<span className='textError'>La contraseña no cumple con lo solicitado</span>:<></>}


                    {/* Por favor validar la contraseña que coincida
                    y tener en cuenta requisitos del backend
                    1 caracter especial, 1 matuscula, minimo 8 caracteres y 1 numero

                    */} 
                    <br />
                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        type={showPass ? "text" : "password"} onChange={(e)=>passwordVerificated("password", e)}/>
                        <label htmlFor="floatingInput">Confirmar contraseña</label>
                    </div>
                        {errors.password ? <span className='textError'>{errors.password}</span> : <></>}
                    {/* {input.RoleId === "4" || userInfo.RoleId ===4?<div  className="form-floating mb-3"> */}
                    {input.RoleId === "4" && input.Categories?.length>0? input.Categories.map((info, index)=><div key={index} className="form-floating mb-3">
                        <DebounceInput className="form-control" debounceTimeout={500}
                        type="number" onChange={(e)=>handleInputDiscount(info, e)}/>
                        <label htmlFor="floatingInput">% descuento a Minga del {index+1} servicio ofrecido</label>
                    </div>):<></>}
                    {errors.discount ? <span className='textError'>{errors.discount}</span> : <></>}
                        </div>


                    <div>

                    {!buttonStop? <button className="btn btn-primary btn-lg" onClick={onSend}>Confirmar Cambios</button>: <Spinner animation="grow" variant="info" />}
                    <br />
                    <br />
                    <br />
                </div>
            </form>
            <button className="btn btn-danger btn-lg" onClick={()=>setModalUpdate(!modalUpdate)}>Eliminar Cuenta</button>
        </div>
        {/* <Modal
            isOpen={modalUpdate}
            closeTimeoutMS={100000}
            onRequestClose={!modalUpdate}
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={()=>setModalUpdate(!modalUpdate)}>close</button>
            <div>Actualización de datos</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
        <Modal
            isOpen={modalVendedor}
        >
            <button onClick={()=>setModalVendedor(!modalVendedor)}>close</button>
            <div>Actualización de datos, Se deshabilitara tu cuenta hasta que sean revisados tus documentos</div>
        </Modal> */}
        <Modal
            estado={modalUpdate}
            cambiarEstado={setModalUpdate}
        >
            <Contenido>
                <h1>Eliminar cuenta</h1>
                <p>Esta seguro de eliminarla?</p>
                <div className='row'>
                    <BotonDelete onClick={()=>deleteUserMingga()}>Si</BotonDelete>
                    <Boton onClick={()=>setModalUpdate(!modalUpdate)}>No</Boton>
                </div>
            </Contenido>
        </Modal>
        
    </div>
    )
}

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;
const BotonDelete = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #dc2417;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;