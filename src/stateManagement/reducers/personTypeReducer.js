import { PERSON_TYPE } from "../actions/getTypePerson";

const initialState = {
    typePerson: [],
    loading:false
}

export default function personTypeReducer (state = initialState, action){
    switch(action.type){
        case PERSON_TYPE:
            return {
                ...state,
                typePerson:action.payload,
                loading:false
            }
        default:
            return state
    }
}