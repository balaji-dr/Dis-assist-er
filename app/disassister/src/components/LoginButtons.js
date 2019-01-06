import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import React,{Component} from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {AsyncStorage} from "react-native";


class LoginButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            error: null,
        };
    }

    componentDidMount(){
        GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            .then(() => {
                // play services are available. can now configure library
            })
            .catch(err => {
                console.log('Play services error', err.code, err.message);
            });

        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/userinfo.email'], // what API you want to access on behalf of the user, default is email and profile
            iosClientId: '642914527835-rsv6tkadak3vfbqaq9sl1iudbghs4781.apps.googleusercontent.com', // only for iOS
            webClientId: '642914527835-m65sfnm3h1hr05l0s3tcec9bcal6qc4i.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
            accountName: '', // [Android] specifies an account name on the device that should be used
        });

    }


    signIn = async () => {
        try {
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo:userInfo });
            console.log(userInfo);

            axios.post(LoginURL, {
                client_id: ClientId,
                client_secret: ClientSecret,
                backend: "google-oauth2",
                grant_type: "convert_token",
                token: userInfo.accessToken
            })
                .then((response) => {
                    if (response.status === 200){

                        console.log(response.data);
                        AsyncStorage.setItem("access_token", response.data.access_token);
                        AsyncStorage.setItem("refresh_token", response.data.refresh_token);
                        this.props.navigation.navigate('SignedIn')

                    }
                    else {
                        console.log(response.data);
                        alert(response.error);
                    }
                })
                .catch((error) => {
                    console.log("No connection to server");
                    console.log(error);
                })

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error);
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error);
                // operation (f.e. sign in) is in progress already
            } else {
                console.log(error);
                // some other error happened
            }
        }
    };

    facebook_login(accessToken) {
        // axios.post(LoginURL, {
        //     client_id: ClientId,
        //     client_secret: ClientSecret,
        //     backend: "facebook",
        //     grant_type: "convert_token",
        //     token: accessToken
        // })
        //     .then((response) => {
        //         if (response.status === 200){
        //             console.log(response.data);
        //             AsyncStorage.setItem("access_token", response.data.access_token);
        //             AsyncStorage.setItem("refresh_token", response.data.refresh_token);
        //             this.props.navigation.navigate('SignedIn')
        //
        //         }
        //         else {
        //             console.log(response.data);
        //             return response.data
        //         }
        //     })
        //     .catch((error) => {
        //         console.log("No connection to server");
        //         console.log(error);
        //     })
    }


    render() {
        return (
            <View>

                <GoogleSigninButton
                    style={{ width: 200, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}
                    disabled={this.state.isSigninInProgress} />


                <LoginButton
                onLoginFinished={
                (error, result) => {
                if (error) {
                alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                alert("login is cancelled.");
                } else {
                AccessToken.getCurrentAccessToken().then(
                (data) => {
                console.log(data.accessToken.toString());
                this.facebook_login(data.accessToken.toString());
                this.props.navigation.navigate('SignedIn');
                }
                )
                }
                }
                }
                onLogoutFinished={() => alert("logout.")}/>

            </View>
        );
    }
}

export default LoginButtons;
