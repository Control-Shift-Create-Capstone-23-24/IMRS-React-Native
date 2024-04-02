import { Redirect } from "expo-router";
import { Platform } from "react-native";

export default function Index() {
    // Web version redirect to here
    if (Platform.OS === 'web') {
        console.log('Web browser detected. Redirecting to WebLandingPage.')
        return <Redirect href="/webLandingPage"/>
    }
    // IOS and Android version redirect to here
    return <Redirect href="/landingPage" />
}