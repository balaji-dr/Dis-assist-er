import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Item, Content, Input, Textarea, Icon, Picker, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneInput from 'react-native-phone-input'
import { material } from 'react-native-typography'


class HelpForm extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Text style={[{fontSize: 40, marginLeft: 6, marginBottom: 10}, material.headline]}>
                        What help do you need?
                    </Text>
                    <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 6}}>
                        Title
                    </Text>
                    <Item rounded  style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
                        <Input placeholder='Enter Title'/>
                    </Item>
                    <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 6}}>
                        Description
                    </Text>
                    <Textarea rowSpan={5} bordered placeholder="Enter Description" style={{ borderRadius:10,
                        borderWidth: 1, marginLeft: 5, marginRight: 5, marginBottom: 10}}/>

                    <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 6}}>
                        Category
                    </Text>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined, marginBottom: 10 }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={"test"}
                        onValueChange={() => alert("test")}
                    >
                        <Picker.Item label="Food" value="key0" />
                        <Picker.Item label="Volunteers" value="key1" />
                        <Picker.Item label="Shelter" value="key2" />
                        <Picker.Item label="Electricity" value="key3" />
                        <Picker.Item label="Water" value="key4" />
                        <Picker.Item label="Medicine" value="key4" />
                    </Picker>


                    <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 6}}>
                        Location
                    </Text>
                    <Item rounded  style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
                        <Input placeholder='Enter location'/>
                    </Item>

                    <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 6, marginBottom: 5}}>
                        Phone
                    </Text>
                    <PhoneInput ref='phone' style={{marginLeft: 15, marginRight: 15, marginBottom: 15}}/>

                    <Button rounded success onPress={() => alert("pressed")} style={{width: 200, alignSelf: "center",  alignItems: "center", justifyContent: 'center', marginBottom: 20}}>
                        <Text style={{alignSelf: "center"}}>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default HelpForm;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
