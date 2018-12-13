import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { TextInputCustom, ButtonCustom, PickerCustom, HeaderCustom } from "../components"
import { services } from "../utilities/data/data"
import { Formik } from 'formik'
import * as Yup from 'yup'

const axios = require('axios')

class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localServices: services[0],
            headerColor: '#2FD095'
        };
    }

    handleSubmit = async (values) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://192.168.190.24:3000/news_letter',
                data: {
                    ...values
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            console.log('news letter', response);
            this.props.navigation.navigate('ThankYou')
        } catch (error) {
            alert('error in get')
            console.error(error);
        }
    }
    static navigationOptions = {
        drawerLabel: () => null
    }
    render() {
        return (
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        email: null,
                    }}
                    onSubmit={(values) =>
                        this.handleSubmit(values)
                    }
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .required('Required email')
                            .email('Must be an email'),
                    })}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => {
                        return (

                            <View style={styles.container}>
                                <HeaderCustom style={{ backgroundColor: this.state.headerColor }} title={'Subscribe with Email'} navigation={this.props.navigation} route={'Home'}/>

                                <View style={styles.content}>
                                    <View style={{ flex: 1, padding: 20, justifyContent: 'center', backgroundColor: "#fff" }}>

                                        <View style={{padding: 20, justifyContent: 'center', alignItems:'center', backgroundColor: "#fff" }}>
                                            <Text style={styles.title}>NEWSLETTER</Text>
                                            <Text style={styles.subtitle}>Get the lastest tech news, careers and more!</Text>
                                        </View>
                                        <TextInputCustom name='email' placeholder='Email'
                                            onChangeText={handleChange('email')}
                                            value={values.email}
                                            error={touched.email && errors.email} />
                                    </View>

                                </View>
                                <View style={styles.buttonContainer}>
                                    <ButtonCustom text={'Get Newsletter'} onPress={() => handleSubmit()} />
                                </View>
                            </View>
                        )
                    }}
                </Formik>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '100%',
        // width: '100%',
        backgroundColor: '#fff',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        padding: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8d8d8d',
        width: '55%',
        textAlign: 'center',

    },
    content: {
        flex: 9.2
    },
    buttonContainer: {
        flex: 0.8,
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'center'
    }

})

export default Newsletter;

