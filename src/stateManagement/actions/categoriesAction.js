export const GET_CATEGORIES = "GET_CATEGORIES";

export function categoriesAction (categories){
    return {
        type: GET_CATEGORIES,
        payload: categories
    }
}