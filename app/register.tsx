import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ColorsOp from '../const/colorsOp'
import IMRS_Button from '../components/IMRS_button'
import {insertNewAccount} from "../fetch/insertNewAccount";

export default function Register() {
    const [username, onChangeUsernameField] = React.useState('');
    const [password, onChangePasswordField] = React.useState('');
    const [confirmPassword, onChangeConfirmPasswordField] = React.useState('');
    const [firstName, onChangeFirstNameField] = React.useState('');
    const [lastName, onChangeLastNameField] = React.useState('');
    const [email, onChangeEmailField] = React.useState('');
    const [school, onChangeSchoolField] = React.useState('');
    
    const {
        container,
        pageTitle,
        input,
        inputSize,
        infoRow,
        registerButton
    } = styles

    const handleRegister = (): void => {
        insertNewAccount(password, username)
            .then(response =>{
                console.log('Account creation result:', response);
            })
            .catch(error => {
                console.error('Account creation failed:', error);
            })
    }
    handleRegister()

    return (
        <View style={container}>
            <Text style={pageTitle}>Register</Text>
            <View>
                <View style={infoRow}>
                    <TextInput
                        style={inputSize}
                        onChangeText={onChangeFirstNameField}
                        value={firstName}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={inputSize}
                        onChangeText={onChangeLastNameField}
                        value={lastName}
                        placeholder='Last Name'
                    />
                </View>
                <TextInput
                    style={input}
                    onChangeText={onChangeSchoolField}
                    value={school}
                    placeholder='School Name'
                />
                <TextInput
                    style={input}
                    onChangeText={onChangeEmailField}
                    value={email}
                    placeholder='Email'
                />
                <TextInput
                    style={input}
                    onChangeText={onChangeUsernameField}
                    value={username}
                    placeholder='Username'
                />
                <TextInput
                    style={input}
                    onChangeText={onChangePasswordField}
                    value={password}
                    placeholder='Password'
                />
                <TextInput
                    style={input}
                    onChangeText={onChangeConfirmPasswordField}
                    value={confirmPassword}
                    placeholder='Confirm Password'
                />
            </View>
            <View style={registerButton}>
                <IMRS_Button title={'Register'} onPress={ handleRegister } color='white' backgroundColor='#FF5733' />
            </View>
            <Link href='/modal' asChild>
                <Button title='open login modal' />
            </Link>
            <Link href='/firstregister' asChild>
                <Button title='open Responder Register' />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB,
        paddingTop: 20,
    },
    pageTitle: {
        alignSelf: "center",
        fontSize: 50,
        color: ColorsOp.RO
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: ColorsOp.WH
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputSize: {
        flexDirection: 'row',     
        height: 40,
        margin: 12,
        width: 190,
        borderWidth: 1,
        padding: 10,
        backgroundColor: ColorsOp.WH
    },
    registerButton: {
        paddingTop: 10,
        alignItems: 'center'
    }
})