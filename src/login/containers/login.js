import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';

class Login extends Component {
  onPress = () => console.log('Press Me!');
  render() {
    return (
      <View style={styles.form}>
        <Input label="Email" placeholder="Ingresa tu Email" />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <Button onPress={this.onPress}>Log In</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});

export default Login;
