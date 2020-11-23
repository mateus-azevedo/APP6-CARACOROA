import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Rotas from './src/Rotas';

export default class app6 extends Component {
  render() {
    return(
      <Rotas />
    );
  }
}

AppRegistry.registerComponent(appName, () => app6);
