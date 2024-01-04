import { GET_TRANSACTIONS } from "../actions/getTrasactions";

const initialState = {
    history:{},
    loading:false
}

export default function transactionsReducer (state = initialState, action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return {
                ...state,
                history:action.payload,
                loading:false
            }
        default:
            return state
    }
}