import React from 'react'
import {StyleSheet, View, FlatList, ScrollView, TouchableHighlight, Image, TouchableWithoutFeedback} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox} from 'react-native-elements'
import Header from '../components/header';
import foods from '../../data/foods';

actionOnRow = (item) => {
  console.log('Selected Item :', item);
}

const styles = StyleSheet.create({
  rowItem: {
    paddingLeft: 20
  },
  rowHeader: {
    backgroundColor: '#000',
    fontWeight: 'bold'
  }
});

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
                leftAvatar={{ source: {uri: item.photo} }}
                title={item.name}
                style={styles.rowHeader}
              />
              <FlatList
                data={item.items}
                renderItem={({item}) => (
                  <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                    <ListItem 
                      key={item.name}
                      title={item.name}
                      checkmark={item.chosen} 
                      style={styles.rowItem}
                      leftAvatar={{ source: {uri: item.photo} }}
                    />
                 </TouchableWithoutFeedback>
             )}
              />
            </View>
          }
        />
      </ScrollView>
    );
  }

}
