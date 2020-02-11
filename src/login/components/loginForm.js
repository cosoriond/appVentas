import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from '../containers/login';

function LoginForm(props) {
  return (
    <View style={styles.container}>
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
