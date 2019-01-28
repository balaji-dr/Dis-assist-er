import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import WeatherCard from "../components/WeatherCard";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: [
                {description: ""},
            ]
        };
    }

    _renderCard(item){
        return(
            <WeatherCard item={item}/>
        )
    }


    render() {
        return (
            <Content>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.props.datalist.response}
                    renderItem={({item}) => this._renderCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                    key={(item, index) => item.date }
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
