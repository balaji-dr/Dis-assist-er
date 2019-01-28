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
import OneSignal from "react-native-onesignal";

class Home extends Component {

    constructor(props) {
        super(props);
        OneSignal.init("a77753b4-3fd9-4e77-bf8b-527173878884");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);

        this.state = {
            latitude: null,
            longitude: null,
            loaded: false,
            error: null,
            weather: {
                response: [{description: ""}]
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
                                    disaster: response.data.details.disaster,
                                    loaded: true
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


    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        // console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        // console.log('Message: ', openResult.notification.payload.body);
        // console.log('Data: ', openResult.notification.payload.additionalData);
        // console.log('isActive: ', openResult.notification.isAppInFocus);
        // console.log('openResult: ', openResult);
    }

    onIds(device) {
        // console.log('Device info: ', device);
    }


    static navigationOptions = ({ navigation  }) => ({
            title: "Home",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerRight: (
                <TouchableOpacity style={{marginRight: 10}} onPress={() => alert("Locating...")}>
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

    _renderPage(){
        if(this.state.latitude !== null && this.state.longitude !== null && this.state.loaded === true){
            return(
                <ScrollView style={styles.container}>
                    <Weather datalist={this.state.weather}/>
                    {this.renderAlertCard()}
                    <TwoCard navigation={this.props.navigation} />
                    <Text style={styles.heading}>News</Text>
                    <News newslist={this.state.news}/>
                </ScrollView>
            )
        }
        else
            return (
                <View style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                    <Ionicons name="md-pin" size={170} color={"black"} style={{marginTop: 100}}/>
                    <Text style={{fontSize: 20, color: 'black', alignSelf: 'center'}}>Trying to find your location...</Text>
                </View>
            )
    }



    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                {this._renderPage()}
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
