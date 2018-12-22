import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppTabNavigator from "./src/navigation/Tab";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

