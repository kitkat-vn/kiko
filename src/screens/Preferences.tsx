import React from 'react'
import {StyleSheet, View, FlatList, ScrollView, TouchableHighlight, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox} from 'react-native-elements'
import Header from '../components/header';
import foods from '../../data/foods';


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
    const actionOnRow = (item) => {
      item.chosen = !item.chosen
    }
    
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
                  <TouchableWithoutFeedback onPress={ () => actionOnRow(item)}>
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
