import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, Button, ScrollView, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { WhatWeDo, Quotation, ThankYou } from "../views"
import { Burger } from "../utilities/icons";

const StackNavigator = createStackNavigator({
    WhatWeDo: WhatWeDo,
    Quotation: Quotation,
    ThankYou: ThankYou
},
    {
        initialRouteName: 'WhatWeDo',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: 'What We Do?',
                

            }
        },
        navigationOptions: {
            drawer: 'What We Do?'
        }
    })

const StackContainer = createAppContainer(StackNavigator)

export default StackContainer