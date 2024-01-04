export const ID_CITY = "ID_CITY"

export function getIdCity(id){
    return {
        type: ID_CITY,
        payload: id
    }
}