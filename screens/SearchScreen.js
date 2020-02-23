import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProviderListItem from '../components/ProviderListItem';
import * as searchActions from '../store/actions/search';
import { SearchBar } from 'react-native-elements';

const SearchScreen = props => {
  const [searchValue, setsearchValue] = useState('');
  const categoriesContent = useSelector(state => state.search.initList);
  
  const updateSearch = searchKey => {
    setsearchValue(searchKey);
    dispatch(searchActions.loadSearch(searchKey));

  }
  const dispatch = useDispatch();
  
  const loadCats = useCallback(async () => {
    try {
      await dispatch(searchActions.loadInitSearch());
    } catch (err) {
    }
  }, [dispatch]);
  
  
  useEffect(() => {
     loadCats();
  }, [dispatch, loadCats])
  
  console.log("len from screen" +categoriesContent.length);

  const renderGridItem = itemData => {
    //console.log(itemData.index)
    return ( 
      <ProviderListItem
      title={itemData.item.name}
      image={itemData.item.product_img}
      price={itemData.item.price}
      weight={itemData.item.weight}
      onSelectCat={() => {
        props.navigation.navigate({
          routeName: 'ProductDetails',
          params: {
            productTitle: itemData.item.name
          }
        });
      }} 
      />
  );

  };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchValue}
        lightTheme
      />
      {
        !categoriesContent.length?
          <Text style={styles.noDataMsg}>no products found</Text>
        : <FlatList
        data={categoriesContent}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        style={{flex:1}}
      />
      }
    </View>
  );
};

SearchScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Search',
  }; 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,

  },
  noDataMsg:{
    fontSize: 25,
    flex:1,
    textAlign:'center',
    marginVertical:30
  }
})

export default SearchScreen;
