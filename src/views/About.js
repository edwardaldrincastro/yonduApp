import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, BackHandler, WebView, ScrollView } from 'react-native'
import { services } from "../utilities/data/main_components"
import { HeaderCustom } from "../components"
import { DimensionsHeight } from '../utilities/Dimensions';

class About extends Component {
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
        drawerLabel: 'About Yondu',
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderCustom style={{ backgroundColor: '#2FD095' }} title={'About YONDU'} navigation={this.props.navigation} route={'Home'} />

                <ScrollView>
                    <Text style={styles.title}>
                        We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences.
                    </Text>
                    <Text style={styles.subtitle}>
                        Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation.
                        </Text>
                    <Text style={styles.subtitle}>
                        Our experienced IT professionals confidently guide companies through today’s complex technological landscape. We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.
                    </Text>
                    <Text style={styles.subtitle}>
                        Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered.
                    </Text>
                    <Text style={styles.subtitle}>
                        Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.
                    </Text>
                    <View style={styles.imageContainer}>

                        <Image style={{ height: '100%', width: '100%' }}
                            resizeMode='contain'
                            source={require('../assets/images/logo-xurpas-globe.png')} />
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
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        padding: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8d8d8d',
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        maxHeight: DimensionsHeight * 0.15,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    }
})

export default About