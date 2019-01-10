import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import News from "../primary/News";


class AskHelpHome extends Component {

    static navigationOptions = ({ navigation  }) => ({
            title: "Ask Help",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerRight: (
                <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.navigate("CheckAskHelp")}>
                    <Ionicons name="md-chatboxes" size={30} color={"white"}/>
                </TouchableOpacity>
            ),

        }
    );



    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <News/>
            </ScrollView>
        );
    }
}

export default AskHelpHome;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#EEF2F5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
