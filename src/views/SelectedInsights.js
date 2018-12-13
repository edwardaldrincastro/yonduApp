import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, ImageBackground, ScrollView } from 'react-native'
import { HeaderCustom } from "../components"
import { DimensionsHeight, DimensionsWidth } from "../utilities/Dimensions"
let scrollPosition
class Insights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerColor: 'rgba(0,0,0,0)'
        }
    }
    handleBackPress = () => {
        this.props.navigation.goBack()
        return true
    }
    scrollHandler = (event) => {
        scrollPosition = event.nativeEvent.contentOffset.y
        console.log(scrollPosition)
        if (scrollPosition !== 0) {
            this.setState({
                headerColor: 'rgba(47,208,149,1)'
            })
        } else {
            this.setState({
                headerColor: 'rgba(0,0,0,0)'
            })
        }

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    componentDidUpdate(prevProps) {
        if (scrollPosition !== prevProps.scrollPosition) {
            console.log('update')
        }
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const getParams = this.props.navigation.getParam
        const id = getParams('id', 'No id')
        const name = getParams('name', 'No name')
        const category = getParams('category', 'No category')
        const snippet = getParams('snippet', 'No snippet')
        const date = getParams('date', 'No date')
        const image = getParams('image', 'No image')
        const content = getParams('content', 'No content')
        console.log('sp:', scrollPosition)
        console.log(this.state.headerColor);
        console.log(DimensionsHeight)
        console.log(DimensionsWidth)
        return (
            <View style={styles.container}>
                <ScrollView
                    onScroll={event => this.scrollHandler(event)}
                    scrollEventThrottle={16}
                    style={{
                        maxHeight: DimensionsHeight - 26
                    }}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={image}
                            style={styles.imageBackground}>
                            <View style={{ height: 70, width: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                <Text style={{ padding: 20, color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                            </View>
                        </ImageBackground>

                    </View>

                    <View style={styles.contentContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <Text style={styles.category}>{category} </Text>
                            <Text style={styles.date}>{date}</Text>

                        </View>
                        <Text style={styles.content}>{content}</Text>
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                    <HeaderCustom style={{ backgroundColor: this.state.headerColor }} share name={name} navigation={this.props.navigation} route='back'/>
                </View>

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
        justifyContent: 'flex-end'
    },
    imageContainer: {
        flex: 2,
        backgroundColor: '#212121',
        minHeight: DimensionsHeight * 0.4
    },
    contentContainer: {
        flex: 3,
        backgroundColor: '#fff',
    },
    category: {
        color: '#8d8d8d',
        fontSize: 15
    },
    date: {
        color: '#8d8d8d',
        fontSize: 15
    },
    content: {
        paddingHorizontal: 20,
        fontSize: 17
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    }
})

export default Insights