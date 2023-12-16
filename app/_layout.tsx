import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

/**
 * This is the default function that returns the layout of the application.
 * It uses the `Stack` component from `expo-router` to define the navigation stack.
 *
 * @returns {JSX.Element} The layout of the application.
 */
export default function _layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white'

                },
                headerTintColor: 'red'
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
            <Stack.Screen name="map" options={{
                title: 'IMRS'
            }} />
            <Stack.Screen name="[missing]" options={{
                title: '404'
            }} />
        </Stack>
    )
}