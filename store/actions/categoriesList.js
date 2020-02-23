export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';
export const loadCategoriesList = (cat_ID) => {
    return async dispatch => {
        const response = await fetch(
            `https://5bcce576cf2e850013874767.mockapi.io/task/categories/${cat_ID}`
        );
        const resData = await response.json();
        dispatch({type:SET_CATEGORIES_LIST , data: resData['products']});
    }
} 