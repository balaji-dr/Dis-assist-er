import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image, AsyncStorage} from 'react-native';
import { Container, Item, Content, Input, Textarea, Icon, Picker, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneInput from 'react-native-phone-input'
import SwitchSelector from 'react-native-switch-selector';
import axios from "axios";
import {HelpFormStyles} from "../styles/base";
import { GOOGLE_PLACES_API_KEY } from 'react-native-dotenv'
import {POST_HELP} from "../store/API";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
const styles = HelpFormStyles;

const options = [
    { label: 'Need Help', value: true },
    { label: 'Help Others', value: false }
];

class HelpForm extends Component {

    constructor(props) {
        super(props);
        this.resetLocation = this.resetLocation.bind();
        this.state = {
            submitBtn: "Submit",
            probType: "Food",
            probDesc: "",
            contact: "",
            helpMode: true,
            coordinates: {
                latitude: null,
                longitude: null
            }
        };
    }

    async submitForm() {
        // this.props.navigation.navigate("AppMain")

        const token = await AsyncStorage.getItem('token');
        if (this.state.contact.length < 10 || this.state.coordinates.latitude === null || this.state.coordinates.longitude === null)
        {
            alert("Please check your details. Also make sure your location is enabled.");
            this.resetLocation();
        }
        else {
            axios.post(POST_HELP, {
                ...this.state
            },{
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                }
                }).then((response) => {
                    console.log(response);
                    if (response.data.status === true){
                        alert("Your issue was successfully added.");
                        this.setState({
                            probType: "Food",
                            probDesc: "",
                            contact: "",
                            helpMode: true,
                        });
                        this.props.navigation.navigate("Apps")
                    }
                    else{
                        this.props.navigation.navigate("SignedOut")
                    }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    componentDidMount(){

        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
            .then(data => {
                if (data === "already-enabled" || data === "enabled") {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.setState({
                                coordinates:{
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude,
                                },
                                error: null,
                            });
                        })
                }
            }).catch((error) => alert("Cannot find your location."));

    }

    resetLocation(){

        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
            .then(data => {
                if (data === "already-enabled" || data === "enabled") {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.setState({
                                coordinates:{
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude,
                                },
                                error: null,
                            });
                        })
                }
            }).catch((error) => alert("Cannot find your location."));

    }


    renderBtnText(){
        if(this.state.helpMode===true){
            return "Ask Help";
        }
        else{
            return "Provide Help"
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    {/*<Text style={[styles.maintitle, material.headline]}>*/}
                        {/*What help do you need?*/}
                    {/*</Text>*/}

                    <SwitchSelector
                        initial={0}
                        style={{marginTop: 20}}
                        onPress={value => this.setState({ helpMode: value })}
                        textColor={"#2D3F43"} //'#7a44cf'
                        selectedColor={"#ffffff"}
                        buttonColor={"#2D3F43"}
                        borderColor={"#2D3F43"}
                        hasPadding
                        options={options} />

                    {/*<Text style={styles.title}>*/}
                        {/*Title (Optional)*/}
                    {/*</Text>*/}
                    {/*<Item rounded  style={styles.titleInput}>*/}
                        {/*<Input placeholder='Enter Title' onChangeText={(text) => this.setState({probTitle: text})} />*/}
                    {/*</Item>*/}

                    <Text style={styles.category}>
                        Category
                    </Text>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined, marginBottom: 10 }}
                        placeholder="Problem category"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.probType}
                        onValueChange={(value) => this.setState({probType: value})}
                    >
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="Volunteering" value="Volunteering" />
                        <Picker.Item label="Shelter" value="Shelter" />
                        <Picker.Item label="Clothes" value="Clothes" />
                        <Picker.Item label="Medical" value="Medical" />
                    </Picker>


                    {/*<Text style={styles.location}>*/}
                        {/*Location*/}
                    {/*</Text>*/}
                    {/*<Item rounded  style={{marginLeft: 5, marginRight: 5, marginBottom: 10}}>*/}
                        {/*<Input placeholder='Enter location'/>*/}
                    {/*</Item>*/}
                    {/*<GooglePlacesAutocomplete*/}
                        {/*placeholder='Enter location'*/}
                        {/*minLength={3} // minimum length of text to search*/}
                        {/*autoFocus={false}*/}
                        {/*returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype*/}
                        {/*listViewDisplayed={false}    // true/false/undefined*/}
                        {/*fetchDetails={false}*/}
                        {/*renderDescription={row => row.description} // custom description render*/}
                        {/*onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true*/}
                            {/*console.log(data);*/}
                            {/*alert(data.description);*/}
                            {/*this.setState({ location: data.description })*/}
                        {/*}}*/}

                        {/*getDefaultValue={() => ''}*/}
                        {/*query={{*/}
                            {/*// available options: https://developers.google.com/places/web-service/autocomplete*/}
                            {/*key: GOOGLE_PLACES_API_KEY,*/}
                            {/*// key: 'AIzaSyC5EIzwIRVhEdd60uFjJETpFgENqVVMLcc',*/}
                            {/*language: 'en', // language of the results*/}
                            {/*// types: '(cities)' // default: 'geocode'*/}
                        {/*}}*/}

                        {/*styles={{*/}
                            {/*textInputContainer: {*/}
                                {/*backgroundColor: 'white',*/}
                                {/*borderRadius:10,*/}
                                {/*borderWidth: 1,*/}
                                {/*marginLeft: 5,*/}
                                {/*marginRight: 5,*/}
                            {/*},*/}
                            {/*description: {*/}
                                {/*fontWeight: 'bold'*/}
                            {/*},*/}
                            {/*predefinedPlacesDescription: {*/}
                                {/*color: '#1faadb'*/}
                            {/*},*/}
                            {/*container: {*/}
                                {/*backgroundColor: 'white'*/}
                            {/*}*/}
                        {/*}}*/}

                        {/*// currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list*/}
                        {/*// currentLocationLabel="Current location"*/}
                        {/*nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch*/}
                        {/*GoogleReverseGeocodingQuery={{*/}
                            {/*// available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro*/}
                        {/*}}*/}
                        {/*GooglePlacesSearchQuery={{*/}
                            {/*// available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search*/}
                            {/*rankby: 'distance'*/}
                        {/*}}*/}

                        {/*// filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities*/}
                        {/*// predefinedPlaces={[homePlace, workPlace]}*/}

                        {/*debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.*/}
                        {/*// renderLeftButton={()  => <Ionicons name="md-arrow-back" size={30} color={"black"}/>}*/}
                        {/*// renderRightButton={() => <Text>Custom text after the input</Text>}*/}
                    {/*/>*/}


                    <Text style={styles.phone}>
                        Phone
                    </Text>
                    <PhoneInput initialCountry={"in"} ref='phone' style={styles.phoneInput}
                                onChangePhoneNumber={(number) => this.setState({contact: number})}/>

                    <Text style={styles.description}>
                        Description (Optional)
                    </Text>
                    <Textarea rowSpan={5} bordered placeholder="Describe your need for better understanding" style={styles.textArea}
                              onChangeText={(text) => this.setState({probDesc: text})} />

                    <Button rounded success onPress={() => this.submitForm()} style={styles.submit}>
                        <Text style={{alignSelf: "center"}}>{this.renderBtnText()}</Text>
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
