import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import {FeedStackNavigator, HomeStackNavigator} from "./Stack";
import HelpFeed from "../screens/HelpFeed";
import AskHelp from "../screens/AskHelp";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";


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
        AskHelp: {
            screen: AskHelp,
            navigationOptions: {
                tabBarLabel: 'Ask Help',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-help-buoy" size={35} color={tintColor}/>
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
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarLabel: 'Chat',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-chatboxes" size={35} color={tintColor}/>
                )
            }
        },
        Profile: {
            screen: Profile,
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


export default createAppContainer(AppTabNavigator);
