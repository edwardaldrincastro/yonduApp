import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'


class PickerCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
             <View style={styles.pickerContainer}>

                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="What solution do you need?" value={null} />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

        )
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
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#EFF0F4',
        margin: 10
    }

})

export default PickerCustom;
