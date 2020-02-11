import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Logo(props) {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../assets/logond.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 150,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Logo;
