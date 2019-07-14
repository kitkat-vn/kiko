import React from 'react';
import {Header, Icon} from 'react-native-elements';

export default (props) => {
    return (
      <Header
        leftComponent={<Icon color="#fff"
        name="menu"
        onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponent={{ text: props.title.toUpperCase(), style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  }