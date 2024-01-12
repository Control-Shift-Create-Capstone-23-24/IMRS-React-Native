import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import ColorsOp from "./ColorsOp";

interface props {
    text: string,
    backgroundColor: string,

}

const RadiusSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const { text, backgroundColor } = props
    const { container, switchText, statusSwitch } = styles

    return (
        <View style={{...styles.container, backgroundColor}}>
            <Text style={switchText}>{text}</Text>
            <Switch 
                style={statusSwitch}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /> 
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: 120,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    switchText: {
        color: 'black',
        fontSize: 20,
        width: '80%',
        fontWeight: 'bold'
    },
    statusSwitch: {
        paddingLeft: 20,
        borderWidth: 2
    }
})

RadiusSwitch.defaultProps = {
    text: 'No Text',
    backgroundColor: 'grey'
}

export default RadiusSwitch