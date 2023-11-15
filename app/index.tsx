import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/register" asChild>
        <Button title="open Register modal" />
      </Link>
    </View>
  )
}