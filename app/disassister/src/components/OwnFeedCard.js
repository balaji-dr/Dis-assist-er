import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Header, Right, Card, CardItem, Body, Thumbnail, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import ToggleSwitch from 'toggle-switch-react-native'



class OwnFeedCard extends Component {

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
                <CardItem>
                    <Left>
                        <Body>
                        <Text style={{fontSize: 20, color: "black"}}>{this.props.location}</Text>
                        <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                    {this._renderThumbnail(this.props.category)}
                </CardItem>

                {/*<CardItem>*/}
                    {/*<Body>*/}
                    {/*<Text style={{fontSize:15, color: "black"}}>*/}
                        {/*{this.props.description}*/}
                    {/*</Text>*/}
                    {/*</Body>*/}
                {/*</CardItem>*/}

                {this._renderDescription(this.props.description)}


                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Ionicons name="md-apps" size={25} color={"black"}/>
                            <Text style={{marginLeft: 5}}>{this.props.category}</Text>
                        </Button>

                    </Left>
                    <Right>
                        <ToggleSwitch
                            isOn={this.props.visible}
                            onColor='green'
                            offColor='red'
                            label='Issue Solved?'
                            labelStyle={{color: 'black', fontWeight: '900'}}
                            size='medium'
                            onToggle={ (isOn) => this.props.changeStatus(isOn, this.props._id) }
                        />



                    </Right>
                </CardItem>
            </Card>

        );
    }
}

export default OwnFeedCard;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
