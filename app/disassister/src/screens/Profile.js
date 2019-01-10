import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, Animated, ScrollView} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
let window = Dimensions.get('window');
import { human } from 'react-native-typography'
import UserFeed from "../primary/UserFeed";


type Props = {};
class Profile extends Component<Props> {

    constructor() {
        super()

    }

    static navigationOptions = ({ navigation  }) => ({
            title: "Profile",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );




    render() {


        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <View style={styles.personblock}>
                    <View style={{position: 'absolute', alignSelf: "flex-end"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SignedOut")}>
                            <Ionicons name="md-exit" size={33} color={"white"} style={{alignSelf: 'center', marginRight: 20, marginTop: 7}}/>
                        </TouchableOpacity>
                    </View>
                    <Ionicons name="md-person" size={140} color={"white"} style={{alignSelf: 'center'}}/>
                    <Text style={[{color: "white", alignSelf: 'center', fontSize: 17,  marginBottom: 15}, human.calloutWhite]}>drbalaji97@gmail.com</Text>
                </View>

                    <UserFeed/>

            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F5',
    },
    personblock: {
        alignContent: 'center',
        backgroundColor: "#2D3F43",
        width: window.width,
        borderBottomLeftRadius:70,
        // borderBottomRightRadius:20,
        borderWidth: 0,

    }
});
