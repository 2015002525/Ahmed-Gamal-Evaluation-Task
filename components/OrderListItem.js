import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Content, List, ListItem, Thumbnail, Left, Body, Button } from 'native-base';


const OrderListItem = props => {
  return (
    <Content style={styles.container}>
      
        <List>
          <ListItem thumbnail>
          <TouchableOpacity onPress={props.onSelectOrder} >
            <Left style={styles.imageContainer} >
              <Thumbnail square style={styles.image} resizeMode='contain' source={{ uri: props.image }} />
            </Left>
            </TouchableOpacity>
            <Body>
            <TouchableOpacity onPress={props.onSelectOrder} >
              <View style={styles.rowText}>
                <Text style={styles.title}> Name :  </Text>
                <Text style={styles.title} >{props.name}</Text>
              </View>
              <View style={styles.rowText}>
              <Text style={styles.subTitle}> OrderID :  </Text>
              <Text style={styles.subTitle} note numberOfLines={1}>{props.orderId}</Text>
              </View>
              <View style={styles.rowText}>
              <Text style={styles.subTitle}> Address :  </Text>
              <Text style={styles.subTitle} note numberOfLines={1}>{props.address}</Text>
              </View>
              <View style={styles.rowText}>
              <Text style={styles.subTitle}> City :  </Text>
              <Text style={styles.subTitle} note numberOfLines={1}>{props.city}</Text>
              </View>
              <View style={styles.rowText}>
              <Text style={styles.subTitle}> Service Date :  </Text>
              <Text style={styles.subTitle} note numberOfLines={1}>{props.serviceDate}</Text>
              </View>
              <View style={styles.rowText}>
              <Text style={styles.subTitle}> Status :  </Text>
              <Text style={styles.subTitle} note numberOfLines={1}>{props.orderStatus}</Text>
              </View>
              </TouchableOpacity>
              <Button style={{ width: "95%" , backgroundColor:'#0076ff' , marginVertical:6}} block>
                <Text style={{ color: 'white' }}>Open Dispute</Text>
              </Button>
              <Button  style={{ width: "95%"}} block dark>
                <Text style={{ color: 'white' }}>Contact Provider</Text>
              </Button>
            </Body>
          </ListItem>
        </List>
      
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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
  },
  rowText:{
    flexDirection:'row',
    flex:1,
    paddingVertical:3
  }
});


export default OrderListItem;
