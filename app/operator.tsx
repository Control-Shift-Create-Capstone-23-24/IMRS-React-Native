import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { Link } from 'expo-router';
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from "../const/colorsOp";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const buttonWidth = screenWidth * .75;
const buttonHeight = screenHeight * .06;

const Status = () => {

    const [selected, setLocation] = React.useState("");
    const options = [
        { key: '1', value: 'UNT Main Campus' },
        { key: '2', value: 'UNT Discovery Park' }
    ]


    const {
        container,
        warningMsgText,
        warningMsgWrapper,
        descriptionText,
        descriptionWrapper,
        locationWrapper,
        descriptionInputWrapper,
        descriptionInput,
        dropBox,
        dropOptions,
        dropDown,
        middleView
    } = styles;

    return (
        <View style={container}>
            <View style={warningMsgWrapper}>
                <Text style={warningMsgText}>Set Up Geofence</Text>
            </View>
            <View style={locationWrapper}>
                <SelectList
                    setSelected={(val: React.SetStateAction<string>) => setLocation(val)}
                    search={false}
                    data={options}
                    save="value"
                    boxStyles={dropBox}
                    dropdownItemStyles={dropOptions}
                    dropdownStyles={dropDown}
                />
            </View>
            <View style={descriptionWrapper}>
                <Text style={descriptionText}>Description:</Text>
                <View style={descriptionInputWrapper}>
                    <TextInput
                        style={descriptionInput}
                        multiline={true}
                        placeholder="Enter description"
                        placeholderTextColor="#FFFFFF"
                    />
                </View>
            </View>
            <View style={middleView}>
                <Link href={'/heatmap'} asChild>
                    <IMRS_Button title={'EMERGENCY!'} color='white' backgroundColor={ColorsOp.RO} />
                </Link>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB
    },
    warningMsgWrapper: {
        marginTop: screenHeight * .02
    },
    warningMsgText: {
        color: ColorsOp.RO,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    descriptionWrapper: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: screenHeight * .02
    },
    locationWrapper: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: screenHeight * .02
    },
    descriptionText: {
        fontSize: 18,
        color: ColorsOp.RO
    },
    descriptionInputWrapper: {
        backgroundColor: '#444',
        borderRadius: 10,
        marginTop: 5,
    },
    descriptionInput: {
        color: '#FFFFFF',
        fontSize: 16,
        padding: 10,
        height: 150, 
        textAlignVertical: 'top',
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
    middleView: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 200,
    },
});

