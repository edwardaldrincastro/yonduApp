import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Services, ButtonCustom } from "../components"

class ThankYou extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const {title, subtitle, } = this.props
        console.log('state', this.props.navigation.state);
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require('../assets/images/clive-thank-you.png')} style={{height: '50%', width: '50%'}}/>
                        <Text style={styles.title}>Thank you for your inquiry</Text>
                        <Text style={styles.subtitle}>Your message has been sent successfully.</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCustom text={'Back to Home'} onPress={() => this.props.navigation.navigate('Home')} />
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
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        padding: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8d8d8d',
        width: '48%',
        textAlign: 'center'
    }
})

export default ThankYou
