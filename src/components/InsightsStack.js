import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Insights, SelectedInsights } from "../views"
import { Back } from "../utilities/icons";


const InsightsStack = createStackNavigator({
    Insights: Insights,
    SelectedInsights: SelectedInsights,
},
    {
        initialRouteName: 'Insights',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: ({navigation}) => {
            return {
                title: 'Insights',
                headerLeft: (<TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Back/>
                </TouchableOpacity>),

            }
        }
    })

const InsightsContainer = createAppContainer(InsightsStack)

export default InsightsContainer