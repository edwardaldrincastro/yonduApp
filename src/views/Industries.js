import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, BackHandler, Image } from 'react-native'
import { services } from "../utilities/data/data"
import { Services, HeaderCustom } from "../components"

class Industries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localServices: services[0]
        }
    }
    handleBackPress = () => {
        this.props.navigation.navigate('Home')
        return true
    }
    routeHandler = (route) => {
        let newRouteString = route.replace(/[^A-Z0-9]+/ig, '')
        return this.state.localServices[newRouteString] 

    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    static navigationOptions = {
        title: 'Industries',
    }
    render() {
        const route = this.props.navigation.state.routeName
        const routeArray = this.routeHandler(route)
        return (
            <View style={styles.container}>
                {/* <HeaderCustom /> */}
                <View style={{ flex: 1 }}>
                    <Text>Lorem Ipsum dolor sir amet</Text>
                    <Text>Quisque a est vel tortor lobortis scelerisque vitae id risus.</Text>
                </View>
                <View style={{ flexWrap: 'wrap', flex: 6, flexDirection: 'row' }}>
                {routeArray.map((industries, index) => (
                    <View key={index} style={{ width:'50%', height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#E97D40' }}>
                        <Image 
                        resizeMode='contain'
                        style={{height: 100, width: 100}}
                        source={industries.image}/>
                        <Text>{industries.name}</Text>
                    </View>
                ))}
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

export default Industries