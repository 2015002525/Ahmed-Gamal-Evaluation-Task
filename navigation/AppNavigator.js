import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer }  from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Entypo} from '@expo/vector-icons';
import Colors from '../constants/Colors';     
          
import IntroAppScreen from '../screens/IntroAppSliderScreen';
import HomeScreen from '../screens/HomeScreen'; 
import CategoriesListScreen from '../screens/CategoriesListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';    
 
const defaultStackNavOptions = {  
    headerStyle: {   
      backgroundColor: Platform.OS === 'android' ? Colors.accentColor : ''
    },  
    headerTitleStyle: {   
      fontFamily: 'open-sans-bold'  
    },   
    headerBackTitleStyle: {   
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor,
    headerTitle: 'A Screen'
  };  
 
  const CategoryNavigator = createStackNavigator(
    {
      IntroApp: {
        screen: IntroAppScreen
      },  
      Category: {
        screen: HomeScreen
      },   
      ProductDetails: { 
        screen: ProductDetailsScreen 
      },
      categoriesList: {  
        screen: CategoriesListScreen
      },    
      Search: {   
        screen: SearchScreen
      }, 
      Cart: {  
        screen: CartScreen
      },
    },   
    {      
      // initialRouteName: 'Categories',
      navigationOptions: {  
        drawerIcon: drawerConfig => (   
          <Entypo 
            name= 'home'  
            size={23}
            color={drawerConfig.tintColor} 
          />
        )
      },
      defaultNavigationOptions: defaultStackNavOptions
    } 
  );

  const AppNavigator = createDrawerNavigator(
    {
      Home: CategoryNavigator,
    },
    {
      contentOptions: {
        activeTintColor: Colors.primary
      }
    } 
  );   
  

  export default createAppContainer(AppNavigator);