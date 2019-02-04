// Nico, Andrew, Aidan, Matt

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {
  StackNavigator,
  createStackNavigator,
} from 'react-navigation';

import OpenScreen from './screens/OpenScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import AdPage from './screens/AdPage.js'

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
  Ad: AdPage,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);




