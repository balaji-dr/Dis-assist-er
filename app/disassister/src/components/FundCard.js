import React, { Component } from 'react';
import {Image, Dimensions, StyleSheet, Linking, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
let window = Dimensions.get('window');
import TimeAgo from 'react-native-timeago';

class FundCard extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    {/*<Left>*/}
                        <Body>
                        <Text>{this.props.title}</Text>
                        <TimeAgo time={this.props.time} />
                        </Body>
                    {/*</Left>*/}
                </CardItem>
                <CardItem>
                    <Body>
                    <View style={{width: window.width/1.2, height: null, justifyContent: 'center', alignItems: 'center', marginBottom:10 }}>
                        <Image source={{uri: this.props.image}} style={{width: 190, height: 140, alignSelf: 'center', justifyContent:"center" }}/>
                    </View>
                    <Text>
                        {this.props.description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Right style={{marginLeft: 200}}>
                        <Button transparent textStyle={{color: '#87838B'}} onPress={() => Linking.openURL(this.props.link)}>
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
