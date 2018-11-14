

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyShow);
import React, {Component} from 'react';
import App from './src/Components/App';


export default class MyShow extends Component {
  render() {
    return (
        <App />
    );
  }
}
