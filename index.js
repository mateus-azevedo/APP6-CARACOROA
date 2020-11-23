import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class app6 extends Component {
  render() {
    return(
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Stack key='root'>
          <Scene key='principal' component={Principal} initil title='Cara ou Coroa' />
          <Scene key='sobrejogo' component={SobreJogo} title='Sobre o Jogo' />
          <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos' />
        </Stack>
      </Router>
    );
  }
}

AppRegistry.registerComponent(appName, () => app6);
