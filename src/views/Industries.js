import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, BackHandler, Image } from 'react-native'
import { services } from "../utilities/data/data"
import { Services, HeaderCustom } from "../components"
import { DimensionsHeight, DimensionsWidth } from "../utilities/Dimensions";

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
        console.log(DimensionsHeight);
        return (
            <View style={styles.container}>
                {/* <HeaderCustom /> */}
                {/* <View style={{height: ((DimensionsHeight-68)/4)*3, backgroundColor: '#212121'}}>

                </View> */}
                <ScrollView>
                    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={styles.title}>Lorem Ipsum dolor sir amet</Text>
                        <Text style={styles.subtitle}>Quisque a est vel tortor lobortis scelerisque vitae id risus.</Text>
                    </View>
                    {/* flex: 6, minHeight: ((DimensionsHeight-68)/4)*3  */}

                    <View style={{ flex: 6, backgroundColor: '#212121' }}>
                        <View style={{ flexWrap: 'wrap', flexDirection: 'row', backgroundColor: '#212121' }}>
                            {routeArray.map((industries, index) => (
                                <View key={index} style={{ width: '50%', padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ height: 70, width: 70 }}
                                        source={industries.image} />
                                    <Text style={styles.name}>{industries.name}</Text>
                                    
                                </View>
                                
                            ))}
                        </View>
                    </View>
                </ScrollView>
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
    name: {
        fontSize: 16,
        color: '#8d8d8d',
        paddingTop: 10
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

export default Industries