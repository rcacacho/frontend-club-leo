import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
import { getAdditionalType, getCities, getCountries, getDocumentType, getPersonType, register } from '../../services/registerService'
import { Link, useNavigate } from 'react-router-dom';
import logonegro from '../../assets/png/logoempresarialnegro.png'
import "./SignUp.css"
import Select from "react-select"
import Contacto from '../contacto/Contacto';
import permiso from './AUTORIZACION A MENOR PARA INGRESAR COMO MIEMBRO DE MINGARMB.docx'
import { DebounceInput } from 'react-debounce-input';
import { getSearchPerson } from '../../services/searchPersonService';
import { getCountry } from '../../stateManagement/actions/getCities';
import { getTypePerson } from '../../stateManagement/actions/getTypePerson';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Autosuggest from 'react-autosuggest';

const initialState = {
    name: [
    ],
    documentNumber: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    DocumentTypeId: 0,
    RoleId: 3,
    PersonTypeId: 0,
    CityId: 0,
    CountryId: 0,
    AdditionalTypeId: 0,
    username: "",
    Partner: "",
    discount:{},
    Categories: [],
    docs: []
};

export default function SignUp() {

    const [showPass, setShowPass] = useState(false)

    const dispatch = useDispatch()

    async function country (){
        const [country, personType] = await Promise.all([
            getCountries(),
            getPersonType(),
        ]
        )
        dispatch(getCountry(country))
        dispatch(getTypePerson(personType))
    }
    useEffect(()=> {// eslint-disable-next-line react-hooks/exhaustive-deps
        country();}, [])

    const navigate = useNavigate()

    const notify = () => {
        toast('Usuario creado satisfactoriamente, se ha enviado a su correo un mensaje para validar la inscripción!', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyDocument = () => {
        toast('Usuario creado satisfactoriamente, estaremos enviando a tu correo un mensaje cuando tus documentos sean verificados!', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const notifyError = () => {
        toast('existe el usuario!', {
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

    const countries = useSelector(state=>state.countriesReducer.country)
    const loading = useSelector(state=>state.countriesReducer.loading)
    const personType = useSelector(state=>state.personTypeReducer.typePerson)
    const categories = useSelector(state=>state.categoriesReducer.categories)
    // const services = categories?.filter(service=> service.isService===true)
    const category = categories?.map(info => {return {value: info.id, label:info.name}})
    const vendedor = categories?.filter(service=> service.isService===false)
    const categorie = vendedor?.map(info => {return {value: info.id, label:info.name}})

    const [firstName, setfirstName]= useState()
    const [fileName, setFileName] = useState([])
    const [filePhoto, setFilePhoto] = useState([])
    const [firstLastName, setFirstLastName]= useState()
    const [representName, setRepresentName]= useState()
    const [representLastName, setRepresentLastName]= useState()
    const [permission, setPermission] = useState(false)
    const [partner, setPartner] = useState(false)

    const [input, setInput] = useState(initialState)
    const [errors, setErrors] = useState({});

    const [cities, setCities] = useState()
    const [citiesComplete, setCitiesComplete] = useState()
    // const [selectCity, setSelectCity] = useState()
    const [value, setValue]= useState("");
    const [additionalType, setAdditionalType] = useState()
    const [document, setDocument] = useState()
    const [secondDocument, setSecondDocument] = useState()
    const [type, setType] = useState()
    const [pass, setPassword] = useState()
    const [passValid, setPassValid] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // const dispatch = useDispatch()
    function onChangeCategory(value){
        setIsLoading(false)
        setErrors({})
        setInput(prev=>({...prev, Categories:value}))
    }

    function userName (input, e){
        setfirstName(prev=>({...prev, [input]:e.target.value}))
    }
    function userLastName (input, e){
        setFirstLastName(prev=>({...prev, [input]:e.target.value}))
    }

    function userRepresentName (input, e){
        setRepresentName(prev=>({...prev, [input]:e.target.value}))
    }
    function userRepresentLastName (input, e){
        setRepresentLastName(prev=>({...prev, [input]:e.target.value}))
    }

    function handleInputChange(input, e){
        setIsLoading(false)
        setInput(prev=>({...prev, [input]:e.target.value}))
    }
    function handleInputDiscount(inside, e){
        setIsLoading(false)
        setErrors({})
        // setInput(prev=>({...prev, [input]:e.target.value}))
        // setInput([...discount, {[input]:e.target.value}])
        input.discount[inside]=parseInt(e.target.value)
    }
    function passwordComparation(e){
        setIsLoading(false)
        const patron =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$"@ñÑç|~€,;:¬`+´[º·_{}!%*?&.¿'¡()=/#-])[A-Za-z\d$@Ññç|"~€,;:¬`+´[º·_{}!%*?&.¿'¡()=/#-]{8,15}/
        // const patron =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
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
        setIsLoading(false)
        setPassValid(0)
        setErrors({})
        if(pass===e.target.value){
            setInput(prev=>({...prev, [input]:e.target.value}))
        }
        else{
            setErrors(prev=>({...prev, [input]:"Las contraseñas son diferentes"}))
        }
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
        setIsLoading(false)
        setValue(newValue);
    }

    const inputProps={
        placeholder:"Ciudad",
        value,
        onChange
    };

    // const eventEnter=(e)=>{
    //     if(e.key == "Enter"){
    //         var split = e.target.value;
    //         console.log(split);
    //         var id = split.id
    //         setSelectCity(split);
    //         setInput(prev=>({...prev, CityId:id}))
    //     }
    // }
    // console.log(selectCity?.id);


    function date(inside, e){
        setIsLoading(false)
        setPermission(false)
        setErrors(prev=>({...prev, [inside]:""}))
        const fechaActual = new Date()
        const birth = new Date(e.target.value)
        if(input.PersonTypeId==="1"){
            if((birth.getMonth())===11 && (birth.getDate())===31){
                const date = `${(birth.getFullYear()+1)}/01/01`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getMonth()+1)<10 && (birth.getDate()+1)<10){
                const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getMonth()+1)<10){
                const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if((birth.getDate()+1)<10){
                const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
            else if ((birth.getMonth()+1)>=10 && (birth.getDate()+1)>=10){
                const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                setInput(prev=>({...prev, [inside]:date}))
            }
        }
        if(input.PersonTypeId==="2"){
            if((fechaActual.getFullYear()-birth.getFullYear())>=14){
                if((fechaActual.getFullYear()-birth.getFullYear())<18){
                    setPermission(true)
                }
                if((birth.getMonth())===11 && (birth.getDate())===31){
                    const date = `${(birth.getFullYear()+1)}/01/01`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getMonth()+1)<10 && (birth.getDate()+1)<10){
                    const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getMonth()+1)<10){
                    const date = `${birth.getFullYear()}/0${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if((birth.getDate()+1)<10){
                    const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/0${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
                else if ((birth.getMonth()+1)>=10 && (birth.getDate()+1)>=10){
                    const date = `${birth.getFullYear()}/${(birth.getMonth() + 1)}/${(birth.getDate()+1)}`
                    setInput(prev=>({...prev, [inside]:date}))
                }
            }
            else {
                setErrors(prev=>({...prev, [inside]:"Debe ser mayor de 14 años"}))
            }
        }
    }

    async function countrySelect (input,id){
        setIsLoading(false)
        const city = await getCities(id.target.value)
        setInput(prev=>({...prev, [input]:id.target.value}))
        setCities(city)
        setCitiesComplete(city)
        // setType(id.target.value)
        const documentType = await getDocumentType(id.target.value, type)
        const secondDocument = await getDocumentType(id.target.value, 2)
        setDocument(documentType)
        setSecondDocument(secondDocument)
    }

    async function additionalTypeInfo(input, id){
        setIsLoading(false)
        const typeInfo = await getAdditionalType(id.target.value)
        setInput(prev=>({...prev, [input]:id.target.value}))
        setType(id.target.value)
        setAdditionalType(typeInfo)
    }

    async function handleInputSend(e){
        setErrors({})
        setPartner(false)
        setIsLoading(false)
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            if(userSearch.remainingReferrals>0){
                setPartner(false)
                setInput(prev=>({...prev, Partner:e.target.value}))
            }
            else{
                setErrors(prev=>({...prev, Partner:"El socio que te invito ya concreto sus diez socios directos, ingresa un socio diferente o dejalo en blanco y continua "}))
                setPartner(true)
            }
        }
        if(userSearch.message==="Error getting user"){
            setErrors(prev=>({...prev, Partner:"Este Usuario no Existe"}))
            setPartner(true)
        }
    }
    async function handleInputUserName(e){
        setErrors({})
        setIsLoading(false)
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            setErrors(prev=>({...prev, username:"Este usuario ya existe"}))
        }
        if(userSearch.message==="Error getting user"){
            setInput(prev=>({...prev, username:e.target.value}))
        }
    }

    // Subida de archivos

    const onUpload = (e) => {
        e.preventDefault()
        setIsLoading(false)
        const cloudName = "dsuxfsvt1"; // replace with your own cloud name
        const uploadPreset = "ml_default"; // replace with your own upload preset

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
                    setFileName([...fileName, result.info.original_filename])
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
        setIsLoading(false)
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
        input.name=[]
        let errores = {}
        setIsLoading(true)
        if(firstName === "") errores.name="Ingrese nombre"
        if(input.documentNumber === "" ) errores.documentNumber="Ingrese Número de documento"
        if(input.email === "") errores.email="Ingrese Correo"
        if(input.phone === "") errores.phone="Ingrese Telefono"
        if(input.password === "") errores.password="Ingrese Contraseña"
        if(input.birthDate === "") errores.birthDate="Ingrese fecha"
        if(input.DocumentTypeId === 0) errores.DocumentTypeId="Ingrese Tipo de documento"
        if(input.RoleId === 0) errores.RoleId="Ingrese Rol"
        if(input.PersonTypeId === 0) errores.PersonTypeId="Ingrese Tipo de persona"
        if(input.CityId === 0) errores.CityId="Ingrese Ciudad"
        if(input.CountryId === 0) errores.CountryId="Ingrese País"
        if(input.RoleId ==="4" && input.Categories.length===0) errores.Categories="Ingrese servicios que ofrece"
        if(permission || (input.RoleId === "4" && input.PersonTypeId==="1") || (input.RoleId === "3" && input.PersonTypeId==="1")||(input.RoleId === "4" && input.PersonTypeId==="2")){
            if(input.docs.length<1){
                errores.docs="Falta documento"
            }
        }
        if((input.RoleId === "4" && input.PersonTypeId==="1") || (input.RoleId === "3" && input.PersonTypeId==="1")){
            if(input.representPhone===""){
                errores.representPhone="Falta Número telefonico"
            }
        }
        if(input.AdditionalTypeId === 0) errores.AdditionalTypeId="Ingrese Tipo de genero"
        if(partner) errores.Partner="Usuario Socio no existe"
        if(input.username === "") errores.username="Ingrese Nombre de Usuario"
        if(input.Categories.length!==Object.keys(input.discount)?.length) errores.discount = "Ingrese descuentos a cada servicio"
        if(Object.keys(errores).length === 0){
            if(firstLastName){
                input.name.push(firstLastName.lastName)
            }
            if(firstName){
                input.name.push(firstName.name)
            }
            if(representLastName){
                input.representName=[]
                input.representName.push(representLastName.lastName)
            }
            if(representName){
                input.representName=[]
                input.representName.push(representName.name)
            }
            try {
                const user = await register(input);
                if(user[0]?.path==="name") {
                    input.name=[]
                    setErrors(prev=>({...prev, name:"Nombre necesario"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="email") {
                    input.name=[]
                    setErrors(prev=>({...prev, email:"Correo invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="phone") {
                    input.name=[]
                    setErrors(prev=>({...prev, phone:"Número telefonico invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="password") {
                    input.name=[]
                    setErrors(prev=>({...prev, password:"Contraseña invalida, debe ser alfanumerica con símbolo"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="birthDate") {
                    input.name=[]
                    setErrors(prev=>({...prev, birthDate:"Fecha de nacimiento incorrecta"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="username") {
                    input.name=[]
                    setErrors(prev=>({...prev, username:"Nombre de usuario invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="documentNumber") {
                    input.name=[]
                    setErrors(prev=>({...prev, documentNumber:"Documento invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="representName") {
                    input.name=[]
                    input.representName=[]
                    setErrors(prev=>({...prev, representName:"Nombre del representante invalido"}))
                    setIsLoading(false)
                }
                if(user[0]?.path==="representEmail") {
                    input.name=[]
                    input.representName=[]
                    setErrors(prev=>({...prev, representEmail:"Correo del representante invalido"}))
                    setIsLoading(false)
                }
                if(user.message ==="Error creating user") {
                    input.name=[]
                    notifyError()
                    setIsLoading(false)
                }
                if(user.createdAt){
                    if(permission || (input.RoleId === "4" && input.PersonTypeId==="1") || (input.RoleId === "3" && input.PersonTypeId==="1")||(input.RoleId === "4" && input.PersonTypeId==="2")){
                        notifyDocument()
                        setInput({
                            name: [
                            ],
                            documentNumber: "",
                            email: "",
                            phone: "",
                            password: "",
                            birthDate: "",
                            DocumentTypeId: 0,
                            RoleId: 0,
                            PersonTypeId: 0,
                            CityId: 0,
                            CountryId: 0,
                            AdditionalTypeId: 0,
                            username: "",
                            discount:{},
                            Partner: "string",
                            Categories: [],
                            docs: []
                        })
                        // window.location.reload();
                        setTimeout(() => {
                            navigate('/')
                        },"6000");
                    }
                    else{
                        notify()
                        setInput({
                            name: [
                            ],
                            documentNumber: "",
                            email: "",
                            phone: "",
                            password: "",
                            birthDate: "",
                            DocumentTypeId: 0,
                            RoleId: 0,
                            PersonTypeId: 0,
                            CityId: 0,
                            CountryId: 0,
                            AdditionalTypeId: 0,
                            username: "",
                            discount: 0,
                            Partner: "string",
                            Categories: [],
                            docs: []
                        })
                        // window.location.reload();
                        setTimeout(() => {
                            navigate('/')
                        },"6000");
                    }
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        else{
            setErrors(errores)
        }
    }
    //////el socio que te invito ya concreto sus diez socios directos, ingresa un socio diferente o dejalo en blanco

    return (
        <div className="contenedor-formularios" >
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
            {loading? <Spinner animation="grow" variant="info" />:
            <div className="container-fluid"  id="registro">
                <h1>Registrate gratis</h1>

                <br/>
                <br/>
                <form id='login' className='formRegister'>


                        {errors.RoleId ? <span className='textError'>{errors.RoleId}</span> : <></>}
                    <div >
                    <label className="l-01"> <h5>Tipo de vinculación</h5></label>

                    <div className="form-floating mb-3">
                        <select name='select'
                        className="form-control"
                        onChange={(e)=>additionalTypeInfo("PersonTypeId",e)}>
                            <option value='----'> ---- </option>
                            {input.RoleId === "4"? personType?.map((type)=> { return type.name==="Juridica"?<option value={type.id} key={type.id}>{type.name}</option>  :<option value={type.id} key={type.id}>{type.name}</option>}):personType?.map((type)=><option value={type.id} key={type.id}>{type.name}</option>)}
                        </select>
                        <label htmlFor="floatingInput">Persona</label>
                    </div>
                        {errors.PersonTypeId ? <span className='textError'>{errors.PersonTypeId}</span> : <></>}

                    </div>


                    <div >
                        <label className="l-01"> <h5>Lugar de residencia</h5></label>

                        <div className="form-floating mb-3">
                            <select name='select'
                            className="form-control"
                            onChange={(e)=>countrySelect("CountryId",e)}>
                                <option value='----'> ---- </option>
                                {countries?.map((country)=> <option value={country.id} key={country.id}>{country.name}</option>)}
                            </select>
                            <label htmlFor="floatingInput">País</label>
                            {errors.CountryId ? <span className='textError'>{errors.CountryId}</span> : <></>}
                        </div>

                        {/* {cities? <div className="form-floating mb-3">
                            <select name='select'
                            className="form-control"
                            onChange={(e)=>handleInputChange("CityId", e)}>
                                <option> ---- </option>
                                {cities?.map((city)=> <option value={city.id} key={city.id}>{city.name}</option>)}
                            </select>
                            <label htmlFor="floatingInput">Ciudad</label>
                        </div>:<></>} */}
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
                        {errors.CityId ? <span className='textError'>{errors.CityId}</span> : <></>}
                    </div>


                <div>


                <label className="l-01"> <h5>Datos</h5></label>


                     {/* {input.PersonTypeId === 1 && nombreEmpresa()} */}
                    {input.PersonTypeId === "1" &&
                    <div>
                        <div className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="text" onChange={(e)=>userName("name", e)}/>
                            <label htmlFor="floatingInput">Nombre de la empresa</label>
                        </div>
                            {errors.name ? <span className='textError'>{errors.name}</span> : <></>}
                    </div>
                    }
                    {input.PersonTypeId === "2" &&
                        <div>
                            <div className="form-floating mb-3">
                                <input
                                className="form-control"
                                type="text" onChange={(e)=>userName("name", e)}/>
                                <label htmlFor="floatingInput">Nombres</label>
                            </div>
                                {errors.name ? <span className='textError'>{errors.name}</span> : <></>}
                            <div className="form-floating mb-3">
                                <input
                                className="form-control"
                                type="text" onChange={(e)=>userLastName("lastName", e)}/>
                                <label htmlFor="floatingInput">Apellidos</label>
                            </div>
                                {errors.lastName ? <span className='textError'>{errors.lastName}</span> : <></>}
                                {errors.lastName2 ? <span className='textError'>{errors.lastName2}</span> : <></>}
                        </div>
                    }

                    <div className="form-floating mb-3">
                        <select name='select'
                        className="form-control"
                        onChange={(e)=>handleInputChange("DocumentTypeId", e)}>
                            <option> ---- </option>
                            {document?.map((document)=> <option value={document.id} key={document.id}>{document.name}</option>)}
                        </select>
                        <label htmlFor="floatingInput">Tipo de documento</label>
                    </div>
                        {errors.DocumentTypeId ? <span className='textError'>{errors.DocumentTypeId}</span> : <></>}

                    <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        type="text" onChange={(e)=>handleInputChange("documentNumber", e)}/>
                        <label htmlFor="floatingInput">Número de documento</label>
                    </div>
                    {errors.documentNumber ? <span className='textError'>{errors.documentNumber}</span> : <></>}


                    {input.RoleId === "4" && input.PersonTypeId==="1"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como vendedor,
                        por favor anexa el <b>documento de existencia de empresa, representante legal o nit</b> de la empresa
                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                    {input.RoleId === "4" && input.PersonTypeId==="2"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como vendedor,
                        por favor anexa la <b>cédula o tarjeta profesional</b>
                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                    {input.RoleId === "3" && input.PersonTypeId==="1"?
                    <div className="form-floating mb-3">
                        <br />
                        <button
                        className="btn btn-secondary btn-lg"
                        onClick={onUpload}>Subir documento</button>
                        <br />
                        <br />
                        <div className="container text-center">
                        Para efectuar exitosamente tu registro como socio juridico,
                        por favor anexa el <b>Representante Legal</b> de la empresa.

                        </div>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                    </div>:<></>}

                        <div className="form-floating mb-3">
                        <input
                        className="form-control"
                        type="date" onChange={(e)=>date("birthDate", e)}/>
                        {input.PersonTypeId === "2"?<label htmlFor="floatingInput">Fecha de nacimiento</label>:<label htmlFor="floatingInput">Fecha de constitución</label>}
                    </div>
                        {errors.birthDate ? <span className='textError'>{errors.birthDate}</span> : <></>}
                        {permission?
                        <div className="form-floating mb-3">
                            <br />
                            {/* <button
                            className="btn btn-secondary btn-lg"
                            onClick={onUpload}>Subir documento</button> */}
                            <a href={permiso} download>Descargar Permiso</a>
                            <br />
                            <br />
                            <div className="container text-center">
                            Al ser mayor de 14 años y menor de 18 es necesario un permiso para continuar, por favor descargue el archivo, llénelo y subir el documento
                            </div>
                            <br />
                            <button
                            className="btn btn-secondary btn-lg"
                            onClick={onUpload}>Subir documento</button>
                        {errors.docs ? <span className='textError'>{errors.docs}</span> : <></>}
                        {fileName.length? fileName.map(file=> <span className='textValid'>Archivo: {file}, </span> ): <></>}
                        </div>:<></>}


                        <div className="form-floating mb-3">
                        <select name='select'
                        className="form-control"
                        onChange={(e)=>handleInputChange("AdditionalTypeId", e)}>
                            <option> ---- </option>
                            {additionalType?.map((type)=> <option value={type.id} key={type.id}>{type.name}</option>)}
                        </select>
                        {input.PersonTypeId === "2"?<label htmlFor="floatingInput">Genero</label>:<label htmlFor="floatingInput">Tipo de empresa</label>}
                    </div>
                        {errors.AdditionalTypeId ? <span className='textError'>{errors.AdditionalTypeId}</span> : <></>}


                        <div  className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="email" onChange={(e)=>handleInputChange("email", e)}/>
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        {errors.email ? <span className='textError'>{errors.email}</span> : <></>}



                        <div className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="number" onChange={(e)=>handleInputChange("phone", e)}/>
                            <label htmlFor="floatingInput">Número teléfono celular</label>
                        </div>
                        {errors.phone ? <span className='textError'>{errors.phone}</span> : <></>}

                        {input.RoleId === "4"?
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
                        {input.RoleId === "4"?
                        <div  className="form-floating mb-3">
                            <textarea
                            className="form-control"
                            type="email" onChange={(e)=>handleInputChange("description", e)}/>
                            <label htmlFor="floatingInput">Escribe una breve descripción de quien eres y servicios que ofreces</label>
                        </div>:<></>}
                        {input.RoleId === "4"?<div>
                            {input.PersonTypeId==="2" &&
                                <div  className="form-floating mb-3">
                                    <Select isMulti onChange={(values) => {
                                                onChangeCategory(values?.map((option) => option.value));
                                            }} options={category}/>
                                    <label htmlFor="floatingInput">Servicios que ofrece</label>
                                </div>
                            }
                            {input.PersonTypeId==="1" &&
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

                </div>

                {input.PersonTypeId==="1"?<div>
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

                        {errors.representEmail ? <span className='textError'>{errors.representEmail}</span> : <></>}
                        <div  className="form-floating mb-3">
                            <input
                            className="form-control"
                            type="text" onChange={(e)=>handleInputChange("representPhone", e)}/>
                            <label htmlFor="floatingInput">Número teléfono celular</label>
                        </div>
                        {errors.representPhone ? <span className='textError'>{errors.representPhone}</span> : <></>}
                    </div>
                </div>:<></>}

                <div>
                <label className="l-01"> <h5>Datos de vinculación a minggaRMB</h5></label>
                <div  className="form-floating mb-3">
                        {/* <input
                        className="form-control"
                        type="text" onChange={(e)=>handleInputChange("Partner", e)}/> */}
                        <DebounceInput className="form-control" debounceTimeout={500} onChange={(e)=>handleInputSend(e)}/>
                        <label htmlFor="floatingInput">Usuario que te invita</label>
                    </div>
                    {errors.Partner ? <span className='textError'>{errors.Partner}</span> : <></>}
                    <div className="form-floating mb-3">
                        <DebounceInput className="form-control" debounceTimeout={500} onChange={(e)=>handleInputUserName(e)}/>
                        {/* <input className="form-control" type="text" onChange={(e)=>handleInputChange("username", e)}/> */}
                        <label htmlFor="floatingInput">Crea tu usuario</label>
                    </div>
                        {errors.username ? <span className='textError'>{errors.username}</span> : <></>}

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
                    {input.RoleId === "4" && input.Categories?.length>0? input.Categories.map((info, index)=><div key={index} className="form-floating mb-3">
                        <DebounceInput className="form-control" debounceTimeout={500}
                        type="number" onChange={(e)=>handleInputDiscount(info, e)}/>
                        <label htmlFor="floatingInput">% descuento a Minga del {index+1} servicio ofrecido</label>
                    </div>):<></>}
                    {errors.discount ? <span className='textError'>{errors.discount}</span> : <></>}
                    <br />



                    <div className="container text-center">
                    * Cualquier información falsa o incorrecta dará lugar a la anulación de la vinculación.
                    </div>
                    <br />

                    <div className="container text-center">
                    Al hacer clic en <b>Registrarse</b>, aceptas los
                    <a href="/" className="m-0"> Términos y condiciones de uso</a> de Mingga.
                    </div>
                    <br />





                    {!isLoading? <button className="btn btn-primary btn-lg" onClick={onSend}>Registrarse</button> : <Spinner animation="grow" variant="info" />}
                    <br />
                    <br />
                </div>


                </form>
            </div>
            }
            <br />
        <br />
        <br />
        <Contacto></Contacto>
    </div>
    )
}