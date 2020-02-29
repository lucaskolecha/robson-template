/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/index';
import { name as appName } from './app.json';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontMaterial from 'react-native-vector-icons/MaterialIcons'
import 'react-native-gesture-handler';

IconFontAwesome.loadFont()
IconFontMaterial.loadFont()

AppRegistry.registerComponent(appName, () => App);
