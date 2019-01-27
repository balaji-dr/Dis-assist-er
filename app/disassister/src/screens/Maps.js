import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView,{ PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
let window = Dimensions.get('window');

class Maps extends Component {

    constructor(props) {
        super(props);
        this._simpleFilter = this._simpleFilter.bind(this);
        this._toggleModal = this._toggleModal.bind(this);
        this._toggleLegendModal = this._toggleLegendModal.bind(this);
        this._filterCategory = this._filterCategory.bind(this);
        this.state = {
            refreshing: false,
            modalVisible:false,
            legendModalVisible: false,
            markers:[
                {title: "Hello", latlng: {latitude: 13.0827,
                        longitude: 80.2707,}, probType: "Food", description: null, helpMode: true, time: "Jan 21, 2019"},
                {title: "Hello2", latlng: {latitude: 17.3850,
                        longitude: 78.4867,},probType: "Food", description: null,  helpMode: true, time: "Jan 21, 2019"},
                {title: "Food available", latlng: {latitude: 12.9716,
                        longitude: 77.5946,},probType: "Food", description: null,
                    helpMode: false, time: "Jan 21, 2019"},
                {title: "Need Shelter",probType: "Food", latlng: {latitude: 12.9760,
                                        longitude: 80.2212,}, description: null,
                    helpMode: false, time: "Jan 21, 2019"},

            ]
        };
    }

    static navigationOptions = ({ navigation  }) => ({
            title: "Maps",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            // headerRight: (
            //     <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.navigate("CheckAskHelp")}>
            //         <Ionicons name="md-chatboxes" size={30} color={"white"}/>
            //     </TouchableOpacity>
            // ),

        }
    );


    _simpleFilter(filter){
        if(filter==="priority"){
            this.setState({feedList: this.state.priorityList})

        }
        else if(filter==="time"){
            this.setState({feedList: this.state.defaultList})
        }
        else{
            this.setState({modalVisible: true});
        }
    }

    _toggleModal(){
        this.setState({modalVisible : !this.state.modalVisible});
    }

    _toggleLegendModal(){
        this.setState({legendModalVisible : !this.state.legendModalVisible});
    }

    _filterCategory(category){
        var newArray = this.state.defaultList;
        var temp = newArray.filter(function(obj) {
            return obj.probType === category;
        });
        this.setState({feedList: temp, modalVisible: false});

    }


    render() {
        return (

            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 13.0827,
                        longitude: 80.2707,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {this.state.markers.map(marker => {
                        if(marker.helpMode === true)
                            return (
                                <Marker
                                    coordinate={marker.latlng}
                                    title={marker.probType}
                                    description={marker.time}
                                    key={marker.title}
                                    pinColor={"#11410C"}
                                />
                            );
                        else
                           return (
                                <Marker
                                    coordinate={marker.latlng}
                                    title={marker.probType}
                                    description={marker.time}
                                    key={marker.title}
                                    pinColor={"#FF5047"}
                                />
                            );
                    })}

                </MapView>

                <View style={{marginLeft: window.width/1.4}}>
                    <TouchableOpacity style={{ marginBottom: window.height/1.4}} onPress={() => this._toggleLegendModal()}>
                        <Ionicons name="md-help-circle" size={50} color={"black"}/>
                    </TouchableOpacity>
                </View>



                <ActionButton buttonColor="rgba(231,76,60,1)" offsetX={45} offsetY={7} renderIcon={() => <Icon name="md-options" size={20} color="black" />}>
                    <ActionButton.Item buttonColor='#9b59b6' title="Priority" onPress={() => this._simpleFilter("priority")}>
                        <Icon name="md-podium" style={styles.actionButtonIcon} size={30} color={"black"}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Time" onPress={() => this._simpleFilter("time")}>
                        <Icon name="md-alarm" style={styles.actionButtonIcon} size={30} color={"black"}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Category" onPress={() => this._simpleFilter("category")}>
                        <Icon name="md-apps" style={styles.actionButtonIcon} size={30} color={"black"}/>
                    </ActionButton.Item>
                </ActionButton>

                <Modal isVisible={this.state.legendModalVisible} onBackButtonPress={() => this._toggleLegendModal()}>

                    <View style={{flex: 0,
                        height: 170,
                        width:300,
                        marginLeft:10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "column",
                        backgroundColor: 'white'}}>
                        <View style={{flex: 0, alignSelf: "flex-end"}}>
                            <TouchableOpacity style={{marginRight: 22}} onPress={() => this._toggleLegendModal()}>
                                <Icon name="md-close" style={styles.actionButtonIcon} size={30} color={"black"}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                                <Image source={require("../assets/images/redmarker.png")} style={{width: 40, height: 50, marginRight: 30}}/>
                                <Text style={{marginTop: 8, fontSize:18, color: 'black'}}>Need Help</Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Image source={require("../assets/images/greenmarker.png")} style={{width: 40, height: 50, marginRight: 30}}/>
                                <Text style={{marginTop: 8, fontSize:18, color: 'black'}}>Help Available</Text>
                            </View>
                        </View>


                    </View>
                </Modal>



                <Modal isVisible={this.state.modalVisible} onBackButtonPress={() => this._toggleModal()}>

                    <View style={styles.container}>

                        <View style={{flex: 0, alignSelf: "flex-end" }}>
                            <TouchableOpacity style={{marginRight: 22}} onPress={() => this._toggleModal()}>
                                <Icon name="md-close" style={styles.actionButtonIcon} size={30} color={"black"}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Volunteering")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Volunteering
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Food")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Food
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Medical")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Medical
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Cloths")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Cloths
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Shelter")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Shelter
                            </Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </View>

        );
    }
}

export default Maps;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 510,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
