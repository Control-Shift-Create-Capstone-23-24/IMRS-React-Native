import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View, Switch, Dimensions, Pressable } from "react-native";
import ColorsOp from "../const/colorsOp";
import * as Location from 'expo-location';
import { insertNewLocation } from "../fetch/insertNewLocation";
import RadiusSwitch from "../components/RadiusSwitch";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const buttonWidth = screenWidth * .75;
const buttonHeight = screenHeight * .06;

const Status = () => {
    let shooterDescription:string = "White male, mid 30's, 5'10, 200lb, black shirt, blue jean, red cap" //temp
    let shootingLocation:string = "Pleasant Park"

    const [currentStatus, setStatus] = useState('Clear');
    const [statusColor, setStatusColor] = useState('#2aad2c');
    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);

    const fetchLocation = async () => {
        console.log("fetching location");
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
            //console.log(statusColor)
            if(lat !== null || lon !== null) {
                insertNewLocation(lat.toString(), lon.toString(), getStatusColor(statusColor), Account.user.getUserName())
                // Account.user.getUserName()
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    const getStatusColor = (color: string) => {
        if(color === '#2aad2c'){
            return 'Green'
        }
        else if(color === '#dbc70f'){
            return 'Yellow'
        }
        else if(color === '#db0f0f'){
            return 'Red'
        }
        else{
            return 'Grey'
        }
    }

    const handleStatusChange = (status : number) => {

        
        //console.log(status);
        if(status == 0 ) {
            setStatus('Clear');
            setStatusColor('#2aad2c')
        }
        else if(status == 1) {
            setStatus('Only Hear');
            setStatusColor('#dbc70f');
        }
        else if(status == 2) {
            setStatus('See and Hear');
            setStatusColor('#db0f0f');
        }

        fetchLocation();
        //console.log(currentStatus);
        }

    const { 
        // dupe description text, check styling
        container, 
        warningMsgText, 
        warningMsgWrapper,
        descriptionText,
        descriptionWrapper,
        locationText,
        locationWrapper,
        titleContainer,
        titleText,
        currentStatusContainer,
        currentStatusTitle,
        currentStatusText,
        statusSectionContainer,
        statusContainer,
        statusButton,
        clearButton,
        onlyHearButton,
        seeAndHearButton,
        buttonText
    } = styles

    return (
        <View style={container}>
            <View style={warningMsgWrapper}>
                <Text style={warningMsgText}>Warning</Text>
                <Text style={warningMsgText}>Active Shooter in your Area</Text>
            </View>
            <View style={currentStatusContainer}>
                <Text style={currentStatusTitle}>Your Reported Status</Text>
                <Text style={[styles.currentStatusText, {color: statusColor}]}>{currentStatus}</Text>
            </View>
            <View style={descriptionWrapper}>
                <Text style={descriptionText}>Description:</Text>
                <Text style={descriptionText}>{shooterDescription}</Text>
            </View>
            <View style={locationWrapper}>
                <Text style={locationText}>Location: {shootingLocation}</Text>
            </View>
            <View>
            <View style={statusContainer}>
                    <View style={statusButton}>
                        <Pressable onPress={() => handleStatusChange(0)} style={clearButton}>
                            <Text style={buttonText}>Clear</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={statusContainer}>
                    <View style={statusButton}>
                        <Pressable onPress={() => handleStatusChange(1)} style={onlyHearButton}>
                            <Text style={buttonText}>Only Hear</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={statusContainer}>
                    <View style={statusButton}>
                    <Pressable onPress={() => handleStatusChange(2)} style={seeAndHearButton}>
                        <Text style={buttonText}>See and Hear</Text>
                    </Pressable>
                    </View>
                </View>
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
    locationText: {
        color: ColorsOp.RO,
        fontSize: 20,
        alignContent: 'flex-start'
    },
    titleContainer: {
        alignItems: 'center',
        paddingTop: screenHeight * 0.05
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    descriptionText: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    currentStatusContainer: {
        paddingTop: screenHeight * 0.025,
        alignItems: 'center'
    },
    currentStatusTitle: {
        fontSize: 25,
        color: '#FFFFFF'
    },
    currentStatusText: {
        fontSize: 30,
        marginBottom: screenHeight * .09,
    },
    statusSectionContainer:  {
        paddingTop: screenHeight * 0.05
    },
    statusContainer: {
        paddingBottom: screenHeight * 0.05
    },
    statusButton: {
        alignItems: 'center'
    },
    clearButton: {
        
        backgroundColor: '#2aad2c',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3
    },
    onlyHearButton:{
        backgroundColor: '#b8a70d',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3
    },
    seeAndHearButton: {
        backgroundColor: '#db0f0f',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 32
    }
})

export default Status