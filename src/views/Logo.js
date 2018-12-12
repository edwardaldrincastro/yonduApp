import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { company_logo } from "../utilities/data/main_components"


class Logo extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 500)
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}> */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/yondu_logo.png')}
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
        backgroundColor: '#66CD9A',
    },
    logoContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '60%',
        width: '60%',
        // backgroundColor: '#fff'
    }
})

export default Logo