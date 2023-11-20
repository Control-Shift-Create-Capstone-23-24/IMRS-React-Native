import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Old_heatmapTsx from "./heatmap";
import IMRS_Button from "../components/IMRS_button";
import heatmap from "./heatmap";
import ColorsOp from '../components/ColorsOp'

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
          <Text style={styles.userPassText}>Username</Text>
          <TextInput
            style={styles.userPassInput}
            autoComplete={"username"}
            onChangeText={onChangeUsernameField}
            value={username}
            placeholder={'Username'}
          />
        </View>
        <View>
          <Text style={styles.userPassText}>Password</Text>
          <TextInput
            style={styles.userPassInput}
            autoComplete={"current-password"}
            onChangeText={onChangePasswordField}
            value={password}
            placeholder={'Password'}
          />
        </View>
        <View style={styles.loginButton}>
          <IMRS_Button title={'Login'} onPress={ () => {} } color='white' backgroundColor='#FF5733' />
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
    backgroundColor: ColorsOp.JB
  },
  title: {
    flex: 3,
    justifyContent: "center",
  },
  credentials: {
    flex: 2,
    justifyContent: "space-around",
    padding: 30,
  },
  userPassInput: {
    borderWidth: 1,
    height: 40,
    padding: 10
    
  },
  bottom: {
    flex: 2,
    justifyContent: "center",
  },
  userPassText: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    color: ColorsOp.RO,
    textAlign: 'center'
  },
  titleText: {
    alignSelf: "center",
    fontSize: 50,
    color: ColorsOp.RO
  },
  loginButton: {
    paddingTop: 10,
    alignItems: 'center'
  }
});
