import React, {Component} from 'react';
import {AppStackNav} from "./src/navigation/navigators";
import OneSignal from 'react-native-onesignal';


type Props = {};
export default class App extends Component<Props> {

    render() {
    return (
      <AppStackNav/>
    );
  }
}

