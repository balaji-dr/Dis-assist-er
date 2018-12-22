import {StyleSheet, Dimensions} from 'react-native';
let window = Dimensions.get('window');


export const WeatherCardStyles = StyleSheet.create({
    card: {
        marginLeft:10,
        width: window.width/1.5,
        height: window.height/4,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden'
    },
    cloud: {
        height: 100,
        width: 130,
        marginLeft: 10
    },
    degree: {
        fontSize: 60,
        color: "white",
        marginTop: 10
    },
    climate: {
        fontSize: 20,
        marginLeft: 10,
        color: "white"
    },
    body: {
        flexDirection: "row",
        flex: 2,
        overflow: "visible"
    },
    innerBody: {
        backgroundColor: "#2399E8",
        flexDirection: 'column'
    },
    date: {
        fontWeight: "500",
        marginLeft: 10,
        fontSize: 16,
        color: "black"
    }
});


export const AlertCardStyles = StyleSheet.create({
    card: {
        marginLeft:10,
        width: window.width/1.055,
        height: "auto",
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: "#C92627"
    },
    info: {
        fontSize: 20,
        color: "white",
        fontWeight: "500"
    }
});
