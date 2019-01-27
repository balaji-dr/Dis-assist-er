import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Content, Container} from "native-base";
import FundCard from "../components/FundCard";

type Props = {};
class Fund extends Component<Props> {

    static navigationOptions = ({ navigation  }) => ({
            title: "Funds",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );



    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <Content>
                    <FundCard/>
                </Content>
            </Container>
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
