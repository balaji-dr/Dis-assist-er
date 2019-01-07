import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Alert} from 'react-native';
import HelpForm from "../components/HelpForm";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

type Props = {};
class AskHelp extends Component<Props> {

    static navigationOptions = ({ navigation  }) => ({
            title: "Ask Help",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerRight: (
                <TouchableOpacity style={{marginRight: 22}} onPress={() => Alert.alert("QnA Bot")}>
                    <Ionicons name="md-text" size={30} color={"white"}/>
                </TouchableOpacity>
            ),

        }
    );



    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <HelpForm/>
            </View>
        );
    }
}

export default AskHelp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F5',
    },
});
