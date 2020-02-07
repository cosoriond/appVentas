import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import {Button} from 'react-native-elements';
class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Hola</Text>
        <Button title="BUTTON" />
        <Divider style={{ backgroundColor: 'blue' }} />
      </Home>
    );
  }
}

// const AppNavigator = createStackNavigaion({
//     Home: App
// });

// const AppContainer = createAppContainer(AppNavigator);

export default App;
