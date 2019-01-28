import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import FeedCard from "../components/FeedCard";
import {GET_ALL_HELP_FEED} from "../store/API";
import {simpleGet} from "../utils/functions";

class Feed extends Component {





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
                    <FlatList data={this.props.feedList}
                              keyExtractor={(item, index) => item._id}
                              key={(item, index) => item._id }
                              renderItem={({item, index}) => (
                                  <FeedCard title={item.probTitle} description={item.probDesc}
                                            category={item.probType} location={item.location}
                                            status={item.status} date={item.createdAt}
                                            contact={item.contact}
                                            key={item._id}
                                    />
                              )}
                    />
                </Content>
            </ScrollView>

        );
    }
}

export default Feed;

