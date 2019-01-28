import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList, AsyncStorage, RefreshControl} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import OwnFeedCard from "../components/OwnFeedCard";
import { human } from 'react-native-typography';
import {GET_USER_ISSUES, TOGGLE_VISIBILITY} from '../store/API';
import axios from "axios";


class UserFeed extends Component {




    render() {
        return (
            <ScrollView style={{backgroundColor: "#EEF2F5"}}

                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={this.props._onRefresh}
                    />
                }
            >
                <Content padder>

                    <FlatList data={this.props.feedList}
                              keyExtractor={(item, index) => item._id}
                              key={(item, index) => item._id }
                              renderItem={({item, index}) => (
                                  <OwnFeedCard title={item.probTitle} description={item.probDesc}
                                            category={item.probType} location={item.location}
                                            date={item.time} visible={item.visible}
                                            changeStatus={this.props.changeStatus}
                                               _id={item._id}
                                            key={item._id}

                                  />
                              )}
                    />
                </Content>
            </ScrollView>

        );
    }
}

export default UserFeed;


