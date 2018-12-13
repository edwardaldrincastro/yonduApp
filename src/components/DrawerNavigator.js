import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation"
import IndustriesStack from "./IndustriesStack"
import InsightsStack from "./InsightsStack"
import StackNavigator from "./StackNavigator"
import { About, WhatWeDo, ContactUs, Careers, Insights, Industries, Newsletter } from "../views"
import { DimensionsHeight } from '../utilities/Dimensions';

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
    ContactUs: ContactUs,
    Newsletter: Newsletter


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
            // <View style={styles.container}>

            //     <ScrollView>
            //         {/* <Image style={{ height: '50%', width: '100%' }}
            //             source={require('../assets/images/coding.jpg')} /> */}
            //         {/* <SafeAreaView forceInset={{ top: 'always', horizontal: 'never', }}> */}
            //         {/* <View style={{flex:1}}> */}

            //         {/* </View> */}
            //         <View style={{ flex: 1, backgroundColor: '#212121', height: '100%' }}>

            //             <DrawerItems {...props} />

            //         </View>
            //         {/* </SafeAreaView> */}
            //     </ScrollView>
            //     {/* <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 15, paddingHorizontal: 16 }}> */}
            //     {/* <Text>Subscribe with Email</Text> */}
            //     {/* </View> */}
            // </View>

            <SafeAreaView style={styles.safeAreaContainer}>
                {console.log("app props", props.navigation.state.index)}
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground style={{
                            flex: 1,
                            height: undefined,
                            width: undefined,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            resizeMode='cover'
                            source={require('../assets/images/coding.jpg')}>
                            <Image style={{ flex: 1, height: '60%', width: '60%' }}
                                resizeMode='contain'
                                source={require('../assets/images/yondu_logo.png')} />
                        </ImageBackground>
                    </View>
                    <View style={styles.drawerContent}>
                        <DrawerItems {...props} />
                    </View>
                    <View style={styles.footer}>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Newsletter')}>
                            <Text style={[styles.footerText, { color: feedbackColor(props) }]}>Subscribe with Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        )
    })

const DrawerContainer = createAppContainer(FeaturesDrawer)


const feedbackColor = (props) => {
    if (props.navigation.state.index == 7) {
        return '#66CC99'
    } else {
        return '#909191'
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     // height: '100%',
    //     width: '100%'
    // },
    safeAreaContainer: {
        flex: 1,
        width: "100%",
        flexDirection: 'row'
    },
    container: {
        flex: 1,
    },
    drawerContent: {
        paddingHorizontal: 20
    },
    header: {
        flex: 1,
        maxHeight: DimensionsHeight * 0.18,


    },
    footer: {
        flex: 1,
        padding: 16,
        // marginTop: DimensionsHeight / 8
        justifyContent: 'flex-end',
    },
    footerText: {
        fontSize: 16,
        color: "#909191",
        paddingVertical: 10,
        paddingHorizontal: 20
    }
});

export default DrawerContainer
