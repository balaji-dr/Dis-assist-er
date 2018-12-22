import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right } from 'native-base';
import { systemWeights } from 'react-native-typography';
import {WeatherCardStyles} from "../styles/base";
const styles = WeatherCardStyles;

class WeatherCard extends Component {

    render() {
        return (
                <Card style={styles.card}>
                    <CardItem style={{backgroundColor: "#2399E8"}}>
                        <Body style={styles.body}>
                        <View style={styles.innerBody}>
                            <Text style={[styles.climate, systemWeights.light]}>
                                Cloudy
                            </Text>
                            <Text style={[styles.degree, systemWeights.light]}>
                                23&#176;
                            </Text>
                        </View>
                        <Image source={require("../assets/images/sunny.png")} style={styles.cloud}/>
                        </Body>
                    </CardItem>
                    <Text style={styles.date}>
                        Monday, December 23
                    </Text>
                </Card>
        );
    }
}

export default WeatherCard;

