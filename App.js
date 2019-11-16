import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import store from './store'

import { Provider } from 'react-redux'

import PuppetScreen from './Components/PuppetScreen'
import SingleEventScreen from './Components/SingleEventScreen'

const AppNavigator = createStackNavigator({
  Puppet: {
    screen: PuppetScreen,
  },
  Events: {
    screen: SingleEventScreen,
  },
}, {
    initialRouteName: 'Puppet',
});

const AppContainer = createAppContainer(AppNavigator);
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />  
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
})  

export default App
