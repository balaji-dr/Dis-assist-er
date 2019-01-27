import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import LoginButtons from "../components/LoginButtons";


type Props = {};
class Login extends Component<Props> {

    static navigationOptions = ({ navigation  }) => ({
            title: "Login",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );



    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <Image source={require('../assets/images/dis-assist-er.png')} style={{width: 200,
                    height:270,
                    resizeMode: 'contain'}}/>

                <LoginButtons navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    },
});
