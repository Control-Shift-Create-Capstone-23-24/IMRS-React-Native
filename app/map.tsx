import {Button, Text, View, StyleSheet} from "react-native";
import {Link} from "expo-router";
import React from "react";
import MapView from "react-native-maps";

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});