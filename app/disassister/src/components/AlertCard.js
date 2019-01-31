import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right } from 'native-base';
import { human } from 'react-native-typography'
import {AlertCardStyles} from "../styles/base";
const styles = AlertCardStyles;

class AlertCard extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardItem style={{backgroundColor: "#C92627"}}>
                    <Body>
                    <Text style={[styles.info, human.title2White]}>
                       Alert
                    </Text>
                    <Text style={{color: "white"}}>
                        {this.props.alert.title}
                        {/*Cyclone alert has been issued in you location.*/}
                    </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default AlertCard;






