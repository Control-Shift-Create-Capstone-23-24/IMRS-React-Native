import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../const/colorsOp'
import { LinearGradient } from "expo-linear-gradient";
import { useGetLocation } from '../hooks/useGetLocation';


const START = {x: 0.5, y: 0}
const END = {x: 0.5, y: 1}
const GRADIENT_COLORS = ['#ff5733', ColorsOp.JB]
const GRADIENT_LOCATIONS = [0, 0.45,1]

export default function LandingPage() {
    const {
        container,
        topView,
        title,
        topText,
        middleView,
        bottomView
    } = styles

    return (
        <SafeAreaView style={styles.container} >
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'stretch',
            }}
            >
                <LinearGradient colors={GRADIENT_COLORS} style={styles.container} locations={GRADIENT_LOCATIONS} start={START} end={END} >
                    <View style={topView}>
                        <Text style={title}>IMRS</Text>
                    </View>
                    <View>
                        <Text style={topText}>Incident Monitoring and Response System</Text>
                    </View>
                    <View style={middleView}>
                        <Link href={'/login'} asChild>
                            <IMRS_Button title={'login'} color='white' backgroundColor= {ColorsOp.RO} />
                        </Link>
                        <Link href={'/registeroptions'} asChild>
                            <IMRS_Button title={'register'} color='white' backgroundColor= {ColorsOp.RO} />
                        </Link>
                    </View>
                    <View style={bottomView}>

                    </View>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
    },
    middleView: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 200,
    },
    bottomView: {
        flex: 3,
        justifyContent: 'space-between',
    },
    topText: {
        fontSize: 25,
        //fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 150,
        color: ColorsOp.RO,
    },
})