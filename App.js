import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './Redux/store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>This is the museum app!</Text>
        </View>
      </Provider>
    )
  }
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
