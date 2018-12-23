import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Thumbnail, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";


class FeedCard extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Left>
                        <Body>
                        <Text style={{fontSize: 20, color: "black"}}>{this.props.title}</Text>
                        <Text note>{this.props.category}</Text>
                        <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                    <Thumbnail source={{uri: 'https://png.pngtree.com/svg/20161124/flood_and_water_logging_972327.png'}}/>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{fontSize:15, color: "black"}}>
                        {this.props.description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Ionicons name="md-compass" size={25} color={"black"}/>
                            <Text style={{marginLeft: 2}}>{this.props.location}</Text>
                        </Button>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Ionicons name="md-information-circle" size={25} color="red" />
                            <Text style={{marginLeft: 5}}>{this.props.status}</Text>
                        </Button>
                        <Button transparent textStyle={{color: '#87838B'}} onPress={() => {} }>
                            <Ionicons name="md-call" size={25} color={"black"}/>
                            <Text style={{marginLeft: 5}} >Call</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>

        );
    }
}

export default FeedCard;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
