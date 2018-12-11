import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Share } from 'react-native'
import { Back, ShareIcon } from "../utilities/icons";

class ButtonCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onClick = (name) => {
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: `Share ${name}`,
                // iOS only:
                // excludedActivityTypes: [
                //     'com.apple.UIKit.activity.PostToTwitter'
                // ]
            })
    }
    render() {

        const { name, text, style, route, ...rest } = this.props
        const navigation = this.props.navigation
        return (

            <View style={[styles.headerContainer, style]}>
                {/* <Text style={{ color: '#fff', fontSize: 18 }}>{text}</Text> */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Back white />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onClick(name)}>
                    <ShareIcon />
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 20,
        flexDirection: 'row',
        height: 56,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: 'transparent'
    }
})

export default ButtonCustom
