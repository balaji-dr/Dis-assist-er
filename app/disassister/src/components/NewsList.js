import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";


class NewsList extends Component {

    render() {
        return (
            <Content>
                <List>
                    {this.props.newsList.map((news) => (
                        <ListItem>
                            <Text>{news.title}</Text>
                        </ListItem>
                    ))
                    }
                </List>
            </Content>
        );
    }
}

export default NewsList;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
