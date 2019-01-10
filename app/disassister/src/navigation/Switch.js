import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createAppContainer, createSwitchNavigator} from "react-navigation";

import HelpFeed from "../screens/HelpFeed";
import AskHelpForm from "../screens/AskHelpForm";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import {HelpFormNavigator, ProfileStackNavigator} from "./navigators";
import HelpForm from "../components/HelpForm";

export const AskHelpSwitch = (signedIn = false) => createAppContainer(createSwitchNavigator({
        SignedIn: {
            screen: HelpFormNavigator
        },
        SignedOut: {
            screen: Login
        }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    })
);


export const ProfileSwitch = (signedIn = false) => createAppContainer(createSwitchNavigator({
        SignedIn: {
            screen: ProfileStackNavigator
        },
        SignedOut: {
            screen: Login
        }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    })
);


export const FeedSwitch = (signedIn = false) => createAppContainer(createSwitchNavigator({
        SignedIn: {
            screen: HelpFeed
        },
        SignedOut: {
            screen: Login
        }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    })
);


