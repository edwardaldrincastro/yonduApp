import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import { TextInputCustom, ButtonCustom, PickerCustom } from "../components"
import { Back } from "../utilities/icons";
import { services } from "../utilities/data/data"
import { Formik } from 'formik'
import * as Yup from 'yup'

const axios = require('axios')
const solutionsArray = [{
    id: 0,
    name: 'What solutions do you need?',
    icon: null,
    content: ['Services'
    ]
}]
const ph_num_regex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
class Quotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localServices: services[0]
        };
    }
    arrayHandler = (solutionsType) => {
        solutionsArray.push(...solutionsType)
    }
    getData = async () => {
        try {
            const response = await axios.get('http://192.168.190.24:3000/qoute_list')
            this.props.navigation.navigate(route)
            console.log('quotation', response)} catch (error) {
            console.log(error)
            alert(error)
        }
    }
    handleSubmit = async (values) => {
        try {
            console.log(values)
            const response = await axios({
                method: 'post',
                url: 'http://192.168.190.24:3000/qoute_list',
                data: {
                    ...values
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            console.log('quotation', response)
            this.props.navigation.navigate('ThankYou') } catch (error) {
            alert('error in post')
            console.error(error);
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Get a Quote',
            headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}>
                <Back />
            </TouchableOpacity>),
        }
    }
    render() {

        const route = this.props.navigation.getParam('route', 'No route received')
        const solutionsType = this.state.localServices[route]
        this.arrayHandler(solutionsType)
        console.log('solType', solutionsType);
        console.log('route name:', route)
        return (
            <View style={styles.container}>
                <Formik
                    initialValues={{

                        solution: null,
                        service: null,
                        name: null,
                        company: null,
                        email: null,
                        phone_number: null,
                        message: null,
                    }}
                    onSubmit={(route, values) =>
                        this.handleSubmit(route, values)
                    }
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Required name'),
                        company: Yup.string()
                            .required('Required company'),
                        phone_number: Yup.string()
                            .required('Required phoneNumber')
                            .matches(ph_num_regex, 'Phone number invalid')
                            .max(11)
                            .min(11),
                        email: Yup.string()
                            .required('Required email')
                            .email('Must be an email'),
                        message: Yup.string()
                            .required('Required message'),
                        solution: Yup.string()
                            .required('Required solutions'),
                        service: Yup.string()
                            .required('Required services'),
                    })}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => {
                        return (

                            <View style={styles.container}>
                                <View style={styles.content}>
                                    <PickerCustom
                                        title="Solutions"
                                        solutionsType={solutionsArray}
                                        selectedSolution={values.solution}
                                        handleSelectSolution={handleChange('solution')}
                                        solutions
                                        error={touched.solution && errors.solution}
                                    />
                                    <PickerCustom
                                        title="Services"
                                        solutionsType={solutionsArray}
                                        selectedService={values.service}
                                        values={values.solution}
                                        handleSelectSolution={handleChange('service')}
                                        dynamic
                                        error={touched.service && errors.service}
                                    />
                                    <TextInputCustom
                                        name='name'
                                        placeholder='Name'
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        error={touched.name && errors.name}
                                    />
                                    <TextInputCustom name='company' placeholder='Company'
                                        onChangeText={handleChange('company')}
                                        value={values.company}
                                        error={touched.company && errors.company} />
                                    <TextInputCustom name='email' placeholder='Email'
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />
                                    <TextInputCustom name='phone_number' placeholder='Phone Number'
                                        onChangeText={handleChange('phone_number')}
                                        value={values.phone_number}
                                        error={touched.phone_number && errors.phone_number} />
                                    <TextInputCustom name='message' placeholder='Message'
                                        onChangeText={handleChange('message')}
                                        value={values.message}
                                        error={touched.message && errors.message}   />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <ButtonCustom text={'Submit'} onPress={() => handleSubmit()} />
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
        backgroundColor: '#fff',
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

export default Quotation;