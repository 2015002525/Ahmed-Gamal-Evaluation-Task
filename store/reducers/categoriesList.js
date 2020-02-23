import {SET_CATEGORIES_LIST } from '../actions/categoriesList';

const initialCategoriesListState = {
  categoriesListView: ""
};

export default (state = initialCategoriesListState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      //console.log(action.data);
      return {
        categoriesListView: action.data
      };
  }
  return state;
}