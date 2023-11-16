import {View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";

export default function Start() {
  return (
      // Start screen UI design with a header, a large title and a log in and register button.
      // The login and register button will be linked to the log in and register screen.
        <View style={styles.container}>
            <View>
                <Text style={styles.topText}>Incident Monitoring and Response System</Text>
            </View>
            <View style={styles.TopView}>
                <Text style={styles.title}>IMRS</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.BottomMiddleView}>
                    <Link href='/login' asChild>
                        <Button title='Login' />
                    </Link>
                    <Link href='/register' asChild>
                        <Button title='Register' />
                    </Link>
                </View>
            </View>
        </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    TopView: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'orange',
    },
    BottomMiddleView: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 220,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    BottomView: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'blue'
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 0,
        marginLeft: 20
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        marginLeft: 90,
        marginRight: 90
    }
})