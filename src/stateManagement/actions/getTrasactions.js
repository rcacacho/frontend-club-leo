export const GET_TRANSACTIONS = "GET_TRANSACTIONS"

export function transactionsHistory(transactions){
    return {
        type: GET_TRANSACTIONS,
        payload: transactions
    }
}