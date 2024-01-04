import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { transactionsHistory } from '../../stateManagement/actions/getTrasactions';
import logonegro from '../../assets/png/logoempresarialnegro.png'
import './History.css'
import { Link } from 'react-router-dom';

export default function History() {

    const history = useSelector(state=>state.transactionsReducer.history)
    const userInfo = useSelector(state=>state.infoUserReducer.user)

    const [showHistory, setShowHistory] = useState(false)
    const [showBuy, setShowBuy] = useState(false)
    
    const moneyBuy = history.filter(buy =>buy.type==="Buy")
    const points = history.filter(buy =>buy.type==="PointsTransfer")
    
    return (
        <div>
            <nav className="navbar navbar-light" id="encabezado">
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
            <h2>Historial de transacciones en Mingga</h2>
            <br />

            <div className='perfil-usuario-footer'
                id="containerPerfil">
                <br />
                <div  id="contTabla" >
                    <button id="boton"
                    className="btn btn-primary btn-lg"
                    onClick={()=>setShowBuy(!showBuy)}>Mostrar historial compras referencias</button>
                    <br />
                    <br />
                    {showBuy ?<div>
                        <table className="tablaSocios" >
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <th>Tipo</th>
                                    <th>Comprado</th>
                                    <th>Destino</th>
                                    <th>Monto</th>
                                    <th>Fecha</th>
                                </tr>
                                {moneyBuy?.map((type, index)=> <tr key={type.id}>
                                    <th scope="row">{index+1}</th>
                                    <td value={type.id} >Compra de producto</td>
                                    {type.GeneratedBy===null? <td value={type.id} key={index}>{userInfo.username}</td>:<td value={type.id}>{type.GeneratedBy.username}</td>}
                                    <td value={type.id} >{type.Destination.username}</td>
                                    <td value={type.id} >{type.amount}</td>
                                    <td value={type.id} >{type.createdAt.substr(0,4)}/{type.createdAt.substr(5,2)}/{type.createdAt.substr(8,2)}</td>
                                </tr>)}
                                <tr>
                                    <td>         </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>:<></>}
                </div>
            </div>

            <button id="boton"
            className="btn btn-primary btn-lg"
            onClick={()=>setShowHistory(!showHistory)}>Mostrar historial envio puntos referencias</button>
            <br />
            <br />
            {showHistory ?<div>
                <table className="tablaSocios" >
                    <tbody>
                        <tr className="colorFilas">
                            <th scope="row"></th>
                            <th className="colorFilaSelect">Tipo</th>
                            <th className="colorFilaSelect">Origen</th>
                            <th className="colorFilaSelect">Destino</th>
                            <th className="colorFilaSelect">Monto</th>
                            <th className="colorFilaSelect">Fecha</th>
                        </tr>
                        {points?.map((type, index)=> <tr key={type.id}>
                            <th scope="row" key={index}>{index+1}</th>
                            <td key={index}>Envio de puntos</td>
                            {type.GeneratedBy===null? <td value={type.id} key={index}>{userInfo.username}</td>:<td value={type.id} key={index}>{type.GeneratedBy.username}</td>}
                            <td value={type.id} >{type.Destination.username}</td>
                            <td value={type.id} >{type.amount}</td>
                            <td value={type.id} >{type.createdAt.substr(0,4)}/{type.createdAt.substr(5,2)}/{type.createdAt.substr(8,2)}</td>
                        </tr>)}
                        <tr>
                            <td>         </td>
                        </tr>
                    </tbody>
                </table>
            </div>:<></>}
        </div>
    )
}