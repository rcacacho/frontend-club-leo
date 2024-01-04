import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logonegro from '../../assets/png/logoempresarialnegro.png'
import { useSelector } from 'react-redux';
import { getCategoryService } from '../../services/ofertsCategoriesServices';
// import "./Category.css"

export default function Category() {

    const { name, id } = useParams();
    // const userInfo = useSelector(state=>state.infoUserReducer.user)
    // const token = useSelector(state=>state.infoUserReducer.token.token)
    const idCity= useSelector(state=>state.IDCityReducer?.id)
    const [infoGet, setInfoGet] = useState([])

    async function getInfoUser(){
        const info = await getCategoryService(idCity, id)
        setInfoGet(info.data)
    }

    useEffect(() => {
        getInfoUser();
        // eslint-disable-next-line
    }, []);

    

    return (
        <div>
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
            <h1>{name}</h1>
            {infoGet? infoGet?.map(item=>
                // <div className='column'>
                //     <span>{item.name}</span>
                //     <span>{item.address}</span>
                //     <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer">{item.website}</a>
                // </div>
                // <div className="card" >
                //     <div className="card-body">
                //         <h5 className="card-title">{item.name}</h5>
                //         <p className="card-text">{item.address}</p>
                //         <a href={`https://${item.website}`} rel="noopener noreferrer" className="btn btn-primary">{item.website}</a>
                //     </div>
                // </div>
                <div className="col" key={item.id}>
                    <div className="card">
                    {/* <a href={item.url}>
                        <img src={item.image} className="card-img-top" alt="..." />
                    </a> */}
                        <div className="card-body" align="center" id="title-center">
                            <img src={item.profilePic} alt="imagen"/>
                            <h6><b><i>{item.name}</i></b></h6>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.address}</p>
                            <p className="card-text">{item.description}</p>
                            {item.website? <a href={`https://${item.website}`} rel="noopener noreferrer" className="btn btn-primary">{item.website}</a>:<></>}
                        </div>
                    </div>
            </div>
            )
            :<></>}
        </div>
    )
}
