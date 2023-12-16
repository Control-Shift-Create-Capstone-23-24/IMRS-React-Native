import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Old_heatmapTsx from "./heatmap";
import IMRS_Button from "../components/IMRS_button";
import heatmap from "./heatmap";

export default function Login() {
  const [username, onChangeUsernameField] = React.useState('');
  const [password, onChangePasswordField] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login Page</Text>
      </View>
      <View style={styles.credentials}>
        <View>
          <Text style={styles.usernameText}>Username</Text>
          <TextInput
            style={styles.username}
            autoComplete={"username"}
            onChangeText={onChangeUsernameField}
            value={username}
            placeholder={'Username'}
          />
        </View>
        <View>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            style={styles.password}
            autoComplete={"current-password"}
            onChangeText={onChangePasswordField}
            value={password}
            placeholder={'Password'}
          />
        </View>
        <View>
          <IMRS_Button title={'Login'} onPress={ () => {} } />
        </View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Link href="/register" asChild>
            <Button title="open Register modal" />
          </Link>
        </View>
        <View>
          <Link href="/heatmap" asChild>
            <Button title="open Heatmap" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    flex: 3,
    justifyContent: "center",
  },
  credentials: {
    flex: 2,

    justifyContent: "space-around",
    alignItems: "center"
  },
  username: {
    borderWidth: 1,
    width: 300,
    height: 35
  },
  password: {
    borderWidth: 1,
    width: 300,
    height: 35
  },
  bottom: {
    flex: 2,
    justifyContent: "center",
  },
  usernameText: {
    paddingBottom: 10,
    fontSize: 20,
  },
  passwordText: {
    paddingBottom: 10,
    fontSize: 20,

  },
  titleText: {
    alignSelf: "center",
    fontSize: 30,
  },
});
