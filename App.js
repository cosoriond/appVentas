import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginForm from './src/login/components/loginForm';
import Article from './src/login/containers/article';
import firebase from 'firebase';
class App extends Component {
  state = {
    loggerIn: null,
  };

  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBTbKmGfQLCxv3weVHEZ0D_u2iQfbAkgIc',
      authDomain: 'appventas-2a26e.firebaseapp.com',
      databaseURL: 'https://appventas-2a26e.firebaseio.com',
      projectId: 'appventas-2a26e',
      storageBucket: 'appventas-2a26e.appspot.com',
      messagingSenderId: '1073029466984',
      appId: '1:1073029466984:web:4c7080228222157b4a24dd',
      measurementId: 'G-BD8BWG2G8M',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;

      case true:
        return <Article />;

      default:
        return <Text>Hola</Text>;
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
