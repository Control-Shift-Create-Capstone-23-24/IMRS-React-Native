import { View, Text, Button, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ColorsOp from '../const/colorsOp'
import IMRS_Button from '../components/IMRS_button'

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
        infoWrapper,
        infoText,
        nameInput,
        infoInput,
        registerButton,
        infoStyle,
        infoRow
    } = styles

    return (
        <View style={container}>
            <Text style={pageTitle}>Register</Text>
            <View style={infoWrapper}>
                <View style={infoRow}>
                    <Text style={infoText}>First Name</Text>
                    <Text style={infoText}>Last Name</Text>
                </View>
                <View style={infoRow}>
                    <TextInput
                    style={nameInput}
                    autoCapitalize='none'
                    onChangeText={onChangeFirstNameField}
                    value={firstName}
                    />
                    <TextInput
                    style={nameInput}
                    autoCapitalize='none'
                    onChangeText={onChangeLastNameField}
                    value={lastName}
                    />
                </View>
                    <Text style={infoText}>Email</Text>
                <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeEmailField}
                            value={email}
                        />
                    <Text style={infoText}>Username</Text>
                <TextInput 
                        style={infoInput}
                        autoCapitalize='none'
                        onChangeText={onChangeUsernameField}
                        value={username}
                    />
                    <Text style={infoText}>Password</Text>
                <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangePasswordField}
                            value={password}
                        />
                    <Text style={infoText}>Confirm Password</Text>
                <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeConfirmPasswordField}
                            value={confirmPassword}
                        />
                <Text style={infoText}>School</Text>
                <TextInput 
                    style={infoInput}
                    autoCapitalize='none'
                    onChangeText={onChangeSchoolField}
                    value={school}
                />
            </View>
            <View style={registerButton}>
                <IMRS_Button title={'Register'} onPress={ () => {} } color='white' backgroundColor='#FF5733' />
            </View>
            <Link href='/modal' asChild>
                <Button title='open login modal' />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create ({
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
    infoWrapper: {
        marginTop: Dimensions.get('window').width / 100,
        paddingLeft: 30,
        paddingRight: 30
    },
    nameInput: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        backgroundColor: 'white',
        minWidth:  Dimensions.get('window').width / 2.5,
        alignSelf: 'center'
    },
    infoInput: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        backgroundColor: 'white',
        minWidth:  Dimensions.get('window').width / 1.22,
        alignSelf: 'center',
        margin:0
    },
    infoText: {
        marginTop: Dimensions.get('window').width / 40,
        fontSize: 24,
        color: ColorsOp.RO,
        textAlign: 'center',
    },
    registerButton: {
        paddingTop: 10,
        alignItems: 'center'
    },
    infoStyle: {
        flexDirection: 'column',
        margin: 0
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 0,
    }
})