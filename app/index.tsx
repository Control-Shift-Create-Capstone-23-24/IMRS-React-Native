import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../components/ColorsOp'

export default function Start() {
    return (
        <View style={styles.container}>
            <View style={styles.TopView}>
                <Text style={styles.title}>IMRS</Text>
            </View>
            <View>
                <Text style={styles.topText}>Incident Monitoring and Response System</Text>
            </View>
            <View style={styles.MiddleView}>
                <Link href={'/login'} asChild>
                    <IMRS_Button title={'login'} color='white' backgroundColor='#FF5733' />
                </Link>
                <Link href={'/register'} asChild>
                    <IMRS_Button title={'register'} color='white' backgroundColor='#FF5733' />
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
        backgroundColor: ColorsOp.JB
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
        fontSize: 25,
        // fontWeight: 'bold',
        color: 'white',
        // justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 150,
        color: ColorsOp.RO,
    },
})