import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import * as Location from 'expo-location';
import { insertNewLocation } from "../fetch/insertNewLocation";


interface props {
    text: string,
    backgroundColor: string,
    statusColor: string,
}

const RadiusSwitch = (props: any) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const intervalRef:any = useRef<number>();
    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);


    useEffect(() => {
        const fetchLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Permission Denied');
                    return;
                }

                const currentLocation = await Location.getCurrentPositionAsync({});
                setLat(currentLocation.coords.latitude);
                setLon(currentLocation.coords.longitude);
                console.log('Fetched location:', currentLocation);
                console.log(statusColor)
                if(lat !== null || lon !== null) {
                    insertNewLocation(lat.toString(), lon?.toString(), statusColor, 'NA')
                }
                
                // switchLocation(statusColor, lat, lon)
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        if (isEnabled) {
            fetchLocation();

            const interval = setInterval(() => {
                fetchLocation();
            }, 5000); // Fetch location every minute (60000 milliseconds)

            return () => {
                clearInterval(interval);
            };
        }
    }, [isEnabled]);

    const { text, backgroundColor, statusColor } = props
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