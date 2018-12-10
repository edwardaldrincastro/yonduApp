import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Insights, SelectedInsights } from "../views"
import { Burger } from "../utilities/icons";


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
                headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Burger />
                </TouchableOpacity>),

            }
        }
    })

const InsightsContainer = createAppContainer(InsightsStack)

export default InsightsContainer