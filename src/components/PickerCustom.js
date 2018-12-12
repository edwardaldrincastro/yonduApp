import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handler = (dynamic, solutions, solutionsType, values, selectedSolution) => {
        if (dynamic) {
            if (values) {
                let service = solutionsType.filter(item => item.name === values)
                let specific = service[0].content
                return (specific.map(val => (
                    <Picker.Item key={val} label={val} value={val} />)))


                //    return <Picker.Item key={10} label='Solution' value='Solution' />
            } else {
                return <Picker.Item label='Services' value={null} />
            }
        } else if (solutions) {
            // if (selectedSolution === null) {
            //     return <Picker.Item label='What solution do you need?' value={null} />
            // } else {
            return (solutionsType.map(item => (
                <Picker.Item key={item.id} label={item.name} value={item.name} />
            )))
            // }
        }

    }

    render() {
        const { solutions, solutionsType, handleSelectSolution, selectedSolution, selectedService, values, title, dynamic, error } = this.props

        let color, test
        test = this.handler(dynamic, solutions, solutionsType, values, selectedSolution)
        // if (error) {
        //     return color = '#DD4F43'
        // } else {
        //     color = '#EFF0F4'
        // }
        error ? color = '#DE5448' : color = '#EFF0F4'
        return (
            <View style={{
                borderBottomWidth: 1,
                margin: 10, borderBottomColor: color
            }}>
                <Picker
                    style={styles.selectionGroup}
                    itemStyle={styles.selectionGroup}
                    selectedValue={selectedService || selectedSolution}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => handleSelectSolution(itemValue)}>
                    {/* {picker} */}
                    {test}
                </Picker>
            </View >

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
    selectionGroup: {
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
