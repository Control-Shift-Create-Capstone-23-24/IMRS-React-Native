import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Container from "@react-navigation/native-stack/src/views/DebugContainer";

export default function Page() {
  return (
    <View>
      <Text>Home Page</Text>
      <View>
          <Link href="/register" asChild>
              <Button title="open Register modal" />
          </Link>
      </View>
      <View>
          <Link href="/map" asChild>
              <Button title="open Map" />
          </Link>
      </View>
    </View>
  )
}