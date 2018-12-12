import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import MapView from "react-native-maps";
import { main_components, company_name, custom_style, services } from "../utilities/data/main_components"
import { Services } from "../components";
import { Navigate, Phone, Mail, Burger } from "../utilities/icons";
import { DimensionsHeight, DimensionsWidth } from "../utilities/Dimensions";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedLocation: {
                latitude: 14.5556425,
                longitude: 121.050026,
                latitudeDelta: 0.005,
                longitudeDelta: DimensionsWidth / DimensionsHeight * 0.005
            }
        };
    }
    handleBackPress = () => {
        this.props.navigation.navigate('Home')
        return true
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }
    static navigationOptions = {
        drawerLabel: 'Contact Us',
    }
    render() {
        const route = this.props.navigation.getParam('name', 'No name')
        const routeID = this.props.navigation.getParam('id', 'No ID')
        console.log(services);
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={this.state.focusedLocation}
                        // onPress={this.pickLocationHandler}
                        ref={ref => this.map = ref}>
                        <MapView.Marker coordinate={this.state.focusedLocation} />
                    </MapView>
                    <View style={{ left: 5, position: 'absolute', top: 5 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <Burger black/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.contactContainer}>
                        <Navigate />
                        <Text style={styles.address}>Lower Penthouse, Panorama Building, 34th St. cor Lane A, Bonifacio Global City, Taguig, Philippines 1634</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <Phone />
                        <Text>+63917-444-2222</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <Mail />
                        <Text>business@yondu.com</Text>
                    </View>

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
        backgroundColor: '#fff',
        // padding: 20
    },
    mapContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        // paddingVertical: 40,
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        maxHeight: DimensionsHeight * 0.48
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    address: {
        flex: 1
    },
    map: {
        height: "100%",
        width: "100%",
    },
})

export default ContactUs