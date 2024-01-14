import React, { useEffect } from 'react'
import { getCountries} from '../../services/registerService';
import { useDispatch } from 'react-redux';
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
    //const id= useSelector(state=>state.IDCityReducer?.id)

    async function countries (){
        const [categories, ofertas,country] = await Promise.all([
            //getCategories(),
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
        <div>

        <NavBar ></NavBar>
        <br />
        <br />
        <Comprar ></Comprar>
        <br />
        <br />
        <Vendedores ></Vendedores>
        <br />
        <Contacto></Contacto>
        </div>
    );
}
