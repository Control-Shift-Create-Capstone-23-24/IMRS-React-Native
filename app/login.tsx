import { View, Text, Button, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../const/colorsOp'
import {Requester} from "../dynamodb/requests";

export default function Login() {

  const [username, onChangeUsernameField] = React.useState('');
  const [password, onChangePasswordField] = React.useState('');

  let requester = new Requester('us-east-1', 'UserID', 'latest')

  // Uses the username to get the password from the database
  function getPassword(username: string) {
    requester.get([{Key: 'Username', value: {S: username}}])
  }

  const { 
      container, 
      title, 
      titleText,
      credentials,
      userPassInput,
      userPassText,
      loginButton,
      bottom
    } = styles

  return (
    <View style={container}>
      <View style={title}>
      <Text style={titleText}>Login</Text>
      </View>
      <View style={credentials}>
        <View>
          <Text style={userPassText}>Username</Text>
          <TextInput
            style={userPassInput}
            autoCapitalize='none'
            autoComplete={"username"}
            onChangeText={onChangeUsernameField}
            value={username}
            placeholder={'Username'}
          />
        </View>
        <View>
          <Text style={userPassText}>Password</Text>
          <TextInput
            style={userPassInput}
            autoCapitalize='none'
            autoComplete={"current-password"}
            onChangeText={onChangePasswordField}
            value={password}
            placeholder={'Password'}
          />
        </View>
        <View style={loginButton}>
        <IMRS_Button title={'Login'} onPress={ ()=> [] } color='white' backgroundColor= {ColorsOp.RO} />
        </View>
      </View>
      <View style={bottom}>
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
        <View>
          <Link href="/status" asChild>
            <Button title="open Status page" />
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
    flex: 2,
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
    padding: 10,
    marginTop: Dimensions.get('window').height / 400,
    marginBottom: Dimensions.get('window').height / 30,
    backgroundColor: 'white'
  },
  bottom: {
    flex: 2,
    justifyContent: "center",
  },
  userPassText: {
    //paddingBottom: 10,
    //paddingTop: 10,
    marginBottom: Dimensions.get('window').height / 400,
    fontSize: 24,
    color: ColorsOp.RO,
    textAlign: 'center'
  },
  titleText: {
    alignSelf: "center",
    fontSize: 60,
    color: ColorsOp.RO
  },
  loginButton: {
    marginTop: Dimensions.get('window').height / 400,
    paddingHorizontal: Dimensions.get('window').width / 10,
    alignItems: 'center',
  }
});