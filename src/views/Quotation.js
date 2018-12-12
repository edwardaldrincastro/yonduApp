import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { TextInputCustom, ButtonCustom, PickerCustom } from "../components"
import { services } from "../utilities/data/data"
import { Formik } from 'formik'
import * as Yup from 'yup'

class Quotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localServices: services[0]
        };
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
                        name: null,
                        company: null,
                        email: null,
                        phoneNumber: null,
                        message: null,
                        solutions: null,
                        services: null
                    }}
                    onSubmit={(values) =>

                        this.props.navigation.navigate('ThankYou', { values: values })
                    }
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Required name'),
                        company: Yup.string()
                            .required('Required company'),
                        phoneNumber: Yup.string()
                            .required('Required phoneNumber'),
                        email: Yup.string()
                            .required('Required email')
                            .email('Must be an email'),
                        message: Yup.string()
                            .required('Required message'),
                        solutions: Yup.string()
                            .required('Required solutions'),
                        services: Yup.string()
                            .required('Required services'),
                    })}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => {
                        return (

                            <View style={styles.container}>
                                <View style={styles.content}>
                                    {/* <PickerCustom /> */}
                                    <PickerCustom
                                        title="Solutions"
                                        solutionsType={solutionsType}
                                        selectedSolution={values.solutions}
                                        handleSelectSolution={handleChange('solutions')}
                                        solutions
                                        error={touched.solutions && errors.solutions}
                                    />
                                    <PickerCustom
                                        title="Services"
                                        solutionsType={solutionsType}
                                        selectedService={values.services}
                                        values={values.solutions}
                                        handleSelectSolution={handleChange('services')}
                                        dynamic
                                        error={touched.services && errors.services}
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
                                    <TextInputCustom name='phoneNumber' placeholder='Phone Number'
                                        onChangeText={handleChange('phoneNumber')}
                                        value={values.phoneNumber}
                                        error={touched.phoneNumber && errors.phoneNumber} />
                                    <TextInputCustom name='message' placeholder='Message'
                                        onChangeText={handleChange('message')}
                                        value={values.message}
                                        error={touched.message && errors.message} />
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

export default Quotation;


// <Formik
// // initialValues={{myName: '', email: '', password: '' }}
// initialValues={{ myName: ''
// // ,company: '', phoneNumber: '', email: '', message: ''
// }}
// onSubmit={() => alert('hello')}
// // onReset={this.handleReset}
// // validationSchema={Yup.object().shape({
//     // name: Yup.string()
//         // .required('Required name'),
//     // company: Yup.string()
//     //     .required('Required company'),
//     // phoneNumber: Yup.string()
//     //     .required('Required phoneNumber'),
//     // email: Yup.string()
//     //     .required('Required email'),
//     // message: Yup.string()
//     //     .required('Required message'),
// // })}
// >

// {({ values, handleSubmit, handleChange, errors, touched, FormikBag }) => (

// <View style={styles.container}>
//     <View style={styles.content}>
//         {/* <PickerCustom />
//         <PickerCustom /> */}
//         <TextInput  
//         placeholder='Name'
//         onChangeText={handleChange('myName')}
//         value={values.myName}
//         // error={touched.myName && errors.myName}
//         />
//         {/* <TextInputCustom name='company' placeholder='Company'/>
//         <TextInputCustom name='email' placeholder='Email'/>
//         <TextInputCustom name='phoneNumber' placeholder='Phone Number'/>
//         <TextInputCustom name='message' placeholder='Message'/> */}

//         {/* <TextInputCustom name='name' placeholder='Name' error={touched.name && errors.name} />
//         <TextInputCustom name='company' placeholder='Company' error={touched.company && errors.company} />
//         <TextInputCustom name='email' placeholder='Email' error={touched.email && errors.email} />
//         <TextInputCustom name='phoneNumber' placeholder='Phone Number' error={touched.phoneNumber && errors.phoneNumber} />
//         <TextInputCustom name='message' placeholder='Message' error={touched.message && errors.message} /> */}
//     </View>
//     <View style={styles.buttonContainer}>
//         {/* <ButtonCustom text={'Submit'} onPress={handleSubmit} route={'ThankYou'} /> */}
//         <Button title='Check' onPress={() => handleSubmit()}/>
//         <Button title='Value' onPress={() => alert(JSON.stringify(values))}/>
//         {/* <Button title='Checker' onPress={() => this.checker()}/> */}
//     </View>
//     {/* navigation={this.props.navigation} */}
// </View>
// )}
// </Formik>




{/* <TextInput placeholder='Name here' onChangeText={handleChange('myName')} value={values.myName} /> */ }

{/* <View style={styles.container}>
<TextInputCustom
    name='myName'
    placeholder='Name'
    onChangeText={handleChange('myName')}
    value={values.myName}
// error={touched.myName && errors.myName}
/>
<Button title='Submit' onPress={() => handleSubmit()} />
</View> */}