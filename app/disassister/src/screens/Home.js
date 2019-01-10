import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Weather from "../primary/Weather";
import AlertCard from "../components/AlertCard";
import News from "../primary/News";
import CheckAskHelp from "../secondary/CheckAskHelp";
import TwoCard from "../components/TwoCard";


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
        );
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



    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />

               <Weather/>
               <AlertCard/>
                <TwoCard navigation={this.props.navigation}/>
                <News/>
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
