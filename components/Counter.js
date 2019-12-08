import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>Counter:</Text>
        <Text style={{ fontSize: 20 }}>{this.props.count}</Text>
        <TouchableOpacity onPress={this.props.increaseCount}>
          <Text>increase</Text>
        </TouchableOpacity>
        <View></View>
        <TouchableOpacity onPress={this.props.decreaseCount}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Counter;
