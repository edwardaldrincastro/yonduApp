import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { main_components, company_name, custom_style } from "../utilities/data/main_components"
import { services } from "../utilities/data/data"
import { Apps, Desktop, Filing, People, Ribbon, Unlock } from "../utilities/icons";

const localServices = services[0]

class Services extends Component {
    // getObject = (route) => {
    //     const routeArray = localServices[route]
    //     const routeKeys = Object.keys(localServices[route]) //array
    //     return globalRouteKeys = routeKeys, globalRouteArray = routeArray
    // }
    routeHandler = (route) => {
        let newRouteString = route.replace(/[^A-Z0-9]+/ig, '')
        return localServices[newRouteString] 

    }
    iconHandler = (icon) => {
        switch (icon) {
            case 'Apps':
                return <Apps />
            case 'Desktop':
                return <Desktop />
            case 'Filing':
                return <Filing />
            case 'People':
                return <People />
            case 'Ribbon':
                return <Ribbon />
            case 'Unlock':
                return <Unlock />

        }
    }
    render() {
        const route = this.props.route
        const routeID = this.props.routeID
        console.log('route name', route);
        console.log('local', localServices)
        const routeArray = this.routeHandler(route)

        // console.log('localRoute', localServices[newRoute])
        // console.log('new', newRoute);
        // console.log('global keys', globalRouteKeys)
        // console.log('global array', globalRouteArray)
        // console.log('specific', globalRouteArray.SoftwareDevelopment);
        return (
            <ScrollView>
                {/* <Text>hi</Text> */}
                <View style={[styles.container, custom_style.container]}>
                    {routeArray.map((feature, index) => (
                        <View style={{ flex: 1, marginVertical: 10, paddingVertical: 20, paddingHorizontal: 20, elevation: 5, backgroundColor: '#fff', borderLeftWidth: 5, borderLeftColor: '#66CC99' }} key={index}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                {this.iconHandler(feature.icon)}
                                <Text style={[styles.featureText, custom_style.featureText]}>{feature.name}</Text>
                            </View>
                            {feature.content.map((details, indexx) => (
                                <View style={{ paddingHorizontal: 20 }} key={indexx}>
                                    <Text>{details}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
                {/* <View style={[styles.container, custom_style.container]}>
                    {globalRouteKeys.map((feature, index) => (
                        <View style={{ flex: 1, marginVertical: 10, paddingVertical: 20, paddingHorizontal: 20, elevation: 5, backgroundColor: '#fff', borderLeftWidth: 5, borderLeftColor: '#66CC99' }} key={index}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Desktop />
                                <Text style={[styles.featureText, custom_style.featureText]}>{feature}</Text>
                            </View>
                            {globalRouteArray[feature].map((details, indexx) => (
                                <View style={{ paddingHorizontal: 20}} key={indexx}>

                                    <Text>{details}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingHorizontal: 15
        // textAlign: 'center',
        // margin: 30,
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

export default Services