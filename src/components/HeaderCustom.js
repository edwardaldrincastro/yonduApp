import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Back, Share } from "../utilities/icons";

class ButtonCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const { text, ...rest } = this.props
        const route = this.props.route
        const navigation = this.props.navigation
        return (

            <View style={{ width: '100%', justifyContent: 'space-between', alignItems:'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
            height: 56, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#E8E8EB'}}>
                {/* <Text style={{ color: '#fff', fontSize: 18 }}>{text}</Text> */}
                <Back/>
                <Share/>
            </View>

        );
    }
}

export default ButtonCustom
