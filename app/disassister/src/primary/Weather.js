import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import WeatherCard from "../components/WeatherCard";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [
                {},
                {},
                {},
                {},
            ]
        };
    }

    _renderCard(){
        return(
            <WeatherCard />
        )
    }

    render() {
        return (
            <Content>
                <Text style={styles.heading}>Weather Update</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.weatherInfo}
                    renderItem={({item}) => this._renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    key={(item, index) => item.index.toString() }
                />
            </Content>
        );
    }
}

export default Weather;

const styles = StyleSheet.create({
    heading: {
        padding: 10,
        fontSize: 17,
        fontWeight: "500"
    }

});
