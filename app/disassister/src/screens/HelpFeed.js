import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Feed from "../primary/Feed";


class HelpFeed extends Component {

    static navigationOptions = ({ navigation  }) => ({
            title: "Help Feed",
            headerTintColor: 'white',
            headerRight: (
                <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.navigate("Fund")}>
                    <Text style={{color: "white", fontSize: 30}}>
                        &#8377;
                    </Text>
                </TouchableOpacity>
            ),

            headerStyle: {
                backgroundColor: '#2D3F43',
            },

        }
    );



    render() {
        return (
            <ScrollView style={{backgroundColor: "#87838B"}}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />

                <Feed/>
            </ScrollView>
        );
    }
}

export default HelpFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    }
});
