import React from 'react'
import {View, FlatList, ScrollView, TouchableHighlight, Image} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox} from 'react-native-elements'
import Header from '../components/header';
import foods from '../../data/foods'

export default class PreferencesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Preferences',
    drawerIcon: ({ tintColor }) => (
      <Icon name="asterisk" type='font-awesome'/>
      //<Image
      //  source={require('./notif-icon.png')}
      //  style={[styles.icon, {tintColor: tintColor}]}
      ///>
    ),
  };

  render() {
    return (
      <ScrollView>
        <Header navigation={this.props.navigation} title="Preferences" />
        <FlatList
          data={foods}
          renderItem={({item}) => 
            <View>
              <ListItem
                leftAvatar={{ source: { uri: item.photo } }}
                title={item.name}
              />
              <FlatList
                data={item.items}
                renderItem={({item}) =>
                  <ListItem 
                    key={item.name}
                    title={item.name}
                    checkmark={item.chosen} />}
              />
            </View>
          }
        />
      </ScrollView>
    );
  }
}