import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation"
import IndustriesStack from "./IndustriesStack"
import InsightsStack from "./InsightsStack"
import StackNavigator from "./StackNavigator";
// import { InsightsStack, IndustriesStack, StackNavigator } from "../components"
import { About, WhatWeDo, ContactUs, Careers, Insights, Industries } from "../views"

const FeaturesDrawer = createDrawerNavigator({
    WhatWeDo: {
        screen: StackNavigator,
        navigationOptions: {
            drawerLabel: 'What We Do?'
        }
    },
    Industries: IndustriesStack,
    Insights: InsightsStack,
    Careers: Careers,
    About: {
        screen: About,
        navigationOptions: {
            drawerLabel: 'About Yondu'
        }
    },
    ContactUs: ContactUs

    },
    {
        initialRouteName: 'WhatWeDo',
        defaultNavigationOptions: {
            // headerLeft: <MenuIcon/>,
            headerBackground: '#212121',
            // drawerLabel: 'What We Do?'
        },
        contentOptions: {
            activeTintColor: '#66CC99',
            inactiveTintColor: '#909191',
            activeBackgroundColor: 'transparent',
            labelStyle: {
                fontSize: 16,
                fontWeight: 'normal'
            }
        },
        contentComponent: (props) => (
            <View style={styles.container}>

                <ScrollView>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />

                    </SafeAreaView>
                </ScrollView>
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 15, paddingHorizontal: 16 }}>
                    <Text>Subscribe with Email</Text>
                </View>
            </View>
        )
    })

const DrawerContainer = createAppContainer(FeaturesDrawer)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
});

export default DrawerContainer
