import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';

import { ListItem, Thumbnail, Left, Body, Button } from 'native-base';


const CategoryGridTile = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity >
          <ListItem thumbnail>
            <Left style={styles.imageContainer} >
              <Thumbnail square style={styles.image} resizeMode='contain' source={{ uri: props.image }} />
            </Left> 
            <Body>
              <Text style={styles.title} >{props.title}</Text>
              <Text style={styles.subTitle} >{props.weight}</Text>
              <Text style={styles.subTitle} >{props.price}</Text>
              <Button onPress={props.onSelectCat} style={{width:"95%"}} block dark>
                <Text style={{color:'white'}}>More Details</Text>
              </Button>
            </Body>
          </ListItem>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  imageContainer: {
    height: 100,
    width: 150
  },
  image: {
    width: '100%',
    flex: 1
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  subTitle: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: 'black'
  }
});


export default CategoryGridTile;
