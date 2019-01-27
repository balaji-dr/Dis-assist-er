import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Animated,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
let window = Dimensions.get('window');
import { human } from 'react-native-typography'
import UserFeed from "../primary/UserFeed";
import {GET_USER_ISSUES, TOGGLE_VISIBILITY} from "../store/API";
import axios from "axios/index";


type Props = {};
class Profile extends Component<Props> {

    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            refreshing: false,
            feedList:[
                // {title: "Hello", location: "CEG", description: "We need milk powder and water urgently",
                //     date: "12/12/12", status: "Verified", category: "food", solved: true},
                // {title: "Hello", location: "CEG", description: "We need volunteers for cleaning up the fallen trees.",
                //     date: "12/12/12", status: "Verified", category: "Volunteering", solved: false},
                // {title: "Hello", location: "CEG", description: "Electric wires has fallen.",
                //     date: "12/12/12", status: "Verified", category: "Electricity", solved: true},
            ],
            profile: {
                name: "",
                email: ""
            }
        };
    }


    static navigationOptions = ({ navigation  }) => ({
            title: "Profile",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );

    async componentWillMount(){
        const token = await AsyncStorage.getItem('token');
        axios.get(GET_USER_ISSUES, {
            headers: {
                "x-access-token": token
            }
        }).then((response) => {
            if (response.data.status === true)
                this.setState({feedList: response.data.details, profile: response.data.profile})
        }).catch((error) => {
            this.props.navigation.navigate("SignedOut")
        })

    }

    changeStatus(value, _id){
        axios.get(TOGGLE_VISIBILITY + _id).then((response) => {
            if (response.data.status === true){
                let newArray = this.state.feedList.map(issue => (
                    issue._id === _id ? {...issue, visible: value } : issue
                ));
                this.setState({feedList: newArray});
            }

        }).catch((error) => {
            alert("There was a problem in authentication.");
            this.props.navigation.navigate("SignedOut")
        })
    }

    async logout(){
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate("SignedOut")
    }


    render() {


        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <View style={styles.personblock}>
                    <View style={{position: 'absolute', alignSelf: "flex-end"}}>
                        <TouchableOpacity onPress={() => this.logout()}>
                            <Ionicons name="md-exit" size={33} color={"white"} style={{alignSelf: 'center', marginRight: 20, marginTop: 7}}/>
                        </TouchableOpacity>
                    </View>
                    <Ionicons name="md-person" size={140} color={"white"} style={{alignSelf: 'center'}}/>
                    <Text style={[{color: "white", alignSelf: 'center', fontSize: 17,  marginBottom: 15}, human.calloutWhite]}>{this.state.profile.name} - {this.state.profile.email}</Text>
                </View>

                    <UserFeed navigation={this.props.navigation} feedList={this.state.feedList}/>

            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F5',
    },
    personblock: {
        alignContent: 'center',
        backgroundColor: "#2D3F43",
        width: window.width,
        borderBottomLeftRadius:70,
        // borderBottomRightRadius:20,
        borderWidth: 0,

    }
});
