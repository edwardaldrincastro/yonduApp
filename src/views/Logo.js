import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { company_logo } from "../utilities/data/main_components"


class Logo extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 800)
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}> */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/yondu_logo.jpg')}
                        resizeMode='contain'
                        style={styles.logo}
                    />
                    {/* <Text>Yondu</Text> */}
                </View>
                {/* </TouchableHighlight> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '50%',
        width: '75%',
        backgroundColor: '#fff'
    }
})

export default Logo