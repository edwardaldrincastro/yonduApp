import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { HeaderCustom, ButtonCustom } from "../components";
import { Warning } from "../utilities/icons";

class Careers extends Component {
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
        drawerLabel: 'Careers',
    }
    render() {

        return (
            <View style={styles.container}>
                <HeaderCustom style={{ backgroundColor: '#2FD095' }} title={'Careers'} navigation={this.props.navigation} route={'Home'} />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Warning />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default Careers