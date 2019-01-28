import {StyleSheet, Dimensions} from 'react-native';
let window = Dimensions.get('window');


export const WeatherCardStyles = StyleSheet.create({
    card: {
        marginLeft:10,
        marginTop:10,
        width: window.width/1.5,
        height: window.height/3.7,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden'
    },
    cloud: {
        height: 120,
        width: 130,
        marginLeft: 10
    },
    degree: {
        fontSize: 40,
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
        flexDirection: 'column',
        height: window.height/6.5
    },
    date: {
        fontWeight: "500",
        marginLeft: 10,
        fontSize: 16,
        color: "black",
        // alignSelf: 'center'
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


export const HelpFormStyles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
    maintitle: {
        fontSize: 40,
        marginLeft: 6,
        marginBottom: 10
    },
    title: {
        marginTop: 15,
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 6
    },
    description: {
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 6
    },
    textArea: {
        borderRadius:10,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    phone: {
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 6,
        marginBottom: 5,
        marginTop:10
    },
    submit: {
        width: 200,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    location: {
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 6,
        marginBottom: 5
    },
    phoneInput: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15
    },
    category: {
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 6,
        marginTop: 10
    },
    titleInput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    }
});
