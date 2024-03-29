import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import IMRS_Button from "../components/IMRS_button";
import Login_Button from '../components/Alt_Button';
import ColorsOp from '../const/colorsOp'
import { LinearGradient } from "expo-linear-gradient";
import { useGetLocation } from '../hooks/useGetLocation';

export default function landingPage_alt() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.title}>IMRS</Text>
                <Text style={styles.subtitle}>Incident Monitoring and Response System</Text>
            </View>
            <View style={styles.middleView}>
                <Link href={'/login_alt'} asChild>
                    <Login_Button title={'Log In'}/>
                </Link>
                <Link href={'/register_alt'} asChild>
                    <Login_Button title={'Register'} />
                </Link>
            </View>
            <View style={styles.bottomView}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 50,
    },
    topView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 150,
        marginBottom: 20,
    },
    middleView: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        height: 120,
    },
    bottomView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 40,
        textAlign: 'center',
    },
    title: {
        fontSize: 48,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
})