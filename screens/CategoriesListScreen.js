import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoriesListingView from '../components/CategoriesListingView';

import { Container, Content, Footer, FooterTab ,Button  } from 'native-base';

import * as catsListActions from '../store/actions/categoriesList';
const numCuloms = 2;

const CategoriesListScreen = props => {
  const catId = props.navigation.getParam('catId');
  const categoriesListContent = useSelector(state => state.categoriesList.categoriesListView);
  console.log(categoriesListContent);
  const dispatch = useDispatch();
  const loadCatsList = useCallback(async () => {
    try {
      await dispatch(catsListActions.loadCategoriesList(catId));
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    loadCatsList();
  }, [dispatch]);

  const renderGridItem = itemData => {
    return (
      <CategoriesListingView
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.product_img}
        weight={itemData.item.weight}
        price={itemData.item.price}
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

  const sortByHandler = () => {

  }

  const filterHandler = () => {
    console.log("here filter")
  }

  return (
    <Container>
      <Content>
        <View style={styles.headerImageContainer}>
          <ImageBackground source={{ uri: props.navigation.getParam('catImage') }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.navLeftContainer}>
              <TouchableOpacity onPress={() => props.navigation.pop()}>
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-back'}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles.navTitle}>{props.navigation.getParam('catTitle')}</Text>
            </View>
            <View style={styles.navRightContainer}>
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Search"
                  iconName="md-search"
                  iconSize={30}
                  onPress={() => { props.navigation.navigate('Search') }}
                />
              </HeaderButtons>
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Card"
                  iconName="md-cart"
                  iconSize={30}
                  onPress={() => { props.navigation.navigate('Cart') }}
                />
              </HeaderButtons>

            </View>

          </ImageBackground>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={categoriesListContent}
            renderItem={renderGridItem}
            numColumns={numCuloms}
          />
        </View>
      </Content>
      <Footer>
        <FooterTab style={styles.footer}>
          <Button onPress={sortByHandler}>
            <Text style={styles.tabTitle}>Sort by</Text>
          </Button>
          <Button onPress={filterHandler}>
            <Text style={styles.tabTitle}>Filter</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

CategoriesListScreen.navigationOptions = navData => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fc6667'
  },
  tabTitle: {
    color: 'white'
  },
  headerImageContainer: {
    flex: 1,
    height: 200
  },
  navLeftContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 20
  },
  navTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    paddingLeft: 15
  },
  navRightContainer: {
    flexDirection: 'row',
    position: "absolute",
    right: 0,
    paddingTop: 50,
    paddingRight: 10
  },
  flatlistContainer: {
    marginTop: 20
  }
})

export default CategoriesListScreen;
