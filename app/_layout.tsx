import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTintColor: '#FF5733'//red orange
            }}
        >
            <Stack.Screen name="index" options={{
                title: 'Home'
            }} />
            <Stack.Screen name="register" options={{
                title: 'Register',
                headerRight: () => (
                    <Button title='Register' onPress={() => { }} />
                )
            }} />
            <Stack.Screen name="modal" options={{
                title: 'Modal Modal',
                presentation: 'modal'
            }} />
            <Stack.Screen name="heatmap" options={{
                title: 'IMRS'
            }} />
            <Stack.Screen name="[missing]" options={{
                title: '404'
            }} />
        </Stack>
    )
}