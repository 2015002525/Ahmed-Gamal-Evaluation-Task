import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ProductDetailsScreen = props => {
  const productTitle = props.navigation.getParam('productTitle');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {productTitle}
      </Text>
    </View>
  );
};

ProductDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Product Details',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    fontFamily:'open-sans-bold',
    fontSize:20,

  }
})

export default ProductDetailsScreen;
