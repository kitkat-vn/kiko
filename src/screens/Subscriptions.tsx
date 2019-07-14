import React from 'react'
import {ScrollView, View} from 'react-native'
import {PricingCard, Icon} from 'react-native-elements'
import Header from '../components/header';

export default class SubscriptionsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Subscriptions',
    drawerIcon: ({ tintColor }) => (
      <Icon name="money" type='font-awesome'/>
      //<Image
      //  source={require('./notif-icon.png')}
      //  style={[styles.icon, {tintColor: tintColor}]}
      ///>
    ),
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} title="Subscriptions" />
        <ScrollView>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="0đ"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#4f9deb"
            title="Basic"
            price="700.000đ"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#4f9deb"
            title="Premium"
            price="1.000.000đ"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </ScrollView>
      </View>
    );
  }
}