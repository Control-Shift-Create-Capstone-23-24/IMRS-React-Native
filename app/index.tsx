import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";

export default function Start() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.topText}>Incident Monitoring and Response System</Text>
            </View>
            <View style={styles.TopView}>
                <Text style={styles.title}>IMRS</Text>
            </View>
            <View style={styles.MiddleView}>
                <Link href='/login' asChild>
                    <Button title='login' />
                </Link>
                <Link href='/register' asChild>
                    <Button title='Register' />
                </Link>
            </View>
            <View style={styles.BottomView}>

            </View>
        </View>
    )
}

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
        fontSize: 20,
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