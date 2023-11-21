import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorsOp from "../components/ColorsOp";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB
    }
})

export default Home