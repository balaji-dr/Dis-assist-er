import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right } from 'native-base';
import { systemWeights } from 'react-native-typography';
import {WeatherCardStyles} from "../styles/base";
const styles = WeatherCardStyles;

class WeatherCard extends Component {


    _changeDate(d){

        var date = new Date(d).toUTCString();
        if(date==="Invalid Date")
            return
        return date.slice(0,12);

    }

    _changeTemp(temp){
        if(temp){
            return temp.toString().slice(0,4);
        }
    }

    _caps(title){
        if(title){
            return title.charAt(0).toUpperCase() + title.slice(1);
            }
        }

    _renderIcon(string){
        if(string.includes("clouds"))
            return <Image source={require("../assets/images/cloudy.png")} style={styles.cloud}/>
        if(string.includes("thunderstorm"))
            return <Image source={require("../assets/images/sunny.png")} style={styles.cloud}/>
        if(string.includes("rain"))
            return <Image source={require("../assets/images/rain.png")} style={styles.cloud}/>
        if(string.includes("mist"))
            return <Image source={require("../assets/images/haze.png")} style={styles.cloud}/>
        if(string.includes("drizzle"))
            return <Image source={require("../assets/images/rain.png")} style={styles.cloud}/>
        if(string.includes("sky"))
            return <Image source={require("../assets/images/sun.png")} style={styles.cloud}/>

    }

    render() {
        return (
                <Card style={styles.card}>
                    <CardItem style={{backgroundColor: "#2399E8"}}>
                        <Body style={styles.body}>
                        <View style={styles.innerBody}>
                            <Text style={[styles.climate, systemWeights.light]}>
                                {this._caps(this.props.item.description)}
                            </Text>
                            <Text style={[styles.degree, systemWeights.light]}>
                                {this._changeTemp(this.props.item.temp)}&#176;C
                            </Text>
                        </View>
                        {this._renderIcon(this.props.item.description)}
                        </Body>
                    </CardItem>
                    <Text style={styles.date}>
                        {this._changeDate(this.props.item.date)}
                    </Text>
                </Card>
        );
    }
}

export default WeatherCard;

