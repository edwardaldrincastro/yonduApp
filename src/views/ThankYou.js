import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Services, ButtonCustom } from "../components"

class ThankYou extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Thank you for your inquiry</Text>
                    <Text>Your message has been sent successfully</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCustom text={'Back to Home'} navigation={this.props.navigation} route={'Home'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // padding: 20
    },
    content: {
        flex: 9.2
    },
    buttonContainer: {
        flex: 0.8,
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'center'
    }
})

export default ThankYou
