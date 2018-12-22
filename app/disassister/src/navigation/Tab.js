import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import {HomeStackNavigator} from "./Stack";


const AppTabNavigator = createBottomTabNavigator({
        HelpFeed: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-hand" size={35} color={tintColor}/>
                )
            }
        },
        AskHelp: {
            screen: Home,
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
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Chat',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-chatboxes" size={35} color={tintColor}/>
                )
            }
        },
        Profile: {
            screen: Home,
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
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            showLabel: false,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'white',
            },
        },
    }
);


export default createAppContainer(AppTabNavigator);
