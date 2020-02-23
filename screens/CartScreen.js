import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';
import ProviderListItem from '../components/ProviderListItem';

const CartScreen = props => {
  const dispatch = useDispatch();
  const [cartItems, setcartItems] = useState('');
  const loadCatsList = useCallback(async () => {
    console.log("hi");
    const cartData = await AsyncStorage.getItem('cartDataList');
    setcartItems(JSON.parse(cartData));
    console.log(cartItems.length);
  },[dispatch]);

  useEffect(() => {
    loadCatsList();
  },[dispatch]);


  const renderGridItem = itemData => {
    return ( 
      <ProviderListItem
      image={itemData.item.img}
      title={itemData.item.title}
      price={itemData.item.price}
      weight={itemData.item.weight}
      onSelect={() => {
      }}
    />
  );

  };

  if(cartItems != null && cartItems.length > 0){
    return (
      <FlatList
      data={cartItems}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
    />
      );
  }else{
    return (
      <View style={styles.content}>
        <Text> 
          No Items Yet... Try To Add Some
        </Text>
      </View>
      );
  }


};

CartScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Cart',
  };
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fc6667'
  },
  tabTitle: {
    color: 'white'
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})

export default CartScreen;
