/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-community/async-storage';



global.Parse = require('parse/react-native')
global.Parse.setAsyncStorage(AsyncStorage)
global.Parse.initialize('myAppId')
global.Parse.serverUrl = 'http://localhost:1337/parse'

AppRegistry.registerComponent(appName, () => App);
