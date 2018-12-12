import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { TextInputCustom, ButtonCustom, PickerCustom } from "../components"
import { services } from "../utilities/data/data"
import { Formik } from 'formik'
import * as Yup from 'yup'

const axios = require('axios')

class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localServices: services[0]
        };
    }

    handleSubmit = (route, values) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://10.0.3.2:3000/quote_list/',
                params: {
                    // id: 1,
                    solution: values.solutions,
                    service: values.services,
                    name: values.name,
                    company: balues.company,
                    email: balues.email,
                    phone_number: values.phoneNumber,
                    message: values.message
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            // setFieldValue('name','')
            console.log('news letter', response);
            // console.log('getdata', response)
            // console.log('my values:', values)
            // response.data.length !== 0 ? await this.deleteData(response.data[0].id, FormikBag) : (alert('Name cannot be found'), console.log('no id found'))
        } catch (error) {
            alert('error in get')
            console.error(error);
        }
    }
    static navigationOptions = {
        title: 'Get a Quote'
    }
    render() {

        const route = this.props.navigation.getParam('route', 'No route received')
        const solutionsType = this.state.localServices[route]
        console.log('solType', solutionsType);
        console.log('route name:', route)
        return (
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        email: null,
                    }}
                    onSubmit={(route, values) =>
                        this.handleSubmit(route, values)
                        // this.props.navigation.navigate('ThankYou', { values: values })
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
                                <View style={styles.content}>
                                    <Text style={{textAlign: 'justify'}}>NEWSLETTER</Text>
                                    <Text>Get the lastest tech news, careers and more!</Text>
                                    <TextInputCustom name='email' placeholder='Email'
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />

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

