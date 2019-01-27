import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking} from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";


class NewsList extends Component {

    render() {
        return (
            <Content>
                <List>
                    {this.props.newsList.map((news, i) => (
                        <ListItem key={i}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://reliefweb.int/node/'+news.id.toString())}>
                                <Text>{news.title}</Text>
                            </TouchableOpacity>
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
