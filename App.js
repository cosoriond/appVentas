import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

class App extends Component {
  render() {
    return(
      <Home>
        <Header />
        <Text>Hola</Text>
      </Home>
    );
  }
}

// const AppNavigator = createStackNavigaion({
//     Home: App
// });

// const AppContainer = createAppContainer(AppNavigator);

export default App;
