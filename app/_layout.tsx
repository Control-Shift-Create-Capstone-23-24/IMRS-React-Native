import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ColorsOp from "../const/colorsOp";

export default function _layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: ColorsOp.RO
                },
                headerTintColor: '#FF5733'//red orange
            }}
        >
            <Stack.Screen name="landingPage" options={{
                title: 'landingPage'
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