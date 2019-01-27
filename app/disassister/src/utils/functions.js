import { AsyncStorage } from "react-native";
import axios from "axios";


export const onSignIn = (access_token) => AsyncStorage.setItem('access_token', access_token);

export const onSignOut = () => AsyncStorage.removeItem('access_token');

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('token')
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};


export async function simpleGet(URL){
    return axios.get(URL)
        .then(function (response) {
            // console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
