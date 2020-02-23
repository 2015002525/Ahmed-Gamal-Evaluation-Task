import {SET_CATEGORIES } from '../actions/categories';

const initialCategoriesState = {
  categoriesList: ""
};

export default (state = initialCategoriesState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      //console.log(action.data);
      return {
        categoriesList: action.data
      };
  }
  return state;
}