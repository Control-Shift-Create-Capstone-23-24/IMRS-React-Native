/**
 * @file This file defines the Start component of the application.
 * It includes the definition of several views and their styles.
 *
 * @module app/index
 */

import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";
import IMRS_Button from "../components/IMRS_button";

/**
 * This is the default function that returns the Start component of the application.
 * It uses the `View`, `Text`, `Button`, `StyleSheet` components from `react-native` and `Link` from `expo-router`.
 *
 * @returns {JSX.Element} The Start component of the application.
 */
export default function Start() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            </View>
            <View>
                <Text style={styles.topText}>Incident Monitoring and Response System</Text>
            </View>
            <View style={styles.TopView}>
                <Text style={styles.title}>IMRS</Text>
            </View>
            <View style={styles.MiddleView}>
                <Link href={'/login'} asChild>
                    <IMRS_Button title={'login'}/>
                </Link>
                <Link href={'/register'} asChild>
                    <IMRS_Button title={'register'}/>
                </Link>
            </View>
            <View style={styles.BottomView}>

            </View>
        </View>
    )
}


/**
 * This is the StyleSheet for the Start component.
 * It defines the styles for the different parts of the Start component.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
    },
    MiddleView: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 200,
    },
    BottomView: {
        flex: 3,
        justifyContent: 'space-between',

    },
    topText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'red',

    }
})