import React, { Component } from 'react'
import { StyleSheet, Text, View, BackHandler, TouchableOpacity } from 'react-native'
import { Services, ButtonCustom } from "../components"
import { Burger } from "../utilities/icons";



class WhatWeDo extends Component {
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
    static navigationOptions = ({ navigation }) => {
        return {
        headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Burger />
        </TouchableOpacity>),
    }
}
    render() {
        const route = this.props.navigation.getParam('name', 'No name')
        const routeID = this.props.navigation.getParam('id', 'No ID')
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    {/* <Text>asd</Text> */}
                    <Services route={route} routeID={routeID} />
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCustom text={'Get a Quote'} navigation={this.props.navigation} route={'Quotation'} />
                </View>
            </View>
        )
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
        width: '100%',
        flex: 0.8,
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'center'
    }

})

export default WhatWeDo