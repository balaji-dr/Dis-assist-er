import { AsyncStorage } from "react-native";


export const onSignIn = (access_token) => AsyncStorage.setItem('access_token', access_token);

export const onSignOut = () => AsyncStorage.removeItem('access_token');

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('access_token')
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
