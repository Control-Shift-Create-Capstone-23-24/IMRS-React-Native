import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../components/ColorsOp'
import * as Location from 'expo-location'

export default function Start() {
    const { 
        container,
        TopView,
        title,
        topText,
        MiddleView,
        BottomView
    } = styles

    return (
        <View style={container}>
            <View style={TopView}>
                <Text style={title}>IMRS</Text>
            </View>
            <View>
                <Text style={topText}>Incident Monitoring and Response System</Text>
            </View>
            <View style={MiddleView}>
                <Link href={'/login'} asChild>
                    <IMRS_Button title={'login'} color='white' backgroundColor= {ColorsOp.RO} />
                </Link>
                <Link href={'/register'} asChild>
                    <IMRS_Button title={'register'} color='white' backgroundColor= {ColorsOp.RO} />
                </Link>
            </View>
            <View style={BottomView}>

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