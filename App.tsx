import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Icon, Rating, Overlay, Card} from 'react-native-elements';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import chosen_foods from './data/chosen_foods';

import Header from './src/components/header';
import SubscriptionsScreen from './src/screens/Subscriptions';
import PreferencesScreen from './src/screens/Preferences';
import AccountScreen from './src/screens/Account';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" type='font-awesome'/>
      //<Image
      //  source={require('./chats-icon.png')}
      //  style={[styles.icon, {tintColor: tintColor}]}
      ///>
    ),
  };

  state = {
    minLeft: 45,
    arrived: false,
    rated: false,
    isChangeFoodVisible: false
  }

  reduceMinLeft = () => {
    if (this.state.minLeft > 0) {
      this.setState({ minLeft: this.state.minLeft - 5 })
      setTimeout(this.reduceMinLeft, 3000)
    } else {
      this.setState({ minLeft: 0, arrived: true })
    }
  }

  handleFinishRating = () => {
    this.setState({ rated: true })
  }

  componentDidMount() {
    this.reduceMinLeft()
  }

  render() {
    const today_food = chosen_foods[0];
    const tmr_food = chosen_foods[1];

    const getHeadline = () => {
      if (this.state.arrived && !this.state.rated) {
        return <View>
            <Text style={{padding: 16, textAlign: "center"}}>FEEDBACK</Text>
            <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>How was {today_food.name}?</Text>
          </View>
      } else if (this.state.rated) {
        return <View>
          <Text style={{padding: 16, textAlign: "center"}}>TOMORROW'S MEAL</Text>
          <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>{tmr_food.name}</Text>
        </View>
      } else {
        return <View>
            <Text style={{padding: 16, textAlign: "center"}}>TODAY'S MEAL</Text>
            <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>{today_food.name}</Text>
          </View>
      }
    }


    return (
      <View>
        <Header navigation={this.props.navigation} title="Home" />
        {getHeadline()}
        <Image 
          style={{width: "100%", aspectRatio: 1}}
          source={{uri: today_food.photo}} />
        <View style={{flexDirection: 'row', padding: 8, alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
          <Icon name="hourglass-half" type='font-awesome' size={11}/>
          <Text> Arrive in {this.state.minLeft} minutes</Text>
        </View>
        {this.state.minLeft > 30 && <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{paddingHorizontal: 8}}>
            <Button 
              icon={<Icon name="exchange" size={15} color="white" type='font-awesome'/>}
              title=" Change" onPress={() => {this.setState({ isChangeFoodVisible: true })}} />
          </TouchableOpacity>
          <Button
            icon={<Icon name="ban" size={15} color="white" type='font-awesome'/>}
            title=" Cancel"
            style={{paddingHorizontal: 8}} />
        </View>}
        {this.state.arrived && !this.state.rated && <Rating
          type='heart'
          ratingCount={5}
          imageSize={40}
          showRating
          onFinishRating={this.handleFinishRating}
        />}

        <Overlay isVisible={this.state.isChangeFoodVisible}>
          <View style={{flexDirection: "row"}}>
            <Card
              title={chosen_foods[1].name}
              image={chosen_foods[1].photo}
              containerStyle={{padding: 20}}
              ></Card>
            <Card
              title={chosen_foods[2].name}
              image={chosen_foods[2].photo}
              containerStyle={{padding: 20}}
            ></Card>
          </View>
        </Overlay>
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name="exchange" type='font-awesome'/>
      //<Image
      //  source={require('./notif-icon.png')}
      //  style={[styles.icon, {tintColor: tintColor}]}
      ///>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
};

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Subscriptions: {
    screen: SubscriptionsScreen,
  },
  Preferences: {
    screen: PreferencesScreen,
  },
  Account: {
    screen: AccountScreen
  }
});

export default createAppContainer(MyDrawerNavigator);