import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';
 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
 

import categoriesReducer from './store/reducers/categories';
import categoriesListReducer from './store/reducers/categoriesList';
import searchReducer from './store/reducers/search';

 
const rootReducer = combineReducers({
  categories:categoriesReducer,
  categoriesList: categoriesListReducer,
  search :searchReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  }); 
};
   
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
