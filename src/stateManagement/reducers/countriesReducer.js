import { GET_CITIES, GET_COUNTRIES } from "../actions/getCities";

const initialState = {
    country: [],
    cities:[],
    loading:false
}

export default function countriesReducer (state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                country:action.payload,
                loading:false,
            }
        case GET_CITIES:
            return {
                ...state,
                cities:action.payload,
            }
        default:
            return state
    }
}