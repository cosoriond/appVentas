import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from '../../screens/components/input';
function LoginForm() {
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      <Input 
        placeholder="Ingresa tu Email"
        value=""  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginForm;
