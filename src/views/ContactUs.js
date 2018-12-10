import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { main_components, company_name, custom_style, services } from "../utilities/data/main_components"
import { Services } from "../components";

class ContactUs extends Component {
    handleBackPress = () => {
        this.props.navigation.navigate('Home')
        return true
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    static navigationOptions = {
        drawerLabel: 'Contact Us',
    }
    render() {
        const route = this.props.navigation.getParam('name', 'No name')
        const routeID = this.props.navigation.getParam('id', 'No ID')
        console.log(services);
        return (
            <View style={styles.container}>
                <Text>About</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        // padding: 20
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFC83D'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    }
})

export default ContactUs