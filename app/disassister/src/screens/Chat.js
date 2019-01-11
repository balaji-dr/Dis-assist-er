import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { DirectLine } from "botframework-directlinejs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { QnA_BOT_DL_KEY } from 'react-native-dotenv'

const directLine = new DirectLine({
    secret: QnA_BOT_DL_KEY
});

const botMessageToGiftedMessage = botMessage => {
        return ({
            ...botMessage,
            _id: botMessage.id,
            createdAt: botMessage.timestamp,
            user: {
                _id: 2,
                name: "Surviva",
                avatar:
                    "https://cdn3.iconfinder.com/data/icons/human-behaviour-and-situations-part-1/400/Popular-19-512.png"
            }
        })
};

function giftedMessageToBotMessage(message) {
    return {
        from: { id: 1, name: "John Doe" },
        type: "message",
        text: message.text
    };
}


export default class Chat extends React.Component {
    state = {
        messages: [

        ]
    };
    constructor(props) {
        super(props);
        directLine.activity$
            .filter(activity => activity.type === 'message' && activity.from.id === 'SurvivaQnABot')
            .subscribe(botMessage => {
            const newMessage = botMessageToGiftedMessage(botMessage);
            this.setState({ messages: [newMessage, ...this.state.messages] });
        });
    }

    static navigationOptions = ({ navigation  }) => ({
            title: "Surviva Bot",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },
            headerLeft: (
                <View>
                    <Ionicons name="md-arrow-back" size={30} onPress={()=>navigation.navigate("Apps")}
                              style={{marginLeft:15}} color={"white"}/>
                </View>
            ),
            headerMode: 'float',
            tabBarVisible: false

        }
    );


    onSend = messages => {
        this.setState({ messages: [...messages, ...this.state.messages] });
        messages.forEach(message => {
            directLine
                .postActivity(giftedMessageToBotMessage(message))
                .subscribe(() => console.log("success"), () => console.log("failed"));
        });
    };

    renderContainer(){
        if(this.state.messages.length === 0)
        return (
            <View style={{alignSelf: 'center'}}>
                <Image style={{width: 200, height: 200}} source={{uri: "https://cdn3.iconfinder.com/data/icons/human-behaviour-and-situations-part-1/400/Popular-19-512.png"}} />
                <Text>
                    Ask me anything about disaster
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                    {this.renderContainer()}


                <GiftedChat
                    user={{
                        _id: 1
                    }}
                    messages={this.state.messages}
                    onSend={this.onSend}
                    // renderComposer={this.renderContainer}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
