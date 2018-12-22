import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import HelpFeed from "../screens/HelpFeed";
import Chat from "../screens/Chat";


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


const FeedStack = createStackNavigator({
    Feed:{
        screen: HelpFeed
    },
    Chat: {
        screen: Chat
    }
},{
    initialRouteName: "Feed",
    headerMode: 'float',
    tabBarVisible: false
});


export const HomeStackNavigator = createAppContainer(HomeStack);
export const FeedStackNavigator = createAppContainer(FeedStack);
