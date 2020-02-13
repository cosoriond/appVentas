import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        // onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
  label: {
    padding: 5,
    paddingBottom: 0,
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 18,
    width: '100%',
    backgroundColor: '#FFF',
  },
});

export default Input;
