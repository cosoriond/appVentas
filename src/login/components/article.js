import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Article() {
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
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

export default Article;
