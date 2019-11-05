import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the museum app!</Text>
      </View>
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
