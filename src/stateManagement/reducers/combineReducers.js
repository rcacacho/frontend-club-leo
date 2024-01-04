import { combineReducers } from 'redux';

import countriesReducer from './countriesReducer'
import personTypeReducer from './personTypeReducer';
import infoUserReducer from './infoUserReducer';
import transactionsReducer from './transactionsReducer'
import descendentsReducer from './descendentsReducer'
import categoriesReducer from './categoriesReducer'; 
import ofertsCategoriesReducer from './ofertsCategoriesReducer'
import IDCityReducer from './IDCityReducer';

export default combineReducers({
    countriesReducer,
    personTypeReducer,
    infoUserReducer,
    transactionsReducer,
    descendentsReducer,
    categoriesReducer,
    ofertsCategoriesReducer,
    IDCityReducer,
})