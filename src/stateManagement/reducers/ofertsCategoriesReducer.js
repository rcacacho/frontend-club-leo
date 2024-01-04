import { GET_OFERTS, GET_OFERTS_BY_CITY } from "../actions/ofertsCategoriesActions"

const initialState = {
    oferts:[],
    ofertsByCity:[],
    loading:true
}

export default function ofertsCategoriesReducer (state = initialState, action){
    switch(action.type){
        case GET_OFERTS:
            return {
                ...state,
                oferts:action.payload,
                loading:false
            }
        case GET_OFERTS_BY_CITY:
            return {
                ...state,
                ofertsByCity:action.payload,
                loading:false
            }
        default:
            return state
    }
}