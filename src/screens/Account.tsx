import React from 'react'
import {View, FlatList, ScrollView, Image} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox} from 'react-native-elements'
import Header from '../components/header';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Acount',
    drawerIcon: ({ tintColor }) => (
      <Icon name="user" type='font-awesome'/>
    ),
  };

  render() {
    const items = [
      {
        key: "gender",
        component: <ListItem
          title="Gender"
          bottomDivider={true}
          rightTitle="male"
        />
      },
      {
        key: "budget",
        component: <ListItem
          title="Budget"
          bottomDivider={true}
          rightTitle="700k"
        />
      }
    ]
    return (
      <ScrollView>
        <Header navigation={this.props.navigation} title="Account" />
        <FlatList
          data={items}
          renderItem={({index, item}) => item.component}
        />
      </ScrollView>
    );
  }
}