import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList, ScrollView, RefreshControl} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import FeedCard from "../components/FeedCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import {GET_SUGGESTIONS} from "../store/API";

class Notify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            refreshing: false,
            feedList: [{issue_id: "rexerx"}]
        };
    }

    static navigationOptions = ({ navigation  }) => ({
        title: "Notifications",
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#2D3F43'
        },
        headerLeft: (
            <View>
                <Ionicons name="md-arrow-back" size={30} onPress={()=>navigation.goBack()}
                          style={{marginLeft:15}} color={"white"}/>
            </View>
        ),
        headerMode: 'float',
        tabBarVisible: false

    });

    componentDidMount(){
        this.setState({email: this.props.navigation.state.params.email, refreshing: true});
        axios.post(GET_SUGGESTIONS, {
            email: this.props.navigation.state.params.email
        }).then((data) => {
            // console.log(data.data.details);
            this.setState({feedList: data.data.details, refreshing: false})
        }).catch((error) => {
            this.props.navigation.goBack();
            // console.log(error);
        })
    }

    _onRefresh(){
        this.setState({email: this.props.navigation.state.params.email});
        axios.post(GET_SUGGESTIONS, {
            email: this.props.navigation.state.params.email
        }).then((data) => {
            // console.log(data.data.details);
            this.setState({feedList: data.data.details, refreshing: false})
        }).catch((error) => {
            this.props.navigation.goBack();
            // console.log(error);
        })
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
                              keyExtractor={(item, index) => index.toString()}
                              key={(item, index) => item.issue_id }
                              renderItem={({item, index}) => (
                                  <FeedCard  description={item.description}
                                            category={item.category} location={item.location}
                                            status={item.status} date={item.created_at}
                                            helpMode={item.helpmode}
                                            contact={item.contact}
                                            key={item.issue_id} navigation={this.props.navigation}
                                  />
                              )}
                    />
                </Content>
            </ScrollView>
        )
    }


    render() {
        return (
            <ScrollView style={{backgroundColor: "#EEF2F5"}}>
                {this._renderFeedList()}
            </ScrollView>
        );
    }
}

export default Notify;

const styles = StyleSheet.create({
    heading: {
        padding: 10,
        fontSize: 17,
        fontWeight: "500"
    }

});
