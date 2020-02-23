import React, { useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import ImageSlider from 'react-native-image-slider';
import * as catsActions from '../store/actions/categories';
const numCuloms = 2;

const images = [
  'https://gazef.s3.us-west-2.amazonaws.com/task-assets/1528666979514.jpg',
  'https://gazef.s3.us-west-2.amazonaws.com/task-assets/Fresh-fruit-pretty.jpg.653x0_q80_crop-smart.jpg',
  'https://gazef.s3.us-west-2.amazonaws.com/task-assets/Mixed-Meat-Small.jpg',
  'https://gazef.s3.us-west-2.amazonaws.com/task-assets/Catalan-fish-stew-Suquet-de-peix-recipe2.jpg'
];


const HomeScreen = props => {
  const categoriesContent = useSelector(state => state.categories.categoriesList);
  const dispatch = useDispatch();

  const loadCats = useCallback(async () => {
    try {
      await dispatch(catsActions.loadCategories());
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch]);


  useEffect(() => {
    loadCats();
  }, [dispatch])

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.name}
        image={itemData.item.category_img}
        onSelectCat={() => {
          props.navigation.navigate({
            routeName: 'categoriesList',
            params: {
              catId: itemData.item.id,
              catTitle: itemData.item.name,
              catImage: itemData.item.category_img
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.pageContainer}>
      <ImageSlider style={styles.slider}
        loopBothSides
        autoPlayWithInterval={3000}
        images={images}
        customSlide={({ index, item, style, width }) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image resizeMode='contain' source={{ uri: item }} style={{ flex: 1 }} />
          </View>
        )}
      />
      <FlatList
        data={categoriesContent}
        renderItem={renderGridItem}
        numColumns={numCuloms}
      />
    </View>
  );

};

HomeScreen.navigationOptions = navData => {

  return {
    headerTitle: 'Market App',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <View style={styles.headerRightContainer}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Search"
            iconName="md-search"
            onPress={() => { navData.navigation.navigate('Search') }}
          />
        </HeaderButtons>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Card"
            iconName="md-cart"
            onPress={() => { navData.navigation.navigate('Cart') }}
          />
        </HeaderButtons>

      </View>
    )
  };

};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  headerRightContainer: {
    flexDirection: 'row'
  },
  slider: {
    height: 200,
  },
});


export default HomeScreen;
