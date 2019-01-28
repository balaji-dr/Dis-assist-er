import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList, RefreshControl, AsyncStorage, ScrollView} from 'react-native';
import {Content, Container} from "native-base";
import FundCard from "../components/FundCard";
import {GET_FUNDS, GET_USER_ISSUES} from "../store/API";
import axios from "axios/index";

type Props = {};
class Fund extends Component<Props> {

    constructor(props) {
        super(props);
        this._onRefresh = this._onRefresh.bind(this);
        this.state = {
            refreshing: false,
            fundList: []
        };
    }

    componentDidMount(){
        axios.get(GET_FUNDS).then((response) => {
            this.setState({
                fundList: response.data.details,
            })
        })
            .catch((error) => console.log(error));
    }


    static navigationOptions = ({ navigation  }) => ({
            title: "Funds",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );

    _onRefresh(){
        this.setState({refreshing: true});
        axios.get(GET_FUNDS).then((response) => {
            this.setState({
                fundList: response.data.details,
                refreshing: false
            })
        })
            .catch((error) => console.log(error));
    }


    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <Content>
                    <FlatList data={this.state.fundList}

                              keyExtractor={(item, index) => item._id}
                              key={(item, index) => item._id }
                              renderItem={({item, index}) => (
                                  <FundCard title={item.title} description={item.description}
                                            image={item.image} time={item.createdAt}
                                            link={item.link}
                                            key={item._id} navigation={this.props.navigation}
                                  />
                              )}
                    />
                </Content>
            </ScrollView>
        );
    }
}

export default Fund;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#EEF2F5',
    // },
});
