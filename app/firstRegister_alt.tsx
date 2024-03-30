import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react'
import { Link } from 'expo-router'
import ColorsOp from '../const/colorsOp'
import IMRS_Button from '../components/IMRS_button'
import Alt_Button from '../components/Alt_Button'
import { SafeAreaView } from 'react-native-safe-area-context'

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
        title,
        dropBox,
        dropDown,
        dropOptions,
        infoRow,
        input,
    } = styles

    return (
        <SafeAreaView style={container}>
            <View style={styles.topView}>
            <Text style={styles.title}>First Responder/Dispatch Register</Text>
            </View>
            <View>
                <View style={infoRow}>
                <TextInput
                    style={input}
                    onChangeText={onChangeFirstNameField}
                    value={firstName}
                    placeholder="First Name"
                />
                <TextInput
                    style={input}
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
            <Alt_Button title={'Register'} />{/* onPress={}/> */}
            <Link href='/modal' asChild>
                <Button title='open login modal' />
            </Link>
            <Link href='/register' asChild>
                <Button title='open student register' />
            </Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },
    topView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 48,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        height: 50,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
})