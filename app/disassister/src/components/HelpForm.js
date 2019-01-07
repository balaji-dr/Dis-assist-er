import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Item, Content, Input, Textarea, Icon, Picker, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneInput from 'react-native-phone-input'
import { material } from 'react-native-typography'
import GooglePlacesBox from '../components/GooglePlacesBox';
import {HelpFormStyles} from "../styles/base";

const styles = HelpFormStyles;

class HelpForm extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Text style={[styles.maintitle, material.headline]}>
                        What help do you need?
                    </Text>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Item rounded  style={styles.titleInput}>
                        <Input placeholder='Enter Title'/>
                    </Item>
                    <Text style={styles.description}>
                        Description
                    </Text>
                    <Textarea rowSpan={5} bordered placeholder="Enter your problem" style={styles.textArea}/>

                    <Text style={styles.category}>
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


                    <Text style={styles.location}>
                        Location
                    </Text>
                    {/*<Item rounded  style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>*/}
                        {/*<Input placeholder='Enter location'/>*/}
                    {/*</Item>*/}
                    <GooglePlacesBox/>


                    <Text style={styles.phone}>
                        Phone
                    </Text>
                    <PhoneInput initialCountry={"in"} ref='phone' style={styles.phoneInput}/>

                    <Button rounded success onPress={() => alert("pressed")} style={styles.submit}>
                        <Text style={{alignSelf: "center"}}>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default HelpForm;

// const styles = StyleSheet.create({
//
// });
