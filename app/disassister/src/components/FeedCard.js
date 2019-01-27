import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Header, Right, Card, CardItem, Body, Thumbnail, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SharedElement } from 'react-native-motion';
import call from 'react-native-phone-call'
import TimeAgo from 'react-native-timeago';

class FeedCard extends Component {

    call(number){
        call({number:number , prompt: false}).catch(console.error)
    }

    _renderDescription(desc){
        if(desc){
            return(
                <CardItem>
                    <Body>
                    <Text style={{fontSize:15, color: "black"}}>
                        {this.props.description}
                    </Text>
                    </Body>
                </CardItem>
            )
        }
        else
            return null;
    }


    _renderThumbnail(category){
        if(category==="Shelter")
            return(
                <Thumbnail source={require("../assets/images/home.png")}/>
            );
        if(category==="Volunteering")
            return (
                <Thumbnail source={require("../assets/images/volunteer.png")}/>
            );
        if(category==="Food")
            return (
                <Thumbnail source={require("../assets/images/food.png")}/>
            );
        if(category==="Medical")
            return (
                <Thumbnail source={require("../assets/images/medical.png")} square/>
            );
        if(category==="Clothes")
            return (
                <Thumbnail source={require("../assets/images/clothes.png")}/>
            );
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardItem button onPress={() => {
                    this.props.navigation.setParams({test: 'one'});
                    this.props.navigation.navigate("Maps")}
                }>
                    <Left>
                        <Body>
                        <Text style={{fontSize: 20, color: "black"}}>{this.props.location}</Text>
                        {/*<Text note>{this.props.date}</Text>*/}
                        <TimeAgo time={"2019-01-21T06:24:44.124Z"} />
                        </Body>
                    </Left>
                    {this._renderThumbnail(this.props.category)}
                </CardItem>
                {this._renderDescription(this.props.description)}
                <CardItem button onPress={() => this.props.navigation.navigate("Maps")}>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Ionicons name="md-apps" size={25} color={"black"}/>
                            <Text style={{marginLeft: 5, fontSize: 17, color: "black"}}>{this.props.category}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent textStyle={{color: '#87838B'}} onPress={() => this.call(this.props.contact) }>
                            <Ionicons name="md-call" size={25} color={"black"}/>
                            <Text style={{marginLeft: 5, fontSize: 17, color: "black"}} >Call</Text>
                        </Button>
                    </Right>
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
