/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';
import Menu from './src/components/Menu.js';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Menu);
