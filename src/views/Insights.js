import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, BackHandler, Button, ScrollView, Image } from 'react-native'
import { services } from "../utilities/data/data"
import { Services } from "../components"
import { Burger } from "../utilities/icons";

class Insights extends Component {
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
        drawerLabel: 'Insights',

    }
    render() {
        const route = this.props.navigation.state.routeName
        const routeArray = this.routeHandler(route)
        console.log('routearray', routeArray);
        console.log('state:', this.state.localServices);
        return (
            <View style={styles.insightsContainer}>
                <ScrollView>

                    {routeArray.map((insights, index) => (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('SelectedInsights',
                            {
                                id: insights.id,
                                name: insights.name,
                                category: insights.category,
                                snippet: insights.snippet,
                                date: insights.date,
                                image: insights.image,
                                content: insights.content
                            })} key={index}>
                            <View style={styles.insightsItems}>
                                <View style={styles.insightsDetails}>
                                    <Text style={styles.title}>{insights.name}</Text>
                                    <Text style={styles.snippet}>{insights.snippet}</Text>
                                    <Text style={styles.date}>{insights.category} - <Text>{insights.date}</Text></Text>
                                </View>
                                <View style={styles.insightsIcon}>
                                    <Image source={insights.image}
                                        style={{ height: '100%', width: '100%' }} />

                                </View>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
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
    insightsContainer: {
        flex: 1,
    },
    insightsItems: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
    },
    insightsDetails: {
        flex: 4,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    insightsIcon: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 5
    },
    snippet: {
        color: '#9e9e9e',
        fontSize: 16
    },
    date: {
        color: '#40c4ff',
        fontWeight: '500',
        fontStyle: 'italic',
        paddingTop: 15
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

export default Insights