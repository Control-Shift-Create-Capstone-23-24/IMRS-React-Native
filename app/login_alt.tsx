import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import IMRS_Button from "../components/IMRS_button";
import Login_Button from "../components/Alt_Button";
import ColorsOp from '../const/colorsOp'
import {verifyLogin} from "../fetch/UsernamePasswordVerifyDynamoDB";
import { Redirect } from "expo-router";
import {Account} from "./account";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {

  let role: string | undefined = undefined
  let loginID: number | undefined = undefined
  let pass: string | undefined = undefined

  const [redirectPath, setRedirectPath] = React.useState<string | null>(null);

    const [loginError, setLoginError] = React.useState('');
    const [username, onChangeUsernameField] = React.useState('');
    const [password, onChangePasswordField] = React.useState('');
    let user: Account
    const handleLogin = (): void => {
    var usrName = username
    var pass = password

    if( usrName === '' || pass === '') {
      console.error('User\'s input values for username and/or password is empty. Aborting handleLogin()')
      setLoginError('Login failed. Please check your username and password.');
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
               setRedirectPath('http/heatmap')
            }
        })
        .catch(error => {
          console.error('Login verification failed:', error);
        });
  }


  // Use your existing styles
  const { container, bottomView, middleView, topView, titleText, input } = styles;

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.title}>IMRS</Text>
          <Text style={styles.subtitle}>Incident Monitoring and Response System</Text>
        </View>
        <View style={styles.middleView}>
        <Text style={styles.titleText}>Sign in</Text>
        <TextInput
          style={input}
          onChangeText={onChangeUsernameField}
          value={username}
          placeholder={'Username'}
          autoCapitalize="none"
          autoComplete={"username"}
        />
        <TextInput
          style={input}
          onChangeText={onChangePasswordField}
          value={password}
          placeholder="Password"
          autoComplete={"current-password"}
          secureTextEntry
        />
        </View>
        {loginError !== '' && <Text style={styles.errorMessage}>{loginError}</Text>}
        <Login_Button title={'Log In'} onPress={handleLogin} />
        {/* The link for forgot password should go here if planning to implement that */}
        <Link href={'/[missing]'}>
          <Text style={styles.linkText}>Forgot password</Text>
        </Link>
        <Link href={'/register_alt'} asChild>
          <Text style={styles.linkText}>Create new account</Text>
        </Link>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 150,
  },
  topView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  middleView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30%',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    marginVertical: 5,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 48,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
