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
                <View style={styles.mapContainer}>

                </View>
                <View style={styles.contentContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#fff',
        // padding: 20
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#212121'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#E61A5F'
    }
})

export default ContactUs