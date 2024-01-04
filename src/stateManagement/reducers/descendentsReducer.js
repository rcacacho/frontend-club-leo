import { GET_DESCENDENTS } from "../actions/getDescendents";

const initialState = {
    descendents:{}
}

export default function descendentsReducer (state = initialState, action){
    switch(action.type){
        case GET_DESCENDENTS:
            return {
                ...state,
                descendents:action.payload,
            }
        default:
            return state
    }
}