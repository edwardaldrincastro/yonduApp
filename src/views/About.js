import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, WebView, ScrollView } from 'react-native'
import { services } from "../utilities/data/main_components"
import { Services } from "../components";

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
        const route = this.props.navigation.getParam('name', 'No name')
        const routeID = this.props.navigation.getParam('id', 'No ID')
        console.log(services);
        return (
            <View style={styles.container}>
                {/* <ScrollView style={{flex:1}}> */}
                    <WebView
                        source={{ html: `<p style='text-align: justify; font-color: black;'>We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences. Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation. Our experienced IT professionals confidently guide companies through today’s complex technological landscape.&nbsp;We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered. Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences. Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation. Our experienced IT professionals confidently guide companies through today’s complex technological landscape.&nbsp;We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered. Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences. Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation. Our experienced IT professionals confidently guide companies through today’s complex technological landscape.&nbsp;We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered. Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences. Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation. Our experienced IT professionals confidently guide companies through today’s complex technological landscape.&nbsp;We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered. Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.</p>` }}
                    />
                {/* </ScrollView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // backgroundColor: '#D8D8D8',
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    },

})

export default About