import React from 'react';
import { Image, View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { css } from '../../assests/css/css';

export default function App() {
  return (
    <View style={css.container}>
      <View style={css.cabecalho}>
        <Text h1>IAB</Text>
        <Image style={css.logo} source={require('../../assests/img/logo.png')} />
      </View>
      <View style={css.inputs}>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          keyboardType="email-address"
        />
        <Input placeholder="Senha" leftIcon={{ type: 'font-awesome', name: 'key' }} secureTextEntry={true} />
      </View>
      <View style={css.buttons}>
        <Button icon={<Icon name="check-circle" size={20} color="white" type="font-awesome" />} title=" Entrar" />
      </View>
    </View>
  );
}
