import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Industries } from "../views"
import { Back } from "../utilities/icons";


const IndustriesStack = createStackNavigator({
    Industries: Industries
},
    {
        initialRouteName: 'Industries',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: 'Industries',
                headerLeft: (<TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Back />
                </TouchableOpacity>),
                headerStyle: {
                    backgroundColor: '#2FD095'
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        },
        navigationOptions: {
            drawerLabel: 'Industries'
        }
    })

const IndustriesContainer = createAppContainer(IndustriesStack)

export default IndustriesContainer