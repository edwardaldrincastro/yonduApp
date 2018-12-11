import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import { Button, Text } from "native-base";
let color
class TextInputCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { placeholder, error, value, onChangeText, ...rest } = this.props
        error ? color= '#DE5448' : color= '#fff'
        // const route = this.props.route
        // const buttonText = this.props.text
        // const navigation = this.props.navigation
        return (
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} style={{borderWidth: 1, borderColor: color}}/>
                {/* <Text style={styles.error}>{error}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // padding: 20
    },
    content: {
        flex: 9.2
    },
    error: {
        color: '#E11111'
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#EFF0F4',
        margin: 10
    },
    textInput: {
        borderColor: '#fff',
        borderWidth: 1
    }

})

export default TextInputCustom
