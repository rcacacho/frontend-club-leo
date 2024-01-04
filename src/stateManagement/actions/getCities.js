export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES  = "GET_CITIES";

export function getCountry (countries){
    return {
        type: GET_COUNTRIES,
        payload: countries
    }
}
export function getCity (cities){
    return {
        type: GET_CITIES,
        payload: cities
    }
}