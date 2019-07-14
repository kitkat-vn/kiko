import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Icon, Rating, Overlay, Card, ListItem, Avatar} from 'react-native-elements';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import chosen_foods from './data/chosen_foods';

import Header from './src/components/header';
import SubscriptionsScreen from './src/screens/Subscriptions';
import PreferencesScreen from './src/screens/Preferences';
import AccountScreen from './src/screens/Account';
import OrderHistoryScreen from './src/screens/OrderHistory';

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
    isChangeFoodVisible: false,
    showTodayMeal: true,
    todayFood: chosen_foods[0],
    tmrFood: chosen_foods[1],
    foodOptions: [chosen_foods[1], chosen_foods[2]]
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
    this.setState({ rated: true, showTodayMeal: false })
  }

  handleChangeFood = (food) => {
    this.setState({ 
      todayFood: food,
      isChangeFoodVisible: false
    })
  }

  componentDidMount() {
    this.reduceMinLeft()
  }

  render() {
    const getHeadline = () => {
      if (this.state.arrived && !this.state.rated) {
        return <View>
            <Text style={{padding: 16, textAlign: "center"}}>FEEDBACK</Text>
            <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>How was {this.state.todayFood.name}?</Text>
          </View>
      } else if (this.state.rated) {
        return <View>
          <Text style={{padding: 16, textAlign: "center"}}>NEXT MEAL</Text>
          <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>{this.state.tmrFood.name}</Text>
        </View>
      } else {
        return <View>
            <Text style={{padding: 16, textAlign: "center"}}>TODAY'S MEAL</Text>
            <Text style={{paddingBottom: 16, textAlign: 'center', fontSize: 20}}>{this.state.todayFood.name}</Text>
          </View>
      }
    }
    const todayFoodView = 
      <View>
        <Image 
            style={{width: "100%", aspectRatio: 1}}
            source={{uri: this.state.todayFood.photo}} />
        {!this.state.arrived && <View style={{flexDirection: 'row', paddingHorizontal: 8, paddingTop: 8, alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
          <Icon name="hourglass-half" type='font-awesome' size={11}/>
          <Text> Arrive in {this.state.minLeft} minutes</Text>
        </View>}
        <View style={{flexDirection: 'row', paddingHorizontal: 8, paddingBottom: 16, alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
          <Text> Provided by </Text>
          <Text style={{textDecorationLine: 'underline'}}>{this.state.todayFood.restaurant}</Text>
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
        {this.state.arrived && !this.state.rated && 
          <View>
            <Rating
              type='heart'
              ratingCount={3}
              startingValue={0}
              imageSize={40}
              onFinishRating={this.handleFinishRating}
            />
            <Text style={{padding: 16, textAlign: "center"}}>
              Your feedback will be used to provide better meals in the future!
            </Text>
          </View>}
      </View>
    const tmrFoodView =
      <View style={{flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
          <Image 
            style={{width: "75%", aspectRatio: 1}}
            source={{uri: this.state.tmrFood.photo}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 16}}>
          <Text>or change to</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 16}}>
            <Avatar rounded source={{uri: chosen_foods[0].photo}} size='large' />
            <Text>{chosen_foods[0].name}</Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 16}}>
            <Avatar rounded source={{uri: chosen_foods[2].photo}} size='large' />
            <Text>{chosen_foods[2].name}</Text>
          </View>
        </View>
      </View>
    return (
      <View>
        <Header navigation={this.props.navigation} title="Home" />
        {getHeadline()}
        {this.state.showTodayMeal ? todayFoodView : tmrFoodView}
        <Overlay 
          isVisible={this.state.isChangeFoodVisible}
          onBackdropPress={() => this.setState({ isChangeFoodVisible: false })}
          height="auto">
          <View style={{flexDirection: 'column'}}>
            {this.state.foodOptions.map((food) => 
              <ListItem
                key={food.name}
                title={food.name}
                leftAvatar={{source: { uri: food.photo }}}
                onPress={() => this.handleChangeFood(food)} />)}
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
  OrderHistory: {
    screen: OrderHistoryScreen
  },
  Preferences: {
    screen: PreferencesScreen,
  },
  Account: {
    screen: AccountScreen
  }
});

export default createAppContainer(MyDrawerNavigator);