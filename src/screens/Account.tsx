import React from 'react'
import {View, FlatList, ScrollView, Image} from 'react-native'
import {Icon, Avatar, ListItem, CheckBox, ButtonGroup, Text} from 'react-native-elements'
import Header from '../components/header';
import account from '../../data/account';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Acount',
    drawerIcon: ({ tintColor }) => (
      <Icon name="user" type='font-awesome'/>
    ),
  };

  state = {
    account,
    gender: account.gender == 'male' ? 0 : 1,
    autoOrder: true,
    height: '178cm',
    width: '70kg'
  }

  render() {
    const sections = [
      {
        name: "General",
        key: 'general',
        items: [
          {
            key: "gender",
            props: {
              title: "Gender",
              rightTitle: account.gender
            }
          },
          {
            key: "height",
            props: {
              title: "Height",
              rightTitle: this.state.height
            }
          },
          {
            key: "width",
            props: {
              title: "Width",
              rightTitle: this.state.width
            }
          }
        ]
      },
      {
        name: "Order",
        key: 'order',
        items: [
          {
            key: "auto-order",
            props: {
              title: "Auto Order",
              switch: {
                value: this.state.autoOrder,
                onValueChange: (val) => this.setState({autoOrder: val})
              }
            }
          },
          {
            key: "budget",
            props: {
              title: "Budget",
              rightTitle: account.budget
            }
          }
        ]
      }
    ]

    return (
      <ScrollView>
        <Header navigation={this.props.navigation} title="Account" />
        {sections.map((section) => 
          <View key={section.key}>
            <Text style={{fontWeight: 'bold', padding: 8}}>{section.name}</Text>
            <FlatList 
              key={section.key}
              data={section.items}
              renderItem={({index, item}) => 
                <ListItem 
                  {...item.props}
                  style={{height: 50}}
                  topDivider={true}                
                  bottomDivider={false} 
                />}
            />
          </View>)}
      </ScrollView>
    );
  }
}