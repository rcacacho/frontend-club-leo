import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import { postLogin, recoverPass } from '../../services/userServices';
import { useDispatch } from 'react-redux';
import "./SignIn.css";
import Contacto from '../contacto/Contacto';
import logonegro from '../../assets/png/logoempresarialnegro.png'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import { infoToken, infoUser } from '../../stateManagement/actions/infoUserAction';
import Modal from '../../components/Modal';

const initialState = {
    username: "",
    password: "",
};

export default function SignIn() {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState(initialState)
    const [errors, setErrors] = useState(initialState);
    const [modalUpdate, setModalUpdate] = useState(false)
    const [recoveryPass, setRecoveryPass] = useState({})

    function handleInputChange(input, e){
        e.preventDefault()
        setInput(prev=>({...prev, [input]:e.target.value}))
    }
    
    function handleRecovery(e){
        e.preventDefault()
        // setInput(prev=>({...prev, [input]:e.target.value}))
        setRecoveryPass(e.target.value)
    }
    

    const notify = () => {
        toast('Correo enviado', {
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
        toast('Usuario no existe', {
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

    const onSend = async (e) => {
        e.preventDefault()
        const error = {};
        if (!input.password) { error.password = "Requerido" };
        if (!input.username) { error.username = "Requerido" };
        if (!(Object.entries(error).length === 0)) { setErrors(error) }
        else {
            const user = await postLogin(input);
            if (user.isAuthenticated) {
                user.user.name=user?.user?.name?.reverse().join(" ")
                dispatch(infoUser(user.user))
                dispatch(infoToken(user.token))
                navigate('/Profile')
            }
            else if(user==="Username or password incorrect"){
                setErrors(prev=>({...prev, username:"Usuario o Password incorrecto"}))
                setErrors(prev=>({...prev, password:"Usuario o Password incorrecto"}))
            }
        }
    };
    async function recovery(){
        const recover = await recoverPass(recoveryPass)
        if(recover.message==="Error sending mail"){
            notifyError()
        }
        if(recover.message==="mail send"){
            notify()
            setModalUpdate(!modalUpdate)
        }
    }

    return (
        <div>
            <ToastContainer />
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
            <br></br>
            <div className="container-fluid" id="registroLoggin">
                        <div className="container">
                                <div className="container text-center">
                                    <p className="welcome"> Bienvenido a <b className="mingga">Mingga</b> </p>
                                </div>
                                
                                <label className="l-01"> <h5>Iniciar sesión</h5></label>
                                <p className="text">Mantén segura tu identidad corporativa.
                                El usuario y contraseña son personales e intransferibles.
                                </p>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Ingresa tu usuario o correo electrónico" onChange={(e)=>handleInputChange("username", e)} required/>
                                    <label >Ingresa con tu Usuario</label>
                                </div>
                                {errors.username ? <span className='textError'>{errors.username}</span> : <></>}

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" placeholder="Ingresa tu contraseña" onChange={(e)=>handleInputChange("password", e)} required/>
                                    <label >Ingresa tu contraseña</label>
                                    <Link href="/" className="password" onClick={()=>setModalUpdate(!modalUpdate)}>¿Olvidaste tu contraseña?</Link>

                                </div>
                                <br />

                                <div className="d-grid gap-2 col-6 mx-auto">
                                <button id="boton"
                                className="btn btn-primary btn-lg" onClick={onSend} type="submit">Ingresar</button>
                            </div>
                        </div>
            </div>
            <br />
        <br />
        <br />
        <br />
        <br />
        <Contacto></Contacto>
        <Modal
                estado={modalUpdate}
                cambiarEstado={setModalUpdate}
            >
                <Contenido>
                    <h1>Recuperar contraseña</h1>
                    <div className="form-floating mb-3">
                            <input 
                            className="form-control"
                            onChange={(e)=>handleRecovery(e)}/>
                            <label htmlFor="floatingInput">Nombre de usuario</label>
                        </div>
                    <div className='row'>
                        <Boton onClick={()=>recovery()}>Enviar un correo</Boton>
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
