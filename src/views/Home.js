import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground, Image } from 'react-native'
import { main_components, company_name, custom_style } from "../utilities/data/main_components"


class Home extends Component {
    routeHandler = (id, route) => {
        let newRouteString = route.replace(/[^A-Z0-9]+/ig, '')
        console.log(newRouteString)
        console.log(id, route);
        this.props.navigation.navigate(newRouteString,
            {
                id: id,
                name: route
            }
        )
    }
    render() {
        return (
            <View style={[styles.container, custom_style.container]}>
                {main_components.map((feature, index) => (
                    feature.name !== 'About'
                        ?
                        <View style={styles.featureContainer}
                            key={index}>
                            {console.log('route name:', feature.name)}
                            <TouchableHighlight onPress={() => this.routeHandler(feature.id, feature.name)}>
                                <ImageBackground source={feature.image}
                                    style={styles.imageBackground}>
                                    <Text style={[styles.featureText, custom_style.featureText]}>{feature.name}</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        :
                        <View style={styles.featureContainer}
                            key={index}>
                            <TouchableHighlight onPress={() => this.routeHandler(feature.id, feature.name)}>
                                <ImageBackground source={feature.image}
                                    style={styles.imageBackground}>
                                    <Text style={[styles.featureText, custom_style.featureText]}>{feature.name} {company_name}</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
    },
    featureContainer: {
        width: '100%',
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featureText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        margin: 30
    }
})

export default Home