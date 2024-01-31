import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
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
                    <View style={infoStyle}>
                        <Text style={infoText}>First Name</Text>
                        <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeFirstNameField}
                            value={firstName}
                        />
                    </View>
                    <View style={infoStyle}>
                        <Text style={infoText}>Last Name</Text>
                        <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeLastNameField}
                            value={lastName}
                        />
                    </View>
                </View>
                <View style={infoRow}>
                    <View style={infoStyle}>
                        <Text style={infoText}>Email</Text>
                        <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeEmailField}
                            value={email}
                        />
                    </View>
                    <View style={infoStyle}>
                        <Text style={infoText}>Username</Text>
                    <TextInput 
                        style={infoInput}
                        autoCapitalize='none'
                        onChangeText={onChangeUsernameField}
                        value={username}
                    />
                    </View>
                </View>
                <View style={infoRow}>
                    <View style={infoStyle}>
                        <Text style={infoText}>Password</Text>
                        <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangePasswordField}
                            value={password}
                        />
                    </View>
                    <View style={infoStyle}>
                        <Text style={infoText}>Confirm Password</Text>
                        <TextInput 
                            style={infoInput}
                            autoCapitalize='none'
                            onChangeText={onChangeConfirmPasswordField}
                            value={confirmPassword}
                        />
                    </View>
                </View>

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
        paddingLeft: 30,
        paddingRight: 30
    },
    infoInput: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        backgroundColor: 'white',
        width: '170%',
        alignSelf: 'center'
    },
    infoText: {
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20,
        color: ColorsOp.RO,
        textAlign: 'center',
    },
    registerButton: {
        paddingTop: 10,
        alignItems: 'center'
    },
    infoStyle: {
        flexDirection: 'column'
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})