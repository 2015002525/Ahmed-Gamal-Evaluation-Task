import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';

const CategoryGridTile = props => {
  return (

    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelectCat}>
        <ImageBackground source={{ uri: props.image }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 5,
    left: 5

  },
  gridItem: {
    flex: 1,
    margin: 3,
    height: 150,
    borderRadius: 3,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    //textAlign: 'left',

  }
});


export default CategoryGridTile;
