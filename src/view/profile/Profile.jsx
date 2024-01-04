import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Profile.css'
import logonegro from '../../assets/png/logoempresarialnegro.png'
import { Link, useNavigate } from 'react-router-dom'
import { getTransactions } from '../../services/ventaService'
import { transactionsHistory } from '../../stateManagement/actions/getTrasactions'
// import { descendentsGet } from '../../stateManagement/actions/getDescendents'
import { getDescendants } from '../../services/descendantsServices'
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { moneyTransfer, sendPoint } from '../../services/ventaService'
import { getSearchPerson } from '../../services/searchPersonService'
import { DebounceInput } from 'react-debounce-input'
import { infoUser, userLogOut } from '../../stateManagement/actions/infoUserAction'
import Modal from '../../components/Modal'
import { infoLoad } from '../../services/userServices'
import { getIdCity } from '../../stateManagement/actions/IDCityAction'
import { getMaxLoan, postLoan } from '../../services/loanServices'
// import { transactionsHistory } from '../../stateManagement/actions/getTrasactions';

export default function Profile() {

    const initialStatePB = {
        username: "",
        points: 0,
    };
    const initialState = {
        username: "",
        money:0,
        points: 0,
        categoryId : 0,
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userInfo = useSelector(state=>state.infoUserReducer.user)
    const token = useSelector(state=>state.infoUserReducer.token.token)
    // const user = useSelector(state=>state.infoUserReducer.user.token)
    const categories = useSelector(state=>state.categoriesReducer.categories)
    // const [category, setCategory] = useState([])
    let category=[]
    // const discount = userInfo?.discount
    // const [discount, setDiscount] = useState({})
    let discount ={}
    if(userInfo.discount){
        // setDiscount(userInfo.discount)
        discount=userInfo.discount
    }

    const [table, setTable] = useState([])
    const [buttonStop, setButtonStop] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [maxLoan, setMaxLoan] = useState(0)
    const [loan, setLoan] = useState({amount:0, numberQuotas:3})

    for (var key in discount) {
        for (let j = 0; j < categories.length; j++) {
            if(Number(key)===categories[j].id){
                category.push(categories[j])
            }
        }
    }
    var hash = {};
    category = category?.filter(function(current) {
    var exists = !hash[current.id];
    hash[current.id] = true;
    return exists;
    });

    async function infoTransfers (){
        try{
            const historyTransactions = await getTransactions(token)
            dispatch(transactionsHistory(historyTransactions))
        }
        catch(e){
            console.log(e);
        }
    }
    const descendent = async () =>{
        try{
            const descendents = await getDescendants(token)
            setTable(descendents)
        }
        catch(e){
            console.log(e);
        }
    }

    const maxLoanGet = async () =>{
        try{
            const maxLoan = await getMaxLoan(token)
            setMaxLoan(maxLoan)
        }
        catch(e){
            console.log(e);
        }
    }

    async function infoUpdate() {
        try {
            const info = await infoLoad(token, userInfo.id )
            info.name=info?.name?.reverse().join(" ")
            dispatch(infoUser(info))
        } catch (error) {
            console.log(error);
        }
    }


    useEffect( ()=>{
        infoTransfers();
        maxLoanGet();
        descendent();
        dispatch(getIdCity(userInfo.CityId));
        // eslint-disable-next-line
    }, [])

    const nameUser = userInfo?.name
    const greatGrandChilds =[]
    let grandChilds = 0
    let totalSocios = 0
    let porcent = 0

    for (let i = 0; i < table?.length; i++) {
        let countGreatGrandChilds = 0
        for (let j = 0; j < table[i]?.grandChilds?.length; j++) {
            countGreatGrandChilds=countGreatGrandChilds+(10-table[i].grandChilds[j].remainingReferrals)
        }
        grandChilds=grandChilds+table[i]?.grandChilds?.length
        greatGrandChilds.push(countGreatGrandChilds)
    }

    let totalGreatGrandChilds = greatGrandChilds.reduce((a, b) => a + b, 0);
    totalSocios = table?.length+grandChilds+totalGreatGrandChilds+1
    porcent = (totalSocios/1110)*100

    //busqueda usuario

    const notify = () => {
        toast('Transacción Exitosa!', {
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
    const notifyError = () => {
        toast('No cuenta con los puntos suficientes!', {
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
    const notifyCompra = () => {
        toast('Error reportando Compra!', {
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

    const [search, setSearch] = useState({})
    const [error, setError] = useState({})

    //SendPoints enviar dinero y comprar
    // const dispatch = useDispatch()


    const [send, setSend] = useState(initialStatePB)
    const [money, setMoney] = useState(initialState)

    async function handleInputSend(input, e){
        setError({})
        setSearch({})
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            setError({})
            setSearch(userSearch)
            setSend(prev=>({...prev, [input]:e.target.value}))
        }
        if(userSearch.message==="Error getting user"){
            setError(prev=>({...prev, [input]:"No existe el usuario"}))
        }
    }

    function handleInputPB(input, e){
        setError({})
        if(e.target.value<0){
            setError(prev=>({...prev, [input]:"Tienen que ser valores positivos"}))
        }
        else{
            setSend(prev=>({...prev, [input]:e.target.value}))
        }
    }

    function handleInputPBMoney(input, e){
        setError({})
        if(e.target.value<0){
            setError(prev=>({...prev, points:"Tienen que ser valores positivos"}))
        }
        else{
            setMoney(prev=>({...prev, [input]:e.target.value}))
        }
    }
    function logOut(){
        dispatch(userLogOut())
        navigate('/')
    }

    //saldo negativo
    const total = userInfo?.totalPoints-userInfo?.totalSpent

    // console.log(money);

    async function handleInputMoney(input, e){
        setSearch({})
        setError({})
        const userSearch = await getSearchPerson(e.target.value)
        if(!userSearch.message){
            setError({})
            setSearch(userSearch)
            setMoney(prev=>({...prev, [input]:e.target.value}))
        }
        if(userSearch.message==="Error getting user"){
            // setError("No existe el usuario")
            setError(prev=>({...prev, user:"No existe el usuario"}))
        }
    }

    async function onSend(){
        setButtonStop(true)
        const info = await sendPoint(send,token)
        if(info.data.message==="Error sending points"){
            notifyError()
            setButtonStop(false)
        }
        if(info.data.message==="Send complete"){
            setButtonStop(false)
            notify()
            setSend({
                username:"",
                points:0
            })
            await infoUpdate()
        }
    }
    async function onMoney(){
        setButtonStop(true)
        const info = await moneyTransfer(money,token)
        if(info.data.message==="Error transferring points"){
            notifyCompra()
            setButtonStop(false)
        }
        if(info.data.message==="Transfer complete"){
            notify()
            setButtonStop(false)
            setMoney({
                username:"",
                money:0,
                points:0,
                categoryId : 0,
            })
            await infoUpdate()
        }
    }

    const handleLoan = (input, e) =>{
        setLoan(prev=>({...prev, [input]:e.target.value}))
    }

    async function onSendLoan(){
        setButtonStop(true)
        await postLoan(token, loan)
        await infoUpdate()
        await maxLoanGet()
        setButtonStop(false)
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
            <br />

            <div className="container-fluid"  id="perfilForm">
                <section className='seccion-perfil-usuario'>
                    <div className='container-fluid'>
                        <label className="l-01"> <h2 id="miCuenta">MI CUENTA</h2></label>
                        <br />
                        <br />
                        {userInfo.profilePic?<img src={userInfo.profilePic} alt="imagen"/>:<></>}
                        <label className="l-01"> <h4>Mis datos personales</h4></label>
                        {userInfo ?
                        <div className='perfil-usuario-footer'
                        id="containerPerfil">
                                <div className='lista-datos' >
                                    <li><i className='icon-imagen'></i> <b>Nombres:</b> {nameUser}</li>
                                    <li><i className='icon-imagen'></i><b>Usuario:</b> {userInfo?.username}</li>
                                </div>
                                <div className='lista-datos'>
                                {userInfo.RoleId===3 &&
                                    <li id="left"><i className='icon-imagen'></i><b></b> Socio</li>
                                }
                                {userInfo.RoleId===4 &&
                                    <li id="left"><i className='icon-imagen'></i><b></b>Socio</li>
                                }
                                </div>
                        </div>
                        :<Spinner animation="grow" variant="info" />}
                        <br />


                        <label className="l-01"> <h4>Mi red personal RPB</h4></label>
                        <div className='perfil-usuario-footer'
                            id="containerPerfil">
                            <br />
                            <div  id="contTabla" >
                                <div>
                                    <table className="tablaSocios" >
                                        <tbody>
                                            <tr className="colorFilas">
                                                <th scope="row"></th>
                                                <th className="colorFilaSelect" >Socios invitados</th>
                                                <th className="colorFilaSelect" >III Grado</th>
                                                <th className="colorFilaSelect">IV Grado</th>
                                            </tr>
                                            {table?.length>0? table?.map((type, index)=> <tr className="tablaSociosNum" key={index}>
                                                                    <th  className="tablaSociosNumSelect" scope="row">{index+1}</th>
                                                                    <td value={type.id} key={type.id}>{type?.child?.username}</td>
                                                                    <td value={type.id} key={type.id}>{type?.grandChilds?.length}</td>
                                                                    <td value={type.id} key={type.id}>{greatGrandChilds[index]}</td>
                                            </tr>)
                                            :<tr><td><Spinner animation="grow" variant="info" /></td></tr> }
                                            <tr>
                                                <td>         </td>
                                                <th></th>
                                                <td>{grandChilds}</td>
                                                <td>{totalGreatGrandChilds}</td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th>Total socios en mi RPB</th>
                                                <td>{totalSocios}</td>
                                                <td>{Number.parseFloat(porcent).toFixed(2)}%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <div>
                                    <p>Te faltan {userInfo?.remainingReferrals} invitados para completar tu primer grado</p>
                                </div>
                            </div>
                        </div>


                        <br />
                        <label className="l-01"> <h4>Mis PBs</h4></label>
                        <div className='perfil-usuario-footer'
                            id="containerPerfil">
                            {userInfo?.Role?.name ==="Vendedor" ?<div className='lista-datos'>
                                {total<0?<li><i className='icon-imagen'></i><b>Recuerda que tienes una deuda de: </b> {total}</li>:<li><i className='icon-imagen'></i><b>Saldo total disponible:</b> {total}</li>}
                            </div>:
                            <div className='lista-datos'>
                                <li><i className='icon-imagen'></i><b>Acumulados:</b> {userInfo?.totalPoints}</li>
                                <li><i className='icon-imagen'></i><b>Gastados actual:</b> {userInfo?.totalSpent}</li>
                                <li><i className='icon-imagen'></i><b>Saldo total disponible:</b> {userInfo?.totalPoints-userInfo?.totalSpent}</li>
                            </div>}
                            <div className='lista-datos'>
                                <li><i className='icon-imagen'></i>Para ver el historial de tus transacciones en Mingga,
                                valida la informacion <Link to='/History'>aquí</Link>   </li>
                            </div>
                            <br />
                        </div>
                        <br />


                        <br />
                        <label className="l-01"> <h4>Solicitar un prestamo</h4></label>
                        {maxLoan?<div className='perfil-usuario-footer'
                            id="containerPerfil">
                            <div className='lista-datos'>
                                {<li><i className='icon-imagen'></i><b>Puedes solicitar hasta</b> {maxLoan}</li>}
                            </div>
                            <div className="form-floating mb-3">
                            <select name='select'
                        className="form-control"
                        onChange={(e)=>handleLoan("numberQuotas", e)}>
                            <option value='3'>3</option>
                            <option value='6'>6</option>
                        </select>
                        <label >Numero de cuotas</label>
                        <div>
                        <input type='number' className="form-control" id="InputPerfil" value={loan.amount} placeholder="Enviar PBs" onChange={(e)=>handleLoan("amount",e)}/>
                        <label >Valor</label>
                        </div>
                                    {!buttonStop?<button className="btn btn-warning btn-lg" id="buttonPerfil" onClick={onSendLoan}>Solicitar</button>: <Spinner animation="grow" variant="info" />}
                            </div>
                            <br />
                        </div>:<div>No tienes prestamos disponibles</div>}
                        <br />



                        <label className="l-01"> <h4>Transladar PBs a otro socio</h4></label>
                        <div className='perfil-usuario-footer'
                            id="containerPerfil">
                            <div className="container items-center">
                                <div className="form-floating mb-3">
                                    {/* <input className="form-control" id="InputPerfil" placeholder="Usuario a enviar PBs" onChange={(e)=>handleInputSend("username",e)}/>   */}
                                    <DebounceInput className="form-control" debounceTimeout={500} value={send.username} placeholder="Usuario a enviar PBs" onChange={(e)=>handleInputSend("username",e)}/>
                                    <label >Usuario a enviar PBs</label>
                                </div>
                                {error.username ? <span className='userInvalid'>{error.username}</span> : <span className='userValid'>Usuario: {search?.name?.join(" ")}</span>}
                                <br />
                                <div className="form-floating mb-3">
                                    <input type='number' className="form-control" id="InputPerfil" value={send.points} placeholder="Enviar PBs" onChange={(e)=>handleInputPB("points",e)}/>
                                    <label >Monto de PBs</label>
                                </div>
                                {error.points ? <span className='textError'>{error.points}</span> : <></>}
                                <br />
                                {!buttonStop?<button className="btn btn-warning btn-lg" id="buttonPerfil" onClick={onSend}>Enviar PBs</button>: <Spinner animation="grow" variant="info" />}
                            </div>
                        </div>
                        <br />

                        {userInfo?.Role?.name ==="Vendedor" ?<div>
                            <label className="l-01"> <h4>Reportar compras de Mingga</h4></label>
                            <div className='perfil-usuario-footer'
                                id="containerPerfil">
                                <div className="container items-center">
                                    <div className="form-floating mb-3">
                                        <select name='select'
                                        className="form-control"
                                        onChange={(e)=>handleInputPBMoney("categoryId",e)}
                                        >
                                            <option value='0'> ---- </option>
                                            {category?.map((category)=> <option value={category.id} key={category.id}>{category.name}</option>)}
                                        </select>
                                        <label htmlFor="floatingInput">Servicio ofrecido en el reporte</label>
                                        {/* {errors.CountryId ? <span className='textError'>{errors.CountryId}</span> : <></>} */}
                                    </div>
                                    {money.categoryId===0?<></>:<div>
                                        <div className="form-floating mb-3">
                                        <DebounceInput className="form-control" debounceTimeout={500} value={money.username} placeholder="Usuario que realizo la compra" onChange={(e)=>handleInputMoney("username",e)}/>
                                            <label >Usuario quien compra</label>
                                        </div>
                                        {error.user ? <span className='userInvalid'>{error.user}</span> : <span className='userValid'>Usuario: {search?.name?.join(" ")}</span>}
                                        <br />
                                        <div className="form-floating mb-3">
                                            <input type='number' className="form-control" id="InputPerfil" value={money.money} placeholder="Dinero Ingresado" onChange={(e)=>handleInputPBMoney("money",e)}/>
                                            <label >Dinero en Efectivo</label>
                                        </div>
                                        {error.points ? <span className='userInvalid'>{error.points}</span> : <></>}
                                        <div className="form-floating mb-3">
                                            <input type='number' className="form-control" id="InputPerfil" value={money.points} placeholder="PBs Ingresados" onChange={(e)=>handleInputPBMoney("points",e)}/>
                                            <label >PBs recibidos</label>
                                        </div>
                                        {error.points ? <span className='userInvalid'>{error.points}</span> : <></>}
                                        <br />
                                        {!buttonStop?<button className="btn btn-warning btn-lg" id="buttonPerfil" onClick={onMoney}>Comprar</button>: <Spinner animation="grow" variant="info" />}
                                    </div>}
                                </div>
                            </div>
                        </div>:<></>}
                    </div>

                    <div className="container -fluid" id="containerSelect">
                        <div className="row align-items-center" id="eleccion">
                            <div className="row">
                                <Link className="iconos" to='/EditProfile'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    width="40" height="40" fill="currentColor"
                                    className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                    <br />
                                    <b><h6>Actualizar datos</h6></b>
                                </Link>
                                <button className="btn btn-secondary btn-lg" onClick={()=>setModalUpdate(!modalUpdate)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                    </svg>
                                    <br />
                                    <b><h6>Cerrar Sesión</h6></b>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <br />
            <br />
            <br />
            <Modal
                estado={modalUpdate}
                cambiarEstado={setModalUpdate}
            >
                <Contenido>
                    <h1>Cerrar sesión</h1>
                    <p>Esta seguro de cerrar sesión?</p>
                    <div className='row'>
                        <Boton onClick={()=>logOut()}>Si</Boton>
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