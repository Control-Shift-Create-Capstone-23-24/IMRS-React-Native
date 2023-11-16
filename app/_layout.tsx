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
        headerTintColor: 'red'
     }}
     >
        <Stack.Screen name="index" options={{
             title: 'Home' 
        }}/>
        <Stack.Screen name="register/index" options={{
            title: 'Register',
            headerRight: () =>(
                <Button title='Register' onPress={()=>{}} />
            )
        }} />
        <Stack.Screen name="register/login" options={{
            title: 'Login Modal',
            presentation: 'modal' 
        }} />
        <Stack.Screen name="map" options={{
            title: 'IMRS'
        }}/>
        <Stack.Screen name="[missing]" options={{
            title: '404' 
        }} />
    </Stack>
  )
}