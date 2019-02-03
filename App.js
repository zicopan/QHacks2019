// CarMan 
/*
Nico, Matt, Aidan, Andrew
*/

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  StackNavigator,
  createStackNavigator,
} from 'react-navigation';

import OpenScreen from './screens/OpenScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import Adpage from './screens/AdPage.js'


export default class App extends React.Component {
  render() {
    return (
      <Navi />
    );
  }
}

const Navi = createStackNavigator({
  Open: OpenScreen,
  Home: HomeScreen,
  Ad: Adpage,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);




