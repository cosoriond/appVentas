import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginForm from './src/login/components/loginForm';
import Article from './src/login/components/article';
class App extends Component {
  state = {
    loggerIn: true,
  };

  renderContent = () => {
    switch (this.state.loggerIn) {
      case true:
        return <LoginForm />;
      case false:
        return <Article />;
    }
  };
  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
