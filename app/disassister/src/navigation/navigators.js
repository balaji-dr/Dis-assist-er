import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import Home from "../screens/Home";
import HelpFeed from "../screens/HelpFeed";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Fund from "../screens/Fund";
import {AskHelpSwitchNav} from "./Switch";
import CheckProfile from "../secondary/CheckProfile";
import Maps from "../screens/Maps";
import AskHelpForm from "../screens/AskHelpForm";
import CheckAskHelp from "../secondary/CheckAskHelp";
import Notify from "../screens/Notify";

const HomeStack = createStackNavigator({
    Home: Home,
    Alert: Home,
    Weather: Home,
},{
    initialRouteName: "Home",
    headerMode: 'float',
});


const FeedStack = createStackNavigator({
    Feed: HelpFeed,
    Feed1: HelpFeed
},{
    initialRouteName: "Feed",
    headerMode: 'float'
});


const FundStack = createStackNavigator({
    Fund: Fund
},{
    initialRouteName: "Fund",
    headerMode: 'float'
});


const ChatStack = createStackNavigator({
    Chat: {
        screen: Chat
    }
}, {
    initialRouteName: "Chat",
    headerMode: 'float',
});

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile
    },
    Notify: {
        screen: Notify
    }
}, {
    initialRouteName: "Profile",
    headerMode: 'float',
});

const HelpStack = createStackNavigator({
    HelpStackHome: Maps,
}, {
    initialRouteName: "HelpStackHome",
    headerMode: 'float',
});





export const HomeStackNavigator = createAppContainer(HomeStack);
export const FeedStackNavigator = createAppContainer(FeedStack);
export const ChatStackNavigator = createAppContainer(ChatStack);
export const FundStackNavigator = createAppContainer(FundStack);
export const ProfileStackNavigator = createAppContainer(ProfileStack);
export const HelpStackNavigator = createAppContainer(HelpStack);


const AppTabNavigator = createBottomTabNavigator({
        HelpFeed: {
            screen: FeedStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-hand" size={35} color={tintColor}/>
                )
            }
        },
        Maps: {
            screen: HelpStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-map" size={35} color={tintColor}/>
                )
            }
        },
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-home" size={35} color={tintColor}/>
                )
            }
        },
        Fund: {
            screen: FundStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Fund',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-cash" size={35} color={tintColor}/>
                )
            }
        },
        Profile: {
            screen: CheckProfile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-person" size={35} color={tintColor}/>
                )
            }
        }
    },
    {   initialRouteName:"Home",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: '#2D3F43',
            inactiveTintColor: '#A7B6B9',
            showLabel: false,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#EEF2F5',
            },
        },
    }
);

const HelpFormStack = createStackNavigator({
    HelpFormStackHome: {
        screen: AskHelpForm
    },
    AppMain: {
        screen: createAppContainer(AppTabNavigator)
    }
}, {
    initialRouteName: "HelpFormStackHome",
    headerMode: 'none',
});
export const HelpFormNavigator = createAppContainer(HelpFormStack);



const AppStack = createStackNavigator({
    Apps: {
        screen: createAppContainer(AppTabNavigator),
    },
    AppChat: ChatStackNavigator,
    FormPage: CheckAskHelp
}, {
    headerMode: 'none'
});



export const AppStackNav = createAppContainer(AppStack);
