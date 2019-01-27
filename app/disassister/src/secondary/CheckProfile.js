import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {isSignedIn} from "../utils/functions"
import {AskHelpSwitch, AskHelpSwitchNav, ProfileSwitch} from "../navigation/Switch";


export default class CheckProfile extends React.Component {

    state = {
        signedIn: false,
        checkedSignIn: false,
        loading: false,
    };

    componentWillMount(){
        isSignedIn()
            .then(response => this.setState({ signedIn: response, checkedSignIn: true }))
            .catch(error => alert("Oops! Something broked"));

    }

    render() {
        const { checkedSignIn, signedIn } = this.state;
        const Layout = ProfileSwitch(signedIn);
        if(checkedSignIn){
            return(
                <Layout />
            );
        }else{
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
