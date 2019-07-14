import React from 'react'
import {ScrollView, View} from 'react-native'
import {PricingCard, Icon} from 'react-native-elements'
import Header from '../components/header';

export default class SubscriptionsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Subscriptions',
    drawerIcon: ({ tintColor }) => (
      <Icon name="money" type='font-awesome'/>
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
            info={['Basic Support', 'Core values']}
            button={{ title: 'JOIN', icon: 'flight-takeoff' }}
          />
          <PricingCard
            
            color="#e6fa0a"
            title="Premium 1"
            price="999.000 VND"
            info={['Core values','One meal every working day','KIKO takes care of monthly meals payment',
            'Recommend System']}          
            button={{ title: 'JOIN', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#6afcfc"
            title="Premium 2"
            price="1.999.999 VND"
            info={['Core values','Two meals every working day','KIKO takes care of monthly meals payment',
            'Recommend System']}
            button={{ title: 'JOIN', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#34f227"
            title="Master"
            price="1.499.999 VND"
            info={['Core values','One meal every working day','KIKO takes care of monthly meals payment',
            'Recommend System', 'Health and Nutrition Recommendation']}
            button={{ title: 'JOIN', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#9614fa"
            title="Master 2"
            price="2.499.999 VND"
            info={['Core values','Two meals every working day','KIKO takes care of monthly meals payment',
          'Recommend System', 'Health and Nutrition Recommendation']}
            button={{ title: 'JOIN', icon: 'flight-takeoff' }}
          />
        </ScrollView>
      </View>
    );
  }
}