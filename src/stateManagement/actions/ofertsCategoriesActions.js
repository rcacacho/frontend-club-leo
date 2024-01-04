export const GET_OFERTS = "GET_OFERTS";
export const GET_OFERTS_BY_CITY = "GET_OFERTS_BY_CITY";

export function ofertsAction (oferts){
    return {
        type: GET_OFERTS,
        payload: oferts
    }
}
export function ofertsActionByCity (oferts){
    return {
        type: GET_OFERTS_BY_CITY,
        payload: oferts
    }
}