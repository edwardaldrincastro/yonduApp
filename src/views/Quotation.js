import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInputCustom, ButtonCustom, PickerCustom } from "../components"
import { Formik } from "formik"
import * as Yup from 'yup'

class Quotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleSubmit = (values, formikBag) => {
        alert(JSON.stringify(values))
        console.log(values)
        console.log(formikBag)
    }
    checker = values => {
        alert(JSON.stringify(values))
        console.log(values)
        // return this.props.navigation.navigate('ThankYou')
    }
    // handleData = (values) => {
    //     await this.getData(values)
    //     await handleReset
    // }
    handleReset = () => {
        console.log('reset')
    }
    handleRoute = (route) => {
        this.props.navigation.navigate(route)
    }
    static navigationOptions = {
       title: 'Get a Quote'
    }
    render() {
        return (
            <Formik
                // initialValues={{myName: '', email: '', password: '' }}
                initialValues={{ myName: ''
                // ,company: '', phoneNumber: '', email: '', message: ''
             }}
                onSubmit={this.handleSubmit}
                // onReset={this.handleReset}
                // validationSchema={Yup.object().shape({
                    // name: Yup.string()
                        // .required('Required name'),
                    // company: Yup.string()
                    //     .required('Required company'),
                    // phoneNumber: Yup.string()
                    //     .required('Required phoneNumber'),
                    // email: Yup.string()
                    //     .required('Required email'),
                    // message: Yup.string()
                    //     .required('Required message'),
                // })}
            >

                {({ values, handleSubmit, handleChange, errors, touched, FormikBag }) => (

                    <View style={styles.container}>
                        <View style={styles.content}>
                            {/* <PickerCustom />
                            <PickerCustom /> */}
                            <TextInputCustom name='myName' 
                            placeholder='Name'
                            onChangeText={handleChange('myName')}
                            value={values.myName}
                            error={touched.myName && errors.myName}
                            />
                            {/* <TextInputCustom name='company' placeholder='Company'/>
                            <TextInputCustom name='email' placeholder='Email'/>
                            <TextInputCustom name='phoneNumber' placeholder='Phone Number'/>
                            <TextInputCustom name='message' placeholder='Message'/> */}
                        
                            {/* <TextInputCustom name='name' placeholder='Name' error={touched.name && errors.name} />
                            <TextInputCustom name='company' placeholder='Company' error={touched.company && errors.company} />
                            <TextInputCustom name='email' placeholder='Email' error={touched.email && errors.email} />
                            <TextInputCustom name='phoneNumber' placeholder='Phone Number' error={touched.phoneNumber && errors.phoneNumber} />
                            <TextInputCustom name='message' placeholder='Message' error={touched.message && errors.message} /> */}
                        </View>
                        <View style={styles.buttonContainer}>
                            {/* <ButtonCustom text={'Submit'} onPress={handleSubmit} route={'ThankYou'} /> */}
                            <Button title='Check' onPress={handleSubmit}/>
                            <Button title='Value' onPress={() => alert(JSON.stringify(values))}/>
                            {/* <Button title='Checker' onPress={() => this.checker()}/> */}
                        </View>
                        {/* navigation={this.props.navigation} */}
                    </View>
                )}
            </Formik>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
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

export default Quotation;
