import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ImageBackground, Image} from 'react-native';
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
            <ImageBackground source={require("../assets/images/bg.png")}  style={{width: '100%', height: '100%'}}>
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
            </ImageBackground>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
    },
});
