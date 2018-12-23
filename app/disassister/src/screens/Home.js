import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Weather from "../primary/Weather";
import AlertCard from "../components/AlertCard";


class Home extends Component {

    static navigationOptions = ({ navigation  }) => ({
            title: "Home",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerRight: (
                <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.navigate("AppChat")}>
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
               <Weather/>
               <AlertCard/>
            </ScrollView>
        );
    }
}

export default Home;

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
