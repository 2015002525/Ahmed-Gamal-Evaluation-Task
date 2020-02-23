export const SET_INITIAL_SEARCH_LIST = 'SET_INITIAL_SEARCH_LIST';
export const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
export const loadInitSearch = () => {
    return async dispatch => {
        const response = await fetch(
            'https://5bcce576cf2e850013874767.mockapi.io/task/categories'
        );
        const resData = await response.json();
        var initSearchItems = [];
        for (const key in resData) {
            for (var productCount = 0; productCount < resData[key]['products'].length; productCount++) {
                initSearchItems.push(
                    resData[key]['products'][productCount]
                );
 
            }
        } 
        dispatch({type:SET_INITIAL_SEARCH_LIST , data: initSearchItems});
    }
}

export const loadSearch = (searchWord) => {
    return async dispatch => {
        const response = await fetch(
            'https://5bcce576cf2e850013874767.mockapi.io/task/categories'
        );
        const resData = await response.json();
        dispatch({type:SET_SEARCH_LIST , data: resData , searchKey : searchWord});
    }
}