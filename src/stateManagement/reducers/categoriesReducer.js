import { GET_CATEGORIES } from "../actions/categoriesAction";

const initialState = {
    categories: [],
    loading: true
}

export default function categoriesReducer (state = initialState, action){
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
                loading:false
            }
        default:
            return state
    }
}