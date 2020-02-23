
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const loadCategories = () => {
    return async dispatch => {
        const response = await fetch(
            'https://5bcce576cf2e850013874767.mockapi.io/task/categories'
        );
        const resData = await response.json();
        dispatch({type:SET_CATEGORIES , data: resData});
    }
}