import React from 'react'
import {View, FlatList, ScrollView, TouchableHighlight, Image} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox} from 'react-native-elements'
import Header from '../components/header';
import orderHistory from '../../data/orderHistory';
import foods from '../../data/chosen_foods';

export default class OrderHistoryScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Order History',
    drawerIcon: ({ tintColor }) => (
      <Icon name="history" type='font-awesome'/>
      //<Image
      //  source={require('./notif-icon.png')}
      //  style={[styles.icon, {tintColor: tintColor}]}
      ///>
    ),
  };

  render() {
    return (
      <ScrollView>
        <Header navigation={this.props.navigation} title="Order History" />
        <FlatList
          data={orderHistory}
          renderItem={({item}) => 
            <ListItem
              leftAvatar={{ source: { uri: foods[item.food].photo } }}
              title={item.key + " " + item.arrivedAt}
              subtitle={foods[item.food].name}
            />
          }
        />
      </ScrollView>
    );
  }
}