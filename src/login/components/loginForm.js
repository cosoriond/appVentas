import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Login from '../containers/login';

function LoginForm() {
  return (
    <View style={styles.container}>
      <Text>Formulario Login</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
});

export default LoginForm;
