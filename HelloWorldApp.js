import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ fontSize:30}}>Bem-Vindo App Teste</Text>
        <Text style={{ fontSize:14, color:'#666'}}>Dev Lucas Maestro Carlos</Text>
      </View>
    );
  }
}