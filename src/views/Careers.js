import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { main_components, company_name, custom_style, services } from "../utilities/data/main_components"
import { Services, ButtonCustom } from "../components";

class Careers extends Component {
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
        drawerLabel: 'Careers',
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
        height: '100%',
        width: '100%',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#fff',
        // padding: 20
    },
})

export default Careers