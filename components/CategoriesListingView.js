import React ,{useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Alert,
  AsyncStorage
  
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoriesListingView = props => {
  const [colorState , setColorState] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={{ flex: 1 }}
        onPress={props.onSelectCat}
      >
        <View style={styles.imageContainer}>
          <Image resizeMode='contain' source={{ uri: props.image }} style={styles.img} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.name}
          </Text>
          <View style={styles.headingCardContainer}>
            <Text style={styles.title}>
              {props.weight}
            </Text>
            <TouchableOpacity
              onPress={async () => {
                const cartData = await AsyncStorage.getItem('cartDataList');
                if (!cartData) {
                  console.log("nothing");
                  const productToBeSaved = {
                    id: props.id,
                    title: props.name,
                    img: props.image,
                    price: props.price,
                    weight: props.weight
                  }
                  const existingProducts = await AsyncStorage.getItem('cartDataList');
                  let newProduct = JSON.parse(existingProducts);
                  console.log(newProduct);
                  if (!newProduct) {
                    newProduct = []
                  }
                  newProduct.push(productToBeSaved)
                  await AsyncStorage.setItem('cartDataList', JSON.stringify(newProduct) )
                    .then(() => {
                      console.log('It was saved successfully');
                      Alert.alert("Market App","Added to your cart successfully");
                      setColorState(true);
                    })
                    .catch(() => {
                      console.log('There was an error saving the product')
                    });
                } else {
                  console.log("found");
                  const productToBeSaved = {
                    id: props.id,
                    title: props.name,
                    img: props.image,
                    price: props.price,
                    weight: props.weight
                  }
                  const existingProducts = await AsyncStorage.getItem('cartDataList');
                  let newProduct = JSON.parse(existingProducts);
                  console.log(newProduct);
                  if (!newProduct) {
                    newProduct = []
                  }
                  const productIndex = newProduct.findIndex(
                    prod => prod.id === props.id
                  );
                  console.log("is here " +productIndex);
                  if(productIndex > -1){
                    newProduct.splice(productIndex, 1);
                    await AsyncStorage.setItem('cartDataList', JSON.stringify(newProduct) )
                    .then(() => {
                      console.log('It was saved successfully');
                      Alert.alert("Market App","Removed from your cart successfully");
                      setColorState(false);
                    })
                    .catch(() => {
                      console.log('There was an error saving the product')
                    });
                  }else{
                    newProduct.push(productToBeSaved)
                    await AsyncStorage.setItem('cartDataList', JSON.stringify(newProduct) )
                      .then(() => {
                        console.log('It was saved successfully');
                        Alert.alert("Market App","Added to your cart successfully");
                        setColorState(true);
                      })
                      .catch(() => {
                        console.log('There was an error saving the product')
                      });
                  }
                }
              }}
              style={styles.cartIcon}
            >
              <Ionicons
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={21}
                color={colorState ?  '#fc6667' : 'gray'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            {props.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 130,
    flex: 1,
    backgroundColor: "white"
  },
  img: {
    height: 80,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 13
  },
  headingCardContainer: {
    flexDirection: 'row'
  },
  cartIcon: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 15
  }
});

export default CategoriesListingView;
