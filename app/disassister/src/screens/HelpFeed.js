import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
    FlatList,
    AsyncStorage,
    RefreshControl, Dimensions
} from 'react-native';
import FeedCard from "../components/FeedCard";
import Modal from "react-native-modal";
import {Content} from "native-base";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {GET_ALL_HELP_FEED} from "../store/API";
import {simpleGet} from "../utils/functions"
let window = Dimensions.get('window');


class HelpFeed extends Component {

    constructor(props) {
        super(props);
        this._simpleFilter = this._simpleFilter.bind(this);
        this._toggleModal = this._toggleModal.bind(this);
        this._filterCategory = this._filterCategory.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this.state = {
            refreshing: false,
            modalVisible: false,
            defaultList:[
                // {probTitle: "Hello", location: "Ceg", probDesc: "We need volunteers for cleaning up the fallen trees.",
                //     time: "12/12/12", status: "Verified", probType: "Volunteering", emotion: 7},
                // {probTitle: "Hello", location: "CEG", probDesc: undefined,
                //     time: "12/12/12", status: "Verified", probType: "Food", emotion: 1},
                // {probTitle: "Hello", location: "CEG", probDesc: "Electric wires has fallen.",
                //     time: "12/12/12", status: "Verified", probType: "Shelter", emotion: 9},
                // {probTitle: "Hello", location: "CEG", probDesc: "Electric wires has fallen.",
                //     time: "12/12/12", status: "Verified", probType: "Clothes", emotion: 9},
                // {probTitle: "Hello", location: "CEG", probDesc: "Electric wires has fallen.",
                //     time: "12/12/12", status: "Verified", probType: "Medical", emotion: 9}
            ],
            feedList:[
                // {probTitle: "Hello", location: "ceg", probDesc: undefined,
                //     time: "12/12/12", status: "Verified", probType: "Food", emotion: 1},
                // {probTitle: "Hello", location: "CEG", probDesc: "We need volunteers for cleaning up the fallen trees.",
                //     time: "12/12/12", status: "Verified", probType: "Volunteering", emotion: 7},
                // {probTitle: "Hello", location: "CEG", probDesc: "Electric wires has fallen.",
                //     time: "12/12/12", status: "Verified", probType: "Shelter", emotion: 9},
            ],
            priorityList:[
                // {probTitle: "Hello", location: "ceg", probDesc: undefined,
                //     time: "12/12/12", status: "Verified", probType: "Food", emotion: 1},
                // {probTitle: "Hello", location: "CEG", probDesc: "We need volunteers for cleaning up the fallen trees.",
                //     time: "12/12/12", status: "Verified", probType: "Volunteering", emotion: 7},
                // {probTitle: "Hello", location: "CEG", probDesc: "Electric wires has fallen.",
                //     time: "12/12/12", status: "Verified", probType: "Shelter", emotion: 9},
            ]
        };
    }

    static navigationOptions = ({ navigation  }) => ({
            title: "Help Feed",
            headerTintColor: 'white',
            // headerRight: (
            //     <TouchableOpacity style={{marginRight: 22}} onPress={() => navigation.navigate("Feed1")}>
            //         <Text style={{color: "white", fontSize: 30}}>
            //             &#8377;
            //         </Text>
            //     </TouchableOpacity>
            // ),

            headerStyle: {
                backgroundColor: '#2D3F43',
            },

        }
    );

    async componentDidMount(){
        await simpleGet(GET_ALL_HELP_FEED).then((data) => {
            console.log(data);
            this.setState({feedList: data.details, defaultList: data.details});
            let newList = this.state.defaultList.slice();
            newList.sort(function (a, b){
                return parseFloat(a.emotion) - parseFloat(b.emotion);
            });
            this.setState({priorityList: newList});
        });
    }


    async _onRefresh(){
        this.setState({refreshing: true});
        await simpleGet(GET_ALL_HELP_FEED).then((data) => {
            console.log(data);
            this.setState({feedList: data.details, defaultList: data.details, priorityList: data.details, refreshing: false});
            let newList = data.details;
            newList.sort(function (a, b){
                return parseFloat(a.emotion) - parseFloat(b.emotion);
            });
            this.setState({priorityList: newList});
        }).catch((error) => {
            console.log(error);
            this.setState({refreshing: false});
        });

    }


    _renderFeedList(){
        return(
            <ScrollView style={{backgroundColor: "#EEF2F5"}}

                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={() => this._onRefresh()}
                    />
                }
            >
                <Content padder>
                    <FlatList data={this.state.feedList}
                              keyExtractor={(item, index) => item._id}
                              key={(item, index) => item._id }
                              renderItem={({item, index}) => (
                                  <FeedCard title={item.probTitle} description={item.probDesc}
                                            category={item.probType} location={item.location}
                                            status={item.status} date={item.createdAt}
                                            contact={item.contact}
                                            key={item._id} navigation={this.props.navigation}
                                  />
                              )}
                    />
                </Content>
            </ScrollView>
        )
    }

    _simpleFilter(filter){
        if(filter==="priority"){
            let newList = this.state.defaultList.slice();
            newList.sort(function (a, b){
                return parseFloat(a.emotion) - parseFloat(b.emotion);
            });
            this.setState({priorityList: newList});
            this.setState({feedList: this.state.priorityList.slice()});
        }
        else if(filter==="time"){
            this.setState({feedList: this.state.defaultList.slice()})
        }
        else{
           this.setState({modalVisible: true});
        }
    }

    _toggleModal(){
        this.setState({modalVisible : !this.state.modalVisible});
    }

    _filterCategory(category){
        var newArray = this.state.defaultList.slice();
        var temp = newArray.filter(function(obj) {
            return obj.probType === category;
        });
        this.setState({feedList: temp, modalVisible: false});

    }


    render() {
        return (
            <View style={{backgroundColor: "#EEF2F5", flex: 1}}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />

                {/*<Feed feedList={this.state.feedList}/>*/}
                {this._renderFeedList()}
                <ActionButton buttonColor="rgba(231,76,60,1)" offsetX={7} offsetY={7} renderIcon={() => <Icon name="md-options" size={30} color="black" />}>
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



                    <Modal isVisible={this.state.modalVisible} onBackButtonPress={() => this._toggleModal()}
                           deviceHeight={window.height}>

                        <View style={{
                            flex: 0,
                            height: 270,
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
                        </View>
                    </Modal>


            </View>
        );
    }
}

export default HelpFeed;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    }
});
