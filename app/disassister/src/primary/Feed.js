import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import FeedCard from "../components/FeedCard";


class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            feedList:[
                {title: "Hello", location: "CEG", description: "We need milk powder and water urgently",
                    date: "12/12/12", status: "Verified", category: "food"},
                {title: "Hello", location: "CEG", description: "We need volunteers for cleaning up the fallen trees.",
                    date: "12/12/12", status: "Verified", category: "Volunteering"},
                {title: "Hello", location: "CEG", description: "Electric wires has fallen.",
                    date: "12/12/12", status: "Verified", category: "Electricity"},
            ]
        };
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "#EEF2F5"}}

                // refreshControl={
                //     <RefreshControl
                //         refreshing={this.state.refreshing}
                //         onRefresh={this._onRefresh}
                //     />
                // }
            >
                <Content padder>
                    <FlatList data={this.state.feedList}
                              renderItem={({item, index}) => (
                                  <FeedCard title={item.title} description={item.description}
                                            category={item.category} location={item.location}
                                            status={item.status} date={item.date}
                                            key={index}
                                    />
                              )}
                    />
                </Content>
            </ScrollView>

        );
    }
}

export default Feed;

