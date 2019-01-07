import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import NewsList from "../components/NewsList";


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            feedList:[
                {title: "News title 1", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
                {title: "News title 2", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: false},
                {title: "News title 3", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
                {title: "News title 4", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
                {title: "News title 5", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
                {title: "News title 6", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
            ]
        };
    }


    render() {
        return (
            <View style={{backgroundColor: "#EEF2F5"}}>
                <Content padder>
                    <Card style={{borderRadius:10,
                        borderWidth: 1,
                        overflow: 'hidden'}}>
                        <NewsList newsList={this.state.feedList}/>
                    </Card>
                </Content>
            </View>
        );
    }
}

export default News;

