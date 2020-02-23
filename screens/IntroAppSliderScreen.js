import React, { useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const IntroAppSliderScreen = props => {

  const onSliderDoneOrNext =() =>{
    props.navigation.navigate({
      routeName: 'Category',
    });
  }

  const renderSliderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };



    return (
      <AppIntroSlider
        slides={slides}
        renderItem={renderSliderItem}
        onDone={onSliderDoneOrNext}
        showSkipButton={true}
        onSkip={onSliderDoneOrNext}
      />
    );
  
};

IntroAppSliderScreen.navigationOptions = navData => {
  
      return {
    header:null
  };

};

const styles = StyleSheet.create({
  pageContainer:{
    flex:1,
    backgroundColor:'white'
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
  headerRightContainer:{
    flexDirection:'row'
  }
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
];


export default IntroAppSliderScreen;
