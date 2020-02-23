import { SET_INITIAL_SEARCH_LIST, SET_SEARCH_LIST } from '../actions/search';

const initialSearchState = {
    initList: []
};

export default (state = initialSearchState, action) => {
    switch (action.type) {
        case SET_INITIAL_SEARCH_LIST:
            return { 
                initList: action.data
            };
        case SET_SEARCH_LIST:
            console.log('from bar');
            var searchContent = action.data;
            var searchItems = [];
            for (const key in searchContent) {
                for (var productCount = 0; productCount < searchContent[key]['products'].length; productCount++) {
                    if (searchContent[key]['products'][productCount]['name'].toLowerCase().includes(action.searchKey.toLowerCase())) {
                        console.log(searchContent[key]['products'][productCount]['name']);
                        searchItems.push(
                            searchContent[key]['products'][productCount]
                        );

                    }
                }
            }
            return {
                initList:searchItems
            };

    }
    return state;
}