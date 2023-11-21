import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ColorsOp from '../components/ColorsOp'
import IMRS_Button from '../components/IMRS_button'

export default function Register() {
    const [username, onChangeUsernameField] = React.useState('');
    const [password, onChangePasswordField] = React.useState('');
    const [confirmPassword, onChangeConfirmPasswordField] = React.useState('');
    const [firstName, onChangeFirstNameField] = React.useState('');
    const [lastName, onChangeLastNameField] = React.useState('');
    const [email, onChangeEmailField] = React.useState('');
    const [school, onChangeSchoolField] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Register</Text>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>First Name</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeFirstNameField}
                    value={firstName}
                />
                <Text style={styles.infoText}>Last Name</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeLastNameField}
                    value={lastName}
                />
                <Text style={styles.infoText}>Email</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeEmailField}
                    value={email}
                />
                <Text style={styles.infoText}>Username</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeUsernameField}
                    value={username}
                />
                <Text style={styles.infoText}>Password</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangePasswordField}
                    value={password}
                />
                <Text style={styles.infoText}>Confirm Password</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeConfirmPasswordField}
                    value={confirmPassword}
                />
                <Text style={styles.infoText}>School</Text>
                <TextInput 
                    style={styles.infoInput} 
                    onChangeText={onChangeSchoolField}
                    value={school}
                />
            </View>
            <View style={styles.registerButton}>
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
        paddingTop: 20
    },
    pageTitle: {
        alignSelf: "center",
        fontSize: 50,
        color: ColorsOp.RO
    },
    infoWrapper: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    infoInput: {
        borderWidth: 1,
        height: 40,
        padding: 10
    },
    infoText: {
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20,
        color: ColorsOp.RO,
        textAlign: 'center'
    },
    registerButton: {
        paddingTop: 10,
        alignItems: 'center'
    }
})