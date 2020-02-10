import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from '../../screens/components/input';
import Button from '../../screens/components/button';
function LoginForm() {
  return (
    <View style={styles.form}>
      <Text>Login Form</Text>
      <Input 
        placeholder="Ingresa tu Email"
        value="Email"  
      />
      <Input 
        placeholder="Ingresa tu contraseña"
        value="Password"
        secureTextEntry  
      />
      <Button>Log In</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1
  }
});

export default LoginForm;
