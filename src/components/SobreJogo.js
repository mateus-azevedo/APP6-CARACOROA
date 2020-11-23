import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SobreJogo extends Component {
  render() {
    return(
      <View style={styles.principal}>
        <View>
          <Text style={styles.txtJogo}>
            Aqui podem ser apresentadas informações sobre informações do jogos
          </Text>
        </View>

        <View style={styles.subTela}>
          <Text style={styles.txtJogo}>
            Desenvolvido em 2020 – Curso Udemy Desenvolvedor Multiplataforma Android/IOS com React e Redux
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61BD8C',
    padding: 20,
    justifyContent: 'space-between'
  },
  subTela: {
    marginBottom: 10
  },
  txtJogo: {
    textAlign: 'center',
    fontSize: 18
  }
});
