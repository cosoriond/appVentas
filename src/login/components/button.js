import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Button (props){
  return (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      padding: 20,
      width: '100%',
      backgroundColor: '#1565c0',
      borderRadius: 4,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 18,
    }
  });
export default Button;
