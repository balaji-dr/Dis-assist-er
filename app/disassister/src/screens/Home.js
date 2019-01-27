import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Weather from "../primary/Weather";
import AlertCard from "../components/AlertCard";
import News from "../primary/News";
import CheckAskHelp from "../secondary/CheckAskHelp";
import TwoCard from "../components/TwoCard";
import axios from "axios";
import { ALL_ALERTS } from "../store/API";
import Permissions from 'react-native-permissions'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import SplashScreen from "react-native-splash-screen";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            weather: {
                response: [{}]
            },
            news: {
                response: [{}]
            },
            disaster: {
                response: [{}]
            }
        };
    }

    async componentDidMount() {
        SplashScreen.hide();
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
            .then(data => {
                if(data === "already-enabled" || data === "enabled"){
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.setState({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                error: null,
                            });
                            axios.get(ALL_ALERTS + this.state.latitude.toString() + "/" +
                                this.state.longitude.toString()).then((response) => {
                                this.setState({
                                    news: response.data.details.news,
                                    weather: response.data.details.weather,
                                    disaster: response.data.details.disaster
                                })
                            })
                        },
                        (error) => this.setState({ error: error.message }),
                        { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
                    );
                }

            }).catch(err => {
                alert("Please allow location permissions for app and restart")
        });

    }



    static navigationOptions = ({ navigation  }) => ({
            title: "Home",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerRight: (
                <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.navigate("FormPage")}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="md-locate" size={30} color={"white"}/>
                        <Text style={{color: 'white', fontSize: 17, marginLeft: 5, marginTop: 5}}>Locate</Text>
                    </View>
                </TouchableOpacity>
            ),

        }
    );

    renderAlertCard(){
        if(this.state.disaster.response.length > 0)
            return <AlertCard alert={this.state.disaster.response[0]}/>
        else
            return null
    }



    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />

               <Weather datalist={this.state.weather}/>

                {this.renderAlertCard()}

                <TwoCard navigation={this.props.navigation}/>
                <Text style={styles.heading}>News</Text>
                <News newslist={this.state.news}/>
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
    heading: {
        marginLeft: 13,
        marginTop: 4,
        fontSize: 17,
        fontWeight: "500"
    }
});
