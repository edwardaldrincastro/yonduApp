import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { Button, Text } from "native-base";

class ButtonCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
        const {text, onPress, ...rest} = this.props
        return (
            <TouchableOpacity onPress={onPress}>

                <View style={{ width: '100%', height: 45, backgroundColor: '#66CC99', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>{text}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

export default ButtonCustom
