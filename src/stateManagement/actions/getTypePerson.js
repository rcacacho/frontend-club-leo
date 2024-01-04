export const PERSON_TYPE = "PERSON_TYPE"

export function getTypePerson(personType){
    return {
        type: PERSON_TYPE,
        payload: personType
    }
}