/* eslint-disable prettier/prettier */

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
   
      },
    //   requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
