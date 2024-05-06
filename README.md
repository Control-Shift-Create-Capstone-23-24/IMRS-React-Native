# IMRS: INCIDENT MONITORING  AND RESPONSE SYSTEM

<img src="./img/landingpage.png" width="150" height="300">

***

The purpose of the document is to explain how the IMRS application will run, and how to run it on your own device. IMRS is an application meant to assist first responders in a school shooter situation. It will allow users to display their statuses on a heat map that will be shown to first responders. F.R. 's can use this information to determine the general location of the shooter in the building, and allow them to subdue the threat quickly and save as many lives as possible.

***

## Setup

### MacOS

1. Clone then cd in to the project.
2. You will need to have Xcode, Xcode commandline tools, and Xcode'sq
3. IOS simulator installed.
3. Cd in to the ios directory and run `pod install`.
4. In appdeligate.mm file add the following code as shown below ``[GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console``.
```
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```
5. Cd in to the ios dir and run ``pod install``.
6. Cd in to the project root and run ``npm install``.
7. Run the project with ``npx expo start``.

Note: You will need to select either IOS with "i" or Android with "a" or Web with "w" in the terminal after running the project.

***

<img src="./img/heatmap.png" alt="Logo" width="150" height="300">

### Windows

***
Install Android Stuido
```bash
winget install -e --id Google.AndroidStudio
```
Launch Android Studio and update to the latest version.

In the Main Menu under Tools open the Device Manager and Create a Virtual Device (make sure it's a phone). Select an image that's on Android version 14

Remember to open Android Studio and start your Virtual Machine whenever you want to run IMRS on Android.


Create a [gihub personal acccess token](https://github.com/settings/tokens/new?description=IMRS%20GitHub%20plugin&scopes=repo%2Cgist%2Cread%3Aorg%2Cworkflow%2Cread%3Auser%2Cuser%3Aemail) (if needed) then clone the repository with one of the following for http and ssh respectively.

http

```bash
git clone https://github.com/Control-Shift-Create-Capstone-23-24/IMRS-React-Native.git
```

ssh

```bash
git clone git@github.com:Control-Shift-Create-Capstone-23-24/IMRS-React-Native.git
```

Inside the project directory, install npm packages

```bash
npm install
```

Add the Google Maps API Key. Instructions can be found in the "Google Maps API" Key section below.

***

*Currently not available on any App Store.*
- [Google Play Store](link_to_google_play)
- [Apple App Store](link_to_apple_store)

## Usage

### Student/Teacher
Students and faculty will be trained how to use the app in advance.
When a Geofence is activated on the app, they will be able to communicate their status of eirther "Cant see,
Cant hear," "Cant see, Can hear," "Cant see, Cant hear" the active shooter.
This gives valuable data to help first responses locate the shooter faster. 

### First Responders
First responders will be able to see the heat map of the building, and the status of the students and faculty. The heat map will show the general location of the shooter to help them determine the best course of action to take.

---


