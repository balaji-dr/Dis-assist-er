import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
    AsyncStorage, Alert
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView,{ PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import {simpleGet} from "../utils/functions";
import {GET_ALL_HELP_FEED_MAPS} from "../store/API";
let window = Dimensions.get('window');
import TimeAgo from 'react-native-timeago';
import call from "react-native-phone-call";
import {Button} from 'native-base';
import { Header } from 'react-navigation';


class Maps extends Component {

    constructor(props) {
        super(props);
        this._simpleFilter = this._simpleFilter.bind(this);
        this._toggleModal = this._toggleModal.bind(this);
        this._toggleLegendModal = this._toggleLegendModal.bind(this);
        this._filterCategory = this._filterCategory.bind(this);
        this._refresh = this._refresh.bind(this);
        this.state = {
            loading: false,
            modalVisible:false,
            legendModalVisible: false,
            markers:[
                {
                    coordinates: {
                        latitude: 13.0060217,
                        longitude: 80.2066449
                    },
                    _id: "5c4db6b7c20d3c7e213ddc62",
                    probTitle: null,
                    probType: "Food",
                    probDesc: "test!!",
                    emotion: 0.101580411195755,
                    visible: true,
                    helpMode: true,
                    location: "Erode",
                    contact: "1234567890",
                    time: "Jan 27 2019 13:48:38",
                    email: "karthiorton@gmail.com",
                    createdAt: "2019-01-27T13:48:39.760Z",
                    updatedAt: "2019-01-27T13:48:39.760Z",
                    __v: 0
                },

            ]
        };
    }

    static navigationOptions = ({ navigation  }) => ({
            title: "Feed Location",
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

    _refresh(){
        simpleGet(GET_ALL_HELP_FEED_MAPS).then((data) => {
            // console.log(data);
            this.setState({markers: data.details, defaultList: data.details, loading: false });
        })
            .catch((error) => {console.log(error)});
    }


    componentDidMount(){
        simpleGet(GET_ALL_HELP_FEED_MAPS).then((data) => {
            // console.log(data);
            this.setState({markers: data.details, defaultList: data.details, loading: false });
        });
    }

    _simpleFilter(filter){
        if(filter==="priority"){
            this.setState({feedList: this.state.priorityList})
        }
        else if(filter==="All"){
            this.setState({markers: this.state.defaultList});
            this._toggleModal()
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

    async call(number){
        const token = await AsyncStorage.getItem('token');
        if (token){
            call({number:number , prompt: false}).catch(console.error)
        }
        else{
            Alert.alert("Authentication failed", "Please login to communicate.");
        }
    }

    _filterCategory(category){
        var newArray = this.state.defaultList;
        var temp = newArray.filter(function(obj) {
            return obj.probType === category;
        });
        this.setState({markers: temp, modalVisible: false});

    }

    _renderMarkers(){

        var finalMarkers = [];

        this.state.markers.map(marker => {
        if(marker.helpMode === false)
            finalMarkers.push(
                <Marker
            coordinate={marker.coordinates}
            key={marker._id}
            pinColor={"#11410C"}
                >
                <Callout onPress={() => this.call(marker.contact) }>
        <View style={{height: 100, width: 100, flex: 1}}>
        <Text style={{fontSize: 14, color: 'black', alignSelf: 'center', fontWeight: '500'}}>
            Help Available
            </Text>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                }}
            />

            <Text style={{fontSize: 16, color: 'black', alignSelf: 'center', fontWeight: "500"}}>
                {marker.probType}
            </Text>

            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                }}
            />

            <Text style={{fontSize: 13, color: 'black', alignSelf: 'center'}}>
        <TimeAgo time={marker.createdAt} />
        </Text>
        <View style={{alignItems:'center', alignSelf: 'center'}}>
        <Button transparent textStyle={{color: '#87838B'}} onPress={() => this.call(marker.contact) }>
        <Ionicons name="md-call" size={25} color={"black"} style={{alignSelf:'center' }}/>
        </Button>
        </View>
        </View>
        </Callout>
        </Marker>
            );
        else if(marker.helpMode === true)
            finalMarkers.push(
                <Marker
                    coordinate={marker.coordinates}
                    key={marker._id}
                    pinColor={"#FF5047"}
                >
                    <Callout onPress={() => this.call(marker.contact) }>
                    <View style={{height: 100, width: 100, flex: 1}}>
                        <Text style={{fontSize: 16, color: 'black', alignSelf: 'center'}}>
                            Need Help
                        </Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.5,
                            }}
                        />

                        <Text style={{fontSize: 16, color: 'black', alignSelf: 'center', fontWeight: "500"}}>
                            {marker.probType}
                        </Text>

                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.5,
                            }}
                        />

                        <Text style={{fontSize: 13, color: 'black', alignSelf: 'center'}}>
                            <TimeAgo time={marker.createdAt} />
                        </Text>
                        <View style={{alignItems:'center', alignSelf: 'center'}}>
                            <Button transparent textStyle={{color: '#87838B'}} onPress={() => this.call(marker.contact) }>
                                <Ionicons name="md-call" size={25} color={"black"} style={{alignSelf:'center' }}/>
                            </Button>
                        </View>
                    </View>
                    </Callout>
                </Marker>
            );
        });
        return finalMarkers;
    }


    render() {
        return (

            <View style={[styles.container,{width: window.width}]}>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 13.0827,
                        longitude: 80.2707,
                        latitudeDelta: 2.945,
                        longitudeDelta: 0.1991,
                    }}
                >
                    {
                        this._renderMarkers()
                    }

                </MapView>

                <View style={{marginLeft: window.width/1.3, flexDirection: 'row'}}>
                    <TouchableOpacity style={{ marginBottom: window.height/1.4, marginRight: 5}} onPress={() => this._toggleLegendModal()}>
                        <Ionicons name="md-help-circle" size={50} color={"black"}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: window.height/1.7, marginRight: window.width/93}} onPress={() => this._refresh()}>
                        <Ionicons name="md-refresh-circle" size={50} color={"black"}/>
                    </TouchableOpacity>
                </View>



                <ActionButton buttonColor="rgba(231,76,60,1)" offsetX={5} offsetY={7}
                              renderIcon={() => <Icon name="md-options" size={20} color="black" />}
                              onPress={() => this._simpleFilter("category")}
                >
                    {/*<ActionButton.Item buttonColor='#9b59b6' title="Priority" onPress={() => this._simpleFilter("priority")}>*/}
                        {/*<Icon name="md-podium" style={styles.actionButtonIcon} size={30} color={"black"}/>*/}
                    {/*</ActionButton.Item>*/}
                    {/*<ActionButton.Item buttonColor='#3498db' title="Time" onPress={() => this._simpleFilter("time")}>*/}
                        {/*<Icon name="md-alarm" style={styles.actionButtonIcon} size={30} color={"black"}/>*/}
                    {/*</ActionButton.Item>*/}
                    {/*<ActionButton.Item buttonColor='#1abc9c' title="Category" onPress={() => this._simpleFilter("category")}>*/}
                        {/*<Icon name="md-apps" style={styles.actionButtonIcon} size={30} color={"black"}/>*/}
                    {/*</ActionButton.Item>*/}
                </ActionButton>

                <Modal isVisible={this.state.legendModalVisible} onBackButtonPress={() => this._toggleLegendModal()} deviceHeight={window.height}>

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



                <Modal isVisible={this.state.modalVisible} onBackButtonPress={() => this._toggleModal()} deviceHeight={window.height}>

                    <View style={{
                        flex: 0,
                        height: 300,
                        width:300,
                        marginLeft:10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "column",
                        backgroundColor: 'white'
                    }}>

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
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Clothes")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Clothes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._filterCategory("Shelter")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                Shelter
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginRight: 22}} onPress={() => this._simpleFilter("All")}>
                            <Text style={{color: "black", fontSize: 30}}>
                                All
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
        height: window.height- (Header.HEIGHT + 73 ),
        width: window.width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: window.height- (Header.HEIGHT + 73 ),
        width: window.width
    },

});
