import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import ColorsOp from "./ColorsOp";

interface props {

}

const RadiusSwitch = (props) => {
    const { container, switchText } = styles
    return (
        <View style={container}>
            <Text style={switchText}>Hello</Text>
            <Switch 
                
            /> 
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        alignContent: 'space-between'
    },
    switchText: {
        color: ColorsOp.RO,
        fontSize: 20
    }
})

export default RadiusSwitch