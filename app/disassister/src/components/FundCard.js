import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
let window = Dimensions.get('window');

class FundCard extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require("../assets/images/tn.png")}/>
                        <Body>
                        <Text>TamilNadu Chief Minister Relief Fund</Text>
                        <Text note>November 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                    <Image source={require("../assets/images/pic.jpg")} style={{height: 150, width: 305}}/>
                    <Text>
                       This is the official portal of TamilNadu CM Public relief funds towards the Gaja Cyclone
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Right style={{marginLeft: 200}}>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Text style={{fontSize: 25, color:"black"}}>&#8377;</Text>
                            <Text style={{color: "#2D3F43", fontWeight: "500"}}>Donate</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}


export default FundCard;

const styles = StyleSheet.create({
    card: {
        marginLeft:10,
        width: window.width/1.06,
        height: null,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden'
    },
});
