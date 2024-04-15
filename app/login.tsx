import { View, Text, Button, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../const/colorsOp'
import {verifyLogin} from "../fetch/UsernamePasswordVerifyDynamoDB";
import { Redirect } from "expo-router";
import {Account} from "./account";

export default function Login() {

  let role: string | undefined = undefined
  let loginID: number | undefined = undefined
  let pass: string | undefined = undefined

  const [redirectPath, setRedirectPath] = React.useState<string | null>(null);


    const [username, onChangeUsernameField] = React.useState('');
    const [password, onChangePasswordField] = React.useState('');
    let user: Account
    const handleLogin = (): void => {
    var usrName = username
    var pass = password

    if( usrName === '' || pass === '') {
      console.error('User\'s input values for username and/or password is empty. Aborting handleLogin()')
    }
    console.log('User\'s input values for username and password:', usrName, pass)
    verifyLogin(usrName, pass)
        .then(response => {
            if(typeof response !== 'string') {
                console.error('Login verification response is not a string:', response);
            }
            // Remove square brackets from the string for JSON parser
            var bracketlessResponse = response.replace(/[\[\]]/g, '')
            console.log('Login verification result: ', response);
            try {
                // Paser JSON response from the server and save to variables
                const parsedResponse = JSON.parse(bracketlessResponse);
                console.log('Parsed server response for Login:', parsedResponse);
                loginID = parsedResponse['LoginID']['N'];
                role = parsedResponse['Role']['S'];
                pass = parsedResponse['Password']['S'];
                console.log('Server login response data: ','Login ID:', loginID, 'Role:', role, 'Username:', usrName)
            } catch (error) {
                console.error('server response parsing error on login:', error);
            }
            // Set the user of the app to the credentials sent by the server.
            Account.user = new Account(loginID, username, role)
            if(role === 'admin') {
                // redirect to admin page
                console.log('Redirecting to admin page')
                setRedirectPath('adminStartPage')
            }
            if(role === 'student') {
                // redirect to status/student page
                console.log('Redirecting to student status page')
                setRedirectPath('status')

            }
            if(role === 'firstresponder') {
                // redirect to firstresponder page
                console.log('Redirecting to firstresponder page')
                setRedirectPath('heatmap')
            }
            if(role === 'dispatch') {
                // redirect to dispatch/heatmap page
                console.log('Redirecting to dispatch page')
               setRedirectPath('heatmap')
            }
        })
        .catch(error => {
          console.error('Login verification failed:', error);
        });
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

  // @ts-ignore
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
            secureTextEntry={true}
          />
        </View>
        <View style={loginButton}>
        <IMRS_Button title={'Login'} onPress={ handleLogin } color='white' backgroundColor= {ColorsOp.RO} />
            {redirectPath && <Redirect href={redirectPath} />}
        </View>
      </View>
      <View style={bottom}>
        {/* <View>
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
        </View> */
        <View>
          <Link href="/operator.tsx" asChild>
            <Button title="open Status page" />
          </Link>
        </View>}
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
    padding: 10,
    backgroundColor: 'white'
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
