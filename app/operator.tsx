import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react'
import { Link } from 'expo-router'
import ColorsOp from '../const/colorsOp'
import IMRS_Button from '../components/IMRS_button'

export default function Register() {

    const [description, onChangeDescription] = React.useState('')

    const [selected, setSelected] = React.useState("");

    const options = [
        { key: '1', value: 'UNT, Denton' }
    ]

    const {
        container,
        descrip,
        descripText,
        descBox,
        locationText,
        dropBox,
        dropOptions,
        dropDown,
        heatButton
    } = styles

    return (
        <View style={container}>
            <View style={descrip}>
                <Text style={descripText}> Description</Text>
                <TextInput
                    style={descBox}
                    multiline
                    numberOfLines={7}
                    autoCapitalize='none'
                    autoComplete={"current-password"}
                    onChangeText={onChangeDescription}
                    value={description}
                    placeholder={'Description'}
                />
            </View>
            <View>
                <Text style={locationText}> Set Location</Text>
                <SelectList
                    setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
                    search={false}
                    data={options}
                    save="value"
                    boxStyles={dropBox}
                    dropdownItemStyles={dropOptions}
                    dropdownStyles={dropDown}
                />
            </View>
            <View style={heatButton}>
                    <Link href={'/heatmap'} asChild>
                            <IMRS_Button title={'Heat Map'} color='white' backgroundColor= {ColorsOp.RO} />
                        </Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB,
        paddingTop: 20,
    },
    descrip: {
        padding: 10,
    },
    descripText: {
        paddingBottom: 10,
        color: ColorsOp.RO,
        fontSize: 20,
    },
    descBox: {
        height: 100,
        textAlignVertical: 'top',
        backgroundColor: ColorsOp.WH,
        padding: 10
    },
    locationText: {
        padding: 10,
        fontSize: 20,
        color: ColorsOp.RO
    },
    dropBox: {
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
    heatButton: {
        marginTop: 100,
        paddingTop: 10,
        alignItems: 'center'
    }
})