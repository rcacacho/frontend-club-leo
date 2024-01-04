import { ID_CITY } from "../actions/IDCityAction"

const initialState = {
    id:42143
}

export default function IDCityReducer (state = initialState, action){
    switch(action.type){
        case ID_CITY:
            return {
                id:action.payload,
            }
        default:
            return state
    }
}