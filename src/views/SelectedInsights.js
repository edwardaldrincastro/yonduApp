import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, ImageBackground, ScrollView } from 'react-native'
import { HeaderCustom } from "../components"
import { DimensionsHeight, DimensionsWidth } from "../utilities/Dimensions";
class Insights extends Component {
    handleBackPress = () => {
        this.props.navigation.goBack()
        return true
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const id = this.props.navigation.getParam('id', 'No id')
        const name = this.props.navigation.getParam('name', 'No name')
        const category = this.props.navigation.getParam('category', 'No category')
        const snippet = this.props.navigation.getParam('snippet', 'No snippet')
        const date = this.props.navigation.getParam('date', 'No date')
        const image = this.props.navigation.getParam('image', 'No image')
        const content = this.props.navigation.getParam('content', 'No content')
        console.log(DimensionsHeight)
        console.log(DimensionsWidth)
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={image}
                        style={styles.imageBackground}>
                        {/* <View style={{ , width: '100%' }}> */}
                        <HeaderCustom />
                        <View style={{ height: 70, width: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                            <Text style={{padding: 20, color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                        </View>
                        {/* </View> */}
                    </ImageBackground>

                </View>

                <ScrollView style={{
                    maxHeight: DimensionsHeight * 0.55
                }}>
                    <View style={styles.contentContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <Text>{category} </Text>
                            <Text>{date}</Text>

                        </View>
                        <Text style={{ paddingHorizontal: 15, fontSize: 18 }}>{content}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // backgroundColor: '#D8D8D8',
        // padding: 20
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 2,
        backgroundColor: '#212121',
    },
    contentContainer: {
        flex: 3,
        backgroundColor: '#E3715C',
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFC83D'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    }
})

export default Insights