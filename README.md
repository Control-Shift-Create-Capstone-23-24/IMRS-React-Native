# IMRS: INCIDENT MONITORING AND RESPONSE SYSTEM

## Overview
IMRS is designed to assist first responders in school shooter situations by displaying user statuses on a heatmap, helping locate the shooter quickly to save lives.

## Setup Instructions

### MacOS
1. **Prerequisites:**
    - Install Xcode, Xcode command line tools, and iOS Simulator.
2. **Project Setup:**
    - Clone the repository and navigate to the project directory.
    - `cd ios` and `pod install`.
    - Insert your Google Maps API Key in `AppDelegate.mm`:
      ```objc
      #import <GoogleMaps/GoogleMaps.h>
      @implementation AppDelegate
      ...
      (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
          [GMSServices provideAPIKey:"_YOUR_API_KEY_"];
          ...
      }
      ```
    - Also make sure that your Podfile deployment target is set to >= 13.4 at the top of your Podfile, eg:
   
   ``platform :ios, '13.4'
      ``
  - Add the following to your Podfile above the use_native_modules! function and run pod install in the ios folder:

```Podfile
rn_maps_path = '../node_modules/react-native-maps'
pod 'react-native-google-maps', :path => rn_maps_path# React Native Maps dependencies
```

  - Navigate back to the project root and run `npm install`.
  - Start the project with `npx expo start`, choose 'i' for iOS.

### Windows
1. **Android Studio Setup:**
    - Install Android Studio:
      ```bash
      winget install -e --id Google.AndroidStudio
      ```
    - Launch and update Android Studio, then create a phone Virtual Device with Android version 14.
2. **Project Setup:**
    - Clone the repository using HTTP or SSH:
      ```bash
      git clone https://github.com/Control-Shift-Create-Capstone-23-24/IMRS-React-Native.git
      # OR
      git clone git@github.com:Control-Shift-Create-Capstone-23-24/IMRS-React-Native.git
      ```
    - Inside the project directory, run `npm install`.


** Note: There are still issues with setting up on Windows, so chose MacOS if you're having issues. **

## Usage

### For Students and Teachers
Trained in advance, users can communicate their visibility and audibility during an incident via the app, aiding first responders in the shooter's localization.

### For First Responders
Access to a heatmap displaying the general location of the shooter and statuses of individuals in the building to optimize response strategies.
