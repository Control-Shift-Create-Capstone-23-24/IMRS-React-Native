import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
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

    const[selected, setSelected] = React.useState("");

    const options = [
        {key:'1', value:'Cop'},
        {key:'2', value:'Swat'},
        {key:'3', value:'Operator'},
    ]
    
    const {
        container,
        pageTitle,
        input,
        inputSize,
        infoRow,
        registerButton,
        dropBox,
        dropOptions,
        dropDown
    } = styles

    return (
        <View style={container}>
            <Text style={pageTitle}> First Register</Text>
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
                <SelectList                  
                    setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
                    search={false}
                    data={options}
                    save="value"
                    boxStyles={dropBox}
                    dropdownItemStyles={dropOptions}
                    dropdownStyles={dropDown}
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
                <IMRS_Button title={'Register'} onPress={ () => {} } color='white' backgroundColor='#FF5733' />
            </View>
            <Link href='/modal' asChild>
                <Button title='open login modal' />
            </Link>
            <Link href='/register' asChild>
                <Button title='open student register' />
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
    },
    dropBox: {
        margin: 12,
        alignSelf: 'center',
        borderRadius: 1,
        borderColor: 'black',
        height: 40,
        width: 405,
        backgroundColor: ColorsOp.WH
    },
    dropOptions: {
        alignSelf: 'center',
        borderWidth: 0,
        width: 400,
        backgroundColor: ColorsOp.WH
    },
    dropDown: {
        alignSelf: 'center',
        width: 400,
        justifyContent: 'center',
        backgroundColor: ColorsOp.WH
    }
})