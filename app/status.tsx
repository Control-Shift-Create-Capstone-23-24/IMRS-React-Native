import React, { useState } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
import ColorsOp from "../components/ColorsOp";
import RadiusSwitch from "../components/RadiusSwitch";

const Status = () => {
    let shooterDescription:string = "White male, mid 30's, 5'10, 200lb, black shirt, blue jean, red cap" //temp
    let shootingLocation:string = "Pleasnt Park"

    const { 
        container, 
        warningMsgText, 
        warningMsgWrapper,
        descriptionText,
        descriptionWrapper,
        locationText,
        locationWrapper
    } = styles

    return (
        <View style={container}>
            <View style={warningMsgWrapper}>
                <Text style={warningMsgText}>Warning</Text>
                <Text style={warningMsgText}>Active Shooter in your Area!</Text>
            </View>
            <View style={descriptionWrapper}>
                <Text style={descriptionText}>Description:</Text>
                <Text style={descriptionText}>{shooterDescription}</Text>
            </View>
            <View style={locationWrapper}>
                <Text style={locationText}>Location:</Text>
                <Text style={locationText}>{shootingLocation}</Text>
            </View>
            <View>
                <RadiusSwitch 
                    backgroundColor= {ColorsOp.LG}
                    text='I have Not Seen and I have Not Heard the shooter' 
                />
                <RadiusSwitch 
                    backgroundColor='yellow' 
                    text='I have Not Seen the shooter but I Can Hear the shooter'
                />
                <RadiusSwitch 
                    backgroundColor= {ColorsOp.BR}
                    text='I Can See or Have Seen the shooter and Can Hear the shooter'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB
    },
    warningMsgWrapper: {
        paddingTop: 60,
        paddingBottom: 40
    },
    warningMsgText: {
        color: ColorsOp.RO,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    descriptionWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    descriptionText: {
        color: ColorsOp.RO,
        fontSize: 20
    },
    locationWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    locationText: {
        color: ColorsOp.RO,
        fontSize: 20,
        alignContent: 'flex-start'
    }
})

export default Status