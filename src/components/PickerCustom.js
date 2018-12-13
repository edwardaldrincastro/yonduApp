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
                return (specific.map(val => {
                    console.log('val id', val.id);
                    if (val.id === 0) {
                        return <Picker.Item key={val.id} label={val.name} value={''} />
                    } else {
                        return <Picker.Item key={val} label={val} value={val} />
                    }
                }
                ))
            } else {

                return <Picker.Item label='Services' value={''} />


            }
        } else if (solutions) {
            return (solutionsType.map(item => {
                console.log('item id', item.id);
                if (item.id === 0) {
                    return <Picker.Item key={item.id} label={item.name} value={''} />
                } else {
                    return <Picker.Item key={item.id} label={item.name} value={item.name} />
                }
            }
            ))
        }

    }

    render() {
        const { solutions, solutionsType, handleSelectSolution, selectedSolution, selectedService, values, title, dynamic, error } = this.props

        let color, test
        test = this.handler(dynamic, solutions, solutionsType, values, selectedSolution)
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
