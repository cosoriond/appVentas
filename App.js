import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import {Button} from 'react-native-elements';
import LoginForm from './src/login/components/loginForm';
class App extends Component {
  state = {
    loggerIn: true
  };

  renderContent = () => { 
    switch (this.state.loggerIn) {
      case true:
        return <LoginForm />;
      case false:
        return <Text>Contenido</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
