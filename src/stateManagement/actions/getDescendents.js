export const GET_DESCENDENTS = "GET_DESCENDENTS"

export function descendentsGet(transactions){
    return {
        type: GET_DESCENDENTS,
        payload: transactions
    }
}