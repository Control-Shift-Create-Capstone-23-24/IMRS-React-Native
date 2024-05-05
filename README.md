# LifeShield: Active Shooter Alert & Response App

<img src="./img/landingpage.png" alt="Logo" width="198" height="352">

***

The purpose of the document is to explain how the IMRS application will run, and how to run it on your own device. IMRS is an application meant to assist first responders in a school shooter situation. It will allow users to display their statuses on a heat map that will be shown to first responders. F.R. 's can use this information to determine the general location of the shooter in the building, and allow them to subdue the threat quickly and save as many lives as possible.

***

## Key Features

- **Real-Time Heat Maps:** Visualize hotspots where danger is most concentrated using heat maps updated in real-time.
- **Immediate Alerts:** Receive instant notifications if an active shooter is reported near you.
- **Safety Navigation:** Guided navigation to the nearest exits or designated safe zones.
- **Emergency Contacts:** Quick access to contact emergency services or notify loved ones of your status.


<img src="./img/heatmap.png" alt="Logo" width="198" height="352">

## Build Setup

### MacOS

1. Clone then cd in to the project.
2. Cd in to the ios directory and run `pod install`.
3. In appdeligate.mm add the following code as specified below ``[GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console``.
```
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```
4. Cd in to the ios dir and run ``pod install``.
5. Cd in to the project root and run ``npm install``.
6. Run the project with ``npx expo start``.

Note: You will need to select either IOS with "i" or Android with "a" or Web with "w" after running the project.

***

- [Google Play Store](link_to_google_play)
- [Apple App Store](link_to_apple_store)

## Usage

After installation, open the app and allow necessary permissions for location and notifications to ensure full functionality.

## Support

For support, contact us at [support@lifeshieldapp.com](mailto:support@lifeshieldapp.com).

## Contributing

We welcome contributions from the community. Please visit our [GitHub repository](link_to_github) for more details on how you can contribute.

## License

This software is licensed under the MIT License. See the LICENSE file for more details.

---

*LifeShield - Protecting lives, one alert at a time.*

