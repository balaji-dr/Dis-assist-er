import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import LoginButtons_Dup from "../components/LoginButtons_Dup";


type Props = {};
class Login_Dup extends Component<Props> {

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

                <LoginButtons_Dup navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default Login_Dup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    },
});
