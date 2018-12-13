import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Share } from 'react-native'
import { Back, ShareIcon } from "../utilities/icons"
import { DimensionsWidth } from "../utilities/Dimensions";

class ButtonCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    backHandler = (route, navigation) => {
        route === 'back' ? navigation.goBack() : navigation.navigate(route)
    }
    onClick = (name) => {
        Share.share({
            message: 'Share',
            url: 'http://yondu.com.ph',
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

        const { name, text, style, title, route, share, ...rest } = this.props
        const navigation = this.props.navigation
        return (

            <View style={[styles.headerContainer, style]}>
                {/* <Text style={{ color: '#fff', fontSize: 18 }}>{text}</Text> */}
                <View style={{ flex: 1 }}>

                    <TouchableOpacity onPress={() => this.backHandler(route, navigation)}>
                        <Back white />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5 }}>
                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>

                </View>

                <View style={{ flex: 1 }}>
                    {share ? <TouchableOpacity onPress={() => this.onClick(name)}>
                        <ShareIcon />
                    </TouchableOpacity>
                        : null}
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        // justifyContent: 'space-between',
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
