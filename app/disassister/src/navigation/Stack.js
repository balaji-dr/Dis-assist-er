import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";


const HomeStack = createStackNavigator({
    Home:{
        screen: Home
    },
    Alert:{
        screen: Home
    },
    Weather:{
        screen: Home
    }
},{
    initialRouteName: "Home",
    headerMode: 'float',
});

export const HomeStackNavigator = createAppContainer(HomeStack);
