import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right } from 'native-base';
import { human } from 'react-native-typography';
import Ionicons from "react-native-vector-icons/Ionicons";

let window = Dimensions.get('window');


class TwoCard extends Component {

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
            <Card style={styles.card}>
                <CardItem style={{backgroundColor: "black"}}>
                    <Body>
                    <Text style={[styles.info, human.title2White]}>
                        Help
                    </Text>
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.props.navigation.navigate("FormPage")}>
                        <Ionicons name="md-help-buoy" size={80} color={"white"} />
                    </TouchableOpacity>
                    </Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem style={{backgroundColor: "white"}}>
                <Body>
                    <Text style={[styles.info, human.title2]}>
                    Ask Surviva
                    </Text>
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.props.navigation.navigate("AppChat")}>
                        <Image
                            source={{uri: "https://cdn3.iconfinder.com/data/icons/human-behaviour-and-situations-part-1/400/Popular-19-512.png"}}
                            style={{width: 100, height: 80, alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </Body>
                </CardItem>
                </Card>
            </View>
        );
    }
}

export default TwoCard;

const styles = StyleSheet.create({
    card: {
        marginLeft:10,
        width: window.width/2.195,
        height: "auto",
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: "white"
    },
    info: {
        alignSelf: 'center'
    }
});





